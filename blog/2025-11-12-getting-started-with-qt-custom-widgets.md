---
authors:
- Khamisi Kibet
date: '2025-11-12'
slug: getting-started-with-qt-custom-widgets
tags:
- PySide6
- Python
- GUI
- Custom Widgets
- Tutorial
- Qt
- PyQt
- Gui. Interface
- Desktop
title: Getting Started With Qt Custom Widgets
---

# Complete Tutorial: Getting Started with QT-PyQt-PySide-Custom-Widgets

## Step 1: Install Python and Create Virtual Environment

### Install Python
First, ensure you have Python 3.7 or higher installed:

<!-- truncate -->

**Windows:**
```bash
# Download from python.org or use winget
winget install Python.Python.3.11
```

**macOS:**
```bash
# Using Homebrew
brew install python
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

### Create Virtual Environment
Always use a virtual environment to manage dependencies:

```bash
# Create project directory
mkdir my_qt_project
cd my_qt_project

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

Your terminal should now show `(venv)` indicating the virtual environment is active.

---

## Step 2: Install Qt Binding

**Important:** Make sure your virtual environment is activated (you see `(venv)` in your terminal).

Choose and install one of these Qt bindings:

### Option 1: PySide6 (Recommended)
```bash
pip install PySide6
```

### Option 2: PyQt6
```bash
pip install PyQt6
```

### Option 3: PySide2
```bash
pip install PySide2
```

### Option 4: PyQt5
```bash
pip install PyQt5
```

**Note:** For this tutorial, we'll use PySide6 as it's the most modern and freely available.

---

## Step 3: Install Custom Widgets

Install the custom widgets package (make sure venv is active):

```bash
pip install QT-PyQt-PySide-Custom-Widgets
```

Verify installation:
```bash
python -c "import Custom_Widgets; print('Custom Widgets installed successfully!')"
```

---

## Step 4: Create Your First Project

### Method A: Using the Project Creator (Recommended for Beginners)

**Important:** Run this command from INSIDE your activated virtual environment folder:

```bash
# You should be in your project directory with venv activated
# Your terminal should show: (venv) path/to/your/project$

# Run project creator FROM INSIDE THE VENV FOLDER
Custom_Widgets --create-project
```

**What happens when you run the project creator:**
1. It detects your current directory as the project location
2. It checks if the folder is empty (or only contains logs)
3. It guides you through the setup process interactively

The project creator will guide you through:
1. **Qt Binding Selection**: Choose your Qt library
2. **Color Scheme**: Select icons and theme colors
3. **App Information**: Enter app name and organization details
4. **Automatic Setup**: Creates all necessary files and folders

### Correct Folder Structure Example:
```
my_qt_project/          # Your project folder
├── venv/               # Virtual environment (already created)
│   ├── bin/            # or Scripts/ on Windows
│   ├── lib/
│   └── pyvenv.cfg
└── (project files will be created here by the creator)
```

**Common Mistake to Avoid:**
- Don't run the command from inside the `venv` folder
- Run it from your project root folder where `venv` is located

### Method B: Manual Setup (For Advanced Users)
If you prefer manual setup, create this structure in your project root:
```
my_qt_project/
├── venv/               # Virtual environment
├── main.py             # Main application file
├── ui/                 # UI files directory
│   └── main_window.ui
├── json-styles/        # Theme configuration
│   └── style.json
├── requirements.txt    # Dependencies
└── README.md          # Documentation
```

---

## Step 5: Understanding the Project Structure

After running the project creator from inside your venv folder, you'll have:

```
my_qt_project/
├── venv/               # Virtual environment
├── main.py              # Main application file
├── ui/                  # UI files directory
│   └── QCustomQMainWindow.ui
├── json-styles/         # Theme configuration
│   └── style.json
├── requirements.txt     # Dependencies
└── README.md           # Documentation
```

---

## Step 6: Register Custom Widgets with Qt Designer

Before designing your interface, register the custom widgets (from your activated venv):

```bash
# Register widgets with Qt Designer
Custom_Widgets --register-widgets
```

**Expected Output:**
```
Registering QCustomQMainWindow...
Registering QCustomSidebar...
Registering QCustomProgressBar...
... (all widgets registered successfully)
```

---

## Step 7: Launch Qt Designer with Custom Widgets

Start Qt Designer with the custom widgets loaded (from activated venv):

```bash
# Launch Qt Designer with custom widgets
Custom_Widgets --start-designer --plugins
```

**Alternative methods:**
```bash
# If the above doesn't work, try:
designer
# or
pyside6-designer
# or
qt5-designer
```

---

## Step 8: Designing Your Interface in Qt Designer

### Finding Custom Widgets
When Qt Designer opens, look for these widget groups in the widget box:

1. **MainWindow Section**:
   - `QCustomQMainWindow` - Enhanced main window with theme support

2. **Sidebar Section**:
   - `QCustomSidebar` - Customizable sidebar navigation
   - `QCustomSidebarButton` - Buttons for sidebar
   - `QCustomSidebarLabel` - Labels for sidebar

3. **Progressbars Section**:
   - `QCustomRoundProgressBar` - Circular progress indicator
   - `AnalogGaugeWidget` - Analog gauge display

4. **Component Container Section**:
   - `QCustomComponent` - Container for organizing widgets
   - `QCustomComponentContainer` - Main container component

### Step-by-Step Design Process

1. **Start with QCustomQMainWindow**:
   - Drag `QCustomQMainWindow` from the widget box to the form
   - This becomes your main application window

2. **Add a Sidebar**:
   - Drag `QCustomSidebar` to the left side of your main window
   - Add `QCustomSidebarButton` widgets inside the sidebar
   - Set button text and icons in the property editor

3. **Add Content Area**:
   - Use `QCustomComponent` as content containers
   - Add standard Qt widgets (buttons, labels, etc.) inside components
   - Use `QCustomQStackedWidget` to manage multiple pages

4. **Style Your Interface**:
   - Use the property editor to set object names
   - Apply custom styles through the JSON configuration later

5. **Save Your Design**:
   - Save the file as `main_window.ui` in the `ui/` folder
   - Qt Designer files use `.ui` extension

---

## Step 9: Automatic UI File Conversion

### Start File Monitoring (Recommended)
Keep this running while you design (from activated venv):

```bash
# Monitor UI folder for changes
Custom_Widgets --monitor-ui ui --qt-library PySide6
```

**What this does:**
- Watches the `ui/` folder for any changes
- Automatically converts `.ui` files to Python when you save
- Updates your application in real-time

### Manual Conversion
If you prefer manual conversion:

```bash
# Convert specific file
Custom_Widgets --convert-ui ui/main_window.ui --qt-library PySide6

# Convert all files in folder
Custom_Widgets --convert-ui ui --qt-library PySide6
```

---

## Step 10: Customize Your App Theme

Edit the `json-styles/style.json` file to customize your app's appearance:

```json
{
    "QtBinding": "PySide6",
    "QMainWindow": {
        "title": "My Awesome App"
    },
    "QSettings": {
        "AppSettings": {
            "OrginizationName": "My Company",
            "ApplicationName": "My App",
            "OrginizationDormain": "myapp.org"
        },
        "ThemeSettings": {
            "QtDesignerIconsColor": "#ffffff",
            "CustomThemes": [
                {
                    "Background-color": "#2b2b2b",
                    "Text-color": "#ffffff",
                    "Accent-color": "#0078d4",
                    "Icons-color": "#ffffff",
                    "Theme-name": "Default Dark",
                    "Default-Theme": true
                }
            ]
        }
    }
}
```

**Key Configuration Options:**
- `Background-color`: Main app background
- `Text-color`: Default text color
- `Accent-color`: Primary accent color for buttons, highlights
- `Icons-color`: Color of all icons in the app

---

## Step 11: Run Your Application

Execute your application (from activated venv):

```bash
python main.py
```

Your custom-styled application should launch with:
- The theme colors you configured
- All custom widgets functioning
- Your designed interface layout

---

## Step 12: Development Workflow Tips

### Efficient Development Cycle
1. **Activate Venv**: Always start with `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
2. **Design**: Work in Qt Designer with custom widgets
3. **Save**: Save your `.ui` file (auto-conversion happens if monitoring)
4. **Test**: Run your app to see changes
5. **Repeat**: Go back to design and continue iterating

### Useful Commands for Daily Use (Run from activated venv)
```bash
# Start monitoring when beginning work
Custom_Widgets --monitor-ui ui --qt-library PySide6

# Launch designer when needed
Custom_Widgets --start-designer --plugins

# Run your app
python main.py
```

### Complete Workflow Example
```bash
# 1. Start fresh each day
cd my_qt_project
source venv/bin/activate  # or venv\Scripts\activate on Windows

# 2. Start file monitoring (keep this terminal open)
Custom_Widgets --monitor-ui ui --qt-library PySide6

# 3. In another terminal, launch designer
cd my_qt_project
source venv/bin/activate
Custom_Widgets --start-designer --plugins

# 4. When ready to test
python main.py
```

---

## Step 13: Advanced Customization

### Creating Multiple Themes
Add additional themes to your `style.json`:

```json
"CustomThemes": [
    {
        "Background-color": "#2b2b2b",
        "Text-color": "#ffffff",
        "Accent-color": "#0078d4",
        "Icons-color": "#ffffff",
        "Theme-name": "Dark Blue",
        "Default-Theme": true
    },
    {
        "Background-color": "#f0f0f0",
        "Text-color": "#000000",
        "Accent-color": "#e74c3c",
        "Icons-color": "#000000",
        "Theme-name": "Light Red",
        "Default-Theme": false
    }
]
```

### Custom Widget Properties
Each custom widget has specific properties you can set in Qt Designer:

- **QCustomSidebar**: `backgroundColor`, `activeColor`, `iconSize`
- **QCustomProgressBar**: `progressColor`, `background_color`, `text_color`
- **QCustomQMainWindow**: `enableCustomTitleBar`, `enableGradient`

---

## Troubleshooting Common Issues

### Virtual Environment Issues
```bash
# Check if venv is activated
which python  # Should point to venv directory

# If not activated:
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

### Widgets Not Showing in Qt Designer
```bash
# Re-register widgets (from activated venv)
Custom_Widgets --register-widgets

# Restart Qt Designer
Custom_Widgets --start-designer --plugins
```

### UI Files Not Converting
```bash
# Check if monitoring is running (from activated venv)
Custom_Widgets --monitor-ui ui --qt-library PySide6

# Manual conversion (from activated venv)
Custom_Widgets --convert-ui ui/main_window.ui --qt-library PySide6
```

### Import Errors
```bash
# Ensure package is installed in venv
pip install QT-PyQt-PySide-Custom-Widgets

# Check virtual environment is activated
which python  # Should point to venv directory
```

### Project Creator Not Working
```bash
# Make sure you're in the correct directory
pwd  # Should show your project folder, not inside venv

# Check folder contents
ls -la  # Should show venv folder and your project files

# If you accidentally ran creator in wrong location:
# Delete the generated files and run again from correct location
```

---

## Next Steps

Now that you have a basic application running:

1. **Explore More Widgets**: Try different custom widgets in your designs
2. **Custom Styles**: Experiment with different color schemes in the JSON file
3. **Advanced Layouts**: Combine custom widgets with standard Qt widgets
4. **Animation**: Add transitions and animations to your interface
5. **Database Integration**: Connect your GUI to databases or APIs

## Resources

- **Documentation**: [GitHub Repository](https://github.com/SpinnCompany/Qt-PyQt-PySide-Custom-Widgets)
- **Video Tutorials**: [SPINN TV YouTube Channel](https://www.youtube.com/spinnTv)
- **Community Support**: GitHub Issues and Discussions

---

**Congratulations!** You've successfully set up a Qt application with custom widgets using proper virtual environment practices. The automated workflow will make your development process much smoother as you continue building your application.

**Key Takeaway:** Always remember to activate your virtual environment before running any Custom_Widgets commands or your Python application!