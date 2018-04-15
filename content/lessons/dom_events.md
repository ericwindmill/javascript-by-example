---
title: "DOM Event Listeners"
---

User interaction on the web relies on event's that are fired from the DOM.

Consider the following HTML
```html
<button id="submit-button">Submit</button>
```

```javascript
// Get reference to your button
const button = document.querySelector('#submit-button')
// Add an event listener that will fire when the button is clicked
// Dom events pass an argument automatically
button.addEventListener('click', (event) => {
  console.log(event.target.id) 
})

// when the button is clicked
// => submit-button
```