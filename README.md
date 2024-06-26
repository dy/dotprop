# dotprop [![test](https://github.com/dy/dotprop/actions/workflows/node.js.yml/badge.svg)](https://github.com/dy/dotprop/actions/workflows/node.js.yml)

Get property by dot notation.
A short and dependable implementation.

```js
import getProp from 'dotprop';

getProp({a: { b: { c: 1}} }, 'a.b.c') // 1
getProp([1,2,3], 2) // 3
getProp({}, 'a.b') // undefined

// recognizes arrays too
getProp({a: { b: { c: 1}} }, ['a', 'b', 'c']) // 1
getProp({a: { 'b.c': 1 }}, ['a', 'b.c']) // 1
```

## Similar

* [developit/dlv](https://github.com/developit/dlv) – the most compact alternative.
* [sindresohrus/dot-prop](https://github.com/sindresorhus/dot-prop) - enables escaping `\.` at price of larger codebase.
* [facebookindicator/idx](https://github.com/facebookincubator/idx)

[![NPM](https://nodei.co/npm/dotprop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dotprop/)

<p align=center><a href="https://github.com/krishnized/license/">🕉</a></p>
