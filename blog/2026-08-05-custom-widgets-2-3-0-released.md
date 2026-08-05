---
authors:
- Khamisi Kibet
date: '2026-08-05'
slug: custom-widgets-2-3-0-released
tags:
- PySide6
- Python
- GUI
- Custom Widgets
- version
- news
title: "Custom Widgets 2.3.0: 163 widgets, painted charts, and docs that can't go stale"
---

Version **2.3.0** is on PyPI — the largest release in the project's history.
The catalogue grows to **163 documented widgets**, every example app was
rebuilt and verified, and the entire reference documentation is now generated
straight from the code.

```bash
pip install --upgrade QT-PyQt-PySide-Custom-Widgets
```

<!-- truncate -->

## A painted chart family

Charts used to lean on Qt Charts; most of the family is now painted directly
with QPainter — theme-token driven, crisp at any size, and interactive:
Scatter, Funnel, RangeBar, Radial gauges, Sankey, Candlestick, Beeswarm,
DivergingBar, DotMatrix, Sparkline, MiniBar, and the ring/segment
[QCustomDonut](/Widgets/QCustomDonut). The
[bubble chart](/Widgets/QCustomBubbleChart) ships zoom, drag-pan, search
dimming and a painted tooltip card — not an OS tooltip in sight.

![QCustomDonut](/img/showcase/donut.png)

## A real data table

[QCustomDataTable](/Widgets/QCustomDataTable) brings rich cell renderers
(two-line, status dots, currency, links), a select column, sortable headers
and per-column alignment — enough to match a modern SaaS table without
leaving Qt. Supporters get **DataTable Pro** on top: virtualization for 100k+
rows, frozen columns, grouping with aggregates, pivot and export.

## Maps, tokens, and the rest

- **QCustomMapView** — the optional `[map]` extra:
  QtLocation's OSM backend with an offline default provider. No API key, no
  Chromium.
- **Design tokens** — `applyDesignTokens(app, theme="dark")` themes the whole
  widget set from one call, light and dark.
- **Chrome & motion** — hamburger menu, animated slide menu, animated page
  transitions, flow layouts with animated reflow, compass dials, liquid and
  radial gauges, skeletons and more. Over 60 widgets animate.
- **Typed stubs** — the whole set ships `.pyi` stubs (`py.typed`), mypy-clean.
- **A design-rule linter** — `Custom_Widgets.lint` enforces the visual rules a
  type checker can't see (no glyph icons, no hardcoded hex, justified shadows).
- **An MCP server** — the `[mcp]` extra lets AI agents drive Qt Designer, run
  apps, and read the widget catalog with exact signatures.

## Docs that cannot drift

Every widget page — prose, property tables, signals, screenshots, animations
— is generated from the live code. The [gallery](/gallery) shows all 163
widgets (61 animated), and every screenshot in it is produced by the same
pipeline that verifies the widgets still render.

## 82 rebuilt examples — and an App Showcase

Every public example app was rebuilt to the full structure (Designer-editable
`.ui` forms, compiled sources, themed stylesheets, zero inline styles) and
verified headlessly. And because widgets are parts, not products, the new
[App showcase](/Usage-Examples/AppShowcase) captures **92 complete
applications** live — dashboards, a chat client, a music player, a node
editor — every screenshot taken from the running app.

![NodeStudio](/img/showcase-apps/nodestudio.png)

## Fixes worth knowing about

Multi-second boot hangs in component-heavy apps are gone (QSettings writes
are now write-if-changed), stacked-widget slide/fade transitions and slide
menu auto-sizing are restored, a QtLocation provider segfault is fixed, and
chart theme listeners can no longer crash an app by firing into a deleted
widget.

## Links

- [PyPI: QT-PyQt-PySide-Custom-Widgets 2.3.0](https://pypi.org/project/QT-PyQt-PySide-Custom-Widgets/2.3.0/)
- [Widget gallery](/gallery) · [App showcase](/Usage-Examples/AppShowcase)
- [Pro & supporter plans](https://customwidgets.org/pricing/)
- [Patreon](https://www.patreon.com/c/spinntv) · [YouTube](https://www.youtube.com/@SpinnTV)

The free package is GPLv3, as always. Thank you to everyone who filed issues,
tested previews and supported the project — this release is enormous because
of you.
