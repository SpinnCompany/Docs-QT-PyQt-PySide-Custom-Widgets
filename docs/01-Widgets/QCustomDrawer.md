---
title: QCustomDrawer
description: A slide-in side panel / sheet.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomDrawer

![QCustomDrawer](/img/showcase/drawer.png)

A slide-in side panel / sheet.

A dimmed overlay with a panel that slides in from an edge (left / right /
top / bottom). Backdrop-click or Esc closes it. Tokenized.

drawer = QCustomDrawer(window, side="left", size=280)
drawer.contentLayout().addWidget(nav)
drawer.open()

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomDrawer import QCustomDrawer` |
| **Qt Designer** | Code only |

## Quick start

```python
from Custom_Widgets.QCustomDrawer import QCustomDrawer

widget = QCustomDrawer()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomDrawer in dark theme](/img/showcase/drawer-dark.png)

## Signals

| Signal |
|---|
| `closed()` |
| `opened()` |

## Methods

| Method | Description |
|---|---|
| `addWidget(widget)` |  |
| `close()` |  |
| `closed(...)` |  |
| `contentLayout()` |  |
| `isOpen()` |  |
| `open()` |  |
| `opened(...)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md) · [QCustomSidebarButton](QCustomSidebarButton.md)
