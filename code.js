
Here's an example of how to create a button that allows users to refresh the page in JavaScript:
```
function refreshPage() {
  location.reload();
}

var refreshButton = document.createElement("button");
refreshButton.innerHTML = "Refresh";
refreshButton.onclick = refreshPage;

document.body.appendChild(refreshButton);
```
This code creates a new button element, sets its innerHTML to "Refresh" and attaches a click event handler to it. When the button is clicked, the code reloads the page using the `location.reload()` method. Finally, the button is appended to the document body.

You can add this code in your HTML file and create a button to refresh the page.