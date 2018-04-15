---
title: "Fetch and HTTP"
---

Fetch is an HTTP request API built into JavaScript.

This uses a nice testing API that you can [find here](https://jsonplaceholder.typicode.com/).

This should be tested in your browsers dev-tools.

Fetch is *not* supported in IE. 

```javascript
// fetch returns a promise
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
// You can also pass options as a second param
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'get',
  headers: {
      'Content-Type': 'application/json'
    },
}).then((response) => response.json())
.then(json => console.log(json))
```