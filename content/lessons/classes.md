---
title: "ES6 Classes"
---

As of ES6, we don't have to bother ourselves with protoypes anymore. We now have proper class.

Its notable that classes are simply wrappers for prototypal inheritance.

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }
  
  greet() {
    return `Hello, my name is ${this.name}`
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
  
  purr() {
    return 'purrrrr'
  }
}

const nora = new Cat('Nora', 'tabby')
nora.greet()
nora.purr()
```

``` 
$ node jsbyexample.js
Hello, my name is Nora
purrrrr
```

