---
title: 'For Loops'
---

JavaScript offers three different types of 'for' loops as of ES6:

```javascript
// Standard for loop
// Do this thing 10 times
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// for/in loop
// Used to loop through objects
const friends = {'name': 'Matt', 'name':'Cody', 'name':'Anthony'};
for (friendName in friends) {
  console.log(friendName);
}

// ES6 for/of
// Used to loop over any data structure with length
const faces = "🤠🙃😎";
for (face of faces) {
  console.log(faces);
}

const bowies = ["👩‍🎤", "👨‍🎤"];
for (bowie of bowies) {
  console.log(bowie);
}
```

```
$ node jsbyexample.js
0
1
2
3
4
5
6
7
8
9
Cody
28
Louisville, KY
🤠🙃😎
🤠🙃😎
🤠🙃😎
👩‍🎤
👨‍🎤
```