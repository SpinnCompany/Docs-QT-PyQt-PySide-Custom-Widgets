# QCustomTipOverlay

`QCustomTipOverlay` is a highly customizable tooltip overlay widget that provides rich, animated tooltips with multiple positioning options, theme integration, and extensive customization capabilities.

![Custom Tool Tip Overlay GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/custom-tool-tip-overlay.gif)

---

## Overview

- **Rich Tooltip Content:**  
  Supports titles, descriptions, icons, images, custom forms, and embedded widgets.

- **Smart Positioning:**  
  Multiple tail positioning options with automatic optimal placement detection.

- **Smooth Animations:**  
  Fade-in/fade-out animations with customizable duration and timing.

- **Theme Integration:**  
  Automatically adapts to application theme changes with dynamic icon updates.

- **Flexible Configuration:**  
  Extensive customization options for appearance, behavior, and content.

---

## Constructor

```python
QCustomTipOverlay(
    title: str = "",
    description: str = "", 
    icon: Union[QIcon, str] = None,
    image: Union[str, QPixmap, QImage] = None,
    isClosable: bool = False,
    target: Union[QWidget, QPoint] = None,
    parent: QWidget = None,
    aniType: str = "pull-up",
    deleteOnClose: bool = True,
    duration: int = 1000,
    tailPosition: str = "bottom-center",
    showForm: QWidget = None,
    addWidget: QWidget = None,
    closeIcon: Union[QIcon, str] = None,
    toolFlag: bool = False
)
```

---

## Key Parameters

### Content Parameters
- **`title`**: Main title text displayed in bold
- **`description`**: Detailed description text
- **`icon`**: Icon displayed alongside title (QIcon or file path)
- **`image`**: Additional image content (file path, QPixmap, or QImage)
- **`showForm`**: Custom form widget to display within tooltip
- **`addWidget`**: Additional custom widget to embed

### Behavior Parameters
- **`isClosable`**: Whether tooltip can be manually closed
- **`deleteOnClose`**: Whether widget is deleted when closed
- **`duration`**: Auto-close duration in milliseconds (-1 for manual close only)
- **`aniType`**: Animation type for show/hide transitions

### Positioning Parameters
- **`target`**: Target widget or position for tooltip placement
- **`tailPosition`**: Position of tooltip tail relative to target
- **`parent`**: Parent widget for theme inheritance and event filtering

### Styling Parameters
- **`closeIcon`**: Custom close button icon (QIcon or file path)
- **`toolFlag`**: Whether to display as tool window

---

## Available Tail Positions

### Vertical Positions
- **`top-left`**: Top-left corner with downward-pointing tail
- **`top-center`**: Top-center with downward-pointing tail  
- **`top-right`**: Top-right corner with downward-pointing tail
- **`bottom-left`**: Bottom-left corner with upward-pointing tail
- **`bottom-center`**: Bottom-center with upward-pointing tail
- **`bottom-right`**: Bottom-right corner with upward-pointing tail

### Horizontal Positions
- **`left-top`**: Left side with top-aligned tail
- **`left-center`**: Left side with center-aligned tail
- **`left-bottom`**: Left side with bottom-aligned tail
- **`right-top`**: Right side with top-aligned tail
- **`right-center`**: Right side with center-aligned tail
- **`right-bottom`**: Right side with bottom-aligned tail

### Automatic Positioning
- **`auto`**: Automatically determines optimal position based on available screen space

---

## Methods

### Content Management
#### `setTitle(title: str)`
- **Description:** Sets the tooltip title text
- **Behavior:** Hides title label if empty string provided

#### `setDescription(description: str)`
- **Description:** Sets the tooltip description text
- **Behavior:** Hides description label if empty string provided

#### `setIcon(icon: Union[QIcon, str])`
- **Description:** Sets the tooltip icon
- **Supports:** QIcon objects and file paths
- **Behavior:** Automatically hides icon if None provided

#### `setCloseIcon(iconFile: Union[QIcon, str])`
- **Description:** Sets custom close button icon
- **Fallback:** Uses system close icon if not specified

#### `loadForm(form: QWidget)`
- **Description:** Loads a custom form widget into tooltip
- **Usage:** For complex tooltip content requiring custom UI

#### `addWidget(widget: QWidget)`
- **Description:** Embeds any QWidget into tooltip content area

### Behavior Control
#### `setClosable(closable: bool)`
- **Description:** Shows/hides the close button
- **Default:** `False` (tooltip cannot be manually closed)

#### `_fadeOut()`
- **Description:** Initiates fade-out animation and close sequence
- **Internal:** Called automatically on close button click or timeout

### Event Handling
#### `showEvent(e: QShowEvent)`
- **Description:** Handles tooltip display initialization
- **Features:** Auto-positioning, animation start, auto-close timer

#### `closeEvent(e: QCloseEvent)`
- **Description:** Handles tooltip cleanup and signal emission
- **Emits:** `closed` signal for external monitoring

#### `paintEvent(e: QPaintEvent)`
- **Description:** Custom painting with tail rendering and positioning
- **Features:** Anti-aliased rendering, dynamic positioning

---

## Signals

### `closed()`
- **Description:** Emitted when tooltip is closed
- **Usage:** Connect to perform cleanup or state updates
- **Example:**
  ```python
  tooltip.closed.connect(self.on_tooltip_closed)
  ```

---

## Usage Examples

### Basic Tooltip
```python
from Custom_Widgets.QCustomTipOverlay import QCustomTipOverlay

# Simple text tooltip
tooltip = QCustomTipOverlay(
    title="Information",
    description="This is a helpful tooltip message",
    target=target_widget,
    parent=main_window
)
tooltip.show()
```

### Rich Content Tooltip
```python
# Tooltip with icon and image
tooltip = QCustomTipOverlay(
    title="User Profile",
    description="John Doe - Senior Developer",
    icon="icons/user.png",
    image="photos/profile.jpg",
    isClosable=True,
    target=profile_button,
    duration=5000,  # 5 seconds
    tailPosition="right-center"
)
tooltip.show()
```

### Custom Form Tooltip
```python
from my_forms import SettingsForm

# Tooltip with embedded custom form
settings_form = SettingsForm()
tooltip = QCustomTipOverlay(
    title="Quick Settings",
    showForm=settings_form,
    isClosable=True,
    target=settings_button,
    tailPosition="bottom-center"
)
tooltip.show()
```

### Manual Positioning
```python
# Position tooltip at specific screen coordinates
from qtpy.QtCore import QPoint

tooltip = QCustomTipOverlay(
    title="Custom Position",
    description="Tooltip at specific screen location",
    target=QPoint(100, 200),  # Screen coordinates
    parent=main_window
)
tooltip.show()
```

### Event-Driven Tooltips
```python
class InteractiveUI(QWidget):
    def __init__(self):
        super().__init__()
        self.setup_ui()
        self.current_tooltip = None
    
    def show_context_tooltip(self, widget, message):
        # Close existing tooltip
        if self.current_tooltip:
            self.current_tooltip.close()
        
        # Create new tooltip
        self.current_tooltip = QCustomTipOverlay(
            title="Context Help",
            description=message,
            target=widget,
            parent=self,
            isClosable=True
        )
        self.current_tooltip.closed.connect(self.on_tooltip_closed)
        self.current_tooltip.show()
    
    def on_tooltip_closed(self):
        self.current_tooltip = None
```

### Theme-Aware Tooltips
```python
class ThemedTooltipManager:
    def __init__(self, parent):
        self.parent = parent
        self.parent.themeEngine.onThemeChanged.connect(self.update_tooltip_themes)
        self.active_tooltips = []
    
    def create_tooltip(self, **kwargs):
        tooltip = QCustomTipOverlay(parent=self.parent, **kwargs)
        self.active_tooltips.append(tooltip)
        tooltip.closed.connect(lambda: self.active_tooltips.remove(tooltip))
        return tooltip
    
    def update_tooltip_themes(self):
        for tooltip in self.active_tooltips:
            tooltip.handleThemeChanged()
```

### Advanced Positioning Example
```python
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QHBoxLayout, QPushButton, QWidget
from Custom_Widgets.QCustomTipOverlay import QCustomTipOverlay

class PositionDemo(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setup_ui()
    
    def setup_ui(self):
        central = QWidget()
        self.setCentralWidget(central)
        layout = QHBoxLayout(central)
        
        # Test different tail positions
        positions = [
            ("Top-Left", "top-left"),
            ("Top-Center", "top-center"), 
            ("Top-Right", "top-right"),
            ("Bottom-Left", "bottom-left"),
            ("Bottom-Center", "bottom-center"),
            ("Bottom-Right", "bottom-right"),
            ("Left-Top", "left-top"),
            ("Left-Center", "left-center"),
            ("Left-Bottom", "left-bottom"),
            ("Right-Top", "right-top"),
            ("Right-Center", "right-center"),
            ("Right-Bottom", "right-bottom"),
            ("Auto", "auto")
        ]
        
        for text, position in positions:
            btn = QPushButton(text)
            btn.clicked.connect(lambda checked, p=position: self.show_tip(p))
            layout.addWidget(btn)
    
    def show_tip(self, position):
        tooltip = QCustomTipOverlay(
            title=f"{position.title()} Position",
            description=f"This tooltip uses {position} tail positioning",
            target=self.sender(),
            parent=self,
            tailPosition=position,
            duration=3000,
            isClosable=True
        )
        tooltip.show()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = PositionDemo()
    window.show()
    sys.exit(app.exec())
```

---

## QCustomQToolTipFilter

### Event-Based Tooltip Integration
The `QCustomQToolTipFilter` class provides seamless integration with standard Qt tooltip system:

```python
from Custom_Widgets.QCustomTipOverlay import QCustomQToolTipFilter

# Apply custom tooltip filter to widgets
tooltip_filter = QCustomQToolTipFilter(
    duration=2000,
    icon="icons/info.png", 
    tailPosition="auto"
)

# Apply to individual widget
widget.installEventFilter(tooltip_filter)

# Apply to multiple widgets
for widget in [btn1, btn2, btn3]:
    widget.installEventFilter(tooltip_filter)
    widget.setToolTip("Helpful information about this widget")
```

### Filter Configuration
- **`duration`**: Tooltip display duration in milliseconds
- **`icon`**: Default icon for filtered tooltips
- **`tailPosition`**: Default tail position for filtered tooltips

---

## Additional Features

### Animation Types
- **Fade Effects**: Smooth opacity transitions
- **Slide Animations**: Directional entrance/exit (when implemented)
- **Custom Timing**: Configurable animation duration

### Theme Integration
- Automatic icon color updates on theme changes
- Parent theme inheritance
- Dynamic style application

### Memory Management
- Automatic cleanup with `deleteOnClose` option
- Event filter cleanup for parent widgets
- Signal-based lifecycle management

---

## Performance Considerations

- **Efficient Positioning**: Smart managers avoid expensive calculations
- **Lazy Rendering**: Content rendered only when needed
- **Memory Optimization**: Automatic cleanup prevents leaks
- **Event Optimization**: Minimal event filtering overhead

---

The `QCustomTipOverlay` provides enterprise-grade tooltip functionality with extensive customization options, making it ideal for applications requiring rich, interactive help systems, contextual information displays, and sophisticated user guidance interfaces.