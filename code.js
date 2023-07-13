 
```
const buttonRefresh = document.createElement('button');
buttonRefresh.innerHTML = 'Refresh';
buttonRefresh.addEventListener('click', () => {
  window.location.reload();
});
document.body.appendChild(buttonRefresh);
```
This code creates a new button element using the `document.createElement()` method and assigns it the class "refresh-button". It then sets the innerHTML of the button to "Refresh" and adds an event listener to the button that listens for the 'click' event. When the button is clicked, the `window.location.reload()` method is called, which reloads the current page. Finally, the button is added to the document body using the `document.body.appendChild()` method.