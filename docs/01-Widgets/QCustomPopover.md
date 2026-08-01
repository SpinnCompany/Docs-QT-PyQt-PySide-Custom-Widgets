---
title: QCustomPopover
description: A rich popover anchored to a widget.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomPopover

A rich popover anchored to a widget.

Unlike a text tooltip, a popover holds arbitrary widgets and points at its
anchor with an arrow. Opens on demand (or wire it to a trigger via
attach()); closes on outside click. Tokenized colours via qproperty.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomPopover import QCustomPopover` |
| **Qt Designer** | Code only |

## Quick start

```python
from Custom_Widgets.QCustomPopover import QCustomPopover

widget = QCustomPopover()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `panelColor` | `color` | — |
| `borderColor` | `color` | — |

## Signals

| Signal |
|---|
| `closed()` |
| `opened()` |

## Methods

| Method | Description |
|---|---|
| `addWidget(widget)` |  |
| `attach(trigger, placement='bottom')` | Create a popover anchored to `trigger` and open it on click. |
| `borderColor(*args, **kwargs)` |  |
| `closed(...)` |  |
| `contentLayout()` |  |
| `opened(...)` |  |
| `panelColor(*args, **kwargs)` |  |
| `setPlacement(placement)` |  |
| `showPopover()` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAccordion](QCustomAccordion.md) · [QCustomCardStack](QCustomCardStack.md) · [QCustomCarousel](QCustomCarousel.md) · [QCustomEmbeddedWindow](QCustomEmbeddedWindow.md) · [QCustomFlowLayout](QCustomFlowLayout.md) · [QCustomFlowWidget](QCustomFlowWidget.md) · [QCustomGlassFrame](QCustomGlassFrame.md) · [QCustomModal](QCustomModal.md)
