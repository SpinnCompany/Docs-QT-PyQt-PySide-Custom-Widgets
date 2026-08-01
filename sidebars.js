/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'Introduction/intro',
        'Introduction/installation',
        'Introduction/getting-started'
      ]
    },
    {
      type: 'category',
      label: 'Core Widgets',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomQMainWindow',
        'Widgets/QCustomCodeEditor',
        'Widgets/QCustomQDialog',
        'Widgets/QCustomModals',
        'Widgets/QCustomEmbededWindow',
        'Widgets/QCustomComponent',
        'Widgets/QCustomComponentContainer',
        'Widgets/QCustomComponentLoader',
        'Widgets/QCustomAccordion',
        'Widgets/QCustomCardStack',
        'Widgets/QCustomEmbeddedWindow',
        'Widgets/QCustomFlowWidget',
        'Widgets/QCustomGlassFrame',
        'Widgets/QCustomModal',
        'Widgets/QCustomPopover'
      ]
    },
    {
      type: 'category',
      label: 'Navigation & Layout',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomHamburgerMenu',
        'Widgets/QCustomSidebar',
        'Widgets/QCustomSidebarButton',
        'Widgets/QCustomSidebarLabel',
        'Widgets/QCustomQStackedWidget',
        'Widgets/QCustomFlowLayout',
        'Widgets/QCustomSplitter',
        'Widgets/QCustomCarousel',
        'Widgets/QCustomHorizontalSeparator',
        'Widgets/QDraggableWidget',
        'Widgets/QCustomBreadcrumbs',
        'Widgets/QCustomCommandPalette',
        'Widgets/QCustomDrawer',
        'Widgets/QCustomHeaderNav',
        'Widgets/QCustomMenu',
        'Widgets/QCustomPagination',
        'Widgets/QCustomSidebarContainer',
        'Widgets/QCustomSlideMenu',
        'Widgets/QCustomStepper',
        'Widgets/QCustomTabWidget'
      ]
    },
    {
      type: 'category',
      label: 'Input & Controls',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomQPushButton',
        'Widgets/QCustomQPushButtonGroup',
        'Widgets/QCustomQSlider',
        'Widgets/QCustomCheckBox',
        'Widgets/QCustomSwitch',
        'Widgets/QCustomNumberInput',
        'Widgets/QCustomTagEdit',
        'Widgets/QCustomEmojiPicker',
        'Widgets/AnalogGaugeWidget',
        'Widgets/QCustomButtonGroup',
        'Widgets/QCustomColorPicker',
        'Widgets/QCustomComboBox',
        'Widgets/QCustomDateEdit',
        'Widgets/QCustomDateRangePicker',
        'Widgets/QCustomFileDropZone',
        'Widgets/QCustomForm',
        'Widgets/QCustomGradientPicker',
        'Widgets/QCustomImagePicker',
        'Widgets/QCustomInput',
        'Widgets/QCustomMultiSelect',
        'Widgets/QCustomRadioButton',
        'Widgets/QCustomRadioGroup',
        'Widgets/QCustomRangeSlider',
        'Widgets/QCustomRating',
        'Widgets/QCustomRulerPicker',
        'Widgets/QCustomSegmentedControl',
        'Widgets/QCustomTextArea',
        'Widgets/QCustomVerificationCode',
        'Widgets/QTagEdit'
      ]
    },
    {
      type: 'category',
      label: 'Progress & Loading',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustom3CirclesLoader',
        'Widgets/QCustomArcLoader',
        'Widgets/QCustomPerlinLoader',
        'Widgets/QCustomSpinner',
        'Widgets/QCustomQProgressBar',
        'Widgets/QCustomProgressIndicator',
        'Widgets/QCustomProgressRing',
        'Widgets/QCustomRoundProgressBar',
        'Widgets/QFlowProgressBar',
        'Widgets/QCustom3CirclesLoader'
      ]
    },
    {
      type: 'category',
      label: 'Display & Information',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomCard',
        'Widgets/QCardWidget',
        'Widgets/QAvatarWidget',
        'Widgets/QCustomBadge',
        'Widgets/QBadgeWidget',
        'Widgets/QCustomStatCard',
        'Widgets/QCustomAlert',
        'Widgets/QCustomAnnotationWidget',
        'Widgets/QCustomQToolTip',
        'Widgets/QCustomTipOverlay',
        'Widgets/QCustomQRGenerator',
        'Widgets/QCustomKbd',
        'Widgets/QCustomAgendaList',
        'Widgets/QCustomAvatar',
        'Widgets/QCustomAvatarGroup',
        'Widgets/QCustomChip',
        'Widgets/QCustomClockLabel',
        'Widgets/QCustomCoverCard',
        'Widgets/QCustomEmptyState',
        'Widgets/QCustomFeaturedIcon',
        'Widgets/QCustomFileCard',
        'Widgets/QCustomGradientText',
        'Widgets/QCustomLinkPreview',
        'Widgets/QCustomListRow',
        'Widgets/QCustomNumberCounter',
        'Widgets/QCustomPageDots',
        'Widgets/QCustomPaymentCard',
        'Widgets/QCustomQLabel',
        'Widgets/QCustomSkeleton',
        'Widgets/QCustomSparklesText',
        'Widgets/QCustomTimeline',
        'Widgets/QCustomToast',
        'Widgets/QCustomTrendChip',
        'Widgets/QCustomTypewriterText',
        'Widgets/QCustomVerticalSeparator'
      ]
    },
    {
      type: 'category',
      label: 'Data & Tables',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomDataTable',
        'Widgets/QCustomDataTablePro',
        'Widgets/QCustomNodeGraph',
        'Widgets/QCustomRichTextEditor',
        'Widgets/QCustomTableToolbar',
        'Widgets/QCustomTreeWidget'
      ]
    },
    {
      type: 'category',
      label: 'Buttons',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomActionButton',
        'Widgets/QCustomCopyButton',
        'Widgets/QCustomQPushButton',
        'Widgets/QCustomQPushButtonGroup',
        'Widgets/QCustomRainbowButton',
        'Widgets/QCustomSocialButton',
        'Widgets/QCustomThemeDarkLightToggle',
        'Widgets/QCustomTileButton'
      ]
    },
    {
      type: 'category',
      label: 'Charts & Data-viz',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomAreaChart',
        'Widgets/QCustomBarChart',
        'Widgets/QCustomBeeswarm',
        'Widgets/QCustomBubbleChart',
        'Widgets/QCustomCandlestickChart',
        'Widgets/QCustomCompass',
        'Widgets/QCustomCompassDial',
        'Widgets/QCustomDivergingBarChart',
        'Widgets/QCustomDonut',
        'Widgets/QCustomDotMatrix',
        'Widgets/QCustomFunnelChart',
        'Widgets/QCustomGanttChart',
        'Widgets/QCustomHeatmap',
        'Widgets/QCustomLineChart',
        'Widgets/QCustomLiquidGauge',
        'Widgets/QCustomMiniBarChart',
        'Widgets/QCustomPieChart',
        'Widgets/QCustomRadarChart',
        'Widgets/QCustomRadialBars',
        'Widgets/QCustomRadialGauge',
        'Widgets/QCustomRadialLines',
        'Widgets/QCustomRangeBarChart',
        'Widgets/QCustomSankey',
        'Widgets/QCustomScatterChart',
        'Widgets/QCustomSparkline',
        'Widgets/QCustomWaveform'
      ]
    },
    {
      type: 'category',
      label: 'Chat & Messaging',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomChatBubble',
        'Widgets/QCustomChatDivider',
        'Widgets/QCustomChatInput',
        'Widgets/QCustomChatList',
        'Widgets/QCustomChatListItem',
        'Widgets/QCustomChatThread',
        'Widgets/QCustomMessageStatus',
        'Widgets/QCustomReactionBar',
        'Widgets/QCustomTypingIndicator'
      ]
    },
    {
      type: 'category',
      label: 'Media',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomCoverFlow',
        'Widgets/QCustomImageViewer',
        'Widgets/QCustomMediaGrid',
        'Widgets/QCustomMediaTimeline',
        'Widgets/QCustomPlayerBar',
        'Widgets/QCustomVideoPlayer',
        'Widgets/QCustomVoiceMessage',
        'Widgets/QCustomWallpaper'
      ]
    },
    {
      type: 'category',
      label: 'Theming & Styling',
      collapsible: true,
      collapsed: false,
      items: [
        'Theming/DesignTokens',
        'Theming/QCustomTheme',
        'Theming/QCustomThemeDarkLightToggle',
        'Theming/QCustomThemeList',
        'Theming/StylingGuide',
        'Theming/svg-icons',
        'Theming/designer-properties',
        'Appendices/json-styles',
        'Appendices/qss-guide'
      ]
    },
    {
      type: 'category',
      label: 'Advanced Features',
      collapsible: true,
      collapsed: false,
      items: [
        'Advanced/Plugins',
        'Advanced/designer-tools',
        'Advanced/hot-reload',
        'Advanced/FileMonitor',
        'Advanced/QAppSettings',
        'Advanced/Logging',
        'Advanced/WidgetsWorker',
        'Advanced/AcrylicEffect'
      ]
    },
    {
      type: 'category',
      label: 'Usage Examples',
      collapsible: true,
      collapsed: false,
      items: [
        'Usage-Examples/BasicUsage',
        'Usage-Examples/AdvancedLayouts',
        'Usage-Examples/RealWorldScenarios',
        'Usage-Examples/DataTableBasics',
        'Usage-Examples/DataTableVirtualization',
        'Usage-Examples/DataTableEditing',
        'Usage-Examples/DataTableGroupingPivot',
        'Usage-Examples/DataTableFrozenExport',
        'Usage-Examples/GlassHomeShowcase'
      ]
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsible: true,
      collapsed: true,
      items: [
        'API-Reference/CMD',
        'API-Reference/Utils',
        'API-Reference/QPropertyAnimation',
        'API-Reference/ProjectMaker'
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsible: true,
      collapsed: true,
      items: [
        'Troubleshooting/common-issues',
        'Troubleshooting/compatibility',
        'Troubleshooting/faq'
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: true,
      collapsed: true,
      items: [
        'Appendices/resources',
        'Appendices/licensing'
      ]
    }
  ]
};

module.exports = sidebars;
