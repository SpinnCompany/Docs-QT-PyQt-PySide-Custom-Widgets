---
authors:
- Khamisi Kibet
date: '2026-08-05'
slug: custom-widgets-pro-1-0-0
tags:
- PySide6
- Python
- GUI
- Custom Widgets
- Pro
- version
- news
title: "Custom Widgets Pro 1.0.0: DataTable Pro is here"
---

**Custom Widgets Pro 1.0.0 is on PyPI.** The free library gives you the
164-widget catalogue; Pro adds the engine rooms — starting with **DataTable
Pro**, the data table for real workloads.

```bash
pip install QT-PyQt-PySide-Custom-Widgets-Pro
```

<!-- truncate -->

![DataTable Pro in grouped mode](/img/showcase/datatablepro.png)

## What DataTable Pro does

Built on the free `QCustomDataTable` (same API, same renderers, same
theming), Pro adds what production data needs:

- **Virtualization** — lazy row windows over 100k+ or streaming sources via
  a `DataProvider`; scrolling fetches, nothing materialises up front.
- **Server-side sort & filter push-down** — the header drives your backend,
  not a client-side sort of one loaded window.
- **Grouping with aggregates** — `groupBy(["plan"], aggregates={"mrr": "sum"})`
  gives collapsible group headers with computed totals, themed from your
  design tokens.
- **Pivot (cross-tab)**, **frozen columns**, **inline editing with
  validators**, and **CSV/XLSX export** that walks the full result set —
  "what you see" at any scale.

The wheels are compiled (no readable Python source), built for Python
3.10–3.14 on Windows, macOS and Linux, and every macOS/Windows wheel is
import-tested in CI against the published free core before release.

## How licensing works

Install freely — without an entitlement the package runs in **unlicensed
dev/eval mode**, so you can evaluate everything today. A plan from
[customwidgets.org/pricing](https://customwidgets.org/pricing/) or an active
[Patreon membership](https://www.patreon.com/c/spinntv) gets you a licence
token; `custom-widgets-pro activate <token>` and you're done. The terms are
written for real product teams:

- **Royalty-free in your applications** — end users never need a plan.
- **Perpetual fallback** — versions you obtained while subscribed stay
  licensed forever; the plan buys updates and support.
- **The GPL question, answered in writing**: the free core is GPLv3, and the
  Pro license includes the copyright holder's additional permission, so
  combining the core with Pro and with *your* application does not pull your
  application under the GPL.

## Supporters also get the premium apps

The same plan unlocks the [twelve flagship example
applications](/blog/app-showcase-92-real-apps) — six dashboards, AuroraChat,
the operations decks, NodeStudio, RhythmoTune — full production-shaped
source, meant to be the starting point for your own product.

## Links

- [PyPI: QT-PyQt-PySide-Custom-Widgets-Pro](https://pypi.org/project/QT-PyQt-PySide-Custom-Widgets-Pro/)
- [DataTable docs](/Widgets/QCustomDataTable) · [DataTable Pro guide](/Usage-Examples/DataTableGroupingPivot)
- [Plans](https://customwidgets.org/pricing/) · [Patreon](https://www.patreon.com/c/spinntv) · [YouTube](https://www.youtube.com/@SpinnTV)

Free core 2.3.0 [shipped this morning](/blog/custom-widgets-2-3-0-released);
Pro 1.0.0 completes the release. Thank you for supporting independent Qt
tooling.
