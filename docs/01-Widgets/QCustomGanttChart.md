---
title: QCustomGanttChart
description: A horizontal timeline / gantt of rounded pill bars.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomGanttChart

:::info Pro widget

`QCustomGanttChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

![QCustomGanttChart](/img/showcase/ganttchart.png)

A horizontal timeline / gantt of rounded pill bars.

Every ROW is one rounded "pill" bar placed on a shared numeric x-axis by
its `start` and `length`; the row LABEL (e.g. a date) sits on the left,
the row VALUE is printed at the right end of the bar, and an optional
leading circular ICON (a QPixmap clipped to a circle) or coloured dot marks
the bar's start. Bars are coloured by CATEGORY (`colorsCsv`). A light x-grid
with tick labels runs underneath. This is the "projects timeline" viz.
Painted (no QtCharts) so it is crisp and self-contained.

Give rows in code with setData([...]) — each row a dict
{"label","start","length","category","value","icon"} (icon = a path or
QPixmap, optional) — or in Qt Designer with `dataCsv` (rows by ';', fields
"label,start,length,category,value"). `xMax`/`gridStep` set the axis;
colours are qproperties so a theme flips them on switch.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomGanttChart import QCustomGanttChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomGanttChart import QCustomGanttChart

widget = QCustomGanttChart()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomGanttChart in dark theme](/img/showcase/ganttchart-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `dataCsv` | `string` | — |
| `colorsCsv` | `string` | `#8fe36b,#f6912b,#ffffff` |
| `textColorsCsv` | `string` | `#1c1c20,#1c1c20,#1c1c20` |
| `xMax` | `float` | `30.0` |
| `gridStep` | `float` | `5.0` |
| `barHeight` | `int` | `30` |
| `labelColor` | `color` | `#c7c9cf` |
| `axisTextColor` | `color` | `#7d7f88` |
| `gridColor` | `color` | `#2f2f35` |
| `showGrid` | `bool` | `True` |
| `showMarkers` | `bool` | `True` |

## Methods

| Method | Description |
|---|---|
| `axisTextColor(*args, **kwargs)` |  |
| `barHeight(*args, **kwargs)` |  |
| `colorsCsv(*args, **kwargs)` |  |
| `data()` |  |
| `dataCsv(*args, **kwargs)` |  |
| `gridColor(*args, **kwargs)` |  |
| `gridStep(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `setColors(fills, texts=None)` |  |
| `setData(rows)` |  |
| `showGrid(*args, **kwargs)` |  |
| `showMarkers(*args, **kwargs)` |  |
| `textColorsCsv(*args, **kwargs)` |  |
| `xMax(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
