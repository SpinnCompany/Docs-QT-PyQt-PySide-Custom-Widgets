# Docs build progress

Internal tracker for documentation work on the QT-PyQt-PySide-Custom-Widgets
Docusaurus site (mirrors the code repo's `docs/design/build-progress.md`). **This
file lives at the repo root, outside `docs/`, so it is _not_ published to the
site.** Everything below is local; nothing here is pushed until the wider effort
is ready.

## 2026-07-23 — Licensing + badge modernization docs

- **Licensing page** (`docs/07-Appendices/licensing.md`, Resources sidebar) —
  states the current library license (**GPLv3**, per the code repo's `LICENSE`),
  the **separate Qt** licensing responsibility (PySide6 LGPL vs PyQt6
  GPL/commercial; PySide6 recommended for closed-source), and the bundled
  third-party attributions (Font Awesome CC BY 4.0, Material Apache-2.0, Feather
  MIT, Rosario OFL) pointing at the in-package notices. Deliberately does **not**
  claim LGPL or publish commercial terms — the relicense is staged/counsel-gated
  and the Pro add-on isn't on sale. _Commits: 748b45f._
- **`QBadgeWidget` → `QCustomBadge` migration** — new `docs/01-Widgets/QCustomBadge.md`
  reference page (modes, variants, sizes, overlay attach); the migration note in
  `docs/07-Appendices/v3-migration.md` (anchor `#qbadgewidget-to-qcustombadge`);
  the old `QBadgeWidget.md` turned into a "removed" redirect stub; sidebar lists
  `QCustomBadge`. _Commits: d895d3b._
- **Org URL migration** — links, badges, and image URLs pointed at the
  **SpinnCompany** org. _Commits: 23bc235._

## 2026-07-22 — Designer IDE + v3 docs round

- SVG theme-icons documentation (single shared set, migration, Designer workflow).
- Designer tools, the live bridge protocol, and the MCP server documented.
- Typed Designer properties documented; Designer tools page refreshed.
- **v3 migration guide** added (`docs/07-Appendices/v3-migration.md`).
- Designer IDE round documented; UI Workspace (drop-event route) + the Workspace
  menu / project switcher.

## Pending / owed

- **Update the Licensing page when the GPLv3 → LGPLv3 relicense lands** (change
  the license wording; publish commercial terms only once counsel-reviewed and
  the Pro add-on is on sale). Tracked in the code repo's
  `docs/relicense/changeset/` runbook.
- Widget reference pages for the new free widgets shipped in the code repo but
  not yet documented here: Switch, NumberInput, Alert, StatCard, ProgressRing,
  Card (Badge is done). DataTable + DataTable Pro user docs.
- A published changelog/blog entry (`blog/`) can announce the above when the
  release goes out — separate from this internal tracker.
