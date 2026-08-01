---
title: QCustomChatInput
description: A message composer bar.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomChatInput

A message composer bar.

The bottom "Write something…" row: attach + mic buttons, a text field, an
emoji button and a send button, wired to signals (`sendMessage(text)` on
Enter or send-click, plus `attachClicked` / `micClicked` / `emojiClicked`).
The buttons carry stable objectNames (attachBtn / micBtn / emojiBtn / sendBtn
/ messageField) so their icons and colours are set from QSS
(`#sendBtn { qproperty-icon: url(theme-icons:…) }`) — Python only reacts to
the signals. Designer-droppable, so the whole bar is one widget in the form.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomChatInput import QCustomChatInput` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomChatInput import QCustomChatInput

widget = QCustomChatInput()
widget.placeholder = "Write a message..."
widget.setText("Sounds good - shipping it today")
```

That is the exact code behind the screenshot above.

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
| `placeholder` | `string` | `   Write something..` |
| `clearOnSend` | `bool` | `True` |
| `showAttach` | `bool` | `True` |
| `showMic` | `bool` | `True` |
| `showEmoji` | `bool` | `True` |
| `iconSize` | `int` | `19` |

## Signals

| Signal |
|---|
| `attachClicked()` |
| `emojiClicked()` |
| `micClicked()` |
| `sendMessage(QString)` |
| `textChanged(QString)` |

## Methods

| Method | Description |
|---|---|
| `attachClicked(...)` |  |
| `clearOnSend(*args, **kwargs)` |  |
| `emojiButton()` |  |
| `emojiClicked(...)` |  |
| `field()` |  |
| `iconSize(*args, **kwargs)` |  |
| `insertText(t)` |  |
| `micClicked(...)` |  |
| `placeholder(*args, **kwargs)` |  |
| `sendButton()` |  |
| `sendMessage(...)` |  |
| `setText(t)` |  |
| `showAttach(*args, **kwargs)` |  |
| `showEmoji(*args, **kwargs)` |  |
| `showMic(*args, **kwargs)` |  |
| `text()` |  |
| `textChanged(...)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomChatBubble](QCustomChatBubble.md) · [QCustomChatDivider](QCustomChatDivider.md) · [QCustomChatList](QCustomChatList.md) · [QCustomChatListItem](QCustomChatListItem.md) · [QCustomChatThread](QCustomChatThread.md) · [QCustomMessageStatus](QCustomMessageStatus.md) · [QCustomReactionBar](QCustomReactionBar.md) · [QCustomTypingIndicator](QCustomTypingIndicator.md)
