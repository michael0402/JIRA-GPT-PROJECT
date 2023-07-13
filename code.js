
Sure, here's an example of how you can create a new button in JavaScript that allows users to refresh the page without actually clicking the reload button:
```javascript
// get the button element
var button = document.getElementById("refreshButton");

// add a click event listener to the button
button.addEventListener("click", function() {
  // prevent the default behavior of the button (i.e. reloading the page)
  event.preventDefault();

  // change the button text to "Refresh"
  button.innerHTML = "Refresh";

  // simulate a click on the button
  button.click();
});
```
In this code, we first get a reference to the button element using `document.getElementById("refreshButton")`. We then add an event listener to the button using `addEventListener()` method.

Inside the event listener