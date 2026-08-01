---
title: QCustomRangeBarChart
description: A painted floating-bar / range chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomRangeBarChart

:::info Pro widget

`QCustomRangeBarChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

A painted floating-bar / range chart.

Each bar spans a low-to-high pair rather than sitting on a baseline: a
temperature min/max, a salary band, a project window, a confidence
interval. A normal bar chart cannot express "from X to Y".

QPainter only, NO QtCharts (see docs/design/mui-charts-gap.md). Axis ticks
come from the shared _chart_axis so this agrees with Scatter about where
round numbers fall.

Data goes in with setRanges([...]) in code, or rangesCsv in Qt Designer:

rangesCsv    = "Mon=4,12;Tue=6,15;Wed=3,9"
categoriesCsv overrides the labels if you prefer them separate

Emits barHovered(int) and barClicked(int); -1 means "nothing".

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomRangeBarChart import QCustomRangeBarChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRangeBarChart import QCustomRangeBarChart

widget = QCustomRangeBarChart()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `rangesCsv` | `string` | — |
| `categoriesCsv` | `string` | — |
| `orientation` | `enum: `vertical` / `horizontal`` | `vertical` |
| `barWidthRatio` | `float` | `0.55` |
| `cornerRadius` | `int` | `4` |
| `tickCount` | `int` | `5` |
| `showGrid` | `bool` | `True` |
| `showAxis` | `bool` | `True` |
| `showLabels` | `bool` | `True` |
| `showBounds` | `bool` | `False` |
| `barColor` | `color` | `#2563eb` |
| `gridColor` | `color` | `#e2e8f0` |
| `labelColor` | `color` | `#64748b` |
| `boundsColor` | `color` | `#0f172a` |

## Signals

| Signal |
|---|
| `barClicked(int)` |
| `barHovered(int)` |

## Methods

| Method | Description |
|---|---|
| `barAt(pos)` |  |
| `barClicked(...)` |  |
| `barColor(*args, **kwargs)` |  |
| `barCount()` |  |
| `barHovered(...)` |  |
| `barRects()` |  |
| `barWidthRatio(*args, **kwargs)` |  |
| `boundsColor(*args, **kwargs)` |  |
| `categoriesCsv(*args, **kwargs)` |  |
| `clearRanges()` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `dataBounds()` |  |
| `gridColor(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `orientation(*args, **kwargs)` |  |
| `ranges()` |  |
| `rangesCsv(*args, **kwargs)` |  |
| `setRanges(ranges)` |  |
| `showAxis(*args, **kwargs)` |  |
| `showBounds(*args, **kwargs)` |  |
| `showGrid(*args, **kwargs)` |  |
| `showLabels(*args, **kwargs)` |  |
| `tickCount(*args, **kwargs)` |  |
| `valueRange()` |  |
| `valueToPixel(value)` | Value -> pixel along the value axis. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `outline`, `on-surface`, `surface-muted`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomRangeBarChart/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
