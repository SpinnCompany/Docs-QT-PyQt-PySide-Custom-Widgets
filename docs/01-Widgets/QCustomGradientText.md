---
title: QCustomGradientText
description: Text filled with a gradient.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomGradientText

Text filled with a gradient.

The headline treatment every landing page wants and QSS cannot do: Qt
stylesheets have no text-fill gradient, so the only route is painting the
text with a gradient pen.

Optionally animated, sliding the gradient along the text. The animation is
off by default - a permanently shimmering headline is a distraction, and it
costs a repaint per frame.

Reuses the multi-stop CSV convention from QCustomGradientPicker, so a
gradient authored there drops straight in.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomGradientText import QCustomGradientText` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomGradientText import QCustomGradientText

widget = QCustomGradientText()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `stopsCsv` | `string` | `0:#2563eb,1:#a855f7` |
| `angle` | `int` | `0` |
| `animated` | `bool` | `False` |
| `animationSpeed` | `int` | `40` |
| `fontScale` | `float` | `1.6` |
| `bold` | `bool` | `True` |
| `alignment` | `enum: `left` / `center` / `right`` | `center` |
| `wordWrap` | `bool` | `False` |

## Signals

| Signal |
|---|
| `clicked()` |

## Methods

| Method | Description |
|---|---|
| `alignment(*args, **kwargs)` |  |
| `angle(*args, **kwargs)` |  |
| `animated(*args, **kwargs)` |  |
| `animationSpeed(*args, **kwargs)` |  |
| `bold(*args, **kwargs)` |  |
| `clicked(...)` |  |
| `fontScale(*args, **kwargs)` |  |
| `gradientFor(rect)` | The gradient across a rect, including the animation offset. |
| `isAnimating()` |  |
| `setStops(stops)` | Replace the gradient stops. Fewer than two is rejected. |
| `start()` |  |
| `stop()` |  |
| `stops()` |  |
| `stopsCsv(*args, **kwargs)` |  |
| `text(*args, **kwargs)` |  |
| `wordWrap(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomGradientText/main.py`.

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
