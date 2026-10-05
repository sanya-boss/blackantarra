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

# Relative references to site files, prefixed with ../ for the language folders.
REL_REF = re.compile(r"""(["'`(])(?:\./)?(assets/|_ds/|support\.js)""")


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

    (ROOT / "index.html").write_text(html, encoding="utf-8")
    for lang in LANGS:
        page = REL_REF.sub(r"\1../\2", html).replace("<html>", f'<html lang="{lang}">', 1)
        out = ROOT / lang / "index.html"
        out.parent.mkdir(exist_ok=True)
        out.write_text(page, encoding="utf-8")
    (ROOT / "404.html").write_text(SRC_404.read_text(encoding="utf-8"), encoding="utf-8")

    print("built: index.html, 404.html, " + ", ".join(f"{l}/index.html" for l in LANGS))
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
