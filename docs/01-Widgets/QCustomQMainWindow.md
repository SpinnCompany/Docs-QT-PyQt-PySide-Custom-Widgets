# QcustomQmainwindow

`QCustomQMainWindow` is a custom subclass of Qt’s [`QMainWindow`](https://doc.qt.io/qt-5/qmainwindow.html) designed to extend the standard main window with enhanced theming and styling capabilities. It is part of the `Custom_Widgets` module and provides a framework for applying JSON-based stylesheets, live style compilation, and dynamic theme management through a custom theme engine.

---

## Overview

- **Dynamic Styling:**  
  Supports live compilation of stylesheets based on a JSON configuration file. Changes in properties automatically update the JSON file via the `updateJson` helper and recompile the widget’s stylesheet.

- **Custom Themes:**  
  Integrates with `QCustomTheme` to manage and refresh themes. The current theme is kept in sync with the widget’s internal state, allowing for dynamic theme changes.

- **UI Customization:**  
  Allows configuration of several UI components such as:
  - Frameless windows.
  - Translucent backgrounds.
  - Custom navigation buttons (minimize, close, restore).
  - Custom title bars, window movement areas, and resize grips.
  - Shadow effects and window border radius for rounded corners.

- **Designer Support:**  
  Provides an XML description (`WIDGET_DOM_XML`) and icon (`WIDGET_ICON`) for integration with Qt Designer.

---

## Constructor

```python
QCustomQMainWindow(
    parent=None,
    frameless: bool = False,
    translucentBg: bool = False,
    minimizeBtn: QPushButton = None,
    closeBtn: QPushButton = None,
    restoreBtn: QPushButton = None,
    restoreBtnNormalIcon: QIcon = None,
    restoreBtnMaximizedIcon: QIcon = None,
    tittleBar: QWidget | QFrame = None,
    moveWindow: QWidget | QFrame = None,
    sizeGrip: QWidget | QFrame = None
)
```

- **parent:**  
  The parent widget (defaults to `None`).

- **frameless:**  
  If set to `True`, the window is displayed without a standard frame.

- **translucentBg:**  
  If `True`, the window background becomes translucent.

- **minimizeBtn, closeBtn, restoreBtn:**  
  Custom `QPushButton` instances used to control window minimization, closing, and restoration.

- **restoreBtnNormalIcon, restoreBtnMaximizedIcon:**  
  Icons used for the restore button in its normal and maximized states, respectively.

- **tittleBar:**  
  A custom widget (or frame) acting as the title bar. *(Note: there is a typographical error in the parameter name “tittleBar” which remains in the API.)*

- **moveWindow:**  
  A widget (or frame) that can be used to drag and move the window.

- **sizeGrip:**  
  A widget (or frame) used as a resize handle for the window.

Upon instantiation, the widget loads its initial style settings from the default JSON file (`json-styles/style.json`) and compiles its stylesheet accordingly.

---

## Key Properties

### `appTheme` (str)

- **Purpose:**  
  Represents the current theme of the application.

- **Getter:**  
  Returns the current theme name.

- **Setter:**  
  Changes the theme if the new value is valid. This triggers an update in the custom theme engine (`QCustomTheme`) and recompiles the stylesheet.

- **Example:**  
  ```python
  window.appTheme = "DarkTheme"
  ```

---

### `liveCompileStylesheet` (bool)

- **Purpose:**  
  Determines whether the stylesheet should be recompiled live whenever a change is made.

- **Getter:**  
  Returns `True` if live compilation is enabled.

- **Setter:**  
  When enabled, updates the JSON configuration (`"LiveCompileQss"`) and recompiles the stylesheet.

- **Example:**  
  ```python
  window.liveCompileStylesheet = True
  ```

---

### `jsonStylesheetFilePath` (str)

- **Purpose:**  
  Specifies the file path for the JSON stylesheet.

- **Getter:**  
  Returns the current JSON file path.

- **Setter:**  
  Updates the JSON file path, reloads the style settings, and recompiles the stylesheet.

- **Example:**  
  ```python
  window.jsonStylesheetFilePath = "path/to/custom-style.json"
  ```

---

### `paintQtDesignerUI` (bool)

- **Purpose:**  
  Controls whether the UI should be rendered in a style compatible with Qt Designer.

- **Setter:**  
  Changing this value triggers a stylesheet recompilation.

- **Example:**  
  ```python
  window.paintQtDesignerUI = True
  ```

---

### `frameless` (bool)

- **Purpose:**  
  Enables or disables a frameless window.

- **Setter:**  
  Updates the internal state and reflects the change in the JSON configuration under `"QMainWindow.frameless"`.

- **Example:**  
  ```python
  window.frameless = True
  ```

---

### `translucentBg` (bool)

- **Purpose:**  
  Enables a translucent background for the window.

- **Setter:**  
  Updates the JSON configuration key `"QMainWindow.transluscentBg"`.

- **Example:**  
  ```python
  window.translucentBg = True
  ```

---

### Navigation Buttons & Icons

- **`minimizeBtn` (str):**  
  Identifier for the minimize button. Updates `"QMainWindow.navigation.minimize"`.

- **`closeBtn` (str):**  
  Identifier for the close button. Updates `"QMainWindow.navigation.close"`.

- **`restoreBtn` (str):**  
  Identifier for the restore button. Updates `"QMainWindow.navigation.restore.buttonName"`.

- **`restoreBtnNormalIcon` (QIcon):**  
  Icon for the restore button in normal state. Updates `"QMainWindow.navigation.restore.normalIcon"`.

- **`restoreBtnMaximizedIcon` (QIcon):**  
  Icon for the restore button in maximized state. Updates `"QMainWindow.navigation.restore.maximizedIcon"`.

*Usage Example:*
```python
window.minimizeBtn = "minimizeButton"
window.closeBtn = "closeButton"
window.restoreBtn = "restoreButton"
window.restoreBtnNormalIcon = QIcon("icons/restore_normal.png")
window.restoreBtnMaximizedIcon = QIcon("icons/restore_maximized.png")
```

---

### Window Components

- **`titleBar` (str):**  
  Identifier for the title bar widget. *(Note: The JSON key uses the misspelled `"tittleBar"`.)*

- **`moveWindow` (str):**  
  Identifier for the widget used to drag/move the window.

- **`sizeGrip` (str):**  
  Identifier for the resize grip widget.

*Usage Example:*
```python
window.titleBar = "customTitleBar"
window.moveWindow = "dragArea"
window.sizeGrip = "resizeGrip"
```

---

### Shadow and Border Properties

- **`shadowColor` (QColor):**  
  Color of the window shadow. Updates `"QMainWindow.shadow.color"`.

- **`shadowBlurRadius` (int):**  
  Blur radius of the shadow. Updates `"QMainWindow.shadow.blurRadius"`.

- **`shadowXOffset` (int):**  
  Horizontal offset for the shadow. Updates `"QMainWindow.shadow.xOffset"`.

- **`shadowYOffset` (int):**  
  Vertical offset for the shadow. Updates `"QMainWindow.shadow.yOffset"`.

- **`windowBorderRadius` (int):**  
  Border radius for rounded corners. Updates `"QMainWindow.borderRadius"`.

*Usage Example:*
```python
window.shadowColor = QColor("#000000")
window.shadowBlurRadius = 10
window.shadowXOffset = 5
window.shadowYOffset = 5
window.windowBorderRadius = 15
```

---

## Methods

### `compileStylesheet()`

- **Description:**  
  Compiles and applies the stylesheet based on the current JSON style file and theme settings.  
  - If live compilation is enabled, it updates the application settings via `QCustomAppSettings`.
  - Reinitializes the theme engine (`QCustomTheme`) and synchronizes the theme.
  - Initiates a file monitor (`QSsFileMonitor`) for live updates if not already running.

- **Usage:**  
  This method is typically called automatically when related properties are changed.

---

### `isValidTheme(value: str) -> bool`

- **Description:**  
  Checks whether a given theme name is valid by comparing it against the available themes.

- **Parameters:**  
  - `value`: The theme name to validate.

- **Returns:**  
  `True` if the theme is valid; otherwise, `False`.

- **Usage:**  
  Used internally to ensure that only valid themes are applied.

---

### `paintEvent(event: QPaintEvent)`

- **Description:**  
  Custom paint event for `QCustomQMainWindow`.  
  - Uses `QStyleOption` and `QPainter` to render the widget according to its current style.
  - Checks if the current theme differs from the one in the theme engine. If so, it synchronizes and refreshes the theme, then recompiles the stylesheet if necessary.

- **Usage:**  
  Automatically invoked during the widget’s paint cycle.

---

## Usage Example

```python
from qtpy.QtWidgets import QApplication, QPushButton
from qtpy.QtGui import QIcon
from Custom_Widgets.QCustomQMainWindow import QCustomQMainWindow

app = QApplication([])

# Create a custom main window instance with some custom parameters
window = QCustomQMainWindow(
    frameless=True,
    translucentBg=True,
    minimizeBtn=QPushButton("Minimize"),
    closeBtn=QPushButton("Close")
)

# Set a custom theme
window.appTheme = "DarkTheme"

# Enable live stylesheet compilation
window.liveCompileStylesheet = True

# Optionally, configure additional UI elements
window.titleBar = "customTitleBar"
window.moveWindow = "dragArea"
window.sizeGrip = "resizeGrip"
window.shadowColor = QColor("#444444")
window.shadowBlurRadius = 15
window.windowBorderRadius = 10

# Show the window
window.show()
app.exec_()
```

---

## Additional Notes

- **Designer Integration:**  
  The class attributes `WIDGET_ICON`, `WIDGET_TOOLTIP`, and `WIDGET_DOM_XML` provide information needed for Qt Designer integration.

- **JSON Synchronization:**  
  Changing any of the exposed properties updates the corresponding entry in the JSON stylesheet file through the `updateJson` helper function. This ensures that style changes are persistently stored and can be reloaded.

- **Live File Monitoring:**  
  If live compilation is enabled, the widget starts a file monitor to listen for changes in the JSON stylesheet, ensuring that any modifications are reflected immediately in the UI.

---


![Custom Qt Progress Bar](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/blob/main/images/19.png?raw=true)

# Customize Your QMainWindow

QT-PyQt-PySide-Custom-Widgets offers an easy way to add a custom title bar to application main window.


This is done through "style.json" file or if you have `Custom_Widgets plugins` loaded to your QtDesigner app you can create `QCustomQMainWindow` form then use designer properties to customize your main window. 

Below is the documentation describing the JSON configuration structure used to load and customize the properties of `QCustomQMainWindow`. This JSON-based configuration enables users to externally edit styling, behavior, and widget bindings, which are applied to the main window at startup.

---

### JSON Configuration Structure

The JSON file is expected to follow a hierarchical structure under the `"QMainWindow"` key, containing all settings necessary for customizing the main window. The structure is organized into several sections:

#### Core Window Settings

- **`tittle`** (`string`):  
  Sets the window title.

- **`icon`** (`string`):  
  Path to the window icon.

- **`frameless`** (`boolean`):  
  If `true`, the window is displayed without the standard title bar and frame.

- **`transluscentBg`** (`boolean`):  
  If `true`, the window background becomes translucent (transparent).

- **`sizeGrip`** (`string`):  
  A widget path reference for a size grip. When provided, a `QSizeGrip` is attached to the corresponding widget to allow for window resizing.

- **`borderRadius`** (`integer`):  
  Defines the radius of the window's corners for rounded borders.

#### Shadow Settings

Located within the `"shadow"` object, these properties control the appearance of the window shadow:

- **`color`** (`string`):  
  The shadow color, specified as a hex code (e.g., `"#000000"`).

- **`blurRadius`** (`integer`):  
  Determines the blur radius of the shadow effect.

- **`xOffset`** (`integer`):  
  Horizontal offset of the shadow.

- **`yOffset`** (`integer`):  
  Vertical offset of the shadow.

#### Navigation Settings

Under the `"navigation"` key, several widget paths and icons are defined for the window’s control elements:

- **`minimize`** (`string`):  
  Widget path for the minimize button. When found, it is connected to the action to minimize the window.

- **`close`** (`string`):  
  Widget path for the close button, connected to the window close action.

- **`restore`** (`object`):  
  Contains settings for the restore (maximize/restore) functionality:
  
  - **`buttonName`** (`string`):  
    Widget path for the restore button.
  
  - **`normalIcon`** (`string`):  
    Path to the icon used when the window is in its normal state.
  
  - **`maximizedIcon`** (`string`):  
    Path to the icon used when the window is maximized.

- **`moveWindow`** (`string`):  
  Widget path for an area (typically a header or title bar segment) that, when interacted with, allows the user to drag and move the window.

- **`tittleBar`** (`string`):  
  Widget path for the title bar element. Note the key name uses a common misspelling ("tittleBar"). This widget can be used to handle additional events, such as toggling the window size on double-click.

---

### Example JSON

```json
{
  "QMainWindow": {
    "tittle": "My Custom Window",
    "icon": "icons/my_icon.png",
    "frameless": true,
    "transluscentBg": true,
    "sizeGrip": "ui.sizeGripWidget",
    "borderRadius": 12,
    "shadow": {
      "color": "#222222",
      "blurRadius": 20,
      "xOffset": 3,
      "yOffset": 3
    },
    "navigation": {
      "minimize": "ui.minimizeButton",
      "close": "ui.closeButton",
      "restore": {
        "buttonName": "ui.restoreButton",
        "normalIcon": "icons/restore_normal.png",
        "maximizedIcon": "icons/restore_maximized.png"
      },
      "moveWindow": "ui.moveWindowArea",
      "tittleBar": "ui.titleBar"
    }
  }
}
```

---

### Operational Details

- **External Editing & Live Compilation:**  
  Users can modify the JSON (and associated QSS files) externally. If live compilation is enabled, any changes in these files are automatically loaded and applied to the `QCustomQMainWindow`, allowing for rapid prototyping and customization without needing to restart the application.

- **Widget Path Resolution:**  
  The string values for widget paths (e.g., `"ui.sizeGripWidget"`, `"ui.minimizeButton"`) are resolved using a helper mechanism that searches for these widgets within the application’s UI hierarchy. If a widget is not found (and the application is not running in Qt Designer mode), an error is logged to help with debugging.

- **Error Handling:**  
  During the loading process, if any widget referenced in the JSON is missing, exceptions are caught and logged. This ensures that configuration issues do not crash the application but instead provide meaningful feedback for correction.

- **Special Considerations:**  
  - The use of keys like `"tittle"` and `"transluscentBg"` reflects legacy naming conventions in the JSON structure.
  - The restore button icons undergo additional processing (via URL prefix replacement) to ensure they reference the correct resource paths.

---

## Loading MainWindow with JSON/QSS Styling

This example demonstrates how to initialize your custom main window—built using the **Custom_Widgets** library—and apply external JSON/QSS styling. The process involves:

1. **Importing Dependencies:**  
   Import the generated UI file, custom widget modules, and application settings.

2. **Instantiating the MainWindow:**  
   The `MainWindow` class sets up the UI (via `Ui_CustomMainWindow` or `Ui_MainWindow` etc) and then applies the JSON stylesheet by calling `loadJsonStyle()`. You can specify one or more JSON files (here, `"json-styles/style.json"`) that define your styles and properties.

3. **Showing the Window:**  
   Once the UI is set up and styled, the window is displayed.

4. **Updating App Settings:**  
   After showing the window, `QAppSettings.updateAppSettings(self)` is called. This process runs on a separate thread to prevent UI unresponsiveness, updating application settings (such as icon generation) loaded from the JSON stylesheet.

5. **Initializing Additional GUI Functions(Optional):**  
   The `GuiFunctions` class is instantiated to attach extra functionality to the UI.

### Main File Example

```python
import os
import sys

# IMPORT GUI FILE
from src.ui_QCustomQMainWindow import *
from src.GuiFunctions import GuiFunctions

# IMPORT Custom widgets
from Custom_Widgets import *
from Custom_Widgets.QAppSettings import QAppSettings

## MAIN WINDOW CLASS
class MainWindow(QMainWindow):
    def __init__(self, parent=None):
        QMainWindow.__init__(self)
        self.ui = Ui_CustomMainWindow()
        self.ui.setupUi(self)

        ########################################################################
        # APPLY JSON STYLESHEET
        ########################################################################
        # Use this if you only have one JSON file named "style.json" inside the root directory,
        # "json" directory or "jsonstyles" folder.
        # loadJsonStyle(self, self.ui) 

        # Use this to specify your JSON file(s) path/name:
        loadJsonStyle(self, self.ui, jsonFiles = {
            "json-styles/style.json"
        })


        #######################################################################
        # SHOW WINDOW
        #######################################################################
        self.show()

        ########################################################################
        # UPDATE APP SETTINGS LOADED FROM JSON STYLESHEET 
        # (This process runs on a separate thread to prevent UI unresponsiveness when generating new icons.)
        ########################################################################
        QAppSettings.updateAppSettings(self)

        # Initialize additional GUI functions.
        GuiFunctions(self)

## EXECUTE APP
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())
```

---

### How It Works

- **UI & Custom Widgets:**  
  The main window UI is defined in `Ui_CustomQMainWindow` (imported from `src.ui_QCustomQMainWindow`). Custom styling and behavior are added via the **Custom_Widgets** library.

- **JSON/QSS Styling:**  
  `loadJsonStyle()` loads styling details from the specified JSON file (e.g., `"json-styles/style.json"`), allowing you to externally edit styles and properties (like title bar, icons, shadows, etc.). If live compilation is enabled, any changes to the JSON or QSS files are automatically applied.

- **Application Settings Update:**  
  `QAppSettings.updateAppSettings(self)` updates settings (such as generating new icons) after the window is shown, ensuring the UI remains responsive by handling these tasks in a separate thread.

- **Extensibility:**  
  The `GuiFunctions` class is used to initialize any additional functionality needed for your application, keeping the main window code clean and modular.
