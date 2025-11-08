## 🎨 Styling Guide

This guide explains how to **customize the visual appearance** of your PyQt/PySide app using the built-in theming engine powered by `QCustomTheme`, QSS (Qt Style Sheets), and dynamic SCSS variables.

---

## 🧱 Overview

Styling in your Custom Widgets framework is:

* Modular (`.scss` based)
* Theme-aware (`_variables.scss`)
* Auto-compiled (`main.scss` → `.qss`)
* Designer and developer-friendly

---

## 📁 Styling Structure

Your project uses the following style-related files:

```
/Qss/
├── scss/
│   ├── _variables.scss     # Auto-generated theme variables (DO NOT EDIT)
│   ├── _styles.scss        # Core widget styling (read-only)
│   ├── defaultStyle.scss   # 🔧 Your app's custom overrides
│   └── main.scss           # SCSS entry point
├── icons/                  # Auto-generated icons for each theme color
├── fonts/                  # Optional custom fonts (e.g., Rosario)
```

---

## 🔁 How It Works

1. A theme is selected via `QSettings` or a widget like `QCustomThemeList`.
2. The app reads variables from your JSON theme definition (colors, radius, etc.).
3. These are written to `_variables.scss`.
4. `main.scss` compiles to a `.qss` file using `qtsass`.
5. Styles are applied to the running app.

---

## 🧩 Theme Variables (`_variables.scss`)

Variables like the following are auto-injected based on your JSON `CustomTheme`:

```scss
$COLOR_BACKGROUND_1: #16191d;
$COLOR_TEXT_1: #ffffff;
$COLOR_ACCENT_1: #03C3C3;

$CARD_RADIUS: 12px;
$FOOTER_BG: #0f0f0f;
```

> ❗ Do not manually edit `_variables.scss`. Instead, define new variables in your theme JSON under `"Other-variables"`.

---

## ✏️ `defaultStyle.scss` – Your Playground

This is the file where you write your own styles.

```scss
// Sample override
QFrame#card {
  background-color: $COLOR_BACKGROUND_2;
  border-radius: $CARD_RADIUS;
}
```

💡 You can reference any variable from `_variables.scss` in here.

---

## ✅ Styling Best Practices

| Goal                          | Do this...                                                    |
| ----------------------------- | ------------------------------------------------------------- |
| Change base background color  | Update `Background-color` in your JSON theme                  |
| Add a border radius           | Use `$CARD_RADIUS` in `defaultStyle.scss`                     |
| Make widget styles consistent | Use SCSS variables instead of hardcoded HEX or px             |
| Test a new theme quickly      | Modify the theme in JSON and relaunch or call update manually |
| Prevent re-styling            | Use `objectName` (e.g., `QPushButton#myBtn`) for specificity  |

---

## 🧪 Live Testing Tips

You can force recompile and apply styles manually:

```python
from Custom_Widgets.QCustomTheme import QCustomTheme
theme = QCustomTheme()
theme.applyCompiledSass()
```

Or refresh styles with:

```python
from Custom_Widgets.QAppSettings import QAppSettings
QAppSettings.updateAppSettings(self)
```

---

## 🔧 Icon Styling (Optional)

Icons are automatically recolored using the theme’s `Icons-color` or `Accent-color`.
You can override them in your QSS using styles like:

```scss
QPushButton#refreshBtn {
  qproperty-icon: url(':/icons/03C3C3/refresh.png');
}
```

---

## 💬 Need More?

Refer to the following:

* [Appendix: QSS Guide](/Appendices/qss-guide)
* [Appendix: JSON Stylesheet](/Appendices/json-styles)
* [QCustomTheme Engine](/Theming/QCustomTheme)

