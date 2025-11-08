# QCustomComponentContainer

`QCustomComponentContainer` is a dynamic UI loader widget that can load and display external UI classes from Python files at runtime. It provides a flexible way to create modular, dynamically-loaded user interfaces.

---

## Overview

- **Dynamic UI Loading:**  
  Loads and displays UI classes from external Python files without requiring application restart.

- **Runtime Component Switching:**  
  Allows changing displayed components dynamically by updating file paths and class names.

- **Designer Integration:**  
  Provides full Qt Designer support with preview capabilities for visual development.

- **Modular Architecture:**  
  Enables creating reusable UI components that can be loaded on demand.

- **Seamless Integration:**  
  Works with the custom widgets ecosystem including theming and styling.

---

## Constructor

```python
QCustomComponentContainer(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`).

---

## Key Properties

### `filePath` (str)
- **Purpose:**  
  Path to the Python file containing the UI class to be loaded.

- **Getter:**  
  Returns the current file path.

- **Setter:**  
  Updates the file path and automatically reloads the component.

- **Example:**  
  ```python
  container.filePath = "components/user_profile.py"
  ```

### `formClassName` (str)
- **Purpose:**  
  Name of the form class within the external file to instantiate.

- **Getter:**  
  Returns the current form class name.

- **Setter:**  
  Updates the form class name and reloads the component.

- **Example:**  
  ```python
  container.formClassName = "Ui_UserProfile"
  ```

### `previewComponent` (bool)
- **Purpose:**  
  Enables or disables designer preview mode for visual development.

- **Getter:**  
  Returns the current preview state.

- **Setter:**  
  Toggles preview mode and refreshes the component display.

- **Example:**  
  ```python
  container.previewComponent = True
  ```

---

## Methods

### `_refresh_component()`
- **Description:**  
  Internal method that clears existing content and reloads the specified component.

- **Behavior:**  
  - Resets layout and clears existing widgets
  - Creates new component loader instance
  - Loads the specified form class from file path
  - Sets up accessibility attributes (`form`, `shownForm`, `component`)

### `showEvent(e)`
- **Description:**  
  Handles widget show events and ensures proper sizing.

### `paintEvent(e)`
- **Description:**  
  Handles custom painting with anti-aliased rendering for smooth appearance.

---

## Usage Example

### Basic Dynamic Loading
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget
from Custom_Widgets.QCustomComponentContainer import QCustomComponentContainer

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create component container
container = QCustomComponentContainer()

# Configure to load external UI component
container.filePath = "ui_components/dashboard_widget.py"
container.formClassName = "Ui_DashboardWidget"

layout.addWidget(container)
window.show()

app.exec_()
```

### Multiple Component Management
```python
class DynamicUIManager(QWidget):
    def __init__(self):
        super().__init__()
        self.container = QCustomComponentContainer()
        self.setup_navigation()
    
    def setup_navigation(self):
        # Create navigation buttons
        self.profile_btn = QPushButton("Profile")
        self.settings_btn = QPushButton("Settings")
        self.dashboard_btn = QPushButton("Dashboard")
        
        # Connect buttons to load different components
        self.profile_btn.clicked.connect(self.load_profile)
        self.settings_btn.clicked.connect(self.load_settings)
        self.dashboard_btn.clicked.connect(self.load_dashboard)
    
    def load_profile(self):
        self.container.filePath = "components/profile.py"
        self.container.formClassName = "Ui_ProfileComponent"
    
    def load_settings(self):
        self.container.filePath = "components/settings.py" 
        self.container.formClassName = "Ui_SettingsPanel"
    
    def load_dashboard(self):
        self.container.filePath = "components/dashboard.py"
        self.container.formClassName = "Ui_Dashboard"
```

### External UI Component Structure
**components/user_profile.py:**
```python
from qtpy.QtWidgets import QWidget, QVBoxLayout, QLabel, QLineEdit, QPushButton

class Ui_UserProfile(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setup_ui()
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        
        # Profile form elements
        self.name_label = QLabel("Name:")
        self.name_input = QLineEdit()
        self.email_label = QLabel("Email:") 
        self.email_input = QLineEdit()
        self.save_btn = QPushButton("Save Profile")
        
        layout.addWidget(self.name_label)
        layout.addWidget(self.name_input)
        layout.addWidget(self.email_label)
        layout.addWidget(self.email_input) 
        layout.addWidget(self.save_btn)
        
        # Connect signals
        self.save_btn.clicked.connect(self.save_profile)
    
    def save_profile(self):
        name = self.name_input.text()
        email = self.email_input.text()
        print(f"Saving profile: {name}, {email}")
```

### Integration with JSON Styling
```python
# Component container with themed styling
container = QCustomComponentContainer()
container.filePath = "themed_components/metrics_card.py"
container.formClassName = "Ui_MetricsCard"

# The loaded component will automatically inherit theme variables
# and can be styled via JSON configuration
```

### Designer Preview Mode
```python
# Enable preview for Qt Designer
container.previewComponent = True

# This allows visual development of components within Qt Designer
# without needing to run the full application
```

---

## Advanced Features

### Dynamic Component Switching
```python
def switch_component(container, component_config):
    """Dynamically switch between different UI components"""
    container.filePath = component_config['file_path']
    container.formClassName = component_config['class_name']
    
# Usage
components = {
    'profile': {
        'file_path': 'components/profile.py',
        'class_name': 'Ui_Profile'
    },
    'settings': {
        'file_path': 'components/settings.py', 
        'class_name': 'Ui_Settings'
    }
}

switch_component(container, components['profile'])
```

### Error Handling and Validation
```python
class RobustComponentContainer(QCustomComponentContainer):
    def _refresh_component(self):
        try:
            super()._refresh_component()
        except FileNotFoundError:
            self.show_error_message("Component file not found")
        except ImportError as e:
            self.show_error_message(f"Import error: {e}")
        except Exception as e:
            self.show_error_message(f"Failed to load component: {e}")
    
    def show_error_message(self, message):
        error_label = QLabel(f"Error: {message}")
        error_label.setStyleSheet("color: red;")
        self.layout().addWidget(error_label)
```

### Component Communication
```python
# Access loaded component for interaction
container = QCustomComponentContainer()
container.filePath = "components/data_grid.py"
container.formClassName = "Ui_DataGrid"

# After loading, access the component
def on_component_loaded():
    if hasattr(container, 'component'):
        data_grid = container.component
        # Interact with the loaded component
        data_grid.load_data(some_dataset)

# Connect to load completion (you may need to implement signals)
```

---

## Design Considerations

### File Structure
```
project/
├── main_app.py
└── components/
    ├── __init__.py
    ├── profile.py          # Ui_Profile class
    ├── settings.py         # Ui_Settings class  
    ├── dashboard.py        # Ui_Dashboard class
    └── data_grid.py        # Ui_DataGrid class
```

### Performance
- **Lazy Loading:** Components are loaded only when needed
- **Memory Management:** Proper cleanup when switching components
- **Caching:** Potential for caching frequently used components

### Development Workflow
1. Develop UI components as separate Python files
2. Use Qt Designer preview during development
3. Load components dynamically in main application
4. Update components without restarting main app

---

## Additional Notes

- **Path Handling:**  
  Automatically normalizes file paths for cross-platform compatibility.

- **Layout Management:**  
  Uses zero-margin vertical layout for seamless component integration.

- **Accessibility:**  
  Provides multiple access points (`form`, `shownForm`, `component`) for flexibility.

- **Error Recovery:**  
  Graceful handling of missing files or invalid class names.

- **Extension Points:**  
  Designed to be subclassed for custom loading behavior.

---

The `QCustomComponentContainer` is ideal for applications requiring modular UI architecture, plugin systems, dynamic dashboard interfaces, and any scenario where UI components need to be loaded and switched at runtime without application restart.