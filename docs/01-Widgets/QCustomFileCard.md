---
title: QCustomFileCard
description: A file / attachment row.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomFileCard

A file / attachment row.

The row seen under the "Files" tab: a painted rounded badge with the file
extension ("PDF", "ZIP", …) coloured by type, the file name (elided) and a
meta line (size · date), plus a painted download button. Feed it data with
setFile(name, size, ext=None, date=None) or the Designer qproperties; the
badge colour is auto-picked from the extension unless badgeColor is set.
Emits downloadClicked() and clicked(). The card panel + text colours are
driven from the app QSS (objectName selectors) so they flip with the theme.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomFileCard import QCustomFileCard` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomFileCard import QCustomFileCard

widget = QCustomFileCard()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `fileName` | `string` | `Document.pdf` |
| `fileSize` | `string` | `1.2 MB` |
| `fileExt` | `string` | — |
| `fileDate` | `string` | — |
| `badgeColor` | `color` | `#00000000` |
| `iconColor` | `color` | `#7b8494` |

## Signals

| Signal |
|---|
| `clicked()` |
| `downloadClicked()` |

## Methods

| Method | Description |
|---|---|
| `badgeColor(*args, **kwargs)` |  |
| `clicked(...)` |  |
| `downloadClicked(...)` |  |
| `fileDate(*args, **kwargs)` |  |
| `fileExt(*args, **kwargs)` |  |
| `fileName(*args, **kwargs)` |  |
| `fileSize(*args, **kwargs)` |  |
| `iconColor(*args, **kwargs)` |  |
| `setFile(name, size='', ext=None, date=None)` |  |

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
