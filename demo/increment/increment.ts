/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// "postfix" increment
let n = 1;
n++;
assert.equal(n, 2);
// "prefix" increment
++n;
assert.equal(n, 3);

n = 5;
// let k = n++;// assert.equal(n, 6);
let k = ++n;
assert.equal(k, 6);

// decrement
n = 5;
let t = --n;
assert.equal(t, 4);

// arithmetic
n = 5;
n += 5;
assert.equal(n, 10);
console.log(n);
n -= 5;
assert.equal(n, 5);
n -= 1;
assert.equal(n, 4);
