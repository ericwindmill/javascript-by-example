---
title: "DOM Nodes"
---

Manipulating the DOM is what JavaScript is all about. Or... er... used to be about, before Node.js. It's what web development is all about. 

Consider this HTML: 
```html
<ul id="list">
    <li class="item">One</li>
    <li class="item">Two</li>
    <li class="item">Three</li>
</ul>
```

```javascript
// Get an element with an id by its id.
const list = document.querySelector('#list')
// Get a group of elements with a similar class.
// Returns a 'NodeList', which is *not* an array
const items = document.querySelectorAll('.item')
// Get elements by their tag name
const listAgain = document.querySelector('ul')


// A node list looks like an array, but it is not.
// Many of the methods you can use on Arrays you cannot use on NodeLists

// works
console.log(items.length) // => 3
// doesn't work
 items.push( /*new element*/ ); 

// Add elements to the DOM programmatically
const newLi = document.createElement('li')
newLi.innerText = 'Four'
list.appendChild(newLi)
```