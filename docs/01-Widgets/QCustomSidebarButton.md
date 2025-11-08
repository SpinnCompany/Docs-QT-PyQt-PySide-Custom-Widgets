# QCustomSidebarButton

`QCustomSidebarButton` is a specialized button widget designed to work seamlessly with `QCustomSidebar` and `QCustomSlideMenu`. It provides intelligent label hiding/showing behavior, floating tooltips, and smooth transitions when the parent sidebar collapses or expands.

---

## Overview

- **Smart Label Management:**  
  Automatically shows/hides text labels based on sidebar state while preserving icons.

- **Floating Tooltips:**  
  Displays floating button previews with text when hovering over collapsed sidebar buttons.

- **Smooth Transitions:**  
  Fade animations for floating buttons with customizable timing.

- **Seamless Integration:**  
  Automatically connects to parent sidebar and responds to state changes.

- **Customizable Spacing:**  
  Configurable text prefix spacing for proper alignment in sidebars.

- **Designer Ready:**  
  Full Qt Designer integration with custom properties.

---

## Constructor

```python
QCustomSidebarButton(parent=None, *args)
```

- **parent:**  
  The parent widget (defaults to `None`). Automatically detects parent sidebar.

---

## Key Properties

### `hideOnCollapse` (bool)
- **Purpose:**  
  Controls whether the button label hides when the parent sidebar collapses.

- **Getter:**  
  Returns current hide-on-collapse state.

- **Setter:**  
  Enables/disables automatic label hiding.

- **Example:**  
  ```python
  button.hideOnCollapse = True
  ```

### `textPrefixSpaces` (int)
- **Purpose:**  
  Number of spaces to prepend to the button text for proper indentation.

- **Getter:**  
  Returns current prefix space count.

- **Setter:**  
  Updates prefix spacing and refreshes display.

- **Example:**  
  ```python
  button.textPrefixSpaces = 4
  ```

### `labelHidden` (bool)
- **Purpose:**  
  Read-only property indicating if the button label is currently hidden.

- **Getter:**  
  Returns `True` if label is hidden.

### `labelText` (str)
- **Purpose:**  
  The original label text of the button (read-write).

- **Getter:**  
  Returns the stored label text.

- **Setter:**  
  Updates the button text while preserving prefix spacing.

- **Example:**  
  ```python
  button.labelText = "Settings"
  ```

---

## Methods

### `connect_to_parent()`
- **Description:**  
  Automatically discovers and connects to the nearest parent `QCustomSidebar`.

- **Behavior:**  
  - Traverses parent hierarchy to find sidebar
  - Connects to sidebar collapse/expand signals
  - Synchronizes initial button state

### `hideButtonLabel()`
- **Description:**  
  Hides the button text label while preserving the icon.

- **Usage:**  
  Called automatically when parent sidebar collapses.

### `showButtonLabel()`
- **Description:**  
  Shows the button text label if it was previously hidden.

- **Usage:**  
  Called automatically when parent sidebar expands.

### `hideButtonIcon()`
- **Description:**  
  Hides the button icon while preserving the text.

### `showButtonIcon()`
- **Description:**  
  Shows the button icon if it was previously hidden.

### `setText(text)`
- **Description:**  
  Overridden method that applies prefix spacing and stores original text.

### `getPrefixedText(text)`
- **Description:**  
  Internal method that applies configured prefix spacing to text.

---

## Usage Example

### Basic Integration
```python
from Custom_Widgets.QCustomSidebarButton import QCustomSidebarButton
from Custom_Widgets.QCustomSidebar import QCustomSidebar
from qtpy.QtWidgets import QVBoxLayout, QWidget

# Create sidebar and button
sidebar = QCustomSidebar()
button = QCustomSidebarButton()

# Configure button
button.labelText = "Dashboard"
button.setIcon(QIcon("icons/dashboard.svg"))
button.textPrefixSpaces = 3

# Add to sidebar layout
layout = QVBoxLayout(sidebar)
layout.addWidget(button)

# Button automatically connects to sidebar and responds to state changes
```

### Manual Configuration
```python
# Create button with custom properties
button = QCustomSidebarButton()

# Set button content
button.labelText = "User Profile"
button.setIcon(QIcon("icons/user.svg"))

# Configure behavior
button.hideOnCollapse = True
button.textPrefixSpaces = 4

# The button will automatically:
# - Hide text when sidebar collapses (showing only icon)
# - Show text when sidebar expands
# - Display floating tooltip on hover when collapsed
```

### Custom Styling
```python
# Apply CSS styling
button.setStyleSheet("""
    QCustomSidebarButton {
        background-color: #2c3e50;
        color: white;
        border: none;
        padding: 8px 12px;
        text-align: left;
    }
    
    QCustomSidebarButton:hover {
        background-color: #34495e;
    }
    
    QCustomSidebarButton:pressed {
        background-color: #1a252f;
    }
""")
```

### Floating Button Customization
```python
# The floating button (tooltip) can be styled via CSS
floating_style = """
    #floatingButtonWidget {
        background-color: rgba(52, 73, 94, 0.95);
        border: 1px solid #1a252f;
        border-radius: 4px;
    }
    
    QCustomSidebarButton#floatingButton {
        background-color: transparent;
        color: white;
        border: none;
        padding: 6px 10px;
    }
"""
```

---

## Advanced Features

### Automatic Parent Detection
```python
# The button automatically finds and connects to parent sidebar
# Works with nested layouts and complex hierarchies
button.connect_to_parent()

# Manual connection if needed
button.parent_sidebar = my_sidebar
button.parent_sidebar.onCollapsed.connect(button.hideButtonLabel)
button.parent_sidebar.onExpanded.connect(button.showButtonLabel)
```

### Floating Button Behavior
```python
# Floating button appears on hover when sidebar is collapsed
# Features:
# - 2-second delay before showing (configurable)
# - Smooth fade-in/fade-out animations
# - Automatic positioning relative to main button
# - Shadow effects for visual depth
# - Click-through functionality to main button
```

### Event Handling
```python
# Custom event handling example
class CustomSidebarButton(QCustomSidebarButton):
    def enterEvent(self, event):
        # Custom hover behavior
        if self.parent_sidebar and self.parent_sidebar.isCollapsed():
            # Show floating button immediately
            self._hover_timer.start(0)
        super().enterEvent(event)
    
    def leaveEvent(self, event):
        # Custom leave behavior
        self._fade_out_floating_button()
        super().leaveEvent(event)
```

### State Synchronization
```python
# Ensure button state matches sidebar state
def sync_button_state(button, sidebar):
    if sidebar.isCollapsed():
        button.hideButtonLabel()
    else:
        button.showButtonLabel()

# Manual synchronization
sync_button_state(my_button, my_sidebar)
```

---

## Design Features

### Visual Hierarchy
- **Collapsed State:** Icon only with floating text preview
- **Expanded State:** Icon + text with proper indentation
- **Hover States:** Visual feedback with floating tooltips
- **Smooth Transitions:** Fade animations for floating elements

### Responsive Behavior
- **Auto-connection:** Automatically finds parent sidebar
- **State Awareness:** Responds to sidebar collapse/expand events
- **Dynamic Positioning:** Floating buttons adjust to window changes
- **Memory Management:** Proper cleanup of floating elements

### Accessibility
- **Tooltip Functionality:** Floating buttons act as accessible tooltips
- **Click Consistency:** Floating buttons forward events to main button
- **Visual Feedback:** Clear state indicators for users

---

## JSON Configuration Integration

The button works seamlessly with JSON styling when used within a `QCustomSidebar`:

```json
{
  "QCustomSlideMenu": [{
    "name": "sidebar",
    "toggleButton": [{
      "buttonName": "sidebarToggle",
      "icons": [{
        "whenMenuIsCollapsed": ":/icons/menu.svg",
        "whenMenuIsExpanded": ":/icons/close.svg"
      }]
    }]
  }]
}
```

---

## Additional Notes

- **Performance:**  
  Efficient event filtering and minimal resource usage for floating elements.

- **Compatibility:**  
  Works with all sidebar positioning modes (floating, docked, etc.).

- **Customization:**  
  Extensive CSS styling support for both main and floating buttons.

- **Integration:**  
  Seamlessly works with existing `QCustomSlideMenu` signal system.

- **Extension:**  
  Designed to be subclassed for custom button behaviors.

---

The `QCustomSidebarButton` is the perfect companion for `QCustomSidebar` and `QCustomSlideMenu`, providing intelligent, user-friendly button behavior that enhances the sidebar navigation experience with smooth transitions and helpful floating tooltips.