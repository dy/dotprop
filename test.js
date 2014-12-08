var assert = require('assert');
var getProp = require('./');

assert.equal(getProp({a: { b: { c: 1}} }, 'a.b.c'), 1);
assert.equal(getProp([1,2,3], 2), 3);
assert.equal(getProp({}, 'a.b'), undefined);