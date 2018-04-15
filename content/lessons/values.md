---
title: 'Values'
---

JavaScript has 4 basic value types: Strings, Numbers, booleans, and 'valueless' undefined

```javascript
// Strings
var a = 'Hello'
var b = "World"
console.log(a)
console.log(b)
// You can concatenate them with + operator.
console.log(a + " " + b)

// Numbers
console.log(1 + 3)
console.log(2 + 2.2)

// Booleans
console.log(true && false)
console.log(!true)
console.log(3 > 2)

// Empty Values
// null and undefined
// mostly interchangable in JS
console.log(null)
console.log(undefined)
```


```
$ node jsbyexample.js
Hello
World
Hello World
4
4.2
false
false
true
null
undefined
```