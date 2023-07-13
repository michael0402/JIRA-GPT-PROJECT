
Sure, here is an example of how you can create a new button that allows users to refresh the page in JavaScript:
```
// Get the button element
const refreshButton = document.getElementById("refresh-button");

// Add an event listener to the button
refreshButton.addEventListener("click", () => {
  // Open the page in the same tab
  window.open(location.href, "_blank");
});
```
You can also create a function to toggle the button and add a click event listener to it.
```
// Toggle the button
function toggleRefreshButton() {
  const refreshButton = document.getElementById("refresh-button");
  refreshButton.classList.toggle("active", !refreshButton.classList.contains("active"));
}

// Add a click event listener to the button
refreshButton.