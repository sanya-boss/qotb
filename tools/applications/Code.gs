/**
 * Queen of the Baltic — applications backend (Google Apps Script).
 *
 * What it does when someone presses "Submit" on qotb.eu:
 *   1. saves the photos to a Google Drive folder (one sub-folder per applicant);
 *   2. adds the application to the "Applications" (or "Partners") sheet as a vertical card:
 *      field names in column A, answers in column B, photos one under another — newest card on top;
 *   3. emails a notification about the new application to NOTIFY_EMAIL.
 *
 * Setup: see docs/applications-setup.md. In short: open the Google Sheet → Extensions → Apps Script,
 * paste this file, run `setup` once, then Deploy → New deployment → Web app (Execute as: Me, Access: Anyone),
 * and put the /exec URL into APPLY_ENDPOINT in site/index.html.
 */

// Where notifications go. Leave empty to send them to the Google account that owns this script.
const NOTIFY_EMAIL = '';
// Name of the Drive folder for applicants' photos (created in "My Drive").
const PHOTOS_FOLDER_NAME = 'Queen of the Baltic — фото участниц';

const NAVY = '#041e3a';
const LABEL_BG = '#eef1f5';
const LINE = '#c9d1dc';
const STATUSES = ['Новая', 'На рассмотрении', 'Связались', 'Принята', 'Отклонена'];
const STATUS_COLORS = { 'Новая': '#fff4cc', 'На рассмотрении': '#dbe8f7', 'Связались': '#e8e0f5', 'Принята': '#d9f2e0', 'Отклонена': '#f3dada' };
const STATUS_LABEL = 'Статус';
const COUNTRIES_RU = { 'Estonia': 'Эстония', 'Latvia': 'Латвия', 'Lithuania': 'Литва' };

const LABEL_WIDTH = 170;   // column A, px
const VALUE_WIDTH = 560;   // column B, px
const PHOTO_ROW_HEIGHT = 360;
const FIRST_CARD_ROW = 3;  // row 1 = title, row 2 = empty, cards start below; newest card is always on top

// Card fields, top to bottom. `photo` rows only appear when the photo was attached.
const SHEETS = {
  apply: {
    name: 'Заявки',
    title: 'Queen of the Baltic — заявки участниц',
    fields: [
      { key: 'status', label: STATUS_LABEL },
      { key: 'date', label: 'Дата' },
      { key: 'Name', label: 'Имя и фамилия', bold: true },
      { key: 'Email', label: 'E-mail' },
      { key: 'Phone', label: 'Телефон' },
      { key: 'country', label: 'Страна' },
      { key: 'Instagram', label: 'Instagram' },
      { key: 'About', label: 'О себе' },
      { key: 'photo1', label: 'Фото 1', photo: 0 },
      { key: 'photo2', label: 'Фото 2', photo: 1 },
      { key: 'photo3', label: 'Фото 3', photo: 2 },
      { key: 'folder', label: 'Все фото' },
      { key: 'notes', label: 'Заметки' }
    ]
  },
  partner: {
    name: 'Партнёры',
    title: 'Queen of the Baltic — запросы партнёров',
    fields: [
      { key: 'status', label: STATUS_LABEL },
      { key: 'date', label: 'Дата' },
      { key: 'Name', label: 'Имя и фамилия', bold: true },
      { key: 'Email', label: 'E-mail' },
      { key: 'Phone', label: 'Телефон' },
      { key: 'company', label: 'Компания' },
      { key: 'type', label: 'Интерес' },
      { key: 'Interest', label: 'Сообщение' },
      { key: 'notes', label: 'Заметки' }
    ]
  }
};

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 6 * 1024 * 1024;
const MAX_TEXT = 5000;

/** Run once from the Apps Script editor: creates and styles both sheets. Safe to run again. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(SHEETS).forEach(kind => prepareSheet_(ss, SHEETS[kind]));
  const first = ss.getSheets()[0];
  if (['Sheet1', 'Лист1'].indexOf(first.getName()) >= 0 && first.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(first);
  photosRoot_();
  ss.setActiveSheet(ss.getSheetByName(SHEETS.apply.name));
  ss.toast('Листы готовы. Дальше: Deploy → New deployment → Web app.', 'Queen of the Baltic', 8);
}

/** Sends a fake application through the whole pipeline, so you can check the sheet and the e-mail. */
function testSubmission() {
  const pixel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
  const res = handle_({
    kind: 'apply', Name: 'Тестовая Заявка', Email: Session.getEffectiveUser().getEmail(), Phone: '+372 0000 0000',
    country: 'Estonia', Instagram: '@test', About: 'Это тестовая заявка, созданная функцией testSubmission(). Эту карточку можно удалить.',
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
    const sh = ss.getSheetByName(spec.name) || prepareSheet_(ss, spec);
    data.n = nextNumber_(kind);
    data.date = new Date();
    data.status = STATUSES[0];
    if (COUNTRIES_RU[data.country]) data.country = COUNTRIES_RU[data.country];

    // Photos → Drive
    const photos = [];
    let folder = null;
    if (kind === 'apply' && Array.isArray(body.photos) && body.photos.length) {
      folder = photosRoot_().createFolder(Utilities.formatString('%03d — %s', data.n, data.Name));
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

    const row = writeCard_(sh, spec, data, photos, folder);
    SpreadsheetApp.flush();

    notify_(kind, data, photos, folder, ss, sh, row);
    return { ok: true, n: data.n };
  } finally {
    lock.releaseLock();
  }
}

// ---------- the card ----------

/** Inserts a card at the top (row FIRST_CARD_ROW) and returns its first row. */
function writeCard_(sh, spec, data, photos, folder) {
  const fields = spec.fields.filter(f => f.photo === undefined || photos[f.photo]);
  const height = 1 + fields.length + 1;          // header + fields + empty spacer row
  const top = FIRST_CARD_ROW;
  sh.insertRowsBefore(top, height);

  const all = sh.getRange(top, 1, height, 2);
  all.clearDataValidations().clearFormat().clearContent();
  all.setFontFamily('Montserrat').setFontSize(10).setWrap(true).setVerticalAlignment('middle').setFontColor(NAVY);

  // Header: "№ 12" | "Anna Example"
  const head = sh.getRange(top, 1, 1, 2);
  head.setValues([['№ ' + data.n, text_(data.Name)]])
    .setBackground(NAVY).setFontColor('#ffffff').setFontWeight('bold').setFontSize(12);
  sh.getRange(top, 1).setHorizontalAlignment('center');
  sh.setRowHeight(top, 36);

  // Field rows
  const values = fields.map(f => [f.label, cellValue_(f.key, data, folder)]);
  const body = sh.getRange(top + 1, 1, fields.length, 2);
  body.setValues(values);
  sh.getRange(top + 1, 1, fields.length, 1)
    .setBackground(LABEL_BG).setFontWeight('bold').setVerticalAlignment('top');
  sh.getRange(top + 1, 2, fields.length, 1).setHorizontalAlignment('left').setVerticalAlignment('top');

  fields.forEach((f, i) => {
    const r = top + 1 + i;
    const cell = sh.getRange(r, 2);
    if (f.bold) cell.setFontWeight('bold');
    if (f.key === 'date') cell.setNumberFormat('dd.mm.yyyy hh:mm');
    if (f.key === 'status') {
      cell.setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(false).build())
        .setFontWeight('bold');
    }
    if (f.photo !== undefined) {
      putImage_(cell, photos[f.photo]);
      cell.setHorizontalAlignment('center').setVerticalAlignment('middle');
      sh.setRowHeight(r, PHOTO_ROW_HEIGHT);
    }
  });

  // Text rows grow to fit long answers; photo rows keep their height.
  fields.forEach((f, i) => { if (f.photo === undefined) sh.autoResizeRows(top + 1 + i, 1); });

  sh.getRange(top, 1, 1 + fields.length, 2)
    .setBorder(true, true, true, true, true, true, LINE, SpreadsheetApp.BorderStyle.SOLID)
    .setBorder(true, true, true, true, null, null, NAVY, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  sh.setRowHeight(top + height - 1, 28);         // gap before the next (older) card
  return top;
}

function cellValue_(key, data, folder) {
  if (key === 'folder') return folder ? link_(folder.getUrl(), 'Открыть папку на Google Drive') : '';
  if (key === 'Email') return data.Email ? link_('mailto:' + data.Email, data.Email) : '';
  if (key === 'Instagram') return data.Instagram ? igLink_(data.Instagram) : '';
  const v = data[key];
  if (v == null || v === '') return '';
  return text_(v);
}

// ---------- sheet styling ----------

function prepareSheet_(ss, spec) {
  let sh = ss.getSheetByName(spec.name);
  if (!sh) sh = ss.insertSheet(spec.name);
  if (sh.getMaxColumns() > 2) sh.deleteColumns(3, sh.getMaxColumns() - 2);
  sh.setColumnWidth(1, LABEL_WIDTH);
  sh.setColumnWidth(2, VALUE_WIDTH);
  sh.setHiddenGridlines(true);

  sh.getRange(1, 1, 1, 2).setValues([[spec.title + '  ·  новые сверху', '']])
    .setFontFamily('Montserrat').setFontColor(NAVY).setVerticalAlignment('middle');
  sh.getRange(1, 1).setFontSize(14).setFontWeight('bold').setWrap(false);
  sh.setRowHeight(1, 44);
  sh.setRowHeight(2, 12);
  sh.setFrozenRows(1);

  // Status colours: any cell in column B whose label in column A is STATUS_LABEL.
  const colB = sh.getRange('B:B');
  const rules = sh.getConditionalFormatRules().filter(r => !r.getRanges().some(g => g.getA1Notation() === colB.getA1Notation()));
  STATUSES.forEach(s => rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=AND($A1="' + STATUS_LABEL + '", $B1="' + s + '")')
    .setBackground(STATUS_COLORS[s]).setRanges([colB]).build()));
  sh.setConditionalFormatRules(rules);
  return sh;
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
  const title = isApply ? 'Новая заявка' : 'Новый запрос от партнёра';
  const fields = isApply
    ? [['Имя и фамилия', data.Name], ['E-mail', data.Email], ['Телефон', data.Phone], ['Страна', data.country], ['Instagram', data.Instagram], ['О себе', data.About]]
    : [['Имя и фамилия', data.Name], ['E-mail', data.Email], ['Телефон', data.Phone], ['Компания', data.company], ['Интерес', data.type], ['Сообщение', data.Interest]];

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
    (photos.length ? '<p style="margin:16px 0 0">Фото: ' + photos.length + ' (во вложении)</p>' : '') +
    '<p style="margin:16px 0 0">' + btn(sheetUrl, 'Открыть в таблице') + (folder ? btn(folder.getUrl(), 'Открыть фото') : '') + '</p>' +
    '</div>';

  const plain = title + ' №' + data.n + '\n\n' + fields.filter(f => f[1]).map(f => f[0] + ': ' + f[1]).join('\n') + '\n\nТаблица: ' + sheetUrl;

  MailApp.sendEmail({
    to: to,
    subject: 'Queen of the Baltic — ' + title.toLowerCase() + ': ' + data.Name,
    body: plain,
    htmlBody: html,
    replyTo: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.Email || '') ? data.Email : undefined,
    name: 'Queen of the Baltic — сайт',
    attachments: photos.map(p => p.file.getBlob())
  });
}

// ---------- helpers ----------

function nextNumber_(kind) {
  const props = PropertiesService.getScriptProperties();
  const key = 'COUNTER_' + kind;
  const n = (parseInt(props.getProperty(key), 10) || 0) + 1;
  props.setProperty(key, String(n));
  return n;
}

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
  return h ? link_('https://www.instagram.com/' + h + '/', '@' + h) : text_(handle);
}

// User text is always stored as plain text: "+372…" or "=…" must not turn into numbers or formulas.
function text_(v) {
  return typeof v === 'string' && /^[=+\-@]/.test(v) ? "'" + v : v;
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
