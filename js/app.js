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
                if (typeof window.initWidgetsApp === 'function') {
                    window.initWidgetsApp();
                }
            } else if (appType === 'mediaplayer') {
                if (typeof window.initMediaPlayerApp === 'function') {
                    window.initMediaPlayerApp();
                }
            }
        });
    });

    // 3. Menu

    const launcherBtn = document.getElementById('app-launcher-btn');
    const appMenu = document.getElementById('app-menu');

    if (launcherBtn && appMenu) {
        launcherBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            appMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!appMenu.contains(e.target) && e.target !== launcherBtn) {
                appMenu.classList.add('hidden');
            }
        });
    }

    document.querySelectorAll('.app-menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const app = card.getAttribute('data-app');
            appMenu.classList.add('hidden');

            switch (app) {
                case 'terminal':
                    if (typeof window.initTerminalApp === 'function') window.initTerminalApp();
                    break;
                case 'mediaplayer':
                    if (typeof window.initMediaPlayerApp === 'function') window.initMediaPlayerApp();
                    break;
                case 'widgets':
                    if (typeof window.initWidgetsApp === 'function') window.initWidgetsApp();
                    break;
                case 'gallery':
                    wm.createWindow('gallery', 'Gallery — ImtOS Studio', '<p style="padding: 20px;">Gallery content loading...</p>');
                    break;
                case 'calculator':
                    wm.createWindow('calculator', 'Calculator — ImtOS Studio', '<p style="padding: 20px;">Calculator content loading...</p>');
                    break;
                case 'tictactoe':
                    wm.createWindow('tictactoe', 'Tic Tac Toe — ImtOS Studio', '<p style="padding: 20px;">Tic Tac Toe game loading...</p>');
                    break;
                case 'guessnumber':
                    if (typeof window.initGuessNumberApp === 'function') {
                        window.initGuessNumberApp();
                    }
                    break;
                case 'showcase':
                    wm.createWindow('showcase', 'Project Showcase', '<p style="padding: 20px;">Projects content loading...</p>');
                    break;
                case 'logbook':
                    wm.createWindow('logbook', 'Logbook & Notes', '<p style="padding: 20px;">Ideas & Logbook space.</p>');
                    break;
                default:
                    break;

            }
        })
    })
});