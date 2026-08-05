---
title: QCustomTableToolbar
description: A rich filter/search bar for data tables.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomTableToolbar

:::info Pro widget

`QCustomTableToolbar` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomTableToolbar](/img/showcase/tabletoolbar.gif)

A rich filter/search bar for data tables.

The companion chrome above a QCustomDataTable, modelled on modern SaaS
"Jobs / Records" screens (search + Filters button + removable filter chips +
Clear filters, and a second row of colour-coded status pills with counts and
a Show-statuses switch). It owns no data - it just emits intent:

searchChanged(str)          the search text changed (debounced by typing)
filtersClicked()            the Filters button was pressed
filterChipRemoved(str)      a filter chip's x was clicked (its key)
clearFiltersClicked()       the Clear filters link was pressed
statusSelected(str)         a status pill was picked ("" == the All pill)
showStatusesToggled(bool)   the Show-statuses switch flipped

Colours track the active theme through setThemeColors(...) (call it after
applyDesignTokens); each status keeps its own semantic hue for its pill.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomTableToolbar import QCustomTableToolbar` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomTableToolbar import QCustomTableToolbar

widget = QCustomTableToolbar()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomTableToolbar in dark theme](/img/showcase/tabletoolbar-dark.gif)

## Signals

| Signal |
|---|
| `clearFiltersClicked()` |
| `filterChipRemoved(QString)` |
| `filtersClicked()` |
| `searchChanged(QString)` |
| `showStatusesToggled(bool)` |
| `statusSelected(QString)` |

## Methods

| Method | Description |
|---|---|
| `activeStatus()` |  |
| `addFilterChip(key, label, value=None)` |  |
| `clearFilterChips()` |  |
| `clearFiltersClicked(...)` |  |
| `filterChipKeys()` |  |
| `filterChipRemoved(...)` |  |
| `filtersClicked(...)` |  |
| `removeFilterChip(key)` |  |
| `searchChanged(...)` |  |
| `searchInput()` |  |
| `searchText()` |  |
| `setActiveStatus(key)` |  |
| `setFilterChips(items)` | Replace all filter chips. Each item is (key, label[, value]) or a |
| `setSearchPlaceholder(text)` |  |
| `setSearchText(text)` |  |
| `setShowStatuses(on)` |  |
| `setStatusCount(key, count)` |  |
| `setStatuses(items)` | Rebuild the status pills (the built-in All pill is kept first). |
| `setThemeColors(surface=None, on_surface=None, muted=None, outline=None, accent=None)` | Track the active theme. Pass token role values (call after |
| `showStatuses()` |  |
| `showStatusesToggled(...)` |  |
| `statusSelected(...)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `surface-muted`, `on-surface`, `outline`, `primary`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCodeEditor](QCustomCodeEditor.md) · [QCustomDataTable](QCustomDataTable.md) · [QCustomNodeGraph](QCustomNodeGraph.md) · [QCustomRichTextEditor](QCustomRichTextEditor.md) · [QCustomTreeWidget](QCustomTreeWidget.md)
