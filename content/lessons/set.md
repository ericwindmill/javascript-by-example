---
title: "Set"
---

A set is basically an array that only has unique values. It's order is preserved, and you can iterate through it.

```javascript
// Create a new Set
var bananaStand = new Set()

// Add values to a set.
bananaStand.add('$1')
bananaStand.add('$2')
bananaStand.add('$3')
console.log(bananaStand) // => Set { '$1', '$2', '$3' }

// You can't a value that already exists in this set
// It won't throw an error, the value simply will still
// only exist once
bananaStand.add('$1')
console.log(bananaStand) // => Set { '$1', '$2', '$3' }

// Check for values in a set
console.log(bananaStand.has('$1')) // => true

// Remove values in a set
bananaStand.delete('$1')
console.log(bananaStand) // => Set { '$2', '$3' }

// Use size rather than length
console.log(bananaStand.size) // => 2

// Create a set from an array
const bananaStandSales = ['$1', '$2', '$1', '$3', '$2']
const newBananaStand = new Set(bananaStandSales)
console.log(newBananaStand.size) // => 3

// Iterate with forEach
newBananaStand.forEach((value) => console.log(value))
// => $1
// => $2
// => $3
```


```
$ node jsbyexample.js
Set { '$1', '$2', '$3' }
Set { '$1', '$2', '$3' }
true
Set { '$2', '$3' }
2
3
$1
$2
$3
```

