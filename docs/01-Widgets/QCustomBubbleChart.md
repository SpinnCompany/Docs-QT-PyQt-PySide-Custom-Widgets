---
title: QCustomBubbleChart
description: An interactive packed-circle (bubble) chart.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomBubbleChart

:::info Pro widget

`QCustomBubbleChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

![QCustomBubbleChart](/img/showcase/bubblechart.png)

An interactive packed-circle (bubble) chart.

The sentiment / share bubble cloud: one circle per item, AREA proportional to
the value, coloured by category and labelled inside when big enough. Circles
are packed by a small deterministic force relaxation (push overlaps apart +
gravity to a per-category anchor when grouped), then scaled to fill the widget.

INTERACTIVE (the reference has all of these):
* hover  -> a CUSTOM painted tooltip card (never the OS QToolTip), plus a
grow animation + glow on the hovered bubble.
* zoom   -> wheel zooms toward the cursor, a painted +/- control, drag to pan,
double-click to reset. zoomIn()/zoomOut()/resetView().
* search -> setSearchQuery(text) dims the non-matching bubbles; the painted
search button emits searchRequested().
* scale  -> optional category grouping (`groupByCategory`) + axis labels.

setItems([{label, value, category}]) / itemsJson; colours via
setCategoryColors({category: colour}). Signals: bubbleClicked(label),
searchRequested(), zoomChanged(float).

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomBubbleChart import QCustomBubbleChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomBubbleChart import QCustomBubbleChart

widget = QCustomBubbleChart()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomBubbleChart in dark theme](/img/showcase/bubblechart-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `itemsJson` | `string` | — |
| `categoriesJson` | `string` | — |
| `padding` | `float` | `3.0` |
| `showLabels` | `bool` | `True` |
| `minLabelRadius` | `float` | `16.0` |
| `labelColor` | `color` | `#ffffff` |
| `defaultColor` | `color` | `#8b90a0` |
| `shadeVariation` | `float` | `0.18` |
| `hoverGlow` | `bool` | `True` |
| `hoverScale` | `float` | `1.16` |
| `groupByCategory` | `bool` | `False` |
| `zoomable` | `bool` | `True` |
| `showControls` | `bool` | `True` |
| `searchQuery` | `string` | — |
| `tooltips` | `bool` | `True` |
| `tooltipBgColor` | `color` | `#0e1016` |
| `controlColor` | `color` | `#f4f6fb` |

## Signals

| Signal |
|---|
| `bubbleClicked(QString)` |
| `searchRequested()` |
| `zoomChanged(double)` |

## Methods

| Method | Description |
|---|---|
| `bubbleClicked(...)` |  |
| `categoriesJson(*args, **kwargs)` |  |
| `controlColor(*args, **kwargs)` |  |
| `defaultColor(*args, **kwargs)` |  |
| `groupByCategory(*args, **kwargs)` |  |
| `hoverGlow(*args, **kwargs)` |  |
| `hoverScale(*args, **kwargs)` |  |
| `items()` |  |
| `itemsJson(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `minLabelRadius(*args, **kwargs)` |  |
| `padding(*args, **kwargs)` |  |
| `resetView()` |  |
| `searchQuery(*args, **kwargs)` |  |
| `searchRequested(...)` |  |
| `setCategoryColors(mapping)` |  |
| `setItems(items)` |  |
| `setSearchQuery(text)` |  |
| `shadeVariation(*args, **kwargs)` |  |
| `showControls(*args, **kwargs)` |  |
| `showLabels(*args, **kwargs)` |  |
| `tooltipBgColor(*args, **kwargs)` |  |
| `tooltips(*args, **kwargs)` |  |
| `zoomChanged(...)` |  |
| `zoomIn()` |  |
| `zoomOut()` |  |
| `zoomable(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `up`, `down`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md) · [QCustomDonut](QCustomDonut.md)
