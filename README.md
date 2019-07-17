# dotprop [![Build Status](https://travis-ci.org/dy/dotprop.svg?branch=master)](https://travis-ci.org/dy/dotprop)

Get property by dot notation.
A short and dependable implementation.

```js
var getProp = require('dotprop');

getProp({a: { b: { c: 1}} }, 'a.b.c') // 1
getProp([1,2,3], 2) // 3
getProp({}, 'a.b') // undefined

// recognizes arrays too
getProp({a: { b: { c: 1}} }, ['a', 'b', 'c']) // 1
getProp({a: { 'b.c': 1 }}, ['a', 'b.c']) // 1
```

## Similar

* [sindresohrus/dot-prop](https://github.com/sindresorhus/dot-prop) - enables escaping `\.` at price of larger codebase
* [developit/dlv](https://github.com/developit/dlv)
* [facebookindicator/idx](https://github.com/facebookincubator/idx)

[![NPM](https://nodei.co/npm/dotprop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dotprop/)
