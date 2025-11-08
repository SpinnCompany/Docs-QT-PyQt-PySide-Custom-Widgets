# Plugins

## Custom Widgets Registration for Qt Designer

### Overview
You can register custom widgets with Qt Designer. The registration process involves importing custom widgets, handling exceptions, and logging activities for successful and failed widget registrations.

The custom widgets are registered using the `QtDesigner.QPyDesignerCustomWidgetCollection.registerCustomWidget` method, ensuring that each widget is added to the appropriate collection within Qt Designer.

### Steps for Registering Custom Widgets Using the provided plugins script:

To make it easier for users to register custom widgets via the `command line` or to add them to the `environment path`, you can follow these detailed instructions for different operating systems. 

After [installing](/Introduction/installation) the `Custom Widgets` module, users can register widgets manually from the command line using a script like `registerMyWidget.py`.

1. **Locate the Site-Packages Folder**

Before you can run the script, you need to find the `site-packages` folder where your `Custom Widgets` module is installed. The path to this folder depends on your operating system.

#### **Windows**:

To find the `site-packages` folder on Windows, follow these steps:

1. **Find the Python Installation Path**:
   - Open **Command Prompt** (press `Win + R`, type `cmd`, and press Enter).
   - Type the following command to find the Python installation directory:
     ```
     python -m site --user-site
     ```
   - This will output a path like:
     ```
     C:\Users\YourUsername\AppData\Roaming\Python\Python312\site-packages
     ```

2. **Navigate to the Package Folder**:
   Once you have located the correct `site-packages` directory, open File Explorer and go to the folder containing `Custom_Widgets`.

3. **Run the Registration Script**:
   From the **Command Prompt**, navigate to this directory and run the `registerMyWidget.py` script:
   ```bash
   cd C:\Users\kibet\AppData\Local\Programs\Python\Python312\Lib\site-packages\Custom_Widgets\Plugins
   python registerMyWidget.py
   ```



#### **macOS**:

To find the `site-packages` directory on macOS, follow these steps:

1. **Find the Python Installation Path**:
   - Open **Terminal** (press `Cmd + Space`, type `Terminal`, and press Enter).
   - Type the following command to find the `site-packages` path:
     ```bash
     python3 -m site --user-site
     ```
   - You will see output like:
     ```
     /Users/YourUsername/Library/Python/3.12/lib/python/site-packages
     ```
   - If you're using a globally installed version of Python, it could be:
     ```
     /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/site-packages
     ```

2. **Navigate to the Package Folder**:
   Using the output path, navigate to the `site-packages` folder and find the `Custom_Widgets` package in the `Plugins` subdirectory.

3. **Run the Registration Script**:
   In **Terminal**, navigate to the folder containing the `registerMyWidget.py` script:
   ```bash
   cd /Users/YourUsername/Library/Python/3.12/lib/python/site-packages/Custom_Widgets/Plugins
   python3 registerMyWidget.py
   ```



#### **Linux**:

To locate the `site-packages` folder on Linux, follow these steps:

1. **Find the Python Installation Path**:
   - Open a **Terminal** window.
   - Type the following command to find the `site-packages` directory:
     ```bash
     python3 -m site --user-site
     ```
   - The output will typically look like this:
     ```
     /home/YourUsername/.local/lib/python3.12/site-packages
     ```

2. **Navigate to the Package Folder**:
   Navigate to the directory containing the `Custom_Widgets` package. It should be in the `site-packages` folder.

3. **Run the Registration Script**:
   In **Terminal**, navigate to the `Plugins` folder and run the script:
   ```bash
   cd /home/YourUsername/.local/lib/python3.12/site-packages/Custom_Widgets/Plugins
   python3 registerMyWidget.py
   ```



### 2. **Adding the Package to Environment Variables (Optional)**

If you'd like to add the path to `Custom_Widgets` (or any specific folder like `Plugins`) to your system's environment variables, follow the instructions below for each operating system.

#### **Windows**:

1. **Open Environment Variables**:
   - Right-click **This PC** and select **Properties**.
   - Click on **Advanced system settings** and then the **Environment Variables** button.

2. **Add the Path to the `site-packages` Folder**:
   - Under **System variables**, select `Path` and click **Edit**.
   - Click **New**, then paste the path to the folder containing `Custom_Widgets`, e.g.,:
     ```
     C:\Users\kibet\AppData\Local\Programs\Python\Python312\Lib\site-packages
     ```
   - Click **OK** to save and exit.

3. **Check the Setup**:
   - Open a new **Command Prompt** window and type:
     ```bash
     python -c "import Custom_Widgets"
     ```
   - If no error occurs, the path has been successfully added.

#### **macOS and Linux**:

1. **Edit the Shell Configuration File**:
   - Open a terminal and use a text editor to open the shell configuration file (`.bash_profile`, `.bashrc`, `.zshrc`, etc.) depending on your shell:
     ```bash
     nano ~/.bashrc  # For bash
     nano ~/.zshrc   # For zsh
     ```

2. **Add the Path to the `site-packages` Folder**:
   - Add the following line to the configuration file:
     ```bash
     export PYTHONPATH="/Users/YourUsername/Library/Python/3.12/lib/python/site-packages:$PYTHONPATH"
     ```
   - Replace the path with your actual `site-packages` path.

3. **Apply the Changes**:
   - Reload the shell configuration:
     ```bash
     source ~/.bashrc  # For bash
     source ~/.zshrc   # For zsh
     ```

4. **Check the Setup**:
   - Run the following to ensure Python can find `Custom_Widgets`:
     ```bash
     python3 -c "import Custom_Widgets"
     ```


**Note:** After running the script, restart Qt Designer to see the registered widgets in the widget box. 

### Conclusion

By following the steps above, you can register custom widgets for Qt Designer directly from the command line. Additionally, if you want to automate the process or make the `Custom_Widgets` package accessible globally, you can add it to your environment variables.

These instructions should work across Windows, macOS, and Linux, with the only differences being the specific paths and commands based on the operating system.

#### Creating your own script:

1. **Import Custom Widgets**
   Each custom widget is imported from the `Custom_Widgets` module. This includes the necessary widgets for the application's interface.

2. **Setup Logging**
   Before proceeding with widget registration, the custom logging module is set up. This ensures that every action, especially errors, is logged appropriately.

   ```python
   from Custom_Widgets.Log import *
   setupLogger()
   ```

3. **Register Custom Widgets**
   Custom widgets are registered in the following way:
   - The widget is registered using `QtDesigner.QPyDesignerCustomWidgetCollection.registerCustomWidget()`.
   - For each widget, the module, tooltip, XML, and icon information are passed in.
   - The widgets are grouped into categories such as "MainWindow," "Sidebar," "Progressbars," and "Component Container."
   - A container flag (`container=True/False`) is set to indicate whether the widget should act as a container for other widgets.

4. **Error Handling**
   Every widget registration process is wrapped in a `try-except` block. If an error occurs during registration, the exception is caught, and the error message is logged.

### Example Registration Process

Each widget follows a similar pattern for registration. Below is an example of how a custom widget (e.g., `QCustomQMainWindow`) is registered:

```python
try:
    logInfo("Registering QCustomQMainWindow")
    QtDesigner.QPyDesignerCustomWidgetCollection.registerCustomWidget(
        QCustomQMainWindow, module=QCustomQMainWindow.WIDGET_MODULE,
        tool_tip=QCustomQMainWindow.WIDGET_TOOLTIP, 
        xml=QCustomQMainWindow.WIDGET_DOM_XML,
        icon=QCustomQMainWindow.WIDGET_ICON, container=True, group="MainWindow"
    )
except Exception as e:
    logException(e, message="Error registering QCustomQMainWindow")
```

This process is repeated for each widget, ensuring that each widget is properly added to Qt Designer with appropriate error logging.



### List of Widgets Registered

The following custom widgets are registered with Qt Designer:

- **QCustomQMainWindow**: A custom main window widget, registered under the "MainWindow" group.
- **QAvatarWidget**: A custom widget for displaying user avatars.
- **QBadgeWidget**: A widget for showing badges, useful for displaying notifications.
- **AnalogGaugeWidget**: A custom analog gauge widget.
- **QCustomThemeList**: A widget for displaying and switching themes.
- **QCustomThemeDarkLightToggle**: A widget for toggling between dark and light themes.
- **QCustomCheckBox**: A custom styled checkbox widget.
- **QCustomSidebar**: A custom sidebar widget.
- **QCustomHorizontalSeparator**: A custom horizontal separator for layout management.
- **QCustomSidebarLabel**: A custom label for sidebars.
- **QCustomSidebarButton**: A custom button widget for sidebars.
- **QCustomRoundProgressBar**: A round progress bar widget.
- **QCustomComponent**: A custom container component for organizing other widgets.
- **QCustomComponentContainer**: A container for custom components.
- **QCustomQStackedWidget**: A stacked widget for managing different views in a container.



### Custom Widgets Groups

Custom widgets are categorized into different groups for better organization within Qt Designer. These groups include:
- **MainWindow**: For main window-related widgets (e.g., `QCustomQMainWindow`).
- **Sidebar**: For sidebar-related widgets (e.g., `QCustomSidebar`, `QCustomSidebarButton`).
- **Progressbars**: For progress bar-related widgets (e.g., `QCustomRoundProgressBar`).
- **Component Container**: For organizing custom components (e.g., `QCustomComponent`).



### Logging

The registration process logs the following information:
- **Successful Registrations**: Informational logs indicating when a widget is successfully registered.
- **Errors**: If an error occurs during the registration of any widget, an exception is logged with a detailed message.

For example, if a widget fails to register, the following log is created:

```
Error registering QCustomQMainWindow: [exception details]
```

This logging ensures that developers can easily track the registration status of each widget.

### Troubleshooting  
- **Widgets not appearing in Qt Designer?**  
  - Ensure the script ran successfully (check logs in `[path/to/logfile.log]`).  
  - Verify the Python environment matches Qt Designer's (e.g., run `python -m PyQt5.uic.pyuic --version`).  
- **Permission errors?** Run the script with admin rights (Windows) or `sudo` (macOS/Linux).  
- **Still stuck?** Check if the widget files exist in `site-packages/Custom_Widgets/`.  

### Conclusion

By following this registration process, custom widgets are integrated seamlessly into Qt Designer, with clear logging for success or failure. This approach ensures that custom widgets are well-documented and easy to manage during the development process.


