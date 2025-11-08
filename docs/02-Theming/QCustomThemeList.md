Here is a complete Docusaurus-style documentation page for your 
## `QCustomThemeList`

A custom `QComboBox` that lists all available themes from the active JSON stylesheet and allows users to **select a theme dynamically**.

Part of the [`QCustomTheme`](./QCustomTheme) system.

---

### ✨ Features

* Populates themes from JSON on startup.
* Emits `themeChanged(str)` when selection changes.
* Auto-applies the selected theme.
* Detects and updates when new themes are added.
* Can be added **via Qt Designer** or **in code**.

---

### 🔧 Usage in Python

```python
from Custom_Widgets.QCustomThemeList import QCustomThemeList

theme_dropdown = QCustomThemeList(self)
layout.addWidget(theme_dropdown)

# Connect signal
theme_dropdown.themeChanged.connect(lambda name: print("Theme selected:", name))
```

---

### 🧩 Usage in Qt Designer

You can **drag and drop** this widget in Qt Designer after installing the [Custom Widgets plugin](/Advanced/Plugins).

#### Properties:

* Pre-filled with all available themes.
* Automatically highlights the current one.

---

### ⚙️ How It Works

* Reads theme names from `QCustomTheme().themes`.
* Automatically sets the current theme when selected.
* Runs `QAppSettings.updateAppSettings()` behind the scenes when needed.
* Uses `QSettings` to remember the theme between sessions.

---

### 📦 Signals

| Signal              | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `themeChanged(str)` | Emitted when the user selects a new theme from the list. |

---

### 🔄 Dynamic Theme Updates

The widget supports **real-time updates** using:

```python
theme_dropdown.check_theme_updates()
```

This re-reads the available themes and refreshes the list if changes are detected.

---

### 🧠 Tips

* Ideal for users who want to browse and apply themes without restarting the app.
* Supports integration with both `QCustomThemeDarkLightToggle` and manual `QSettings` changes.

---

### 🧪 Example Integration

```python
from PySide6.QtWidgets import QMainWindow
from Custom_Widgets import loadJsonStyle
from Custom_Widgets.QAppSettings import QAppSettings
from Custom_Widgets.QCustomThemeList import QCustomThemeList

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        loadJsonStyle(self, self.ui)
        QAppSettings.updateAppSettings(self)

        self.themeSelector = QCustomThemeList(self)
        self.themeSelector.themeChanged.connect(self.on_theme_change)
        self.layout().addWidget(self.themeSelector)

    def on_theme_change(self, name):
        print("Theme changed to:", name)
```

