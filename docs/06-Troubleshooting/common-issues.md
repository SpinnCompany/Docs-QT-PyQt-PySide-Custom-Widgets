# Common Issues

Below are the most frequently encountered issues when using **QT-PyQt-PySide-Custom-Widgets**, along with their causes, fixes, and setup recommendations.

---

## 1. `ModuleNotFoundError: No module named 'PySide6'`

**Cause:**
PySide6 or PyQt6 is not installed in your virtual environment.

**Fix:**

```bash
pip install PySide6
# or
pip install PyQt6
```

Ensure your runtime binding (PySide or PyQt) matches the widgets you’re using.

---

## 2. UI Not Updating or Widgets Not Refreshing

**Cause:**
You are modifying the UI from a worker or background thread.

**Fix:**
Update UI elements from the main thread using signals or `QTimer`:

```python
self.update_signal.emit()
```

Never modify Qt widgets directly from threads.

---

## 3. Icons or Resources Not Loading

**Cause:**
Incorrect resource path or uncompiled `.qrc` file.

**Fix:**
Compile resources:

```bash
pyside6-rcc resources.qrc -o resources_rc.py
```

Or use runtime-safe paths:

```python
from pathlib import Path
icon = QIcon(str(Path(__file__).parent / "icons/app.png"))
```

---

## 4. `AttributeError: 'Ui_MainWindow' object has no attribute ...`

**Cause:**
Accessing UI elements before `setupUi()` is called or editing generated `.ui` files manually.

**Fix:**

```python
self.ui = Ui_MainWindow()
self.ui.setupUi(self)
```

Avoid editing auto-generated `.py` files — extend them instead.

---

## 5. Stylesheet Not Applying

**Cause:**
The stylesheet path is incorrect or contains QSS syntax errors.

**Fix:**

```python
with open("style.qss") as f:
    self.setStyleSheet(f.read())
```

Verify that braces and selectors are valid.

---

## 6. Custom Property Not Showing in Qt Designer

**Cause:**
Designer doesn’t auto-detect dynamic Python properties.

**Fix:**
Declare them explicitly:

```python
from PySide6.QtCore import Property

class MyWidget(QWidget):
    def __init__(self):
        super().__init__()
        self._value = 0

    def getValue(self):
        return self._value
    def setValue(self, v):
        self._value = v

    value = Property(int, getValue, setValue)
```

---

## 7. Duplicated Signal Connections

**Cause:**
Signals are connected repeatedly (e.g., during reinitialization).

**Fix:**

```python
try:
    self.button.clicked.disconnect()
except TypeError:
    pass
self.button.clicked.connect(self.on_click)
```

---

## 8. App Crashes or Window Doesn’t Appear

**Cause:**
You forgot to start the event loop.

**Fix:**

```python
app = QApplication(sys.argv)
win = MainWindow()
win.show()
sys.exit(app.exec())
```

---

## 9. Missing Icons After Packaging

**Cause:**
Resource files were excluded from the build.

**Fix (PyInstaller):**

```python
datas=[('path/to/icons/*', 'icons')]
```

Then rebuild:

```bash
pyinstaller app.spec
```

---

## 10. Designer Plugin Not Appearing

**Cause:**
Qt Designer can’t locate your custom widget path.

**Fix:**

```bash
export PYQTDESIGNERPATH=/path/to/QT_PyQt_PySide_Custom_Widgets
```

Restart Qt Designer.

---

# Advanced Issues

These are less common but affect advanced builds, packaging, or deployment setups.

---

## 11. Qt Designer Crashes on Load

**Cause:**
Version mismatch between plugin and Qt Designer.

**Fix:**
Ensure matching Python/Qt versions, or rebuild the plugin:

```bash
python build_plugin.py
```

---

## 12. Segmentation Faults or Random Freezes

**Cause:**
Accessing deleted widgets or UI updates from non-GUI threads.

**Fix:**

* Always use signals for background updates.
* Check widget existence:

  ```python
  if not sip.isdeleted(widget):
      widget.deleteLater()
  ```

---

## 13. Missing Assets After Packaging

**Cause:**
Relative paths fail after PyInstaller builds.

**Fix:**

```python
import sys, os
def resource_path(rel):
    base = getattr(sys, '_MEIPASS', os.path.dirname(__file__))
    return os.path.join(base, rel)
```

---

## 14. `QPixmap: Cannot load image`

**Cause:**
Missing image plugin or bad path.

**Fix:**
Include image format plugins:

```bash
--add-data "<python>/Lib/site-packages/PySide6/plugins/imageformats/*;PySide6/plugins/imageformats"
```

---

## 15. Linux: Missing Fonts or Qt Platform Plugins

**Fix:**

```bash
sudo apt install qt6-base-dev qt6-platform-plugins
export QT_QPA_PLATFORM=xcb
```

---

## 16. macOS: App Fails to Launch After Packaging

**Fix:**

```bash
pyinstaller --onefile --windowed main.py
codesign --deep --force --verify --verbose --sign - dist/YourApp.app
```

---

## 17. Windows: `DLL load failed while importing QtCore`

**Fix:**

```bash
pip uninstall PySide6
pip install PySide6==6.7.2
```

Ensure no leftover DLLs from older installations.

---

## 18. `RuntimeError: Internal C++ object already deleted`

**Cause:**
Accessing an already-deleted widget.

**Fix:**

```python
if not sip.isdeleted(self.widget):
    self.widget.doSomething()
```

---

## 19. `qt.qpa.plugin: Could not load the Qt platform plugin "xcb"`

**Fix:**

```bash
sudo apt install libxcb-xinerama0
export QT_DEBUG_PLUGINS=1
```

---

## 20. Build Fails in Docker or CI/CD

**Cause:**
Missing X11 or GUI dependencies.

**Fix:**

```bash
apt-get update && apt-get install -y \
  libxkbcommon-x11-0 libxcb-xinerama0 libx11-xcb1 libglu1-mesa
```

---

# Recommended Environment Setup

Proper setup ensures that your widgets work consistently across systems and Qt versions.

---

## 1. Create a Virtual Environment

Always isolate your project environment:

```bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

---

## 2. Install Compatible Versions

Use the latest tested combinations:

```bash
pip install PySide6==6.7.2
pip install QT-PyQt-PySide-Custom-Widgets
```

Optional visual libraries:

```bash
pip install cairosvg pillow qt-material
```

---

## 3. Verify Qt Installation

Check your environment:

```bash
python -c "from PySide6.QtWidgets import QApplication; print('Qt working!')"
```

If it fails, reinstall the binding cleanly.

---

## 4. Recommended Directory Structure

Keep consistent project organization:

```
project/
├── app/
│   ├── ui/
│   ├── widgets/
│   ├── qss/
│   ├── json_styles/
│   └── resources/
├── logs/
├── venv/
└── run.py
```

Generate the recommended layout automatically:

```bash
Custom_Widgets --create-project MyApp
```

---

## 5. Cross-Platform Tips

| Platform    | Recommendation                                                           |
| ----------- | ------------------------------------------------------------------------ |
| **Windows** | Use `py -m venv venv` and run apps with `pythonw.exe` for GUI-only mode. |
| **Linux**   | Install `libxcb-xinerama0` and `cairo` if missing.                       |
| **macOS**   | Always run with a GUI session (`pythonw` or `.app` bundle).              |

---

## 6. Testing & Debugging

* Run your app with verbose Qt logging:

  ```bash
  export QT_DEBUG_PLUGINS=1
  ```
* For memory leaks or deleted-object errors, use:

  ```python
  sip.isdeleted(widget)
  ```
* Test both **Designer preview** and **runtime appearance** — styles often differ.

---

## 7. Deployment Checklist

Before packaging or publishing your widget-based app:

* [x] Use **absolute paths** for all resources.
* [x] Include all QSS, JSON, and image files.
* [x] Verify **one Qt binding only** (PyQt *or* PySide).
* [x] Test on clean Python environment before release.
