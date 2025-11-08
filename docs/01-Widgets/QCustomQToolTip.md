# QCustomQToolTip

`QCustomQToolTip` is a highly customizable tooltip widget that provides modern, animated tooltips with multiple tail positions, icons, and automatic positioning. It replaces standard Qt tooltips with a visually appealing alternative.

---

## Overview

- **Modern Design:**  
  Features rounded corners, drop shadows, and smooth animations for a contemporary look.

- **Multiple Tail Positions:**  
  Supports 12 different tail positions for precise tooltip placement.

- **Automatic Positioning:**  
  Intelligent auto-positioning that adapts to available screen space.

- **Customizable Content:**  
  Supports text, icons, and adjustable display duration.

- **Easy Integration:**  
  Simple event filter installation for automatic application-wide replacement.

---

## Constructor

```python
QCustomQToolTip(
    text: str, 
    parent=None, 
    target=None, 
    duration=1500, 
    icon=None, 
    tailPosition="auto"
)
```

- **text:**  
  The tooltip text content.

- **parent:**  
  Parent widget (defaults to `None`).

- **target:**  
  Target widget that the tooltip points to.

- **duration:**  
  Display duration in milliseconds (default: 1500ms).

- **icon:**  
  Optional icon (QIcon or file path) to display alongside text.

- **tailPosition:**  
  Position of the tooltip tail relative to target.

---

## Key Properties

### `text` (str)
- **Purpose:**  
  The tooltip text content.

### `duration` (int)
- **Purpose:**  
  Display duration in milliseconds before auto-fade.

### `icon` (QIcon/str)
- **Purpose:**  
  Optional icon displayed with the tooltip.

### `tailPosition` (str)
- **Purpose:**  
  Position of the tooltip tail.

---

## Signals

### `onClosed()`
- **Description:**  
  Emitted when the tooltip is closed.

---

## Tail Positions

### Primary Positions
- **`top-center`**: Above target, centered
- **`bottom-center`**: Below target, centered  
- **`left-center`**: Left of target, centered
- **`right-center`**: Right of target, centered

### Corner Positions
- **`top-left`**: Above target, aligned left
- **`top-right`**: Above target, aligned right
- **`bottom-left`**: Below target, aligned left
- **`bottom-right`**: Below target, aligned right

### Edge-Aligned Positions
- **`left-top`**: Left of target, aligned top
- **`left-bottom`**: Left of target, aligned bottom
- **`right-top`**: Right of target, aligned top
- **`right-bottom`**: Right of target, aligned bottom

### Smart Positioning
- **`auto`**: Automatically chooses optimal position based on available space

---

## Usage Example

### Basic Tooltip Creation
```python
from Custom_Widgets.QCustomQToolTip import QCustomQToolTip

# Create a custom tooltip
tooltip = QCustomQToolTip(
    text="This is a custom tooltip",
    parent=main_window,
    target=target_widget,
    duration=2000,
    tailPosition="top-center"
)
tooltip.show()
```

### Application-Wide Installation
```python
from Custom_Widgets.QCustomQToolTip import QCustomQToolTipFilter

# Install custom tooltips application-wide
app_tooltip_filter = QCustomQToolTipFilter(
    duration=1500,
    tailPosition="auto"
)
app.installEventFilter(app_tooltip_filter)
```

### Complete Example
```python
import sys
from PySide6.QtCore import Qt
from PySide6.QtGui import QColor
from PySide6.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QHBoxLayout, QPushButton, QWidget, QGraphicsDropShadowEffect
from Custom_Widgets.QCustomQToolTip import QCustomQToolTipFilter

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QCustomQToolTip Demo")
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)
        self.layout = QVBoxLayout(self.central_widget)

        # Application styling
        self.setStyleSheet("""
            QMainWindow, * {
                background-color: #f0f0f0;
            }
            QCustomQToolTip * {
                color: #000;
            }
            QPushButton {
                background-color: #4CAF50;
                color: white;
                padding: 8px 16px;
                border: none;
                border-radius: 4px;
                margin: 5px;
            }
            QPushButton:hover {
                background-color: #45a049;
            }
            QPushButton:pressed {
                background-color: #3e8e41;
            }
        """)

        # Create buttons with tooltips
        buttons = [
            ("Auto-positioned Tooltip", "Testing auto-positioning. Resize window and hover again!"),
            ("Top Tooltip", "This should appear above the button"),
            ("Bottom Tooltip", "This should appear below the button"),
            ("Left Tooltip", "This should appear to the left"),
            ("Right Tooltip", "This should appear to the right")
        ]

        for btn_text, tooltip_text in buttons:
            button = QPushButton(btn_text)
            button.setToolTip(tooltip_text)
            self.layout.addWidget(button)
            self.addShadow(button)

        # Horizontal layout for testing edge cases
        h_widget = QWidget()
        h_layout = QHBoxLayout()
        
        edge_buttons = [
            ("Edge Button 1", "Testing edge positioning"),
            ("Edge Button 2", "Another edge test")
        ]
        
        for btn_text, tooltip_text in edge_buttons:
            button = QPushButton(btn_text)
            button.setToolTip(tooltip_text)
            h_layout.addWidget(button)
            self.addShadow(button)
        
        h_widget.setLayout(h_layout)
        self.layout.addWidget(h_widget)

    def addShadow(self, widget):
        """Add shadow effect to widgets"""
        effect = QGraphicsDropShadowEffect(widget)
        effect.setColor(QColor(30, 30, 30, 200))
        effect.setBlurRadius(20)
        effect.setXOffset(0)
        effect.setYOffset(0)
        widget.setGraphicsEffect(effect)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    
    # Install custom tooltip filter application-wide
    app_tooltip_filter = QCustomQToolTipFilter(
        tailPosition="auto",  # Smart positioning
        duration=2000         # 2 second display
    )
    app.installEventFilter(app_tooltip_filter)
    
    window = MainWindow()
    window.resize(600, 400)
    window.show()
    
    sys.exit(app.exec())
```

### Manual Tooltip Control
```python
from Custom_Widgets.QCustomQToolTip import QCustomQToolTip
from qtpy.QtGui import QIcon

class CustomTooltipDemo:
    def __init__(self, parent_widget):
        self.parent = parent_widget
        
    def show_custom_tooltip(self, target_widget, text, icon_path=None):
        """Manually show a custom tooltip"""
        icon = QIcon(icon_path) if icon_path else None
        
        tooltip = QCustomQToolTip(
            text=text,
            parent=self.parent,
            target=target_widget,
            duration=3000,  # 3 seconds
            icon=icon,
            tailPosition="bottom-center"
        )
        
        # Connect to closed signal
        tooltip.onClosed.connect(self.on_tooltip_closed)
        
        tooltip.show()
        return tooltip
    
    def on_tooltip_closed(self):
        print("Tooltip was closed")
```

### Advanced Configuration
```python
# Custom tooltip with specific styling
class StyledQCustomQToolTip(QCustomQToolTip):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.apply_custom_style()
    
    def apply_custom_style(self):
        """Apply custom styling to the tooltip"""
        self.setStyleSheet("""
            QCustomQToolTip {
                background-color: #2c3e50;
                border: 2px solid #34495e;
                border-radius: 8px;
                padding: 10px;
            }
            QLabel {
                color: #ecf0f1;
                font-weight: bold;
            }
        """)
    
    def setShadowEffect(self):
        """Custom shadow effect"""
        self.setGraphicsEffect(None)
        self.effect = QGraphicsDropShadowEffect(self)
        self.effect.setColor(QColor(0, 0, 0, 150))
        self.effect.setBlurRadius(20)
        self.effect.setXOffset(0)
        self.effect.setYOffset(5)
        self.setGraphicsEffect(self.effect)
```

### Position-Specific Examples
```python
# Different tail position examples
positions = [
    ("top-left", "Top left positioned tooltip"),
    ("top-center", "Top center positioned tooltip"), 
    ("top-right", "Top right positioned tooltip"),
    ("bottom-left", "Bottom left positioned tooltip"),
    ("bottom-center", "Bottom center positioned tooltip"),
    ("bottom-right", "Bottom right positioned tooltip"),
    ("left-center", "Left center positioned tooltip"),
    ("right-center", "Right center positioned tooltip"),
    ("auto", "Auto-positioned tooltip")
]

for position, text in positions:
    tooltip = QCustomQToolTip(
        text=text,
        target=widget,
        tailPosition=position,
        duration=1500
    )
```

---

## Advanced Features

### Automatic Positioning Algorithm
The `auto` position uses a smart algorithm that:
- Calculates available screen space
- Considers mouse position within target
- Chooses optimal position to avoid clipping
- Falls back to `top-center` if no suitable position found

### Animation System
- **Fade In:** Smooth opacity transition when showing
- **Fade Out:** Graceful fade when hiding
- **Duration Control:** Configurable display time
- **Interruptible:** Hovering over tooltip can cancel auto-close

### Theme Integration
```python
# Tooltips automatically inherit application themes
# Custom styling can be applied via CSS
tooltip.setStyleSheet("""
    QCustomQToolTip {
        background-color: palette(tooltip-base);
        color: palette(tooltip-text);
        border: 1px solid palette(mid);
    }
""")
```

---

## Additional Notes

- **Performance:**  
  Efficient rendering with minimal impact on application performance.

- **Accessibility:**  
  Maintains standard tooltip accessibility features.

- **Cross-Platform:**  
  Consistent appearance across Windows, macOS, and Linux.

- **Customization:**  
  Extensive styling options through CSS and subclassing.

- **Integration:**  
  Seamlessly replaces standard Qt tooltips with minimal code changes.

---

The `QCustomQToolTip` is perfect for applications requiring modern, visually appealing tooltips with precise positioning control and smooth animations. It enhances user experience while maintaining ease of integration.