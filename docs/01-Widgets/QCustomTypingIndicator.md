---
title: QCustomTypingIndicator
description: The animated "… is typing" dots.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomTypingIndicator

![QCustomTypingIndicator](/img/showcase/typingindicator.gif)

The animated "… is typing" dots.

Three dots that bounce/fade in sequence, painted with QPainter (no assets),
optionally inside a chat-bubble-style pill. Call start()/stop() (or set the
`running` property) to animate; colour and dot size are qproperties.
Designer-droppable so it drops straight into a thread.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomTypingIndicator import QCustomTypingIndicator` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomTypingIndicator import QCustomTypingIndicator

widget = QCustomTypingIndicator()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomTypingIndicator in dark theme](/img/showcase/typingindicator-dark.gif)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `running` | `bool` | `True` |
| `dotColor` | `color` | `#8a93a6` |
| `dotSize` | `int` | `7` |
| `bubble` | `bool` | `True` |
| `bubbleColor` | `color` | `#eef1f5` |

## Methods

| Method | Description |
|---|---|
| `bubble(*args, **kwargs)` | Bubble. |
| `bubbleColor(*args, **kwargs)` | Bubble color. |
| `dotColor(*args, **kwargs)` | Dot color. |
| `dotSize(*args, **kwargs)` | Dot size. |
| `running(*args, **kwargs)` | Running. |
| `start()` | Start. |
| `stop()` | Stop. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomChatBubble](QCustomChatBubble.md) · [QCustomChatDivider](QCustomChatDivider.md) · [QCustomChatInput](QCustomChatInput.md) · [QCustomChatList](QCustomChatList.md) · [QCustomChatListItem](QCustomChatListItem.md) · [QCustomChatThread](QCustomChatThread.md) · [QCustomMessageStatus](QCustomMessageStatus.md) · [QCustomReactionBar](QCustomReactionBar.md)
