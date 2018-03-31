---
title: 'Variables'
---

JavaScript isn't typed. There are only three options for declaring variables, and only two that should be used in modern JavaScript code.

```javascript
// variables are declared with 'var', 'let' and 'const
var a = 'a';
console.log(a);

// change vars without a declaration
a = 'aa';
console.log(a);

// let and const were added in ES6, and should be used over var
const b = 'b';
let c = 'c';
console.log(b);
console.log(c);

// 'const' means constant, and cannot be changed
// This would throw an error:
// b = 'bb'
// TypeError: Assignment to constant variable.

// use let when you know you'll change a variable
c = 'cc';
console.log(c);

// slight shortcut for multiple vars
let d = 'd', e = 'e';
console.log(d);
console.log(e);
```


```
$ node hello-world.js
a
aa
b
c
cc
d
e
```
