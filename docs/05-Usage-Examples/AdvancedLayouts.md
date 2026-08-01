---
title: Advanced layouts
sidebar_label: Advanced layouts
description: Flow layouts, splitters, responsive panels and embedding Custom Widgets in an existing Qt app.
mdx:
  format: md
---

# Advanced layouts

Custom Widgets are ordinary `QWidget`s. Everything Qt's layout system does
still applies — these are the patterns that come up most often.

## Wrapping content: flow layout

`QCustomFlowLayout` lays children left to right and wraps to a new row when it
runs out of width. Use it for tags, chips, filter pills and thumbnail grids —
anything whose item count is not known up front.

```python
from Custom_Widgets.QCustomFlowLayout import QCustomFlowLayout

container = QWidget()
flow = QCustomFlowLayout(container)
for name in ("Design", "Engineering", "Marketing", "Support"):
    flow.addWidget(QCustomChip(name))
```

:::note

The reflow is debounced and animated. If you measure a child's geometry
immediately after adding it you will still see its default size — let the event
loop turn once first.

:::

## Resizable panels: splitter

`QCustomSplitter` is a themed `QSplitter`, so the normal API applies:

```python
from Custom_Widgets.QCustomSplitter import QCustomSplitter
from qtpy.QtCore import Qt

split = QCustomSplitter(Qt.Horizontal)
split.addWidget(navigator)
split.addWidget(editor)
split.setSizes([260, 740])
```

## Stacked screens

`QCustomQStackedWidget` swaps whole screens with a transition, which is how
multi-page apps move between views without opening windows.
`QCustomTabWidget` does the same with a visible tab strip, and
`QCustomStepper` narrates linear progress through a flow.

## Overlays

Some widgets deliberately do not participate in layouts — they position
themselves over a parent and animate in:

- `QCustomDrawer` — a side panel over a scrim
- `QCustomModal` / `QCustomModals` — dialogs and notifications
- `QCustomToast` — transient confirmations
- `QCustomCommandPalette` — a centred search panel
- `QCustomEmbeddedWindow` — a draggable window inside your window

Give them a parent, then call their own show method (`open()`, `showToast()`,
`showModal()`); do not add them to a layout.

## Embedding in an existing app

You do not have to adopt the whole framework. Import a single widget, drop it
into a layout you already have, and it will work. To make it follow your
theme, call `applyDesignTokens` once on the `QApplication`:

```python
from Custom_Widgets.JSonStyles.tokens import applyDesignTokens
applyDesignTokens(app, theme="dark")
```

That appends a marked block to the application stylesheet rather than
replacing it, so your own styles survive — but call your
`setStyleSheet(...)` **first**, since that replaces the whole sheet.

## See also

- [Design tokens](../02-Theming/DesignTokens.md)
- [Real-world examples](RealWorldScenarios.md)
