# QCustomQDialog

`QCustomQDialog` is a highly customizable dialog widget that provides modern UI features, smooth animations, and extensive customization options. It extends Qt's standard dialog with enhanced visual effects and flexible content management.

![Custom Dialog GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/custom-dialog.gif)

---

## Overview

- **Modern Dialog Design:**  
  Features a sleek, customizable interface with support for titles, descriptions, and custom content.

- **Smooth Animations:**  
  Includes fade-in and fade-out animations with configurable duration and easing curves.

- **Background Effects:**  
  Supports background blur effects and overlay masks for modern UI aesthetics.

- **Flexible Content:**  
  Can display custom forms, widgets, and dynamic content with proper layout management.

- **Theme Integration:**  
  Automatically adapts to application themes and provides dark/light mode support.

---

## Constructor

```python
QCustomQDialog(
    parent=None,
    showForm=None,
    title=None,
    description=None,
    padding=0,
    yesButtonIcon=None,
    cancelButtonIcon=None,
    yesButtonText="Yes",
    cancelButtonText="Cancel",
    animationDuration=300,
    showYesButton=True,
    showCancelButton=True,
    setModal=False,
    frameless=False,
    windowMovable=False,
    addWidget=None,
    blurBackground=True
)
```

### Parameters

- **parent:** Parent widget (defaults to `None`)
- **showForm:** Custom form widget to display inside the dialog
- **title:** Dialog title text
- **description:** Dialog description text
- **padding:** Additional padding around content
- **yesButtonIcon:** Icon for the confirmation button
- **cancelButtonIcon:** Icon for the cancel button
- **yesButtonText:** Text for confirmation button (default: "Yes")
- **cancelButtonText:** Text for cancel button (default: "Cancel")
- **animationDuration:** Duration of show/hide animations in milliseconds (default: 300)
- **showYesButton:** Whether to show the confirmation button (default: `True`)
- **showCancelButton:** Whether to show the cancel button (default: `True`)
- **setModal:** Whether the dialog should be modal (default: `False`)
- **frameless:** Whether to use frameless window style (default: `False`)
- **windowMovable:** Whether the dialog can be dragged (default: `False`)
- **addWidget:** Additional widget to add to the dialog content
- **blurBackground:** Enable background blur effect (default: `True`)

---

## Key Properties

### `title` (str)
- **Purpose:**  
  Dialog title text displayed in the header.

### `description` (str)
- **Purpose:**  
  Descriptive text displayed below the title.

### `padding` (int)
- **Purpose:**  
  Additional padding around the dialog content.

### `animationDuration` (int)
- **Purpose:**  
  Duration of fade animations in milliseconds.

### `windowMovable` (bool)
- **Purpose:**  
  Enables dragging for frameless dialogs.

### `blurBackground` (bool)
- **Purpose:**  
  Enables background blur effect behind the dialog.

---

## Methods

### `addWidget(widget, alignment=None)`
- **Description:**  
  Adds a custom widget to the dialog content area.

- **Parameters:**  
  - `widget`: QWidget to add
  - `alignment`: Optional alignment for the widget

- **Example:**  
  ```python
  dialog.addWidget(custom_widget, Qt.AlignCenter)
  ```

### `setShadowEffect(blurRadius=60, offset=(0, 10), color=QColor(0,0,0,100))`
- **Description:**  
  Applies a drop shadow effect to the dialog.

- **Parameters:**  
  - `blurRadius`: Shadow blur radius
  - `offset`: Shadow offset as (x, y) tuple
  - `color`: Shadow color

### `setMovable(movable)`
- **Description:**  
  Enables or disables window dragging for frameless dialogs.

- **Parameters:**  
  - `movable`: Boolean to enable/disable moving

### `hideYesButton()`
- **Description:**  
  Hides the confirmation button.

### `hideCancelButton()`
- **Description:**  
  Hides the cancel button.

### `showEvent(e)`
- **Description:**  
  Handles dialog show events with fade-in animation.

### `hideEvent(e)`
- **Description:**  
  Handles dialog hide events and cleans up resources.

### `done(code)`
- **Description:**  
  Closes the dialog with fade-out animation.

---

## Signals

### `accepted()`
- **Description:**  
  Emitted when the user clicks the confirmation button.

### `rejected()`
- **Description:**  
  Emitted when the user clicks the cancel button or rejects the dialog.

---

## Usage Example

### Basic Dialog
```python
from Custom_Widgets.QCustomQDialog import QCustomQDialog

# Create simple dialog
dialog = QCustomQDialog(
    title="Confirmation",
    description="Are you sure you want to proceed?",
    yesButtonText="Confirm",
    cancelButtonText="Cancel"
)

# Connect to signals
dialog.accepted.connect(lambda: print("Dialog accepted"))
dialog.rejected.connect(lambda: print("Dialog rejected"))

dialog.show()
```

### Advanced Customization
```python
from qtpy.QtGui import QIcon

# Create highly customized dialog
dialog = QCustomQDialog(
    parent=self,
    title="Delete Item",
    description="This action cannot be undone. Are you sure you want to delete this item?",
    yesButtonIcon=QIcon("icons/delete.png"),
    cancelButtonIcon=QIcon("icons/cancel.png"),
    yesButtonText="Delete",
    cancelButtonText="Keep",
    animationDuration=500,
    showYesButton=True,
    showCancelButton=True,
    setModal=True,
    frameless=True,
    windowMovable=True,
    blurBackground=True
)

# Customize shadow
dialog.setShadowEffect(
    blurRadius=80,
    offset=(0, 15),
    color=QColor(0, 0, 0, 150)
)
```

### With Custom Form Content
```python
from ui_custom_form import Ui_CustomForm

# Create dialog with custom form
class CustomForm(QWidget):
    def __init__(self):
        super().__init__()
        self.ui = Ui_CustomForm()
        self.ui.setupUi(self)

# Use custom form in dialog
custom_form = CustomForm()
dialog = QCustomQDialog(
    title="User Settings",
    showForm=custom_form,
    yesButtonText="Save",
    cancelButtonText="Cancel"
)

# Access form widgets through shownForm
if dialog.shownForm:
    dialog.shownForm.username_input.setText("John Doe")
```

### Dynamic Widget Addition
```python
# Create dialog and add widgets dynamically
dialog = QCustomQDialog(title="Dynamic Content")

# Add multiple widgets
progress_bar = QProgressBar()
progress_bar.setValue(50)
dialog.addWidget(progress_bar)

status_label = QLabel("Processing...")
dialog.addWidget(status_label)

# Add with alignment
icon_label = QLabel()
icon_label.setPixmap(QPixmap("icons/info.png"))
dialog.addWidget(icon_label, Qt.AlignCenter)
```

### Themed Dialog with CSS
```python
# Apply custom styling
dialog = QCustomQDialog(
    title="Themed Dialog",
    description="This dialog uses custom CSS styling",
    frameless=True
)

# Custom CSS styling
dialog.setStyleSheet("""
    QCustomQDialog {
        background: transparent;
    }
    #widget {
        background-color: #2b2b2b;
        border-radius: 12px;
        border: 1px solid #404040;
    }
    #titleLabel {
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
    }
    #descriptionLabel {
        color: #cccccc;
        font-size: 14px;
    }
    #yesButton {
        background-color: #007acc;
        color: white;
        border-radius: 6px;
        padding: 8px 16px;
    }
    #cancelButton {
        background-color: #555555;
        color: white;
        border-radius: 6px;
        padding: 8px 16px;
    }
""")
```

### Event Handling
```python
class DialogManager:
    def __init__(self):
        self.dialog = None
    
    def show_confirmation(self, message):
        self.dialog = QCustomQDialog(
            title="Confirm Action",
            description=message,
            yesButtonText="Proceed",
            cancelButtonText="Abort"
        )
        
        # Connect signals
        self.dialog.accepted.connect(self.on_accepted)
        self.dialog.rejected.connect(self.on_rejected)
        self.dialog.finished.connect(self.on_finished)
        
        self.dialog.show()
    
    def on_accepted(self):
        print("User confirmed the action")
        # Perform confirmed action
    
    def on_rejected(self):
        print("User rejected the action")
        # Handle rejection
    
    def on_finished(self, result):
        print(f"Dialog closed with result: {result}")
        self.dialog = None
```

---

## Advanced Features

### Animation Control
```python
# Custom animation configuration
dialog = QCustomQDialog(animationDuration=800)

# The dialog automatically uses:
# - QEasingCurve.InSine for fade-in
# - QEasingCurve.OutSine for fade-out
```

### Background Blur Effects
```python
# Enable sophisticated background blur
dialog = QCustomQDialog(blurBackground=True)

# Blur automatically adapts to:
# - Parent window size and position
# - Light/dark theme detection
# - Proper z-ordering with mask widget
```

### Theme Adaptation
```python
# Dialog automatically:
# - Detects light/dark themes
# - Applies appropriate background colors
# - Updates icons when theme changes
# - Maintains consistency with app theme
```

### Responsive Design
```python
# The dialog automatically:
# - Centers itself on the parent window
# - Adjusts size to content and parent
# - Handles parent resize events
# - Maintains proper positioning
```

---

## Styling with SCSS/CSS

### Custom SCSS Styling
```scss
QCustomQDialog {
    #widget {
        background-color: $COLOR_BACKGROUND_1;
        min-width: 300px;
        border-radius: 12px;
    }
    
    #cancelButton {
        background-color: $COLOR_BACKGROUND_3;
        font-weight: bold;
        icon: url($PATH_RESOURCES + 'font_awesome/solid/circle-xmark.png');
        icon-size: 20px 20px;
        border-radius: 6px;
        padding: 8px 16px;
    }
    
    #yesButton {
        background-color: $COLOR_ACCENT_1;
        font-weight: bold;
        icon: url($PATH_RESOURCES + 'material_design/check_circle.png');
        icon-size: 20px 20px;
        border-radius: 6px;
        padding: 8px 16px;
    }
    
    #mainBody {
        border-bottom: $BORDER_2;
        background-color: $COLOR_BACKGROUND_3;
        padding: 20px;
    }
    
    #footer {
        background-color: transparent;
        border: none;
        padding: 15px 20px;
    }
    
    #titleLabel {
        color: $COLOR_TEXT_1;
        font-size: 18px;
        font-weight: bold;
    }
    
    #descriptionLabel {
        color: $COLOR_TEXT_2;
        font-size: 14px;
        line-height: 1.4;
    }
}
```

---

## Additional Notes

- **Performance:**  
  Efficient animation system with proper cleanup prevents memory leaks.

- **Accessibility:**  
  Maintains focus management and proper widget hierarchy.

- **Cross-Platform:**  
  Consistent behavior across Windows, macOS, and Linux.

- **Integration:**  
  Works seamlessly with the custom widgets ecosystem and theme engine.

- **Extensibility:**  
  Designed for subclassing and custom behavior implementation.

---

The `QCustomQDialog` is perfect for modern applications requiring sophisticated dialog interfaces, confirmation dialogs, settings panels, data entry forms, and any scenario where a polished, animated dialog enhances user experience.