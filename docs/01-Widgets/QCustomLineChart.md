---
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomLineChart

![QCustomLineChart screenshot](/img/showcase/linechart.png)

`QCustomLineChart` — Line chart implementation using the modular architecture.

Qt Designer compatible with property exposure.

---

## Import

```python
from Custom_Widgets.QCustomCharts.QCustomLineChart import QCustomLineChart
```

Also available from the **Qt Designer** palette — every property below is settable in Designer and saved into the `.ui` file.

## Constructor

```python
QCustomLineChart(parent=None)
```

## Properties

| Property | Type | Default |
|---|---|---|
| `fillOpacity` | `float` | `0.3` |
| `xAxisTitle` | `string` | `X Axis` |
| `yAxisTitle` | `string` | `Y Axis` |
| `autoScale` | `bool` | `True` |
| `showCrosshair` | `bool` | `True` |
| `crosshairColor` | `color` | `#000000` |
| `crosshairWidth` | `float` | `1.0` |
| `showGrid` | `bool` | `True` |
| `gridColor` | `color` | `#c8c8c8` |
| `showLegend` | `bool` | `True` |
| `showDataPoints` | `bool` | `True` |
| `fillArea` | `bool` | `False` |
| `enableShadow` | `bool` | `False` |
| `shadowBlur` | `int` | `15` |
| `highlightSize` | `int` | `8` |
| `markerSize` | `float` | `8.0` |
| `showFooter` | `bool` | `True` |
| `defaultLineStyle` | `int` | `0` |
| `defaultMarkerStyle` | `int` | `6` |
| `chartTitle` | `string` | `Line Chart` |
| `animationEnabled` | `bool` | `True` |
| `animationDuration` | `int` | `1000` |
| `antialiasing` | `bool` | `True` |
| `showToolbar` | `bool` | `False` |
| `tooltipsEnabled` | `bool` | `True` |
| `tooltipDelay` | `int` | `500` |
| `tooltipDuration` | `int` | `5000` |
| `theme` | `int` | `0` |
| `legendPosition` | `int` | `1` |
| `legendFontSize` | `int` | `8` |
| `legendBackgroundVisible` | `bool` | `False` |
| `compactMode` | `bool` | `False` |
| `seriesCsv` | `string` | — |
| `categoriesCsv` | `string` | — |

## Methods

| Method | Description |
|---|---|
| `addSeries(name: str, data: List[Tuple[float, float]], color: PySide6.QtGui.QColor | None = None, visible: bool = True, line_style: str = 'solid', line_width: float = 2.0, marker_style: str = 'none', marker_size: float = None, **kwargs) -> bool` | Add a line series to the chart. |
| `appendToSeries(name: str, points: List[Tuple[float, float]]) -> bool` | Append points to an existing series |
| `applyCustomPalette(palette: PySide6.QtGui.QPalette)` | Apply a custom palette to the chart (for App Theme) |
| `chartExportComplete(...)` |  |
| `clearData()` | Clear all chart data (compatibility method) |
| `dataPointClicked(...)` |  |
| `dataPointHovered(...)` |  |
| `exportToClipboard()` | Export chart to clipboard |
| `exportToFile(format: str = None, filename: str = None)` | Export chart to file |
| `fillOpacity(*args, **kwargs)` | Get fill opacity |
| `generateExampleData(example_type: str = 'sine_wave')` | Generate example data for testing. |
| `getAvailableLegendPositions() -> List[str]` | Get list of available legend positions |
| `getAvailableThemes() -> List[str]` | Get list of available theme names |
| `getLegendAlignment() -> PySide6.QtCore.Qt.AlignmentFlag` | Get current legend alignment |
| `getLegendFontSize() -> int` | Get legend font size |
| `getMarkerSizeRange() -> Tuple[float, float]` | Get valid marker size range |
| `getSeriesData(name: str) -> List[Tuple[float, float]]` | Get data for a specific series (overrides base method) |
| `getSeriesLineStyle(name: str) -> str` | Get line style for a series |
| `getSeriesMarkerSize(name: str) -> float` | Get marker size for a specific series |
| `getSeriesMarkerStyle(name: str) -> str` | Get marker style for a series |
| `getSeriesNames() -> List[str]` | Get list of all series names (overrides base method) |
| `getXAxisRange() -> Tuple[float, float]` | Get X axis range |
| `getYAxisRange() -> Tuple[float, float]` | Get Y axis range |
| `hasCustomMarkerSize(series_name: str) -> bool` | Check if series has custom marker size |
| `hideCrosshair()` | Manually hide crosshair |
| `hideTooltip()` | Manually hide tooltip |
| `isValidLineStyle(style: str) -> bool` | Check if line style is valid |
| `isValidMarkerStyle(style: str) -> bool` | Check if marker style is valid |
| `legendPositionChanged(...)` |  |
| `printChart()` | Print chart |
| `refreshTheme()` | Refresh the current theme (useful when app palette changes) |
| `removeSeries(name: str) -> bool` | Remove a series from the chart |
| `resetMarkerSizes()` | Reset all marker sizes to default |
| `seriesAdded(...)` |  |
| `seriesRemoved(...)` |  |
| `setAllMarkersSize(size: float)` | Set marker size for all series |
| `setChartTitle(title: str)` | Set chart title (compatibility method) |
| `setCrosshairColor(color: PySide6.QtGui.QColor)` | Set crosshair line color |
| `setCrosshairStyle(style: PySide6.QtCore.Qt.PenStyle)` | Set crosshair line style |
| `setCrosshairWidth(width: float)` | Set crosshair line width |
| `setLegendAlignment(alignment: PySide6.QtCore.Qt.AlignmentFlag)` | Directly set legend alignment |
| `setLegendBackgroundVisible(visible: bool)` | Set legend background visibility |
| `setLegendFontSize(size: int)` | Set legend font size |
| `setSeriesColor(name: str, color: PySide6.QtGui.QColor)` | Set color for a specific series (overrides base method) |
| `setSeriesLineStyle(name: str, style: str) -> bool` | Set line style for a series |
| `setSeriesLineWidth(name: str, width: float) -> bool` | Set line width for a series |
| `setSeriesMarkerSize(name: str, size: float) -> bool` | Set marker size for a series |
| `setSeriesMarkerStyle(name: str, style: str) -> bool` | Set marker style for a series |
| `setSeriesVisibility(name: str, visible: bool)` | Set visibility for a specific series (overrides base method) |
| `setXAxisRange(min_val: float, max_val: float)` | Set X axis range |
| `setXAxisTitle(title: str)` | Set X axis title |
| `setYAxisRange(min_val: float, max_val: float)` | Set Y axis range |
| `setYAxisTitle(title: str)` | Set Y axis title |
| `showCrosshairAt(x: float, y: float)` | Manually show crosshair at specific coordinates |
| `showTooltipAt(x: float, y: float, series_name: str, title: str = None, description: str = None)` | Manually show tooltip at specific coordinates |
| `updateChart()` | Update the chart display based on current data |
| `updateSeriesData(name: str, data: List[Tuple[float, float]]) -> bool` | Update data for an existing series |

## Signals

| Signal | Description |
|---|---|
| `chartExportComplete(QString,bool)` |  |
| `dataPointClicked(double,double,QString)` |  |
| `dataPointHovered(double,double,QString)` |  |
| `legendPositionChanged(QString)` |  |
| `seriesAdded(QString)` |  |
| `seriesRemoved(QString)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

### Dark theme

![QCustomLineChart dark](/img/showcase/linechart-dark.png)

---

<!-- Generated by tools/gen_widget_docs.py from the widget's __catalog__, metaObject and module docstring. Edit the widget, then regenerate — hand edits here are overwritten. Remove the marker at the top of this file to take it over by hand. -->
