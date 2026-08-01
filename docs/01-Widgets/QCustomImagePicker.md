---
title: QCustomImagePicker
description: A drop / browse image field with a live preview.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomImagePicker

![QCustomImagePicker](/img/showcase/imagepicker.png)

A drop / browse image field with a live preview.

The avatar-or-cover upload control: an empty dashed target that accepts a
drag-and-drop or a click-to-browse, then shows the chosen image scaled to
fit with a remove button.

Validation is on the *bytes*, never the file extension - a .png that is not
an image is rejected, which is the whole point of validating at all. Size
and pixel-dimension caps guard against a decompression bomb being loaded
into a preview.

Emits imageSelected(str), imageCleared() and selectionRejected(str) - the
last carrying a human-readable reason, so a caller can surface it rather
than leaving the user with a target that silently ignores their file.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomImagePicker import QCustomImagePicker` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomImagePicker import QCustomImagePicker

widget = QCustomImagePicker()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomImagePicker in dark theme](/img/showcase/imagepicker-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `imagePath` | `string` | — |
| `placeholderText` | `string` | `Drop an image or click to browse` |
| `shape` | `enum: `rounded` / `circle`` | `rounded` |
| `fitMode` | `enum: `cover` / `contain`` | `cover` |
| `maxBytes` | `int` | `5242880` |
| `maxPixels` | `int` | `8000` |
| `allowClear` | `bool` | `True` |
| `cornerRadius` | `int` | `10` |
| `state` | `enum: `default` / `error`` | `default` |
| `borderColor` | `color` | — |
| `borderActiveColor` | `color` | — |
| `borderErrorColor` | `color` | — |
| `backgroundColor` | `color` | — |
| `textColor` | `color` | — |

## Signals

| Signal |
|---|
| `imageCleared()` |
| `imageSelected(QString)` |
| `selectionRejected(QString)` |

## Methods

| Method | Description |
|---|---|
| `allowClear(*args, **kwargs)` |  |
| `backgroundColor(*args, **kwargs)` |  |
| `borderActiveColor(*args, **kwargs)` |  |
| `borderColor(*args, **kwargs)` |  |
| `borderErrorColor(*args, **kwargs)` |  |
| `browse()` | Open a file dialog. Returns True if an image was accepted. |
| `canAccept(path)` |  |
| `clearImage()` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `fitMode(*args, **kwargs)` |  |
| `hasImage()` |  |
| `imageCleared(...)` |  |
| `imagePath(*args, **kwargs)` |  |
| `imageSelected(...)` |  |
| `maxBytes(*args, **kwargs)` |  |
| `maxPixels(*args, **kwargs)` |  |
| `pixmap()` |  |
| `placeholderText(*args, **kwargs)` |  |
| `selectionRejected(...)` |  |
| `setImagePath(path)` | Select an image. Rejects and emits selectionRejected on failure. |
| `shape(*args, **kwargs)` |  |
| `state(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |
| `validationError(path)` | Reason this file cannot be used, or None if it is fine. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`, `accent`, `destructive`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomImagePicker/main.py`.

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
