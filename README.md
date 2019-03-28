# dotprop [![Build Status](https://travis-ci.org/dy/dotprop.svg?branch=master)](https://travis-ci.org/dy/dotprop)

Get property by dot notation.
A short and dependable implementation.

```js
var getProp = require('dotprop');

getProp({a: { b: { c: 1}} }, 'a.b.c') // 1
getProp([1,2,3], 2) // 3
getProp({}, 'a.b') // undefined
```

[![NPM](https://nodei.co/npm/dotprop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dotprop/)
