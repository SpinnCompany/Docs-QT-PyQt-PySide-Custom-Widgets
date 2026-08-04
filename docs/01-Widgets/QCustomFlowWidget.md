---
title: QCustomFlowWidget
description: A container widget that uses QCustomFlowLayout internally.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomFlowWidget

![QCustomFlowWidget](/img/showcase/flowwidget.gif)

A container widget that uses QCustomFlowLayout internally.

ALL custom properties are exposed here for Qt Designer.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomFlowWidget import QCustomFlowWidget` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomFlowWidget import QCustomFlowWidget

widget = QCustomFlowWidget()
for chip in _flowChips():
widget.addWidget(chip)
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomFlowWidget in dark theme](/img/showcase/flowwidget-dark.gif)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `spacing` | `int` | — |
| `horizontalSpacing` | `int` | — |
| `verticalSpacing` | `int` | — |
| `margin` | `int` | — |
| `animationEnabled` | `bool` | — |
| `animationDuration` | `int` | — |
| `animationEasingCurve` | `string` | — |
| `equalDistribution` | `bool` | — |
| `autoFillWidth` | `bool` | — |
| `autoFillHeight` | `bool` | — |
| `justifySpacing` | `bool` | — |
| `orderJsonPath` | `string` | — |

## Methods

| Method | Description |
|---|---|
| `addWidget(widget, position=None)` | Add a widget to the flow layout |
| `adoptExistingChildren()` | Adopt existing child widgets from Qt Designer in their original order |
| `animationDuration(*args, **kwargs)` |  |
| `animationEasingCurve(*args, **kwargs)` |  |
| `animationEnabled(*args, **kwargs)` |  |
| `autoFillHeight(*args, **kwargs)` |  |
| `autoFillWidth(*args, **kwargs)` |  |
| `childEvent(event)` | Handle child events to detect when widgets are added |
| `clear()` | Remove all widgets from the flow layout |
| `equalDistribution(*args, **kwargs)` |  |
| `getFlowLayout()` | Get the underlying flow layout |
| `horizontalSpacing(*args, **kwargs)` |  |
| `isAnimating()` | Check if animations are running |
| `justifySpacing(*args, **kwargs)` |  |
| `margin(*args, **kwargs)` |  |
| `orderJsonPath(*args, **kwargs)` |  |
| `refreshLayout()` | Manually refresh the layout |
| `removeWidget(widget)` | Remove a widget from the flow layout |
| `spacing(*args, **kwargs)` |  |
| `stopAllAnimations()` | Stop all ongoing animations |
| `verticalSpacing(*args, **kwargs)` |  |

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomFlowWidget/main.py`.

## Related

[QCustomAccordion](QCustomAccordion.md) · [QCustomCardStack](QCustomCardStack.md) · [QCustomCarousel](QCustomCarousel.md) · [QCustomEmbeddedWindow](QCustomEmbeddedWindow.md) · [QCustomFlowLayout](QCustomFlowLayout.md) · [QCustomGlassFrame](QCustomGlassFrame.md) · [QCustomModal](QCustomModal.md) · [QCustomPopover](QCustomPopover.md)
