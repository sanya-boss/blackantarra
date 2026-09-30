/* @ds-bundle: {"format":4,"namespace":"BlackAntarraDesignSystem_1f78a4","components":[{"name":"BrandBand","sourcePath":"components/brand/BrandBand.jsx"},{"name":"Hero","sourcePath":"components/brand/Hero.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"AdvantageCard","sourcePath":"components/cards/AdvantageCard.jsx"},{"name":"BreedCard","sourcePath":"components/cards/BreedCard.jsx"},{"name":"BreederCard","sourcePath":"components/cards/BreederCard.jsx"},{"name":"CatCard","sourcePath":"components/cards/CatCard.jsx"},{"name":"NewsCard","sourcePath":"components/cards/NewsCard.jsx"},{"name":"ContactBlock","sourcePath":"components/contact/ContactBlock.jsx"},{"name":"PartnerGrid","sourcePath":"components/contact/PartnerGrid.jsx"},{"name":"Dialog","sourcePath":"components/content/Dialog.jsx"},{"name":"Prose","sourcePath":"components/content/Prose.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"EmptyState","sourcePath":"components/core/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/core/EmptyState.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"FormNote","sourcePath":"components/forms/TextField.jsx"},{"name":"FeaturedCat","sourcePath":"components/media/FeaturedCat.jsx"},{"name":"Gallery","sourcePath":"components/media/Gallery.jsx"},{"name":"Lightbox","sourcePath":"components/media/Lightbox.jsx"},{"name":"Photo","sourcePath":"components/media/Photo.jsx"},{"name":"Slider","sourcePath":"components/media/Slider.jsx"},{"name":"LanguageSwitcher","sourcePath":"components/navigation/LanguageSwitcher.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/BrandBand.jsx":"9fd3f29ba506","components/brand/Hero.jsx":"251b4cff5905","components/brand/Logo.jsx":"5ffbf67a8167","components/cards/AdvantageCard.jsx":"851efaf665cb","components/cards/BreedCard.jsx":"7b125809195a","components/cards/BreederCard.jsx":"456115298cdf","components/cards/CatCard.jsx":"c98f53d3fc10","components/cards/NewsCard.jsx":"d10fc408460b","components/contact/ContactBlock.jsx":"358aec7cde43","components/contact/PartnerGrid.jsx":"1ae2f217db15","components/content/Dialog.jsx":"f1f1d975f816","components/content/Prose.jsx":"40c1a4c66a2c","components/core/Button.jsx":"3b0b4056f403","components/core/EmptyState.jsx":"9585957749e9","components/core/Icon.jsx":"7b0cd8418850","components/core/IconButton.jsx":"aa5b7abe012e","components/core/SectionHeading.jsx":"8ae49a8dec67","components/core/StatusBadge.jsx":"a661c4c4611c","components/core/TextLink.jsx":"0f51d09f4d08","components/forms/TextField.jsx":"543d98a7586f","components/media/FeaturedCat.jsx":"e16cc7139892","components/media/Gallery.jsx":"2e199454c5c8","components/media/Lightbox.jsx":"a0506754f5d2","components/media/Photo.jsx":"1b11c903f673","components/media/Slider.jsx":"94e8931a777e","components/navigation/LanguageSwitcher.jsx":"0d13b8b50226","components/navigation/SiteFooter.jsx":"8e6a70c080f2","components/navigation/SiteHeader.jsx":"ce5459df2236","ui_kits/website/CatalogPages.jsx":"c52dd5eb618d","ui_kits/website/HomePage.jsx":"e7370af2a102","ui_kits/website/data.js":"05169db6676f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlackAntarraDesignSystem_1f78a4 = window.BlackAntarraDesignSystem_1f78a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandBand.jsx
try { (() => {
function BrandBand({
  items = ['Black Antarra', 'Siamese', 'Oriental', 'Cattery'],
  animated = true,
  repeat = 6,
  pauseLabel = 'Pause',
  className = ''
}) {
  const [paused, setPaused] = React.useState(false);
  const seq = Array.from({
    length: repeat
  }, () => items).flat();
  const track = k => /*#__PURE__*/React.createElement("div", {
    className: "ba-band__track",
    key: k
  }, seq.map((t, i) => /*#__PURE__*/React.createElement("span", {
    className: "ba-band__item",
    key: i
  }, t)));
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-band ${animated ? 'ba-band--animated' : ''} ${paused ? 'is-paused' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'flex'
    }
  }, track('a'), animated && track('b')), animated && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ba-band__pause",
    onClick: () => setPaused(p => !p),
    "aria-label": pauseLabel,
    "aria-pressed": paused
  }, paused ? '▶' : 'II'));
}
Object.assign(__ds_scope, { BrandBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/Hero.jsx
try { (() => {
function Hero({
  title,
  text,
  actions,
  illustration,
  illustrationAlt = '',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `ba-hero ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-hero__copy"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ba-hero__title"
  }, title), text && /*#__PURE__*/React.createElement("p", {
    className: "ba-hero__text"
  }, text), actions && /*#__PURE__*/React.createElement("div", {
    className: "ba-hero__actions"
  }, actions)), illustration && /*#__PURE__*/React.createElement("div", {
    className: "ba-hero__art"
  }, /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: illustrationAlt
  }))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Hero.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = 'full',
  size = 30,
  href,
  src,
  imgHeight = 120,
  align = 'center',
  tagline = 'Siamese & Oriental Cattery',
  className = ''
}) {
  const Tag = href ? 'a' : 'span';
  const style = {
    '--logo-size': `${size}px`,
    '--logo-img-h': `${imgHeight}px`
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    className: `ba-logo ${align === 'start' ? 'ba-logo--start' : ''} ${className}`,
    style: style,
    "aria-label": href ? 'Black Antarra — home' : undefined
  }, variant === 'lockup' && src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Black Antarra \u2014 Siamese & Oriental Cattery"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "ba-logo__name"
  }, "Black Antarra"), variant === 'full' && /*#__PURE__*/React.createElement("span", {
    className: "ba-logo__sub"
  }, tagline)));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/AdvantageCard.jsx
try { (() => {
function AdvantageCard({
  illustration,
  title,
  text,
  artHeight = 168,
  headingLevel = 3,
  className = ''
}) {
  const H = `h${headingLevel}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-adv ${className}`,
    style: {
      '--adv-h': `${artHeight}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-adv__art"
  }, illustration && /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: ""
  })), /*#__PURE__*/React.createElement(H, {
    className: "ba-adv__title"
  }, title), text && /*#__PURE__*/React.createElement("p", {
    className: "ba-adv__text"
  }, text));
}
Object.assign(__ds_scope, { AdvantageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AdvantageCard.jsx", error: String((e && e.message) || e) }); }

// components/contact/PartnerGrid.jsx
try { (() => {
function PartnerGrid({
  partners = [],
  columns,
  logoHeight = 44,
  className = ''
}) {
  const n = partners.length;
  const cols = columns || (n <= 2 ? 2 : n === 4 ? 4 : 3);
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-partners ${className}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "ba-partners__grid",
    style: {
      '--cols': cols,
      '--logo-h': `${logoHeight}px`,
      maxWidth: n <= 2 ? 560 : undefined,
      marginInline: 'auto',
      width: '100%'
    }
  }, partners.map((p, k) => {
    const inner = p.logo ? /*#__PURE__*/React.createElement("img", {
      src: p.logo,
      alt: p.name,
      style: p.scale ? {
        maxHeight: `calc(var(--logo-h) * ${p.scale})`
      } : undefined
    }) : /*#__PURE__*/React.createElement("span", {
      className: "ba-partner__name"
    }, p.name);
    return /*#__PURE__*/React.createElement("li", {
      key: k,
      style: {
        display: 'contents'
      }
    }, p.href ? /*#__PURE__*/React.createElement("a", {
      className: "ba-partner",
      href: p.href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, inner) : /*#__PURE__*/React.createElement("div", {
      className: "ba-partner"
    }, inner));
  })));
}
Object.assign(__ds_scope, { PartnerGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contact/PartnerGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/Prose.jsx
try { (() => {
function Prose({
  children,
  as = 'div',
  className = ''
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    className: `ba-prose ${className}`
  }, children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prose.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const P = {
  menu: [['path', 'M4 7h16M4 12h16M4 17h16']],
  x: [['path', 'M18 6 6 18M6 6l12 12']],
  'chevron-left': [['path', 'm15 18-6-6 6-6']],
  'chevron-right': [['path', 'm9 18 6-6-6-6']],
  'chevron-down': [['path', 'm6 9 6 6 6-6']],
  'arrow-right': [['path', 'M5 12h14M12 5l7 7-7 7']],
  'arrow-up-right': [['path', 'M7 7h10v10M7 17 17 7']],
  phone: [['path', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z']],
  mail: [['rect', {
    x: 2,
    y: 4,
    width: 20,
    height: 16,
    rx: 2
  }], ['path', 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7']],
  globe: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['path', 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20']],
  image: [['rect', {
    x: 3,
    y: 3,
    width: 18,
    height: 18,
    rx: 2
  }], ['circle', {
    cx: 9,
    cy: 9,
    r: 2
  }], ['path', 'm21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21']],
  loader: [['path', 'M21 12a9 9 0 1 1-6.22-8.56']],
  'map-pin': [['path', 'M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0'], ['circle', {
    cx: 12,
    cy: 10,
    r: 3
  }]],
  plus: [['path', 'M5 12h14M12 5v14']],
  check: [['path', 'M20 6 9 17l-5-5']],
  alert: [['circle', {
    cx: 12,
    cy: 12,
    r: 10
  }], ['path', 'M12 8v4M12 16h.01']],
  expand: [['path', 'M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7']],
  calendar: [['rect', {
    x: 3,
    y: 4,
    width: 18,
    height: 18,
    rx: 2
  }], ['path', 'M16 2v4M8 2v4M3 10h18']],
  newspaper: [['path', 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5M10 6h8v4h-8V6Z']]
};
// Brand glyphs copied from Simple Icons v13 (CC0)
const BRANDS = {
  "facebook": "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  "whatsapp": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  "instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.6,
  spin = false,
  label,
  className = '',
  style
}) {
  const a11y = label ? {
    role: 'img',
    'aria-label': label
  } : {
    'aria-hidden': true
  };
  if (BRANDS[name]) return /*#__PURE__*/React.createElement("svg", _extends({}, a11y, {
    className: `ba-icon ${className}`,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: style
  }), /*#__PURE__*/React.createElement("path", {
    d: BRANDS[name]
  }));
  const parts = P[name] || P.image;
  return /*#__PURE__*/React.createElement("svg", _extends({}, a11y, {
    className: `ba-icon ${spin ? 'ba-icon--spin' : ''} ${className}`,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }), parts.map(([t, v], i) => t === 'path' ? /*#__PURE__*/React.createElement("path", {
    key: i,
    d: v
  }) : React.createElement(t, {
    key: i,
    ...v
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'l',
  href,
  icon,
  iconPosition = 'end',
  loading = false,
  disabled = false,
  block = false,
  pressed = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['ba-btn', `ba-btn--${variant}`, `ba-btn--${size}`, block && 'ba-btn--block', loading && 'is-loading', pressed && 'is-pressed', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === 'start' && /*#__PURE__*/React.createElement("span", {
    className: "ba-btn__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "ba-btn__label"
  }, children), icon && iconPosition === 'end' && /*#__PURE__*/React.createElement("span", {
    className: "ba-btn__icon ba-btn__icon--end"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), loading && /*#__PURE__*/React.createElement("span", {
    className: "ba-btn__spinner"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader",
    size: 18,
    spin: true
  })));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-busy": loading || undefined
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-busy": loading || undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'newspaper',
  title,
  text,
  action,
  tone = 'neutral',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-empty ${tone === 'error' ? 'ba-empty--error' : ''} ${className}`,
    role: tone === 'error' ? 'alert' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-empty__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'error' ? 'alert' : icon,
    size: 20
  })), title && /*#__PURE__*/React.createElement("p", {
    className: "ba-empty__title"
  }, title), text && /*#__PURE__*/React.createElement("p", {
    className: "ba-empty__text"
  }, text), action);
}
function Skeleton({
  width = '100%',
  height = 16,
  radius,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "ba-skel",
    style: {
      display: 'block',
      width,
      height,
      borderRadius: radius,
      ...style
    }
  });
}
Object.assign(__ds_scope, { EmptyState, Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'm',
  className = '',
  iconSize,
  ...rest
}) {
  const px = iconSize || (size === 's' ? 18 : size === 'l' ? 22 : 20);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: `ba-iconbtn ba-iconbtn--${variant} ${size !== 'm' ? `ba-iconbtn--${size}` : ''} ${className}`
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: px
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/contact/ContactBlock.jsx
try { (() => {
function ContactBlock({
  title,
  phone,
  email,
  person,
  personRole,
  social = [],
  mapSrc,
  mapTitle = 'Map',
  mapFallbackTitle = 'Eesti',
  mapFallbackText,
  extra,
  headingLevel = 2,
  className = ''
}) {
  const H = `h${headingLevel}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-contact ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-contact__copy"
  }, /*#__PURE__*/React.createElement(H, {
    className: "ba-contact__title"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "ba-contact__list"
  }, phone && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "ba-contact__row",
    href: `tel:${phone.replace(/\s/g, '')}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-contact__ic"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  })), phone)), email && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "ba-contact__row",
    href: `mailto:${email}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-contact__ic"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 16
  })), email))), person && /*#__PURE__*/React.createElement("p", {
    className: "ba-contact__sign"
  }, "\u2014 ", /*#__PURE__*/React.createElement("strong", null, person), personRole && `, ${personRole}`), social.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ba-contact__social"
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.icon,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    className: "ba-iconbtn ba-iconbtn--outline"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 18
  })))), extra), /*#__PURE__*/React.createElement("div", {
    className: "ba-map"
  }, mapSrc ? /*#__PURE__*/React.createElement("iframe", {
    src: mapSrc,
    title: mapTitle,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ba-map__fallback"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-map__pin"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 22
  })), /*#__PURE__*/React.createElement("strong", null, mapFallbackTitle), mapFallbackText && /*#__PURE__*/React.createElement("span", null, mapFallbackText)))));
}
Object.assign(__ds_scope, { ContactBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contact/ContactBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  onClose,
  children,
  footer,
  width = 760,
  closeLabel = 'Sulge',
  contained = false
}) {
  const ref = React.useRef(null);
  const opener = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement;
    const prev = document.body.style.overflow;
    if (!contained) document.body.style.overflow = 'hidden';
    const b = ref.current && ref.current.querySelector('[data-close]');
    b && b.focus();
    return () => {
      document.body.style.overflow = prev;
      opener.current && opener.current.focus && opener.current.focus();
    };
  }, [open]);
  if (!open) return null;
  const onKey = e => {
    if (e.key === 'Escape') onClose && onClose();
    if (e.key === 'Tab') {
      const f = ref.current.querySelectorAll('button,a[href],input,textarea,[tabindex="0"]');
      const a = f[0],
        z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-dialog ${contained ? 'ba-dialog--contained' : ''}`,
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "ba-dialog__panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "ba-dlg-title",
    style: {
      '--dlg-w': `${width}px`
    },
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-dialog__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ba-dialog__title",
    id: "ba-dlg-title"
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    "data-close": true,
    icon: "x",
    label: closeLabel,
    variant: "outline",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-dialog__body",
    tabIndex: 0
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ba-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  intro,
  level = 2,
  align = 'start',
  as,
  id,
  className = ''
}) {
  const Tag = as || `h${level}`;
  return /*#__PURE__*/React.createElement("header", {
    className: `ba-sh ${align === 'center' ? 'ba-sh--center' : ''} ${level === 1 ? 'ba-sh--h1' : ''} ${className}`
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "ba-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    className: "ba-sh__title",
    id: id
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    className: "ba-sh__intro"
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const DEFAULTS = {
  et: {
    available: 'Saadaval',
    reserved: 'Broneeritud',
    home: 'Uues kodus',
    resident: 'Kasvatuse kass'
  },
  en: {
    available: 'Available',
    reserved: 'Reserved',
    home: 'In new home',
    resident: 'Cattery cat'
  },
  ru: {
    available: 'Доступен',
    reserved: 'Зарезервирован',
    home: 'В новом доме',
    resident: 'Кошка питомника'
  }
};
function StatusBadge({
  status = 'resident',
  lang = 'et',
  children,
  className = ''
}) {
  const text = children || (DEFAULTS[lang] || DEFAULTS.et)[status];
  const variant = status === 'neutral' ? 'neutral' : status;
  return /*#__PURE__*/React.createElement("span", {
    className: `ba-badge ba-badge--${variant} ${className}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-badge__dot",
    "aria-hidden": "true"
  }), text);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href = '#',
  external = false,
  quiet = false,
  children,
  className = '',
  ...rest
}) {
  const ext = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `ba-link ${quiet ? 'ba-link--quiet' : ''} ${className}`
  }, ext, rest), children, external && /*#__PURE__*/React.createElement("span", {
    className: "ba-link__ext"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 14
  })), external && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    }
  }, " (opens in new tab)"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
let uid = 0;
function TextField({
  label,
  name,
  type = 'text',
  multiline = false,
  value,
  defaultValue,
  onChange,
  placeholder,
  hint,
  error,
  optionalLabel,
  required = false,
  disabled = false,
  autoComplete,
  className = ''
}) {
  const [id] = React.useState(() => `ba-f-${name || ''}-${++uid}`);
  const Ctl = multiline ? 'textarea' : 'input';
  const desc = [hint && `${id}-h`, error && `${id}-e`].filter(Boolean).join(' ') || undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-field ${error ? 'ba-field--error' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("label", {
    className: "ba-field__label",
    htmlFor: id
  }, label, optionalLabel && /*#__PURE__*/React.createElement("span", {
    className: "ba-field__opt"
  }, optionalLabel)), /*#__PURE__*/React.createElement(Ctl, {
    id: id,
    name: name,
    type: multiline ? undefined : type,
    className: "ba-field__control",
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    required: required,
    disabled: disabled,
    autoComplete: autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": desc
  }), hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "ba-field__hint",
    id: `${id}-h`
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    className: "ba-field__error",
    id: `${id}-e`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert",
    size: 14
  }), error));
}
function FormNote({
  tone = 'info',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-form__note ba-form__note--${tone}`,
    role: tone === 'error' ? 'alert' : 'status'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'success' ? 'check' : 'alert',
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { TextField, FormNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/media/Lightbox.jsx
try { (() => {
function Lightbox({
  images = [],
  index = 0,
  onIndex,
  onClose,
  closeLabel = 'Sulge',
  prevLabel = 'Eelmine',
  nextLabel = 'Järgmine',
  contained = false
}) {
  const ref = React.useRef(null);
  const n = images.length;
  const im = images[index] || {};
  const go = d => onIndex && onIndex((index + d + n) % n);
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    if (!contained) document.body.style.overflow = 'hidden';
    const btn = ref.current && ref.current.querySelector('[data-close]');
    btn && btn.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
  const onKey = e => {
    if (e.key === 'Escape') onClose && onClose();
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'Tab') {
      const f = ref.current.querySelectorAll('button');
      const a = f[0],
        z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ba-lightbox ${contained ? 'ba-lightbox--contained' : ''}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": im.alt,
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-lightbox__top"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite"
  }, index + 1, " / ", n), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    "data-close": true,
    icon: "x",
    label: closeLabel,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-lightbox__stage"
  }, im.src ? /*#__PURE__*/React.createElement("img", {
    src: im.src,
    alt: im.alt
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ba-lightbox__slot",
    role: "img",
    "aria-label": im.alt
  }, im.placeholder || im.alt || 'Foto'), n > 1 && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ba-lightbox__nav ba-lightbox__nav--prev",
    icon: "chevron-left",
    label: prevLabel,
    variant: "outline",
    size: "l",
    onClick: () => go(-1)
  }), n > 1 && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ba-lightbox__nav ba-lightbox__nav--next",
    icon: "chevron-right",
    label: nextLabel,
    variant: "outline",
    size: "l",
    onClick: () => go(1)
  })), /*#__PURE__*/React.createElement("p", {
    className: "ba-lightbox__cap"
  }, im.caption || '\u00A0'));
}
Object.assign(__ds_scope, { Lightbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Lightbox.jsx", error: String((e && e.message) || e) }); }

// components/media/Photo.jsx
try { (() => {
function Photo({
  src,
  alt = '',
  ratio,
  focus,
  radius,
  caption,
  state,
  placeholder,
  placeholderHint,
  missingLabel = 'Foto puudub',
  loading = 'lazy',
  width,
  height,
  className = '',
  style
}) {
  const [st, setSt] = React.useState(src ? 'loading' : 'slot');
  React.useEffect(() => {
    setSt(src ? 'loading' : 'slot');
  }, [src]);
  const s = state || st;
  const vars = {
    '--ph-ratio': ratio,
    '--ph-focus': focus,
    '--ph-radius': radius != null ? typeof radius === 'number' ? `${radius}px` : radius : undefined,
    ...style
  };
  const hint = placeholderHint || (ratio ? ratio.replace('/', ':') : null);
  const fig = /*#__PURE__*/React.createElement("div", {
    className: `ba-photo ${s === 'loading' ? 'is-loading' : ''} ${s === 'slot' ? 'is-slot' : ''} ${s === 'missing' || s === 'error' ? 'is-missing' : ''} ${caption ? '' : className}`,
    style: vars
  }, src && s !== 'error' && s !== 'missing' && s !== 'slot' && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: loading,
    width: width,
    height: height,
    onLoad: () => setSt('ready'),
    onError: () => setSt('error')
  }), s === 'loading' && /*#__PURE__*/React.createElement("span", {
    className: "ba-photo__state",
    "aria-hidden": "true"
  }), s === 'slot' && /*#__PURE__*/React.createElement("span", {
    className: "ba-photo__state ba-photo__slot",
    role: "img",
    "aria-label": alt || placeholder || 'Foto'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    className: "ba-photo__slot-label"
  }, placeholder || 'Foto'), hint && /*#__PURE__*/React.createElement("span", {
    className: "ba-photo__slot-hint"
  }, hint)), (s === 'missing' || s === 'error') && /*#__PURE__*/React.createElement("span", {
    className: "ba-photo__state",
    role: "img",
    "aria-label": alt || missingLabel
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert",
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, missingLabel)));
  if (!caption) return fig;
  return /*#__PURE__*/React.createElement("figure", {
    className: className,
    style: {
      margin: 0
    }
  }, fig, /*#__PURE__*/React.createElement("figcaption", {
    className: "ba-photo__cap"
  }, caption));
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Photo.jsx", error: String((e && e.message) || e) }); }

// components/cards/BreedCard.jsx
try { (() => {
function BreedCard({
  eyebrow = 'Tõug',
  name,
  text,
  traits = [],
  photo,
  alt = '',
  focus = '50% 30%',
  ratio = '4/3',
  placeholder,
  action,
  headingLevel = 3,
  className = ''
}) {
  const H = `h${headingLevel}`;
  return /*#__PURE__*/React.createElement("article", {
    className: `ba-card ba-breed ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-breed__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: photo,
    alt: alt,
    focus: focus,
    ratio: ratio,
    radius: 10,
    placeholder: placeholder || `Tõu foto: ${name}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-breed__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    className: "ba-breed__name"
  }, name), text && /*#__PURE__*/React.createElement("p", {
    className: "ba-breed__text"
  }, text), traits.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "ba-breed__traits"
  }, traits.map((t, k) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, t))), action && /*#__PURE__*/React.createElement("div", {
    className: "ba-breed__action"
  }, action)));
}
Object.assign(__ds_scope, { BreedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BreedCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/BreederCard.jsx
try { (() => {
function BreederCard({
  eyebrow = 'Kasvataja',
  name = 'Tatjana Raisp',
  paragraphs = [],
  photo,
  alt = '',
  focus = '45% 35%',
  placeholder = 'Portree: kasvataja kassiga',
  actions,
  headingLevel = 2,
  className = ''
}) {
  const H = `h${headingLevel}`;
  const ps = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  return /*#__PURE__*/React.createElement("article", {
    className: `ba-card ba-breeder ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-breeder__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-breeder__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: photo,
    alt: alt,
    focus: focus,
    radius: 0,
    placeholder: placeholder,
    placeholderHint: "4:5 \xB7 n\xE4gu ja kass kaadris"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-breeder__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    className: "ba-breeder__name"
  }, name), ps.map((p, k) => /*#__PURE__*/React.createElement("p", {
    key: k,
    className: "ba-breeder__text"
  }, p)), actions && /*#__PURE__*/React.createElement("div", {
    className: "ba-breeder__actions"
  }, actions))));
}
Object.assign(__ds_scope, { BreederCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BreederCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/CatCard.jsx
try { (() => {
function CatCard({
  name,
  breed,
  meta,
  caption,
  photo,
  alt,
  focus = '50% 30%',
  ratio = '4/5',
  placeholder = 'Kassi portree',
  status,
  lang = 'et',
  href = '#',
  onClick,
  headingLevel = 3,
  className = ''
}) {
  const H = `h${headingLevel}`;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick ? e => {
      e.preventDefault();
      onClick();
    } : undefined,
    className: `ba-catcard ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-catcard__media"
  }, status && /*#__PURE__*/React.createElement("span", {
    className: "ba-catcard__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    lang: lang
  })), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: photo,
    alt: alt || '',
    focus: focus,
    ratio: ratio,
    placeholder: placeholder
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-catcard__body"
  }, /*#__PURE__*/React.createElement(H, {
    className: "ba-catcard__name"
  }, name, /*#__PURE__*/React.createElement("span", {
    className: "ba-catcard__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))), (breed || meta) && /*#__PURE__*/React.createElement("span", {
    className: "ba-catcard__meta"
  }, [breed, meta].filter(Boolean).join(' · ')), caption && /*#__PURE__*/React.createElement("p", {
    className: "ba-catcard__caption"
  }, caption)));
}
Object.assign(__ds_scope, { CatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CatCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/NewsCard.jsx
try { (() => {
function NewsCard({
  date,
  dateTime,
  title,
  excerpt,
  image,
  alt = '',
  href = '#',
  moreLabel = 'Loe edasi',
  loading = false,
  headingLevel = 3,
  className = ''
}) {
  const H = `h${headingLevel}`;
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: `ba-card ba-news ${className}`,
    "aria-busy": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-news__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    height: 0,
    style: {
      aspectRatio: '3/2',
      height: 'auto'
    },
    radius: 10
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-news__body"
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: 90,
    height: 12
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "85%",
    height: 22
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    height: 12
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "70%",
    height: 12
  })));
  return /*#__PURE__*/React.createElement("article", {
    className: `ba-card ba-news ${className}`
  }, image ? /*#__PURE__*/React.createElement("div", {
    className: "ba-news__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image === true ? undefined : image,
    alt: alt,
    ratio: "3/2",
    radius: 10,
    placeholder: "Uudise foto"
  })) : /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "ba-news__body"
  }, date && /*#__PURE__*/React.createElement("time", {
    className: "ba-news__date",
    dateTime: dateTime
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 14
  }), date), /*#__PURE__*/React.createElement(H, {
    className: "ba-news__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, title)), excerpt && /*#__PURE__*/React.createElement("p", {
    className: "ba-news__excerpt"
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    className: "ba-news__more",
    "aria-hidden": "true"
  }, moreLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/media/FeaturedCat.jsx
try { (() => {
function FeaturedCat({
  name,
  breed,
  meta = [],
  text,
  photo,
  alt,
  focus = '50% 30%',
  placeholder = 'Kassi foto',
  status,
  lang = 'et',
  actions,
  headingLevel = 3,
  className = ''
}) {
  const H = `h${headingLevel}`;
  return /*#__PURE__*/React.createElement("article", {
    className: `ba-featured ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-featured__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-featured__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: photo,
    alt: alt || name,
    focus: focus,
    radius: 0,
    placeholder: placeholder,
    placeholderHint: "3:2 \xB7 horisontaalne"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-featured__body"
  }, status && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    lang: lang
  })), /*#__PURE__*/React.createElement(H, {
    className: "ba-featured__name"
  }, name), (breed || meta.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "ba-featured__meta"
  }, breed && /*#__PURE__*/React.createElement("span", null, breed), meta.map((m, k) => /*#__PURE__*/React.createElement("span", {
    key: k
  }, m))), text && /*#__PURE__*/React.createElement("p", {
    className: "ba-featured__text"
  }, text), actions && /*#__PURE__*/React.createElement("div", {
    className: "ba-featured__actions"
  }, actions))));
}
Object.assign(__ds_scope, { FeaturedCat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/FeaturedCat.jsx", error: String((e && e.message) || e) }); }

// components/media/Gallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Gallery({
  images = [],
  pageSize = 7,
  moreLabel = 'Näita rohkem',
  endLabel = 'Kõik fotod on kuvatud',
  loadingMore = false,
  onLoadMore,
  hasMore,
  lightboxLabels,
  containedLightbox = false,
  className = ''
}) {
  const [shown, setShown] = React.useState(pageSize);
  const [open, setOpen] = React.useState(-1);
  const triggers = React.useRef([]);
  const visible = images.slice(0, shown);
  const more = hasMore != null ? hasMore : shown < images.length;
  const loadMore = () => {
    onLoadMore ? onLoadMore() : setShown(s => s + pageSize);
  };
  const close = () => {
    const k = open;
    setOpen(-1);
    setTimeout(() => triggers.current[k] && triggers.current[k].focus(), 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-gallery ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-gallery__grid"
  }, visible.map((im, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    ref: el => triggers.current[k] = el,
    type: "button",
    className: `ba-gallery__item ${im.format ? `ba-gallery__item--${im.format}` : ''}`,
    onClick: () => setOpen(k),
    "aria-label": im.alt
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: im.src,
    alt: "",
    focus: im.focus,
    radius: "inherit",
    placeholder: im.placeholder,
    placeholderHint: im.format ? {
      wide: '2:1',
      tall: '1:2',
      large: '1:1'
    }[im.format] : '1:1'
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ba-gallery__footer"
  }, more ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "m",
    loading: loadingMore,
    onClick: loadMore
  }, moreLabel) : images.length > pageSize && /*#__PURE__*/React.createElement("span", {
    role: "status"
  }, endLabel)), open >= 0 && /*#__PURE__*/React.createElement(__ds_scope.Lightbox, _extends({
    images: visible,
    index: open,
    onIndex: setOpen,
    onClose: close,
    contained: containedLightbox
  }, lightboxLabels || {})));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/media/Slider.jsx
try { (() => {
function Slider({
  children,
  label = 'Slider',
  prevLabel = 'Previous',
  nextLabel = 'Next',
  slideLabel = (i, n) => `${i} / ${n}`,
  className = ''
}) {
  const slides = React.Children.toArray(children);
  const n = slides.length;
  const vp = React.useRef(null);
  const [i, setI] = React.useState(0);
  const go = k => {
    const el = vp.current;
    if (!el) return;
    const t = Math.max(0, Math.min(n - 1, k));
    el.scrollTo({
      left: t * el.clientWidth
    });
    setI(t);
  };
  const onScroll = () => {
    const el = vp.current;
    if (el) setI(Math.round(el.scrollLeft / el.clientWidth));
  };
  const onKey = e => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(i + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(i - 1);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: `ba-slider ${className}`,
    "aria-roledescription": "carousel",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-slider__viewport",
    ref: vp,
    tabIndex: 0,
    onScroll: onScroll,
    onKeyDown: onKey
  }, slides.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "ba-slider__slide",
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": slideLabel(k + 1, n),
    "aria-hidden": k !== i
  }, s))), n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "ba-slider__controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-slider__dots"
  }, slides.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    className: "ba-slider__dot",
    "aria-label": slideLabel(k + 1, n),
    "aria-current": k === i ? 'true' : undefined,
    onClick: () => go(k)
  })), /*#__PURE__*/React.createElement("span", {
    className: "ba-slider__count",
    "aria-live": "polite",
    style: {
      marginLeft: 12
    }
  }, String(i + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    className: "ba-slider__arrows"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: prevLabel,
    variant: "outline",
    onClick: () => go(i - 1),
    disabled: i === 0
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    label: nextLabel,
    variant: "outline",
    onClick: () => go(i + 1),
    disabled: i === n - 1
  }))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Slider.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LanguageSwitcher.jsx
try { (() => {
const LANGS = [{
  code: 'et',
  label: 'EST',
  name: 'Eesti'
}, {
  code: 'en',
  label: 'ENG',
  name: 'English'
}, {
  code: 'ru',
  label: 'RUS',
  name: 'Русский'
}];
function LanguageSwitcher({
  value = 'et',
  onChange,
  size = 'default',
  ariaLabel = 'Language / Keel / Язык',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": ariaLabel,
    className: `ba-lang ${size === 'large' ? 'ba-lang--large' : ''} ${className}`
  }, LANGS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.code,
    type: "button",
    lang: l.code,
    className: "ba-lang__opt",
    "aria-current": value === l.code ? 'true' : undefined,
    "aria-label": l.name,
    onClick: () => onChange && onChange(l.code)
  }, l.label)));
}
Object.assign(__ds_scope, { LanguageSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguageSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  logoSrc,
  links = [],
  contacts = {},
  social = [],
  termsLabel,
  termsHref = '#terms',
  onTerms,
  credit,
  navHeading = 'Menu',
  contactHeading = 'Contact',
  year = new Date().getFullYear(),
  className = ''
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: `ba-footer ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-footer__col ba-footer__brand"
  }, logoSrc ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    src: logoSrc,
    imgHeight: 128,
    align: "start"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 28,
    align: "start"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-footer__h"
  }, navHeading), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || `#${l.id}`
  }, l.label)), termsLabel && /*#__PURE__*/React.createElement("a", {
    href: termsHref,
    onClick: onTerms ? e => {
      e.preventDefault();
      onTerms();
    } : undefined
  }, termsLabel)), /*#__PURE__*/React.createElement("div", {
    className: "ba-footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-footer__h"
  }, contactHeading), contacts.phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${contacts.phone.replace(/\s/g, '')}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  }), contacts.phone), contacts.email && /*#__PURE__*/React.createElement("a", {
    href: `mailto:${contacts.email}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 16
  }), contacts.email), social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.icon,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  }), s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "ba-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Black Antarra"), credit && /*#__PURE__*/React.createElement("span", null, credit))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  links = [],
  current,
  lang = 'et',
  onLangChange,
  onNavigate,
  social = [],
  phone,
  email,
  sticky = false,
  contained = false,
  menuLabel = 'Menu',
  closeLabel = 'Close',
  defaultOpen = false,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const btnRef = React.useRef(null);
  const drawerRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    if (!contained) document.body.style.overflow = 'hidden';
    const first = drawerRef.current && drawerRef.current.querySelector('button,a');
    first && first.focus();
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    btnRef.current && btnRef.current.focus();
  };
  const go = (l, e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l.id);
    }
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `ba-header-wrap ${className}`,
    style: sticky ? {
      position: 'sticky',
      top: 0
    } : undefined
  }, /*#__PURE__*/React.createElement("header", {
    className: "ba-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-header__inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "ba-nav",
    "aria-label": "Main"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || `#${l.id}`,
    className: "ba-nav__link",
    "aria-current": current === l.id ? 'page' : undefined,
    onClick: e => go(l, e)
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    href: "#top",
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    className: "ba-header__end"
  }, social.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ba-header__social"
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.icon,
    href: s.href,
    "aria-label": s.label,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 17
  })))), social.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ba-divider-v",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(__ds_scope.LanguageSwitcher, {
    value: lang,
    onChange: onLangChange
  })), /*#__PURE__*/React.createElement("span", {
    className: "ba-header__menu",
    ref: btnRef
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: menuLabel,
    variant: "outline",
    "aria-expanded": open,
    "aria-controls": "ba-drawer",
    onClick: () => setOpen(true)
  })))), open && /*#__PURE__*/React.createElement("div", {
    id: "ba-drawer",
    ref: drawerRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": menuLabel,
    className: `ba-drawer ${contained ? 'ba-drawer--contained' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-drawer__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "compact",
    size: 26
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: closeLabel,
    variant: "outline",
    onClick: close
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-drawer__body"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "ba-drawer__nav",
    "aria-label": "Main"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || `#${l.id}`,
    className: "ba-drawer__link",
    "aria-current": current === l.id ? 'page' : undefined,
    onClick: e => go(l, e)
  }, l.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 20
  })))), /*#__PURE__*/React.createElement(__ds_scope.LanguageSwitcher, {
    value: lang,
    onChange: onLangChange,
    size: "large"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ba-drawer__meta"
  }, phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\s/g, '')}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 18
  }), phone), email && /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 18
  }), email), social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.icon,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 18
  }), s.label))))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogPages.jsx
try { (() => {
function CatalogPage({
  t,
  lang,
  go
}) {
  const {
    SectionHeading,
    CatCard,
    Button
  } = window.BlackAntarraDesignSystem_1f78a4;
  const [f, setF] = React.useState(-1);
  const list = window.BA_CATS.filter(c => f < 0 || c.breed === f);
  const chip = (label, v) => /*#__PURE__*/React.createElement(Button, {
    key: v,
    size: "m",
    variant: f === v ? 'primary' : 'secondary',
    "aria-pressed": f === v,
    onClick: () => setF(v)
  }, label);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    title: t.catalogH,
    intro: t.catalogIntro
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, chip(t.filterAll, -1), t.breeds.map((b, k) => chip(b.name, k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,240px),1fr))',
      gap: 'clamp(24px,3vw,40px) var(--grid-gap)'
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CatCard, {
    key: c.id,
    name: c.name,
    breed: t.breeds[c.breed].name,
    caption: c.text ? c.text[lang].split('.')[0] + '.' : undefined,
    photo: c.photo,
    focus: c.focus,
    placeholder: `Portree: ${c.name}`,
    lang: lang,
    onClick: () => go('cat', c.id)
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-tertiary)'
    }
  }, t.demo));
}
function CatProfile({
  t,
  lang,
  id,
  go
}) {
  const {
    Photo,
    Button,
    SectionHeading,
    Gallery
  } = window.BlackAntarraDesignSystem_1f78a4;
  const c = window.BA_CATS.find(x => x.id === id) || window.BA_CATS[0];
  const rows = [[t.profile.breed, t.breeds[c.breed].name], [t.profile.sex, null], [t.profile.born, null], [t.profile.color, null]];
  const imgs = [1, 2, 3, 4].map(i => ({
    alt: `${c.name} — foto ${i}`,
    placeholder: `${c.name} — foto ${i}`
  }));
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    icon: "chevron-left",
    iconPosition: "start",
    onClick: () => go('cats')
  }, t.back)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: 'clamp(28px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: c.photo,
    alt: c.name,
    ratio: "4/5",
    focus: c.focus,
    loading: "eager",
    placeholder: `Põhiportree: ${c.name}`,
    placeholderHint: "4:5 \xB7 k\xF5rvad ja silmad kaadris"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24,
      alignContent: 'start',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-eyebrow"
  }, t.breeds[c.breed].name), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)'
    }
  }, c.name), c.official && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)'
    }
  }, c.official)), c.text && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead)',
      maxWidth: '46ch'
    }
  }, c.text[lang]), /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 0,
      margin: 0,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-secondary)',
      padding: '14px 24px 14px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)',
      color: v ? 'var(--text-primary)' : 'var(--text-tertiary)'
    }
  }, v || t.profile.missing)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: `mailto:info@antarra.ee?subject=${encodeURIComponent(c.name)}`
  }, t.profile.ask), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "phone",
    iconPosition: "start",
    href: "tel:+37258094779"
  }, "+372 5809 4779")))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.profile.gallery
  }), /*#__PURE__*/React.createElement(Gallery, {
    images: imgs,
    pageSize: 8,
    lightboxLabels: {
      closeLabel: t.close,
      prevLabel: t.prev,
      nextLabel: t.next
    }
  })), c.demo && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-tertiary)'
    }
  }, t.demo));
}
Object.assign(window, {
  CatalogPage,
  CatProfile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const DS = window.BlackAntarraDesignSystem_1f78a4;
const A = '../../assets/';
function Section({
  id,
  children,
  tone,
  tight,
  wide
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: tone === 'subtle' ? 'var(--bg-subtle)' : tone === 'surface' ? 'var(--bg-surface)' : 'transparent',
      padding: `${tight ? 'var(--section-y-tight)' : 'var(--section-y)'} 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? 'var(--container-wide)' : 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gap: 'clamp(28px,3vw,48px)'
    }
  }, children));
}
function HomePage({
  t,
  lang,
  go,
  openTerms
}) {
  const {
    Hero,
    BrandBand,
    Button,
    BreederCard,
    BreedCard,
    SectionHeading,
    Slider,
    FeaturedCat,
    AdvantageCard,
    Gallery,
    EmptyState,
    PartnerGrid,
    ContactBlock
  } = DS;
  const cats = window.BA_CATS.slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, t.hero.title[0], /*#__PURE__*/React.createElement("br", null), t.hero.title[1], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, t.hero.title[2])),
    text: /*#__PURE__*/React.createElement(React.Fragment, null, t.hero.text[0], /*#__PURE__*/React.createElement("strong", null, t.hero.text[1]), t.hero.text[2]),
    illustration: A + 'illustrations/hero-cat-blue.png',
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      icon: "arrow-right",
      onClick: () => go('cats')
    }, t.meet), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('home', 'kontaktid')
    }, t.contact))
  }), /*#__PURE__*/React.createElement(BrandBand, null), /*#__PURE__*/React.createElement(Section, {
    id: "meist"
  }, /*#__PURE__*/React.createElement(BreederCard, {
    eyebrow: t.breeder.eyebrow,
    paragraphs: t.breeder.p,
    alt: "Tatjana Raisp",
    focus: "45% 30%",
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "arrow-right",
      onClick: () => go('cats')
    }, t.meet)
  })), /*#__PURE__*/React.createElement(Section, {
    id: "toud",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.breedsH
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
      gap: 'var(--grid-gap)'
    }
  }, t.breeds.map((b, k) => /*#__PURE__*/React.createElement(BreedCard, {
    key: k,
    eyebrow: t.breedEyebrow,
    name: b.name,
    text: b.text,
    traits: b.traits,
    alt: b.name,
    focus: "50% 22%",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "m",
      icon: "arrow-right"
    }, t.more)
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "kassid",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      alignItems: 'end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.catsH,
    intro: t.catsIntro
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    icon: "arrow-right",
    onClick: () => go('cats')
  }, t.otherCats)), /*#__PURE__*/React.createElement(Slider, {
    label: t.catsH,
    prevLabel: t.prev,
    nextLabel: t.next
  }, cats.map(c => /*#__PURE__*/React.createElement(FeaturedCat, {
    key: c.id,
    name: c.name,
    breed: t.breeds[c.breed].name,
    text: c.text ? c.text[lang] : undefined,
    photo: c.photo,
    focus: c.focus,
    placeholder: `Foto: ${c.name}`,
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "arrow-right",
      onClick: () => go('cat', c.id)
    }, t.more)
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "omadused"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: t.advH,
    intro: t.advIntro
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
      gap: 'clamp(32px,4vw,48px)'
    }
  }, t.adv.map(([h, p], k) => /*#__PURE__*/React.createElement(AdvantageCard, {
    key: k,
    illustration: A + `illustrations/advantage-cat-${k + 1}.png`,
    title: h,
    text: p
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "galerii",
    tight: true,
    wide: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.galleryH
  }), /*#__PURE__*/React.createElement(Gallery, {
    images: window.BA_GALLERY,
    pageSize: 4,
    moreLabel: t.showMore,
    endLabel: t.allShown,
    lightboxLabels: {
      closeLabel: t.close,
      prevLabel: t.prev,
      nextLabel: t.next
    }
  })), /*#__PURE__*/React.createElement(Section, {
    id: "uudised",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
      gap: 'var(--grid-gap)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.newsH
  }), /*#__PURE__*/React.createElement(EmptyState, {
    title: t.newsEmptyT,
    text: t.newsEmpty
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "partnerid",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: t.partnersH,
    intro: t.partnersIntro
  }), /*#__PURE__*/React.createElement(PartnerGrid, {
    partners: [{
      name: 'Pontu',
      logo: A + 'partners/pontu.png'
    }, {
      name: 'Tessa.lv Photography',
      logo: A + 'partners/tessa-photography.png'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    id: "kontaktid",
    tone: "surface"
  }, /*#__PURE__*/React.createElement(ContactBlock, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, t.contactT[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, t.contactT[1])),
    phone: "+372 5809 4779",
    email: "info@antarra.ee",
    person: "Tatjana Raisp",
    personRole: t.role,
    social: window.BA_SOCIAL,
    mapFallbackTitle: t.mapT,
    mapFallbackText: t.mapText
  })));
}
Object.assign(window, {
  HomePage,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Black Antarra website — UI strings + demo content in ET / EN / RU.
// Cat names come from the migration list (DEMO); photos are empty slots until the owner supplies originals.
window.BA_I18N = {
  et: {
    nav: {
      meist: 'Meist',
      kassid: 'Kassid',
      galerii: 'Galerii',
      kontaktid: 'Kontaktid'
    },
    menu: 'Menüü',
    close: 'Sulge',
    more: 'Loe lähemalt',
    meet: 'Vaata meie kasse',
    contact: 'Võta ühendust',
    showMore: 'Näita rohkem',
    allShown: 'Kõik fotod on kuvatud',
    prev: 'Eelmine',
    next: 'Järgmine',
    back: 'Kõik kassid',
    terms: 'Kassipoja ostutingimused',
    menuH: 'Menüü',
    contactH: 'Kontakt',
    hero: {
      title: ['Tutvustame', 'kassiloomade', 'elegantsi.'],
      text: ['Eesti väärikate ', 'Siiami ja Idamaiste', ' kasside kasvatus.']
    },
    breeder: {
      eyebrow: 'Kasvataja',
      p: ['Tere, minu nimi on Tatjana. Paljude aastate jooksul olen leidnud oma kutsumuse kassikasvatuses.', 'Black Antarra on väike kodukasvatus, kus iga kass kasvab pere keskel. Täname teid huvi eest.']
    },
    breedsH: 'Tõud',
    breedEyebrow: 'Tõug',
    breeds: [{
      name: 'Idamaised',
      text: 'Graatsilise keha, suurte kõrvade ja ilmekate silmadega kassitõug. Lühike karv erinevates värvides. Aktiivsed, seltskondlikud ja energilised.',
      traits: ['Suured kõrvad', 'Pikk kael', 'Aktiivne']
    }, {
      name: 'Siiami',
      text: 'Sihvakas keha ja iseloomulikud värvipunktid näol, kõrvadel, käppadel ja sabal. Lühike sile karv, silmad tavaliselt sinised ja väga väljendusrikkad.',
      traits: ['Värvipunktid', 'Sinised silmad', 'Jutukas']
    }],
    catsH: 'Meie kassid',
    catsIntro: 'Iga kass on omanäoline — tutvuge lähemalt.',
    otherCats: 'Vaata kõiki kasse',
    advH: 'Omadused, mille üle oleme uhked',
    advIntro: 'Mida me teeme parimal võimalikul viisil.',
    adv: [['Kõrgeim kvaliteet', 'Tõupuhtad kassid ja hoolikalt valitud vanemad.'], ['Professionaalne hooldus', 'Kogenud kasvatamine ja sotsialiseerimine sõbralikuks käitumiseks.'], ['Isikupärane lähenemine', 'Abi valikul ja hooldamisel, kohandatud teie eelistustele.']],
    galleryH: 'Galerii',
    newsH: 'Meie uudised',
    newsEmptyT: 'Uudiseid veel pole',
    newsEmpty: 'Uued teated ilmuvad siia. Seni jälgige meid Facebookis.',
    partnersH: 'Meie partnerid',
    partnersIntro: 'Kui olete huvitatud partneriks või sponsoriks hakkamisest, võtke meiega julgelt ühendust.',
    contactT: ['Kas otsite sõpra?', 'Võtke meiega ühendust!'],
    role: 'kasvataja',
    mapT: 'Eesti',
    mapText: 'Täpne asukoht lepitakse kokku telefoni teel.',
    catalogH: 'Meie kassid',
    catalogIntro: 'Kasvatuse kassid ja nende lood.',
    filterAll: 'Kõik',
    demo: 'Näidisandmed: fotod ja nimed seotakse omaniku andmetega enne avaldamist.',
    profile: {
      breed: 'Tõug',
      sex: 'Sugu',
      born: 'Sündinud',
      color: 'Värvus',
      missing: '— lisatakse',
      ask: 'Küsi selle kassi kohta',
      gallery: 'Fotod'
    },
    termsLead: 'Tingimused kantakse üle omaniku kinnitatud tekstist muutmata kujul.'
  },
  en: {
    nav: {
      meist: 'About us',
      kassid: 'Our cats',
      galerii: 'Gallery',
      kontaktid: 'Contact'
    },
    menu: 'Menu',
    close: 'Close',
    more: 'Learn more',
    meet: 'Meet our cats',
    contact: 'Get in touch',
    showMore: 'Show more',
    allShown: 'All photos shown',
    prev: 'Previous',
    next: 'Next',
    back: 'All cats',
    terms: 'Kitten purchase terms',
    menuH: 'Menu',
    contactH: 'Contact',
    hero: {
      title: ['Introducing', 'feline', 'elegance.'],
      text: ['An Estonian cattery of noble ', 'Siamese and Oriental', ' cats.']
    },
    breeder: {
      eyebrow: 'Breeder',
      p: ['Hello, my name is Tatjana. Over many years I have found my calling in breeding cats.', 'Black Antarra is a small home cattery where every cat grows up as part of the family. Thank you for your interest.']
    },
    breedsH: 'Breeds',
    breedEyebrow: 'Breed',
    breeds: [{
      name: 'Oriental',
      text: 'A graceful breed with large ears and expressive eyes. Short coat in many colours. Active, sociable and full of energy.',
      traits: ['Large ears', 'Long neck', 'Active']
    }, {
      name: 'Siamese',
      text: 'A slender body with characteristic colour points on the face, ears, paws and tail. Short, sleek coat; eyes usually blue and very expressive.',
      traits: ['Colour points', 'Blue eyes', 'Talkative']
    }],
    catsH: 'Our cats',
    catsIntro: 'Every cat is an individual — get to know them.',
    otherCats: 'See all cats',
    advH: 'What we take pride in',
    advIntro: 'What we do in the best possible way.',
    adv: [['Highest quality', 'Purebred cats and carefully chosen parents.'], ['Professional care', 'Experienced breeding and socialisation for a friendly temperament.'], ['Personal approach', 'Help with choosing and care, tailored to you.']],
    galleryH: 'Gallery',
    newsH: 'Our news',
    newsEmptyT: 'No news yet',
    newsEmpty: 'New posts will appear here. Meanwhile, follow us on Facebook.',
    partnersH: 'Our partners',
    partnersIntro: 'If you would like to become a partner or sponsor, please get in touch.',
    contactT: ['Looking for a friend?', 'Get in touch!'],
    role: 'breeder',
    mapT: 'Estonia',
    mapText: 'The exact location is arranged by phone.',
    catalogH: 'Our cats',
    catalogIntro: 'The cats of our cattery and their stories.',
    filterAll: 'All',
    demo: 'Demo data: photos and names will be linked to the owner’s records before publishing.',
    profile: {
      breed: 'Breed',
      sex: 'Sex',
      born: 'Born',
      color: 'Colour',
      missing: '— to be added',
      ask: 'Ask about this cat',
      gallery: 'Photos'
    },
    termsLead: 'The terms are transferred unchanged from the owner-approved text.'
  },
  ru: {
    nav: {
      meist: 'О питомнике',
      kassid: 'Наши кошки',
      galerii: 'Галерея',
      kontaktid: 'Контакты'
    },
    menu: 'Меню',
    close: 'Закрыть',
    more: 'Подробнее',
    meet: 'Посмотреть кошек',
    contact: 'Связаться',
    showMore: 'Показать ещё',
    allShown: 'Показаны все фото',
    prev: 'Назад',
    next: 'Вперёд',
    back: 'Все кошки',
    terms: 'Условия приобретения котёнка',
    menuH: 'Меню',
    contactH: 'Контакты',
    hero: {
      title: ['Знакомим', 'с кошачьей', 'элегантностью.'],
      text: ['Эстонский питомник благородных ', 'сиамских и ориентальных', ' кошек.']
    },
    breeder: {
      eyebrow: 'Заводчик',
      p: ['Здравствуйте, меня зовут Татьяна. За многие годы я нашла своё призвание в разведении кошек.', 'Black Antarra — небольшой домашний питомник, где каждая кошка растёт в семье. Спасибо за интерес.']
    },
    breedsH: 'Породы',
    breedEyebrow: 'Порода',
    breeds: [{
      name: 'Ориентальные',
      text: 'Грациозная порода с большими ушами и выразительными глазами. Короткая шерсть разных окрасов. Активные, общительные и энергичные.',
      traits: ['Большие уши', 'Длинная шея', 'Активные']
    }, {
      name: 'Сиамские',
      text: 'Стройное тело и характерные цветовые отметины на мордочке, ушах, лапах и хвосте. Короткая гладкая шерсть, глаза обычно голубые и очень выразительные.',
      traits: ['Колор-пойнт', 'Голубые глаза', 'Разговорчивые']
    }],
    catsH: 'Наши кошки',
    catsIntro: 'Каждая кошка — индивидуальность. Познакомьтесь ближе.',
    otherCats: 'Все кошки',
    advH: 'Чем мы гордимся',
    advIntro: 'То, что мы делаем наилучшим образом.',
    adv: [['Высокое качество', 'Породистые кошки и тщательно подобранные родители.'], ['Профессиональный уход', 'Опытное выращивание и социализация для дружелюбного характера.'], ['Индивидуальный подход', 'Помощь в выборе и уходе с учётом ваших пожеланий.']],
    galleryH: 'Галерея',
    newsH: 'Наши новости',
    newsEmptyT: 'Новостей пока нет',
    newsEmpty: 'Новые записи появятся здесь. А пока следите за нами в Facebook.',
    partnersH: 'Наши партнёры',
    partnersIntro: 'Если вы хотите стать партнёром или спонсором, свяжитесь с нами.',
    contactT: ['Ищете друга?', 'Свяжитесь с нами!'],
    role: 'заводчик',
    mapT: 'Эстония',
    mapText: 'Точное место встречи согласуем по телефону.',
    catalogH: 'Наши кошки',
    catalogIntro: 'Кошки питомника и их истории.',
    filterAll: 'Все',
    demo: 'Демо-данные: фото и имена будут связаны с данными владельца перед публикацией.',
    profile: {
      breed: 'Порода',
      sex: 'Пол',
      born: 'Дата рождения',
      color: 'Окрас',
      missing: '— будет добавлено',
      ask: 'Спросить об этой кошке',
      gallery: 'Фото'
    },
    termsLead: 'Условия переносятся без изменений из утверждённого владельцем текста.'
  }
};
window.BA_CATS = [{
  id: 'benya',
  name: 'Benya',
  official: 'Benjamin',
  breed: 0,
  photo: null,
  focus: '38% 30%',
  text: {
    et: 'Benjamin on kassikasvatuse tõeline staar. Sihvakas figuur, läbistavad rohelised silmad ja graatsilised liigutused.',
    en: 'Benjamin is the true star of the cattery. A slender figure, piercing green eyes and graceful movement.',
    ru: 'Бенджамин — настоящая звезда питомника. Стройная фигура, пронзительные зелёные глаза и грациозные движения.'
  }
}, {
  id: 'milky',
  name: 'Milky',
  breed: 0,
  photo: null,
  focus: '30% 40%',
  demo: true
}, {
  id: 'enigma',
  name: 'Enigma',
  breed: 0,
  photo: null,
  focus: '50% 25%',
  demo: true
}, {
  id: 'graffiti',
  name: 'Graffiti',
  breed: 0,
  photo: null,
  focus: '70% 40%',
  demo: true
}, {
  id: 'melissa',
  name: 'Melissa',
  breed: 0,
  photo: null,
  focus: '40% 60%',
  demo: true
}, {
  id: 'marsel',
  name: 'Marsel',
  breed: 1,
  photo: null,
  demo: true
}];
window.BA_GALLERY = [1, 2, 3, 4, 5, 6, 7].map(i => ({
  alt: `Black Antarra — foto ${i}`,
  placeholder: `Galerii foto ${i}`,
  format: [null, 'tall', null, null, 'wide', 'tall', 'wide'][i - 1]
}));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BrandBand = __ds_scope.BrandBand;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.AdvantageCard = __ds_scope.AdvantageCard;

__ds_ns.BreedCard = __ds_scope.BreedCard;

__ds_ns.BreederCard = __ds_scope.BreederCard;

__ds_ns.CatCard = __ds_scope.CatCard;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.ContactBlock = __ds_scope.ContactBlock;

__ds_ns.PartnerGrid = __ds_scope.PartnerGrid;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.FormNote = __ds_scope.FormNote;

__ds_ns.FeaturedCat = __ds_scope.FeaturedCat;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.Lightbox = __ds_scope.Lightbox;

__ds_ns.Photo = __ds_scope.Photo;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.LanguageSwitcher = __ds_scope.LanguageSwitcher;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
