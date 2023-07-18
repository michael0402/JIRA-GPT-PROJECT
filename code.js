
Here is an example of JavaScript code to create a button that refreshes the page:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  location.reload();
});
```
In this code, we first select an element with the ID "myButton" using the `getElementById()` method. Then we add an event listener to that element, which listens for the "click" event. When the button is clicked, the `location.reload()` method is called, which reloads the page.

You can modify this code to create other types of elements such as input fields or links, and use the appropriate event listeners to listen for their actions.