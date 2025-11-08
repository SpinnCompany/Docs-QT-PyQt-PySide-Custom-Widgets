# Compatibility

This section helps you resolve common **environment, runtime, and compatibility issues** when using **QT-PyQt-PySide-Custom-Widgets** across different Python and Qt versions.

---

### Python and Qt Version Compatibility

| Python Version | PyQt5 | PyQt6 | PySide2 | PySide6 | Status             |
| -------------- | ----- | ----- | ------- | ------- | ------------------ |
| 3.8 – 3.9      | ✅     | ⚠️    | ✅       | ⚠️      | Legacy builds only |
| 3.10 – 3.11    | ✅     | ✅     | ⚠️      | ✅       | Recommended stable |
| 3.12           | ⚠️    | ✅     | ⚠️      | ✅       | Partial support    |
| 3.13 +         | ⚠️    | ✅     | ⚠️      | ⚠️      | Experimental       |

**Tip:** Use **Python 3.10 + with PySide6 ≥ 6.5** or **PyQt6 ≥ 6.5** for best results.
Older bindings may lack modern QSS, blur, and resource-handling features required by newer widgets.

---

### Common Compatibility Errors

#### 1. `ModuleNotFoundError: No module named 'PySide6'`

The required Qt binding is not installed.

**Fix:**

```bash
pip install PySide6
# or
pip install PyQt6
```

Use only **one** binding at a time to prevent runtime conflicts.

---

#### 2. `AttributeError: 'QWidget' object has no attribute 'setGraphicsEffect'`

This occurs when using an outdated or minimal Qt binding (for example, older PyQt5 or PySide2).

**Fix:**
Upgrade to a modern Qt build that supports effects such as shadows and transparency:

```bash
pip install --upgrade PySide6
```

If using PyQt, ensure `PyQt6.QtWidgets.QGraphicsEffect` exists in your version.

---

#### 3. `OSError: no library called "cairo-2" was found`

Some widgets (animated buttons, radial indicators, curved progress bars) require **Cairo** or **CairoSVG** for vector rendering.

**Fix by OS:**

**Windows:**

* Install [GTK Runtime for Windows](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer/releases)
* Or copy `libcairo-2.dll` to a directory listed in your system `PATH`

**Linux (Debian/Ubuntu):**

```bash
sudo apt install libcairo2-dev
```

**macOS:**

```bash
brew install cairo
```

If you cannot install Cairo, disable those widgets or replace them with non-Cairo equivalents.

---

#### 4. Designer Does Not Show Custom Widgets

Qt Designer does not automatically detect Python modules.

**Fix:**

1. Add your module’s path to the Designer environment:

   ```
   site-packages/QT_PyQt_PySide_Custom_Widgets
   ```
2. Verify that the same Python environment is used by Designer.
3. Set `PYTHONPATH` accordingly, for example:

   ```bash
   export PYTHONPATH=/path/to/venv/Lib/site-packages
   ```
4. Restart Qt Designer.

Alternatively, promote a placeholder `QWidget`:

* Right-click the placeholder → *Promote to...*
* Class name: your widget class (e.g., `ModernButton`)
* Header/module: `QT_PyQt_PySide_Custom_Widgets.widgets.modern_button`

---

#### 5. `.ui` Conversion Fails or Imports Missing

You may see:

```
ImportError: cannot import name 'RoundedButton' from 'Custom_Widgets'
```

This happens when `.ui` conversion was done using a default `pyside6-uic` or `pyuic6` call that does not insert custom-widget imports.

**Fix:**
Use the module’s conversion helper:

```bash
Custom_Widgets --convert-ui path/to/file.ui
```

This ensures correct imports and relative paths are generated automatically.

---

#### 6. `TypeError: arguments did not match any overloaded call`

This error means a widget designed for one binding (PyQt vs PySide) is used with the other.

**Fix:**

* Match the Designer and runtime binding.

  * Example: UI created in PySide6 Designer → run with PySide6.
* Delete old `__pycache__` or `ui_*.py` files to remove stale imports.
* Regenerate the UI using the same binding as your runtime.

---

#### 7. `QResource::registerResource: failed`

Occurs when generated resource paths in `.qrc` or `.rcc` files are missing or corrupted.

**Fix:**

* Verify all resource files exist under `generated-files/` or `icons/`.
* Rebuild using:

  ```bash
  Custom_Widgets --build-resources
  ```
* Do not edit `.rcc` files manually; always regenerate through the module tools.

---

#### 8. ImportError: `No module named 'Custom_Widgets'` after packaging

When packaging with PyInstaller, ensure resources and module data files are bundled.

**Fix:**
Add a custom hook:

```python
# hook-QT_PyQt_PySide_Custom_Widgets.py
from PyInstaller.utils.hooks import collect_data_files
datas = collect_data_files('QT_PyQt_PySide_Custom_Widgets')
```

Then rebuild your `.spec` file:

```bash
pyinstaller main.spec
```

---

### Project Structure Compatibility

Newer module versions expect the following layout:

```
project/
├── ui/
├── src/
├── qss/
├── json_styles/
├── generated-files/
├── logs/
└── run.py
```

If missing folders such as `json_styles/` or `generated-files/`, create them via:

```bash
Custom_Widgets --create-project MyApp
```

Then move your `.ui`, `.py`, and assets into their respective directories.
This ensures the module’s loader finds your styles, logs, and compiled resources correctly.

---

### Designer vs Runtime Behavior

Certain widgets differ between Designer preview and runtime execution:

* JSON-based styles load only at runtime.
* QSS themes are injected dynamically when the app starts.
* Dynamic signal/slot connections may not appear in Designer.

**Best Practice:** Always test using the Python runtime instead of relying solely on Designer previews.

---

### PyQt vs PySide Conflicts

Avoid mixing bindings in the same project.

Bad:

```python
from PyQt6.QtWidgets import QApplication
from PySide6.QtWidgets import QWidget
```

Good:

```python
from PySide6.QtWidgets import QApplication, QWidget
# or
from PyQt6.QtWidgets import QApplication, QWidget
```

If you accidentally installed both, uninstall the unused one:

```bash
pip uninstall PyQt6
# or
pip uninstall PySide6
```

---

### Deprecated or Changed APIs

Some older Qt 5 APIs have been replaced in Qt 6:

| Deprecated                            | Replacement                              |
| ------------------------------------- | ---------------------------------------- |
| `QRegExp`                             | `QRegularExpression`                     |
| `Qt.AlignVCenter`                     | `Qt.AlignmentFlag.AlignVCenter`          |
| `QtWidgets.QGraphicsDropShadowEffect` | `QGraphicsEffect` (with shadow subclass) |
| `QDesktopWidget`                      | `QScreen`                                |

Always check the warning messages printed during conversion and adapt accordingly.

---

### Recommended Environment Setup

To create a reliable and isolated environment:

```bash
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

pip install PySide6==6.7.0
pip install QT-PyQt-PySide-Custom-Widgets
```

Optional enhancements:

```bash
pip install cairosvg pillow qt-material
```

If working with Designer integration or live theme compilation, ensure `QT_QPA_PLATFORM_PLUGIN_PATH` is correctly set to your Qt installation’s plugin folder.

---

### Advanced Notes

* **Thread Safety:** All UI updates must occur on the main thread. Use `QThread` or signals to communicate from background tasks.
* **Resource Caching:** The module caches generated QSS and images in `generated-files/` for speed. Delete this folder if style updates are not reflected.
* **Python 3.13:** Some PySide6 builds for 3.13 + may emit SIP warnings. These are safe but indicate the binding is still experimental.
* **Path Handling:** Use `pathlib.Path` and `os.path.join` instead of hardcoded separators when referencing `icons/` or `json_styles/`.
* **Live Theme Reloading:** Enable `"LiveCompileQss": true` in your JSON style to auto-reload QSS without restarting the app.

