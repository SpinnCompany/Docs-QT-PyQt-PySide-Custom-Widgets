# QCustomProgressRing

`QCustomProgressRing` is a **circular (determinate) progress indicator** — a
painted ring with a track arc and a progress arc that sweeps clockwise from 12
o'clock, plus an optional percentage in the centre. Unlike the indeterminate
[loaders](./QCustomArcLoader.md), it shows a known value.

---

## Overview

- **Determinate** circular progress with an optional centre percentage.
- Configurable **min / max / value** with clamping.
- Tokenized ring / track / text colours and ring **thickness**.
- Emits `valueChanged(int)`.

---

## Constructor

```python
QCustomProgressRing(parent=None, minimum=0, maximum=100, value=0)
```

---

## Properties

| Property | Type | Description |
|---|---|---|
| `minimum` / `maximum` | int | Value range. |
| `showText` | bool | Show the centre percentage (default `True`). |
| `ringColor` / `trackColor` / `textColor` | QColor | Painted colours (from tokens). |
| `thickness` | int | Ring stroke width in pixels. |

> The value is read/written through `value()` / `setValue()` (Qt-idiomatic), not a
> `value` property.

## Methods

| Method | Description |
|---|---|
| `value()` | Current value. |
| `setValue(v)` | Set + clamp the value; emits `valueChanged` on change. |
| `setRange(min, max)` | Set the range. |
| `setMinimum(v)` / `setMaximum(v)` | Set a bound. |
| `setShowText(on)` | Toggle the centre percentage. |

## Signals

| Signal | Description |
|---|---|
| `valueChanged(int)` | Emitted when the value changes. |

---

## Usage example

```python
from qtpy.QtCore import QTimer
from qtpy.QtWidgets import QApplication
from Custom_Widgets.QCustomProgressRing import QCustomProgressRing
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

ring = QCustomProgressRing(value=0)
ring.resize(120, 120)
ring.show()

# animate to 72%
timer = QTimer()
timer.timeout.connect(lambda: (ring.setValue(ring.value() + 1),
                               ring.value() >= 72 and timer.stop()))
timer.start(20)
app.exec()
```

## Theming

Styled from the design tokens (`progressring_qss`) via `applyDesignTokens`; the
ring/track/text colours use the `accent` / `surface-muted` / `on-surface` roles.
See [Theming](../02-Theming/designer-properties.md).
