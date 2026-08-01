---
title: QCustomChip
description: / QCustomChipGroup - compact tags / filter chips.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomChip

![QCustomChip](/img/showcase/chip.png)

/ QCustomChipGroup - compact tags / filter chips.

A chip is a small rounded label, optionally closable (x) and/or
selectable (filter/choice chip). QCustomChipGroup lays chips out in a
wrapping flow with optional single- or multi-select. Tokenized.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomChip import QCustomChip` |
| **Qt Designer** | Code only |

## Quick start

```python
from Custom_Widgets.QCustomChip import QCustomChip

widget = QCustomChip()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomChip in dark theme](/img/showcase/chip-dark.png)

## Signals

| Signal |
|---|
| `clicked()` |
| `removed()` |
| `toggled(bool)` |

## Methods

| Method | Description |
|---|---|
| `clicked(...)` |  |
| `data()` |  |
| `isSelected()` |  |
| `removed(...)` |  |
| `setSelected(selected)` |  |
| `text()` |  |
| `toggled(...)` |  |

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomClockLabel](QCustomClockLabel.md)
