---
title: 'Exceptions'
---

Handling exceptions in JavaScript comes down to three keywords: `try`, `catch`, and `finally`.

```javascript
  function logger () {
    console.log('Logging to the console...')
  }
  
  
  function logCaller () {
  
    try { // First, try to execute this code.
      logger()
    } catch (e) { // if it fails, execute this block instead.
      console.log('Error!')
    }
  }
  
  logCaller()
```

```
node jsbyexample.js
Logging to the console...
```

```javascript
  function logger () {
    console.log('Logging to the console...')
  }
  
  function logCaller () {
  
    try { // First, try to execute this code.
      log_ger() // This function doesn't exist at runtime.
    } catch (e) { // if it fails, execute this block instead.
      console.log('Error!')
    }
  }
  
  logCaller()
```

```
node jsbyexample.js
Error!
```