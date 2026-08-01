# 🪐 ImtOS - Corporate Studio WebOS

A sleek, minimalist, desktop-grade web operating system built with Vanilla javascript, html5, and css3. Designed with a brutalist-light glassmorphic aesthetic, custom window management system, floating glass dock, app launcher, and built-in interactive applications.

# ✨ Features & Ecosystem

ImtOS comes packed with 10 native applications and core system features:

**Desktop System Engine:** 
- Window Manager: Supports dragging, z-index focus stacking, opening, minimizing, and closing multiple concurrent windows.
- Live System Bar: Real-time system clock with high-contrast status metrics.
- Atom App Launcher: Bottom-left glass popover menu with custom SVG application icons.
- Floating Glass Dock: Quick-access bottom dock with active window indicators and tooltips.

**Native Applications:**
- Photography Gallery: Multi-folder image viewer (Imtiaz & Photographys) featuring uncropped masonry grid layouts and wide-screen lightbox viewing.
- Calculator: Standard mathematical expression evaluation with live history, backspace, and full physical keyboard bindings.
- Tic Tac Toe: Interactive game featuring simple/smart CPU opponent AI, score tracking, and live win-line visualizers.
- Guess The Number: Logic guessing game with 10 attempts limit, instant higher/lower hints, and guess history tagging.
- System Widgets: Live dashboard showing system resource utilization and customizable quick widgets.
- Media Player: Web audio player interface with custom controls and playlist handling.
- Contact Card: Direct connection hub with quick copy-to-clipboard actions and links to Email, Github, LinkedIn, Instagram, and Discord.
- Terminal CLI: Interactive command-line interface with custom system commands and system diagnostic tools.
- Project Showcase: Interactive portfolio switcher featuring deep-dive breakdowns and 3-photo image preview galleries for projects.
- Logbook: In-memory session notepad that resets state upon browser refresh.

# 📁 Project Directory Structure

```
ImtOS/
├── index.html              # Main HTML container & OS shell
├── css/
│   ├── style.css           # Core desktop, app launcher, and dock styling
│   └── windows.css         # Styling for window manager & native apps
├── js/
│   ├── windowManager.js    # Dragging, stacking, and window lifetime control
│   ├── app.js              # Application launcher & main event routing
│   └── apps/
│       ├── terminal.js     # Terminal CLI logic
│       ├── mediaplayer.js  # Audio player logic
│       ├── widgets.js      # System widgets engine
│       ├── guessnumber.js  # Guess the Number game
│       ├── tictactoe.js    # Tic Tac Toe vs CPU logic
│       ├── calculator.js   # BODMAS Calculator engine
│       ├── contact.js      # Contact cards logic
│       ├── showcase.js     # Project showcase switcher & 3-photo gallery
│       ├── gallery.js      # Photography gallery & lightbox modal
│       └── logbook.js      # Temporary note-taking logbook
└── assets/
    ├── icons/              # Custom SVG app icons
    ├── projects/           # Screenshots for showcase projects
    └── gallery/            # Photography gallery images
        ├── Imtiaz/         # 15 photo assets
        └── Photographys/   # 16 photo assets
```

# 🚀 Getting Started Locally

Because ImtOS loads external ES modules and assets, it must be served over an HTTP protocol rather than raw file access (file://).
### 1. Clone the repository:

```bash
git clone https://github.com/not-imtiaz/ImtOS
cd ImtOS
```

