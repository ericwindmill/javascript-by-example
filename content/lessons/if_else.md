---
title: "If / Else"
---
Branching with if / else blocks in JavaScript is as you'd expect.

```javascript
if (7 % 2 === 0) {
  console.log('7 is even');
} else {
  console.log('7 is odd');
}

// You can have if without else
if (8 % 4 === 0) {
  console.log('8 is divisible by 4');
}

// Many branches
const duck = 'blue';
if (duck === 'yellow') {
  console.log('Rubber ducky');
} else if (duck === 'brown') {
  console.log('Live duck');
} else {
  console.log('Ive never seen a blue duck before.');
}
```

```
$ node jsbyexample.js
7 is odd
8 is divisible by 4
Ive never seen a blue duck before.
```