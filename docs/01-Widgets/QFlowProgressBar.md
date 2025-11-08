# QFlowProgressBar

`QFlowProgressBar` is a versatile and animated progress indicator widget that displays progress through multiple steps with various visual styles. It provides interactive step navigation and smooth animations for enhanced user experience.

![Custom Embeded Window GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/flow-progress-bar.gif)

---

## Overview

- **Multiple Visual Styles:**  
  Supports circular, flat, square, and breadcrumb styles to match different design requirements.

- **Interactive Steps:**  
  Clickable steps allow users to navigate directly to specific progress stages.

- **Smooth Animations:**  
  Configurable animations with customizable duration and easing curves.

- **Customizable Appearance:**  
  Extensive color, font, and sizing options for complete visual control.

- **Step Indicators:**  
  Clear visual indicators for completed, current, and pending steps.

---

## Constructor

```python
QFlowProgressBar(
    strDetailList: List[str] = None,
    style: int = Styles.Circular,
    parent: QWidget = None,
    finishedNumberColor: QColor = QColor(255, 255, 255),
    finishedBackgroundColor: QColor = QColor(0, 136, 254),
    unfinishedBackgroundColor: QColor = QColor(228, 231, 237),
    numberFontSize: int = 9,
    textFontSize: int = 10,
    currentStep: int = 0,
    pointerDirection: Direction = Direction.Up,
    animationDuration: int = 1000,
    easingCurve: QEasingCurve.Type = QEasingCurve.OutQuad,
    stepsClickable: bool = True
)
```

### Parameters

- **strDetailList:** List of step description strings
- **style:** Progress bar style (`Styles.Circular`, `Styles.Flat`, `Styles.Square`, `Styles.Breadcrumb`)
- **parent:** Parent widget
- **finishedNumberColor:** Color for completed step numbers
- **finishedBackgroundColor:** Background color for completed steps
- **unfinishedBackgroundColor:** Background color for incomplete steps
- **numberFontSize:** Font size for step numbers
- **textFontSize:** Font size for step descriptions
- **currentStep:** Initial active step (0-based)
- **pointerDirection:** Pointer direction for flat style (`Direction.Up`, `Direction.Down`)
- **animationDuration:** Animation duration in milliseconds
- **easingCurve:** Easing curve for animations
- **stepsClickable:** Whether steps can be clicked to navigate

---

## Key Properties

### Style Constants

#### `Styles`
- `Circular` = 0
- `Flat` = 1  
- `Square` = 2
- `Breadcrumb` = 3

#### `Direction`
- `Up` = 0
- `Down` = 1

---

## Methods

### `getCurrentStep() -> int`
- **Description:**  
  Returns the current active step index.

### `changeCurrentStep(step: int)`
- **Description:**  
  Changes the current step with animated transition.

- **Parameters:**  
  - `step`: New step index (0-based)

### `getDrawTextSize(text: str, font: QFont) -> QRect`
- **Description:**  
  Calculates the bounding rectangle for text with given font.

- **Returns:**  
  QRect representing text dimensions

### `getBackgroundColor() -> QColor`
- **Description:**  
  Returns the background color for incomplete progress.

### `getFinishedBackgroundColor() -> QColor`
- **Description:**  
  Returns the color for completed progress segments.

### `getFinishedNumberColor() -> QColor`
- **Description:**  
  Returns the color for numbers in completed steps.

---

## Signals

### `onStepClicked(int)`
- **Description:**  
  Emitted when a step is clicked.

- **Parameter:**  
  Index of the clicked step (0-based)

---

## Usage Example

### Basic Implementation
```python
from qtpy.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QWidget
from Custom_Widgets.QFlowProgressBar import QFlowProgressBar

app = QApplication([])

# Create progress bar with steps
steps = ["Account Setup", "Profile Information", "Preferences", "Confirmation"]
progress_bar = QFlowProgressBar(
    strDetailList=steps,
    style=QFlowProgressBar.Styles.Circular,
    currentStep=0
)

# Handle step clicks
progress_bar.onStepClicked.connect(lambda step: print(f"Step {step + 1} clicked"))

window = QMainWindow()
layout = QVBoxLayout()
layout.addWidget(progress_bar)

container = QWidget()
container.setLayout(layout)
window.setCentralWidget(container)
window.show()

app.exec_()
```

### Multiple Style Demonstration
```python
import sys
from qtpy.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QPushButton, QWidget
from qtpy.QtCore import Qt
from qtpy.QtGui import QColor

from Custom_Widgets.QFlowProgressBar import QFlowProgressBar

class ProgressBarDemo(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QFlowProgressBar Demo")
        self.setGeometry(100, 100, 800, 600)

        layout = QVBoxLayout()

        # Define steps
        steps = ["Initial Setup", "Configuration", "Testing", "Deployment", "Complete"]

        # Create different style progress bars
        styles = [
            (QFlowProgressBar.Styles.Circular, "Circular Style"),
            (QFlowProgressBar.Styles.Flat, "Flat Style"), 
            (QFlowProgressBar.Styles.Square, "Square Style")
        ]

        self.progress_bars = []

        for style, description in styles:
            # Create progress bar with style-specific colors
            if style == QFlowProgressBar.Styles.Circular:
                finished_color = QColor(0, 136, 254)  # Blue
            elif style == QFlowProgressBar.Styles.Flat:
                finished_color = QColor(0, 176, 80)   # Green
            else:
                finished_color = QColor(255, 0, 0)    # Red

            progress_bar = QFlowProgressBar(
                strDetailList=steps,
                style=style,
                finishedBackgroundColor=finished_color,
                unfinishedBackgroundColor=QColor(228, 231, 237),
                finishedNumberColor=Qt.white,
                numberFontSize=12,
                textFontSize=10,
                pointerDirection=QFlowProgressBar.Direction.Down,
                animationDuration=800,
                stepsClickable=True
            )

            progress_bar.setMinimumHeight(80)
            progress_bar.onStepClicked.connect(self.on_step_clicked)
            self.progress_bars.append(progress_bar)
            layout.addWidget(progress_bar)

        # Navigation controls
        self.next_btn = QPushButton("Next Step")
        self.prev_btn = QPushButton("Previous Step")
        
        self.next_btn.clicked.connect(self.next_step)
        self.prev_btn.clicked.connect(self.prev_step)

        layout.addWidget(self.next_btn)
        layout.addWidget(self.prev_btn)

        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

    def next_step(self):
        for bar in self.progress_bars:
            current = bar.getCurrentStep()
            if current < len(bar.stepMessages) - 1:
                bar.changeCurrentStep(current + 1)

    def prev_step(self):
        for bar in self.progress_bars:
            current = bar.getCurrentStep()
            if current > 0:
                bar.changeCurrentStep(current - 1)

    def on_step_clicked(self, step_index):
        print(f"Navigating to step: {step_index + 1}")
        for bar in self.progress_bars:
            bar.changeCurrentStep(step_index)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = ProgressBarDemo()
    window.show()
    sys.exit(app.exec_())
```

### Custom Styling Example
```python
# Custom themed progress bar
class ThemedProgressBar(QFlowProgressBar):
    def __init__(self, steps, theme_colors):
        super().__init__(
            strDetailList=steps,
            style=QFlowProgressBar.Styles.Flat,
            finishedBackgroundColor=theme_colors['primary'],
            unfinishedBackgroundColor=theme_colors['secondary'],
            finishedNumberColor=theme_colors['text'],
            numberFontSize=14,
            textFontSize=12,
            pointerDirection=QFlowProgressBar.Direction.Up,
            animationDuration=1200,
            easingCurve=QEasingCurve.OutCubic
        )

# Usage with custom theme
theme = {
    'primary': QColor(106, 27, 154),  # Purple
    'secondary': QColor(233, 230, 235),  # Light purple
    'text': QColor(255, 255, 255)  # White
}

steps = ["Design", "Develop", "Test", "Launch"]
progress = ThemedProgressBar(steps, theme)
```

### Integration with Workflow
```python
class WorkflowManager:
    def __init__(self):
        self.steps = [
            "Requirements Gathering",
            "Design Approval", 
            "Development",
            "Quality Assurance",
            "Deployment"
        ]
        
        self.progress_bar = QFlowProgressBar(
            strDetailList=self.steps,
            style=QFlowProgressBar.Styles.Circular,
            currentStep=0
        )
        
        self.progress_bar.onStepClicked.connect(self.navigate_to_step)
    
    def navigate_to_step(self, step_index):
        """Navigate to specific workflow step"""
        print(f"Moving to: {self.steps[step_index]}")
        # Implement step-specific logic here
        self.progress_bar.changeCurrentStep(step_index)
    
    def complete_current_step(self):
        """Mark current step as completed"""
        current = self.progress_bar.getCurrentStep()
        if current < len(self.steps) - 1:
            self.progress_bar.changeCurrentStep(current + 1)
```

---

## Visual Styles

### Circular Style
- Rounded step indicators
- Continuous progress bar
- Centered step numbers

### Flat Style  
- Triangular pointer indicators
- Separate progress bar section
- Directional pointers (up/down)

### Square Style
- Square step indicators
- Continuous progress bar
- Clean, modern appearance

### Breadcrumb Style
- Minimalist step indicators
- Focus on step labels
- Compact layout

---

## Animation Features

### Configurable Properties
- **Duration:** 200-2000ms typical range
- **Easing Curves:** All Qt easing curves supported
- **Smooth Transitions:** Progress bar fills smoothly between steps

### Default Settings
- **Duration:** 1000ms
- **Easing:** `QEasingCurve.OutQuad`
- **Interactive:** Enabled by default

---

## Additional Notes

- **Step Limits:** Automatically handles step boundaries
- **Responsive Design:** Adapts to container size changes
- **Accessibility:** Clear visual feedback for interactions
- **Performance:** Efficient painting with minimal overhead
- **Customization:** Extensive styling options for integration

---

The `QFlowProgressBar` is ideal for multi-step forms, installation wizards, workflow trackers, onboarding processes, and any application requiring clear visual progress indication with interactive navigation capabilities.