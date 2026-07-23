# QCustomNumberInput

`QCustomNumberInput` is a **number stepper** (spin box): a numeric field flanked
by `−` / `+` step buttons. It is range-clamped, works with integers or fixed
decimals, and commits edits on Enter / focus-out.

---

## Overview

- **`−` / field / `+`** layout with auto-repeat on the step buttons.
- **Integer or float** — set `decimals > 0` for fixed-decimal values.
- **Range-clamped**; the step buttons disable at the bounds.
- Editing the field commits on **Enter or focus-out**; invalid text reverts.
- Emits `valueChanged(value)` — an `int` when `decimals == 0`, else a `float`.

---

## Constructor

```python
QCustomNumberInput(parent=None, minimum=0, maximum=100, value=0, step=1, decimals=0)
```

- **minimum / maximum** — the allowed range (clamped).
- **value** — initial value.
- **step** — increment for the buttons / arrow keys.
- **decimals** — `0` for integers; `> 0` for fixed-decimal floats.

---

## Properties (Designer)

| Property | Type | Description |
|---|---|---|
| `minimum` / `maximum` | float | Allowed range. |
| `singleStep` | float | Step increment. |
| `decimals` | int | Decimal places (`0` = integer). |

> The value is read/written through `value()` / `setValue()` (Qt-idiomatic), not a
> `value` property.

## Methods

| Method | Description |
|---|---|
| `value()` | Current value (`int` if `decimals == 0`, else `float`). |
| `setValue(v)` | Set + clamp the value; emits `valueChanged` on change. |
| `stepUp()` / `stepDown()` | Increment / decrement by the step. |
| `setRange(min, max)` | Set the range. |
| `setMinimum(v)` / `setMaximum(v)` | Set a bound. |
| `setSingleStep(v)` | Set the step. |
| `setDecimals(v)` | Set decimal places. |
| `lineEdit()` | The underlying `QLineEdit`. |

## Signals

| Signal | Description |
|---|---|
| `valueChanged(value)` | Emitted on change; `value` is `int` or `float` per `decimals`. |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication
from Custom_Widgets.QCustomNumberInput import QCustomNumberInput
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

qty = QCustomNumberInput(minimum=1, maximum=99, value=3, step=1)
qty.valueChanged.connect(lambda v: print("quantity:", v))
qty.show()

# a price stepper (fixed 2 decimals)
price = QCustomNumberInput(minimum=0, maximum=1000, value=9.99, step=0.5, decimals=2)
price.show()
app.exec()
```

## Theming

Styled from the design tokens (`number_qss`) via `applyDesignTokens`; the joined
field + step buttons use the `surface` / `on-surface` / `outline` / `accent`
roles. See [Theming](../02-Theming/designer-properties.md).
