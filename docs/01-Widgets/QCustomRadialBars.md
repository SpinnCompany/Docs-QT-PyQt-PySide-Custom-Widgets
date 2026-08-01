---
title: QCustomRadialBars
description: A painted radial bar chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomRadialBars

:::info Pro widget

`QCustomRadialBars` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

A painted radial bar chart.

Concentric arcs, one per category, each sweeping in proportion to its
value. The "activity rings" form: compact, reads at a glance, and unlike a
pie it compares values that do NOT sum to a whole.

QPainter only, NO QtCharts (see docs/design/mui-charts-gap.md). Angles come
from the shared _chart_axis polar helpers, so this winds the same way as
QCustomRadarChart and QCustomRadialLines.

Data goes in with setBars([...]) in code, or barsCsv in Qt Designer:

barsCsv = "Move=82,Exercise=64,Stand=95"

Emits barHovered(int) and barClicked(int); -1 means "nothing".

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomRadialBars import QCustomRadialBars` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRadialBars import QCustomRadialBars

widget = QCustomRadialBars()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `barsCsv` | `string` | — |
| `colorsCsv` | `string` | — |
| `maxValue` | `float` | `100.0` |
| `startAngle` | `int` | `90` |
| `clockwise` | `bool` | `True` |
| `thickness` | `int` | `18` |
| `spacing` | `int` | `6` |
| `holeRatio` | `float` | `0.35` |
| `rounded` | `bool` | `True` |
| `showTrack` | `bool` | `True` |
| `showLabels` | `bool` | `True` |
| `showValues` | `bool` | `True` |
| `trackColor` | `color` | `#e2e8f0` |
| `labelColor` | `color` | `#0f172a` |

## Signals

| Signal |
|---|
| `barClicked(int)` |
| `barHovered(int)` |

## Methods

| Method | Description |
|---|---|
| `barAt(pos)` | Index of the ring under a point, or -1. |
| `barClicked(...)` |  |
| `barColor(index)` |  |
| `barCount()` |  |
| `barHovered(...)` |  |
| `bars()` |  |
| `barsCsv(*args, **kwargs)` |  |
| `clearBars()` |  |
| `clockwise(*args, **kwargs)` |  |
| `colorsCsv(*args, **kwargs)` |  |
| `fractionFor(index)` | 0..1 of the maximum. Values above the maximum are clamped so a bar |
| `holeRatio(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `maxValue(*args, **kwargs)` |  |
| `maximum()` |  |
| `ringRect(index)` | Bounding rect of ring `index`, outermost first. |
| `rounded(*args, **kwargs)` |  |
| `setBars(bars)` |  |
| `showLabels(*args, **kwargs)` |  |
| `showTrack(*args, **kwargs)` |  |
| `showValues(*args, **kwargs)` |  |
| `spacing(*args, **kwargs)` |  |
| `startAngle(*args, **kwargs)` |  |
| `thickness(*args, **kwargs)` |  |
| `trackColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `surface-muted`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomRadialBars/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
