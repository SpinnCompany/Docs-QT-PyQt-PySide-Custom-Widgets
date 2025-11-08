// Initialize performance chart
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    try {
    const performanceChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Profit/Loss',
            data: [12, 19, 3, 5, 2, 3, 15],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            display: false
            }
        },
        scales: {
            y: {
            beginAtZero: false,
            grid: {
                color: 'rgba(55, 65, 81, 1)'
            },
            ticks: {
                callback: function (value) {
                // Sanitize value before displaying
                const sanitizedValue = typeof value === 'number' ? value : 0;
                return '$' + sanitizedValue;
                }
            }
            },
            x: {
            grid: {
                display: false
            }
            }
        }
        }
    });
    } catch (error) {
    console.error('Error initializing chart:', error);
    }

    // Update last updated time
    function updateTime() {
    try {
        const now = new Date();
        const element = document.getElementById('last-updated');
        if (element) {
        element.textContent = now.toLocaleString();
        }
    } catch (error) {
        console.error('Error updating time:', error);
    }
    }
    const timeInterval = setInterval(updateTime, 60000);
    updateTime();

    // Cleanup interval on page unload
    window.addEventListener('beforeunload', function () {
    clearInterval(timeInterval);
    });

    // Status check interval in milliseconds (e.g., every 10 seconds)
    const STATUS_CHECK_INTERVAL = 10000;
    let statusCheckInterval = null;
    let isPrimarySession = false;
    let sessionId = null;
    // Function to safely escape HTML
    function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return unsafe;
    return unsafe.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    // Function to update connection status for both Deriv and MQTT
    function updateConnectionStatus({ quotexStatus, mqttStatus } = {}) {
    const card = document.getElementById('connection-status-card');
    if (!card) return;
    // Update individual statuses if provided
    if (quotexStatus !== undefined) {
        const quotexStatusText = document.getElementById('deriv-status-text');
        const quotexStatusIcon = document.getElementById('deriv-status-icon');
        if (quotexStatus === 'Connected') {
        if (quotexStatusText) {
            quotexStatusText.textContent = 'Connected';
            quotexStatusText.classList.remove('text-red-400');
            quotexStatusText.classList.add('text-green-400');
        }
        if (quotexStatusIcon) {
            quotexStatusIcon.classList.remove('text-red-400');
            quotexStatusIcon.classList.add('text-green-400');
        }
        } else {
        if (quotexStatusText) {
            quotexStatusText.textContent = 'Disconnected';
            quotexStatusText.classList.remove('text-green-400');
            quotexStatusText.classList.add('text-red-400');
        }
        if (quotexStatusIcon) {
            quotexStatusIcon.classList.remove('text-green-400');
            quotexStatusIcon.classList.add('text-red-400');
        }
        }
    }
    if (mqttStatus !== undefined) {
        const mqttStatusText = document.getElementById('mqtt-status-text');
        const mqttStatusIcon = document.getElementById('mqtt-status-icon');
        if (mqttStatus === 'Connected') {
        if (mqttStatusText) {
            mqttStatusText.textContent = 'Connected';
            mqttStatusText.classList.remove('text-red-400');
            mqttStatusText.classList.add('text-green-400');
        }
        if (mqttStatusIcon) {
            mqttStatusIcon.classList.remove('text-red-400');
            mqttStatusIcon.classList.add('text-green-400');
        }
        } else {
        if (mqttStatusText) {
            mqttStatusText.textContent = 'Disconnected';
            mqttStatusText.classList.remove('text-green-400');
            mqttStatusText.classList.add('text-red-400');
        }
        if (mqttStatusIcon) {
            mqttStatusIcon.classList.remove('text-green-400');
            mqttStatusIcon.classList.add('text-red-400');
        }
        }
    }
    // Determine overall card status
    const currentQuotexStatus = quotexStatus !== undefined ? quotexStatus : document.getElementById('deriv-status-text')?.textContent || 'Disconnected';
    const currentMqttStatus = mqttStatus !== undefined ? mqttStatus : document.getElementById('mqtt-status-text')?.textContent || 'Disconnected';
    // Update card border and header based on combined status
    if (currentQuotexStatus === 'Connected' && currentMqttStatus === 'Connected') {
        card.classList.remove('border-red-500', 'border-yellow-500');
        card.classList.add('border-green-500');
        const headerIcon = card.querySelector('.fa-plug');
        if (headerIcon) {
        headerIcon.classList.remove('text-red-400', 'text-yellow-400');
        headerIcon.classList.add('text-green-400');
        }
        const statusBadge = card.querySelector('.text-xs');
        if (statusBadge) {
        statusBadge.className = 'text-xs bg-green-600 bg-opacity-30 text-green-300 px-2 py-1 rounded-full';
        statusBadge.textContent = 'ALL ACTIVE';
        }
    } else if (currentQuotexStatus === 'Connected' || currentMqttStatus === 'Connected') {
        card.classList.remove('border-red-500', 'border-green-500');
        card.classList.add('border-yellow-500');
        const headerIcon = card.querySelector('.fa-plug');
        if (headerIcon) {
        headerIcon.classList.remove('text-red-400', 'text-green-400');
        headerIcon.classList.add('text-yellow-400');
        }
        const statusBadge = card.querySelector('.text-xs');
        if (statusBadge) {
        statusBadge.className = 'text-xs bg-yellow-600 bg-opacity-30 text-yellow-300 px-2 py-1 rounded-full';
        statusBadge.textContent = 'PARTIAL';
        }
    } else {
        card.classList.remove('border-green-500', 'border-yellow-500');
        card.classList.add('border-red-500');
        const headerIcon = card.querySelector('.fa-plug');
        if (headerIcon) {
        headerIcon.classList.remove('text-green-400', 'text-yellow-400');
        headerIcon.classList.add('text-red-400');
        }
        const statusBadge = card.querySelector('.text-xs');
        if (statusBadge) {
        statusBadge.className = 'text-xs bg-red-600 bg-opacity-30 text-red-300 px-2 py-1 rounded-full';
        statusBadge.textContent = 'OFFLINE';
        }
    }
    // Update button states
    updateConnectionButtons();
    }

    // Helper function to update connection buttons
    function updateConnectionButtons() {
    const quotexStatus = document.getElementById('deriv-status-text')?.textContent || 'Disconnected';
    const mqttStatus = document.getElementById('mqtt-status-text')?.textContent || 'Disconnected';

    // Update Deriv button
    const quotexButton = document.querySelector('form[action*="deriv"] button');
    if (quotexButton) {
        if (quotexStatus === 'Connected') {
        quotexButton.innerHTML = '<i class="fas fa-stop mr-1"></i>Disconnect';
        quotexButton.classList.remove('bg-green-600', 'hover:bg-green-700');
        quotexButton.classList.add('bg-red-600', 'hover:bg-red-700');
        } else {
        quotexButton.innerHTML = '<i class="fas fa-play mr-1"></i>Connect';
        quotexButton.classList.remove('bg-red-600', 'hover:bg-red-700');
        quotexButton.classList.add('bg-green-600', 'hover:bg-green-700');
        }
    }

    // Update MQTT button
    const mqttButton = document.querySelector('form[action*="mqtt"] button');
    if (mqttButton) {
        if (mqttStatus === 'Connected') {
        mqttButton.innerHTML = '<i class="fas fa-stop mr-1"></i>Disconnect';
        mqttButton.classList.remove('bg-green-600', 'hover:bg-green-700');
        mqttButton.classList.add('bg-red-600', 'hover:bg-red-700');
        } else {
        mqttButton.innerHTML = '<i class="fas fa-play mr-1"></i>Connect';
        mqttButton.classList.remove('bg-red-600', 'hover:bg-red-700');
        mqttButton.classList.add('bg-green-600', 'hover:bg-green-700');
        }
    }
    }

    // Add beforeunload handler
    function handleBeforeUnload() {
    // Notify server this session is ending
    if (sessionId) {
        const data = JSON.stringify({
        sessionId
        });
        navigator.sendBeacon('/api/session-end', data);
    }
    clearInterval(statusCheckInterval);
    }

    // Handle storage events (for cross-tab communication)
    function handleStorageEvent(event) {
    if (event.key === 'deriv_status_update') {
        try {
        const data = JSON.parse(event.newValue);
        if (data.sessionId !== sessionId) {
            if (typeof data.deriv_status === 'string') {
            updateQuotexStatus(data.deriv_status);
            }
            if (typeof data.mqtt_status === 'string') {
            updateMqttStatus(data.mqtt_status);
            }
        }
        } catch (e) {
        console.error('Error processing storage event:', e);
        }
    }
    }
    // Modify your status update functions to broadcast to other tabs
    function broadcastStatus(statusData) {
    try {
        if (sessionId && typeof statusData === 'object') {
        localStorage.setItem('deriv_status_update', JSON.stringify({
            ...statusData,
            sessionId,
            timestamp: Date.now()
        }));
        }
    } catch (e) {
        console.error('Error broadcasting status:', e);
    }
    }

    // Test Proxy Button
    const testProxyBtn = document.getElementById('test-proxy-btn');
    if (testProxyBtn) {
    testProxyBtn.addEventListener('click', async function () {
        try {
        testProxyBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Testing...';
        testProxyBtn.disabled = true;

        const response = await fetch('/api/proxy-status');
        const data = await response.json();

        if (data.proxy_configured) {
            // If proxy is configured, test it
            const testResponse = await fetch('/test-proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                proxy_type: data.proxy_type,
                proxy_host: data.proxy_host,
                proxy_port: data.proxy_port,
                proxy_username: data.proxy_username,
                proxy_password: data.proxy_password
            })
            });

            const testResult = await testResponse.json();

            // Update UI with test results
            document.getElementById('proxy-status-indicator').className =
            `w-3 h-3 rounded-full mr-2 ${testResult.success ? 'bg-green-500' : 'bg-red-500'}`;
            document.getElementById('proxy-status-text').textContent =
            testResult.success ? 'Connected' : 'Disconnected';
            document.getElementById('proxy-status-text').className =
            `text-sm ${testResult.success ? 'text-green-400' : 'text-red-400'}`;
            document.getElementById('proxy-latency').textContent =
            `Latency: ${testResult.latency ? testResult.latency.toFixed(2) + 'ms' : 'N/A'}`;

            // Show test results
            const resultsDiv = document.getElementById('proxy-test-results');
            resultsDiv.classList.remove('hidden');
            document.getElementById('proxy-test-time').textContent = new Date().toLocaleTimeString();
            document.getElementById('proxy-test-success').textContent =
            testResult.success ? 'Success' : 'Failed: ' + (testResult.message || 'Unknown error');
            document.getElementById('proxy-test-speed').textContent =
            testResult.latency ? testResult.latency.toFixed(2) + 'ms' : 'N/A';

            if (testResult.success) {
            showNotification('Proxy test successful!', 'success');
            } else {
            showNotification(`Proxy test failed: ${testResult.message || 'Unknown error'}`, 'error');
            }
        } else {
            showNotification('No proxy configured', 'warning');
        }
        } catch (error) {
        console.error('Error testing proxy:', error);
        showNotification('Error testing proxy: ' + error.message, 'error');
        } finally {
        testProxyBtn.innerHTML = '<i class="fas fa-bolt mr-1"></i>Test';
        testProxyBtn.disabled = false;
        }
    });
    }

    // Socket.IO Real-time Updates
    function initializeSocketIO() {
    if (typeof io !== 'function') {
        console.error('Socket.IO not loaded');
        return;
    }
    // In your dashboard.html, update the Socket.IO initialization:
    const socket = io('https://autobot.spinncode.com', {
        path: "/socket.io",
        transports: ["websocket", "polling"],
        query: {
        user_id: "{{ session['user_id'] }}",
        session_id: "{{ session.get('session_id', '') }}"
        }
    });
    socket.on('connect_error', (err) => {
        console.log('Connection error:', err);
    });

    socket.on('connect_timeout', () => {
        console.log('Connection timeout');
    });
    socket.on('connect', function () {
        console.log('Socket.IO connected');
        sessionId = socket.id; // Store the session ID for this connection
        // broadcastStatus({
        //   mqtt_status: '{{ mqtt_status }}',
        //   deriv_status: '{{ deriv_status }}'
        // });
        socket.emit('request_status_update');
    });

    // Update the Socket.IO handler for proxy status updates
    socket.on('proxy_status_update', function (data) {
        const statusBadge = document.getElementById('proxy-status-badge');

        if (data.proxy_status) {
        if (data.proxy_status === 'Connected') {
            statusBadge.className = 'text-xs bg-green-600 bg-opacity-30 text-green-300 px-2 py-1 rounded-full';
            statusBadge.textContent = 'Connected';
        } else {
            statusBadge.className = 'text-xs bg-red-600 bg-opacity-30 text-red-300 px-2 py-1 rounded-full';
            statusBadge.textContent = 'Disconnected';
        }
        }

        if (data.proxy_host) {
        document.getElementById('proxy-ip').textContent = data.proxy_host;
        }

        if (data.proxy_type) {
        document.getElementById('proxy-type').textContent = 'Type: ' + data.proxy_type;
        }

        if (data.proxy_latency !== undefined) {
        const latencyText = data.proxy_latency ? data.proxy_latency.toFixed(2) + 'ms' : 'N/A';
        document.getElementById('proxy-latency').textContent = 'Latency: ' + latencyText;
        document.getElementById('proxy-test-speed').textContent = latencyText;
        }

        if (data.message) {
        showNotification(data.message, data.success ? 'success' : 'error');
        }
    });

    // Handle new signal events
    socket.on('new_signal', function (data) {
        if (!data || typeof data !== 'object') return;
        const messagesContainer = document.getElementById('real-time-messages');
        if (!messagesContainer) return;
        // Determine message type and content
        let type = data.type || 'info';
        let message = data.message || '';
        let icon = 'fa-info-circle';
        let bgColor = 'blue';
        if (type === 'error') {
        icon = 'fa-exclamation-circle';
        bgColor = 'red';
        // Include more error details if available
        if (data.trade_result?.error) {
            message += ` (${data.trade_result.error})`;
        }
        } else if (type === 'signal') {
        if (data.trade_result?.success) {
            icon = 'fa-check-circle';
            bgColor = 'green';
        } else {
            icon = 'fa-exclamation-circle';
            bgColor = 'red';
            if (data.trade_result?.error) {
            message = `Trade failed: ${data.trade_result.error}`;
            }
        }
        }
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `bg-${bgColor}-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-md mb-2`;
        messageDiv.innerHTML = `

                <div class="flex justify-between items-start">
                <div>
                <i class="fas ${icon} mr-2"></i>
                ${escapeHtml(message)}

                </div>
                <button class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
                </button>
                </div>
                `;
        // Add click handler for close button
        const closeButton = messageDiv.querySelector('button');
        if (closeButton) {
        closeButton.addEventListener('click', function () {
            messageDiv.remove();
        });
        }
        // Add to container
        messagesContainer.prepend(messageDiv);
        // Auto-remove after 5 seconds
        setTimeout(() => {
        messageDiv.remove();
        }, 10000);
        // Update signal display if this is a signal update
        if (type === 'signal' && data.data) {
        const signalDisplay = document.querySelector('#signal-display');
        const timestampDisplay = document.querySelector('#signal-timestamp');
        if (signalDisplay) {
            signalDisplay.textContent = JSON.stringify(data.data.signal);
        }
        if (timestampDisplay) {
            timestampDisplay.textContent = escapeHtml(data.data.timestamp || '');
        }
        }
    });

    // Handle Deriv status updates
    socket.on('deriv_status', function (data) {
        if (!data || typeof data !== 'object') return;
        const quotexCard = document.querySelector('#deriv-status-card');
        if (!quotexCard) return;
        const statusText = quotexCard.querySelector('#deriv-status-text');
        const statusIcon = quotexCard.querySelector('#deriv-status-icon');
        const connectButton = quotexCard.querySelector('#deriv-connect-button');
        if (data.status === 'connected') {
        quotexCard.classList.remove('border-red-500');
        quotexCard.classList.add('border-green-500');
        if (statusText) {
            statusText.textContent = 'Connected';
            statusText.classList.remove('text-red-400');
            statusText.classList.add('text-green-400');
        }
        if (statusIcon) {
            statusIcon.classList.remove('text-red-400');
            statusIcon.classList.add('text-green-400');
        }
        if (connectButton) {
            connectButton.innerHTML = ' < i class = "fas fa-stop mr-1" >< /i>Disconnect';
            connectButton.classList.remove('bg-green-600', 'hover:bg-green-700');
            connectButton.classList.add('bg-red-600', 'hover:bg-red-700');
        }
        } else {
        quotexCard.classList.remove('border-green-500');
        quotexCard.classList.add('border-red-500');
        if (statusText) {
            statusText.textContent = 'Disconnected';
            statusText.classList.remove('text-green-400');
            statusText.classList.add('text-red-400');
        }
        if (statusIcon) {
            statusIcon.classList.remove('text-green-400');
            statusIcon.classList.add('text-red-400');
        }
        if (connectButton) {
            connectButton.innerHTML = ' < i class = "fas fa-play mr-1" >< /i>Connect';
            connectButton.classList.remove('bg-red-600', 'hover:bg-red-700');
            connectButton.classList.add('bg-green-600', 'hover:bg-green-700');
        }
        }
        // Show notification if there's a message
        if (data.message) {
        showNotification(`Deriv: ${escapeHtml(data.message)}`);
        }
    });

    socket.on('status_update', function (data) {
        console.log('Status update received:', data);

        // Update Deriv status
        if (data.deriv_status !== undefined) {
        const quotexBtn = document.getElementById('deriv-btn');
        const quotexIcon = document.getElementById('deriv-icon');
        const quotexStatusText = document.getElementById('deriv-status-text');

        quotexBtn.disabled = false;

        if (data.deriv_status === 'Connected') {
            if (quotexBtn && quotexIcon) {
            quotexBtn.innerHTML = '<i class="fas fa-stop mr-1" id="deriv-icon"></i>Disconnect';
            quotexBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
            quotexBtn.classList.add('bg-red-600', 'hover:bg-red-700');
            quotexIcon.className = 'fas fa-stop mr-1';
            quotexBtn.disabled = false;
            }
            if (quotexStatusText) {
            quotexStatusText.textContent = 'Connected';
            quotexStatusText.className = 'text-sm font-bold text-green-400';
            }
        } else if (data.deriv_status === 'Disconnected') {
            if (quotexBtn && quotexIcon) {
            quotexBtn.innerHTML = '<i class="fas fa-play mr-1" id="deriv-icon"></i>Connect';
            quotexBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
            quotexBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            quotexIcon.className = 'fas fa-play mr-1';
            quotexBtn.disabled = false;
            }
            if (quotexStatusText) {
            quotexStatusText.textContent = 'Disconnected';
            quotexStatusText.className = 'text-sm font-bold text-red-400';
            }
        }
        // Reset the button to its original state after 30 seconds
        // resetQuotexButton(quotexBtn, quotexIcon, quotexBtn.innerHTML, false);
        }

        // Update MQTT status
        if (data.mqtt_status !== undefined) {
        const mqttBtn = document.getElementById('mqtt-btn');
        const mqttIcon = document.getElementById('mqtt-icon');
        const mqttStatusText = document.getElementById('mqtt-status-text');

        mqttBtn.disabled = false;

        if (data.mqtt_status === 'Connected') {
            if (mqttBtn && mqttIcon) {
            mqttBtn.innerHTML = '<i class="fas fa-stop mr-1" id="mqtt-icon"></i>Disconnect';
            mqttBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
            mqttBtn.classList.add('bg-red-600', 'hover:bg-red-700');
            mqttIcon.className = 'fas fa-stop mr-1';
            mqttBtn.disabled = false;
            }
            if (mqttStatusText) {
            mqttStatusText.textContent = 'Connected';
            mqttStatusText.className = 'text-sm font-bold text-green-400';
            }
        } else if (data.mqtt_status === 'Disconnected') {
            if (mqttBtn && mqttIcon) {
            mqttBtn.innerHTML = '<i class="fas fa-play mr-1" id="mqtt-icon"></i>Connect';
            mqttBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
            mqttBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            mqttIcon.className = 'fas fa-play mr-1';
            mqttBtn.disabled = false;
            }
            if (mqttStatusText) {
            mqttStatusText.textContent = 'Disconnected';
            mqttStatusText.className = 'text-sm font-bold text-red-400';
            }
        }

        // Reset the button to its original state after 30 seconds
        // resetMqttButton(mqttBtn, mqttIcon, mqttBtn.innerHTML, false);
        }

        // Update the connection status card
        updateConnectionStatus({
        mqttStatus: data.mqtt_status,
        quotexStatus: data.deriv_status
        });

        // Update balance if available
        if (data.balance !== undefined) {
        const balanceElement = document.querySelector('#deriv-balance');
        if (balanceElement) {
            balanceElement.textContent = `$${data.balance.toFixed(2)}`;
        }
        }
    });

    socket.on('session_update', function (data) {
        if (data.type === 'disconnect' && data.session_id !== sessionId) {
        showNotification('A session was disconnected from another device/tab', 'info');
        }


    });

    document.getElementById('deriv-form')?.addEventListener('submit', async function (e) {
        e.preventDefault();
        const btn = document.getElementById('deriv-btn');
        const icon = document.getElementById('deriv-icon');
        const statusText = document.getElementById('deriv-status-text');
        console.log('Deriv form submitted');
        // if (!btn || !icon || !statusText) return;

        // Save original state
        const originalHTML = btn.innerHTML;
        const originalDisabled = btn.disabled;
        const originalStatus = statusText.textContent;

        try {
        // Show loading state
        // btn.disabled = true;
        const isConnecting = !btn.classList.contains('bg-red-600');

        if (isConnecting) {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1" id="deriv-icon"></i>Connecting...';
            statusText.textContent = 'Connecting...';
            statusText.className = 'text-sm font-bold text-yellow-400';
        } else {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1" id="deriv-icon"></i>Disconnecting...';
            statusText.textContent = 'Disconnecting...';
            statusText.className = 'text-sm font-bold text-yellow-400';
        }

        // Send the request
        const response = await fetch(this.action, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(new FormData(this))
        });

        if (!response.ok) {
            throw new Error(await response.text() || 'Network response was not ok');
        }

        // Show temporary success message
        showNotification(isConnecting ? 'Deriv connection request sent' : 'Deriv disconnection request sent', 'success');

        // The actual status update will come via Socket.IO
        // Set timeout to reset if no response comes
        setTimeout(() => {
            const icon = document.getElementById('deriv-icon');
            if (icon.className.includes('fa-spin')) {
            resetQuotexButton(btn, icon, originalHTML, originalDisabled);
            statusText.textContent = originalStatus;
            statusText.className = originalStatus === 'Connected' ?
                'text-sm font-bold text-green-400' : 'text-sm font-bold text-red-400';
            showNotification('No response from server. Please check your connection.', 'warning');
            }
        }, 30000);
        } catch (error) {
        console.error('Error:', error);
        showNotification(`Error: ${error.message}`, 'error');
        resetQuotexButton(btn, icon, originalHTML, originalDisabled);
        statusText.textContent = originalStatus;
        statusText.className = originalStatus === 'Connected' ?
            'text-sm font-bold text-green-400' : 'text-sm font-bold text-red-400';
        }
    });

    document.getElementById('mqtt-form')?.addEventListener('submit', async function (e) {
        e.preventDefault();
        const btn = document.getElementById('mqtt-btn');
        const icon = document.getElementById('mqtt-icon');
        const statusText = document.getElementById('mqtt-status-text');
        console.log('MQTT form submitted');
        // if (!btn || !icon || !statusText) return;

        // Save original state
        const originalHTML = btn.innerHTML;
        const originalDisabled = btn.disabled;
        const originalStatus = statusText.textContent;

        try {
        // Show loading state
        // btn.disabled = true;
        const isConnecting = !btn.classList.contains('bg-red-600');

        if (isConnecting) {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1" id="mqtt-icon"></i>Connecting...';
            statusText.textContent = 'Connecting...';
            statusText.className = 'text-sm font-bold text-yellow-400';
        } else {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1" id="mqtt-icon"></i>Disconnecting...';
            statusText.textContent = 'Disconnecting...';
            statusText.className = 'text-sm font-bold text-yellow-400';
        }

        // Send the request
        const response = await fetch(this.action, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(new FormData(this))
        });

        if (!response.ok) {
            throw new Error(await response.text() || 'Network response was not ok');
        }

        // Show temporary success message
        showNotification(isConnecting ? 'MQTT connection request sent' : 'MQTT disconnection request sent', 'success');

        // Set timeout to reset if no response comes
        setTimeout(() => {
            const icon = document.getElementById('mqtt-icon');
            if (icon.className.includes('fa-spin')) {
            resetMqttButton(btn, icon, originalHTML, originalDisabled);
            statusText.textContent = originalStatus;
            statusText.className = originalStatus === 'Connected' ?
                'text-sm font-bold text-green-400' : 'text-sm font-bold text-red-400';
            showNotification('No response from server. Please check your connection.', 'warning');
            }
        }, 30000); // 10 seconds timeout
        } catch (error) {
        console.error('Error:', error);
        showNotification(`Error: ${error.message}`, 'error');
        resetMqttButton(btn, icon, originalHTML, originalDisabled);
        statusText.textContent = originalStatus;
        statusText.className = originalStatus === 'Connected' ?
            'text-sm font-bold text-green-400' : 'text-sm font-bold text-red-400';
        }
    });

    // Helper functions to reset buttons
    function resetQuotexButton(btn, icon, originalHTML, originalDisabled) {
        if (btn && icon) {
        btn.innerHTML = originalHTML;
        btn.disabled = originalDisabled;
        icon.className = btn.classList.contains('bg-red-600') ?
            'fas fa-stop mr-1' : 'fas fa-play mr-1';
        }
    }

    function resetMqttButton(btn, icon, originalHTML, originalDisabled) {
        if (btn && icon) {
        btn.innerHTML = originalHTML;
        btn.disabled = originalDisabled;
        icon.className = btn.classList.contains('bg-red-600') ?
            'fas fa-stop mr-1' : 'fas fa-play mr-1';
        }
    }

    }

    function showNotification(message, type = 'info') {
    const messagesContainer = document.getElementById('real-time-messages');
    if (!messagesContainer) return;
    // Validate type
    const validTypes = ['error', 'success', 'info', 'warning'];
    type = validTypes.includes(type) ? type : 'info';
    // Escape message HTML
    const escapedMessage = escapeHtml(message);
    // Determine colors based on type
    const color = {
        error: 'red',
        success: 'green',
        info: 'blue',
        warning: 'yellow'
    }[type] || 'blue';
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `bg-${color}-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-md mb-2 transition-opacity duration-300`;
    messageDiv.innerHTML = `


                    <div class="flex justify-between items-start">
                        <div>
                            <i class="fas ${type === 'error' ? 'fa-exclamation-circle' :
        type === 'success' ? 'fa-check-circle' :
            type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'
        } mr-2"></i>
                        ${escapedMessage}


                        </div>
                        <button class="ml-4 text-white hover:text-gray-200">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
            `;
    // Add click handler for close button
    const closeButton = messageDiv.querySelector('button');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
        messageDiv.remove();
        });
    }
    // Add to container
    messagesContainer.prepend(messageDiv);
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
    }
    // Initialize session ID
    sessionId = 'tab-' + Math.random().toString(36).substr(2, 9);
    // Store in sessionStorage (shared across same-origin tabs)
    try {
    sessionStorage.setItem('deriv_session_id', sessionId);
    } catch (e) {
    console.error('Error storing session ID:', e);
    }
    // Set up event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('storage', handleStorageEvent);
    // Initialize Socket.IO
    initializeSocketIO();
});
