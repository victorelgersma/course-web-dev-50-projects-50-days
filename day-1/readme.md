# Expanding Cards

### JS

- `document.querySelectorAll` is used to select all the panel divs
- an event listener is added to each panel
    - the event listener is an anonymous function which first removes all the "active" classes from the divs, and then adds the "active" class to the panel clicked by user.

### HTML
- 5 div.panel wrapped in a div.container
- one of these divs has a class called 'active', which is used in the CSS for styling

### CSS
- flexbox is used for centering the divs
- active panel has flex: 5, whereas non-active panels have flex:0.5
- media query added for responsive layout


### Known Bugs / To do

- currently the 2 panels on the right hand side disappear when the viewport is small - would be interesting to make them appear again 


### Links / reading


https://docs.emmet.io/ (built into vscode)
https://cdnjs.com/
https://fonts.google.com/
https://developer.mozilla.org/en-US/docs/Web/API/NodeList (returned by querySelectorAll)
https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property