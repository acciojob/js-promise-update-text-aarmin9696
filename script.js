//your JS code here. If required.
function updateText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Get the HTML element with ID "output"
const outputElement = document.getElementById("output");

// Call the updateText function and wait for the promise to resolve
updateText().then((text) => {
  // Update the text of the outputElement
  outputElement.textContent = text;
});
