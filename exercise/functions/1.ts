// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

function firstName(): string {
  return "John";
}
firstName();

function lastName(): string {
  return "Doe";
}
lastName();

function fullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
const completeName = fullName(firstName(), lastName());

assert.strictEqual(completeName, "John Doe");
