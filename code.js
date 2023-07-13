
Sure! Here's an example of how you can create a new button that allows users to refresh the page in JavaScript:
```javascript
const button = document.createElement('button');
button.innerHTML = 'Refresh';
button.addEventListener('click', () => {
  window.location.reload();
});
document.body.appendChild(button);
```
This code creates a new button element, sets its `innerHTML` to "Refresh", and adds an event listener to it that will call the `location.reload()` method when clicked. Finally, the button is added to the document body.

Now, when a user clicks on the "Refresh" button, their page will be refreshed without actually reloading the page.