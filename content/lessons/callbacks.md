---
title: "Higher Order Functions"
---

Functions can take other functions as arguments, and they can return other functions. Any function that operates on other functions are called 'higher order functions'.

 ```javascript
// functions can take other functions as arguments
// the built in setTimeout is the classic example
function executeACallback(callback, arg) {
  // this will envoke the function
  // with whatever arg you pass it
  return callback(arg)
}

const add2 = (num) => num + 2

console.log(executeACallback(add2, 3))
// => 5

// functions can also return other functions
function isGreaterThan (num1) {
  return num2 => num2 > num1
}

let isGreaterThan10 = isGreaterThan(10)
console.log(isGreaterThan10(11))
// => true
```

```
$ node jsbyexample.js
5
true
```