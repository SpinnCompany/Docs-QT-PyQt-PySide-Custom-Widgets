---
title: QCustomDonut
description: A painted donut / multi-ring radial chart.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomDonut

A painted donut / multi-ring radial chart.

Two modes:
mode="rings" (default) - CONCENTRIC gauge rings, one per value: each value
is its own ring at a decreasing radius, sweeping an arc proportional to
value / max(values) over a faint track, with rounded caps. This is the
"several rings" radial-bar look (outer = largest value).
mode="segments" - a single ring split into coloured segments (a classic
donut), rounded caps + gaps.

Painted directly with QPainter, so it stays crisp at ANY size (a QChart pie
collapses to a hairline in constrained panels). Give values/colours via
setData(...) in code, or the valuesCsv / colorsCsv properties in Qt Designer.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomDonut import QCustomDonut` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomDonut import QCustomDonut

widget = QCustomDonut()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `mode` | `enum: `rings` / `segments`` | `rings` |
| `valuesCsv` | `string` | `52,33,15` |
| `colorsCsv` | `string` | `#7c6cf6,#f2794b,#f4c44e` |
| `holeRatio` | `float` | `0.42` |
| `maxSweep` | `float` | `324.0` |
| `gapDegrees` | `float` | `4.0` |
| `trackColor` | `color` | — |
| `gapColor` | `color` | — |
| `showPercentLabels` | `bool` | `False` |
| `percentLabelColor` | `color` | `#ffffff` |
| `percentPill` | `bool` | `True` |
| `percentPillColor` | `color` | `#12141c` |
| `minLabelPercent` | `float` | `4.0` |
| `hatchCsv` | `string` | — |
| `hatchPattern` | `enum: `bdiag` / `fdiag` / `cross` / `horizontal` / `vertical` / `dense`` | `bdiag` |

## Methods

| Method | Description |
|---|---|
| `colorsCsv(*args, **kwargs)` |  |
| `gapColor(*args, **kwargs)` |  |
| `gapDegrees(*args, **kwargs)` |  |
| `hatchCsv(*args, **kwargs)` |  |
| `hatchPattern(*args, **kwargs)` |  |
| `holeRatio(*args, **kwargs)` |  |
| `maxSweep(*args, **kwargs)` |  |
| `minLabelPercent(*args, **kwargs)` |  |
| `mode(*args, **kwargs)` |  |
| `percentLabelColor(*args, **kwargs)` |  |
| `percentPill(*args, **kwargs)` |  |
| `percentPillColor(*args, **kwargs)` |  |
| `setColors(colors)` |  |
| `setData(values, colors=None)` |  |
| `setGapColor(color)` |  |
| `setHatchIndices(indices)` | Segment indices (segments mode) rendered with a hatch/pattern fill. |
| `setHatchPattern(name)` |  |
| `setMode(mode)` |  |
| `setShowPercentLabels(on)` |  |
| `setTrackColor(color)` |  |
| `showPercentLabels(*args, **kwargs)` |  |
| `trackColor(*args, **kwargs)` |  |
| `values()` |  |
| `valuesCsv(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
