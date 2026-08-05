---
title: QCustomHeatmap
description: A painted colour-intensity grid.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomHeatmap

:::info Pro widget

`QCustomHeatmap` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomHeatmap](/img/showcase/heatmap.png)

A painted colour-intensity grid.

Two modes (`mode`):
"grid" (default) - a rows x cols matrix (e.g. hours x weekdays, the
"Activity by time" heatmap): each cell's colour is its value mapped on a
low->high ramp, with row/col labels and an optional Less->More legend.
"calendar" - a GitHub-style contributions calendar: a flat list of daily
values wrapped into 7 rows (weekdays) x N columns (weeks).

Values come in via setValues(list[list[float]]) / a flat list (calendar), or
the `valuesCsv` Designer property (rows separated by ';', cells by ','). Cells
auto-normalise across the data (min->max) unless you setRange(...). Painted
with QPainter so it stays crisp at any size; the grid FLEX-fits the box left
after labels + legend, so nothing clips when the widget grows or shrinks.

Signals: cellClicked(row, col, value); a per-cell tooltip on hover.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomHeatmap import QCustomHeatmap` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomHeatmap import QCustomHeatmap

widget = QCustomHeatmap()
widget.setMode("grid")
widget.setValues([[2, 5, 9, 7, 4, 1, 0], [3, 8, 6, 9, 5, 2, 1],
         [1, 4, 7, 8, 9, 3, 2], [0, 2, 5, 6, 7, 4, 1],
         [4, 6, 9, 9, 8, 5, 2], [1, 3, 4, 6, 5, 2, 0]])
widget.setLabels(row_labels=["9am", "11am", "1pm", "3pm", "5pm", "7pm"],
        col_labels=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
widget.setColors("#1e3a8a", "#60a5fa", "#1e293b")
else:
widget.setColors("#dbeafe", "#1d4ed8", "#f1f5f9")
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomHeatmap in dark theme](/img/showcase/heatmap-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `mode` | `enum: `grid` / `calendar`` | `grid` |
| `valuesCsv` | `string` | — |
| `rowLabelsCsv` | `string` | — |
| `colLabelsCsv` | `string` | — |
| `lowColor` | `color` | `#1e1b3a` |
| `highColor` | `color` | `#b3a4ff` |
| `emptyColor` | `color` | `#17152b` |
| `cellSize` | `int` | `0` |
| `cellGap` | `int` | `4` |
| `cornerRadius` | `int` | `4` |
| `showLabels` | `bool` | `True` |
| `showLegend` | `bool` | `True` |
| `labelColor` | `color` | `#8b90a0` |
| `autoNormalize` | `bool` | `True` |
| `minValue` | `float` | `0.0` |
| `maxValue` | `float` | `1.0` |

## Signals

| Signal |
|---|
| `cellClicked(int,int,double)` |

## Methods

| Method | Description |
|---|---|
| `autoNormalize(*args, **kwargs)` |  |
| `cellClicked(...)` |  |
| `cellGap(*args, **kwargs)` |  |
| `cellSize(*args, **kwargs)` |  |
| `colLabelsCsv(*args, **kwargs)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `emptyColor(*args, **kwargs)` |  |
| `highColor(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `lowColor(*args, **kwargs)` |  |
| `maxValue(*args, **kwargs)` |  |
| `minValue(*args, **kwargs)` |  |
| `mode(*args, **kwargs)` |  |
| `rowLabelsCsv(*args, **kwargs)` |  |
| `setColors(low, high, empty=None)` |  |
| `setData(values)` | Backward-compatible alias for setValues(). |
| `setLabels(row_labels=None, col_labels=None)` |  |
| `setMode(mode)` |  |
| `setRange(minimum, maximum)` |  |
| `setValues(values)` |  |
| `showLabels(*args, **kwargs)` |  |
| `showLegend(*args, **kwargs)` |  |
| `values()` |  |
| `valuesCsv(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
