---
title: QCustomMenu
description: A modern popup action menu.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomMenu

![QCustomMenu](/img/showcase/menu.png)

A modern popup action menu.

A frameless, rounded, elevated popup for the "..." / more buttons: a column
of icon + label action rows with hover states, optional separators and a
right-aligned hint. Open it anchored under a button with popupAt(button).
Emits triggered(key) when an item is picked. Theme it from code with
applyColors(...) so it flips with the app theme (it is a top-level popup, so
the app stylesheet does not cascade in automatically).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomMenu import QCustomMenu` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomMenu import QCustomMenu

widget = QCustomMenu()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomMenu in dark theme](/img/showcase/menu-dark.png)

## Signals

| Signal |
|---|
| `triggered(QString)` |

## Methods

| Method | Description |
|---|---|
| `addAction(text, key=None, icon=None, hint='', danger=False)` | Add an action row. `icon` may be a QIcon or QPixmap. Returns the key. |
| `addSeparator()` |  |
| `applyColors(bg=None, text=None, muted=None, hover=None, border=None, accent=None, danger=None)` |  |
| `clear()` |  |
| `popupAt(anchor, align='right', gap=4)` | Show the menu just below `anchor`, right- or left-aligned to it. |
| `popupAtPos(global_pos)` |  |
| `triggered(...)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `background`, `text`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md) · [QCustomSidebarButton](QCustomSidebarButton.md)
