# QCustomAlert

![QCustomAlert screenshot](/img/showcase/alert.png)

`QCustomAlert` is an inline **callout / banner** — a static message block with a
leading glyph, an optional title, the message text, and an optional close button.
Unlike a transient toast, it stays on the page. Four semantic variants colour it
from the design tokens.

---

## Overview

- **Four variants** via the `variant` property — `info` / `success` / `warning` /
  `destructive` — each with a matching glyph and a coloured left bar/icon/title.
- Optional **title** + wrapping **message text**.
- Optional **dismiss** button that hides the alert and emits `closed`.
- Tokenized; follows the active theme.

---

## Constructor

```python
QCustomAlert(parent=None, title="", text="", variant="info", dismissible=False)
```

- **title** — bold heading (hidden when empty).
- **text** — the message body (hidden when empty).
- **variant** — `info` / `success` / `warning` / `destructive` (unknown → `info`).
- **dismissible** — show a close button.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `variant` | str | `info` / `success` / `warning` / `destructive`. |
| `title` | str | Heading text. |
| `text` | str | Message body. |
| `dismissible` | bool | Whether the close button is shown. |

## Methods

| Method | Description |
|---|---|
| `setTitle(title)` | Set the heading (hidden when empty). |
| `setText(text)` | Set the message (hidden when empty). |
| `setDismissible(on)` | Show/hide the close button. |
| `isDismissible()` | Whether it's dismissible. |
| `closeButton()` | The close `QPushButton`. |

## Signals

| Signal | Description |
|---|---|
| `closed()` | Emitted when the user dismisses the alert (it also hides). |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication, QWidget, QVBoxLayout
from Custom_Widgets.QCustomAlert import QCustomAlert
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

w = QWidget()
col = QVBoxLayout(w)
col.addWidget(QCustomAlert(title="Heads up", text="Your trial ends in 3 days.",
                           variant="info"))
col.addWidget(QCustomAlert(title="Saved", text="Settings updated.",
                           variant="success"))
err = QCustomAlert(title="Error", text="Payment failed.", variant="destructive",
                   dismissible=True)
err.closed.connect(lambda: print("dismissed"))
col.addWidget(err)
w.show()
app.exec()
```

## Theming

Styled from the design tokens (`alert_qss`) via `applyDesignTokens`; each variant
maps to a semantic role (`info` / `success` / `warning` / `destructive`). See
[Theming](../02-Theming/designer-properties.md).

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `variant` | `enum: `info` / `success` / `warning` / `destructive`` | `info` |
| `title` | `string` | — |
| `text` | `string` | — |
| `dismissible` | `bool` | `False` |

### Signals

| Signal |
|---|
| `closed()` |

### Methods

| Method | Description |
|---|---|
| `closeButton()` |  |
| `closed(...)` |  |
| `dismissible(*args, **kwargs)` |  |
| `isDismissible()` |  |
| `setDismissible(dismissible)` |  |
| `setText(text)` |  |
| `setTitle(title)` |  |
| `text(*args, **kwargs)` |  |
| `title(*args, **kwargs)` |  |
| `variant(*args, **kwargs)` |  |

<!-- /generated:api-reference -->
