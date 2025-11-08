# QAvatarWidget

`QAvatarWidget` is a custom circular avatar widget that displays profile pictures or user images with rounded borders and customizable styling. It provides a visually appealing way to display user avatars with smooth rounded corners and border effects.

---

## Overview

- **Circular Avatars:**  
  Automatically crops and displays images as perfect circles with smooth anti-aliasing.

- **Customizable Borders:**  
  Supports configurable border color and width for enhanced visual appearance.

- **Click Interaction:**  
  Emits click signals for user interaction handling.

- **High-Quality Rendering:**  
  Uses smooth pixmap transformation and anti-aliasing for crisp image display.

- **Designer Integration:**  
  Provides XML description and icon for seamless Qt Designer integration.

---

## Constructor

```python
QAvatarWidget(parent=None, avatarPath="")
```

- **parent:**  
  The parent widget (defaults to `None`).

- **avatarPath:**  
  Path to the initial avatar image file. If not provided, uses the default user icon.

---

## Key Properties

### `avatarPath` (QPixmap)
- **Purpose:**  
  The avatar image displayed in the widget.

- **Getter:**  
  Returns the current avatar as QPixmap.

- **Setter:**  
  Accepts either QPixmap or file path string. Automatically scales and applies rounded corners.

- **Example:**  
  ```python
  avatar.avatarPath = "path/to/avatar.jpg"
  # or
  avatar.avatarPath = QPixmap("path/to/avatar.jpg")
  ```

### `borderColor` (QColor)
- **Purpose:**  
  Color of the border around the avatar.

- **Getter:**  
  Returns the current border color.

- **Setter:**  
  Updates the border color and triggers repaint.

- **Example:**  
  ```python
  avatar.borderColor = QColor("#ffffff")
  avatar.borderColor = QColor(255, 255, 255)
  ```

### `borderWidth` (int)
- **Purpose:**  
  Width of the border around the avatar in pixels.

- **Getter:**  
  Returns the current border width.

- **Setter:**  
  Updates the border width and triggers repaint.

- **Example:**  
  ```python
  avatar.borderWidth = 3
  ```

---

## Methods

### `setAvatar(avatarPath)`
- **Description:**  
  Loads and displays an avatar image from the specified file path.

- **Parameters:**  
  - `avatarPath`: Path to the image file.

- **Features:**  
  - Automatically scales image to fit widget size (100x100)
  - Maintains aspect ratio
  - Applies smooth transformation
  - Updates widget display

- **Example:**  
  ```python
  avatar.setAvatar("images/profile.jpg")
  ```

### `roundedPixmap(pixmap)`
- **Description:**  
  Internal method that converts a rectangular pixmap to a circular one with border.

- **Parameters:**  
  - `pixmap`: Source QPixmap to convert.

- **Returns:**  
  QPixmap with rounded corners and applied border.

### `paintEvent(event)`
- **Description:**  
  Handles widget painting, rendering the rounded avatar with border.

### `mousePressEvent(event)`
- **Description:**  
  Handles mouse click events and emits the `clicked` signal.

### `showEvent(event)`
- **Description:**  
  Ensures proper widget update when shown.

---

## Signals

### `clicked()`
- **Description:**  
  Emitted when the avatar widget is clicked.

- **Usage:**  
  Connect to this signal to handle user interactions with the avatar.

- **Example:**  
  ```python
  avatar.clicked.connect(self.on_avatar_clicked)
  ```

---

## Usage Example

### Basic Usage
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget
from Custom_Widgets.QAvatarWidget import QAvatarWidget

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create avatar with default icon
avatar = QAvatarWidget()

# Or create with custom image
avatar = QAvatarWidget(avatarPath="path/to/user_photo.jpg")

layout.addWidget(avatar)
window.show()

app.exec_()
```

### Advanced Customization
```python
from qtpy.QtGui import QColor

# Create avatar widget
avatar = QAvatarWidget()

# Set custom avatar image
avatar.setAvatar("images/custom_avatar.png")

# Customize border
avatar.borderColor = QColor("#3498db")  # Blue border
avatar.borderWidth = 4                  # Thicker border

# Handle click events
def on_avatar_clicked():
    print("Avatar clicked! Open profile dialog...")

avatar.clicked.connect(on_avatar_clicked)
```

### Dynamic Avatar Updates
```python
class UserProfile:
    def __init__(self):
        self.avatar = QAvatarWidget()
        self.setup_avatar()
    
    def setup_avatar(self):
        # Initial setup
        self.avatar.borderColor = QColor("#e74c3c")
        self.avatar.borderWidth = 2
        
        # Connect click handler
        self.avatar.clicked.connect(self.change_avatar)
    
    def change_avatar(self):
        # Simulate avatar change (in real app, would open file dialog)
        new_avatar_path = "path/to/new_avatar.jpg"
        self.avatar.setAvatar(new_avatar_path)
        
        # Change border color for visual feedback
        self.avatar.borderColor = QColor("#2ecc71")  # Green border
```

### Integration with User Data
```python
class UserCard(QWidget):
    def __init__(self, user_data):
        super().__init__()
        
        self.user_data = user_data
        self.avatar = QAvatarWidget()
        
        self.setup_ui()
        self.load_user_data()
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        layout.addWidget(self.avatar)
        
        # Connect avatar click to show user profile
        self.avatar.clicked.connect(self.show_user_profile)
    
    def load_user_data(self):
        # Load avatar from user data
        if self.user_data.get('avatar_path'):
            self.avatar.setAvatar(self.user_data['avatar_path'])
        
        # Set border color based on user status
        status_color = {
            'online': QColor("#2ecc71"),
            'offline': QColor("#95a5a6"), 
            'away': QColor("#f39c12")
        }
        self.avatar.borderColor = status_color.get(
            self.user_data.get('status', 'offline'), 
            QColor("#95a5a6")
        )
    
    def show_user_profile(self):
        print(f"Showing profile for: {self.user_data['name']}")
```

---

## Design Features

### Default Appearance
- **Size:** Fixed at 100x100 pixels
- **Cursor:** Pointing hand cursor indicates clickability
- **Default Icon:** Uses built-in user.png icon

### Image Processing
- **Aspect Ratio:** Maintains original aspect ratio
- **Smooth Scaling:** Uses high-quality transformation
- **Circular Crop:** Perfect circle mask with anti-aliasing
- **Border Rendering:** Smooth border with specified color and width

### Visual Properties
- **Transparent Background:** Only the avatar image and border are visible
- **Consistent Sizing:** Fixed size ensures layout stability
- **High DPI Support:** Properly handles high-resolution displays

---

## Additional Notes

- **Image Formats:**  
  Supports all image formats supported by Qt (PNG, JPG, JPEG, BMP, etc.)

- **Performance:**  
  Image processing is optimized and cached for smooth performance

- **Accessibility:**  
  Clickable area covers the entire widget for easy interaction

- **Theme Compatibility:**  
  Works well with both light and dark themes through customizable borders

- **Responsive Design:**  
  While fixed size is default, can be styled further with CSS for flexibility

---

The `QAvatarWidget` is perfect for user profiles, contact lists, chat applications, social media interfaces, and any application requiring visually appealing user image display with interactive capabilities.