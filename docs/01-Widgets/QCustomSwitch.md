# QCustomSwitch

![QCustomSwitch screenshot](/img/showcase/switch.gif)

`QCustomSwitch` is an on/off **toggle switch** — a painted, iOS/Material-style
sliding control with an animated thumb. Its colours come from the design tokens,
it follows the active theme, and it comes in three sizes.

---

## Overview

- **Painted toggle** with a smooth animated thumb (off = left, on = right).
- **Three sizes** via `sizeVariant` (`sm` / `md` / `lg`).
- **Tokenized colours** (track on/off, thumb) that follow the theme.
- **Keyboard accessible** — Space / Enter toggles when focused.
- Emits `toggled(bool)`.

---

## Constructor

```python
QCustomSwitch(parent=None, checked=False)
```

- **parent** — the parent widget.
- **checked** — initial state.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `checked` | bool | On/off state. |
| `sizeVariant` | str | `sm` / `md` / `lg`. |
| `trackOnColor` / `trackOffColor` / `thumbColor` | QColor | Painted colours (set from tokens via QSS `qproperty-…`). |

## Methods

| Method | Description |
|---|---|
| `isChecked()` | Current state. |
| `setChecked(checked)` | Set the state (animates); emits `toggled` on change. |
| `toggle()` | Flip the state. |

## Signals

| Signal | Description |
|---|---|
| `toggled(bool)` | Emitted when the state changes. |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication, QWidget, QHBoxLayout, QLabel
from Custom_Widgets.QCustomSwitch import QCustomSwitch
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

w = QWidget()
row = QHBoxLayout(w)
row.addWidget(QLabel("Enable notifications"))
sw = QCustomSwitch(checked=True)
sw.toggled.connect(lambda on: print("notifications:", "on" if on else "off"))
row.addWidget(sw)
w.show()
app.exec()
```

## Theming

Styled from the design tokens (`switch_qss` in
`Custom_Widgets/JSonStyles/tokens.py`), applied via `applyDesignTokens` — the same
system every modern widget uses. The track/thumb colours come from the `accent`,
`outline`, and `surface` roles. See [Theming](../02-Theming/designer-properties.md).

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `checked` | `bool` | `False` |
| `sizeVariant` | `enum: `sm` / `md` / `lg`` | `md` |
| `thumbPosition` | `float` | — |
| `trackOnColor` | `color` | — |
| `trackOffColor` | `color` | — |
| `thumbColor` | `color` | — |

### Signals

| Signal |
|---|
| `toggled(bool)` |

### Methods

| Method | Description |
|---|---|
| `checked(*args, **kwargs)` |  |
| `isChecked()` |  |
| `setChecked(checked)` |  |
| `sizeVariant(*args, **kwargs)` |  |
| `thumbColor(*args, **kwargs)` |  |
| `thumbPosition(*args, **kwargs)` |  |
| `toggle()` |  |
| `toggled(...)` |  |
| `trackOffColor(*args, **kwargs)` |  |
| `trackOnColor(*args, **kwargs)` |  |

<!-- /generated:api-reference -->
