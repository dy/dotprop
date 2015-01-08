var assert = require('assert');
var getProp = require('./');

assert.equal(getProp({a: { b: { c: 1}} }, 'a.b.c'), 1);
assert.equal(getProp([1,2,3], 2), 3);
assert.equal(getProp({}, 'a.b'), undefined);

var f1 = {foo: 1};
assert(getProp(f1) === f1);
assert(getProp({foo: 1}, 'foo') === 1);
assert(getProp({foo: null}, 'foo') === null);
assert(getProp({foo: undefined}, 'foo') === undefined);
assert(getProp({foo: {bar: true}}, 'foo.bar') === true);
assert(getProp({foo: {bar: {baz: true}}}, 'foo.bar.baz') === true);
assert(getProp({foo: {bar: {baz: null}}}, 'foo.bar.baz') === null);
assert(getProp({foo: {bar: 'a'}}, 'foo.fake.fake2') === undefined);