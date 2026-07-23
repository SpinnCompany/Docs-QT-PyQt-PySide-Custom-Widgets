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

### New free-widget reference pages (2026-07-23)

Added reference pages (Overview / Constructor / Properties / Methods / Signals /
Usage / Theming) matching the QCustomBadge page style, with sidebar entries:

- QCustomSwitch — Input & Controls
- QCustomNumberInput — Input & Controls
- QCustomAlert — Display & Information
- QCustomStatCard — Display & Information
- QCustomProgressRing — Progress & Loading
- QCustomCard — Display & Information

_Commit: dc26908._

### DataTable + DataTable Pro pages (2026-07-23)

New "Data & Tables" sidebar category with two pages:
- `QCustomDataTable` (free) — columns/data, sort/filter/paginate, selection,
  signals, properties, theming.
- `QCustomDataTablePro` (commercial add-on) — virtualization + DataProvider,
  server-side push-down, frozen columns, inline editing, grouping+aggregation,
  pivot, CSV/XLSX export; links the Licensing page (no prices).

_Commit: fddaa72._

### DataTable usage-example recipes (2026-07-23)

Five runnable recipe pages under Usage Examples: DataTableBasics (free),
DataTableVirtualization, DataTableEditing, DataTableGroupingPivot,
DataTableFrozenExport (Pro). _Commit: 0f10544._

## Pending / owed

- **Update the Licensing page when the GPLv3 → LGPLv3 relicense lands** (change
  the license wording; publish commercial terms only once counsel-reviewed and
  the Pro add-on is on sale). Tracked in the code repo's
  `docs/relicense/changeset/` runbook.
- A published changelog/blog entry (`blog/`) can announce the new widget +
  DataTable docs when the release goes out — separate from this internal tracker.
