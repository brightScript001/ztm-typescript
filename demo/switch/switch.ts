/* eslint-disable */
import { strict as assert } from "assert";

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let someNumber = parseInt("10");
const sample = "sample";
const someString = `${sample}`;

//switch statement
someNumber = parseInt("5");
switch (someNumber) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;

  default:
  // default code
}

//if ...else statement
someNumber = parseInt("7");
if (someNumber === 1) {
  // code
} else if (someNumber === 2) {
  // code
} else if (someNumber === 3) {
  // code
} else {
  // default code
}
