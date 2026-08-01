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
    'gallery',
    {
      type: 'category',
      label: 'Layout & containers (18)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomAccordion',
        'Widgets/QCustomCard',
        'Widgets/QCustomCardStack',
        'Widgets/QCustomComponent',
        'Widgets/QCustomComponentContainer',
        'Widgets/QCustomComponentLoader',
        'Widgets/QCustomCoverCard',
        'Widgets/QCustomCoverFlow',
        'Widgets/QCustomEmbeddedWindow',
        'Widgets/QCustomEmbededWindow',
        'Widgets/QCustomFlowLayout',
        'Widgets/QCustomFlowWidget',
        'Widgets/QCustomGlassFrame',
        'Widgets/QCustomQMainWindow',
        'Widgets/QCustomQStackedWidget',
        'Widgets/QCustomSidebarContainer',
        'Widgets/QCustomSplitter',
        'Widgets/QCustomTabWidget'
      ]
    },
    {
      type: 'category',
      label: 'Navigation (14)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomBreadcrumbs',
        'Widgets/QCustomCommandPalette',
        'Widgets/QCustomDrawer',
        'Widgets/QCustomHamburgerMenu',
        'Widgets/QCustomHeaderNav',
        'Widgets/QCustomMenu',
        'Widgets/QCustomPageDots',
        'Widgets/QCustomPagination',
        'Widgets/QCustomSidebar',
        'Widgets/QCustomSidebarButton',
        'Widgets/QCustomSidebarLabel',
        'Widgets/QCustomSlideMenu',
        'Widgets/QCustomStepper',
        'Widgets/QCustomTileButton'
      ]
    },
    {
      type: 'category',
      label: 'Buttons & actions (9)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomActionButton',
        'Widgets/QCustomButtonGroup',
        'Widgets/QCustomCopyButton',
        'Widgets/QCustomKbd',
        'Widgets/QCustomQPushButton',
        'Widgets/QCustomQPushButtonGroup',
        'Widgets/QCustomRainbowButton',
        'Widgets/QCustomSegmentedControl',
        'Widgets/QCustomSocialButton'
      ]
    },
    {
      type: 'category',
      label: 'Forms & input (26)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomAnnotationWidget',
        'Widgets/QCustomCheckBox',
        'Widgets/QCustomCodeEditor',
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
        'Widgets/QCustomNumberInput',
        'Widgets/QCustomQSlider',
        'Widgets/QCustomRadioButton',
        'Widgets/QCustomRadioGroup',
        'Widgets/QCustomRangeSlider',
        'Widgets/QCustomRating',
        'Widgets/QCustomRichTextEditor',
        'Widgets/QCustomRulerPicker',
        'Widgets/QCustomSwitch',
        'Widgets/QCustomTagEdit',
        'Widgets/QCustomTextArea',
        'Widgets/QCustomVerificationCode',
        'Widgets/QTagEdit'
      ]
    },
    {
      type: 'category',
      label: 'Data display (23)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QAvatarWidget',
        'Widgets/QBadgeWidget',
        'Widgets/QCardWidget',
        'Widgets/QCustomAgendaList',
        'Widgets/QCustomAvatar',
        'Widgets/QCustomAvatarGroup',
        'Widgets/QCustomBadge',
        'Widgets/QCustomChip',
        'Widgets/QCustomDataTable',
        'Widgets/QCustomDataTablePro',
        'Widgets/QCustomEmptyState',
        'Widgets/QCustomFeaturedIcon',
        'Widgets/QCustomFileCard',
        'Widgets/QCustomLinkPreview',
        'Widgets/QCustomListRow',
        'Widgets/QCustomPaymentCard',
        'Widgets/QCustomSkeleton',
        'Widgets/QCustomStatCard',
        'Widgets/QCustomTableToolbar',
        'Widgets/QCustomTimeline',
        'Widgets/QCustomTreeWidget',
        'Widgets/QCustomTrendChip',
        'Widgets/QDraggableWidget'
      ]
    },
    {
      type: 'category',
      label: 'Charts & analytics (22)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomAreaChart',
        'Widgets/QCustomBarChart',
        'Widgets/QCustomBeeswarm',
        'Widgets/QCustomBubbleChart',
        'Widgets/QCustomCandlestickChart',
        'Widgets/QCustomDivergingBarChart',
        'Widgets/QCustomDonut',
        'Widgets/QCustomDotMatrix',
        'Widgets/QCustomFunnelChart',
        'Widgets/QCustomGanttChart',
        'Widgets/QCustomHeatmap',
        'Widgets/QCustomLineChart',
        'Widgets/QCustomMiniBarChart',
        'Widgets/QCustomNodeGraph',
        'Widgets/QCustomPieChart',
        'Widgets/QCustomRadarChart',
        'Widgets/QCustomRadialBars',
        'Widgets/QCustomRadialLines',
        'Widgets/QCustomRangeBarChart',
        'Widgets/QCustomSankey',
        'Widgets/QCustomScatterChart',
        'Widgets/QCustomSparkline'
      ]
    },
    {
      type: 'category',
      label: 'Gauges & meters (10)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/AnalogGaugeWidget',
        'Widgets/QCustomCompass',
        'Widgets/QCustomCompassDial',
        'Widgets/QCustomLiquidGauge',
        'Widgets/QCustomProgressIndicator',
        'Widgets/QCustomProgressRing',
        'Widgets/QCustomQProgressBar',
        'Widgets/QCustomRadialGauge',
        'Widgets/QCustomRoundProgressBar',
        'Widgets/QFlowProgressBar'
      ]
    },
    {
      type: 'category',
      label: 'Feedback & status (14)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustom3CirclesLoader',
        'Widgets/QCustomAlert',
        'Widgets/QCustomArcLoader',
        'Widgets/QCustomMessageStatus',
        'Widgets/QCustomModal',
        'Widgets/QCustomModals',
        'Widgets/QCustomPerlinLoader',
        'Widgets/QCustomPopover',
        'Widgets/QCustomQDialog',
        'Widgets/QCustomQToolTip',
        'Widgets/QCustomSpinner',
        'Widgets/QCustomTipOverlay',
        'Widgets/QCustomToast',
        'Widgets/QCustomTypingIndicator'
      ]
    },
    {
      type: 'category',
      label: 'Chat & messaging (9)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomChatBubble',
        'Widgets/QCustomChatDivider',
        'Widgets/QCustomChatInput',
        'Widgets/QCustomChatList',
        'Widgets/QCustomChatListItem',
        'Widgets/QCustomChatThread',
        'Widgets/QCustomEmojiPicker',
        'Widgets/QCustomReactionBar',
        'Widgets/QCustomVoiceMessage'
      ]
    },
    {
      type: 'category',
      label: 'Media (9)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomCarousel',
        'Widgets/QCustomImageViewer',
        'Widgets/QCustomMediaGrid',
        'Widgets/QCustomMediaTimeline',
        'Widgets/QCustomPlayerBar',
        'Widgets/QCustomQRGenerator',
        'Widgets/QCustomVideoPlayer',
        'Widgets/QCustomWallpaper',
        'Widgets/QCustomWaveform'
      ]
    },
    {
      type: 'category',
      label: 'Text & motion (8)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomClockLabel',
        'Widgets/QCustomGradientText',
        'Widgets/QCustomHorizontalSeparator',
        'Widgets/QCustomNumberCounter',
        'Widgets/QCustomQLabel',
        'Widgets/QCustomSparklesText',
        'Widgets/QCustomTypewriterText',
        'Widgets/QCustomVerticalSeparator'
      ]
    },
    {
      type: 'category',
      label: 'Theming (1)',
      collapsible: true,
      collapsed: true,
      items: [
        'Widgets/QCustomThemeDarkLightToggle'
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
