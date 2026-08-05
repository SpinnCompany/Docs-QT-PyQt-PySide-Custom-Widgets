---
title: QCustomSankey
description: A painted Sankey flow diagram.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomSankey

:::info Pro widget

`QCustomSankey` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomSankey](/img/showcase/sankey.png)

A painted Sankey flow diagram.

Nodes in columns joined by ribbons whose thickness is the quantity flowing.
Energy budgets, traffic sources to conversions, spend breakdowns - anything
where the interesting thing is where the volume GOES, not just its size.

The hardest of the painted charts, because nothing about the layout is
given: node columns, vertical order, and the stacking of each ribbon at
both ends all have to be derived from the link list alone.

QPainter only, NO QtCharts (see docs/design/mui-charts-gap.md).

Data goes in with setLinks([...]) in code, or linksCsv in Qt Designer:

linksCsv = "Search>Signup=120;Social>Signup=80;Signup>Paid=60"
source > target = value, links separated by ";"

Emits linkHovered(int), nodeHovered(str) and nodeClicked(str).

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomSankey import QCustomSankey` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomSankey import QCustomSankey

widget = QCustomSankey()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomSankey in dark theme](/img/showcase/sankey-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `linksCsv` | `string` | — |
| `nodeColorsCsv` | `string` | — |
| `nodeWidth` | `int` | `14` |
| `nodePadding` | `int` | `12` |
| `linkOpacity` | `float` | `0.4` |
| `curvature` | `float` | `0.5` |
| `showLabels` | `bool` | `True` |
| `showValues` | `bool` | `False` |
| `labelColor` | `color` | `#0f172a` |

## Signals

| Signal |
|---|
| `linkHovered(int)` |
| `nodeClicked(QString)` |
| `nodeHovered(QString)` |

## Methods

| Method | Description |
|---|---|
| `clearLinks()` |  |
| `columns()` | [[node, ...], ...] left to right. |
| `curvature(*args, **kwargs)` |  |
| `isSink(name)` | True when nothing flows out of a node. |
| `labelColor(*args, **kwargs)` |  |
| `linkAt(pos)` |  |
| `linkCount()` |  |
| `linkHovered(...)` |  |
| `linkOpacity(*args, **kwargs)` |  |
| `links()` |  |
| `linksCsv(*args, **kwargs)` |  |
| `nodeAt(pos)` |  |
| `nodeClicked(...)` |  |
| `nodeColor(name)` |  |
| `nodeColorsCsv(*args, **kwargs)` |  |
| `nodeDepth(name)` | Column index: the longest path from any source-only node. |
| `nodeDepths()` |  |
| `nodeHovered(...)` |  |
| `nodePadding(*args, **kwargs)` |  |
| `nodeRects()` |  |
| `nodeValue(name)` | Throughput: the larger of what flows in and what flows out. |
| `nodeWidth(*args, **kwargs)` |  |
| `nodes()` | Every node name, in first-seen order. |
| `ribbons()` |  |
| `setLinks(links)` | Replace every link. Self-loops, zero flows and unnamed ends are |
| `showLabels(*args, **kwargs)` |  |
| `showValues(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `on-surface`, `outline`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomSankey/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
