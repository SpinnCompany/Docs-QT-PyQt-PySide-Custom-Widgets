# QCustomQSlider

`QCustomQSlider` is an enhanced QSlider widget that provides improved click-to-set functionality, allowing users to click anywhere on the slider track to instantly set the slider value to that position.

---

## Overview

- **Enhanced Interaction:**  
  Click anywhere on the slider track to instantly set the slider value.

- **Precise Value Setting:**  
  Accurate position-to-value conversion using Qt's style system.

- **Orientation Support:**  
  Works with both horizontal and vertical slider orientations.

- **Native Integration:**  
  Maintains all standard QSlider functionality and styling.

---

## Constructor

```python
QCustomQSlider(parent=None)
```

- **parent:**  
  The parent widget (defaults to `None`).

---

## Key Features

### Click-to-Set Functionality
- **Standard QSlider:** Requires dragging the handle to change values
- **QCustomQSlider:** Click anywhere on track for instant value setting
- **Precision:** Accurate value calculation based on click position

### Orientation Support
- **Horizontal Sliders:** Left-to-right value progression
- **Vertical Sliders:** Bottom-to-top value progression (standard Qt behavior)

### Native Behavior Preservation
- Maintains all original QSlider signals and properties
- Compatible with existing QSlider styling and theming
- No breaking changes to existing functionality

---

## Methods

### `mousePressEvent(event)`
- **Description:**  
  Overrides the mouse press event to enable click-to-set functionality.

- **Behavior:**  
  - Detects left mouse button clicks
  - Calculates value based on click position
  - Sets slider value instantly
  - Calls parent implementation for other button handling

### `pixelPosToRangeValue(pos)`
- **Description:**  
  Converts mouse click position to slider value.

- **Parameters:**  
  - `pos`: QPoint representing click position

- **Returns:**  
  Integer value within slider's min-max range

- **Process:**  
  1. Creates style options for slider
  2. Calculates slider groove and handle dimensions
  3. Converts pixel position to value using Qt's style system
  4. Handles both horizontal and vertical orientations

---

## Usage Example

### Basic Implementation
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget, QLabel
from Custom_Widgets.QCustomQSlider import QCustomQSlider

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create custom slider
slider = QCustomQSlider()
slider.setOrientation(Qt.Horizontal)
slider.setMinimum(0)
slider.setMaximum(100)
slider.setValue(50)

# Create value display label
value_label = QLabel("Value: 50")

# Connect value change signal
def on_value_changed(value):
    value_label.setText(f"Value: {value}")

slider.valueChanged.connect(on_value_changed)

layout.addWidget(slider)
layout.addWidget(value_label)
window.show()

app.exec_()
```

### Vertical Slider Example
```python
# Create vertical slider
vertical_slider = QCustomQSlider()
vertical_slider.setOrientation(Qt.Vertical)
vertical_slider.setMinimum(0)
vertical_slider.setMaximum(100)
vertical_slider.setValue(25)

# Vertical sliders work with the same click-to-set functionality
```

### Styled Slider with Custom Range
```python
class VolumeControl(QWidget):
    def __init__(self):
        super().__init__()
        
        self.slider = QCustomQSlider()
        self.slider.setOrientation(Qt.Horizontal)
        self.slider.setMinimum(0)
        self.slider.setMaximum(100)
        self.slider.setValue(75)
        
        # Custom styling
        self.slider.setStyleSheet("""
            QSlider::groove:horizontal {
                border: 1px solid #999999;
                height: 8px;
                background: qlineargradient(x1:0, y1:0, x2:0, y2:1, 
                    stop:0 #B1B1B1, stop:1 #c4c4c4);
                margin: 2px 0;
            }
            
            QSlider::handle:horizontal {
                background: qlineargradient(x1:0, y1:0, x2:1, y2:1, 
                    stop:0 #b4b4b4, stop:1 #8f8f8f);
                border: 1px solid #5c5c5c;
                width: 18px;
                margin: -2px 0;
                border-radius: 3px;
            }
        """)
        
        layout = QVBoxLayout(self)
        layout.addWidget(self.slider)
```

### Integration with Media Player
```python
class MediaPlayerControls(QWidget):
    def __init__(self):
        super().__init__()
        
        # Progress slider with click-to-seek
        self.progress_slider = QCustomQSlider()
        self.progress_slider.setOrientation(Qt.Horizontal)
        self.progress_slider.setMinimum(0)
        self.progress_slider.setMaximum(1000)  # High precision for media
        
        # Volume slider
        self.volume_slider = QCustomQSlider()
        self.volume_slider.setOrientation(Qt.Horizontal)
        self.volume_slider.setMinimum(0)
        self.volume_slider.setMaximum(100)
        self.volume_slider.setValue(80)
        
        # Connect signals
        self.progress_slider.sliderReleased.connect(self.on_progress_seek)
        self.volume_slider.valueChanged.connect(self.on_volume_changed)
        
        self.setup_ui()
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Progress:"))
        layout.addWidget(self.progress_slider)
        layout.addWidget(QLabel("Volume:"))
        layout.addWidget(self.volume_slider)
    
    def on_progress_seek(self):
        # Seek to clicked position in media
        position = self.progress_slider.value()
        print(f"Seeking to position: {position}")
    
    def on_volume_changed(self, volume):
        # Adjust volume based on slider value
        print(f"Volume changed to: {volume}%")
```

### Advanced Usage with Custom Ranges
```python
class TemperatureControl(QWidget):
    def __init__(self):
        super().__init__()
        
        # Temperature slider with custom range
        self.temp_slider = QCustomQSlider()
        self.temp_slider.setOrientation(Qt.Horizontal)
        self.temp_slider.setMinimum(-10)  # -10°C
        self.temp_slider.setMaximum(40)   # 40°C
        self.temp_slider.setValue(20)     # Room temperature
        
        self.temp_label = QLabel("20°C")
        
        # Connect value changes
        self.temp_slider.valueChanged.connect(self.update_temperature_display)
        
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Temperature Control:"))
        layout.addWidget(self.temp_slider)
        layout.addWidget(self.temp_label)
    
    def update_temperature_display(self, temperature):
        self.temp_label.setText(f"{temperature}°C")
        
        # Visual feedback for extreme temperatures
        if temperature < 0:
            self.temp_label.setStyleSheet("color: blue;")
        elif temperature > 30:
            self.temp_label.setStyleSheet("color: red;")
        else:
            self.temp_label.setStyleSheet("color: black;")
```

---

## Technical Details

### Position Calculation
The slider uses Qt's style system to accurately calculate values:

```python
def pixelPosToRangeValue(self, pos):
    opt = QStyleOptionSlider()
    self.initStyleOption(opt)
    
    # Get slider groove and handle dimensions
    gr = self.style().subControlRect(QStyle.CC_Slider, opt, QStyle.SC_SliderGroove, self)
    sr = self.style().subControlRect(QStyle.CC_Slider, opt, QStyle.SC_SliderHandle, self)
    
    # Calculate available slider range
    if self.orientation() == Qt.Horizontal:
        sliderLength = sr.width()
        sliderMin = gr.x()
        sliderMax = gr.right() - sliderLength + 1
    else:
        sliderLength = sr.height()
        sliderMin = gr.y()
        sliderMax = gr.bottom() - sliderLength + 1
    
    # Convert pixel position to slider value
    pr = pos - sr.center() + sr.topLeft()
    p = pr.x() if self.orientation() == Qt.Horizontal else pr.y()
    
    return QStyle.sliderValueFromPosition(
        self.minimum(), self.maximum(), 
        p - sliderMin, sliderMax - sliderMin, 
        opt.upsideDown
    )
```

### Signal Integration
All standard QSlider signals are available:

- `valueChanged(int)`: Emitted when value changes
- `sliderPressed()`: Emitted when slider interaction starts
- `sliderReleased()`: Emitted when slider interaction ends
- `sliderMoved(int)`: Emitted during dragging

---

## Benefits Over Standard QSlider

### Improved User Experience
- **Faster Navigation:** Click to jump to any position instantly
- **Better Precision:** Accurate value selection without dragging
- **Mobile-Friendly:** Larger touch targets for better accessibility

### Maintained Compatibility
- **Drop-in Replacement:** Can replace QSlider without code changes
- **Style Preservation:** Works with existing stylesheets and themes
- **Signal Compatibility:** All standard signals behave identically

### Performance
- **Efficient Calculation:** Uses Qt's optimized style system
- **Minimal Overhead:** Only overrides necessary mouse events
- **Native Performance:** No performance impact on value changes

---

## Additional Notes

- **Theme Compatibility:**  
  Works with all Qt styling systems and theme engines.

- **Accessibility:**  
  Enhanced accessibility through larger clickable areas.

- **Cross-Platform:**  
  Consistent behavior across Windows, macOS, and Linux.

- **Customization:**  
  Can be styled using standard QSlider stylesheets.

---

The `QCustomQSlider` is ideal for media players, configuration dialogs, settings panels, and any application where quick and precise value selection improves user experience.