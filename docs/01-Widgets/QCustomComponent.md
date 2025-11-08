# QCustomComponent

`QCustomComponent` is a versatile container widget designed for nesting other widgets and applying JSON-based styling. It provides a flexible foundation for creating custom UI components with live stylesheet compilation and theme integration.

---

## Overview

- **Container Widget:**  
  Serves as a foundation for nesting and organizing other widgets within a styled container.

- **JSON Styling Support:**  
  Loads and applies styles from JSON configuration files with live compilation capabilities.

- **Theme Integration:**  
  Seamlessly integrates with `QCustomTheme` for consistent theming across the application.

- **File Monitoring:**  
  Supports live QSS file monitoring for real-time style updates during development.

- **Designer Ready:**  
  Provides full Qt Designer integration with custom icon and tooltip.

---

## Constructor

```python
QCustomComponent(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`).

---

## Key Properties

### `jsonStylesheetFilePath` (str)
- **Purpose:**  
  Path to the JSON stylesheet file for styling the component.

- **Getter:**  
  Returns the current JSON file path.

- **Setter:**  
  Updates the JSON file path and reloads the stylesheet.

- **Example:**  
  ```python
  component.jsonStylesheetFilePath = "styles/component.json"
  ```

### `liveCompileStylesheet` (bool)
- **Purpose:**  
  Enables or disables live compilation of the stylesheet.

- **Getter:**  
  Returns `True` if live compilation is enabled.

- **Setter:**  
  Toggles live compilation and starts/stops file monitoring.

- **Example:**  
  ```python
  component.liveCompileStylesheet = True
  ```

### `paintQtDesignerUI` (bool)
- **Purpose:**  
  Controls whether the UI should be rendered in Qt Designer compatible style.

- **Getter:**  
  Returns the current Qt Designer painting state.

- **Setter:**  
  Updates the painting mode and recompiles stylesheet.

- **Example:**  
  ```python
  component.paintQtDesignerUI = True
  ```

---

## Methods

### `compileStylesheet()`
- **Description:**  
  Compiles and applies the stylesheet based on current JSON configuration.

- **Features:**  
  - Updates application settings via `QCustomAppSettings`
  - Starts file monitor if live compilation is enabled
  - Applies Qt Designer specific styling when needed

### `startFileMonitor()`
- **Description:**  
  Initializes the QSS file monitor for live style updates.

- **Behavior:**  
  - Starts monitoring JSON and QSS files for changes
  - Automatically reapplies styles when files are modified
  - Logs monitoring status and errors

### `showEvent(e)`
- **Description:**  
  Handles widget show events and ensures proper styling application.

### `resizeEvent(e)`
- **Description:**  
  Handles widget resize events and reloads JSON styles if configured.

### `paintEvent(event)`
- **Description:**  
  Applies stylesheet during paint events and ensures proper widget rendering.

---

## Usage Example

### Basic Container Setup
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QLabel, QPushButton
from Custom_Widgets.QCustomComponent import QCustomComponent

app = QApplication([])

# Create main component
component = QCustomComponent()

# Set up layout and add child widgets
layout = QVBoxLayout(component)
layout.addWidget(QLabel("Component Title"))
layout.addWidget(QPushButton("Action Button"))

# Configure JSON styling
component.jsonStylesheetFilePath = "json-styles/component.json"
component.liveCompileStylesheet = True

component.show()
app.exec_()
```

### Advanced Styling Configuration
```python
# Create specialized component
class UserProfileComponent(QCustomComponent):
    def __init__(self, user_data):
        super().__init__()
        
        self.user_data = user_data
        self.setup_ui()
        self.apply_styling()
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        
        # Add profile widgets
        self.avatar = QLabel()
        self.name_label = QLabel(self.user_data['name'])
        self.email_label = QLabel(self.user_data['email'])
        
        layout.addWidget(self.avatar)
        layout.addWidget(self.name_label)
        layout.addWidget(self.email_label)
    
    def apply_styling(self):
        # Use component-specific JSON styling
        self.jsonStylesheetFilePath = "styles/user_profile.json"
        self.liveCompileStylesheet = True

# Usage
profile = UserProfileComponent({
    'name': 'John Doe',
    'email': 'john@example.com'
})
```

### JSON Styling Integration
```json
{
  "QCustomComponent": [
    {
      "name": "userProfileComponent",
      "style": {
        "background-color": "#f8f9fa",
        "border": "1px solid #dee2e6",
        "border-radius": "8px",
        "padding": "15px"
      }
    }
  ]
}
```

### Dynamic Theme Switching
```python
class ThemedComponent(QCustomComponent):
    def __init__(self):
        super().__init__()
        
        # Connect to theme changes
        self.themeEngine.onThemeChanged.connect(self.on_theme_changed)
        
    def on_theme_changed(self):
        # Reload stylesheet when theme changes
        if self.jsonStylesheetFilePath:
            loadJsonStyle(self, self, jsonFiles={self.jsonStylesheetFilePath})
```

---

## Design Features

### Container Architecture
- **Flexible Layout:** Serves as a generic container for any widget hierarchy
- **Nested Support:** Can contain other custom components for complex layouts
- **Size Management:** Automatic adjustment to content with proper event handling

### Styling System
- **JSON-Driven:** Complete styling through external JSON configuration
- **CSS Compatible:** Supports standard QSS/CSS properties
- **Theme Variables:** Integrates with application theme variables
- **Live Updates:** Real-time style application during development

### Integration Capabilities
- **Parent Awareness:** Automatically detects and uses main window theme engine
- **Shared Data:** Utilizes shared data system for cross-component communication
- **Event Propagation:** Proper handling of show, resize, and paint events

---

## Additional Notes

- **Performance:**  
  Efficient styling system with minimal overhead during paint events.

- **Development:**  
  Live file monitoring greatly accelerates styling workflow.

- **Compatibility:**  
  Works seamlessly with all other custom widgets in the library.

- **Extensibility:**  
  Designed to be subclassed for specialized component types.

- **Documentation:**  
  Comprehensive logging support for debugging styling issues.

---

The `QCustomComponent` is ideal for creating reusable UI components, complex widget containers, themed sections, and any scenario where you need a structured, stylable container with JSON-based configuration and live development support.