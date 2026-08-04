---
title: QCustomSidebarContainer
description: A container widget that can hide or show its contents when the parent sidebar collapses/expands.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomSidebarContainer

![QCustomSidebarContainer](/img/showcase/sidebarcontainer.png)

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
lay = _intoLayout(w)
title = QLabel("Filters")
title.setStyleSheet("font-size: 14px; font-weight: 600;")
lay.addWidget(title)
for text in ("Status: Active", "Owner: Me", "Due this week"):
lay.addWidget(QPushButton(text))
lay.addStretch(1)
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomSidebarContainer in dark theme](/img/showcase/sidebarcontainer-dark.png)

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
