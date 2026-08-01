# QCustomKbd

![QCustomKbd screenshot](/img/showcase/kbd.png)

`QCustomKbd` renders a **keyboard shortcut as styled keycaps** — the desktop
equivalent of the HTML `<kbd>` element. Pass a shortcut string like `"Ctrl+K"`
(or a list of keys) and each key is drawn as a small, tokenized cap joined by
`+` separators. It is display-only and follows the active theme.

---

## Overview

- **Keycap rendering** — each key becomes a bordered, monospace cap.
- **String or list input** — `"Cmd+Shift+P"` or `["Cmd", "Shift", "P"]`.
- **Custom separator** — split on `+` by default, or any character you choose.
- **Tokenized colours** (`surface-muted`, `on-surface`, `outline`) that follow
  the theme.

---

## Constructor

```python
QCustomKbd(keys="Ctrl+K", parent=None, separator="+")
```

- **keys** — a shortcut string (split on `separator`) or a list of key labels.
- **parent** — the parent widget.
- **separator** — the character shortcut strings are split on / joined with.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `keys` | str | The shortcut as a separator-joined string (get/set). |
| `separator` | str | The join/split character (default `+`). |

## Methods

| Method | Description |
|---|---|
| `setKeys(keys)` | Set from a string (`"Ctrl+K"`) or a list (`["Ctrl", "K"]`). |
| `keysList()` | The current keys as a list of strings. |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication, QWidget, QHBoxLayout, QLabel
from Custom_Widgets.QCustomKbd import QCustomKbd
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

w = QWidget()
row = QHBoxLayout(w)
row.addWidget(QLabel("Command palette"))
row.addWidget(QCustomKbd("Ctrl+K"))
row.addWidget(QLabel("Save all"))
row.addWidget(QCustomKbd(["Ctrl", "Shift", "S"]))
w.show()
app.exec()
```

To display a shortcut that itself uses `+` (e.g. the numeric keypad plus),
change the separator:

```python
QCustomKbd("Ctrl-=", separator="-")   # -> "Ctrl", "="
```

---

## Theming

Styled from the design tokens (`kbd_qss` in
`Custom_Widgets/JSonStyles/tokens.py`), applied via `applyDesignTokens` — the
same system every modern widget uses. Keycaps use the `surface-muted`,
`on-surface`, and `outline` roles. See
[Theming](../02-Theming/designer-properties.md).

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `keys` | `string` | `Ctrl+K` |
| `separator` | `string` | `+` |

### Methods

| Method | Description |
|---|---|
| `keys(*args, **kwargs)` |  |
| `keysList()` |  |
| `separator(*args, **kwargs)` |  |
| `setKeys(keys)` | Accept a shortcut string ("Ctrl+K") split on the separator, or an |

<!-- /generated:api-reference -->
