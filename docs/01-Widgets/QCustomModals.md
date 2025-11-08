# QCustomModals

`QCustomModals` is a comprehensive modal dialog system that provides beautifully animated, customizable notification dialogs for PySide/PyQt applications. It includes various modal types with automatic positioning, smooth animations, and theme-aware styling.

![Screenshot_20240223_213723.png](https://www.dropbox.com/scl/fi/2q34mj8hdg6xymu6ctoyb/Screenshot_20240223_213723.png?rlkey=5bu7vo89jyohloui5rlqld5da&dl=0&raw=1)

---

## Overview

- **Multiple Modal Types:**  
  Information, Success, Warning, Error, and Custom modal variants with appropriate styling.

- **Smart Positioning:**  
  Supports 9 different screen positions with automatic stacking and collision avoidance.

- **Smooth Animations:**  
  Slide-in and fade-out animations with customizable timing and easing curves.

- **Theme Integration:**  
  Automatic light/dark theme detection with appropriate styling.

- **Flexible Content:**  
  Supports text, custom widgets, and embedded forms within modals.

- **Manager System:**  
  Intelligent modal management with automatic positioning and memory management.

---

## Installation

```bash
pip install QT-PyQt-PySide-Custom-Widgets
```

---

## Quick Start

### Basic Information Modal
```python
from Custom_Widgets.QCustomModals import QCustomModals

# Create and show an information modal
modal = QCustomModals.InformationModal(
    title="Update Available",
    description="A new version is ready to download.",
    parent=self,
    position='top-right',
    duration=3000
)
modal.show()
```

### Success Modal with Custom Icon
```python
modal = QCustomModals.SuccessModal(
    title="Operation Successful",
    description="Your changes have been saved.",
    parent=self,
    position='top-right',
    modalIcon="path/to/success_icon.png",
    duration=5000
)
modal.show()
```

---

## Modal Types

### InformationModal
- **Purpose:** General information and notifications
- **Default Icon:** System information icon
- **Styling:** Light blue (light theme) / Teal (dark theme)

### SuccessModal
- **Purpose:** Success confirmations and positive outcomes
- **Default Icon:** System checkmark icon
- **Styling:** Light green (light theme) / Dark green (dark theme)

### WarningModal
- **Purpose:** Warnings and cautionary messages
- **Default Icon:** System warning icon
- **Styling:** Light yellow (light theme) / Amber (dark theme)

### ErrorModal
- **Purpose:** Error messages and failure notifications
- **Default Icon:** System error icon
- **Styling:** Light red (light theme) / Dark red (dark theme)

### CustomModal
- **Purpose:** Fully customizable modal appearance
- **Default Icon:** None (customizable)
- **Styling:** Fully customizable via CSS

---

## Constructor Parameters

### Common Parameters
```python
QCustomModals.BaseModal(
    title="Modal Title",              # str: Modal title text
    description="Modal description",  # str: Body text content
    parent=self,                      # QWidget: Parent widget
    position='top-right',             # str: Screen position
    closeIcon="close.png",            # str: Custom close icon path
    modalIcon="icon.png",             # str: Custom modal icon path
    isClosable=True,                  # bool: Show close button
    duration=3000,                    # int: Auto-close duration (ms)
    animationDuration=500,            # int: Animation duration (ms)
    showForm=custom_form,             # QWidget: Embedded form widget
    addWidget=custom_widget           # QWidget: Additional widget
)
```

### Position Options
- `top-right` - Top right corner
- `top-center` - Top center
- `top-left` - Top left corner
- `center-center` - Screen center
- `center-right` - Center right
- `center-left` - Center left
- `bottom-right` - Bottom right
- `bottom-left` - Bottom left
- `bottom-center` - Bottom center

---

## Advanced Usage

### Modal with Embedded Form
```python
from Custom_Widgets.QCustomModals import QCustomModals

class LoginForm(QWidget):
    def setupUi(self, form):
        # Your form setup code here
        pass

# Create modal with embedded form
login_modal = QCustomModals.InformationModal(
    title="Login Required",
    parent=self,
    position='center-center',
    showForm=LoginForm,
    isClosable=True,
    duration=0  # Don't auto-close
)
login_modal.show()
```

### Modal with Custom Widget
```python
progress_widget = QProgressBar()
progress_widget.setValue(50)

modal = QCustomModals.InformationModal(
    title="Processing",
    description="Please wait while we process your request...",
    parent=self,
    position='bottom-right',
    addWidget=progress_widget,
    duration=0
)
modal.show()
```

### Custom Styling with CSS/SCSS
```scss
/* Custom modal styling */
InformationModal {
    border-radius: 12px;
    border: 2px solid $COLOR_ACCENT;
    background-color: $COLOR_BACKGROUND_1;
    
    QPushButton#closeButton {
        background-color: transparent;
        icon: url($PATH_RESOURCES + 'custom_close.png');
        border-radius: 10px;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    
    QLabel#iconlabel {
        image: url($PATH_RESOURCES + "custom_info.png");
        min-width: 24px;
        min-height: 24px;
        max-width: 24px;
        max-height: 24px;
    }
    
    QLabel#titlelabel {
        font-size: 16px;
        font-weight: bold;
        color: $COLOR_TEXT_1;
    }
    
    QLabel#bodyLabel {
        font-size: 14px;
        color: $COLOR_TEXT_2;
    }
}
```

### Dynamic Content Updates
```python
# Create modal
modal = QCustomModals.InformationModal(
    title="Initial Title",
    description="Initial description",
    parent=self,
    position='top-right',
    duration=0
)

# Update content dynamically
modal.setTitle("Updated Title")
modal.setDescription("Updated description content")
modal.setIcon("path/to/new_icon.png")

modal.show()
```

### Modal Management
```python
class ModalManager:
    def __init__(self, parent):
        self.parent = parent
        self.active_modals = []
    
    def show_info(self, title, description, position='top-right'):
        modal = QCustomModals.InformationModal(
            title=title,
            description=description,
            parent=self.parent,
            position=position,
            duration=3000
        )
        modal.closedSignal.connect(lambda: self.active_modals.remove(modal))
        self.active_modals.append(modal)
        modal.show()
    
    def close_all(self):
        for modal in self.active_modals[:]:
            modal.close()

# Usage
manager = ModalManager(self)
manager.show_info("Notification", "This is a test message")
```

---

## Signal

### `closedSignal`
- **Description:** Emitted when the modal is closed
- **Usage:** Connect to perform cleanup or track modal state

```python
modal = QCustomModals.InformationModal(...)
modal.closedSignal.connect(self.on_modal_closed)

def on_modal_closed(self):
    print("Modal was closed")
    # Perform cleanup actions
```

---

## Animation System

### Slide Animations
- **Direction:** Based on modal position
- **Duration:** Configurable (default: 500ms)
- **Easing:** `QEasingCurve.OutCubic` for smooth motion

### Fade Animations
- **Trigger:** Auto-close timer or manual close
- **Duration:** Configurable (default: animationDuration - 500ms)
- **Effect:** Smooth opacity transition

### Custom Animation Control
```python
# Manual animation control
modal = QCustomModals.InformationModal(...)

# Start fade out manually
modal.fadeOut()

# Access animation properties
slide_ani = modal.property('slideAni')
drop_ani = modal.property('dropAni')
```

---

## Manager System

### Position-Specific Managers
Each position has a dedicated manager that handles:
- Modal stacking and spacing
- Collision avoidance
- Smooth animations
- Memory management

### Custom Manager Registration
```python
@QCustomModalsManager.register("custom-position")
class CustomPositionManager(QCustomModalsManager):
    def modalPosition(self, modal, parentSize=None):
        # Custom positioning logic
        return QPoint(x, y)
    
    def slideStartPos(self, modal):
        # Custom animation start position
        return QPoint(start_x, start_y)
```

---

## Best Practices

### 1. Parent Widget
Always specify a parent widget for proper positioning and memory management:
```python
# Good
modal = QCustomModals.InformationModal(parent=self.main_window)

# Avoid
modal = QCustomModals.InformationModal()  # No parent
```

### 2. Duration Settings
```python
# Temporary notification (auto-closes)
modal = QCustomModals.SuccessModal(duration=3000)

# Persistent modal (requires user action)
modal = QCustomModals.InformationModal(duration=0, isClosable=True)
```

### 3. Position Selection
```python
# Important notifications - top center
modal = QCustomModals.ErrorModal(position='top-center')

# Background updates - top right
modal = QCustomModals.InformationModal(position='top-right')

# User input required - center
modal = QCustomModals.CustomModal(position='center-center')
```

### 4. Memory Management
```python
# Use weak references for long-lived modals
self.modal_ref = weakref.ref(modal)

# Connect to closed signal for cleanup
modal.closedSignal.connect(self.cleanup_modal_resources)
```

---

## Examples

### Notification System
```python
class NotificationSystem:
    def __init__(self, parent):
        self.parent = parent
    
    def info(self, message, title="Information"):
        QCustomModals.InformationModal(
            title=title,
            description=message,
            parent=self.parent,
            position='top-right',
            duration=3000
        ).show()
    
    def success(self, message, title="Success"):
        QCustomModals.SuccessModal(
            title=title,
            description=message,
            parent=self.parent,
            position='top-right', 
            duration=2000
        ).show()
    
    def error(self, message, title="Error"):
        QCustomModals.ErrorModal(
            title=title,
            description=message,
            parent=self.parent,
            position='top-center',
            duration=5000
        ).show()

# Usage
notifier = NotificationSystem(self)
notifier.success("File saved successfully!")
```

### Progress Notification
```python
def show_progress_modal(self, operation_name):
    self.progress_modal = QCustomModals.InformationModal(
        title=operation_name,
        description="Processing...",
        parent=self,
        position='bottom-right',
        duration=0,
        isClosable=False
    )
    
    # Add progress bar
    progress = QProgressBar()
    progress.setRange(0, 0)  # Indeterminate
    self.progress_modal.addWidget(progress)
    
    self.progress_modal.show()
    
def update_progress(self, value, max_value):
    if hasattr(self, 'progress_modal'):
        # Update progress bar if exists
        pass
    
def hide_progress_modal(self):
    if hasattr(self, 'progress_modal'):
        self.progress_modal.close()
```

---

## Additional Features

### Theme Awareness
- Automatically detects light/dark themes
- Applies appropriate color schemes
- Supports dynamic theme switching

### Responsive Design
- Adapts to parent widget size changes
- Maintains proper positioning on resize
- Handles window state changes

### Accessibility
- Keyboard accessible (close button)
- Screen reader compatible
- High contrast support in dark mode

---

The `QCustomModals` system provides a robust, flexible solution for application notifications and dialogs with professional animations, intelligent positioning, and comprehensive customization options perfect for modern PySide/PyQt applications.