/* @ds-bundle: {"format":4,"namespace":"QueenOfTheBalticDesignSystem_68b937","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"LogoGrid","sourcePath":"components/content/LogoGrid.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"PartnerFeature","sourcePath":"components/content/PartnerFeature.jsx"},{"name":"PhotoCollage","sourcePath":"components/content/PhotoCollage.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"FeaturePanel","sourcePath":"components/surfaces/FeaturePanel.jsx"},{"name":"FilterTabs","sourcePath":"components/surfaces/FilterTabs.jsx"},{"name":"IndexLabel","sourcePath":"components/surfaces/IndexLabel.jsx"},{"name":"ListRow","sourcePath":"components/surfaces/ListRow.jsx"},{"name":"MediaCard","sourcePath":"components/surfaces/MediaCard.jsx"},{"name":"Panel","sourcePath":"components/surfaces/Panel.jsx"},{"name":"Tile","sourcePath":"components/surfaces/Tile.jsx"},{"name":"Lead","sourcePath":"components/typography/Lead.jsx"},{"name":"SectionHeading","sourcePath":"components/typography/SectionHeading.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"92eec176d338","components/content/LogoGrid.jsx":"a5aeb27bcf4c","components/content/Marquee.jsx":"b1b02f4f90df","components/content/PartnerFeature.jsx":"b249a04823a4","components/content/PhotoCollage.jsx":"157bd2c26a3c","components/content/Quote.jsx":"d55eedfcb370","components/core/Button.jsx":"a334a7dddaed","components/core/Icon.jsx":"0aff826a3a96","components/core/IconCircle.jsx":"bdbbe7b94651","components/core/TextLink.jsx":"61b2a935c076","components/forms/Checkbox.jsx":"74ed693fb453","components/forms/SelectField.jsx":"e7524fd54cc4","components/forms/TextField.jsx":"fd59ad9b4fca","components/navigation/SiteFooter.jsx":"4e48cc7e0b15","components/navigation/SiteNav.jsx":"f0932f1a777b","components/surfaces/Badge.jsx":"ad2096ae9519","components/surfaces/FeaturePanel.jsx":"07de1b9c9b67","components/surfaces/FilterTabs.jsx":"116b45753fc4","components/surfaces/IndexLabel.jsx":"c99a23995bb9","components/surfaces/ListRow.jsx":"faf5990c974a","components/surfaces/MediaCard.jsx":"510042129aa9","components/surfaces/Panel.jsx":"78a3674b18a5","components/surfaces/Tile.jsx":"09dc43317962","components/typography/Lead.jsx":"918a5514b167","components/typography/SectionHeading.jsx":"2b461feb1f96","ui_kits/website-luxe/Luxe.jsx":"32f5c7e75d09","ui_kits/website-luxe/image-slot.js":"fff26d081c8d","ui_kits/website-sea/Sea.jsx":"07904ee9db15","ui_kits/website/Forms.jsx":"e2786c0d428f","ui_kits/website/Home.jsx":"6b461c6238d4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QueenOfTheBalticDesignSystem_68b937 = window.QueenOfTheBalticDesignSystem_68b937 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function Wordmark({
  variant = 'wordmark',
  tone = 'light',
  height = 40,
  assetsBase = 'assets/',
  alt = 'Queen of the Baltic',
  style
}) {
  const file = {
    wordmark: 'wordmark',
    mermaid: 'wordmark-mermaid',
    monogram: 'monogram',
    figure: 'mermaid',
    crown: 'crown'
  }[variant] || 'wordmark';
  return /*#__PURE__*/React.createElement("img", {
    src: assetsBase + 'brand/' + file + '-' + (tone === 'light' ? 'light' : 'navy') + '.png',
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/LogoGrid.jsx
try { (() => {
function LogoGrid({
  logos = [],
  columns = 4,
  cellHeight = 180,
  invert = true
}) {
  const [hi, setHi] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || '#',
    "aria-label": l.name,
    onMouseEnter: () => setHi(i),
    onMouseLeave: () => setHi(-1),
    style: {
      height: cellHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 12%',
      borderBottom: '1px solid var(--border-hairline)',
      borderRight: i % columns < columns - 1 ? '1px solid var(--border-hairline)' : 'none',
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.name,
    style: {
      maxWidth: '100%',
      maxHeight: l.maxHeight || 72,
      width: 'auto',
      height: 'auto',
      filter: invert ? 'brightness(0) invert(1)' : 'none',
      opacity: hi === -1 || hi === i ? 1 : .45,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }))));
}
Object.assign(__ds_scope, { LogoGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/Marquee.jsx
try { (() => {
function Marquee({
  text = "She's not just a queen — she's a force.",
  separator = '/',
  tone = 'dark',
  speed = 40
}) {
  const items = Array.from({
    length: 8
  });
  const row = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      paddingRight: 28,
      flex: 'none'
    }
  }, items.map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, text), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: .6
    }
  }, separator))));
  return /*#__PURE__*/React.createElement("div", {
    role: "marquee",
    "aria-label": text,
    style: {
      overflow: 'hidden',
      borderBlock: '1px solid ' + (tone === 'dark' ? 'var(--border-on-inverse)' : 'var(--border-subtle)'),
      padding: '14px 0',
      background: 'transparent',
      color: tone === 'dark' ? 'var(--text-on-inverse)' : 'var(--text-heading)',
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'qb-marquee ' + speed + 's linear infinite'
    }
  }, row, row));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/content/PartnerFeature.jsx
try { (() => {
function PartnerFeature({
  logo,
  logoHeight = 72,
  name,
  role = 'General Partner',
  description,
  href = '#',
  invert = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 16,
      maxWidth: 440,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: logoHeight + 16,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name,
    style: {
      maxHeight: logoHeight,
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
      filter: invert ? 'brightness(0) invert(1)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 16,
      letterSpacing: '.14em',
      color: 'var(--text-body)',
      marginTop: 8
    }
  }, role), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.2,
      color: 'var(--text-heading)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, description));
}
Object.assign(__ds_scope, { PartnerFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PartnerFeature.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoCollage.jsx
try { (() => {
const POS = [[2, 6, 11], [16, 14, 12], [3, 58, 12], [16, 62, 13], [74, 2, 11], [88, 10, 11], [72, 50, 12], [87, 60, 12], [1, 34, 9]];
function PhotoCollage({
  photos = [],
  children,
  height = 720
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, photos.slice(0, 9).map((p, i) => {
    const [x, y, w] = POS[i];
    return /*#__PURE__*/React.createElement("img", {
      key: i,
      src: p,
      alt: "",
      style: {
        position: 'absolute',
        left: x + '%',
        top: y + '%',
        width: w + '%',
        height: 'auto',
        filter: 'grayscale(1)',
        animation: 'qb-fade-up var(--dur-slow) var(--ease-out) both',
        animationDelay: i * 60 + 'ms'
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 720,
      padding: '0 24px',
      textAlign: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { PhotoCollage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoCollage.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  title,
  children,
  author
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--container-narrow)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-accent)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children), author && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-accent)',
      color: 'var(--text-heading)'
    }
  }, "\u2014 ", author));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'outline',
  tone = 'dark',
  size = 'md',
  href,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const onDark = tone === 'dark';
  const fg = onDark ? 'var(--qb-paper-50)' : 'var(--qb-navy-800)';
  const bg = onDark ? 'var(--qb-paper-50)' : 'var(--qb-navy-800)';
  const inv = onDark ? 'var(--qb-navy-800)' : 'var(--qb-paper-50)';
  const solid = variant === 'solid';
  const filled = solid ? !h : h;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    boxSizing: 'border-box',
    height: size === 'sm' ? 42 : 48,
    minWidth: size === 'sm' ? 0 : 160,
    width: fullWidth ? '100%' : undefined,
    padding: size === 'sm' ? '0 18px' : '0 24px',
    borderRadius: 'var(--btn-radius, var(--radius-btn))',
    border: '1px solid ' + (onDark ? 'var(--border-on-inverse)' : 'var(--qb-navy-800)'),
    background: filled ? bg : 'transparent',
    color: filled ? inv : fg,
    fontFamily: 'var(--btn-font, var(--font-sans))',
    fontStyle: 'var(--btn-style, normal)',
    fontWeight: 'var(--btn-weight, 500)',
    fontSize: size === 'sm' ? 'var(--btn-fs-sm, 13px)' : 'var(--btn-fs, 14px)',
    letterSpacing: 'var(--btn-ls, 0)',
    textTransform: 'var(--btn-transform, none)',
    lineHeight: 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .4 : 1,
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    ...style
  };
  if (solid && h && !disabled) {
    s.background = 'transparent';
    s.color = fg;
  }
  const p = {
    style: s,
    onMouseEnter: () => setH(!disabled),
    onMouseLeave: () => setH(false),
    onClick: disabled ? undefined : onClick
  };
  return href && !disabled ? /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, p), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, p), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const LU = 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/';
const SI = 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
const MAP = {
  mail: LU + 'mail.svg',
  phone: LU + 'phone.svg',
  instagram: LU + 'instagram.svg',
  facebook: LU + 'facebook.svg',
  linkedin: LU + 'linkedin.svg',
  spotify: SI + 'spotify.svg',
  tiktok: SI + 'tiktok.svg',
  youtube: LU + 'youtube.svg',
  menu: LU + 'menu.svg',
  close: LU + 'x.svg',
  arrowRight: LU + 'arrow-right.svg',
  arrowDown: LU + 'arrow-down.svg',
  chevronDown: LU + 'chevron-down.svg',
  check: LU + 'check.svg',
  play: LU + 'play.svg',
  mapPin: LU + 'map-pin.svg',
  calendar: LU + 'calendar.svg',
  ticket: LU + 'ticket.svg',
  heart: LU + 'heart.svg'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const u = MAP[name] || name;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: 'url(' + u + ') center/contain no-repeat',
      mask: 'url(' + u + ') center/contain no-repeat',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
function IconCircle({
  name,
  href = '#',
  label,
  size = 48,
  tone = 'dark'
}) {
  const [h, setH] = React.useState(false);
  const dark = tone === 'dark';
  const bg = dark ? 'var(--qb-paper-50)' : 'var(--qb-navy-800)';
  const fg = dark ? 'var(--qb-navy-800)' : 'var(--qb-paper-50)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label || name,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: h ? 'transparent' : bg,
      border: '1px solid ' + bg,
      color: h ? bg : fg,
      textDecoration: 'none',
      opacity: 1,
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * .44)
  }));
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function TextLink({
  children,
  href = '#',
  arrow = true,
  tone = 'dark',
  size = 'md',
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 12,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: size === 'sm' ? 18 : 22,
      lineHeight: 1.3,
      color: tone === 'dark' ? 'var(--qb-paper-50)' : 'var(--qb-navy-800)',
      textDecoration: 'none',
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: 'linear-gradient(currentColor,currentColor)',
      backgroundSize: (h ? '0%' : '100%') + ' 1px',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size var(--dur-base) var(--ease-out)',
      paddingBottom: 2
    }
  }, children), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontStyle: 'normal',
      fontFamily: 'var(--font-sans)',
      transform: h ? 'translateX(6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  name
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      cursor: 'pointer',
      minHeight: 44,
      paddingTop: 10,
      fontSize: 'var(--fs-small)',
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    checked: on,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      marginTop: 1,
      border: '1px solid var(--text-heading)',
      borderRadius: 4,
      background: on ? 'var(--text-heading)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--surface-page)"
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
function SelectField({
  label,
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  required = false,
  error,
  placeholder = 'Select…'
}) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  const s = {
    width: '100%',
    boxSizing: 'border-box',
    height: 56,
    padding: '0 2px',
    background: 'transparent',
    border: 0,
    borderBottom: '1px solid ' + (error ? 'var(--qb-error)' : f ? 'var(--text-heading)' : 'var(--border-hairline)'),
    borderRadius: 0,
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    color: 'var(--text-body)',
    transition: 'border-color var(--dur-fast) var(--ease-out)'
  };
  s.appearance = 'none';
  s.WebkitAppearance = 'none';
  s.paddingRight = 32;
  s.cursor = 'pointer';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    name: name,
    value: value,
    defaultValue: value === undefined ? defaultValue ?? '' : undefined,
    onChange: onChange,
    required: required,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: s
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    style: {
      color: '#000'
    }
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 18,
    color: "var(--text-heading)",
    style: {
      position: 'absolute',
      right: 4,
      top: 19,
      pointerEvents: 'none'
    }
  })), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--qb-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  name,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  onChange,
  required = false,
  error,
  hint,
  multiline = false,
  rows = 4
}) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  const s = {
    width: '100%',
    boxSizing: 'border-box',
    height: 56,
    padding: '0 2px',
    background: 'transparent',
    border: 0,
    borderBottom: '1px solid ' + (error ? 'var(--qb-error)' : f ? 'var(--text-heading)' : 'var(--border-hairline)'),
    borderRadius: 0,
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    color: 'var(--text-body)',
    transition: 'border-color var(--dur-fast) var(--ease-out)'
  };
  if (multiline) {
    s.height = 'auto';
    s.padding = '14px 2px';
    s.resize = 'vertical';
    s.lineHeight = 1.6;
  }
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, " *")), /*#__PURE__*/React.createElement(El, {
    id: id,
    name: name,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    required: required,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: s
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--qb-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  assetsBase = 'assets/',
  links = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Partners',
    href: '#partners'
  }],
  phone = '+372 5592 1134',
  email = 'contest@qotb.eu',
  onNavigate
}) {
  const go = (h, e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(h);
    }
  };
  const lk = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 'var(--fs-nav)',
    letterSpacing: 'var(--ls-nav)',
    textTransform: 'uppercase',
    color: 'var(--qb-paper-50)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--qb-navy-950)',
      color: 'var(--qb-paper-50)',
      borderTop: '1px solid rgba(246,245,242,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px var(--gutter) 40px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "light",
    height: 30,
    assetsBase: assetsBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontSize: 'var(--fs-body)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/\s/g, ''),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, phone), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconCircle, {
    tone: "dark",
    name: "instagram",
    size: 44
  }), /*#__PURE__*/React.createElement(__ds_scope.IconCircle, {
    tone: "dark",
    name: "facebook",
    size: 44
  }), /*#__PURE__*/React.createElement(__ds_scope.IconCircle, {
    tone: "dark",
    name: "linkedin",
    size: 44
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: e => go(l.href, e),
    style: lk
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: "#partner",
    onClick: e => go('#partner', e),
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 20,
      color: 'var(--qb-paper-50)'
    }
  }, "Become a Partner"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(246,245,242,.14)',
      padding: '18px var(--gutter)',
      textAlign: 'center',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, "\xA9 2026 Queen of the Baltic International \xB7 Tallinn, Estonia"));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
const DEF = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Gallery',
  href: '#gallery'
}, {
  label: 'Contestants',
  href: '#contestants'
}, {
  label: 'Partners',
  href: '#partners'
}, {
  label: 'Contacts',
  href: '#contacts'
}];
function SiteNav({
  links = DEF,
  active,
  tone = 'dark',
  showLogo = true,
  cta = 'Apply now',
  onCta,
  onNavigate,
  assetsBase = 'assets/',
  solid = false
}) {
  const ref = React.useRef(null);
  const [narrow, setNarrow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < 900));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const dark = tone === 'dark';
  const fg = dark ? 'var(--qb-paper-50)' : 'var(--qb-navy-800)';
  const go = (l, e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l.href);
    }
    setOpen(false);
  };
  const link = (l, big) => {
    const on = active === l.href || active === l.label;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href,
      onClick: e => go(l, e),
      style: big ? {
        fontFamily: 'var(--font-display)',
        fontSize: 36,
        lineHeight: 1.2,
        textTransform: 'uppercase',
        color: 'var(--qb-paper-50)',
        textDecoration: 'none',
        opacity: on ? 1 : .8
      } : {
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: 'var(--fs-nav)',
        letterSpacing: 'var(--ls-nav)',
        textTransform: 'uppercase',
        color: fg,
        textDecoration: 'none',
        padding: '8px 0',
        borderBottom: '1px solid ' + (on ? fg : 'transparent'),
        transition: 'border-color var(--dur-fast) var(--ease-out), opacity var(--dur-fast)'
      }
    }, l.label);
  };
  return /*#__PURE__*/React.createElement("header", {
    ref: ref,
    style: {
      position: 'relative',
      zIndex: 10,
      height: 'var(--nav-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '0 var(--gutter)',
      background: solid ? dark ? 'var(--qb-navy-800)' : 'var(--surface-page)' : 'transparent',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      display: 'flex'
    }
  }, showLogo && /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => go({
      href: '#home'
    }, e),
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: dark ? 'light' : 'navy',
    height: narrow ? 20 : 22,
    assetsBase: assetsBase
  }))), !narrow && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => link(l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 12
    }
  }, !narrow && cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    tone: dark ? 'dark' : 'light',
    onClick: onCta,
    style: {
      minWidth: 0
    }
  }, cta), narrow && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Open menu",
    onClick: () => setOpen(true),
    style: {
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 0,
      color: fg,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 26
  }))), narrow && open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--qb-navy-800)',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 var(--gutter) 32px',
      animation: 'qb-fade-up var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--nav-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "light",
    height: 20,
    assetsBase: assetsBase
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close menu",
    onClick: () => setOpen(false),
    style: {
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 0,
      color: 'var(--qb-paper-50)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 26
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 40
    }
  }, links.map(l => link(l, true))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "dark",
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      onCta && onCta();
    }
  }, "Apply now!"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "dark",
    variant: "solid",
    fullWidth: true
  }, "Buy a ticket"))));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function Badge({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      lineHeight: 1,
      padding: '4px 8px',
      borderRadius: 999,
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FilterTabs.jsx
try { (() => {
function FilterTabs({
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-subtle)'
    }
  }, options.map(o => {
    const on = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(o),
      style: {
        height: 36,
        padding: '0 16px',
        borderRadius: 999,
        border: 0,
        cursor: 'pointer',
        background: on ? 'var(--qb-paper-50)' : 'transparent',
        color: on ? 'var(--qb-navy-950)' : 'var(--text-body)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/IndexLabel.jsx
try { (() => {
function IndexLabel({
  n,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      ...style
    }
  }, n && /*#__PURE__*/React.createElement("span", null, n), n && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: 'currentColor',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { IndexLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/IndexLabel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ListRow.jsx
try { (() => {
function ListRow({
  left,
  right,
  href = '#',
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px dashed var(--border-hairline)',
      textDecoration: 'none',
      opacity: 1,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-heading)',
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, left), /*#__PURE__*/React.createElement("span", {
    style: {
      color: h ? 'var(--text-heading)' : 'var(--text-muted)',
      transition: 'color var(--dur-fast)'
    }
  }, right));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MediaCard.jsx
try { (() => {
function MediaCard({
  media,
  src,
  meta,
  title,
  subtitle,
  ratio = '3/4',
  href,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const m = media || (src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: onClick || href ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--surface-panel)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      lineHeight: 1.1,
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1.1,
      color: 'var(--text-muted)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Panel.jsx
try { (() => {
function Panel({
  children,
  padding = 20,
  hover = false,
  style,
  as = 'div'
}) {
  const [h, setH] = React.useState(false);
  const El = as;
  return /*#__PURE__*/React.createElement(El, {
    onMouseEnter: hover ? () => setH(true) : undefined,
    onMouseLeave: hover ? () => setH(false) : undefined,
    style: {
      background: h ? 'var(--surface-well)' : 'var(--surface-panel)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-panel)',
      padding,
      boxSizing: 'border-box',
      transition: 'background var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Panel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeaturePanel.jsx
try { (() => {
function FeaturePanel({
  media,
  src,
  circle = false,
  title,
  tail,
  children,
  actions
}) {
  const m = media || (src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null);
  return /*#__PURE__*/React.createElement(__ds_scope.Panel, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'clamp(20px,3vw,40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: circle ? '50%' : 'var(--radius-inner)',
      overflow: 'hidden',
      background: 'var(--surface-well)',
      aspectRatio: circle ? '1' : '4/3',
      maxHeight: 420,
      maxWidth: circle ? 320 : undefined
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, title, tail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " ", tail)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, actions)));
}
Object.assign(__ds_scope, { FeaturePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeaturePanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tile.jsx
try { (() => {
function Tile({
  icon,
  visual,
  title,
  badge,
  children,
  href
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Panel, {
    hover: true,
    padding: "32px 20px 20px",
    as: href ? 'a' : 'div',
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textDecoration: 'none',
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      minWidth: 64,
      height: 64,
      padding: visual ? '0 12px' : 0,
      borderRadius: 16,
      background: 'var(--surface-well)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28,
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, visual || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: "var(--text-heading)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 500,
      color: 'var(--text-heading)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, title, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tile.jsx", error: String((e && e.message) || e) }); }

// components/typography/Lead.jsx
try { (() => {
function Lead({
  children,
  tone = 'dark',
  align = 'center',
  size = 'lg',
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: size === 'lg' ? 'var(--fs-lead)' : 'var(--fs-accent)',
      lineHeight: 'var(--lh-lead)',
      color: tone === 'dark' ? 'var(--text-on-inverse)' : 'var(--text-heading)',
      textAlign: align,
      textWrap: 'balance',
      maxWidth: '22em',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Lead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Lead.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  eyebrow,
  rule = false,
  align = 'left',
  tone = 'dark',
  size = 'lg',
  as = 'h2',
  style
}) {
  const dark = tone === 'dark';
  const H = as;
  const fs = {
    xl: 'var(--fs-display)',
    lg: 'var(--fs-h1)',
    md: 'var(--fs-h2)',
    sm: 'var(--fs-h3)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 12,
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: align === 'center' ? 120 : 'min(100%, 460px)',
      height: 1,
      background: dark ? 'var(--border-on-inverse)' : 'var(--border-hairline)',
      marginBottom: 8
    }
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-accent)',
      lineHeight: 1.3,
      color: dark ? 'var(--text-on-inverse)' : 'var(--text-body)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-inverse)' : 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-luxe/Luxe.jsx
try { (() => {
const L = window.QueenOfTheBalticDesignSystem_68b937;
const A = '../../assets/';
const PH = n => A + 'photos/gallery-' + n + '.jpg';
const lbl = {
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '.22em',
  textTransform: 'uppercase'
};
function Index({
  n,
  label,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      ...lbl,
      color: 'var(--qb-pearl-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: 'currentColor',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const r = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = r.current;
    if (!el || !('IntersectionObserver' in window) || el.getBoundingClientRect().top < window.innerHeight) {
      setOn(true);
      return;
    }
    const t = setTimeout(() => setOn(true), 1500);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: r,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(24px)',
      transition: 'opacity 900ms var(--ease-out) ' + delay + 'ms, transform 900ms var(--ease-out) ' + delay + 'ms',
      ...style
    }
  }, children);
}
// Set HERO_VIDEO to the contest's own footage (e.g. A+'video/hero.mp4'); poster shows until then.
const HERO_VIDEO = null;
const HERO_POSTER = undefined;
function Hero({
  go
}) {
  const {
    SiteNav,
    Button
  } = L;
  const fa = d => ({
    animation: 'qb-fade-up 1000ms var(--ease-out) ' + d + 'ms both'
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--qb-paper-50)',
      background: 'var(--qb-navy-950)',
      overflow: 'hidden'
    }
  }, HERO_VIDEO ? /*#__PURE__*/React.createElement("video", {
    src: HERO_VIDEO,
    poster: HERO_POSTER,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "lx-hero-bg",
    shape: "rect",
    placeholder: "Hero photo / video poster"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg,rgba(2,15,31,.55) 0%,rgba(2,15,31,.25) 35%,rgba(2,15,31,.55) 65%,rgba(2,15,31,.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    tone: "dark",
    cta: "Apply now",
    onCta: () => go('apply'),
    onNavigate: go,
    assetsBase: A
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      pointerEvents: 'none',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 var(--gutter)',
      maxWidth: 1440,
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...fa(0),
      ...lbl,
      color: 'var(--qb-pearl-300)',
      marginBottom: 24
    }
  }, "International \xB7 Season 2026 \xB7 Tallinn"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...fa(120),
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(56px,10.5vw,176px)',
      lineHeight: .92,
      letterSpacing: '-.005em',
      textTransform: 'uppercase'
    }
  }, "She\u2019s a force"), /*#__PURE__*/React.createElement("div", {
    className: "lx-hero-foot",
    style: {
      ...fa(260),
      marginTop: 'clamp(20px,2.4vw,32px)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,2.2vw,32px)',
      lineHeight: 1.3,
      maxWidth: '24em'
    }
  }, "Not just a queen. An international beauty and self-expression contest with a charitable heart."), /*#__PURE__*/React.createElement("div", {
    className: "lx-ctas",
    style: {
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    onClick: () => go('apply')
  }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    variant: "solid",
    onClick: () => go('tickets')
  }, "Buy a ticket"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...fa(400),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      borderTop: '1px solid rgba(217,208,193,.35)',
      marginTop: 'clamp(32px,4vw,56px)',
      padding: '18px 0 24px',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.04em',
      color: 'var(--qb-navy-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lx-hide-sm"
  }, "More than a beauty contest \u2014 a movement celebrating outer and inner radiance."), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    onClick: e => {
      e.preventDefault();
      go('about');
    },
    style: {
      ...lbl,
      fontSize: 12,
      color: 'var(--qb-paper-50)',
      textDecoration: 'none',
      marginLeft: 'auto',
      pointerEvents: 'auto'
    }
  }, "Scroll \u2193"))));
}
function WordmarkBand() {
  const {
    Wordmark
  } = L;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Wordmark band",
    style: {
      background: 'var(--qb-navy-950)',
      padding: 'clamp(56px,8vw,120px) var(--gutter)',
      overflow: 'hidden',
      borderBlock: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "light",
    assetsBase: A,
    style: {
      width: '100%',
      maxWidth: 1440,
      height: 'auto',
      margin: '0 auto'
    }
  })));
}
const STRIP = ['decus', 'hearts', 'elitcar', 'medavita', '20min', 'mediabros', 'sash', 'lafee', 'dodo-pizza', 'cia', 'alex-model-coach', 'meerhof', 'hikari', 'dolores', 'liisa', 'anna-creative'];
function LogoStrip() {
  const row = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(48px,6vw,96px)',
      paddingRight: 'clamp(48px,6vw,96px)',
      flex: 'none'
    }
  }, STRIP.map(k => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: A + 'partners/' + k + '.png',
    alt: k,
    style: {
      height: k === '20min' || k === 'meerhof' ? 44 : 30,
      width: 'auto',
      flex: 'none',
      filter: 'brightness(0) invert(1)',
      opacity: .8
    }
  })));
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "Partners",
    "data-screen-label": "Partner strip",
    style: {
      background: 'var(--qb-navy-950)',
      borderBlock: '1px solid var(--border-subtle)',
      padding: '32px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'qb-marquee 60s linear infinite'
    }
  }, row, row));
}
const col = {
  maxWidth: 1440,
  margin: '0 auto',
  padding: '0 var(--gutter)',
  boxSizing: 'border-box'
};
const panel = {
  background: 'var(--qb-navy-900)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 16,
  padding: 20
};
const h3 = {
  margin: '0 0 24px',
  fontFamily: 'var(--font-serif)',
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 34,
  lineHeight: 1.2,
  color: 'var(--qb-paper-50)'
};
const muted = {
  color: 'var(--qb-navy-300)'
};
const LUI = 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/';
function Block({
  title,
  children,
  id,
  label
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": label || title,
    style: {
      ...col,
      paddingTop: 'clamp(48px,6vw,72px)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: h3
  }, title), children);
}
function Badge({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      padding: '3px 8px',
      borderRadius: 999,
      border: '1px solid var(--border-hairline)',
      color: 'var(--qb-navy-100)',
      marginLeft: 8,
      verticalAlign: 'middle'
    }
  }, children);
}
function Feature({
  slot,
  ph,
  title,
  tail,
  text,
  children,
  circle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lx-feature",
    style: panel
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 10,
      overflow: 'hidden',
      background: 'var(--qb-navy-800)',
      aspectRatio: circle ? '1' : '4/3'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: slot,
    shape: circle ? 'circle' : 'rounded',
    radius: "10",
    placeholder: ph
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--qb-paper-50)'
    }
  }, title, " ", tail && /*#__PURE__*/React.createElement("span", {
    style: {
      ...muted,
      fontWeight: 400
    }
  }, tail)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      ...muted
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, children)));
}
function Tile({
  icon,
  title,
  badge,
  text
}) {
  const [h, setH] = React.useState(false);
  const {
    Icon
  } = L;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...panel,
      padding: '32px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: h ? 'var(--qb-navy-800)' : 'var(--qb-navy-900)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      width: 64,
      height: 64,
      borderRadius: 16,
      background: 'var(--qb-navy-800)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28,
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: LUI + icon + '.svg',
    size: 28,
    color: "var(--qb-paper-50)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 500,
      color: 'var(--qb-paper-50)'
    }
  }, title, badge && /*#__PURE__*/React.createElement(Badge, null, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      ...muted
    }
  }, text));
}
function Row({
  left,
  right,
  href = '#',
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px dashed var(--border-hairline)',
      textDecoration: 'none',
      opacity: 1,
      fontSize: 16,
      color: h ? 'var(--qb-paper-50)' : 'var(--qb-navy-100)',
      transition: 'color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--qb-paper-50)'
    }
  }, left), /*#__PURE__*/React.createElement("span", {
    style: muted
  }, right));
}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    "data-screen-label": "Intro",
    style: {
      ...col,
      paddingTop: 'clamp(72px,9vw,120px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(40px,5vw,72px)',
      lineHeight: 1.02,
      color: 'var(--qb-paper-50)',
      maxWidth: '18em'
    }
  }, "Queen of the Baltic \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: muted
  }, "beauty, self-expression, charity.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.7,
      color: 'var(--qb-navy-100)',
      maxWidth: '62ch'
    }
  }, "An international contest for women from across the globe. We show the world that true beauty is more than appearance \u2014 it\u2019s strength of character, individuality, talent and kindness. Founded in Tallinn by ", /*#__PURE__*/React.createElement("a", {
    href: "#founder",
    style: {
      color: 'var(--qb-paper-50)',
      fontWeight: 500
    }
  }, "Kseniya Petrova"), "."));
}
function ApplyBlock({
  go
}) {
  const {
    Button
  } = L;
  return /*#__PURE__*/React.createElement(Block, {
    label: "Apply panel"
  }, /*#__PURE__*/React.createElement(Feature, {
    slot: "lx-apply",
    ph: "Application photo",
    title: "Applications",
    tail: "Season 2026",
    text: "Step onto the stage, work with industry professionals and gain access to international platforms. Every age, culture and story is welcome."
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "your@email.com",
    "aria-label": "Email",
    style: {
      flex: '1 1 180px',
      minWidth: 0,
      height: 44,
      padding: '0 14px',
      borderRadius: 10,
      border: '1px solid var(--border-subtle)',
      background: 'var(--qb-navy-800)',
      color: 'var(--qb-paper-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    variant: "solid",
    size: "sm",
    onClick: () => go('apply'),
    style: {
      minWidth: 0
    }
  }, "Apply now")));
}
function Experience() {
  return /*#__PURE__*/React.createElement(Block, {
    title: "The experience",
    id: "experience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lx-tiles lx-tiles-4"
  }, /*#__PURE__*/React.createElement(Tile, {
    icon: "sparkles",
    title: "The stage",
    badge: "2026",
    text: "Express yourself \u2014 on your own terms."
  }), /*#__PURE__*/React.createElement(Tile, {
    icon: "users",
    title: "The professionals",
    text: "Stylists, coaches, photographers and mentors."
  }), /*#__PURE__*/React.createElement(Tile, {
    icon: "heart",
    title: "The cause",
    text: "Every season supports children in need."
  }), /*#__PURE__*/React.createElement(Tile, {
    icon: "globe",
    title: "The world",
    text: "International platforms and a lasting community."
  })));
}
function CharityBlock() {
  const {
    TextLink
  } = L;
  return /*#__PURE__*/React.createElement(Block, {
    title: "In the name of Charity",
    id: "charity"
  }, /*#__PURE__*/React.createElement(Feature, {
    slot: "lx-charity-1",
    ph: "Charity photo",
    title: "True beauty lives at the heart",
    text: "We collaborate with foundations and support children in difficult life situations \u2014 because beauty, empowered by kindness, can change the world."
  }, /*#__PURE__*/React.createElement(TextLink, {
    tone: "dark",
    size: "sm"
  }, "Our mission")));
}
function FounderBlock() {
  const {
    IconCircle
  } = L;
  return /*#__PURE__*/React.createElement(Block, {
    title: "Founder",
    id: "founder"
  }, /*#__PURE__*/React.createElement(Feature, {
    circle: true,
    slot: "lx-founder",
    ph: "Portrait",
    title: "Kseniya Petrova",
    tail: "Founder",
    text: "\xABFor me, beauty is not only about appearance. It is a woman\u2019s energy, her character, her voice and her ability to change the world around her.\xBB"
  }, /*#__PURE__*/React.createElement(IconCircle, {
    tone: "dark",
    name: "mail",
    href: "mailto:contest@qotb.eu",
    size: 44
  }), /*#__PURE__*/React.createElement(IconCircle, {
    tone: "dark",
    name: "instagram",
    size: 44
  }), /*#__PURE__*/React.createElement(IconCircle, {
    tone: "dark",
    name: "spotify",
    size: 44
  })));
}
const FEAT = [['decus', 'Decus Clinic', 'Sponsor'], ['hearts', 'Hearts Fine Jewellery', 'General Partner'], ['elitcar', 'Elitcar', 'General Partner'], ['medavita', 'Medavita', 'General Partner']];
function PartnersBlock({
  go
}) {
  const {
    Button
  } = L;
  return /*#__PURE__*/React.createElement(Block, {
    title: "Partners",
    id: "partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lx-tiles lx-tiles-4"
  }, FEAT.map(([k, n, r]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      ...panel,
      padding: '28px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 88,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'partners/' + k + '.png',
    alt: n,
    style: {
      maxHeight: k === 'medavita' ? 26 : 56,
      maxWidth: '80%',
      width: 'auto',
      filter: 'brightness(0) invert(1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--qb-paper-50)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      ...muted
    }
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Feature, {
    slot: "lx-partner",
    ph: "Partner event photo",
    title: "Become a Partner",
    text: "Stand beside our charitable mission and reach an engaged, international audience."
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    variant: "solid",
    size: "sm",
    onClick: () => go('partner'),
    style: {
      minWidth: 0
    }
  }, "View packages"))));
}
function Tickets({
  go
}) {
  return /*#__PURE__*/React.createElement(Block, {
    title: "Get involved",
    id: "contacts"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    left: "Apply for Season 2026",
    right: "Open",
    onClick: e => {
      e.preventDefault();
      go('apply');
    }
  }), /*#__PURE__*/React.createElement(Row, {
    left: "Buy a ticket to the Final",
    right: "Tickets",
    onClick: e => {
      e.preventDefault();
      go('tickets');
    }
  }), /*#__PURE__*/React.createElement(Row, {
    left: "contest@qotb.eu",
    right: "Email",
    href: "mailto:contest@qotb.eu"
  }), /*#__PURE__*/React.createElement(Row, {
    left: "+372 5592 1134",
    right: "Phone",
    href: "tel:+37255921134"
  })));
}
const GCATS = ['All', 'Stage', 'Crowning', 'Runway', 'Backstage', 'Charity'];
const GITEMS = [['Stage', 'The Final', 'Grand stage', 1], ['Crowning', 'The Crown', 'Queen of the Baltic 2025', 2], ['Runway', 'Evening Gowns', 'Runway', 3], ['Backstage', 'Final Touches', 'Behind the scenes', 4], ['Stage', 'Opening Number', 'All contestants', 5], ['Charity', 'In the Name of Charity', 'Foundation evening', 6], ['Crowning', 'First Moments', 'Queen & runners-up', 7], ['Runway', 'Swimwear', 'Runway', 8], ['Backstage', 'Hair & Make-up', 'Behind the scenes', 9], ['Stage', 'The Sashes', 'Contestant line-up', 10], ['Charity', 'Giving Back', 'Children’s foundation', 11], ['Runway', 'Designer Round', 'Runway', 12]];
const mono = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: 'var(--qb-navy-300)'
};
function GCard({
  c,
  t,
  s,
  n,
  i
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      animation: 'qb-fade-up 600ms var(--ease-out) ' + i * 50 + 'ms both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3/4',
      background: 'var(--qb-navy-900)',
      borderRadius: 6,
      overflow: 'hidden',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'lx-gallery-' + n,
    shape: "rounded",
    radius: "6",
    placeholder: t
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "2025 \xB7 ", c, " \xB7 QB-", String(n).padStart(3, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      lineHeight: 1.1,
      color: 'var(--qb-paper-50)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1.1,
      color: 'var(--qb-navy-300)'
    }
  }, s)));
}
function Gallery({
  go
}) {
  const {
    Button
  } = L;
  const [cat, setCat] = React.useState('All');
  const [more, setMore] = React.useState(false);
  const list = GITEMS.filter(x => cat === 'All' || x[0] === cat);
  const shown = more ? list : list.slice(0, 8);
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    "data-screen-label": "Gallery",
    style: {
      padding: 'var(--section-y) var(--gutter)',
      maxWidth: 1440,
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Index, {
    n: "04",
    label: "Gallery"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '28px 0 40px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(40px,5vw,72px)',
      lineHeight: 1.02,
      letterSpacing: '-.01em',
      color: 'var(--qb-paper-50)',
      maxWidth: '16em'
    }
  }, "Moments from Season 2025, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--qb-navy-300)'
    }
  }, "on stage and behind it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: 'var(--qb-navy-900)',
      border: '1px solid var(--border-subtle)',
      flexWrap: 'wrap'
    }
  }, GCATS.map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    role: "tab",
    "aria-selected": cat === k,
    onClick: () => {
      setCat(k);
      setMore(false);
    },
    style: {
      height: 36,
      padding: '0 16px',
      borderRadius: 999,
      border: 0,
      cursor: 'pointer',
      background: cat === k ? 'var(--qb-paper-50)' : 'transparent',
      color: cat === k ? 'var(--qb-navy-950)' : 'var(--qb-navy-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, k))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 12
    }
  }, list.length, " moments")), /*#__PURE__*/React.createElement("div", {
    className: "lx-grid",
    key: cat
  }, shown.map((x, i) => /*#__PURE__*/React.createElement(GCard, {
    key: x[3],
    c: x[0],
    t: x[1],
    s: x[2],
    n: x[3],
    i: i
  }))), list.length > 8 && !more && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    size: "sm",
    onClick: () => setMore(true)
  }, "Load more")));
}
function LuxeHome({
  go,
  cols
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(ApplyBlock, {
    go: go
  }), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(CharityBlock, null), /*#__PURE__*/React.createElement(FounderBlock, null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'clamp(64px,8vw,112px)'
    }
  }), /*#__PURE__*/React.createElement(Gallery, {
    go: go
  }), /*#__PURE__*/React.createElement(LogoStrip, null), /*#__PURE__*/React.createElement(PartnersBlock, {
    go: go
  }), /*#__PURE__*/React.createElement(Tickets, {
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'clamp(72px,9vw,120px)'
    }
  }));
}
Object.assign(window, {
  LuxeHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-luxe/Luxe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-luxe/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-luxe/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website-sea/Sea.jsx
try { (() => {
const S = window.QueenOfTheBalticDesignSystem_68b937;
const A = '../../assets/';
const PH = n => A + 'photos/gallery-' + n + '.jpg';
// Set to the contest's own footage (e.g. A+'video/hero.mp4'); poster shows until then.
const HERO_VIDEO = null;
const tag = {
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '.24em',
  textTransform: 'uppercase',
  color: 'var(--sea-amber)'
};
const corner = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: 'clamp(26px,3.4vw,52px)',
  lineHeight: 1,
  color: 'var(--sea-salt)',
  textDecoration: 'none',
  opacity: 1,
  transition: 'color var(--dur-base) var(--ease-out)'
};
function Corner({
  children,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...corner,
      color: h ? 'var(--sea-glass)' : 'var(--sea-salt)',
      ...style
    }
  }, children);
}
function Pill({
  children,
  onClick,
  solid
}) {
  const [h, setH] = React.useState(false);
  const f = solid ? !h : h;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: 48,
      padding: '0 26px',
      borderRadius: 999,
      border: '1px solid var(--sea-salt)',
      background: f ? 'var(--sea-salt)' : 'transparent',
      color: f ? 'var(--sea-abyss)' : 'var(--sea-salt)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, children);
}
function Cap({
  src,
  style,
  className
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 999,
      overflow: 'hidden',
      background: 'var(--sea-deep)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: h ? 'grayscale(0)' : 'grayscale(1) contrast(1.05)',
      transform: h ? 'scale(1.04)' : 'none',
      transition: 'transform 900ms var(--ease-out), filter 900ms var(--ease-out)'
    }
  }));
}
function Hero({
  go
}) {
  const {
    Wordmark
  } = S;
  const fa = d => ({
    animation: 'qb-fade-up 1000ms var(--ease-out) ' + d + 'ms both'
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      height: '100svh',
      minHeight: 620,
      overflow: 'hidden',
      background: 'var(--sea-trench)'
    }
  }, HERO_VIDEO ? /*#__PURE__*/React.createElement("video", {
    src: HERO_VIDEO,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-2%',
      background: 'url(' + PH(4) + ') center 25%/cover',
      filter: 'grayscale(1) blur(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(3,22,27,.35),rgba(7,42,49,.55) 55%,rgba(3,22,27,.95))',
      mixBlendMode: 'normal'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(19,90,99,.28)',
      mixBlendMode: 'color'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sx-corners"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "light",
    height: 24,
    assetsBase: A
  })), /*#__PURE__*/React.createElement(Corner, {
    onClick: () => go('apply'),
    style: {
      justifySelf: 'end'
    }
  }, "Apply"), /*#__PURE__*/React.createElement(Corner, {
    onClick: () => go('charity'),
    style: {
      alignSelf: 'end'
    }
  }, "(Charity)"), /*#__PURE__*/React.createElement(Corner, {
    onClick: () => go('tickets'),
    style: {
      justifySelf: 'end',
      alignSelf: 'end'
    }
  }, "Tickets")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 26,
      padding: '0 var(--gutter)',
      textAlign: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...fa(0),
      ...tag,
      color: 'var(--sea-glass)'
    }
  }, "International \xB7 Season 2026"), /*#__PURE__*/React.createElement("div", {
    style: fa(120)
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "mermaid",
    tone: "light",
    assetsBase: A,
    style: {
      width: 'min(880px,88vw)',
      height: 'auto'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      ...fa(240),
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,2.2vw,32px)',
      lineHeight: 1.3,
      color: 'var(--sea-salt)',
      maxWidth: '26em'
    }
  }, "She\u2019s not just a queen \u2014 she\u2019s a force."), /*#__PURE__*/React.createElement("div", {
    className: "sx-ctas",
    style: {
      ...fa(360),
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    onClick: () => go('apply')
  }, "Apply now"), /*#__PURE__*/React.createElement(Pill, {
    solid: true,
    onClick: () => go('tickets')
  }, "Buy a ticket"))));
}
function About({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    "data-screen-label": "About",
    style: {
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tag
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-h1)',
      lineHeight: 1.05,
      textTransform: 'uppercase',
      color: 'var(--sea-salt)',
      maxWidth: '16em',
      textWrap: 'balance'
    }
  }, "A contest for women from across the globe"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '58ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "We created this project to unite women of the Baltic region and to show the world that true beauty is more than appearance \u2014 it\u2019s strength of character, individuality, talent and kindness. Participants step onto the stage, work with industry professionals, contribute to charity and gain access to international platforms."), /*#__PURE__*/React.createElement(Pill, {
    onClick: () => go('gallery')
  }, "See the gallery"));
}
const STRIP = ['decus', 'hearts', 'elitcar', 'medavita', '20min', 'mediabros', 'sash', 'lafee', 'dodo-pizza', 'cia', 'alex-model-coach', 'meerhof', 'hikari', 'dolores', 'liisa', 'anna-creative'];
function LogoStrip() {
  const row = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(48px,6vw,96px)',
      paddingRight: 'clamp(48px,6vw,96px)',
      flex: 'none'
    }
  }, STRIP.map(k => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: A + 'partners/' + k + '.png',
    alt: k,
    style: {
      height: k === '20min' || k === 'meerhof' ? 42 : 28,
      width: 'auto',
      flex: 'none',
      filter: 'brightness(0) invert(1)',
      opacity: .78
    }
  })));
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "Partners",
    "data-screen-label": "Partner strip",
    style: {
      padding: '28px 0',
      overflow: 'hidden',
      borderBlock: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'qb-marquee 60s linear infinite'
    }
  }, row, row));
}
function Capsules() {
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery-preview",
    "data-screen-label": "Capsule gallery",
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-caps"
  }, /*#__PURE__*/React.createElement(Cap, {
    src: PH(2),
    className: "w2"
  }), /*#__PURE__*/React.createElement(Cap, {
    src: PH(5)
  }), /*#__PURE__*/React.createElement(Cap, {
    src: PH(1)
  }), /*#__PURE__*/React.createElement(Cap, {
    src: PH(9),
    className: "w2"
  }), /*#__PURE__*/React.createElement(Cap, {
    src: PH(3),
    className: "w2"
  }), /*#__PURE__*/React.createElement(Cap, {
    src: PH(8)
  })));
}
function Charity() {
  const {
    Wordmark
  } = S;
  return /*#__PURE__*/React.createElement("section", {
    id: "charity",
    "data-screen-label": "Charity",
    style: {
      background: 'var(--sea-deep)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-charity"
  }, /*#__PURE__*/React.createElement(Cap, {
    src: PH(7),
    style: {
      aspectRatio: '1/1.6'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "crown",
    tone: "light",
    height: 34,
    assetsBase: A
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(28px,3vw,44px)',
      color: 'var(--sea-amber-soft)',
      lineHeight: 1.1
    }
  }, "In the name of Charity."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.1,
      textTransform: 'uppercase',
      color: 'var(--sea-salt)',
      textWrap: 'balance'
    }
  }, "True beauty lives at the heart of our contest"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.7,
      color: 'var(--sea-foam)',
      maxWidth: '50ch'
    }
  }, "Queen of the Baltic carries a charitable mission: we collaborate with foundations and support children in difficult life situations. Beauty, empowered by kindness, has the strength to change the world."))));
}
function Founder() {
  const {
    IconCircle
  } = S;
  return /*#__PURE__*/React.createElement("section", {
    id: "founder",
    "data-screen-label": "Founder",
    style: {
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'photos/founder-kseniya-petrova.png',
    alt: "Kseniya Petrova",
    style: {
      width: 168,
      height: 168,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: tag
  }, "Founder"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'clamp(32px,3.6vw,52px)',
      lineHeight: 1.05,
      color: 'var(--sea-salt)'
    }
  }, "Kseniya Petrova ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--sea-glass)'
    }
  }, "\u2014 founder")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '34ch',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(24px,2.4vw,34px)',
      lineHeight: 1.3,
      color: 'var(--sea-foam)'
    }
  }, "\xABFor me, beauty is not only about appearance. It is a woman\u2019s energy, her character, her voice.\xBB"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '56ch',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, "Having represented Estonia on the global stage, Kseniya created Queen of the Baltic as a modern platform uniting women of different countries and generations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    tone: "dark",
    name: "mail",
    href: "mailto:contest@qotb.eu",
    size: 44
  }), /*#__PURE__*/React.createElement(IconCircle, {
    tone: "dark",
    name: "instagram",
    size: 44
  }), /*#__PURE__*/React.createElement(IconCircle, {
    tone: "dark",
    name: "spotify",
    size: 44
  })));
}
function Actions({
  go
}) {
  const rows = [['apply', 'Apply now', 'Season 2026'], ['tickets', 'Buy a ticket', 'The Final'], ['partner', 'Become a Partner', 'Partners in purpose']];
  const [h, setH] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Actions",
    style: {
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, rows.map(([k, t, s], i) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    onMouseEnter: () => setH(k),
    onMouseLeave: () => setH(null),
    className: "sx-row",
    style: {
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: i === 2 ? '1px solid var(--border-hairline)' : 'none',
      textDecoration: 'none',
      opacity: 1,
      color: h === k ? 'var(--sea-abyss)' : 'var(--sea-salt)',
      background: h === k ? 'var(--sea-glass)' : 'transparent',
      borderRadius: h === k ? 999 : 0,
      transition: 'all 420ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'clamp(32px,5vw,76px)',
      lineHeight: 1
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "sx-row-sub",
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 22,
      opacity: .8
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 30
    }
  }, "\u2192"))));
}
function SeaHome({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(About, {
    go: go
  }), /*#__PURE__*/React.createElement(LogoStrip, null), /*#__PURE__*/React.createElement(Capsules, null), /*#__PURE__*/React.createElement(Charity, null), /*#__PURE__*/React.createElement(Founder, null), /*#__PURE__*/React.createElement(Actions, {
    go: go
  }));
}
Object.assign(window, {
  SeaHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-sea/Sea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Forms.jsx
try { (() => {
const DSf = window.QueenOfTheBalticDesignSystem_68b937;
const Af = '../../assets/';
function PageShell({
  eyebrow,
  title,
  lead,
  children,
  go,
  label
}) {
  const {
    SiteNav,
    SectionHeading
  } = DSf;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--qb-navy-800)',
      color: 'var(--text-on-inverse)'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    tone: "dark",
    solid: true,
    onNavigate: go,
    onCta: () => go('apply'),
    assetsBase: Af
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'clamp(48px,7vw,96px) var(--gutter) clamp(56px,7vw,96px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: eyebrow,
    title: title,
    align: "center",
    size: "lg",
    as: "h1"
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '52ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)'
    }
  }, lead))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, children));
}
function Done({
  title,
  text,
  go
}) {
  const {
    Wordmark,
    Button,
    Lead
  } = DSf;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      textAlign: 'center',
      padding: '24px 0',
      animation: 'qb-fade-up var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "crown",
    height: 40,
    assetsBase: Af
  }), /*#__PURE__*/React.createElement(Lead, null, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '48ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)'
    }
  }, text), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('home')
  }, "Back to home"));
}
function ApplyScreen({
  go
}) {
  const {
    TextField,
    SelectField,
    Checkbox,
    Button
  } = DSf;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(PageShell, {
    label: "Apply",
    go: go,
    eyebrow: "Season 2026",
    title: "Apply now",
    lead: "Every age, culture and story is welcome. Tell us who you are \u2014 the stage is yours to express it."
  }, sent ? /*#__PURE__*/React.createElement(Done, {
    go: go,
    title: "Thank you \u2014 your story has reached us.",
    text: "Our team reviews every application personally. Expect a reply at the email you provided within a few working days."
  }) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qb-two",
    style: {
      gap: '32px 40px'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Full name",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Date of birth",
    type: "date",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Phone",
    type: "tel"
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: "Country",
    required: true,
    options: ['Estonia', 'Latvia', 'Lithuania', 'Finland', 'Other']
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Instagram",
    placeholder: "@"
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "Tell us about yourself",
    multiline: true,
    rows: 5,
    hint: "Your passions, talents, and the cause you care about."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to the contest rules and the processing of my personal data."
  }), /*#__PURE__*/React.createElement("div", {
    className: "qb-cta-row",
    style: {
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "solid"
  }, "Send application"))));
}
function TicketsScreen({
  go
}) {
  const {
    Button
  } = DSf;
  const tiers = [{
    id: 'std',
    name: 'Standard',
    note: 'Hall seating, full show'
  }, {
    id: 'vip',
    name: 'VIP',
    note: 'Front rows, welcome drink, after-party'
  }];
  const [t, setT] = React.useState('std');
  const [q, setQ] = React.useState(1);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(PageShell, {
    label: "Tickets",
    go: go,
    eyebrow: "The Final \xB7 2026",
    title: "Buy a ticket",
    lead: "Join us for an evening of elegance, self-expression and charity. Part of every ticket supports children in difficult life situations."
  }, sent ? /*#__PURE__*/React.createElement(Done, {
    go: go,
    title: "See you at the Final.",
    text: "Your tickets are on their way to your inbox."
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, tiers.map(x => /*#__PURE__*/React.createElement("label", {
    key: x.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '24px 4px',
      borderBottom: '1px solid var(--border-hairline)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "tier",
    checked: t === x.id,
    onChange: () => setT(x.id),
    style: {
      position: 'absolute',
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: '1px solid var(--qb-navy-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, t === x.id && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--qb-navy-800)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, x.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)'
    }
  }, x.note))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--text-heading)'
    }
  }, "Quantity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      border: '1px solid var(--qb-navy-800)',
      borderRadius: 999
    }
  }, [['−', -1], [q], ['+', 1]].map(([l, d], i) => d === undefined ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 40,
      textAlign: 'center',
      fontSize: 18
    }
  }, l) : /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": d > 0 ? 'More' : 'Fewer',
    onClick: () => setQ(Math.max(1, q + d)),
    style: {
      width: 48,
      height: 48,
      border: 0,
      background: 'none',
      fontSize: 22,
      color: 'var(--qb-navy-800)',
      cursor: 'pointer'
    }
  }, l)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, "Date, venue and prices are placeholders \u2014 confirm with the organisers."), /*#__PURE__*/React.createElement("div", {
    className: "qb-cta-row",
    style: {
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => setSent(true)
  }, "Continue to payment"))));
}
function PartnerScreen({
  go
}) {
  const {
    TextField,
    SelectField,
    Button
  } = DSf;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(PageShell, {
    label: "Become a Partner",
    go: go,
    eyebrow: "Beauty, empowered by kindness",
    title: "Become a Partner",
    lead: "Partners of Queen of the Baltic stand beside our charitable mission and reach an engaged, international audience."
  }, sent ? /*#__PURE__*/React.createElement(Done, {
    go: go,
    title: "Thank you for reaching out.",
    text: "We will contact you personally to discuss how we can create something meaningful together."
  }) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qb-two",
    style: {
      gap: '32px 40px'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Company",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Contact person",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: "Partnership",
    options: ['General Partner', 'Sponsor', 'Media Partner', 'In-kind / Services']
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "How would you like to take part?",
    multiline: true,
    rows: 4
  }), /*#__PURE__*/React.createElement("div", {
    className: "qb-cta-row",
    style: {
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "solid"
  }, "Send request"))));
}
function GalleryScreen({
  go
}) {
  const {
    SiteNav,
    SectionHeading
  } = DSf;
  const ph = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Gallery"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--qb-navy-800)'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    tone: "dark",
    solid: true,
    active: "#gallery",
    onNavigate: go,
    onCta: () => go('apply'),
    assetsBase: Af
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Season 2025",
    title: "Gallery",
    size: "lg",
    as: "h1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qb-gallery"
  }, ph.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setOpen(n),
    style: {
      padding: 0,
      border: 0,
      background: 'none',
      cursor: 'zoom-in'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: Af + 'photos/gallery-' + n + '.jpg',
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      filter: 'grayscale(1)',
      transition: 'opacity var(--dur-base)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = .8,
    onMouseLeave: e => e.currentTarget.style.opacity = 1
  }))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(3,22,41,.94)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      cursor: 'zoom-out',
      animation: 'qb-fade-up var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: Af + 'photos/gallery-' + open + '.jpg',
    alt: "",
    style: {
      maxHeight: '86vh',
      maxWidth: '100%',
      filter: 'grayscale(1)'
    }
  })));
}
Object.assign(window, {
  ApplyScreen,
  TicketsScreen,
  PartnerScreen,
  GalleryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Forms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const DS = window.QueenOfTheBalticDesignSystem_68b937;
const A = '../../assets/';
const Em = ({
  children
}) => /*#__PURE__*/React.createElement("em", {
  style: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.12em',
    color: 'var(--text-heading)'
  }
}, children);
function Hero({
  go
}) {
  const {
    SiteNav,
    Button,
    Wordmark
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    "data-screen-label": "Home hero",
    style: {
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--qb-paper-50)',
      background: 'var(--qb-navy-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(' + A + 'photos/gallery-4.jpg) center 30%/cover',
      filter: 'grayscale(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    tone: "dark",
    showLogo: false,
    cta: null,
    active: "#home",
    onNavigate: go,
    onCta: () => go('apply'),
    assetsBase: A
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      padding: '24px var(--gutter) 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(40px,8vw,96px)',
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(28px,3vw,40px)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "20"), /*#__PURE__*/React.createElement(Wordmark, {
    variant: "figure",
    tone: "light",
    height: 150,
    assetsBase: A,
    style: {
      height: 'clamp(110px,16vw,190px)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "26")), /*#__PURE__*/React.createElement(Wordmark, {
    tone: "light",
    assetsBase: A,
    style: {
      height: 'auto',
      width: 'min(820px,86vw)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(15px,1.6vw,22px)',
      letterSpacing: 'var(--ls-eyebrow)',
      marginRight: '-.28em'
    }
  }, "INTERNATIONAL"), /*#__PURE__*/React.createElement("div", {
    className: "qb-cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    onClick: () => go('apply')
  }, "Apply now!"), /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    variant: "solid",
    onClick: () => go('tickets')
  }, "Buy a ticket")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.6
    }
  }, "More than a beauty contest, we are a movement that celebrates both outer and inner radiance, empowering women to shine in every aspect of life.")), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: {
      position: 'relative',
      alignSelf: 'center',
      marginBottom: 28,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--qb-paper-50)',
      textDecoration: 'none',
      letterSpacing: '.08em'
    }
  }, "Scroll \u2193"));
}
function About({
  go
}) {
  const {
    SectionHeading,
    Lead,
    TextLink
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    "data-screen-label": "About",
    style: {
      background: 'var(--qb-navy-800)',
      color: 'var(--text-on-inverse)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    title: "About",
    align: "center",
    size: "md"
  }), /*#__PURE__*/React.createElement(Lead, {
    tone: "dark"
  }, "An international beauty and self-expression contest for women from across the globe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We created this project to unite women of the Baltic region and to show the world that true beauty is more than appearance \u2014 it's strength of character, individuality, talent, and kindness."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The contest offers participants the opportunity to express themselves, step onto the stage, work with industry professionals, contribute to charity, and gain access to international platforms. It is built on personal experience in global beauty competitions and a sincere desire to create a space where women are valued for their age, culture, and inner depth.")), /*#__PURE__*/React.createElement(TextLink, {
    tone: "dark",
    href: "#gallery",
    onClick: e => {
      e.preventDefault();
      go('gallery');
    }
  }, "Take a look at the Gallery")));
}
function Charity() {
  const {
    PhotoCollage,
    SectionHeading,
    Wordmark
  } = DS;
  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => A + 'photos/gallery-' + n + '.jpg');
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "crown",
    height: 44,
    assetsBase: A
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "In the name of Charity.",
    align: "center",
    size: "md",
    title: "True beauty lives at the heart of our contest"
  }), /*#__PURE__*/React.createElement(Wordmark, {
    height: 52,
    assetsBase: A,
    style: {
      height: 'auto',
      width: 'min(560px,80vw)',
      marginTop: 8
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "charity",
    "data-screen-label": "Charity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qb-desktop",
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(PhotoCollage, {
    photos: photos,
    height: 760
  }, inner)), /*#__PURE__*/React.createElement("div", {
    className: "qb-mobile",
    style: {
      padding: '56px var(--gutter)',
      flexDirection: 'column',
      gap: 32
    }
  }, inner, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 6
    }
  }, photos.slice(0, 6).map(p => /*#__PURE__*/React.createElement("img", {
    key: p,
    src: p,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      filter: 'grayscale(1)'
    }
  })))));
}
function Founder() {
  const {
    IconCircle,
    Quote
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "founder",
    "data-screen-label": "Founder",
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'photos/founder-kseniya-petrova.png',
    alt: "Kseniya Petrova",
    style: {
      width: 'clamp(180px,20vw,240px)',
      aspectRatio: '1',
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-heading)'
    }
  }, "Kseniya Petrova"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Founder of Queen of the Baltic")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    name: "mail",
    href: "mailto:contest@qotb.eu"
  }), /*#__PURE__*/React.createElement(IconCircle, {
    name: "phone"
  }), /*#__PURE__*/React.createElement(IconCircle, {
    name: "instagram"
  }), /*#__PURE__*/React.createElement(IconCircle, {
    name: "spotify"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Ksenia Petrova is the founder of the international beauty and cultural project ", /*#__PURE__*/React.createElement(Em, null, "Queen of the Baltic International"), ", entrepreneur and initiator of cultural and social initiatives."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Having experienced the international pageant world firsthand while representing Estonia on the global stage, she created ", /*#__PURE__*/React.createElement(Em, null, "Queen of the Baltic"), " as a modern platform that brings together women from different countries and generations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      textAlign: 'left',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    title: "Founder\u2019s Manifesto",
    author: "Ksenia Petrova"
  }, "\xABFor me, beauty is not only about appearance. It is a woman\u2019s energy, her character, her voice and her ability to change the world around her. Queen of the Baltic was created as a space where women can reveal their strength, their story and their influence.\xBB"))));
}
const GRID = [['20min', 64], ['mediabros', 26], ['sash', 56], ['favourite-beauty-house', 64], ['allikas', 56], ['lafee', 64], ['maximum', 64], ['dodo-pizza', 52], ['adelyne', 84], ['cia', 56], ['alex-model-coach', 64], ['fashion-on', 30], ['reach', 22], ['ab-fashion-design', 64], ['meerhof', 80], ['anna-creative', 52], ['hikari', 56], ['dolores', 30], ['liisa', 48], ['alice', 64]];
function Partners({
  go,
  cols
}) {
  const {
    SectionHeading,
    PartnerFeature,
    LogoGrid,
    Button
  } = DS;
  const P = A + 'partners/';
  return /*#__PURE__*/React.createElement("section", {
    id: "partners",
    "data-screen-label": "Partners",
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(64px,8vw,112px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qb-split"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rule: true,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Our partners", /*#__PURE__*/React.createElement("br", null), "& sponsors"),
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Your support is more than a contribution to the contest \u2014 it\u2019s a step toward meaningful change."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Queen of the Baltic carries a charitable mission: we collaborate with foundations and support children in difficult life situations."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Our partners become part of this purpose, because beauty, empowered by kindness, has the strength to change the world."))), /*#__PURE__*/React.createElement(PartnerFeature, {
    logo: P + 'decus.png',
    logoHeight: 80,
    name: "Decus Clinic",
    role: "Sponsor",
    description: "Decus is a beauty clinic in Tallinn offering a wide range of effective treatments to help you maintain a youthful appearance, shape your body, enhance facial and body aesthetics and solve skin concerns."
  }), /*#__PURE__*/React.createElement("div", {
    className: "qb-two"
  }, /*#__PURE__*/React.createElement(PartnerFeature, {
    logo: P + 'hearts.png',
    logoHeight: 96,
    name: "Hearts Fine Jewellery",
    description: "Hearts Jewelry House is an expert in investment diamonds since 1991. Official dealer of DeBeers and RapNet, member of GIA and Global Blue."
  }), /*#__PURE__*/React.createElement(PartnerFeature, {
    logo: P + 'elitcar.png',
    logoHeight: 88,
    name: "Elitcar: Luxury & Sports Cars",
    description: "ELITCAR offers elite sports cars and luxury vehicles. Premium car rental and sales services in Estonia."
  })), /*#__PURE__*/React.createElement(PartnerFeature, {
    logo: P + 'medavita.png',
    logoHeight: 44,
    name: "Medavita",
    description: "Medavita is an Italian brand of professional haircare, founded in 1963 in Milan, renowned for formulas based on natural ingredients combining tradition with modern scientific innovation."
  }), /*#__PURE__*/React.createElement(LogoGrid, {
    columns: cols,
    cellHeight: cols === 2 ? 140 : 200,
    logos: GRID.map(([n, h]) => ({
      src: P + n + '.png',
      name: n,
      maxHeight: cols === 2 ? Math.round(h * .75) : h
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('partner')
  }, "Become a Partner"))));
}
function Contacts() {
  const {
    SectionHeading,
    IconCircle
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "contacts",
    "data-screen-label": "Contacts",
    style: {
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rule: true,
    title: "Contacts",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontSize: 'var(--fs-h3)',
      fontWeight: 300,
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+37255921134",
    style: {
      textDecoration: 'none'
    }
  }, "+372 5592 1134"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contest@qotb.eu",
    style: {
      textDecoration: 'none'
    }
  }, "contest@qotb.eu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    name: "instagram",
    size: 44
  }), /*#__PURE__*/React.createElement(IconCircle, {
    name: "facebook",
    size: 44
  }), /*#__PURE__*/React.createElement(IconCircle, {
    name: "linkedin",
    size: 44
  }))));
}
function HomeScreen({
  go,
  cols
}) {
  const {
    Marquee
  } = DS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(About, {
    go: go
  }), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(Charity, null), /*#__PURE__*/React.createElement(Founder, null), /*#__PURE__*/React.createElement(Partners, {
    go: go,
    cols: cols
  }), /*#__PURE__*/React.createElement(Contacts, null));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.LogoGrid = __ds_scope.LogoGrid;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.PartnerFeature = __ds_scope.PartnerFeature;

__ds_ns.PhotoCollage = __ds_scope.PhotoCollage;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.FeaturePanel = __ds_scope.FeaturePanel;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.IndexLabel = __ds_scope.IndexLabel;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.Lead = __ds_scope.Lead;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
