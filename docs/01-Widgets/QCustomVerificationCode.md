---
title: QCustomVerificationCode
description: A segmented one-time-code input.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomVerificationCode

![QCustomVerificationCode](/img/showcase/verificationcode.gif)

A segmented one-time-code input.

The row of single-character boxes used for 2FA / OTP / email confirmation
codes. Painted as one widget rather than assembled from N QLineEdits, so
focus, paste and backspace behave as users expect instead of fighting Qt's
per-field focus chain.

Behaviour that the naive N-QLineEdit version gets wrong and this does not:
- pasting a whole code fills every box, however it is formatted
- backspace on an empty box steps back and clears the previous one
- arrow keys and Home/End move the caret without destroying input
- only characters permitted by `inputMode` are accepted at all

Emits codeChanged(str) on every edit and completed(str) once the last box is
filled.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomVerificationCode import QCustomVerificationCode` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomVerificationCode import QCustomVerificationCode

widget = QCustomVerificationCode()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomVerificationCode in dark theme](/img/showcase/verificationcode-dark.gif)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `code` | `string` | — |
| `digits` | `int` | `6` |
| `inputMode` | `enum: `numeric` / `alphanumeric` / `alpha`` | `numeric` |
| `masked` | `bool` | `False` |
| `uppercase` | `bool` | `True` |
| `separatorAfter` | `int` | `0` |
| `boxWidth` | `int` | `40` |
| `boxHeight` | `int` | `48` |
| `boxSpacing` | `int` | `8` |
| `state` | `enum: `default` / `error`` | `default` |
| `boxBackgroundColor` | `color` | — |
| `boxBorderColor` | `color` | — |
| `boxBorderActiveColor` | `color` | — |
| `boxBorderErrorColor` | `color` | — |
| `textColor` | `color` | — |

## Signals

| Signal |
|---|
| `codeChanged(QString)` |
| `completed(QString)` |

## Methods

| Method | Description |
|---|---|
| `boxBackgroundColor(*args, **kwargs)` |  |
| `boxBorderActiveColor(*args, **kwargs)` |  |
| `boxBorderColor(*args, **kwargs)` |  |
| `boxBorderErrorColor(*args, **kwargs)` |  |
| `boxHeight(*args, **kwargs)` |  |
| `boxSpacing(*args, **kwargs)` |  |
| `boxWidth(*args, **kwargs)` |  |
| `clear()` |  |
| `code(*args, **kwargs)` |  |
| `codeChanged(...)` |  |
| `completed(...)` |  |
| `digits(*args, **kwargs)` |  |
| `inputMode(*args, **kwargs)` |  |
| `isComplete()` |  |
| `masked(*args, **kwargs)` |  |
| `pasteFromClipboard()` | Fill from the clipboard. Bound to Ctrl+V. |
| `separatorAfter(*args, **kwargs)` |  |
| `setCodeText(text)` | Fill from a string, ignoring anything the input mode disallows. |
| `state(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |
| `uppercase(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`, `focus-ring`, `destructive`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomVerificationCode/main.py`.

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
