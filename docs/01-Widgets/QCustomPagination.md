---
title: QCustomPagination
description: Page navigation with prev/next and ellipsis.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomPagination

![QCustomPagination](/img/showcase/pagination.png)

Page navigation with prev/next and ellipsis.

[<] [1] ... [4] [5] [6] ... [20] [>]  - first/last always shown, a window
around the current page, ellipsis for gaps. Tokenized. Emits pageChanged.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomPagination import QCustomPagination` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomPagination import QCustomPagination

widget = QCustomPagination()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomPagination in dark theme](/img/showcase/pagination-dark.png)

## Signals

| Signal |
|---|
| `pageChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `currentPage()` | Current page. |
| `pageChanged(...)` | Page changed. |
| `pageCount()` | Page count. |
| `setCurrentPage(page)` | Set the current page. |
| `setPageCount(count)` | Set the page count. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `surface-muted`, `outline`, `accent`, `on-primary`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomSidebar](QCustomSidebar.md) · [QCustomSidebarButton](QCustomSidebarButton.md)
