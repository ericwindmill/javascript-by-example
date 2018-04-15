---
title: "Promises"
---

Promises are one way in which JavaScript supports async code.

*These examples are taken from [this article on CSS Tricks](https://css-tricks.com/using-es2017-async-functions/).* (I wrote it.)

```javascript
// Create a new Promise:
let timeOutLogger = new Promise(resolve => setTimeout(resolve, 500))
timeOutLogger().then(() => console.log('Waited half a second'));

// Async functions can be chained together
// This is the preferred syntax
readFile(file1)
    // When the function returns, manipulate it's return value
  .then((file1Data) => { /* do something to the returned data */ })
  .then((previousPromiseData) => { /* do the next thing */ })
  .catch( /* handle programmer errors */ )
```

```node
Waited half a second
```

