# QAppSettings

The `QAppSettings` class is part of the `QT-PyQt-PySide-Custom-Widgets` module and is designed to simplify the management and application of themes and other settings for your PyQt or PySide applications. With `QAppSettings`, you can easily handle theme changes, store app settings, and apply dynamic visual styles to your app.


## Using `QAppSettings`

Create a project using the [Project Maker](/API-Reference/ProjectMaker) which will also setup `QAppSettings` for you inside the json style.

Below is an example of QAppSettings applied from a JSon file:

```json
{
  "QSettings": {
    "AppSettings": {
      "OrginizationName": "MyCompany",
      "ApplicationName": "MyApp",
      "OrginizationDormain": "mycompany.com"
    },
    "ThemeSettings": {
      "QtDesignerIconsColor": "#3498db",
      "CustomThemes": [
        {
          "Theme-name": "Dark-Night",
          "Background-color": "#1a1a1a",
          "Text-color": "#ecf0f1",
          "Accent-color": "#e74c3c",
          "Icons-color": "#3498db",
          "Default-Theme": true,
          "Create-icons": true
        },
        {
          "Theme-name": "Light-Blue",
          "Background-color": "#ffffff",
          "Text-color": "#2c3e50",
          "Accent-color": "#2980b9",
          "Icons-color": "#2980b9",
          "Default-Theme": false,
          "Create-icons": true
        }
      ],
      "Fonts": {
        "LoadFonts": [
          {
            "name": "Roboto",
            "path": "fonts/Roboto-Regular.ttf"
          },
          {
            "name": "Open Sans",
            "path": "fonts/OpenSans-Regular.ttf"
          }
        ],
        "DefaultFont": {
          "name": "Roboto"
        }
      }
    }
  }
}

```
### Initialize and Load Settings

To begin using the `QAppSettings` class in your application, you must initialize it as shown below:

```python
from Custom_Widgets import QAppSettings

settings = QAppSettings()
```

Once initialized, you can access and modify various settings such as the theme and app configurations.

### Updating Settings

To apply any changes made to the settings (e.g., switching the theme), you need to update the app settings. This can be done with the following line:

```python
QAppSettings.updateAppSettings(self)
```

Make sure to run this function after loading or changing the settings, particularly when applying a new theme or icon set.

### Accessing and Changing Themes

To access the current theme of your application, you can use:

```python
current_theme = settings.value("THEME")
print("Current theme:", current_theme)
```

To change the theme dynamically, use:

```python
settings.setValue("THEME", "Dark-Night")
QAppSettings.updateAppSettings(self)
```

This will set the theme to `"Dark-Night"` and apply the associated styles and icons.

### Applying Theme

To apply the theme settings stored in the JSON file, use:

```python
QAppSettings.updateAppSettings(self)
```

This function reads the current settings, applies the correct stylesheet, and updates the theme dynamically.

Read more about Custom Widgets [`theme engine`](/Theming/QCustomTheme).
