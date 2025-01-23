// QUESTION dark theme
function swapTheme() {
  const app = document.getElementById("app");
  const button = document.getElementById("swap");

  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");
    button.classList.remove("button_day");
    button.classList.add("button_night");
  } else {
    app.classList.remove("night");
    app.classList.add("day");
    button.classList.remove("button_night");
    button.classList.add("button_day");
  }
}

// QUESTION create  div

function createDiv(width, height, text) {
  // Select the container element
  const container = document.getElementById("container");
  // Create a new div element
  const newDiv = document.createElement("div");
  // Set the width and height of the div (add 'px' as the unit)
  newDiv.style.width = width + "px";
  newDiv.style.height = height + "px";
  // Add the text content to the new div
  newDiv.textContent = text;
  // Append the new div to the container
  container.appendChild(newDiv);
}

// Example usage
createDiv(200, 100, "This is a new div");

// Do not change this code
Window.createDiv = createDiv;

// Question Togglee visibility

function toggleVisibility() {
  // Select the paragraph element by its ID
  const paragraph = document.getElementById("useless-paragraph");

  // Check the current display style and toggle it
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block"; // Show the paragraph
  } else {
    paragraph.style.display = "none"; // Hide the paragraph
  }
}

// QUESTION EDITOR
// Change text color based on the input value
document.getElementById("colorchange").addEventListener("click", function () {
  const color = document.getElementById("colorbox").value;
  const textContainer = document.getElementById("text-container");
  textContainer.style.color = color;
});

// Change font size based on the range slider
document.getElementById("fontsize").addEventListener("input", function () {
  const fontSize = document.getElementById("fontsize").value;
  const textContainer = document.getElementById("text-container");
  textContainer.style.fontSize = fontSize + "px";
});

// Toggle Italics
document.getElementById("italic").addEventListener("click", function () {
  const textContainer = document.getElementById("text-container");
  textContainer.style.fontStyle =
    textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle Underline
document.getElementById("underline").addEventListener("click", function () {
  const textContainer = document.getElementById("text-container");
  textContainer.style.textDecoration =
    textContainer.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle Bold
document.getElementById("bold").addEventListener("click", function () {
  const textContainer = document.getElementById("text-container");
  textContainer.style.fontWeight =
    textContainer.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font family based on dropdown selection
document.getElementById("list").addEventListener("change", function () {
  const selectedFont = document.getElementById("list").value;
  const textContainer = document.getElementById("text-container");
  textContainer.style.fontFamily = selectedFont;
});

// Get CSS properties and display them
document.getElementById("getstyle").addEventListener("click", function () {
  const textContainer = document.getElementById("text-container");
  const cssProps = document.getElementById("css-props");

  const styles = window.getComputedStyle(textContainer);
  const properties = [
    color: ${styles.color};,
    font-size: ${styles.fontSize};,
    font-style: ${styles.fontStyle};,
    font-family: ${styles.fontFamily};,
    font-weight: ${styles.fontWeight};,
    text-decoration: ${styles.textDecorationLine};,
  ];

  cssProps.textContent = properties.join(" ");
});
