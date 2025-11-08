# QCustomSidebarLabel

`QCustomSidebarLabel` is a specialized label widget designed to work seamlessly with `QCustomSidebar` and `QCustomSlideMenu`. It provides intelligent visibility management with smooth animations, icon support, and automatic response to sidebar state changes.

---

## Overview

- **Smart Visibility Control:**  
  Automatically shows/hides with smooth fade animations when parent sidebar collapses/expands.

- **Dual Content Support:**  
  Supports both text labels and icons with flexible layout options.

- **Smooth Animations:**  
  Configurable fade-in/fade-out transitions with easing curves.

- **Automatic Parent Detection:**  
  Automatically connects to parent sidebar and synchronizes with its state.

- **Flexible Layout:**  
  Horizontal layout with icon and text support, plus flexible spacing.

- **Designer Integration:**  
  Full Qt Designer support with custom properties and visual feedback.

---

## Constructor

```python
QCustomSidebarLabel(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`). Automatically detects parent sidebar.

---

## Key Properties

### `text` (str)
- **Purpose:**  
  The text content displayed in the label.

- **Getter:**  
  Returns current label text.

- **Setter:**  
  Updates label text and adjusts widget size.

- **Example:**  
  ```python
  label.text = "Navigation Menu"
  ```

### `icon` (QIcon)
- **Purpose:**  
  Icon displayed alongside or instead of text.

- **Getter:**  
  Returns current icon.

- **Setter:**  
  Sets icon and automatically shows/hides icon label.

- **Example:**  
  ```python
  label.icon = QIcon("icons/menu.svg")
  ```

### `iconSize` (QSize)
- **Purpose:**  
  Size of the displayed icon.

- **Getter:**  
  Returns current icon size.

- **Setter:**  
  Updates icon size and refreshes display.

- **Example:**  
  ```python
  label.iconSize = QSize(32, 32)
  ```

### `hideOnCollapse` (bool)
- **Purpose:**  
  Controls whether the label hides when parent sidebar collapses.

- **Getter:**  
  Returns current hide-on-collapse state.

- **Setter:**  
  Enables/disables automatic hiding behavior.

- **Example:**  
  ```python
  label.hideOnCollapse = True
  ```

---

## Methods

### `connect_to_parent()`
- **Description:**  
  Automatically discovers and connects to the nearest parent `QCustomSidebar`.

- **Behavior:**  
  - Traverses parent hierarchy to find sidebar
  - Connects to sidebar collapse/expand signals
  - Synchronizes animation duration with sidebar
  - Sets initial visibility state

### `hideLabel()`
- **Description:**  
  Starts fade-out animation to hide the label.

- **Usage:**  
  Called automatically when parent sidebar collapses.

### `showLabel()`
- **Description:**  
  Starts fade-in animation to show the label.

- **Usage:**  
  Called automatically when parent sidebar expands.

### `start_show_animation()`
- **Description:**  
  Internal method that animates opacity from 0 to 1.

### `start_hide_animation()`
- **Description:**  
  Internal method that animates opacity from 1 to 0.

### `validateIconAndLabel()`
- **Description:**  
  Validates and updates icon/label visibility based on current content.

### `setText(text)`
- **Description:**  
  Sets label text and updates widget sizing.

### `setIcon(icon)`
- **Description:**  
  Sets icon and manages icon label visibility.

---

## Signals

### `visibilityChanged(bool)`
- **Description:**  
  Emitted when the label's visibility changes after animation completes.

- **Parameter:**  
  - `visible`: `True` if label is now visible, `False` if hidden

- **Example:**  
  ```python
  label.visibilityChanged.connect(lambda visible: print(f"Label visible: {visible}"))
  ```

---

## Usage Example

### Basic Integration
```python
from Custom_Widgets.QCustomSidebarLabel import QCustomSidebarLabel
from Custom_Widgets.QCustomSidebar import QCustomSidebar
from qtpy.QtWidgets import QVBoxLayout, QWidget
from qtpy.QtGui import QIcon

# Create sidebar and label
sidebar = QCustomSidebar()
label = QCustomSidebarLabel()

# Configure label with text
label.text = "Main Navigation"
label.hideOnCollapse = True

# Or configure with icon
label.icon = QIcon("icons/navigation.svg")
label.iconSize = QSize(24, 24)

# Add to sidebar layout
layout = QVBoxLayout(sidebar)
layout.addWidget(label)

# Label automatically connects to sidebar and animates with state changes
```

### Text and Icon Combination
```python
# Create label with both text and icon
label = QCustomSidebarLabel()

# Set both text and icon
label.text = "User Profile"
label.icon = QIcon("icons/user.svg")
label.iconSize = QSize(20, 20)

# The label will display:
# [icon] User Profile
```

### Custom Styling
```python
# Apply CSS styling to the label
label.setStyleSheet("""
    QCustomSidebarLabel {
        background-color: transparent;
        color: #2c3e50;
        font-weight: bold;
        padding: 8px 12px;
    }
    
    QCustomSidebarLabel QLabel {
        background-color: transparent;
        color: inherit;
        font: inherit;
    }
""")
```

### Manual Visibility Control
```python
# Manual control over visibility
label.hideOnCollapse = False  # Disable automatic hiding

# Manually show/hide with animations
label.showLabel()   # Fade in
label.hideLabel()   # Fade out

# Check current state
if label.isVisible():
    print("Label is currently visible")
```

### Animation Configuration
```python
# Customize animation properties
label._animationDuration = 1000  # 1 second animations

# The animation duration automatically syncs with parent sidebar
# but can be overridden manually
```

---

## Advanced Features

### Automatic Parent Detection
```python
# The label automatically finds parent sidebar in complex hierarchies
# Works with nested layouts and container widgets
label.connect_to_parent()

# Manual connection if needed
label.parent_sidebar = my_sidebar
label.parent_sidebar.onCollapsed.connect(label.hideLabel)
label.parent_sidebar.onExpanded.connect(label.showLabel)
```

### Flexible Content Management
```python
# Dynamic content switching
def update_label_content(has_icon):
    if has_icon:
        label.icon = QIcon("icons/dynamic.svg")
        label.text = ""  # Icon only
    else:
        label.icon = QIcon()  # Clear icon
        label.text = "Text Label"  # Text only

# The label automatically adjusts layout based on content
```

### State Synchronization
```python
# Ensure label state matches sidebar
def sync_label_state(label, sidebar):
    if sidebar.isCollapsed() and label.hideOnCollapse:
        label.hideLabel()
    else:
        label.showLabel()

# Manual synchronization
sync_label_state(my_label, my_sidebar)
```

### Custom Animation Behavior
```python
class CustomSidebarLabel(QCustomSidebarLabel):
    def start_show_animation(self):
        # Custom show animation with different easing
        self.animation.setEasingCurve(QEasingCurve.OutBack)
        self.animation.setDuration(800)
        super().start_show_animation()
    
    def on_animation_finished(self):
        # Custom post-animation behavior
        if self.isVisible():
            self.setStyleSheet("color: green;")  # Visual feedback
        super().on_animation_finished()
```

---

## Layout Structure

The widget uses a `QHBoxLayout` with the following structure:

```
[Icon Label] [Text Label] [Flexible Spacer]
```

- **Icon Label:** Shows icon when available, hidden otherwise
- **Text Label:** Shows text content
- **Flexible Spacer:** Pushes content to the left, maintaining clean alignment

---

## Design Features

### Visual Behavior
- **Smooth Transitions:** Opacity-based fade animations
- **Adaptive Layout:** Automatically adjusts based on content
- **Proper Sizing:** Maintains correct size hints for layout management
- **Transparent Background:** Default transparent styling for seamless integration

### Responsive Design
- **State Awareness:** Automatically responds to sidebar state changes
- **Animation Sync:** Matches animation timing with parent sidebar
- **Layout Updates:** Proper geometry updates after visibility changes
- **Content Validation:** Intelligent icon/text visibility management

### Accessibility
- **Clear Visibility States:** Smooth animations prevent jarring transitions
- **Flexible Content:** Supports both visual (icons) and textual information
- **Consistent Behavior:** Predictable show/hide patterns

---

## JSON Configuration Integration

When used within a styled sidebar, the label inherits animation timing and works seamlessly with JSON configuration:

```json
{
  "QCustomSlideMenu": [{
    "name": "sidebar",
    "menuTransitionAnimation": [{
      "animationDuration": 500,
      "animationEasingCurve": "OutCubic"
    }]
  }]
}
```

The label automatically uses the parent sidebar's animation duration.

---

## Additional Notes

- **Performance:**  
  Efficient opacity animations with minimal CPU usage.

- **Memory Management:**  
  Proper cleanup of animations and effects.

- **Compatibility:**  
  Works with all sidebar variants and positioning modes.

- **Customization:**  
  Extensive styling support through CSS and property system.

- **Extension:**  
  Designed for subclassing and custom behavior implementation.

---

The `QCustomSidebarLabel` is an essential component for creating polished sidebar interfaces, providing intelligent visibility management with smooth animations and flexible content display that seamlessly integrates with the `QCustomSidebar` ecosystem.