/* eslint-disable */
import { strict as assert } from "assert";

// Arrays offer a way to store and manipulate collections of values of the same
// type. They are defined using square brackets and can be populated with
// values at initialization, or later using various methods such as push(),
// splice(), and concat(). Arrays can be of a fixed length or dynamically
// resized as needed, and they can be used with various array methods to
// perform common operations like sorting, filtering, and mapping.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const numbers: number[] = [1, 2, 3];
let letters: string[] = ["a", "b", "c"];

letters = ["a", "b", "c"];
letters[1] = "z";

assert.deepEqual(letters, ["a", "z", "c"]);

// Mixed
const names = [
  ["Success", "B"],
  ["Samuel", "S"],
];
names[0][0];
names[1][0];

const num: number[] = [];
//append element
num.push(10);
num.push(20);
num.push(30);
assert.deepEqual(num, [10, 20, 30]);

//removing with pop() element
num.pop();
assert.deepEqual(num, [10, 20]);

//slice element
num.splice(0, 1);
assert.deepEqual(num, [20]);
