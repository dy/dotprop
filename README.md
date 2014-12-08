# dotprop [![Build Status](https://travis-ci.org/dfcreative/dotprop.svg?branch=master)](https://travis-ci.org/dfcreative/dotprop)  [![Code Climate](https://codeclimate.com/github/dfcreative/dotprop/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/dotprop) <a href="http://unlicense.org/UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>

Get property by dot notation.
A short and dependable implementation.

```js
var getProp = require('dotprop');

getProp({a: { b: { c: 1}} }, 'a.b.c') // 1
getProp([1,2,3], 2) // 3
getProp({}, 'a.b') // undefined
```

[![NPM](https://nodei.co/npm/dotprop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dotprop/)