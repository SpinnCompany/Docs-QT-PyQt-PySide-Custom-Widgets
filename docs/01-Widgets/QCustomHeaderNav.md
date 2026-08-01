---
title: QCustomHeaderNav
description: A horizontal top navigation bar.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomHeaderNav

![QCustomHeaderNav](/img/showcase/headernav.png)

A horizontal top navigation bar.

The gap this fills: every navigation widget in the catalog is vertical
(QCustomSidebar) or an overlay (QCustomSlideMenu, QCustomDrawer). A plain
horizontal header - brand on the left, links in the middle, actions on the
right - had to be assembled by hand every time.

Painted rather than assembled from buttons so the active-item indicator can
slide between items, and so overflow can collapse cleanly at narrow widths
instead of clipping links off the edge.

Items are authored with setItems([...]) or the itemsCsv property:

itemsCsv = "Home,Docs,Pricing,Blog"
itemsCsv = "home=Home,docs=Docs"       explicit key=label

Emits itemSelected(str) with the item key, and brandClicked().

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomHeaderNav import QCustomHeaderNav` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomHeaderNav import QCustomHeaderNav

widget = QCustomHeaderNav()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomHeaderNav in dark theme](/img/showcase/headernav-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `indicatorPos` | `float` | — |
| `itemsCsv` | `string` | — |
| `brandText` | `string` | — |
| `currentKey` | `string` | — |
| `indicator` | `enum: `underline` / `pill` / `none`` | `underline` |
| `alignment` | `enum: `left` / `center` / `right`` | `left` |
| `itemSpacing` | `int` | `8` |
| `barHeight` | `int` | `56` |
| `animated` | `bool` | `True` |
| `showDivider` | `bool` | `True` |
| `accentColor` | `color` | `#2563eb` |
| `textColor` | `color` | `#64748b` |
| `activeTextColor` | `color` | `#0f172a` |
| `surfaceColor` | `color` | `#ffffff` |
| `dividerColor` | `color` | `#e2e8f0` |

## Signals

| Signal |
|---|
| `brandClicked()` |
| `itemSelected(QString)` |
| `overflowClicked()` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `activeTextColor(*args, **kwargs)` |  |
| `alignment(*args, **kwargs)` |  |
| `animated(*args, **kwargs)` |  |
| `barHeight(*args, **kwargs)` |  |
| `brandClicked(...)` |  |
| `brandText(*args, **kwargs)` |  |
| `count()` |  |
| `currentIndex()` |  |
| `currentKey(*args, **kwargs)` |  |
| `currentKeyValue()` |  |
| `dividerColor(*args, **kwargs)` |  |
| `hiddenCount()` |  |
| `indicator(*args, **kwargs)` |  |
| `indicatorPos(*args, **kwargs)` |  |
| `itemAt(pos)` |  |
| `itemRects()` | Always recomputed. Caching these meant a caller that resized without |
| `itemSelected(...)` |  |
| `itemSpacing(*args, **kwargs)` |  |
| `items()` |  |
| `itemsCsv(*args, **kwargs)` |  |
| `labelFor(key)` |  |
| `overflowClicked(...)` |  |
| `setCurrentIndex(index, animate=True)` |  |
| `setCurrentKey(key, animate=True)` |  |
| `setItems(items)` | Replace the items, keeping the selection if its key survives. |
| `showDivider(*args, **kwargs)` |  |
| `surfaceColor(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomHeaderNav/main.py`.

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomMenu](QCustomMenu.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md) · [QCustomSidebarButton](QCustomSidebarButton.md)
