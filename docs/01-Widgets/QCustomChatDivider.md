---
title: QCustomChatDivider
description: A thread separator with a centered label.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomChatDivider

![QCustomChatDivider](/img/showcase/chatdivider.png)

A thread separator with a centered label.

The "YESTERDAY" / "Today" date pill (and the coloured "Unread messages"
marker) that separates runs of chat bubbles. Three variants: `pill` (a
rounded chip centred on transparent space), `line` (label between two hair
rules), and `unread` (an accent rule + label). Painted-free (a QLabel + a
painted rule), themeable via qproperties, Designer-droppable so the thread is
composed in the form.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomChatDivider import QCustomChatDivider` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomChatDivider import QCustomChatDivider

widget = QCustomChatDivider()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomChatDivider in dark theme](/img/showcase/chatdivider-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `frameShape` | `QFrame::Shape` | — |
| `frameShadow` | `QFrame::Shadow` | — |
| `lineWidth` | `int` | — |
| `midLineWidth` | `int` | — |
| `frameWidth` | `int` | — |
| `frameRect` | `QRect` | — |
| `text` | `string` | `YESTERDAY` |
| `variant` | `enum: `pill` / `line` / `unread`` | `pill` |
| `pillColor` | `color` | `#eef1f5` |
| `textColor` | `color` | `#8a93a6` |
| `lineColor` | `color` | `#e6e9ef` |
| `accentColor` | `color` | `#1b74e4` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `lineColor(*args, **kwargs)` |  |
| `pillColor(*args, **kwargs)` |  |
| `text(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |
| `variant(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomChatBubble](QCustomChatBubble.md) · [QCustomChatInput](QCustomChatInput.md) · [QCustomChatList](QCustomChatList.md) · [QCustomChatListItem](QCustomChatListItem.md) · [QCustomChatThread](QCustomChatThread.md) · [QCustomMessageStatus](QCustomMessageStatus.md) · [QCustomReactionBar](QCustomReactionBar.md) · [QCustomTypingIndicator](QCustomTypingIndicator.md)
