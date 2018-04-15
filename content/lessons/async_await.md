---
title: "Async / Await"
---

Async / Await is the preferred way to handle asynchronous JS programming.

*These examples are taken from [this article on CSS Tricks](https://css-tricks.com/using-es2017-async-functions/).* (I wrote it.)

```javascript
// tell JavaScript that his function is asynchronous: 
async function logger() {
  // pause until fetch returns
  let data = await fetch('http://sampleapi.com/posts')
  console.log(data)
}


// Combine it with try / catch
async function logger ()  {
    try {
        let user_id = await fetch('/api/users/username')
        let posts = await fetch('/api/`${user_id}`')
        let object = JSON.parse(user.posts.toString())
        console.log(posts)
    } catch (error) {
        console.error('Error:', error) 
    }
}
```