# JSON Styles

The **JSON Stylesheet** is the central configuration file used by the **Custom Widgets** system to configure application appearance, behavior, and theming.

---

## Default Location

Typically found at:
```
/your_project/JsonStyles/style.json
```

Use it in your code as follows:

```python
from Custom_Widgets import loadJsonStyle

loadJsonStyle(self, self.ui)  # Applies all settings and themes
```

---

## Complete JSON Structure

```json
{
  "ShowLogs": true,
  "LiveCompileQss": true,
  "CheckForMissingicons": true,
  
  "QMainWindow": [
    {
      "title": "Modern UI",
      "icon": "path/to/icon.png",
      "frameless": false,
      "transluscentBg": false,
      "sizeGrip": "sizeGripWidgetName",
      "borderRadius": 10,
      "shadow": {
        "color": "#40000000",
        "blurRadius": 20,
        "xOffset": 0,
        "yOffset": 0
      },
      "navigation": {
        "minimize": "minimizeBtn",
        "close": "closeBtn",
        "restore": {
          "buttonName": "restoreBtn",
          "normalIcon": "restore_normal.svg",
          "maximizedIcon": "restore_maximized.svg"
        },
        "moveWindow": "headerWidget",
        "tittleBar": "titleBarWidget"
      }
    }
  ],
  
  "QSettings": [
    {
      "AppSettings": {
        "OrginizationName": "Modern UI",
        "ApplicationName": "Modern UI Company",
        "OrginizationDormain": "modernui.com"
      },
      "ThemeSettings": {
        "QtDesignerIconsColor": "#03C3C3",
        "CustomThemes": [
          {
            "Theme-name": "Dark-Blue",
            "Background-color": "#16191d",
            "Text-color": "#ffffff",
            "Accent-color": "#03C3C3",
            "Icons-color": "#03C3C3",
            "Default-Theme": true,
            "Create-icons": true,
            "Other-variables": {
              "CARD_RADIUS": "12px",
              "FOOTER_BG": "#0f0f0f"
            }
          }
        ],
        "Fonts": {
          "LoadFonts": [
            {
              "name": "Inter",
              "path": "fonts/Inter-Regular.ttf"
            }
          ],
          "DefaultFont": {
            "name": "Inter"
          }
        }
      }
    }
  ],
  
  "QCard": [
    {
      "cards": ["card1", "card2", "container.card3"],
      "shadow": [
        {
          "color": "#40000000",
          "blurRadius": 20,
          "xOffset": 0,
          "yOffset": 0
        }
      ]
    }
  ],
  
  "QPushButtonGroup": [
    {
      "Buttons": ["btn1", "btn2", "container.btn3"],
      "ActiveButton": "btn1",
      "Style": {
        "Active": "background-color: #03C3C3; color: white;",
        "NotActive": "background-color: transparent; color: gray;"
      }
    }
  ],
  
  "AnalogGaugeWidget": [
    {
      "name": "gaugeWidget",
      "units": "RPM",
      "minValue": 0,
      "maxValue": 8000,
      "scalaCount": 8,
      "startValue": 2000,
      "gaugeTheme": 1,
      "offsetAngle": 0,
      "innerRadius": 80,
      "outerRadius": 100,
      "scaleStartAngle": 315,
      "totalScaleAngle": 270,
      "enableBarGraph": true,
      "enableValueText": true,
      "enableNeedlePolygon": true,
      "enableCenterPoint": true,
      "enableScaleText": true,
      "enableScaleBigGrid": true,
      "enableScaleFineGrid": true,
      "needleColor": "#03C3C3",
      "needleColorOnDrag": "#FF4100",
      "scaleValueColor": "#ffffff",
      "displayValueColor": "#03C3C3",
      "bigScaleColor": "#ffffff",
      "fineScaleColor": "#aaaaaa",
      "customGaugeTheme": [
        {
          "color1": "#03C3C3",
          "color2": "#FF4100",
          "color3": "#ffffff"
        }
      ],
      "scalePolygonColor": [
        {
          "color1": "#03C3C3",
          "color2": "#FF4100"
        }
      ],
      "needleCenterColor": [
        {
          "color1": "#03C3C3"
        }
      ],
      "outerCircleColor": [
        {
          "color1": "#03C3C3"
        }
      ],
      "valueFontFamily": [
        {
          "path": "fonts/digital.ttf",
          "name": "Digital"
        }
      ],
      "scaleFontFamily": [
        {
          "path": "fonts/Inter.ttf",
          "name": "Inter"
        }
      ]
    }
  ],
  
  "QCustomSlideMenu": {
    "slideMenuWidget": {
      "defaultSize": {
        "width": 250,
        "height": 600
      },
      "collapsedSize": {
        "width": 60,
        "height": 600
      },
      "expandedSize": {
        "width": 250,
        "height": 600
      },
      "menuTransitionAnimation": {
        "animationDuration": 500,
        "animationEasingCurve": "OutCubic",
        "whenCollapsing": {
          "animationDuration": 300,
          "animationEasingCurve": "OutCubic"
        },
        "whenExpanding": {
          "animationDuration": 400,
          "animationEasingCurve": "OutCubic"
        }
      },
      "menuContainerStyle": {
        "whenMenuIsCollapsed": "background-color: #16191d; border-radius: 10px;",
        "whenMenuIsExpanded": "background-color: #16191d; border-radius: 10px;"
      },
      "floatPosition": {
        "relativeTo": "mainContainer",
        "position": "left",
        "shadow": {
          "color": "#40000000",
          "blurRadius": 20,
          "xOffset": 0,
          "yOffset": 0
        },
        "autoHide": true
      },
      "toggleButton": {
        "buttonName": "menuToggleBtn",
        "icons": {
          "whenMenuIsCollapsed": "menu.svg",
          "whenMenuIsExpanded": "close.svg"
        },
        "style": {
          "whenMenuIsCollapsed": "background-color: transparent;",
          "whenMenuIsExpanded": "background-color: #03C3C3;"
        }
      }
    }
  },
  
  "QPushButton": [
    {
      "name": "customButton",
      "theme": "default",
      "customTheme": [
        {
          "color1": "#03C3C3",
          "color2": "#FF4100"
        }
      ],
      "animateOn": "hover",
      "animation": "background-color",
      "animationDuration": 300,
      "animationEasingCurve": "OutCubic",
      "fallBackStyle": [
        "background-color: #03C3C3; color: white; border-radius: 5px;"
      ],
      "defaultStyle": [
        "background-color: transparent; color: gray; border-radius: 5px;"
      ],
      "iconify": [
        {
          "icon": "settings.svg",
          "color": "#ffffff",
          "size": 24,
          "animateOn": "hover",
          "animation": "rotate"
        }
      ],
      "shadow": [
        {
          "color": "#40000000",
          "applyShadowOn": "hover",
          "animateShadow": true,
          "animateShadowDuration": 300,
          "blurRadius": 20,
          "xOffset": 0,
          "yOffset": 5
        }
      ]
    }
  ],
  
  "QCustomQStackedWidget": [
    {
      "name": "stackedWidget",
      "transitionAnimation": {
        "fade": {
          "active": true,
          "duration": 300,
          "easingCurve": "OutCubic"
        },
        "slide": {
          "active": true,
          "duration": 400,
          "easingCurve": "OutCubic",
          "direction": "right"
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
  ],
  
  "QCustomProgressIndicator": [
    {
      "name": "progressIndicator",
      "color": "#03C3C3",
      "fillColor": "#03C3C3",
      "warningFillColor": "#FFA500",
      "errorFillColor": "#FF4100",
      "successFillColor": "#00FF00",
      "formProgressCount": 5,
      "formProgressAnimationDuration": 300,
      "formProgressAnimationEasingCurve": "OutCubic",
      "height": 8,
      "width": 300,
      "startPercentage": 0,
      "theme": 1
    }
  ],
  
  "QCustomCheckBox": [
    {
      "name": "checkbox1",
      "names": ["checkbox2", "checkbox3"],
      "bgColor": "#16191d",
      "circleColor": "#ffffff",
      "activeColor": "#03C3C3",
      "animationEasingCurve": "OutCubic",
      "animationDuration": 300
    }
  ]
}
```

---

## Application Settings

### Global Settings
- `ShowLogs`: Enable/disable logging output
- `LiveCompileQss`: Enable live QSS compilation during development
- `CheckForMissingicons`: Automatically generate missing icons

### QMainWindow Configuration
Configure main window appearance and behavior:
- Window title, icon, and frame style
- Shadow effects and border radius
- Navigation buttons (minimize, close, restore)
- Window dragging and title bar behavior

---

## Theme System

### Theme Definition (`CustomThemes`)
Each theme object defines colors, variables, and optional behavior.

#### Required Fields
| Key | Type | Description |
|-----|------|-------------|
| `Theme-name` | str | Unique theme name (avoid "Light"/"Dark") |
| `Background-color` | str | HEX value for background |
| `Text-color` | str | HEX value for text |
| `Accent-color` | str | HEX value for accent elements |

#### Optional Fields
| Key | Type | Description |
|-----|------|-------------|
| `Icons-color` | str | Color for generating theme-specific icons |
| `Default-Theme` | bool | Apply this theme by default |
| `Create-icons` | bool | Generate icons for this theme |
| `Other-variables` | dict | Custom SCSS variables |

### Font Management
```json
"Fonts": {
  "LoadFonts": [
    {"name": "Font Name", "path": "fonts/font.ttf"}
  ],
  "DefaultFont": {
    "name": "Font Name"
  }
}
```

---

## Widget-Specific Configuration

### Cards (QCard)
- Apply shadow effects to card widgets
- Support for multiple cards with shared styling

### Button Groups (QPushButtonGroup)
- Create toggle button groups with active/inactive states
- Shared styling across grouped buttons

### Analog Gauges (AnalogGaugeWidget)
- Comprehensive gauge customization
- Color themes, scaling, and visual properties
- Font and styling options

### Slide Menus (QCustomSlideMenu)
- Animated sliding menus with collapse/expand states
- Floating positioning with shadows
- Toggle button integration

### Custom Buttons (QPushButton)
- Advanced button theming and animations
- Icon integration with colorization
- Shadow effects and hover states

### Stacked Widgets (QCustomQStackedWidget)
- Page transition animations (fade/slide)
- Navigation button configuration
- Multi-directional transitions

### Progress Indicators (QCustomProgressIndicator)
- Customizable progress bars with themes
- Color states for different progress levels
- Animation and sizing options

### Checkboxes (QCustomCheckBox)
- Custom checkbox styling
- Animation properties and color customization

---

## Usage Example

```python
from Custom_Widgets import loadJsonStyle
from Custom_Widgets.QAppSettings import QAppSettings

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)

        # Load and apply JSON styles
        loadJsonStyle(self, self.ui)
        QAppSettings.updateAppSettings(self)
        
        self.show()
```

---

## Best Practices

1. **Theme Naming**: Avoid using "Light" or "Dark" as theme names - these are reserved
2. **Path References**: Use dot notation for nested widgets (e.g., `"container.widgetName"`)
3. **Color Variables**: Reference theme variables using `$variable-name` syntax
4. **Icon Management**: Themes sharing the same `Icons-color` reuse icon folders
5. **Live Development**: Enable `LiveCompileQss` during development for instant style updates

---

## Dynamic Updates

Update JSON values programmatically:
```python
from Custom_Widgets import updateJson

updateJson("style.json", "QMainWindow.0.title", "New Window Title", self)
```

This comprehensive reference covers all available configuration options for the JSON Stylesheet system.