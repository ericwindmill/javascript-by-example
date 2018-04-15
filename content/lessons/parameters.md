---
title: "Function Parameters"
---

In JavaScript, anything goes &trade;.

```javascript
// Pass parameters into functions like any language
let multiply = (x, y) => x * y
const val = multiply(2,3)
console.log(val) // => 6

// JavaScript doesn't care how many parameters you pass in
// Extra params are ignored
const tooManyArgs = multiply(2, 3, 12, 'bananas', () => 'wtf is happening')
console.log(tooManyArgs) // => 6

// If there aren't enough, the missing params get assigned 'undefined'
const notEnoughArgs = multiply(2)
console.log(notEnoughArgs) // => NaN (NotANumber)

// You can also have default parameters
multiply = (x, y = 2) => x * y
const notEnoughArgsAgain = multiply(2)
console.log(notEnoughArgsAgain) // => 4
```

```
$ node jsbyexample.js
6
6
NaN
4
```
