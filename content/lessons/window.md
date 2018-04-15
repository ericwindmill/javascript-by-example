---
title: "Window"
---

The 'window' is the global object in JavaScript. But, only on the browser, this doesn't apply in server-side Node.js.

**If you're running these examples in the terminal using node, this won't work. Run in your favorite browsers dev tools!**

```javascript
// Declare global variables on the window explicitly
window.myName = 'Eric'
console.log(window.myName) // => Eric

// Variables are implicity added without the window keyword
myName = 'Ted'
console.log(window.myName) // => Eric

// any var declared without var, let or const
// is automatically a global var
function newScope() {
  function evenDeeperScope() {
    windowVar = "I'm on the window"
  }
  evenDeeperScope()
}

newScope()
console.log(window.windowVar) // => I'm on the window
```

Copied into Firefox dev-tools!
```bash
Eric
Ted 
I'm on the window
```