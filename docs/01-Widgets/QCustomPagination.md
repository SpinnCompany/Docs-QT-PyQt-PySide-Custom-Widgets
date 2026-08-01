---
title: QCustomPagination
description: Page navigation with prev/next and ellipsis.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomPagination

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

## Signals

| Signal |
|---|
| `pageChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `currentPage()` |  |
| `pageChanged(...)` |  |
| `pageCount()` |  |
| `setCurrentPage(page)` |  |
| `setPageCount(count)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `surface-muted`, `outline`, `accent`, `on-primary`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomSidebar](QCustomSidebar.md) · [QCustomSidebarButton](QCustomSidebarButton.md)
