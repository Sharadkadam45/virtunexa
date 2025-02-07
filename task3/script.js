// DOM Elements
const generateBtn = document.getElementById("generate-btn");
const colorPalette = document.getElementById("color-palette");
const hexCodesContainer = document.getElementById("hex-codes");
const savedColorsContainer = document.getElementById("saved-colors");
const themeToggle = document.getElementById("theme-toggle");

// Generate Random Color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate Color Palette
function generatePalette() {
  colorPalette.innerHTML = ""; // Clear previous palette
  let hexCodes = [];

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    hexCodes.push(color);

    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;

    // Copy HEX code on click
    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(color).then(() => {
        alert(`Copied: ${color}`);
      });
    });

    // Save color on double-click
    colorBox.addEventListener("dblclick", () => {
      saveColor(color);
    });

    colorPalette.appendChild(colorBox);
  }

  // Display HEX codes
  displayHexCodes(hexCodes);
}

// Display HEX Codes
function displayHexCodes(hexCodes) {
  hexCodesContainer.innerHTML = ""; // Clear previous HEX codes
  hexCodes.forEach((code) => {
    const hexElement = document.createElement("div");
    hexElement.className = "hex-code";
    hexElement.textContent = code;
    hexCodesContainer.appendChild(hexElement);
  });
}

// Save Color
function saveColor(color) {
  const savedColor = document.createElement("div");
  savedColor.className = "color-box";
  savedColor.style.backgroundColor = color;
  savedColorsContainer.appendChild(savedColor);
}

// Dark Mode Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Event Listener for Generate Button
generateBtn.addEventListener("click", generatePalette);

// Initial Palette Generation
generatePalette();