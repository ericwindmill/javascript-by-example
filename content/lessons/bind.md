---
title: "Bind"
---

Use the method `bind()` to make sure `this` is what you want it to be in a function scope.

Using the *failing* example from the previous lesson:

```javascript
function doTwice (func) {
  func()
  func()
}

const noraTheCat = {
  name: 'Nora',
  color: 'orange',
  whatsMyName: function () {
    console.log(this.name)
  }
}

// This will throw an error.
// doTwice calls the function as a
// stand alone function, which sets 'this'
// to the global scope. whatsMyName doesn't
// exist on the window
doTwice(noraTheCat.whatsMyName.bind(noraTheCat))
```

```
$ node jsbyexample.js
Nora
Nora
```