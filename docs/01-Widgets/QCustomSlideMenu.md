---
title: QCustomSlideMenu
description: QWidget(self, /, parent - PySide6.QtWidgets.QWidget | None = None, f - PySide6.QtCore.Qt.WindowType = Default(Qt.WindowFlags), *, modal - bool | None = None,.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomSlideMenu

![QCustomSlideMenu](/img/showcase/slidemenu.gif)

QWidget(self, /, parent: PySide6.QtWidgets.QWidget | None = None, f: PySide6.QtCore.Qt.WindowType = Default(Qt.WindowFlags), *, modal: bool | None = None, windowModality: PySide6.QtCore.Qt.WindowModality | None = None, enabled: bool | None = None, geometry: PySide6.QtCore.QRect | None = None, frameGeometry: PySide6.QtCore.QRect | None = None, normalGeometry: PySide6.QtCore.QRect | None = None, x: int | None = None, y: int | None = None, pos: PySide6.QtCore.QPoint | None = None, frameSize: PySide6.QtCore.QSize | None = None, size: PySide6.QtCore.QSize | None = None, width: int | None = None, height: int | None = None, rect: PySide6.QtCore.QRect | None = None, childrenRect: PySide6.QtCore.QRect | None = None, childrenRegion: PySide6.QtGui.QRegion | None = None, sizePolicy: PySide6.QtWidgets.QSizePolicy | None = None, minimumSize: PySide6.QtCore.QSize | None = None, maximumSize: PySide6.QtCore.QSize | None = None, minimumWidth: int | None = None, minimumHeight: int | None = None, maximumWidth: int | None = None, maximumHeight: int | None = None, sizeIncrement: PySide6.QtCore.QSize | None = None, baseSize: PySide6.QtCore.QSize | None = None, palette: PySide6.QtGui.QPalette | None = None, font: PySide6.QtGui.QFont | None = None, cursor: PySide6.QtGui.QCursor | None = None, mouseTracking: bool | None = None, tabletTracking: bool | None = None, isActiveWindow: bool | None = None, focusPolicy: PySide6.QtCore.Qt.FocusPolicy | None = None, focus: bool | None = None, contextMenuPolicy: PySide6.QtCore.Qt.ContextMenuPolicy | None = None, updatesEnabled: bool | None = None, visible: bool | None = None, minimized: bool | None = None, maximized: bool | None = None, fullScreen: bool | None = None, sizeHint: PySide6.QtCore.QSize | None = None, minimumSizeHint: PySide6.QtCore.QSize | None = None, acceptDrops: bool | None = None, windowTitle: str | None = None, windowIcon: PySide6.QtGui.QIcon | None = None, windowIconText: str | None = None, windowOpacity: float | None = None, windowModified: bool | None = None, toolTip: str | None = None, toolTipDuration: int | None = None, statusTip: str | None = None, whatsThis: str | None = None, accessibleName: str | None = None, accessibleDescription: str | None = None, accessibleIdentifier: str | None = None, layoutDirection: PySide6.QtCore.Qt.LayoutDirection | None = None, autoFillBackground: bool | None = None, styleSheet: str | None = None, locale: PySide6.QtCore.QLocale | None = None, windowFilePath: str | None = None, inputMethodHints: PySide6.QtCore.Qt.InputMethodHint | None = None) -> None

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomSlideMenu import QCustomSlideMenu` |
| **Qt Designer** | Code only |

## Quick start

```python
from Custom_Widgets.QCustomSlideMenu import QCustomSlideMenu

widget = QCustomSlideMenu()
lay = _intoLayout(w)
title = QLabel("Workspace")
title.setStyleSheet("font-size: 14px; font-weight: 600;")
lay.addWidget(title)
for text in ("Dashboard", "Projects", "Messages", "Settings"):
lay.addWidget(QPushButton(text))
lay.addStretch(1)
widget.customizeQCustomSlideMenu(defaultWidth=210, defaultHeight=250,
                        collapsedWidth=64, collapsedHeight=250,
                        expandedWidth=210, expandedHeight=250)
widget.sizeHint = lambda: QSize(210, 250)
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomSlideMenu in dark theme](/img/showcase/slidemenu-dark.gif)

## Signals

| Signal |
|---|
| `onCollapsed()` |
| `onCollapsing()` |
| `onExpanded()` |
| `onExpanding()` |

## Methods

| Method | Description |
|---|---|
| `activateMenuButton(buttonObject)` | Activate menu button. |
| `adjustMaximumSize(property_name)` | Adjust maximum size. |
| `animateDefaultSize()` | Determines if the widget is in an expanded state by comparing its |
| `animateMenu()` | Animate menu. |
| `autoContentSize()` | Size used for the legacy "auto" width/height value: the widget's |
| `calculateEndHeight(height)` | Calculate end height. |
| `calculateEndWidth(width)` | Calculate end width. |
| `collapseMenu()` | Collapse the menu. |
| `createAnimation(property_name, start_value, end_value)` | Create an animation. |
| `customizeQCustomSlideMenu(**customValues)` | Customize Q custom slide menu. |
| `determineHeight()` | Determine height. |
| `determineWith()` | Determine with. |
| `emitStatusSignal()` | Emit status signal. |
| `eventFilter(obj, event: PySide6.QtCore.QEvent)` | Event filter. |
| `expandMenu()` | Expand the menu. |
| `getButtonByName(buttonName)` | Recursively search for a button by objectName in children and parent containers. |
| `getCollapsedHeight()` | Return the collapsed height. |
| `getCollapsedWidth()` | Return the collapsed width. |
| `getDefaultHeight()` | Return the default height. |
| `getDefaultWidth()` | Return the default width. |
| `getExpandedHeight()` | Return the expanded height. |
| `getExpandedWidth()` | Return the expanded width. |
| `initializeVariables()` | Initialize variables. |
| `isCollapsed()` | Determines if the widget is in a collapsed state by comparing its |
| `isExpanded()` | Determines if the widget is in an expanded state by comparing its |
| `onCollapsed(...)` | Handle collapsed. |
| `onCollapsing(...)` | Handle collapsing. |
| `onExpanded(...)` | Handle expanded. |
| `onExpanding(...)` | Handle expanding. |
| `refresh()` | Refresh. |
| `setMinSize()` | Set the min size. |
| `slideMenu()` | Slide menu. |
| `toggle()` | Toggle. |
| `toggleButton(**values)` | Toggle the button. |
| `toggleMenu()` | Toggle the menu. |

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomSlideMenu/main.py`.

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md)
