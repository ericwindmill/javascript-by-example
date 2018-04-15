---
title: "Closures"
---

In JavaScript, functions *close over* the outer scopes variables when they are defined.

```javascript
// Functions enclosed in other functions have 
// access to the outer functions variables.
function counter () {
  let count = 0

  // this method has access to count
  // because it closes over outer variables
  const plus = (function () {
    count++
  })

  plus()

  return count;

}

console.log(counter()) // => 1

// Each instance of counter has its own scope
console.log(counter()) // => 1
console.log(counter()) // => 1
```

```bash
$ node jsbyexample.js
1
1
1
```