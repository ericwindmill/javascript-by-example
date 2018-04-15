---
title: 'Array'
---

All arrays in JavaScript are growable, and order is guaranteed.

```javascript
// establish an array with a starting length
// There is no advantage to using this syntax
const arr1 = new Array(3)
arr1[0] = 'banana'
arr1[1] = 'apple'
arr1[2] = 'grapes'
console.log('arr1:', arr1) 
// => arr1: [ 'banana', 'apple', 'grapes' ]

// An array literal
const arr2 = []
//.push() is a method on the Array object
arr2.push(1)
arr2.push(2)
console.log('arr2:', arr2)
// => arr2: [ 1, 2 ]

// you can add to high indexes, though probably don't want to.
arr2[12] = 3
console.log('arr2 again:', arr2)
// => arr2 again: [ 1, 2, <10 empty items>, 3 ]
```

```
node jsbyexample.js
arr1: [ 'banana', 'apple', 'grapes' ]
arr2: [ 1, 2 ]
arr2 again: [ 1, 2, <10 empty items>, 3 ]
```
