# QCustomProgressIndicator

`QCustomProgressIndicator` is a custom multi-step progress indicator widget that provides visual feedback for form completion, multi-step processes, or workflow progression. It displays progress through numbered steps with animated transitions and status indicators.

---

## Overview

- **Multi-Step Progress:**  
  Visualizes progress through multiple steps with numbered indicators.

- **Animated Transitions:**  
  Smooth animated progress bar with customizable easing curves and duration.

- **Status Indicators:**  
  Supports success, warning, and error states for individual steps.

- **Theme Support:**  
  Includes multiple built-in color themes with gradient effects.

- **Customizable Appearance:**  
  Configurable colors, dimensions, step count, and animation properties.

---

## Constructor

```python
QCustomProgressIndicator(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`).

---

## Key Properties

### `color` (str)
- **Purpose:**  
  Text color for step numbers and icons.

### `fillColor` (str)  
- **Purpose:**  
  Primary progress bar and step fill color.

### `successFillColor` (str)
- **Purpose:**  
  Color for steps marked as successful.

### `warningFillColor` (str)
- **Purpose:**  
  Color for steps with warnings.

### `errorFillColor` (str)
- **Purpose:**  
  Color for steps with errors.

### `formProgressCount` (int)
- **Purpose:**  
  Total number of progress steps (default: 5).

### `formProgressWidth` (int)
- **Purpose:**  
  Width of the progress indicator.

### `formProgressHeight` (int)
- **Purpose:**  
  Height of the progress indicator.

---

## Methods

### `selectFormProgressIndicatorTheme(themeNumber)`
- **Description:**  
  Applies one of the built-in color themes.

- **Parameters:**  
  - `themeNumber`: Integer from 1 to 5 representing different theme styles.

- **Themes Available:**
  - **Theme 1:** Yellow gradient with radial error/warning indicators
  - **Theme 2:** Teal gradient with colorful accents
  - **Theme 3:** Dark gradient with white text
  - **Theme 4:** Blue gradient with colorful accents
  - **Theme 5:** Light gradient with dark text

- **Example:**  
  ```python
  progress_indicator.selectFormProgressIndicatorTheme(3)
  ```

### `setStepStatus(**stepStatus)`
- **Description:**  
  Sets the status (success, warning, error) for specific steps.

- **Parameters:**  
  - `step`: Step number to modify
  - `status`: Status type ("success", "warning", or "error")
  - `value`: Boolean indicating if the status is active

- **Example:**  
  ```python
  progress_indicator.setStepStatus(step=2, status="success", value=True)
  progress_indicator.setStepStatus(step=3, status="warning", value=True)
  progress_indicator.setStepStatus(step=4, status="error", value=True)
  ```

### `updateFormProgressIndicator(**values)`
- **Description:**  
  Updates multiple properties of the progress indicator.

- **Parameters:**  
  - `color`: Text color
  - `fillColor`: Primary progress color
  - `warningFillColor`: Warning step color
  - `errorFillColor`: Error step color
  - `successFillColor`: Success step color
  - `formProgressCount`: Number of steps
  - `formProgressAnimationDuration`: Animation duration in ms
  - `formProgressAnimationEasingCurve`: Easing curve name
  - `height`: Widget height
  - `width`: Widget width
  - `startPercentage`: Initial progress percentage (0-100)

- **Example:**  
  ```python
  progress_indicator.updateFormProgressIndicator(
      formProgressCount=8,
      formProgressAnimationDuration=1000,
      height=40,
      startPercentage=25
  )
  ```

### `animateFormProgress(percentage)`
- **Description:**  
  Animates the progress bar to the specified percentage.

- **Parameters:**  
  - `percentage`: Target progress percentage (0-100)

- **Example:**  
  ```python
  progress_indicator.animateFormProgress(75)  # Animate to 75%
  ```

### `updateFormProgress(value)`
- **Description:**  
  Immediately updates progress without animation.

- **Parameters:**  
  - `value`: Progress width in pixels

### `createFormProgressIndicator()`
- **Description:**  
  Internal method that creates the progress indicator layout and components.

---

## Usage Example

### Basic Usage
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget
from Custom_Widgets.QCustomProgressIndicator import QCustomProgressIndicator

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create progress indicator
progress = QCustomProgressIndicator()

# Configure basic properties
progress.updateFormProgressIndicator(
    formProgressCount=5,
    height=30,
    width=400
)

# Apply a theme
progress.selectFormProgressIndicatorTheme(2)

layout.addWidget(progress)
window.show()

app.exec_()
```

### Advanced Usage with Step Status
```python
# Create progress indicator with 6 steps
progress = QCustomProgressIndicator()
progress.updateFormProgressIndicator(formProgressCount=6)

# Set step statuses
progress.setStepStatus(step=1, status="success", value=True)
progress.setStepStatus(step=2, status="success", value=True)
progress.setStepStatus(step=3, status="warning", value=True)
progress.setStepStatus(step=4, status="error", value=True)

# Animate progress to 66% (4 out of 6 steps)
progress.animateFormProgress(66)

# Custom colors
progress.updateFormProgressIndicator(
    fillColor="qlineargradient(spread:pad, x1:0, y1:0.5, x2:1, y2:0.5, stop:0 #FF6B6B, stop:1 #4ECDC4)",
    successFillColor="#4ECDC4",
    warningFillColor="#FFE66D",
    errorFillColor="#FF6B6B"
)
```

### Complete Workflow Example
```python
def simulate_workflow(progress):
    """Simulate a multi-step workflow"""
    steps = 5
    progress.updateFormProgressIndicator(formProgressCount=steps)
    
    # Step 1: Processing
    progress.animateFormProgress(20)
    progress.setStepStatus(step=1, status="success", value=True)
    
    # Step 2: Validation (with warning)
    progress.animateFormProgress(40)
    progress.setStepStatus(step=2, status="warning", value=True)
    
    # Step 3: Analysis
    progress.animateFormProgress(60)
    progress.setStepStatus(step=3, status="success", value=True)
    
    # Step 4: Export (error)
    progress.animateFormProgress(80)
    progress.setStepStatus(step=4, status="error", value=True)
    
    # Step 5: Completion
    progress.animateFormProgress(100)
    progress.setStepStatus(step=5, status="success", value=True)

# Usage
progress = QCustomProgressIndicator()
simulate_workflow(progress)
```

---

## Animation Configuration

### Easing Curves
The progress animation supports various easing curves via `returnAnimationEasingCurve()`:

- `"Linear"`
- `"InQuad"`, `"OutQuad"`, `"InOutQuad"`
- `"InCubic"`, `"OutCubic"`, `"InOutCubic"`
- `"InQuart"`, `"OutQuart"`, `"InOutQuart"`
- And many more Qt easing curves

### Duration Control
Set animation duration in milliseconds:
```python
progress.updateFormProgressIndicator(formProgressAnimationDuration=800)
```

---

## Visual Features

### Step Indicators
- **Normal:** Number display with primary fill color
- **Success:** Checkmark (✔) with success color
- **Warning:** Exclamation (!) with warning color  
- **Error:** Cross (✘) with error color

### Progress Bar
- Animated background bar showing overall progress
- Rounded corners matching step indicators
- Smooth width transitions

### Tooltips
Each step includes descriptive tooltips:
- Normal steps: "Step X"
- Status steps: "Success!", "Warning!", "Error!"

---

## Customization Options

### Colors
- Support for solid colors (`#RRGGBB`)
- Gradient definitions using Qt's gradient syntax
- Theme-aware color combinations

### Dimensions
- Adjustable height and width
- Responsive step indicator sizing
- Automatic spacing

### Step Count
- Dynamic step count modification
- Automatic layout regeneration
- Preserved step statuses

---

## Additional Notes

- **Responsive Design:**  
  Automatically adjusts step sizes based on container dimensions.

- **Error Handling:**  
  Includes validation for theme numbers and percentage ranges.

- **Performance:**  
  Efficient animation system using `QVariantAnimation`.

- **Accessibility:**  
  Tooltips provide status information for each step.

- **Integration:**  
  Compatible with Qt Designer through proper widget registration.

---

The `QCustomProgressIndicator` is ideal for multi-step forms, installation wizards, workflow trackers, and any application requiring visual progress tracking through sequential steps with status feedback.