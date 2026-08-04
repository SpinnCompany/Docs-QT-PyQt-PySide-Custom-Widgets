---
title: QCustomGlassFrame
description: A GLASSMORPHISM / "liquid glass" container.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomGlassFrame

![QCustomGlassFrame](/img/showcase/glassframe.png)

A GLASSMORPHISM / "liquid glass" container.

A rounded container that composites a BLURRED copy of the content behind
it (the app's backdrop photo / wallpaper widget), then layers a tint, a
film-grain noise pass, a hairline border and - opt-in - a "liquid" edge
(refraction ring + specular rim) on top. Children laid out inside it sit
on frosted glass, like CSS backdrop-filter or visionOS panels.

Qt has no native backdrop-filter, so the frame renders a SOURCE widget
into a pixmap, blurs it offscreen (downsample -> QGraphicsBlurEffect ->
upsample) and paints that region under its own content:

* `backdropSource` (objectName) / setBackdropWidget(w): the widget to
sample - typically the full-window photo QLabel BELOW the glass
panels. Sampling a widget that does not contain the frame is cheap
and flicker-free, so `liveBackdrop` can re-sample continuously.
* With no source set, the frame samples its own top-level window
(hiding itself for the grab). That path is for static backdrops -
refresh happens on show/resize/move or an explicit refreshBackdrop().
* With nothing to sample (Designer palette preview, render_widget),
it paints a seeded placeholder gradient so it still previews.

Every knob is a typed Designer property; colours are qproperties so QSS
drives them per theme (qproperty-tintColor: ...). The live re-sampling
"animation" is user-controllable via `liveBackdrop` + `refreshInterval`.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomGlassFrame import QCustomGlassFrame` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomGlassFrame import QCustomGlassFrame

widget = QCustomGlassFrame()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomGlassFrame in dark theme](/img/showcase/glassframe-dark.png)

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
| `backdropSource` | `string` | — |
| `blurRadius` | `int` | `28` |
| `downsample` | `int` | `3` |
| `tintColor` | `color` | `rgba(18,22,32,110)` |
| `brightness` | `float` | `1.0` |
| `noiseOpacity` | `float` | `0.05` |
| `cornerRadius` | `int` | `24` |
| `borderColor` | `color` | `rgba(255,255,255,55)` |
| `borderWidth` | `float` | `1.0` |
| `liquidEdge` | `bool` | `False` |
| `edgeIntensity` | `float` | `0.5` |
| `liveBackdrop` | `bool` | `False` |
| `refreshInterval` | `int` | `120` |

## Methods

| Method | Description |
|---|---|
| `backdropSource(*args, **kwargs)` |  |
| `blurRadius(*args, **kwargs)` |  |
| `borderColor(*args, **kwargs)` |  |
| `borderWidth(*args, **kwargs)` |  |
| `brightness(*args, **kwargs)` |  |
| `changeEvent(e)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `downsample(*args, **kwargs)` |  |
| `edgeIntensity(*args, **kwargs)` |  |
| `eventFilter(obj, e)` |  |
| `liquidEdge(*args, **kwargs)` |  |
| `liveBackdrop(*args, **kwargs)` |  |
| `moveEvent(e)` |  |
| `noiseOpacity(*args, **kwargs)` |  |
| `refreshBackdrop()` | Re-sample and re-blur the backdrop now. |
| `refreshInterval(*args, **kwargs)` |  |
| `setBackdropWidget(widget)` | Point the frame at the widget to sample (overrides backdropSource). |
| `tintColor(*args, **kwargs)` |  |

## Related

[QCustomAccordion](QCustomAccordion.md) · [QCustomCardStack](QCustomCardStack.md) · [QCustomCarousel](QCustomCarousel.md) · [QCustomEmbeddedWindow](QCustomEmbeddedWindow.md) · [QCustomFlowLayout](QCustomFlowLayout.md) · [QCustomFlowWidget](QCustomFlowWidget.md) · [QCustomModal](QCustomModal.md) · [QCustomPopover](QCustomPopover.md)
