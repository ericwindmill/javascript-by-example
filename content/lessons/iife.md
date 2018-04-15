---
title: "IIFE (pronounced iffy)"
---

You can wrap a function in Parens and call it to execute it immediately when the script runs (usually when a webpage is opened).

```javascript
// This won't run until its called.
function logSomething() {
  console.log('something');
}

// This will run without being called, as soon as the page is loaded.
(function immediateLogger() {
  console.log('something')  
})()
```

```bash
$ node jsbyexample.js
something
```