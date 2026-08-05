# Custom Widgets — Documentation Site

The [Docusaurus](https://docusaurus.io) site behind
**[spinncompany.github.io/Docs-QT-PyQt-PySide-Custom-Widgets](https://spinncompany.github.io/Docs-QT-PyQt-PySide-Custom-Widgets/)** —
the official documentation for
[QT-PyQt-PySide-Custom-Widgets](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets):
164 widget reference pages, usage guides, a widget gallery, the app
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

## Deploying

GitHub Pages serves the `gh-pages` branch. Build with the Pages base URL,
then publish the `build/` output to `gh-pages`:

```bash
npm run build:gh-pages     # DEPLOY_ENV=gh-pages docusaurus build
# publish build/ to the gh-pages branch (worktree + rsync, or docusaurus deploy)
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
