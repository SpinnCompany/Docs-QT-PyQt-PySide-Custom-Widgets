# QSS Guide

The QSS system in **QT-PyQt-PySide-Custom-Widgets** provides a modern, SCSS-style approach to styling PySide/PyQt applications.
It supports:

* Theme-based variable injection
* Automatic compilation via `qtsass`
* Custom SCSS variables through JSON themes
* Organized, override-friendly QSS files

---

## Folder Structure

All QSS-related files are located in the `/Qss/` directory:

```
/Qss/
│
├── icons/                # Icons generated per theme color
├── scss/
│   ├── _variables.scss   # Auto-generated theme variables
│   ├── _styles.scss      # Base framework styles for widgets
│   └── main.scss         # Entry point for SCSS compilation
├── defaultStyle.scss     # Custom overrides (safe to edit)
```

> **Note:** `_variables.scss` and `_styles.scss` are regenerated automatically; do not edit manually.

---

## Workflow

1. Themes are loaded from JSON → colors and variables are generated.
2. `_variables.scss` is updated with theme-specific values.
3. `main.scss` imports the following in order:

   * `_variables.scss` → theme variables
   * `_styles.scss` → framework default styles
   * `defaultStyle.scss` → your custom overrides
4. SCSS is compiled into `generated-files/css/main.css`.
5. The compiled QSS is applied dynamically at runtime.

---

## `_variables.scss` (Auto-Generated)

This file is regenerated each time a theme is applied.
It contains theme-specific variables for colors, sizes, and other styling parameters.

```scss
$COLOR_BACKGROUND_1: #ffffff;
$COLOR_TEXT_1: #000000;
$COLOR_ACCENT_1: #00bcff;
$SIZE_BORDER_RADIUS: 4px;
$BORDER_1: 1px solid $COLOR_BACKGROUND_1;
$RELATIVE_FOLDER: "E:/my_project/";
$CARD_RADIUS: 12px;
$FOOTER_BG: #f0f0f0;
```

> **Warning:** Do not modify this file manually — it will be overwritten by the theme engine.

---

## `defaultStyle.scss` (Safe to Edit)

This file is intended for your application-specific overrides.
You can reference any variable defined in `_variables.scss`.

```scss
* {
  border: none;
  background: transparent;
  color: $COLOR_TEXT_1;
}

#centralwidget {
  background-color: $COLOR_BACKGROUND_1;
}

QProgressBar {
  height: 1px;
  border-width: 1px;

  ::chunk {
    background-color: $COLOR_ACCENT_3;
    border-radius: 5px;
  }
}
```

**Tips:**

* Reset all widgets safely if needed:

```scss
* {
  all: unset;
  background-color: transparent;
}
```

* Maintain theme consistency using `$COLOR_*`, `$CT_*`, and `$CA_*` variables.
* Define additional variables in the JSON theme under `Other-variables`.

---

## Compile Stylesheet Programmatically

You can compile and apply QSS manually at runtime:

```python
from Custom_Widgets.QCustomTheme import QCustomTheme
theme = QCustomTheme()
theme.applyCompiledSass()
```

This forces regeneration of QSS from the current theme and applies it to all widgets.

---

## Example: Custom Card Component

```scss
QFrame#Card {
  background-color: $COLOR_BACKGROUND_3;
  border-radius: $CARD_RADIUS;
  border: 1px solid $COLOR_BACKGROUND_5;
}
```

Use this approach for any custom widget styling.

---

## Recap: File Roles

| File                | Editable? | Purpose                                         |
| ------------------- | --------- | ----------------------------------------------- |
| `_variables.scss`   | No        | Auto-generated theme variables                  |
| `_styles.scss`      | No        | Framework default widget styles                 |
| `main.scss`         | No        | Imports SCSS files in correct compilation order |
| `defaultStyle.scss` | Yes       | Application-specific style overrides            |
