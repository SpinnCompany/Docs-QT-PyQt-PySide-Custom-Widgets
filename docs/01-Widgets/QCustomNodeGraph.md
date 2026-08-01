---
title: QCustomNodeGraph
description: A node-based visual editor canvas.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomNodeGraph

:::info Pro widget

`QCustomNodeGraph` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

![QCustomNodeGraph](/img/showcase/nodegraph.png)

A node-based visual editor canvas.

An infinite, pan/zoom canvas with a dotted-grid backdrop that hosts
draggable NODE cards. Each node has a titled header (accent dot), a body of
painted content (freeform text, label/value rows, an image thumbnail, or
chips) and typed input/output PORTS (the socket dots). Drag from an output
port to an input port to wire nodes together with a curved bezier CABLE.

Everything is painted with QPainter (crisp at any zoom, no assets) and every
colour is a qproperty, so the whole graph recolours on a theme switch. It is
data-driven: build a graph declaratively with addNode()/addEdge() or
setGraph({...}); read interaction back through nodeMoved / nodeSelected /
connectionMade / nodeClicked / canvasClicked.

This is the headline "flow builder / pipeline / AI graph" surface — the
SETTINGS/IDEAS/REFERENCES/AI-MODELS canvas in node-based creative tools.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomNodeGraph import QCustomNodeGraph` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomNodeGraph import QCustomNodeGraph

widget = QCustomNodeGraph()
widget.setGraph({"nodes": [
{"nid": "load", "title": "Load CSV", "x": 30, "y": 40, "w": 190,
 "h": 110, "accent": "#38bdf8", "outputs": ["data"],
 "rows": [{"label": "rows", "value": "12,480"},
          {"label": "columns", "value": "9"}]},
{"nid": "clean", "title": "Clean", "x": 290, "y": 40, "w": 190,
 "h": 110, "accent": "#f2a63b", "inputs": ["in"], "outputs": ["out"],
 "rows": [{"label": "dropped", "value": "126"},
          {"label": "nulls", "value": "0"}]},
{"nid": "train", "title": "Train model", "x": 550, "y": 40, "w": 190,
 "h": 110, "accent": "#a78bfa", "inputs": ["x"],
 "rows": [{"label": "accuracy", "value": "0.94", "dot": "#22c55e"}]},
], "edges": [
{"src": "load", "srcPort": 0, "dst": "clean", "dstPort": 0},
{"src": "clean", "srcPort": 0, "dst": "train", "dstPort": 0},
]})
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomNodeGraph in dark theme](/img/showcase/nodegraph-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `bgColor` | `color` | `#12141c` |
| `gridColor` | `color` | `#26ffffff` |
| `gridSpacing` | `int` | `26` |
| `nodeColor` | `color` | `#1b1e2a` |
| `nodeHeaderColor` | `color` | `#232634` |
| `nodeBorderColor` | `color` | `#33ffffff` |
| `textColor` | `color` | `#e7e9f3` |
| `mutedColor` | `color` | `#8b90a6` |
| `portColor` | `color` | `#f2a63b` |
| `edgeColor` | `color` | `#c98a3a` |
| `selectedColor` | `color` | `#6c7bff` |
| `cornerRadius` | `int` | `14` |
| `animated` | `bool` | `True` |

## Signals

| Signal |
|---|
| `canvasClicked()` |
| `connectionMade(QString,int,QString,int)` |
| `connectionRemoved(QString,int,QString,int)` |
| `editRequested(QString)` |
| `nodeClicked(QString)` |
| `nodeMoved(QString)` |
| `nodeRemoved(QString)` |
| `nodeSelected(QString)` |
| `rowClicked(QString,int)` |

## Methods

| Method | Description |
|---|---|
| `addEdge(src, src_port, dst, dst_port, color=None)` |  |
| `addNode(title='Node', x=0.0, y=0.0, w=200.0, h=120.0, accent='#f2a63b', text='', rows=None, image='', chips=None, inputs=None, outputs=None, nid=None)` |  |
| `animated(*args, **kwargs)` |  |
| `bgColor(*args, **kwargs)` |  |
| `canvasClicked(...)` |  |
| `clear()` |  |
| `connectionMade(...)` |  |
| `connectionRemoved(...)` |  |
| `contextMenuEvent(e)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `disconnectNode(nid)` | Remove every cable attached to a node (keeps the node). |
| `edgeColor(*args, **kwargs)` |  |
| `editRequested(...)` |  |
| `fitToView(margin=40)` |  |
| `gridColor(*args, **kwargs)` |  |
| `gridSpacing(*args, **kwargs)` |  |
| `mutedColor(*args, **kwargs)` |  |
| `nodeAccent(nid)` |  |
| `nodeBorderColor(*args, **kwargs)` |  |
| `nodeById(nid)` |  |
| `nodeClicked(...)` |  |
| `nodeColor(*args, **kwargs)` |  |
| `nodeHeaderColor(*args, **kwargs)` |  |
| `nodeMoved(...)` |  |
| `nodeRemoved(...)` |  |
| `nodeRows(nid)` |  |
| `nodeSelected(...)` |  |
| `nodeText(nid)` |  |
| `nodeTitle(nid)` |  |
| `portColor(*args, **kwargs)` |  |
| `removeEdge(src, src_port, dst, dst_port)` |  |
| `removeEdgeAt(index)` | Disconnect (remove) the edge at `index`. |
| `removeNode(nid)` | Delete a node and every cable attached to it. |
| `rowClicked(...)` |  |
| `selectedColor(*args, **kwargs)` |  |
| `setGraph(data)` | data = {"nodes":[{...}], "edges":[{"src","srcPort","dst","dstPort","color"}]}. |
| `setNodeAccent(nid, color)` | Recolour a node (its header dot + underline, chips, glow). |
| `setNodePosition(nid, x, y)` |  |
| `setNodeText(nid, text)` |  |
| `setNodeTitle(nid, title)` |  |
| `setRowValue(nid, idx, value)` |  |
| `textColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `background`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCodeEditor](QCustomCodeEditor.md) · [QCustomDataTable](QCustomDataTable.md) · [QCustomRichTextEditor](QCustomRichTextEditor.md) · [QCustomTableToolbar](QCustomTableToolbar.md) · [QCustomTreeWidget](QCustomTreeWidget.md)
