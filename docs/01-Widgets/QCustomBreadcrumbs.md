---
title: QCustomBreadcrumbs
description: A clickable path navigation.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomBreadcrumbs

![QCustomBreadcrumbs](/img/showcase/breadcrumbs.png)

A clickable path navigation.

Home / Section / Page ... - all but the last segment are clickable
links; the last is the current location. Tokenized.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomBreadcrumbs import QCustomBreadcrumbs` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomBreadcrumbs import QCustomBreadcrumbs

widget = QCustomBreadcrumbs()
widget.setItems([("Home", "/"), ("Projects", "/projects"),
        ("Atlas", "/projects/atlas"),
        ("Settings", "/projects/atlas/settings")])
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomBreadcrumbs in dark theme](/img/showcase/breadcrumbs-dark.png)

## Signals

| Signal |
|---|
| `itemClicked(int,PyObject)` |

## Methods

| Method | Description |
|---|---|
| `itemClicked(...)` | Item clicked. |
| `items()` | Items. |
| `setItems(items)` | Set the trail. Each item is a string, (label, data) pair, or a dict |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `on-surface`, `surface-muted`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md) · [QCustomSidebarButton](QCustomSidebarButton.md)
