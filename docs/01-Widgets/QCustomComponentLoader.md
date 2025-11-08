# QCustomComponentLoader

`QCustomComponentLoader` is a dynamic UI component loader that can import and display UI classes from external Python files at runtime. It provides robust loading capabilities with theme integration and designer preview support.

---

## Overview

- **Dynamic UI Import:**  
  Loads UI classes from external Python files and instantiates them dynamically.

- **Theme Integration:**  
  Automatically applies theme icons and styling to loaded components.

- **Designer Preview:**  
  Provides visual feedback and configuration display in Qt Designer.

- **Flexible Loading:**  
  Supports both direct class instances and file-based class discovery.

- **Error Handling:**  
  Comprehensive error handling with detailed traceback information.

---

## Constructor

```python
QCustomComponentLoader(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`).

---

## Key Properties

### `previewComponent` (bool)
- **Purpose:**  
  Enables or disables designer preview mode.

- **Getter:**  
  Returns the current preview state.

- **Setter:**  
  Toggles preview mode and updates the display.

- **Example:**  
  ```python
  loader.previewComponent = True
  ```

---

## Methods

### `loadComponent(formClass=None, formClassName=None, filePath=None)`
- **Description:**  
  Main method to load UI components from various sources.

- **Parameters:**  
  - `formClass`: Direct class reference to instantiate
  - `formClassName`: Name of class to load from file
  - `filePath`: Path to Python file containing UI class

- **Behavior:**  
  - Clears existing UI components
  - Loads specified class or discovers from file
  - Applies theme icons automatically
  - Handles designer mode appropriately

- **Example:**  
  ```python
  # Load from class name and file path
  loader.loadComponent(
      formClassName="Ui_UserProfile",
      filePath="components/profile.py"
  )
  
  # Load direct class reference
  loader.loadComponent(formClass=UserProfileUI)
  ```

### `applyThemeIcons()`
- **Description:**  
  Applies current theme icons to the loaded UI component.

- **Features:**  
  - Automatic module name detection
  - File-based icon application
  - Error handling with traceback
  - Prevents recursive application

### `_refresh_component()`
- **Description:**  
  Internal method to reload the current component configuration.

### `_setup_designer_mode()`
- **Description:**  
  Configures the widget for Qt Designer with informative display.

### `_update_designer_label()`
- **Description:**  
  Updates the designer preview label with current configuration details.

### `_import_class_from_file(file_path, class_name=None)`
- **Description:**  
  Dynamically imports a UI class from a Python file.

- **Parameters:**  
  - `file_path`: Path to Python file
  - `class_name`: Specific class name to import (optional)

- **Returns:**  
  Class object if found, `None` otherwise

- **Behavior:**  
  - Auto-discovers classes starting with "Ui_" prefix
  - Validates file existence
  - Handles import errors gracefully

### `paintEvent(e)`
- **Description:**  
  Handles custom painting and designer mode setup.

---

## Usage Example

### Basic Component Loading
```python
from Custom_Widgets.QCustomComponentLoader import QCustomComponentLoader

# Create loader instance
loader = QCustomComponentLoader()

# Load component from file with auto-class discovery
loader.loadComponent(filePath="ui_components/dashboard.py")

# Load specific class from file
loader.loadComponent(
    formClassName="Ui_SettingsPanel",
    filePath="ui_components/settings.py"
)
```

### Direct Class Loading
```python
from ui_components.profile import Ui_UserProfile

# Load direct class reference
loader.loadComponent(formClass=Ui_UserProfile)

# This avoids file path resolution and imports directly
```

### Dynamic Theme Integration
```python
class ThemedComponentLoader(QCustomComponentLoader):
    def __init__(self):
        super().__init__()
        
        # Monitor theme changes
        self.themeEngine.onThemeChanged.connect(self.on_theme_changed)
    
    def on_theme_changed(self):
        # Reapply icons when theme changes
        if self.ui is not None:
            self.applyThemeIcons()
    
    def load_component_with_theme(self, file_path, class_name):
        """Load component and ensure theme is applied"""
        self.loadComponent(formClassName=class_name, filePath=file_path)
        self.applyThemeIcons()
```

### Error-Resilient Loading
```python
def safe_load_component(loader, file_path, class_name):
    """Safely load component with comprehensive error handling"""
    try:
        loader.loadComponent(
            formClassName=class_name,
            filePath=file_path
        )
        return True
    except FileNotFoundError:
        print(f"Component file not found: {file_path}")
        return False
    except ImportError as e:
        print(f"Import error: {e}")
        return False
    except Exception as e:
        print(f"Unexpected error: {e}")
        print(traceback.format_exc())
        return False

# Usage
success = safe_load_component(
    loader, 
    "components/data_grid.py", 
    "Ui_DataGrid"
)
```

### Component Management System
```python
class ComponentManager:
    def __init__(self):
        self.loader = QCustomComponentLoader()
        self.component_registry = {}
    
    def register_component(self, name, file_path, class_name):
        """Register a component for later loading"""
        self.component_registry[name] = {
            'file_path': file_path,
            'class_name': class_name
        }
    
    def load_component(self, name):
        """Load a registered component by name"""
        if name in self.component_registry:
            config = self.component_registry[name]
            self.loader.loadComponent(
                formClassName=config['class_name'],
                filePath=config['file_path']
            )
            return True
        return False

# Usage
manager = ComponentManager()
manager.register_component(
    'profile', 
    'components/profile.py', 
    'Ui_UserProfile'
)
manager.register_component(
    'settings',
    'components/settings.py',
    'Ui_SettingsPanel'
)

# Switch between components
manager.load_component('profile')
manager.load_component('settings')
```

### External UI Component Structure
**components/profile.py:**
```python
from qtpy.QtWidgets import QWidget, QVBoxLayout, QLabel, QLineEdit, QPushButton

class Ui_UserProfile(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setup_ui()
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        
        self.name_label = QLabel("Name:")
        self.name_input = QLineEdit()
        self.email_label = QLabel("Email:")
        self.email_input = QLineEdit()
        self.save_btn = QPushButton("Save")
        
        layout.addWidget(self.name_label)
        layout.addWidget(self.name_input)
        layout.addWidget(self.email_label)
        layout.addWidget(self.email_input)
        layout.addWidget(self.save_btn)
        
        self.save_btn.clicked.connect(self.save_profile)
    
    def save_profile(self):
        print("Profile saved!")
```

### Designer Integration
```python
# Enable designer preview for visual development
loader.previewComponent = True

# In designer mode, shows configuration details:
# - Loaded class name
# - Source file
# - Visual border indicator
```

---

## Advanced Features

### Auto-Discovery Mechanism
```python
# The loader automatically discovers UI classes with "Ui_" prefix
# File: components/metrics.py
class Ui_MetricsCard(QWidget):
    # Auto-discovered when file is loaded without class name
    pass

class SomeOtherClass:
    # Ignored during auto-discovery
    pass
```

### Theme-Aware Icon Application
```python
# Icons are automatically themed based on:
# - Current theme engine settings
# - UI module name
# - File basename
# - Dynamic theme changes
```

### Memory Management
```python
# Proper cleanup of previous UI components
# - Removes widgets from layout
# - Clears references
# - Prevents memory leaks during component switching
```

---

## Design Considerations

### File Organization
```
project/
├── main_app.py
└── ui_components/
    ├── __init__.py
    ├── profile.py          # Contains Ui_UserProfile
    ├── settings.py         # Contains Ui_SettingsPanel
    ├── dashboard.py        # Contains Ui_Dashboard
    └── metrics.py          # Contains Ui_MetricsCard
```

### Error Handling Strategy
- **File Validation:** Checks file existence before import
- **Class Discovery:** Graceful handling of missing classes
- **Import Errors:** Detailed traceback for debugging
- **Theme Application:** Prevents infinite recursion

### Performance Optimization
- **Lazy Loading:** Components loaded only when needed
- **Theme Caching:** Efficient icon application
- **Layout Management:** Minimal layout recalculation

---

## Additional Notes

- **Path Resolution:**  
  Uses `get_absolute_path()` for robust cross-platform file handling.

- **Theme Synchronization:**  
  Automatically detects theme color changes and reapplies icons.

- **Designer Compatibility:**  
  Provides meaningful visual feedback in Qt Designer.

- **Module Isolation:**  
  Each component loads in its own module namespace.

- **Extension Ready:**  
  Designed for subclassing and custom loading behavior.

---

The `QCustomComponentLoader` is ideal for applications requiring dynamic UI composition, plugin systems, modular interfaces, and any scenario where UI components need to be loaded from external files with full theme integration and designer support.