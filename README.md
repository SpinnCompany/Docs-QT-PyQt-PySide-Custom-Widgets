# Custom Widgets — Documentation Site

The [Docusaurus](https://docusaurus.io) site behind
**[spinncompany.github.io/Docs-QT-PyQt-PySide-Custom-Widgets](https://spinncompany.github.io/Docs-QT-PyQt-PySide-Custom-Widgets/)** —
the official documentation for
[QT-PyQt-PySide-Custom-Widgets](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets):
167 widget reference pages, usage guides, a widget gallery, the app
showcase and the release blog.

- **Product site**: [customwidgets.org](https://customwidgets.org/)
- **Videos**: [YouTube — SpinnTV](https://www.youtube.com/@SpinnTV)
- **Support the project**: [Patreon](https://www.patreon.com/c/spinntv)

## Local development

```bash
npm install
npm start                  # dev server with live reload
npm run build              # production build into build/
npm run serve              # serve the production build locally
```

Both servers use the site's base path:
<http://localhost:3000/Docs-QT-PyQt-PySide-Custom-Widgets/>.

## Deploying

> **Pushing to `main` does not publish anything.** GitHub Pages runs in legacy
> branch mode (`build_type: legacy`, source: the `gh-pages` branch) and serves
> that branch as-is. Between 2026-08-06 and 2026-09-16 the published site
> silently sat six weeks behind `main` because of this. **Deploy by hand after
> pushing `main`, and check the live site afterwards.**

```bash
USE_SSH=true npm run deploy   # docusaurus deploy: builds, then force-pushes build/ to gh-pages
```

`USE_SSH=true` is required because the remote is `git@github.com:`; without it
Docusaurus prompts for `GIT_USER`.

The base path `/Docs-QT-PyQt-PySide-Custom-Widgets/` is fixed in
`docusaurus.config.js`, so every build is a production build — there is no
flag to forget. It used to be switched by a `DEPLOY_ENV` variable, but
`docusaurus deploy` runs its own build, which never saw the variable: the five
deploys of 2026-09-16..19 published a site whose stylesheets, scripts, links
and sitemap all pointed at the host root and returned 404.

Verify a minute after deploying (the Pages build takes ~30 s). Counting
sitemap entries is not enough — a broken build has just as many — so check
that a stylesheet and the sitemap URLs actually resolve. Every line should
start with `200`:

```bash
B=https://spinncompany.github.io/Docs-QT-PyQt-PySide-Custom-Widgets
curl -s "$B/" | grep -o '/Docs-QT-PyQt-PySide-Custom-Widgets/assets/css/[^"]*' | head -1 \
  | xargs -I{} curl -s -o /dev/null -w '%{http_code} {}\n' "https://spinncompany.github.io{}"
curl -s "$B/sitemap.xml" | grep -o '<loc>[^<]*' | sed 's/<loc>//' | shuf -n 8 \
  | xargs -n1 curl -s -o /dev/null -w '%{http_code} %{url_effective}\n'
```

## How the content is produced

Most widget reference pages are **generated, not hand-written**:

- `tools/gen_widget_docs.py` in the
  [widgets repo](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets)
  writes every page under `docs/Widgets/` from the widget catalog and Qt
  metadata, captures the screenshots and animations under
  `static/img/showcase/`, and fills the property/method tables.
- Generated pages carry the `{/* generated:widget-reference */}` marker
  and are `.mdx`. **Do not edit them by hand** — changes are overwritten
  on the next generator run; fix the widget docstrings or the generator
  instead.
- Pages *without* the marker (guides, usage examples) are hand-written
  and safe to edit. New pages must be added to `sidebars.js` manually.
- The gallery and app showcase pages are generated too; blog posts under
  `blog/` are hand-written.

### Authoring rules that break the build

1. Content pages are **MDX** — escape raw `{` and `<` in prose (or keep
   them inside code spans); HTML comments are invalid, use `{/* … */}`.
2. Markdown images use `/img/...` paths — `static/` is the site root.
3. Raw HTML `src`/`href` never get baseUrl rewriting — in `.mdx` wrap
   with `useBaseUrl('…')`; markdown-syntax images and links are safe.
4. Code-span every Qt type name (`` `Qt::TextFormat` `` — bare, it parses
   as an autolink or JSX tag).
5. One extension per doc id — never keep a `.md` and `.mdx` twin.

> This repository is the documentation's permanent home, maintained by
> SpinnCompany. The original KhamisiKibet repository is no longer
> accessible.
