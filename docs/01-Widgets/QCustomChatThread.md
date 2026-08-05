---
title: QCustomChatThread
description: A data-driven message thread.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomChatThread

![QCustomChatThread](/img/showcase/chatthread.png)

A data-driven message thread.

The scrolling column of chat bubbles. A manager calls setMessages([...]) with
DATA and the thread renders the right widget per row (QCustomChatBubble,
QCustomVoiceMessage inside a bubble, QCustomChatDivider, QCustomTyping
Indicator) and colours them from ITS OWN qproperties — so the whole look is
set in Designer / QSS and Python never builds or paints a bubble.

Each message is a dict:
{"kind": "date",  "text": "YESTERDAY"}
{"kind": "text",  "side": "in"/"out", "text", "time", "sender", "foot"}
{"kind": "voice", "side": "in"/"out", "duration", "time", "sender", "wave"}
{"kind": "typing","sender"}

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomChatThread import QCustomChatThread` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomChatThread import QCustomChatThread

widget = QCustomChatThread()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomChatThread in dark theme](/img/showcase/chatthread-dark.png)

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
| `incomingBubbleColor` | `color` | `#eef1f5` |
| `incomingTextColor` | `color` | `#1f2430` |
| `outgoingBubbleColor` | `color` | `#1b74e4` |
| `outgoingTextColor` | `color` | `#ffffff` |
| `metaColor` | `color` | `#99a0b0` |
| `dateBgColor` | `color` | `#eef1f5` |
| `dateTextColor` | `color` | `#8a93a6` |
| `accentColor` | `color` | `#1b74e4` |
| `waveUnplayedColor` | `color` | `#c7d0dc` |
| `maxBubbleWidth` | `int` | `460` |
| `spacing` | `int` | `10` |
| `showReactionAdd` | `bool` | `True` |

## Signals

| Signal |
|---|
| `inlineMediaCreated(PyObject,PyObject)` |
| `linkClicked(QString)` |
| `mediaOpenRequested(PyObject,int)` |
| `reactionAddRequested(int,PyObject)` |
| `reactionClicked(int,QString)` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` | Accent color. |
| `addReaction(index, emoji)` | Add one of `emoji` to message `index` (increment if it already |
| `dateBgColor(*args, **kwargs)` | Date bg color. |
| `dateTextColor(*args, **kwargs)` | Date text color. |
| `incomingBubbleColor(*args, **kwargs)` | Incoming bubble color. |
| `incomingTextColor(*args, **kwargs)` | Incoming text color. |
| `inlineMediaCreated(...)` | Inline media created. |
| `linkClicked(...)` | Link clicked. |
| `maxBubbleWidth(*args, **kwargs)` | Max bubble width. |
| `mediaOpenRequested(...)` | Media open requested. |
| `metaColor(*args, **kwargs)` | Meta color. |
| `outgoingBubbleColor(*args, **kwargs)` | Outgoing bubble color. |
| `outgoingTextColor(*args, **kwargs)` | Outgoing text color. |
| `reactionAddRequested(...)` | Reaction add requested. |
| `reactionClicked(...)` | Reaction clicked. |
| `setMessages(messages)` | Set the messages. |
| `setSenderName(name)` | Default sender label for incoming rows that omit their own. |
| `showReactionAdd(*args, **kwargs)` | Show the reaction add. |
| `spacing(*args, **kwargs)` | Spacing. |
| `waveUnplayedColor(*args, **kwargs)` | Wave unplayed color. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomChatBubble](QCustomChatBubble.md) · [QCustomChatDivider](QCustomChatDivider.md) · [QCustomChatInput](QCustomChatInput.md) · [QCustomChatList](QCustomChatList.md) · [QCustomChatListItem](QCustomChatListItem.md) · [QCustomMessageStatus](QCustomMessageStatus.md) · [QCustomReactionBar](QCustomReactionBar.md) · [QCustomTypingIndicator](QCustomTypingIndicator.md)
