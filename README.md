# JavaScript Loose Typing Bug: Unexpected Addition with undefined and null

This repository demonstrates a common JavaScript bug related to loose typing and the behavior of the `+` operator when dealing with `undefined` and `null` values.

## The Bug
The JavaScript `+` operator does not always behave predictably when working with `undefined` and `null`.  In particular:

* `undefined + number` results in `NaN` (Not a Number).
* `null + number` results in the number (null is coerced to 0).

This can lead to unexpected results in calculations and conditional logic.

## The Solution
The best approach is to explicitly handle `undefined` and `null` values before performing arithmetic operations.  This typically involves checking for these values and providing suitable defaults or handling them appropriately in your application logic.