---
title: QCustomMapView
description: Engine-agnostic map facade.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomMapView

![QCustomMapView](/img/showcase/mapview.png)

Engine-agnostic map facade.

The facade owns all the STATE (centre, zoom, markers, routes, focus) and a
backend renders it. That split is deliberate:

* the state is plain Python and fully testable headlessly, which is what
the project plan said a map could not be - it can, as long as the
engine is not tangled into it
* the engine can be swapped (QtLocation today, MapLibre/WebEngine later)
without touching a line of application code

Every mutation is applied to the state first and then pushed to the backend,
so a view created before the engine loads still shows the right thing once
it attaches, and a headless test needs no engine at all.

See docs/design/qcustommapview-project-plan.md for why this is an optional
extra rather than a core widget.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomMapView import QCustomMapView` |
| **Qt Designer** | Code only |

## Quick start

```python
from Custom_Widgets.QCustomMapView import QCustomMapView

widget = QCustomMapView()
widget.loadDefaultEngine()
widget.setCenter(-1.286389, 36.817223)      # Nairobi
widget.setZoom(13)
_pump(2.5)
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomMapView in dark theme](/img/showcase/mapview-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `latitude` | `float` | — |
| `longitude` | `float` | — |
| `zoomLevel` | `float` | — |
| `tileProviderName` | `string` | — |
| `interactive` | `bool` | — |

## Signals

| Signal |
|---|
| `centerChanged(double,double)` |
| `engineFailed(QString)` |
| `markerClicked(QString)` |
| `zoomChanged(double)` |

## Methods

| Method | Description |
|---|---|
| `addMarker(id, latitude, longitude, label='', color='#2563eb', heading=None, icon='')` | Add a marker. |
| `attachEngine(engine)` | Attach a backend and replay the current state into it. |
| `center()` | Center. |
| `centerChanged(...)` | Center changed. |
| `clearFocus()` | Clear the focus. |
| `clearMarkers()` | Clear the markers. |
| `clearRoutes()` | Clear the routes. |
| `engine()` | Engine. |
| `engineFailed(...)` | Engine failed. |
| `fitMarkers(padding=0.15)` | Centre on the markers and pick a zoom that contains them all. |
| `focusMarker(id, glow=True, recenter=True)` | Focus marker. |
| `focusedMarker()` | Focused marker. |
| `hasEngine()` | Return whether it has engine. |
| `interactive(*args, **kwargs)` | Interactive. |
| `latitude(*args, **kwargs)` | Latitude. |
| `loadDefaultEngine()` | Load the shipped QtLocation backend. |
| `longitude(*args, **kwargs)` | Longitude. |
| `mapStyle()` | Map style. |
| `mapStyles()` | Style names the engine reports, or [] before it has resolved them. |
| `marker(id)` | Marker. |
| `markerClicked(...)` | Marker clicked. |
| `markerCount()` | Marker count. |
| `markers()` | Markers. |
| `providerOptions()` | Provider options. |
| `removeMarker(id)` | Remove a marker. |
| `removeRoute(id)` | Remove a route. |
| `route(id)` | Route. |
| `routeCount()` | Route count. |
| `routes()` | Routes. |
| `setCenter(latitude, longitude)` | Set the center. |
| `setMapStyle(index)` | Pick one of mapStyles() by index. |
| `setRoute(id, points, color='#dc2626', width=4.0)` | Set the route. |
| `setTileProvider(provider, **options)` | Choose the tile provider. Options are passed to the engine. |
| `setZoom(zoom)` | Set the zoom. |
| `showPlaceholder(message)` | Show why the map is blank, instead of leaving an empty rectangle. |
| `tileProvider()` | Tile provider. |
| `tileProviderName(*args, **kwargs)` | Tile provider name. |
| `updateMarker(id, latitude=None, longitude=None, **kwargs)` | Move or restyle a marker in place. Returns False if unknown. |
| `zoom()` | Zoom. |
| `zoomChanged(...)` | Zoom changed. |
| `zoomIn(step=1.0)` | Zoom in. |
| `zoomLevel(*args, **kwargs)` | Zoom level. |
| `zoomOut(step=1.0)` | Zoom out. |

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomMapView/main.py`.
