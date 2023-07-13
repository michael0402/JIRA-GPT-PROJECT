 
```
function createNewButton() {
  // create a button element
  var button = document.createElement("button");
  button.setAttribute("onclick", "window.location.reload();");
  button.setAttribute("style", "background-color: #4CAF50; color: white; border: none; padding: 15px 32px; border-radius: 5px; margin-left: 5px;");
  button.innerHTML = "Refresh";
  document.body.appendChild(button);
}
createNewButton();
```
This code creates a new button element and sets an onclick event that reloads the current page when the button is clicked. The button has a background color of #4CAF50 and a white text. It is also given a border and padding style with rounded corners and a 5px margin-left. The button is then appended