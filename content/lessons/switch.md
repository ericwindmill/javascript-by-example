---
title: 'Switch'
---

Switch statements are conditionals that may have many branches (like if / else if).

```javascript
// a simple switch statment
const fruit = 'banana'
switch (fruit) {
  case 'blueberry':
    console.log('blue')
    // everything after the true case executes
    // use 'break' if you aren't returning a value
    break;
  case 'banana':
    console.log('yellow')
    break;
    // multiple cases can resolve to the same branch
  case 'apple':
  case 'raspberry':
    console.log('red')
    break;
  default:
    console.log('not blue, yellow or red')
}
```


```
$ node jsbyexample.js
yellow
```