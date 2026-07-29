class WindowManager {
    constructor() {
        this.highestZ = 10;
        this.canvas = document.getElementById('desktop-canvas')
    }

    createWindow(id, title, contentHTML, options = {}) {
        // Prevent duplicate windows
        if (document.getElementById('win-${id}')) {
            this.focusWindow(document.getElementById('win-${id}'));
            return;
        }

        const width = options.width || '650px';
        const height = options.height || '420px';
    }

}