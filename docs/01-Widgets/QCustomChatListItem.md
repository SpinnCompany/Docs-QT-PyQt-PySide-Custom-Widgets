---
title: QCustomChatListItem
description: One conversation row in a messenger list.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomChatListItem

![QCustomChatListItem](/img/showcase/chatlistitem.png)

One conversation row in a messenger list.

A leading avatar (with an online status dot), the contact name, an elided
last-message preview, a timestamp and an optional unread-count badge -- the
exact anatomy of a chat/messenger conversation list. Composed from QLabels
and a QCustomAvatar so the text uses real fonts and themes by role, while a
painted rounded background gives the selected row its highlight pill. Set
`active` to mark the open conversation, `unread` for the badge count, and
`muted` to dim the row. Emits `clicked` so a list can route selection.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomChatListItem import QCustomChatListItem` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomChatListItem import QCustomChatListItem

widget = QCustomChatListItem()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomChatListItem in dark theme](/img/showcase/chatlistitem-dark.png)

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
| `name` | `string` | `Ricky Smith` |
| `preview` | `string` | `YOU: Okay, let's get the file over to...` |
| `time` | `string` | `1min ago` |
| `unread` | `int` | `0` |
| `online` | `bool` | `True` |
| `active` | `bool` | `False` |
| `muted` | `bool` | `False` |
| `activeColor` | `color` | `#12203a` |
| `nameColor` | `color` | `#1f2430` |
| `previewColor` | `color` | `#8a93a6` |
| `timeColor` | `color` | `#8a93a6` |
| `activeNameColor` | `color` | `#ffffff` |
| `activeTimeColor` | `color` | `#4c8dff` |
| `accentColor` | `color` | `#1b74e4` |
| `radius` | `int` | `14` |
| `avatarSize` | `int` | `44` |

## Signals

| Signal |
|---|
| `clicked()` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `active(*args, **kwargs)` |  |
| `activeColor(*args, **kwargs)` |  |
| `activeNameColor(*args, **kwargs)` |  |
| `activeTimeColor(*args, **kwargs)` |  |
| `avatarSize(*args, **kwargs)` |  |
| `clicked(...)` |  |
| `muted(*args, **kwargs)` |  |
| `name(*args, **kwargs)` |  |
| `nameColor(*args, **kwargs)` |  |
| `online(*args, **kwargs)` |  |
| `preview(*args, **kwargs)` |  |
| `previewColor(*args, **kwargs)` |  |
| `radius(*args, **kwargs)` |  |
| `setAvatarImage(image)` |  |
| `setName(text)` |  |
| `setPreview(text)` |  |
| `setTime(text)` |  |
| `time(*args, **kwargs)` |  |
| `timeColor(*args, **kwargs)` |  |
| `unread(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomChatBubble](QCustomChatBubble.md) · [QCustomChatDivider](QCustomChatDivider.md) · [QCustomChatInput](QCustomChatInput.md) · [QCustomChatList](QCustomChatList.md) · [QCustomChatThread](QCustomChatThread.md) · [QCustomMessageStatus](QCustomMessageStatus.md) · [QCustomReactionBar](QCustomReactionBar.md) · [QCustomTypingIndicator](QCustomTypingIndicator.md)
