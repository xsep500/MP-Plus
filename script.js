// Existing content above

// Helper functions for the overlay
function showHelpOverlay() {
    let overlay = document.getElementById('mp-tools-help-overlay');
    overlay.style.display = 'block';
}

function hideHelpOverlay() {
    let overlay = document.getElementById('mp-tools-help-overlay');
    overlay.style.display = 'none';
}

function toggleHelpOverlay() {
    let overlay = document.getElementById('mp-tools-help-overlay');
    if (overlay.style.display === 'block') {
        hideHelpOverlay();
    } else {
        showHelpOverlay();
    }
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function (e) {
        if (e.altKey && (e.code === 'Digit0' || e.key === '0')) {
            e.preventDefault();
            toggleHelpOverlay();
        }
        // Other existing shortcuts...
    });
}

// Create the overlay HTML element
let overlay = document.createElement('div');
overlay.id = 'mp-tools-help-overlay';
overlay.style.position = 'fixed';
overlay.style.top = '50%';
overlay.style.left = '50%';
overlay.style.transform = 'translate(-50%, -50%)';
overlay.style.zIndex = '1000';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.color = 'white';
overlay.style.borderRadius = '10px';
overlay.style.padding = '20px';
overlay.innerHTML = '<h2>Help Overlay</h2>\n<p>To enable / disable features hold down Alt and press:</p>\n<ol>\n    <li>1 to toggle the speedrunner</li>\n    <li>2 to toggle the "remove annoying" feature</li>\n    <li>3 to toggle the "right click" feature, which re-enables the blocked right clicking, and enables selecting more text.</li>\n    <li>4 to toggle the calculator.</li>\n    <li>5 to toggle the AI chat.</li>\n    <li>6 to change progress bar theme. Double tap the 6 to open the selection menu.</li>\n</ol>';
document.body.appendChild(overlay);

// Update console log summary in initialize()
console.log('Shortcut summary: Alt+0 opens/closes help overlay, ... other shortcuts');
// Existing content below