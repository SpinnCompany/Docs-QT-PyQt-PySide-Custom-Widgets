---
title: QCustomDotMatrix
description: A density / category dot grid.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomDotMatrix

:::info Pro widget

`QCustomDotMatrix` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomDotMatrix](/img/showcase/dotmatrix.png)

A density / category dot grid.

A grid of small dots where each cell carries a STATE (0..N). State 0 is
the "empty" slot (drawn faintly with `emptyColor`); states 1..N pick a
colour from `colorsCsv`. Use it for the dot-matrix density panels seen on
modern dashboards (e.g. a "product" activity grid: valid / invalid / idle
dots that thicken toward one corner). Painted (no QtCharts) so it is crisp
at any size and needs no legend/toolbar.

Give the grid in code with setData([[0,1,2,...], ...]) (row-major 2-D list
of state ints), or in Qt Designer with the `dataCsv` property (rows joined
by ';', cells by ','). `rows`/`cols` size an empty grid. Colours are
qproperties so a theme/manager can tokenise them and they flip on theme
switch.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomDotMatrix import QCustomDotMatrix` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomDotMatrix import QCustomDotMatrix

widget = QCustomDotMatrix()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomDotMatrix in dark theme](/img/showcase/dotmatrix-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `dataCsv` | `string` | — |
| `rows` | `int` | `6` |
| `cols` | `int` | `14` |
| `colorsCsv` | `string` | `#8fe36b,#ffffff,#f6912b` |
| `emptyColor` | `color` | `#2c2c30` |
| `dotDiameter` | `int` | `0` |
| `gapRatio` | `float` | `0.55` |
| `emptyOpacity` | `float` | `0.6` |
| `square` | `bool` | `False` |

## Methods

| Method | Description |
|---|---|
| `colorsCsv(*args, **kwargs)` | Colors csv. |
| `cols(*args, **kwargs)` | Cols. |
| `data()` | Data. |
| `dataCsv(*args, **kwargs)` | Data csv. |
| `dotDiameter(*args, **kwargs)` | Dot diameter. |
| `emptyColor(*args, **kwargs)` | Empty color. |
| `emptyOpacity(*args, **kwargs)` | Empty opacity. |
| `gapRatio(*args, **kwargs)` | Gap ratio. |
| `rows(*args, **kwargs)` | Rows. |
| `setColors(colors)` | Set the colors. |
| `setData(data)` | 2-D row-major list of state ints (0 = empty, 1..N = colour index). |
| `square(*args, **kwargs)` | Square. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
