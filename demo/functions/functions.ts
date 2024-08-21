/* eslint-disable */
import { strict as assert } from "assert";

// Functions are an essential component of programming that help organize code
// and make it more modular. A function is a block of code that can be called
// multiple times throughout a program with different inputs, allowing you to
// reuse code and save time. Functions can perform specific tasks or return
// values, and they can be used to break down complex problems into smaller,
// more manageable pieces. By using functions, you can reduce redundancy,
// improve code readability, and make it easier to maintain and update your
// code.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/functions.html

function sayHello() {
  console.log("Hello");
}
sayHello();

function sum(lhs: number, rhs: number) {
  return lhs + rhs;
}
let answer = sum(2, 2);
console.log(answer);

let answer2 = sum(answer, 2);
assert.equal(answer2, 6);

let answer3 = sum(sum(1, 1), sum(2, 2));
assert.equal(answer3, 6);

let lhs = sum(1, 1);
let rhs = sum(2, 2);
let answer4 = sum(lhs, rhs);
