## `QCustomThemeDarkLightToggle`

A ready-to-use button for toggling between **Light** and **Dark** themes in your application.
Part of the `QCustomTheme` engine.

---

### ✨ Features

* One-click toggle between Light/Dark themes.
* Automatically updates:

  * Theme colors
  * Stylesheet
  * Icons (if enabled)
* Works with both **code** and **Qt Designer** (via plugin).
* Icons and labels adapt to theme state.

---

### 🔧 Usage in Python Code

```python
from Custom_Widgets.QCustomThemeDarkLightToggle import QCustomThemeDarkLightToggle

# Create and add to any layout or widget
theme_toggle = QCustomThemeDarkLightToggle(self)
self.ui.headerLayout.addWidget(theme_toggle)
```

> By default, the button will:
>
> * Display text (`"Dark"` or `"Light"`) based on the **next** theme.
> * Set icon using `lightThemeIcon` or `darkThemeIcon` (if defined).

---

### 🧩 Usage in Qt Designer (RECOMMENDED)

You can also **drag & drop** this button in **Qt Designer** after loading the **Custom Widgets plugin**.

> 📚 **See the plugin setup guide:**
> [How to Load Custom Widgets in Qt Designer](/Advanced/Plugins)

After dropping it into the UI:

* Customize **icon**, **text**, and **behavior** using the property editor.
* Example: set `darkThemeIcon` and `lightThemeIcon` in the property panel.

---

### ⚙️ Available Properties

| Property           | Type    | Description                                           |
| ------------------ | ------- | ----------------------------------------------------- |
| `updateLabelText`  | `bool`  | Whether to show "Dark"/"Light" text (default: `True`) |
| `updateButtonIcon` | `bool`  | Whether to update icon dynamically (default: `True`)  |
| `darkThemeIcon`    | `QIcon` | Icon to display when dark theme is active             |
| `lightThemeIcon`   | `QIcon` | Icon to display when light theme is active            |

---

### 🔄 Behavior

* Clicking the button will:

  * Change the theme using `QCustomTheme().theme = "Light" or "Dark"`.
  * Emit the internal stylesheet/theme refresh via `QAppSettings`.

---

### 💡 Customization Tips

* Set the theme manually via:

  ```python
  from qtpy.QtCore import QSettings
  QSettings().setValue("THEME", "Dark")
  ```

* Icons are updated from the `icons-color` set in your theme JSON.

