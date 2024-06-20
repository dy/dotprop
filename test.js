import assert from 'assert';
import getProp from './index.js';

assert.equal(getProp({ a: { b: { c: 1 } } }, 'a.b.c'), 1);
assert.equal(getProp([1, 2, 3], 2), 3);
assert.equal(getProp({}, 'a.b'), undefined);

var f0 = { foo: 1 };
assert(getProp(f0) === f0);
assert(getProp({ foo: 1 }, 'foo') === 1);
assert(getProp({ foo: null }, 'foo') === null);
assert(getProp({ foo: undefined }, 'foo') === undefined);
assert(getProp({ foo: { bar: true } }, 'foo.bar') === true);
assert(getProp({ foo: { bar: { baz: true } } }, 'foo.bar.baz') === true);
assert(getProp({ foo: { bar: { baz: null } } }, 'foo.bar.baz') === null);
assert(getProp({ foo: { bar: null } }, 'foo.bar.baz') === undefined);
assert(getProp({ foo: { bar: 'a' } }, 'foo.fake.fake2') === undefined);

assert(getProp({ a: { 'b.c': 1 } }, ['a', 'b.c']) === 1)
assert(getProp({ a: { b: { c: 1 } } }, ['a', 'b', 'c']) === 1)

// dot-prop tests
const f1 = { foo: { bar: 1 } };
assert(getProp(f1) === f1);
f1[''] = 'foo';
assert(getProp(f1, '') === 'foo');
assert(getProp(f1, 'foo') === f1.foo);
assert(getProp({ foo: 1 }, 'foo') === 1);
assert(getProp({ foo: null }, 'foo') === null);
assert(getProp({ foo: undefined }, 'foo') === undefined);
assert(getProp({ foo: { bar: true } }, 'foo.bar') === true);
assert(getProp({ foo: { bar: { baz: true } } }, 'foo.bar.baz') === true);
assert(getProp({ foo: { bar: { baz: null } } }, 'foo.bar.baz') === null);
assert(getProp({ foo: { bar: 'a' } }, 'foo.fake') === undefined);
assert(getProp({ foo: { bar: 'a' } }, 'foo.fake.fake2') === undefined);
assert(getProp({ foo: { bar: 'a' } }, 'foo.fake.fake2') || 'some value' === 'some value');
assert(getProp({ '\\': true }, '\\') === true);
assert(getProp({ '\\foo': true }, '\\foo') === true);
assert(getProp({ 'bar\\': true }, 'bar\\') === true);
assert(getProp({ 'foo\\bar': true }, 'foo\\bar') === true);
assert(getProp({ '\\.foo': true }, ['\\.foo']) === true);
assert(getProp({ 'bar\\.': true }, ['bar\\.']) === true);
assert(getProp({ 'foo\\.bar': true }, ['foo\\.bar']) === true);
assert(getProp({ foo: 1 }, 'foo.bar') === undefined);

const f2 = {};
Object.defineProperty(f2, 'foo', {
	value: 'bar',
	enumerable: false
});
assert(getProp(f2, 'foo') === 'bar');
// assert(getProp({}, 'hasOwnProperty') === undefined);

function fn() { }
fn.foo = { bar: 1 };
assert(getProp(fn) === fn);
assert(getProp(fn, 'foo') === fn.foo);
assert(getProp(fn, 'foo.bar') === 1);

const f3 = { foo: null };

assert(getProp(f3, 'foo.bar') === undefined);
assert(getProp(f3, 'foo.bar') || 'some value' === 'some value');

assert(getProp({ 'foo.baz': { bar: true } }, ['foo.baz', 'bar']) === true);
assert(getProp({ 'fo.ob.az': { bar: true } }, ['fo.ob.az', 'bar']) === true);

assert(getProp(null, 'foo.bar') || false === false);
assert(getProp('foo', 'foo.bar') || false === false);
assert(getProp([], 'foo.bar') || false === false);
assert(getProp(undefined, 'foo.bar') || false === false);
