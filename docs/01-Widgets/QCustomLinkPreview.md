---
title: QCustomLinkPreview
description: A shared-link preview card.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomLinkPreview

A shared-link preview card.

The row seen under the "Links" tab: a rounded thumbnail (a real favicon /
image via setThumbnail, or a painted gradient with the site initial as a
fallback), the link title (bold, elided), the domain (muted) and an optional
one-line description. Feed it with setLink(title, url, description=None,
thumbnail=None) or the Designer qproperties. Clicking emits clicked(url).
The card panel + text colours are driven from the app QSS (objectName
selectors) so they flip with the theme.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomLinkPreview import QCustomLinkPreview` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomLinkPreview import QCustomLinkPreview

widget = QCustomLinkPreview()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `title` | `string` | `Shared link` |
| `url` | `string` | `example.com` |
| `description` | `string` | — |

## Signals

| Signal |
|---|
| `clicked(QString)` |

## Methods

| Method | Description |
|---|---|
| `clicked(...)` |  |
| `description(*args, **kwargs)` |  |
| `setLink(title, url, description=None, thumbnail=None)` |  |
| `setThumbnail(pm)` |  |
| `title(*args, **kwargs)` |  |
| `url(*args, **kwargs)` |  |

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
