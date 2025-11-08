# QCustomQStackedWidget

`QCustomQStackedWidget` is an enhanced version of Qt's standard `QStackedWidget` that provides smooth animated transitions between pages. It supports both slide and fade animations with customizable timing and easing curves.

![Custom QStacked Widgets](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/blob/main/images/qstacked.png?raw=true)

---

## Overview

- **Animated Transitions:**  
  Smooth slide and fade animations when switching between widget pages.

- **Customizable Effects:**  
  Configurable animation duration, easing curves, and transition directions.

- **Easy Navigation:**  
  Built-in methods for next/previous page navigation with animations.

- **Designer Integration:**  
  Full Qt Designer support with custom properties and preview.

- **Flexible Configuration:**  
  Supports both programmatic and JSON-based configuration.

---

## Constructor

```python
QCustomQStackedWidget(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`).

---

## Key Properties

### `fadeTransition` (bool)
- **Purpose:**  
  Enables or disables fade animation between pages.

- **Getter:**  
  Returns `True` if fade transition is enabled.

- **Setter:**  
  Toggles fade animation.

- **Example:**  
  ```python
  stacked.fadeTransition = True
  ```

### `slideTransition` (bool)
- **Purpose:**  
  Enables or disables slide animation between pages.

- **Getter:**  
  Returns `True` if slide transition is enabled.

- **Setter:**  
  Toggles slide animation.

- **Example:**  
  ```python
  stacked.slideTransition = True
  ```

### `transitionTime` (int)
- **Purpose:**  
  Duration of slide animations in milliseconds.

- **Getter:**  
  Returns current slide animation duration.

- **Setter:**  
  Updates slide animation duration.

- **Example:**  
  ```python
  stacked.transitionTime = 500
  ```

### `fadeTime` (int)
- **Purpose:**  
  Duration of fade animations in milliseconds.

- **Getter:**  
  Returns current fade animation duration.

- **Setter:**  
  Updates fade animation duration.

- **Example:**  
  ```python
  stacked.fadeTime = 300
  ```

### `transitionEasingCurve` (str)
- **Purpose:**  
  Easing curve for slide animations.

- **Getter:**  
  Returns current slide easing curve.

- **Setter:**  
  Updates slide animation easing curve.

- **Example:**  
  ```python
  stacked.transitionEasingCurve = "OutBack"
  ```

### `fadeEasingCurve` (str)
- **Purpose:**  
  Easing curve for fade animations.

- **Getter:**  
  Returns current fade easing curve.

- **Setter:**  
  Updates fade animation easing curve.

- **Example:**  
  ```python
  stacked.fadeEasingCurve = "Linear"
  ```

---

## Methods

### `setTransitionDirection(direction)`
- **Description:**  
  Sets the direction for slide animations.

- **Parameters:**  
  - `direction`: `Qt.Horizontal` or `Qt.Vertical`

- **Example:**  
  ```python
  stacked.setTransitionDirection(Qt.Horizontal)
  ```

### `setTransitionSpeed(speed)`
- **Description:**  
  Sets the duration for slide animations.

- **Parameters:**  
  - `speed`: Duration in milliseconds

- **Example:**  
  ```python
  stacked.setTransitionSpeed(500)
  ```

### `setFadeSpeed(speed)`
- **Description:**  
  Sets the duration for fade animations.

- **Parameters:**  
  - `speed`: Duration in milliseconds

- **Example:**  
  ```python
  stacked.setFadeSpeed(300)
  ```

### `setTransitionEasingCurve(curve)`
- **Description:**  
  Sets the easing curve for slide animations.

- **Parameters:**  
  - `curve`: Easing curve name string

- **Example:**  
  ```python
  stacked.setTransitionEasingCurve("OutCubic")
  ```

### `setFadeCurve(curve)`
- **Description:**  
  Sets the easing curve for fade animations.

- **Parameters:**  
  - `curve`: Easing curve name string

- **Example:**  
  ```python
  stacked.setFadeCurve("Linear")
  ```

### `slideToPreviousWidget()`
- **Description:**  
  Animates transition to the previous widget in the stack.

- **Behavior:**  
  - Decrements current index with animation
  - Wraps around to last widget if at first

- **Example:**  
  ```python
  stacked.slideToPreviousWidget()
  ```

### `slideToNextWidget()`
- **Description:**  
  Animates transition to the next widget in the stack.

- **Behavior:**  
  - Increments current index with animation
  - Wraps around to first widget if at last

- **Example:**  
  ```python
  stacked.slideToNextWidget()
  ```

### `slideToWidgetIndex(index)`
- **Description:**  
  Animates transition to a specific widget index.

- **Parameters:**  
  - `index`: Target widget index

- **Example:**  
  ```python
  stacked.slideToWidgetIndex(2)
  ```

### `slideToWidget(widget)`
- **Description:**  
  Animates transition to a specific widget.

- **Parameters:**  
  - `widget`: Target widget object

- **Example:**  
  ```python
  stacked.slideToWidget(settings_page)
  ```

### `setCurrentWidget(widget)`
- **Description:**  
  Overridden method to use animations when switching widgets.

- **Parameters:**  
  - `widget`: Target widget object

- **Example:**  
  ```python
  stacked.setCurrentWidget(profile_page)
  ```

---

## Usage Example

### Basic Setup
```python
from qtpy.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel
from Custom_Widgets.QCustomQStackedWidget import QCustomQStackedWidget

app = QApplication([])

# Create stacked widget
stacked = QCustomQStackedWidget()

# Add pages
page1 = QLabel("Page 1 Content")
page2 = QLabel("Page 2 Content") 
page3 = QLabel("Page 3 Content")

stacked.addWidget(page1)
stacked.addWidget(page2)
stacked.addWidget(page3)

# Configure animations
stacked.slideTransition = True
stacked.fadeTransition = True
stacked.setTransitionSpeed(500)
stacked.setFadeSpeed(300)
stacked.setTransitionDirection(Qt.Horizontal)

stacked.show()
app.exec_()
```

### Navigation Controls
```python
from qtpy.QtWidgets import QPushButton, QHBoxLayout

class NavigationWindow(QWidget):
    def __init__(self):
        super().__init__()
        
        self.stack = QCustomQStackedWidget()
        self.setup_ui()
        self.configure_animations()
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        
        # Navigation buttons
        nav_layout = QHBoxLayout()
        self.prev_btn = QPushButton("Previous")
        self.next_btn = QPushButton("Next")
        self.page1_btn = QPushButton("Page 1")
        self.page2_btn = QPushButton("Page 2")
        
        nav_layout.addWidget(self.prev_btn)
        nav_layout.addWidget(self.next_btn)
        nav_layout.addWidget(self.page1_btn)
        nav_layout.addWidget(self.page2_btn)
        
        layout.addLayout(nav_layout)
        layout.addWidget(self.stack)
        
        # Add pages
        self.page1 = QLabel("Welcome to Page 1")
        self.page2 = QLabel("Welcome to Page 2")
        
        self.stack.addWidget(self.page1)
        self.stack.addWidget(self.page2)
        
        # Connect navigation
        self.prev_btn.clicked.connect(self.stack.slideToPreviousWidget)
        self.next_btn.clicked.connect(self.stack.slideToNextWidget)
        self.page1_btn.clicked.connect(lambda: self.stack.slideToWidget(self.page1))
        self.page2_btn.clicked.connect(lambda: self.stack.slideToWidget(self.page2))
    
    def configure_animations(self):
        self.stack.slideTransition = True
        self.stack.setTransitionSpeed(400)
        self.stack.setTransitionDirection(Qt.Horizontal)
        self.stack.setTransitionEasingCurve("OutCubic")
```

### JSON Configuration
Create `style.json`:
```json
{
  "QCustomQStackedWidget": [
    {
      "name": "mainStack",
      "transitionAnimation": {
        "fade": {
          "active": true,
          "duration": 300,
          "easingCurve": "Linear"
        },
        "slide": {
          "active": true,
          "duration": 500,
          "direction": "horizontal",
          "easingCurve": "OutBack"
        }
      },
      "navigation": {
        "nextPage": "nextBtn",
        "previousPage": "prevBtn",
        "navigationButtons": {
          "homeBtn": "homePage",
          "settingsBtn": "settingsPage"
        }
      }
    }
  ]
}
```

Apply JSON styling:
```python
from Custom_Widgets import loadJsonStyle

# Apply JSON configuration
loadJsonStyle(self, self.ui)
```

### Advanced Animation Configuration
```python
# Complex animation setup
stacked = QCustomQStackedWidget()

# Enable both transitions
stacked.slideTransition = True
stacked.fadeTransition = True

# Configure timing
stacked.setTransitionSpeed(600)  # Slide duration
stacked.setFadeSpeed(400)        # Fade duration

# Configure easing curves
stacked.setTransitionEasingCurve("OutBack")
stacked.setFadeCurve("InOutCubic")

# Set direction
stacked.setTransitionDirection(Qt.Vertical)  # Up/down transitions

# Add navigation
next_btn.clicked.connect(stacked.slideToNextWidget)
prev_btn.clicked.connect(stacked.slideToPreviousWidget)
```

---

## Animation Features

### Supported Easing Curves
- `"Linear"`
- `"InQuad"`, `"OutQuad"`, `"InOutQuad"`
- `"InCubic"`, `"OutCubic"`, `"InOutCubic"`
- `"InQuart"`, `"OutQuart"`, `"InOutQuart"`
- `"InQuint"`, `"OutQuint"`, `"InOutQuint"`
- `"InSine"`, `"OutSine"`, `"InOutSine"`
- `"InExpo"`, `"OutExpo"`, `"InOutExpo"`
- `"InCirc"`, `"OutCirc"`, `"InOutCirc"`
- `"InElastic"`, `"OutElastic"`, `"InOutElastic"`
- `"InBack"`, `"OutBack"`, `"InOutBack"`
- `"InBounce"`, `"OutBounce"`, `"InOutBounce"`

### Transition Directions
- **Horizontal:** Left/right sliding
- **Vertical:** Up/down sliding

### Combined Effects
- **Slide + Fade:** Simultaneous sliding and fading
- **Sequential:** Configurable timing for complex effects
- **Directional:** Different directions for different navigation

---

## Additional Notes

- **Performance:**  
  Uses `QParallelAnimationGroup` for efficient simultaneous animations.

- **Memory Management:**  
  Proper cleanup of animation objects to prevent memory leaks.

- **Error Handling:**  
  Prevents animation conflicts with active transition checks.

- **Designer Support:**  
  All properties available in Qt Designer property editor.

- **Compatibility:**  
  Maintains full compatibility with standard `QStackedWidget` API.

---

The `QCustomQStackedWidget` is perfect for wizard interfaces, onboarding flows, settings panels, tabbed interfaces, and any application requiring smooth, animated transitions between different content pages.