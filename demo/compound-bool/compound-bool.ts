/* eslint-disable */
import { strict as assert } from "assert";

//  NOT
const writing = true;
const reading = !writing;
assert.equal(reading, false);

//OR
//(PICK A MOVIE)
const rating = 9;
const favoriteMovie = false;
const suggestions = rating > 8 || favoriteMovie;
assert.equal(suggestions, true);

//AND
const age = 18;
const isTeenager = age >= 13 && age < 20;
assert.equal(isTeenager, true);

//OUR PACKAGE
const packageWeight = 30;
const packageLength = 50;
const feeException = false;

const extraFee = !feeException && (packageWeight > 25 || packageLength > 40);