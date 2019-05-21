---
title: "Prototypes and Inheritance"
---

Rather than classes, JavaScript has prototypes. It uses a system called `prototypal inheritance`. Remember, everything in JavaScript is an `object`, *not* a class.

Inheritance is achieved by pointing an object's `__proto__` property to another object. The best way to do that is with the `Object.create()`

```javascript
// An animal 'class'
function Animal (name) {
  this.name = name
}

// Give all future Animals this function
Animal.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

// A cat 'class'
function Cat (name, breed) {
  // Bind the name to the animal parent object
  Animal.call(this, name)
  this.breed = 'tabby'
}

// the Object create method allows
// objects to inherit from others
Cat.prototype = Object.create(Animal.prototype)

Cat.prototype.purr = function () {
  console.log('puuurrrrr')
}

// Nora has access to all the methods on 
// Cats and on Animals
const nora = new Cat('Nora')
nora.greet()
nora.purr()
```

```
$ node jsbyexample.js
 Hello, my name is Nora
 puuurrrrr
```