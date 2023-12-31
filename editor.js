const codeEditor = document.getElementById('code-editor');
const cursor = document.getElementById('text-cursor'); // Get the cursor element
let currentLine = document.createElement('span');
codeEditor.appendChild(currentLine);

// Initialize cursor position
let cursorX = 0; // Horizontal position within the line
let cursorY = 0; // Line number

// List of keys to exclude
const excludedKeys = ['Shift', 'Meta', 'Control', 'Alt', 'Escape', 'CapsLock', 'F1', 'F2', 'F3', 'Tab'];

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Check if the key is not in the list of excluded keys
    if (!excludedKeys.includes(key)) {
        if (key === 'Enter') {
            // Create a new line (span) on Enter key press
            currentLine = document.createElement('span');
            codeEditor.appendChild(currentLine);

            // Move the cursor to the start of the new line
            cursorX = 0;
            cursorY++;
        } else if (key === 'Backspace') {
            // Move the cursor to the left within the current line and delete the character
            const text = currentLine.textContent;
            if (cursorX > 0) {
                cursorX--;
                const newText = text.slice(0, cursorX) + text.slice(cursorX + 1);
                currentLine.textContent = newText;
            } else if (codeEditor.children.length > 1) {
                // Move to the previous line and delete the last character
                codeEditor.removeChild(currentLine);
                cursorY--;
                currentLine = codeEditor.lastElementChild;
                const prevText = currentLine.textContent;
                cursorX = prevText.length;
                const newText = prevText + text;
                currentLine.textContent = newText;
            }
        } else if (key === 'ArrowLeft') {
            // Move the cursor left within the current line
            if (cursorX > 0) {
                cursorX--;
            }
        } else if (key === 'ArrowRight') {
            // Move the cursor right within the current line
            const text = currentLine.textContent;
            if (cursorX < text.length) {
                cursorX++;
            }
        } else if (key === 'ArrowUp') {
            // Move the cursor up to the previous line
            if (cursorY > 0) {
                cursorY--;
                const lines = codeEditor.children;
                currentLine = lines[cursorY];
                const text = currentLine.textContent;
                cursorX = Math.min(cursorX, text.length);
            }
        } else if (key === 'ArrowDown') {
            // Move the cursor down to the next line
            const lines = codeEditor.children;
            if (cursorY < lines.length - 1) {
                cursorY++;
                currentLine = lines[cursorY];
                const text = currentLine.textContent;
                cursorX = Math.min(cursorX, text.length);
            }
        } else {
            // Append the pressed key to the current line at the cursor position
            const text = currentLine.textContent;
            const newText = text.slice(0, cursorX) + key + text.slice(cursorX);
            currentLine.textContent = newText;
            cursorX++;
        }

        // Update the cursor position
        const lineHeight = 16; // Adjust the line height if needed
        cursor.style.top = (cursorY * lineHeight) + 'px';
        cursor.style.left = (cursorX * 7.15) + 'px'; // Adjust the character width as needed
    }
});