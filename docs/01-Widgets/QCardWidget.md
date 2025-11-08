# QCard Widget

`QCard` is a styling system that allows you to apply uniform drop shadow effects to groups of widgets, creating visually appealing card-based layouts perfect for dashboards and modern UI designs.

---

## Overview

- **Group-Based Styling:**  
  Apply consistent shadow effects to multiple widgets simultaneously.

- **JSON Configuration:**  
  Configure card appearances through simple JSON structure.

- **Dashboard Ready:**  
  Perfect for creating modern dashboard interfaces with card-based layouts.

- **Visual Consistency:**  
  Maintain uniform shadow effects across related widget groups.

---

## Installation

```bash
pip install QT-PyQt-PySide-Custom-Widgets
```

---

## Visual Examples

![QT Cards](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/blob/main/images/qt-cards-on-dashboard.png?raw=true)

![QT Cards Example](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/blob/main/images/Screenshot_20230923_074144.png?raw=true)

## Basic Configuration

Create a `style.json` file in your project root:

```json
{
  "QCard": [
    {
      "cards": [
        "card1",
        "card2", 
        "card3",
        "card4"
      ],
      "shadow": [
        {
          "color": "#000000",
          "blurRadius": 15,
          "xOffset": 0,
          "yOffset": 5
        }
      ]
    }
  ]
}
```

## Advanced Multi-Group Configuration

```json
{
  "QCard": [
    {
      "cards": [
        "metricsCard1",
        "metricsCard2",
        "metricsCard3"
      ],
      "shadow": [
        {
          "color": "#2c3e50",
          "blurRadius": 20,
          "xOffset": 0,
          "yOffset": 8
        }
      ]
    },
    {
      "cards": [
        "sidebarCard",
        "navigationCard"
      ],
      "shadow": [
        {
          "color": "#34495e",
          "blurRadius": 10,
          "xOffset": 2,
          "yOffset": 2
        }
      ]
    },
    {
      "cards": [
        "userProfileCard",
        "settingsCard"
      ],
      "shadow": [
        {
          "color": "#7f8c8d",
          "blurRadius": 25,
          "xOffset": 0,
          "yOffset": 12
        }
      ]
    }
  ]
}
```

## Shadow Properties

### `color` (string)
- **Purpose:** Shadow color in hex format
- **Default:** `"#000000"`
- **Example:** `"#2c3e50"`, `"rgba(0,0,0,0.1)"`

### `blurRadius` (integer)
- **Purpose:** Blur intensity of the shadow
- **Default:** `0`
- **Range:** `0` (sharp) to `100` (very blurry)
- **Recommended:** `10-25`

### `xOffset` (integer)
- **Purpose:** Horizontal shadow offset
- **Default:** `0`
- **Positive:** Right offset, **Negative:** Left offset

### `yOffset` (integer)
- **Purpose:** Vertical shadow offset  
- **Default:** `0`
- **Positive:** Downward offset, **Negative:** Upward offset

## Implementation Details

### Shadow Application Process
```python
def configure_cards(self, data, update: bool = False):
    if "QCard" in data:
        for QCard in data['QCard']:
            if "cards" in QCard:
                for card in QCard['cards']:
                    cardWidget = get_widget_from_path(self, str(card))
                    if cardWidget:   
                        effect = QGraphicsDropShadowEffect(cardWidget)
                        # Apply shadow configuration
                        # ...
                        cardWidget.setGraphicsEffect(effect)
```

### Widget Path Resolution
The system uses `get_widget_from_path()` to resolve widget names to actual widget objects:

```python
# Resolves "header.stats.metricCard" to:
# self.ui.header.stats.metricCard
widget = get_widget_from_path(self, "header.stats.metricCard")
```

## Usage Examples

### Dashboard Metrics Cards
```json
{
  "QCard": [
    {
      "cards": [
        "revenueCard",
        "usersCard",
        "growthCard",
        "conversionCard"
      ],
      "shadow": [
        {
          "color": "#3498db",
          "blurRadius": 15,
          "xOffset": 0,
          "yOffset": 4
        }
      ]
    }
  ]
}
```

### Profile and Settings Cards
```json
{
  "QCard": [
    {
      "cards": [
        "userProfile",
        "accountSettings",
        "preferencesCard"
      ],
      "shadow": [
        {
          "color": "#95a5a6",
          "blurRadius": 12,
          "xOffset": 1,
          "yOffset": 3
        }
      ]
    }
  ]
}
```

### Notification Cards
```json
{
  "QCard": [
    {
      "cards": [
        "alertCard",
        "notificationCard",
        "messageCard"
      ],
      "shadow": [
        {
          "color": "#e74c3c",
          "blurRadius": 8,
          "xOffset": 0,
          "yOffset": 2
        }
      ]
    }
  ]
}
```

## Integration with Main Application

```python
from Custom_Widgets import loadJsonStyle

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        
        # Load card styles from JSON
        loadJsonStyle(self, self.ui, jsonFiles={"style.json"})
        
        # Apply the styles
        self.applyJsonStyle()
```

## Best Practices

### Shadow Consistency
- Use similar shadow settings for related card groups
- Maintain consistent blur radius across the application
- Consider theme colors when choosing shadow colors

### Performance Considerations
- Avoid excessive blur radius values (>30)
- Limit the number of shadow effects on complex layouts
- Use appropriate shadow colors for dark/light themes

### Theme Integration
```json
{
  "QCard": [
    {
      "cards": ["themeAwareCard"],
      "shadow": [
        {
          "color": "var(--shadow-color)",
          "blurRadius": 15,
          "xOffset": 0,
          "yOffset": 5
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Common Issues

1. **Shadow Not Appearing**
   - Verify widget names in JSON match actual object names
   - Check that shadow color has proper opacity
   - Ensure blur radius is greater than 0

2. **Performance Problems**
   - Reduce blur radius for better performance
   - Limit shadow effects to essential cards only
   - Consider using CSS shadows for simple cases

3. **Inconsistent Appearance**
   - Use theme variables for consistent colors
   - Maintain uniform shadow settings across card groups
   - Test on different background colors

## Additional Resources
- [Video Tutorial](https://youtu.be/44IbJnTiKRg)

---

The QCard system provides an efficient way to create visually consistent card-based layouts with minimal configuration, making it ideal for dashboards, data visualization applications, and modern user interfaces.