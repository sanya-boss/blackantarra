#!/usr/bin/env python3
"""Build the published pages from the design-tool export.

Input (as exported, never edited by hand):
  Black Antarra Landing v2.dc.html, 404.dc.html

Output:
  index.html            landing, language from saved choice (default ET)
  et/ en/ ru/index.html landing with the language fixed by the URL
  404.html              error page

Usage: python3 tools/build.py   (from anywhere; paths are repo-relative)
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "Black Antarra Landing v2.dc.html"
SRC_404 = ROOT / "404.dc.html"
LANGS = ("et", "en", "ru")

# Site-specific fixes on top of the export. Each is (description, old, new).
# A fix whose `old` text is missing is reported, so a changed export is noticed.
FIXES = [
    ("hero titles: no hyphenation",
     "overflow-wrap: anywhere; hyphens: auto", "hyphens: none"),
    ("hero contact button hidden (prop schema)",
     "heroContactButton&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:true",
     "heroContactButton&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false"),
    ("hero contact button hidden (runtime default)",
     "this.props.heroContactButton ?? true", "this.props.heroContactButton ?? false"),
    # The export targets a design-tool-only attribute that is absent from the markup.
    ("hero cat animation selector",
     '[data-comment-anchor="baa22b662d-img"]', ".ba-hero-cat"),
    ("hero cat animation class",
     '<img src="assets/logo/ba-logo-blue.svg" alt="" width="332" height="276" style="position: absolute; width: 916px;',
     '<img class="ba-hero-cat" src="assets/logo/ba-logo-blue.svg" alt="" width="332" height="276" style="position: absolute; width: 916px;'),
    ("footer credit link",
     "href: 'https://sanya-boss.github.io/cv.html'", "href: 'https://sanya-boss.github.io/portfolio/'"),
    # Language from the URL: /et/, /en/, /ru/ win over the saved choice.
    ("language from URL (initial state)",
     "state = { lang: (typeof localStorage !== 'undefined' && localStorage.getItem('ba-landing-lang')) || 'et',",
     "state = { lang: baUrlLang() || (typeof localStorage !== 'undefined' && localStorage.getItem('ba-landing-lang')) || 'et',"),
    ("language switch updates URL",
     "setLang = (lang) => { this.setState({ lang });",
     "setLang = (lang) => { this.setState({ lang }); baSetUrlLang(lang);"),
    ("language URL helpers",
     "class Component extends DCLogic {",
     "function baUrlLang() {\n"
     "  if (typeof location === 'undefined') return null;\n"
     "  const m = location.pathname.match(/\\/(et|en|ru)\\/(?:index\\.html)?$/);\n"
     "  if (m) { try { localStorage.setItem('ba-landing-lang', m[1]); } catch (e) {} }\n"
     "  return m ? m[1] : null;\n"
     "}\n"
     "function baSetUrlLang(lang) {\n"
     "  if (typeof location === 'undefined' || !/^https?:$/.test(location.protocol)) return;\n"
     "  const base = location.pathname.replace(/index\\.html$/, '').replace(/(?:^|\\/)(?:et|en|ru)\\/?$/, '/');\n"
     "  try { history.replaceState(history.state, '', base.replace(/\\/?$/, '/') + lang + '/' + location.hash); } catch (e) {}\n"
     "}\n"
     "class Component extends DCLogic {"),
]

SITE = "https://www.antarra.ee/"

# Search-result title and description per language. The brand goes last so
# Google keeps the descriptive part capitalised next to the site name.
META = {
    "et": ("Siiami ja orientaalsed kassid — kassila Black Antarra",
           "Black Antarra on siiami ja orientaalsete kasside kodukassila Eestis. "
           "Kasvataja Tatjana Raisp. Tutvuge meie kasside, tõugude ja kassipoja ostutingimustega."),
    "en": ("Siamese & Oriental Cats — Black Antarra Cattery",
           "Black Antarra is a home cattery of Siamese and Oriental cats in Estonia, run by "
           "breeder Tatjana Raisp. Meet our cats, the breeds and the kitten purchase terms."),
    "ru": ("Сиамские и ориентальные кошки — питомник Black Antarra",
           "Black Antarra — домашний питомник сиамских и ориентальных кошек в Эстонии. "
           "Заводчик Татьяна Райсп. Наши кошки, породы, галерея и условия покупки котёнка."),
}
OG_LOCALE = {"et": "et_EE", "en": "en_US", "ru": "ru_RU"}


def page_url(lang):
    return SITE if lang is None else f"{SITE}{lang}/"


def apply_meta(html, lang):
    """Static <head> tags for one page: `lang` is None for the root (ET content)."""
    l = lang or "et"
    title, desc = META[l]
    t, d = html_escape(title), html_escape(desc)

    def sub(pattern, repl):
        nonlocal html
        html, n = re.subn(pattern, lambda _: repl, html, count=1)
        if not n:
            print(f"WARNING: meta tag not found: {pattern}", file=sys.stderr)

    sub(r"<title>.*?</title>", f"<title>{t}</title>")
    sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{d}">')
    sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{t}">')
    sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{d}">')
    sub(r'<meta property="og:image" content="[^"]*">', f'<meta property="og:image" content="{SITE}assets/icons/og-image.png">')
    sub(r'<meta property="og:locale" content="[^"]*">', f'<meta property="og:locale" content="{OG_LOCALE[l]}">')
    html = re.sub(r'\s*<meta property="og:locale:alternate" content="[^"]*">', "", html)
    html = html.replace('"image":"assets/icons/og-image.png"', f'"image":"{SITE}assets/icons/og-image.png"')

    links = [f'<link rel="canonical" href="{page_url(lang)}">',
             f'<meta property="og:url" content="{page_url(lang)}">']
    links += [f'<meta property="og:locale:alternate" content="{OG_LOCALE[o]}">' for o in LANGS if o != l]
    links += [f'<link rel="alternate" hreflang="{o}" href="{page_url(o)}">' for o in LANGS]
    links.append(f'<link rel="alternate" hreflang="x-default" href="{SITE}">')
    links.append('<script type="application/ld+json">'
                 + json.dumps({"@context": "https://schema.org", "@type": "WebSite",
                               "name": "Black Antarra", "url": SITE}, ensure_ascii=False)
                 + "</script>")
    sub(r"(<title>)", "\n  ".join(links) + "\n  <title>")

    # Titles the page sets at runtime when the language changes.
    m = json.dumps({k: list(v) for k, v in META.items()}, ensure_ascii=False)
    sub(r"const M = \{.*?\};", f"const M = {m};")
    return html.replace("<html>", f'<html lang="{l}">', 1)


def html_escape(s):
    return s.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")


# Relative references to site files, prefixed with ../ for the language folders.
REL_REF = re.compile(r"""(["'`(])(?:\./)?(assets/|_ds/|support\.js)""")


# Fonts: `optional` instead of `swap`, so text never re-renders in another font
# after load. Preloading starts the downloads with the page itself, so the
# fonts arrive within the browser's short block period and are used at once.
DS = "_ds/black-antarra-design-system-1f78a416-c19d-47da-af39-d2a295e6cbe0"
FONTS_CSS = ROOT / DS / "tokens" / "fonts.css"
GOOGLE_FONTS = re.compile(r"https://fonts\.googleapis\.com/css2\?[^')\"]+")
FONT_LINK = f'<link rel="stylesheet" href="{DS}/tokens/fonts.css">'
PRELOAD_FONTS = ("Sentient-BoldItalic.woff2", "Sentient-MediumItalic.woff2")


def fix_fonts_css():
    css = FONTS_CSS.read_text(encoding="utf-8")
    css = css.replace("display=swap", "display=optional").replace("font-display:swap", "font-display:optional")
    FONTS_CSS.write_text(css, encoding="utf-8")
    return GOOGLE_FONTS.search(css).group(0)


def apply_font_preload(html, google_url):
    tags = ['<link rel="preconnect" href="https://fonts.googleapis.com">',
            '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
            f'<link rel="preload" as="style" href="{html_escape(google_url)}">']
    tags += [f'<link rel="preload" as="font" type="font/woff2" href="{DS}/assets/fonts/{f}" crossorigin>'
             for f in PRELOAD_FONTS]
    if FONT_LINK not in html:
        print("WARNING: fonts.css link not found, fonts not preloaded", file=sys.stderr)
        return html
    return html.replace(FONT_LINK, "\n  ".join(tags) + "\n  " + FONT_LINK, 1)


def apply_fixes(html):
    missing = []
    for desc, old, new in FIXES:
        if old not in html:
            missing.append(desc)
            continue
        html = html.replace(old, new)
    return html, missing


def main():
    html, missing = apply_fixes(SRC.read_text(encoding="utf-8"))
    for desc in missing:
        print(f"WARNING: fix not applied, text not found: {desc}", file=sys.stderr)
    google_url = fix_fonts_css()
    html = apply_font_preload(html, google_url)

    (ROOT / "index.html").write_text(apply_meta(html, None), encoding="utf-8")
    for lang in LANGS:
        page = apply_meta(REL_REF.sub(r"\1../\2", html), lang)
        out = ROOT / lang / "index.html"
        out.parent.mkdir(exist_ok=True)
        out.write_text(page, encoding="utf-8")
    (ROOT / "404.html").write_text(apply_font_preload(SRC_404.read_text(encoding="utf-8"), google_url),
                                   encoding="utf-8")

    print("built: index.html, 404.html, " + ", ".join(f"{l}/index.html" for l in LANGS))
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
