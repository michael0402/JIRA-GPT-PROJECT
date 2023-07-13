
```
// Create a button element
const button = document.createElement("button");
button.innerHTML = "Refresh";

// Add an event listener to the button
button.addEventListener("click", () => {
  // If the button was clicked, redirect to the home page
  window.location.href = "http://example.com";
});

// Add the button to the document
document.body.appendChild(button);
```
This code creates a new button element, sets its innerHTML to "Refresh", adds an event listener to the button that listens for the "click" event, and then redirects the user to the home page when the button is clicked. Finally, the button is added to the document.