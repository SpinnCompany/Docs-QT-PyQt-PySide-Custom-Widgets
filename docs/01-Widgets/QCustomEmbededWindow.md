# QCustomEmbededWindow

`QCustomEmbededWindow` is a customizable embedded window widget that provides floating, draggable window functionality within a parent application. It features smooth animations, theme integration, and flexible content management.

---

## Overview

- **Floating Window System:**  
  Creates draggable, resizable embedded windows within a parent application.

- **Smooth Animations:**  
  Includes fade-in effects, height transitions, and smooth window operations.

- **Theme Integration:**  
  Automatically adapts to application themes with proper shadow and styling.

- **Flexible Content:**  
  Supports both custom widgets and pre-designed forms as window content.

- **Window Controls:**  
  Provides minimize/maximize and close functionality with standard icons.

- **Customizable Appearance:**  
  Configurable borders, headers, and animations.

---

## Constructor

```python
QCustomEmbededWindow(parent, pos=None, title="New window", icon=None, borderRadius=10, headerHeight=25, animationDuration=500, showForm=None, addWidget=None)
```

- **parent:**  
  Parent widget where the embedded window will be displayed.

- **pos:**  
  Initial position as (x, y) tuple. Random position if not specified.

- **title:**  
  Window title text.

- **icon:**  
  QIcon for the window title bar.

- **borderRadius:**  
  Corner radius for rounded window appearance.

- **headerHeight:**  
  Height of the title bar in pixels.

- **animationDuration:**  
  Duration of animations in milliseconds.

- **showForm:**  
  Pre-designed form class to display in the window.

- **addWidget:**  
  Custom widget to add as window content.

---

## Key Properties

### `borderRadius` (int)
- **Purpose:**  
  Controls the corner radius for rounded window appearance.

### `headerHeight` (int)
- **Purpose:**  
  Height of the window title bar.

### `animationDuration` (int)
- **Purpose:**  
  Duration of window animations in milliseconds.

### `content_visible` (bool)
- **Purpose:**  
  Tracks whether the window content is currently visible.

---

## Methods

### `addWidget(widget)`
- **Description:**  
  Adds a custom widget to the window content area.

- **Parameters:**  
  - `widget`: QWidget to add as content.

- **Example:**  
  ```python
  embedded_window.addWidget(custom_widget)
  ```

### `animateHeight(startHeight, endHeight)`
- **Description:**  
  Animates the window height transition.

- **Parameters:**  
  - `startHeight`: Starting height in pixels.
  - `endHeight`: Target height in pixels.

### `showHideContent()`
- **Description:**  
  Toggles the visibility of the window content with animation.

- **Behavior:**  
  - Shows/hides content area
  - Updates minimize/maximize button icon
  - Animates height transition

### `adjustSizeToContent()`
- **Description:**  
  Automatically adjusts window size to fit its content.

### `setShadow()`
- **Description:**  
  Applies a drop shadow effect based on current theme.

### `setTitle(text)`
- **Description:**  
  Sets the window title text.

- **Parameters:**  
  - `text`: New title string.

### `title()`
- **Description:**  
  Returns the current window title.

- **Returns:**  
  Current title string.

### `setControlsVisible(b)`
- **Description:**  
  Shows or hides the window control buttons.

- **Parameters:**  
  - `b`: Boolean to show/hide controls.

---

## Signals

### `closed()`
- **Description:**  
  Emitted when the window is closed via the close button.

- **Usage:**  
  Connect to this signal to handle window closure.

- **Example:**  
  ```python
  embedded_window.closed.connect(self.on_window_closed)
  ```

---

## Usage Example

### Basic Embedded Window
```python
from qtpy.QtWidgets import QApplication, QMainWindow, QLabel, QVBoxLayout
from Custom_Widgets.QCustomEmbededWindow import QCustomEmbededWindow

app = QApplication([])
main_window = QMainWindow()
main_window.setGeometry(100, 100, 800, 600)

# Create embedded window
embedded_win = QCustomEmbededWindow(
    parent=main_window,
    title="Information Panel",
    borderRadius=8,
    headerHeight=30
)

# Add content
content_label = QLabel("This is embedded window content")
embedded_win.addWidget(content_label)

main_window.show()
app.exec_()
```

### With Pre-Designed Form
```python
from ui_forms.profile_form import Ui_ProfileForm

# Create window with form
profile_window = QCustomEmbededWindow(
    parent=main_window,
    title="User Profile",
    showForm=Ui_ProfileForm,
    animationDuration=300
)

# The form is automatically loaded and themed
```

### Multiple Windows Management
```python
class WindowManager:
    def __init__(self, parent):
        self.parent = parent
        self.windows = []
    
    def create_window(self, title, content_widget=None, form_class=None):
        """Create a new embedded window"""
        window = QCustomEmbededWindow(
            parent=self.parent,
            title=title,
            showForm=form_class,
            addWidget=content_widget
        )
        
        # Connect close signal
        window.closed.connect(lambda: self.remove_window(window))
        
        self.windows.append(window)
        return window
    
    def remove_window(self, window):
        """Remove window from management"""
        if window in self.windows:
            self.windows.remove(window)
            window.deleteLater()

# Usage
manager = WindowManager(main_window)
notes_window = manager.create_window("Notes", notes_widget)
settings_window = manager.create_window("Settings", form_class=Ui_Settings)
```

### Custom Styled Window
```python
# Create a themed embedded window
styled_window = QCustomEmbededWindow(
    parent=main_window,
    title="Custom Styled Window",
    borderRadius=15,
    headerHeight=35,
    animationDuration=400
)

# Apply custom styling
styled_window.setStyleSheet("""
    QCustomEmbededWindow {
        background-color: #2b2b2b;
        border: 1px solid #444;
    }
    #header {
        background-color: #404040;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    #content-area {
        background-color: #2b2b2b;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
""")
```

### Interactive Content
```python
class InteractiveEmbeddedWindow(QCustomEmbededWindow):
    def __init__(self, parent, data):
        super().__init__(parent, title="Data Viewer")
        
        self.data = data
        self.setup_content()
        self.connect_signals()
    
    def setup_content(self):
        # Create interactive content
        self.data_label = QLabel(str(self.data))
        self.refresh_btn = QPushButton("Refresh")
        self.close_btn = QPushButton("Close")
        
        layout = QVBoxLayout()
        layout.addWidget(self.data_label)
        layout.addWidget(self.refresh_btn)
        layout.addWidget(self.close_btn)
        
        content_widget = QWidget()
        content_widget.setLayout(layout)
        self.addWidget(content_widget)
    
    def connect_signals(self):
        self.refresh_btn.clicked.connect(self.refresh_data)
        self.close_btn.clicked.connect(self.close)
    
    def refresh_data(self):
        # Update content
        self.data_label.setText("Data refreshed at: " + str(datetime.now()))

# Usage
data_window = InteractiveEmbededWindow(main_window, initial_data)
```

### Dynamic Window Positioning
```python
def create_staggered_windows(parent, count=3):
    """Create multiple windows with staggered positioning"""
    windows = []
    base_x, base_y = 50, 50
    offset = 30
    
    for i in range(count):
        window = QCustomEmbededWindow(
            parent=parent,
            pos=(base_x + i * offset, base_y + i * offset),
            title=f"Window {i+1}"
        )
        
        content = QLabel(f"This is window {i+1}")
        window.addWidget(content)
        windows.append(window)
    
    return windows

# Create staggered windows
windows = create_staggered_windows(main_window, 5)
```

---

## Advanced Features

### Theme-Aware Shadows
```python
# Shadows automatically adapt to light/dark themes
# Light theme: Dark shadow
# Dark theme: Light shadow
```

### Smooth Animations
- **Fade-in:** Smooth appearance when shown
- **Height transitions:** Collapse/expand content
- **Easing curves:** Natural motion with InSine easing

### Drag and Drop
- **Header dragging:** Move window by dragging title bar
- **Boundary checking:** Stays within parent bounds
- **Z-order management:** Brings to front when interacted with

### Content Management
- **Automatic sizing:** Adjusts to content dimensions
- **Form integration:** Seamless loading of UI forms
- **Widget nesting:** Supports complex widget hierarchies

---

## Design Considerations

### Window Behavior
- **Modal-like:** Floats above parent content
- **Non-blocking:** Doesn't block parent interaction
- **Self-contained:** Manages its own state and content

### Performance
- **Efficient animations:** Uses QPropertyAnimation for smooth performance
- **Memory management:** Proper cleanup on closure
- **Event handling:** Optimized mouse event processing

### Customization Points
- **Styling:** Fully customizable via CSS
- **Icons:** Replaceable control icons
- **Layout:** Flexible content arrangement
- **Animations:** Configurable timing and easing

---

## Additional Notes

- **Parent Relationship:**  
  Requires a parent widget for proper positioning and management.

- **Theme Integration:**  
  Automatically uses application theme engine for consistent styling.

- **Event Propagation:**  
  Properly handles mouse events for dragging and interaction.

- **Accessibility:**  
  Includes standard window controls with familiar behavior.

- **Extension Ready:**  
  Designed for subclassing and custom behavior implementation.

---

The `QCustomEmbededWindow` is ideal for applications requiring floating panels, tool palettes, inspector windows, modal dialogs, and any scenario where you need draggable, self-contained window functionality within a main application interface.