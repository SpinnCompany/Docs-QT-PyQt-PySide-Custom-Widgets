---
title: QCustomTimeline
description: A vertical event timeline.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomTimeline

![QCustomTimeline](/img/showcase/timeline.png)

A vertical event timeline.

Each item has a marker dot on a connecting rail plus a title, optional
time and description. Rail colours come from tokens (qproperty lineColor);
per-item dot colour can be overridden. Tokenized.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomTimeline import QCustomTimeline` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomTimeline import QCustomTimeline

widget = QCustomTimeline()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomTimeline in dark theme](/img/showcase/timeline-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `lineColor` | `color` | — |
| `dotColor` | `color` | — |

## Methods

| Method | Description |
|---|---|
| `addItem(title, time=None, description=None, color=None)` |  |
| `count()` |  |
| `dotColor(*args, **kwargs)` |  |
| `lineColor(*args, **kwargs)` |  |
| `setItems(items)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `on-surface`, `surface-muted`, `outline`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
