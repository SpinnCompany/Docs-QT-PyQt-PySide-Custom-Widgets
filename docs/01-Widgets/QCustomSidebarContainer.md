---
title: QCustomSidebarContainer
description: A container widget that can hide or show its contents when the parent sidebar collapses/expands.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomSidebarContainer

A container widget that can hide or show its contents when the parent sidebar collapses/expands.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomSidebarContainer import QCustomSidebarContainer` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomSidebarContainer import QCustomSidebarContainer

widget = QCustomSidebarContainer()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `hideOnCollapse` | `bool` | — |
| `showOnCollapse` | `bool` | — |
| `animationDuration` | `int` | — |

## Signals

| Signal |
|---|
| `visibilityChanged(bool)` |

## Methods

| Method | Description |
|---|---|
| `animationDuration(*args, **kwargs)` | Get the animation duration. |
| `connectToParent()` | Connect to the closest QCustomSidebar parent to listen for collapse/expand signals. |
| `hideContainer()` | Start the hide animation if hideOnCollapse is True. |
| `hideContainerForce()` | Force hide the container regardless of hideOnCollapse/showOnCollapse settings. |
| `hideOnCollapse(*args, **kwargs)` | Whether to hide this container when the sidebar collapses. |
| `onAnimationFinished()` |  |
| `showContainer()` | Start the show animation if hideOnCollapse is True. |
| `showContainerForce()` | Force show the container regardless of hideOnCollapse/showOnCollapse settings. |
| `showOnCollapse(*args, **kwargs)` | Whether to show this container when the sidebar collapses (opposite of hideOnCollapse). |
| `startHideAnimation()` | Animate opacity from 1 to 0 and then hide the widget. |
| `startShowAnimation()` | Animate opacity from 0 to 1 and then show the widget. |
| `visibilityChanged(...)` |  |

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md)
