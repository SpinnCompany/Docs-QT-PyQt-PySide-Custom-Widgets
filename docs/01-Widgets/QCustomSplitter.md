# QCustomSplitter

![QCustomSplitter screenshot](/img/showcase/splitter.png)

`QCustomSplitter` is a drop-in **`QSplitter`** whose resize handle is styled
from the design tokens — subtle by default, and highlighted with the accent
colour on hover. Everything else is standard `QSplitter`: add widgets, set
sizes, save and restore state, and connect `splitterMoved`.

---

## Overview

- **Standard QSplitter** — full `QSplitter` API (`addWidget`, `setSizes`,
  `saveState` / `restoreState`, `setOrientation`, …).
- **Tokenized handle** — follows the theme (`surface-muted` at rest, `accent`
  on hover / drag) and is a comfortable width to grab.
- **Non-collapsible by default** — panes keep a usable minimum size (call
  `setChildrenCollapsible(True)` to allow collapsing).

---

## Constructor

```python
QCustomSplitter(orientation=Qt.Horizontal, parent=None)
```

- **orientation** — `Qt.Horizontal` (side-by-side) or `Qt.Vertical` (stacked).
- **parent** — the parent widget.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `orientationName` | str | `"horizontal"` / `"vertical"` — a string-friendly wrapper over `orientation()` (useful in Qt Designer). |

Plus every inherited `QSplitter` property (`handleWidth`,
`childrenCollapsible`, `opaqueResize`, …).

## Methods

Inherits the full `QSplitter` API, including:

| Method | Description |
|---|---|
| `addWidget(widget)` | Append a pane. |
| `insertWidget(index, widget)` | Insert a pane at a position. |
| `setSizes([...])` | Set the pane sizes (pixels). |
| `saveState()` / `restoreState(data)` | Persist and restore the layout. |
| `setOrientation(orientation)` | Switch between horizontal / vertical. |

## Signals

| Signal | Description |
|---|---|
| `splitterMoved(pos, index)` | Emitted while a handle is dragged (inherited). |

---

## Usage example

```python
from qtpy.QtCore import Qt
from qtpy.QtWidgets import QApplication, QLabel, QFrame, QVBoxLayout
from Custom_Widgets.QCustomSplitter import QCustomSplitter
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

def panel(text):
    f = QFrame()
    QVBoxLayout(f).addWidget(QLabel(text))
    return f

split = QCustomSplitter(Qt.Horizontal)
split.addWidget(panel("Sidebar"))
split.addWidget(panel("Editor"))
split.addWidget(panel("Preview"))
split.setSizes([160, 320, 220])
split.resize(720, 400)
split.show()
app.exec()
```

---

## Theming

Styled from the design tokens (`splitter_qss` in
`Custom_Widgets/JSonStyles/tokens.py`), applied via `applyDesignTokens` — the
same system every modern widget uses. The handle uses the `surface-muted` and
`accent` roles. See [Theming](../02-Theming/designer-properties.md).

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `frameShape` | `QFrame::Shape` | — |
| `frameShadow` | `QFrame::Shadow` | — |
| `lineWidth` | `int` | — |
| `midLineWidth` | `int` | — |
| `frameWidth` | `int` | — |
| `frameRect` | `QRect` | — |
| `orientation` | `enum: `horizontal` / `vertical`` | `horizontal` |
| `opaqueResize` | `bool` | — |
| `handleWidth` | `int` | — |
| `childrenCollapsible` | `bool` | — |
| `orientationName` | `string` | — |

### Methods

| Method | Description |
|---|---|
| `orientationName(*args, **kwargs)` |  |

<!-- /generated:api-reference -->
