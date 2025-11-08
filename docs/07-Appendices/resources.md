# Resources

Your **Custom Widgets** project provides a centralized system for managing **icons, fonts, styles, and themes** across the entire application.
All visual elements are organized into resource folders, automatically generated and updated when themes or styles change.

---

## Resource Folder Structure

The main directories involved in resource management are organized as follows:

```
/Qss/
├── icons/                  # Theme-based PNG icon sets (auto-generated)
│   └── [color_folder]/     # Each folder corresponds to a HEX color code
│       └── widgets/
├── scss/                   # SCSS source files used for theme compilation
│   ├── _variables.scss
│   ├── _styles.scss
│   ├── main.scss
│   └── defaultStyle.scss
├── fonts/                  # Custom font files (e.g., Rosario, ProductSans)

/generated-files/
├── css/                    # Compiled QSS file (main.css)
├── json/                   # Auto-generated JSON describing UI components, icons, and variables
```

> **Note:**
> All generated folders are automatically maintained. Avoid editing `/generated-files/` manually.

---

## Icon Generation

### Automatic Icons per Theme

Each theme defines its `icons-color` property (or falls back to `accent-color` if unspecified).
Icons are automatically generated from base SVGs and saved as PNG files under:

```
/Qss/icons/[COLOR_CODE]/[widget_name].png
```

**Example:**

```json
{
  "Theme-name": "Dark-Blue",
  "Accent-color": "#03C3C3",
  "Icons-color": "#03C3C3"
}
```

Results in:

```
/Qss/icons/03C3C3/
```

If multiple themes share the same `Icons-color`, the same icon set is reused to reduce redundant file generation and improve startup performance.

---

## Using Icons in Widgets

Icons are applied automatically at runtime based on:

* The currently active theme
* The `generated-files/json/*.json` icon mappings
* The widget type (e.g. `QPushButton`, `QCustomSidebarButton`, etc.)

You can also retrieve icons programmatically:

```python
from Custom_Widgets.Utils import get_icon_path
icon = QIcon(get_icon_path("theme_toggle.png"))
```

This ensures your code remains compatible with any theme in use.

---

## Customizing Icons

To provide your own SVG icons:

1. Place your SVG files under `/Qss/icons/base/`
2. Follow the structure below:

   ```
   /Qss/icons/
       └── base/
           └── widgets/
               └── my_button.svg
   ```
3. Regenerate themed icons by changing the active theme or running:

   ```python
   from Custom_Widgets.ThemeEngine import QCustomTheme
   themeEngine = QCustomTheme()
   themeEngine.generateAllIcons()
   ```

---

## Fonts

The default font family is **Rosario**, located in:

```
/Qss/fonts/Rosario/
```

It is automatically loaded at runtime by:

```python
QFontDatabase.addApplicationFont("Qss/fonts/Rosario/Rosario-VariableFont_wght.ttf")
```

You may replace this with your own font by placing the `.ttf` or `.otf` file in the same directory and adjusting the loader in your theme or startup file if needed.

---

## Regeneration Triggers

Icons and styles are automatically recompiled whenever:

* The active theme changes
* JSON theme variables or SCSS files are modified
* `QAppSettings.updateAppSettings(self)` or `applyCompiledSass()` is called

This ensures that updates to colors, icons, or fonts take effect immediately across all widgets.

---

## Adding Static Resources (Optional)

You can include other static files such as logos, images, or sounds in a `/resources/` folder.
These can be loaded directly using standard PySide6 or PyQt6 APIs:

```python
from PySide6.QtGui import QPixmap
pixmap = QPixmap("resources/images/logo.png")
```

If packaging with PyInstaller, remember to include this directory in your `.spec` file.

---

## Best Practices

| Resource Type       | Recommendation                                                              |
| ------------------- | --------------------------------------------------------------------------- |
| **Icons**           | Keep SVGs simple and flat-colored to support dynamic color replacement      |
| **Fonts**           | Use `.ttf` or `.otf` files within `Qss/fonts/`                              |
| **Variables**       | Define additional theme variables in `Other-variables` inside JSON files    |
| **Generated Icons** | Avoid editing `/Qss/icons/[color]/` folders manually                        |
| **JSON Styles**     | Apply themes using `loadJsonStyle()` and `QAppSettings.updateAppSettings()` |
