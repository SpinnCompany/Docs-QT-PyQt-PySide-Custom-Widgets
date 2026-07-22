# Typed Designer Properties

Custom widget properties are exposed to Qt Designer as **proper types** — ints,
Qt enums, and int-backed enums — instead of free-form strings. This gives you
spin boxes and dropdowns in the Property Editor, keeps `.ui` files stable, and
lets you use named values in code.

## Why not plain enums everywhere?

Qt Designer only renders a **dropdown** for a property whose
`QMetaProperty.isEnumType()` is true. On PySide6 6.11:

- **Top-level Qt enums** (`Qt.Orientation`, `Qt.Alignment`, …) report
  `isEnumType == True` → real dropdown.
- **Custom Python `@QEnum` enums** report `isEnumType == False` → they do **not**
  render as dropdowns.

So the library uses this strategy:

| Case | Type used | Designer shows |
|---|---|---|
| A matching Qt enum exists | that Qt enum | dropdown |
| Fixed custom states | `int` backed by a Python `IntEnum` | spin box + named enum in code |
| Numeric values | `int` / `float` | spin box |
| Runtime-defined values (theme names) | `str` (validated) | text field |

## What changed

### Navigation widgets

| Widget · property | Now | Notes |
|---|---|---|
| `QCustomQStackedWidget.transitionDirection` | `Qt.Orientation` | Horizontal/Vertical **dropdown** |
| `QCustomHamburgerMenu.position` | `int` + `Position` enum | `Left=0, Right=1, Top=2, Bottom=3` |
| `QCustomSidebar` default/collapsed/expanded **width & height** | `int` | `-1` = match parent |

```python
from Custom_Widgets.QCustomHamburgerMenu import QCustomHamburgerMenu
menu.position = QCustomHamburgerMenu.Position.Top        # named
sidebar.defaultWidth = 250                                # pixels
sidebar.defaultHeight = -1                                # match parent
```

### Easing curves

`animationEasingCurve` (Sidebar, Hamburger, CheckBox) and
`QCustomQStackedWidget` `fadeInCurve` / `fadeOutCurve` /
`transitionEasingCurve` / `fadeEasingCurve` are now `int` (a
`QEasingCurve.Type` value):

```python
from qtpy.QtCore import QEasingCurve
sidebar.animationEasingCurve = QEasingCurve.OutBack
```

### Charts

Chart state properties are `int`, backed by `QCustomChartEnums`:

```python
from Custom_Widgets.QCustomCharts.QCustomChartConstants import QCustomChartEnums as E
chart.theme = int(E.ChartTheme.Dark)
chart.legendPosition = int(E.LegendPosition.Right)
series.barPattern = int(E.BarPattern.DiagonalCross)
```

Covered: `theme`, `legendPosition`, `labelsPosition`, `defaultLineStyle`,
`defaultMarkerStyle`, `barPattern`, `barSelectionMode`, `valueLabelsPosition`
across the line/area/bar/pie charts and bar series. The enums:
`LineStyle`, `MarkerStyle`, `ChartTheme`, `LegendPosition`, `LabelsPosition`,
`BarLabelsPosition`, `BarPattern`, `BarBorderStyle`, `BarSelectionMode`.

### Theme selection (stays a string)

`QCustomQMainWindow.appTheme` remains a **string** — theme names are defined at
runtime in `style.json` (built-in `Light`/`Dark` plus your custom themes), so a
static enum cannot list them. Use the [`QCustomThemeList`](QCustomThemeList.md)
widget for a runtime theme dropdown. A live Designer dropdown of theme names is
planned via a property-sheet extension.

## Migration

These changes alter how the properties **serialize** in `.ui`/JSON files. All
setters still **coerce legacy string values**, so existing files keep loading —
but for clean, future-proof files, re-save affected forms in Qt Designer after
upgrading, or update the raw values:

- Numeric-as-string → int: `<string>250</string>` becomes `<number>250</number>`.
  For sidebar sizes, `"parent"` becomes `-1`.
- State strings → int: e.g. hamburger `position` `"Left"`→`0`; chart
  `legendPosition` `"Top"`→`0`. See the enum tables above for the mapping.
- `transitionDirection` `"horizontal"`/`"vertical"` → `Qt::Horizontal` /
  `Qt::Vertical` (a real enum in the `.ui`).
- Easing names (`"OutQuad"`, `"out_quad"`) → the `QEasingCurve.Type` int.

Simplest path: open each form in Qt Designer (values load via the coercion),
set the new spin-box/dropdown values, and save.
