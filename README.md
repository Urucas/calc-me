# calc-me [![Build Status](https://travis-ci.org/Urucas/calc-me.svg)](https://travis-ci.org/Urucas/calc-me)
Calculate a set of operations over a var

#Usage
```bash
npm install --save calc-me
```

**API**
```javascript
import calc from 'calc-me';
let x = calc(2,"+2");
// 4

let x = calc(2,"+");
// 4

let x = calc(2,"++");
// 3

let x = calc(2, ["+2","-2","*2","/2"]);
// 2

let x = calc(3, ["+","-3","+","*4","/2"]);
// 12
```

Operations
* +[num]
* -[num]
* ++
* --
* *[num]
* /[num]
