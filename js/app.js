document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Clock
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const clockEl = document.getElementById('system-clock');
        if (clockEl) clockEl.textContent = timeStr;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 2. Dock Click Listeners
    document.querySelectorAll('.dock-item').forEach(item => {
        item.addEventListener('click', () => {
            const appType = item.getAttribute('data-app');

            if (appType === 'terminal') {
                if (typeof window.initTerminalApp === 'function') {
                    window.initTerminalApp();
                } else {
                    console.error('initTerminalApp function not found! Check script order.');
                }
            } else if (appType === 'showcase') {
                wm.createWindow('showcase', 'Project Showcase', '<p style="padding: 20px;">Projects content loading...</p>');
            } else if (appType === 'logbook') {
                wm.createWindow('logbook', 'Logbook & Notes', '<p style="padding: 20px;">Ideas & Logbook space.</p>');
            } else if (appType === 'widgets') {
                wm.createWindow('widgets', 'System Metrics', '<p style="padding: 20px;">Live Widgets coming soon.</p>');
            } else if (appType === 'mediaplayer') {
                wm.createWindow('mediaplayer', 'Media Player', '<p style="padding: 20px;">Media player controls.</p>');
            }
        });
    });
});