import os

# Define the complete documentation structure
structure = {
    "00-Introduction": [
        "intro.md",
        "installation.md",
        "getting-started.md"
    ],
    "01-Widgets": [
        "CodeEditorSyntax.md",
        "CodeEditorThemes.md",
        "LoadingIndicators.md",
        "ProgressBars.md",
        "QAvatarWidget.md",
        "QBadgeWidget.md",
        "QCustomAnnotationWidget.md",
        "QCustomCheckBox.md",
        "QCustomCodeEditor.md",
        "QCustomComponent.md",
        "QCustomComponentContainer.md",
        "QCustomComponentLoader.md",
        "QCustomEmbededWindow.md",
        "QCustomEmojiPicker.md",
        "QCustomFlowLayout.md",
        "QCustomHorizontalSeparator.md",
        "QCustomLoadingIndicators.md",
        "QCustomModals.md",
        "QCustomProgressBars.md",
        "QCustomProgressIndicator.md",
        "QCustomQDialog.md",
        "QCustomQMainWindow.md",
        "QCustomQPushButton.md",
        "QCustomQPushButtonGroup.md",
        "QCustomQSlider.md",
        "QCustomQStackedWidget.md",
        "QCustomQToolTip.md",
        "QCustomSidebar.md",
        "QCustomSidebarButton.md",
        "QCustomSidebarLabel.md",
        "QCustomSlideMenu.md",
        "QCustomTagEdit.md",
        "QDraggableWidget.md",
        "QFlowProgressBar.md",
        "QPropertyAnimation.md",
        "Widgets.md",
        "WidgetsWorker.md"
    ],
    "02-Theming": [
        "QCustomTheme.md",
        "QCustomThemeDarkLightToggle.md",
        "QCustomThemeList.md",
        "StylingGuide.md"
    ],
    "03-Advanced": [
        "Plugins.md",
        "FileMonitor.md",
        "QAppSettings.md",
        "Logging.md"
    ],
    "04-API-Reference": [
        "CMD.md",
        "Utils.md",
        "QPropertyAnimation.md",
        "ProjectMaker.md"
    ],
    "05-Usage-Examples": [
        "BasicUsage.md",
        "AdvancedLayouts.md",
        "RealWorldScenarios.md"
    ],
    "06-Troubleshooting": [
        "common-issues.md",
        "compatibility.md",
        "faq.md"
    ],
    "07-Appendices": [
        "json-styles.md",
        "qss-guide.md",
        "resources.md"
    ]
}

# Create directories and files
for folder, files in structure.items():
    # Create the folder if it doesn't exist
    os.makedirs(folder, exist_ok=True)
    
    for file in files:
        # Define the file path
        file_path = os.path.join(folder, file)
        
        # Create the file and add a basic header
        with open(file_path, 'w') as f:
            f.write(f"# {file.replace('.md', '').replace('-', ' ').title()}\n\n")
            f.write("<!-- Add documentation content here -->\n")

print("Documentation structure created successfully.")
