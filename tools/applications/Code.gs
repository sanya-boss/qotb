/**
 * Queen of the Baltic — applications backend (Google Apps Script).
 *
 * What it does when someone presses "Submit" on qotb.eu:
 *   1. saves the photos to a Google Drive folder (one sub-folder per applicant);
 *   2. adds a row to the "Applications" (or "Partners") sheet, with the photos shown inside the cells;
 *   3. emails a notification about the new application to NOTIFY_EMAIL.
 *
 * Setup: see docs/applications-setup.md. In short: open the Google Sheet → Extensions → Apps Script,
 * paste this file, run `setup` once, then Deploy → New deployment → Web app (Execute as: Me, Access: Anyone),
 * and put the /exec URL into APPLY_ENDPOINT in site/index.html.
 */

// Where notifications go. Leave empty to send them to the Google account that owns this script.
const NOTIFY_EMAIL = '';
// Name of the Drive folder for applicants' photos (created next to nothing — in "My Drive").
const PHOTOS_FOLDER_NAME = 'Queen of the Baltic — application photos';

const NAVY = '#041e3a';
const STATUSES = ['New', 'In review', 'Contacted', 'Accepted', 'Declined'];
const STATUS_COLORS = { 'New': '#fff4cc', 'In review': '#dbe8f7', 'Contacted': '#e8e0f5', 'Accepted': '#d9f2e0', 'Declined': '#f3dada' };

// Column layout. `w` = width in pixels, `photo` = image column, `wrap` = long text that should wrap.
const SHEETS = {
  apply: {
    name: 'Applications',
    cols: [
      { key: 'n', title: '№', w: 50, center: true },
      { key: 'date', title: 'Date', w: 120 },
      { key: 'status', title: 'Status', w: 110, center: true },
      { key: 'Name', title: 'Full name', w: 180, bold: true },
      { key: 'Email', title: 'E-mail', w: 210 },
      { key: 'Phone', title: 'Phone', w: 150 },
      { key: 'country', title: 'Country', w: 110 },
      { key: 'Instagram', title: 'Instagram', w: 150 },
      { key: 'About', title: 'About herself', w: 320, wrap: true },
      { key: 'photo1', title: 'Photo 1', w: 170, photo: true },
      { key: 'photo2', title: 'Photo 2', w: 170, photo: true },
      { key: 'photo3', title: 'Photo 3', w: 170, photo: true },
      { key: 'folder', title: 'All photos', w: 120, center: true },
      { key: 'notes', title: 'Notes', w: 240, wrap: true }
    ]
  },
  partner: {
    name: 'Partners',
    cols: [
      { key: 'n', title: '№', w: 50, center: true },
      { key: 'date', title: 'Date', w: 120 },
      { key: 'status', title: 'Status', w: 110, center: true },
      { key: 'Name', title: 'Full name', w: 180, bold: true },
      { key: 'Email', title: 'E-mail', w: 210 },
      { key: 'Phone', title: 'Phone', w: 150 },
      { key: 'company', title: 'Company', w: 180 },
      { key: 'type', title: 'Interest', w: 200, wrap: true },
      { key: 'Interest', title: 'Message', w: 360, wrap: true },
      { key: 'notes', title: 'Notes', w: 240, wrap: true }
    ]
  }
};

const PHOTO_ROW_HEIGHT = 200;
const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 6 * 1024 * 1024;
const MAX_TEXT = 5000;

/** Run once from the Apps Script editor: creates and styles both sheets. Safe to run again. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(SHEETS).forEach(kind => styleSheet_(ss, SHEETS[kind]));
  const first = ss.getSheets()[0];
  if (first.getName() === 'Sheet1' || first.getName() === 'Лист1') {
    if (first.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(first);
  }
  photosRoot_();
  ss.setActiveSheet(ss.getSheetByName(SHEETS.apply.name));
  ss.toast('Sheets are ready. Next: Deploy → New deployment → Web app.', 'Queen of the Baltic', 8);
}

/** Sends a fake application through the whole pipeline, so you can check the sheet and the e-mail. */
function testSubmission() {
  const pixel = Utilities.base64Encode(Utilities.newBlob(
    Utilities.base64Decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='),
    'image/png').getBytes());
  const res = handle_({
    kind: 'apply', Name: 'Test Applicant', Email: Session.getEffectiveUser().getEmail(), Phone: '+372 0000 0000',
    country: 'Estonia', Instagram: '@test', About: 'This is a test application created by testSubmission(). You can delete this row.',
    photos: [{ name: 'test.png', type: 'image/png', data: pixel, thumb: pixel }], page: 'test'
  });
  Logger.log(JSON.stringify(res));
}

function doGet() {
  return json_({ ok: true, service: 'Queen of the Baltic applications' });
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    return json_(handle_(body));
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Server error' });
  }
}

function handle_(body) {
  const kind = body.kind === 'partner' ? 'partner' : 'apply';
  const spec = SHEETS[kind];
  const data = {};
  Object.keys(body).forEach(k => { if (typeof body[k] === 'string') data[k] = clean_(body[k]); });
  if (!data.Name || !data.Email) return { ok: false, error: 'Name and e-mail are required' };

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const ss = SpreadsheetApp.getActive();
    const sh = ss.getSheetByName(spec.name) || styleSheet_(ss, spec);
    const row = sh.getLastRow() + 1;
    const n = row - 1;
    const now = new Date();
    data.n = n;
    data.date = now;
    data.status = 'New';

    // Photos → Drive
    const photos = [];
    let folder = null;
    if (kind === 'apply' && Array.isArray(body.photos) && body.photos.length) {
      folder = photosRoot_().createFolder(Utilities.formatString('%03d — %s', n, data.Name));
      body.photos.slice(0, MAX_PHOTOS).forEach((p, i) => {
        if (!p || typeof p.data !== 'string') return;
        const bytes = Utilities.base64Decode(p.data);
        if (bytes.length > MAX_PHOTO_BYTES) return;
        const type = /^image\/(jpeg|png|webp|gif)$/.test(p.type) ? p.type : 'image/jpeg';
        const ext = type.split('/')[1].replace('jpeg', 'jpg');
        const file = folder.createFile(Utilities.newBlob(bytes, type, Utilities.formatString('%s %d.%s', data.Name, i + 1, ext)));
        const thumb = typeof p.thumb === 'string' && p.thumb.length < 400000 ? p.thumb : null;
        photos.push({ file: file, thumb: thumb });
      });
    }

    // Row values. User text is written as plain text; links are formulas we build ourselves.
    const cells = spec.cols.map(c => {
      if (c.photo) return '';
      if (c.key === 'folder') return folder ? link_(folder.getUrl(), 'Open folder') : '';
      if (c.key === 'Email' && data.Email) return link_('mailto:' + data.Email, data.Email);
      if (c.key === 'Instagram' && data.Instagram) return igLink_(data.Instagram);
      const v = data[c.key];
      if (v == null || v === '') return '';
      return typeof v === 'string' && /^[=+\-@]/.test(v) ? "'" + v : v; // keep "+372…" and "@name" as text
    });
    sh.getRange(row, 1, 1, cells.length).setValues([cells]);

    // Photos inside the cells
    let k = 0;
    spec.cols.forEach((c, i) => {
      if (!c.photo) return;
      const p = photos[k++];
      if (p) putImage_(sh.getRange(row, i + 1), p);
    });

    formatRow_(sh, spec, row, photos.length > 0);
    SpreadsheetApp.flush();

    notify_(kind, data, photos, folder, ss, sh, row);
    return { ok: true, n: n };
  } finally {
    lock.releaseLock();
  }
}

// ---------- sheet styling ----------

function styleSheet_(ss, spec) {
  let sh = ss.getSheetByName(spec.name);
  if (!sh) sh = ss.insertSheet(spec.name);
  const nCols = spec.cols.length;
  if (sh.getMaxColumns() > nCols) sh.deleteColumns(nCols + 1, sh.getMaxColumns() - nCols);
  if (sh.getMaxColumns() < nCols) sh.insertColumnsAfter(sh.getMaxColumns(), nCols - sh.getMaxColumns());

  const head = sh.getRange(1, 1, 1, nCols);
  head.setValues([spec.cols.map(c => c.title)])
    .setBackground(NAVY).setFontColor('#ffffff').setFontWeight('bold').setFontSize(11)
    .setFontFamily('Montserrat').setHorizontalAlignment('center').setVerticalAlignment('middle').setWrap(true);
  sh.setRowHeight(1, 42);
  sh.setFrozenRows(1);
  sh.setFrozenColumns(4);
  spec.cols.forEach((c, i) => sh.setColumnWidth(i + 1, c.w));

  // Whole-column defaults for data rows
  const body = sh.getRange(2, 1, Math.max(sh.getMaxRows() - 1, 1), nCols);
  body.setFontFamily('Montserrat').setFontSize(10).setVerticalAlignment('middle').setWrap(true);
  spec.cols.forEach((c, i) => {
    const col = sh.getRange(2, i + 1, Math.max(sh.getMaxRows() - 1, 1), 1);
    if (c.center || c.photo) col.setHorizontalAlignment('center');
    if (c.wrap) col.setVerticalAlignment('top');
    if (c.key === 'date') col.setNumberFormat('dd.mm.yyyy hh:mm');
  });

  // Status dropdown + colours
  const statusIdx = spec.cols.findIndex(c => c.key === 'status') + 1;
  const statusRange = sh.getRange(2, statusIdx, Math.max(sh.getMaxRows() - 1, 1), 1);
  statusRange.setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(false).build());
  const rules = sh.getConditionalFormatRules().filter(r => !r.getRanges().some(g => g.getColumn() === statusIdx));
  STATUSES.forEach(s => rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo(s).setBackground(STATUS_COLORS[s]).setBold(s === 'New').setRanges([statusRange]).build()));
  sh.setConditionalFormatRules(rules);

  // Light borders between applicants
  sh.getRange(1, 1, sh.getMaxRows(), nCols)
    .setBorder(true, true, true, true, true, true, '#c9d1dc', SpreadsheetApp.BorderStyle.SOLID);

  if (!sh.getFilter()) sh.getRange(1, 1, sh.getMaxRows(), nCols).createFilter();
  return sh;
}

function formatRow_(sh, spec, row, hasPhotos) {
  const r = sh.getRange(row, 1, 1, spec.cols.length);
  r.setFontFamily('Montserrat').setFontSize(10).setVerticalAlignment('middle').setWrap(true)
    .setBorder(true, true, true, true, true, true, '#c9d1dc', SpreadsheetApp.BorderStyle.SOLID);
  if (row % 2 === 0) r.setBackground('#f6f7f9');
  spec.cols.forEach((c, i) => {
    const cell = sh.getRange(row, i + 1);
    if (c.center || c.photo) cell.setHorizontalAlignment('center');
    if (c.wrap) cell.setVerticalAlignment('top');
    if (c.bold) cell.setFontWeight('bold');
    if (c.key === 'date') cell.setNumberFormat('dd.mm.yyyy hh:mm');
  });
  // Grow the row to fit the text, but keep it at least tall enough to see the photos.
  sh.autoResizeRows(row, 1);
  if (hasPhotos && sh.getRowHeight(row) < PHOTO_ROW_HEIGHT) sh.setRowHeight(row, PHOTO_ROW_HEIGHT);
}

// Puts the photo inside the cell. The small preview sent by the website is embedded into the spreadsheet itself,
// so it also stays visible after File → Download → Microsoft Excel (.xlsx). The full-size photo is in Drive.
function putImage_(cell, p) {
  const name = p.file.getName();
  if (p.thumb) {
    try {
      cell.setValue(SpreadsheetApp.newCellImage().setSourceUrl('data:image/jpeg;base64,' + p.thumb).setAltTextTitle(name).build());
      return;
    } catch (err) { console.warn('Embedded preview failed: ' + err); }
  }
  // Fallback: show the Drive file by link (needs "anyone with the link can view").
  try { p.file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (err) { console.warn(err); }
  const url = 'https://lh3.googleusercontent.com/d/' + p.file.getId() + '=w600';
  try {
    cell.setValue(SpreadsheetApp.newCellImage().setSourceUrl(url).setAltTextTitle(name).build());
  } catch (err) {
    cell.setFormula('=IMAGE("' + url + '", 1)');
  }
}

// ---------- e-mail ----------

function notify_(kind, data, photos, folder, ss, sh, row) {
  const to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
  if (!to) return;
  const sheetUrl = ss.getUrl() + '#gid=' + sh.getSheetId() + '&range=A' + row;
  const isApply = kind === 'apply';
  const title = isApply ? 'New application' : 'New partner request';
  const fields = isApply
    ? [['Full name', data.Name], ['E-mail', data.Email], ['Phone', data.Phone], ['Country', data.country], ['Instagram', data.Instagram], ['About herself', data.About]]
    : [['Full name', data.Name], ['E-mail', data.Email], ['Phone', data.Phone], ['Company', data.company], ['Interest', data.type], ['Message', data.Interest]];

  const rows = fields.filter(f => f[1]).map(f =>
    '<tr><td style="padding:6px 14px 6px 0;color:#5b6b80;vertical-align:top;white-space:nowrap">' + esc_(f[0]) +
    '</td><td style="padding:6px 0;color:#041e3a;white-space:pre-wrap">' + esc_(f[1]) + '</td></tr>').join('');
  const btn = (href, label) => '<a href="' + href + '" style="display:inline-block;margin:6px 8px 0 0;padding:10px 18px;background:#041e3a;color:#fff;text-decoration:none;border-radius:6px">' + label + '</a>';

  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5;color:#041e3a;max-width:620px">' +
    '<h2 style="margin:0 0 4px;font-weight:normal">' + title + ' №' + data.n + '</h2>' +
    '<p style="margin:0 0 16px;color:#5b6b80">Queen of the Baltic · qotb.eu · ' +
    Utilities.formatDate(data.date, ss.getSpreadsheetTimeZone(), 'dd.MM.yyyy HH:mm') + '</p>' +
    '<table style="border-collapse:collapse">' + rows + '</table>' +
    (photos.length ? '<p style="margin:16px 0 0">Photos: ' + photos.length + ' (attached)</p>' : '') +
    '<p style="margin:16px 0 0">' + btn(sheetUrl, 'Open in the table') + (folder ? btn(folder.getUrl(), 'Open photos') : '') + '</p>' +
    '</div>';

  const plain = title + ' №' + data.n + '\n\n' + fields.filter(f => f[1]).map(f => f[0] + ': ' + f[1]).join('\n') + '\n\nTable: ' + sheetUrl;

  MailApp.sendEmail({
    to: to,
    subject: 'Queen of the Baltic — ' + title.toLowerCase() + ': ' + data.Name,
    body: plain,
    htmlBody: html,
    replyTo: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.Email || '') ? data.Email : undefined,
    name: 'Queen of the Baltic — website',
    attachments: photos.map(p => p.file.getBlob())
  });
}

// ---------- helpers ----------

function photosRoot_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('PHOTOS_FOLDER_ID');
  if (id) { try { return DriveApp.getFolderById(id); } catch (err) { /* recreated below */ } }
  const it = DriveApp.getFoldersByName(PHOTOS_FOLDER_NAME);
  const folder = it.hasNext() ? it.next() : DriveApp.createFolder(PHOTOS_FOLDER_NAME);
  props.setProperty('PHOTOS_FOLDER_ID', folder.getId());
  return folder;
}

// Apps Script formulas always use English syntax with commas, whatever the spreadsheet locale.
function link_(url, label) {
  const q = s => String(s).replace(/"/g, '""');
  return '=HYPERLINK("' + q(url) + '", "' + q(label) + '")';
}

function igLink_(handle) {
  const h = handle.trim()
    .replace(/^(https?:\/\/)?(www\.)?instagram\.com\//i, '')
    .replace(/^@/, '')
    .split(/[\/?\s]/)[0]
    .replace(/[^A-Za-z0-9._]/g, '');
  return h ? link_('https://www.instagram.com/' + h + '/', '@' + h) : "'" + handle;
}

function clean_(s) {
  return String(s).replace(/\u0000/g, '').trim().slice(0, MAX_TEXT);
}

function esc_(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
