---
title: QCustomChatList
description: A data-driven conversation list.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomChatList

![QCustomChatList](/img/showcase/chatlist.gif)

A data-driven conversation list.

Wraps a scrollable column of QCustomChatListItem rows and owns the selection
(active pill), so a manager just calls setConversations([...]) with DATA and
connects `currentChanged(index)` — it never builds or colours rows. All the
row styling (accent, active pill, name/preview/time colours, online dot) is
exposed as qproperties on the LIST and forwarded to every row, so the whole
look is set in Designer / QSS. Designer-droppable.

Each conversation is a dict: {name, preview, time, unread, online, muted,
avatarColor, avatarImage}.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomChatList import QCustomChatList` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomChatList import QCustomChatList

widget = QCustomChatList()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomChatList in dark theme](/img/showcase/chatlist-dark.gif)

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
| `accentColor` | `color` | `#1b74e4` |
| `activeColor` | `color` | `#12203a` |
| `nameColor` | `color` | `#1f2430` |
| `previewColor` | `color` | `#8a93a6` |
| `timeColor` | `color` | `#99a0b0` |
| `activeNameColor` | `color` | `#ffffff` |
| `activeTimeColor` | `color` | `#4c8dff` |
| `onlineColor` | `color` | `#31c48d` |
| `surfaceColor` | `color` | `#ffffff` |
| `rowSpacing` | `int` | `2` |

## Signals

| Signal |
|---|
| `currentChanged(int)` |
| `itemClicked(int)` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` | Accent color. |
| `activeColor(*args, **kwargs)` | Active color. |
| `activeNameColor(*args, **kwargs)` | Active name color. |
| `activeTimeColor(*args, **kwargs)` | Active time color. |
| `count()` | Count. |
| `currentChanged(...)` | Current changed. |
| `currentIndex()` | Current index. |
| `itemClicked(...)` | Item clicked. |
| `nameColor(*args, **kwargs)` | Name color. |
| `onlineColor(*args, **kwargs)` | Online color. |
| `previewColor(*args, **kwargs)` | Preview color. |
| `rowSpacing(*args, **kwargs)` | Row spacing. |
| `setAvatarImageAt(index, image)` | Set the avatar image at. |
| `setConversations(conversations)` | Set the conversations. |
| `setCurrentIndex(index, emit=True)` | Set the current index. |
| `surfaceColor(*args, **kwargs)` | Surface color. |
| `timeColor(*args, **kwargs)` | Time color. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomChatBubble](QCustomChatBubble.md) · [QCustomChatDivider](QCustomChatDivider.md) · [QCustomChatInput](QCustomChatInput.md) · [QCustomChatListItem](QCustomChatListItem.md) · [QCustomChatThread](QCustomChatThread.md) · [QCustomMessageStatus](QCustomMessageStatus.md) · [QCustomReactionBar](QCustomReactionBar.md) · [QCustomTypingIndicator](QCustomTypingIndicator.md)
