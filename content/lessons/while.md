---
title: 'While Loops'
---
There are also the less used 'while loops' in JavaScript.

```javascript
// Like a basic for loop
var i = 0;
while (i < 10) {
  console.log('i === ' + i)
  i++;
}

// do-while loops evaluate the condition after the block is executed
var j = 0;
do {
  console.log('j === ' + j)
  j++;
} while (j > 5)
```

You can see that `j` printed once, even though the condition was *never* true.

```
$ node jsbyexample.js
i === 0
i === 1
i === 2
i === 3
i === 4
i === 5
i === 6
i === 7
i === 8
i === 9
j === 0
```
