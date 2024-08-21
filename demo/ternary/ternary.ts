/* eslint-disable */
import { strict as assert } from "assert";

// 'ternary' is a condensed if..else statement that can fit on a
// single line.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

let age = 18;
//           boolean exp ? T     f
let canVote = age >= 18 ? "Yes" : "No";
assert.equal(canVote, 18);
