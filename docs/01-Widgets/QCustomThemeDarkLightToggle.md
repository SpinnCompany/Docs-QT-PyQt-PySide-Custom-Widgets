---
title: QCustomThemeDarkLightToggle
description: QPushButton(self, text - str, /, parent - PySide6.QtWidgets.QWidget | None = None, *, autoDefault - bool | None = None, default - bool | None = None, flat - boo.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomThemeDarkLightToggle

QPushButton(self, text: str, /, parent: PySide6.QtWidgets.QWidget | None = None, *, autoDefault: bool | None = None, default: bool | None = None, flat: bool | None = None) -> None

QPushButton(self, icon: PySide6.QtGui.QIcon | PySide6.QtGui.QPixmap, text: str, /, parent: PySide6.QtWidgets.QWidget | None = None, *, autoDefault: bool | None = None, default: bool | None = None, flat: bool | None = None) -> None
QPushButton(self, /, parent: PySide6.QtWidgets.QWidget | None = None, *, autoDefault: bool | None = None, default: bool | None = None, flat: bool | None = None) -> None

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomThemeDarkLightToggle import QCustomThemeDarkLightToggle` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomThemeDarkLightToggle import QCustomThemeDarkLightToggle

widget = QCustomThemeDarkLightToggle()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `icon` | `QIcon` | — |
| `iconSize` | `QSize` | — |
| `shortcut` | `QKeySequence` | — |
| `checkable` | `bool` | — |
| `checked` | `bool` | — |
| `autoRepeat` | `bool` | — |
| `autoExclusive` | `bool` | — |
| `autoRepeatDelay` | `int` | — |
| `autoRepeatInterval` | `int` | — |
| `down` | `bool` | — |
| `autoDefault` | `bool` | — |
| `default` | `bool` | — |
| `flat` | `bool` | — |
| `darkTheme` | `string` | — |
| `lightTheme` | `string` | — |
| `updateLabelText` | `bool` | — |
| `updateButtonIcon` | `bool` | — |
| `darkThemeIcon` | `QIcon` | — |
| `lightThemeIcon` | `QIcon` | — |

## Methods

| Method | Description |
|---|---|
| `darkTheme(*args, **kwargs)` | Name of the CUSTOM dark theme this toggle flips to (paired with |
| `darkThemeIcon(*args, **kwargs)` |  |
| `lightTheme(*args, **kwargs)` | Name of the CUSTOM light theme this toggle flips to. |
| `lightThemeIcon(*args, **kwargs)` |  |
| `setText(text: str)` |  |
| `toggle_theme()` |  |
| `updateButtonIcon(*args, **kwargs)` |  |
| `updateLabelText(*args, **kwargs)` |  |
| `update_button_icon()` | Update the button icon based on the current theme. |
| `update_button_text()` | Set the button text based on the current theme. |

## Related

[QCustomActionButton](QCustomActionButton.md) · [QCustomCopyButton](QCustomCopyButton.md) · [QCustomQPushButton](QCustomQPushButton.md) · [QCustomQPushButtonGroup](QCustomQPushButtonGroup.md) · [QCustomRainbowButton](QCustomRainbowButton.md) · [QCustomSocialButton](QCustomSocialButton.md) · [QCustomTileButton](QCustomTileButton.md)
