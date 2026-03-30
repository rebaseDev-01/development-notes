//Java script is a dynamically typed synchronous lang and it is a single threaded programming lang.
//Event loop.

// f1 - 10sec <----- << thread >> singleThread
// F2 - 12 <------
// f3 - 1 <-=-----
// f4 - 5

// integer/Number,
// Float,double
// Boolean,
// String,

// null -- intentionally given the value as null. /// let a = null;

// undefined -  absence of value/// let a;

// // symbol - always provides unique value to the variable even if the data is same

// object -key : value -- pair embedded in {}

// const a = Symbol("A")
// const b = Symbol("A")

// const user = {
//   name: "John",
//   salary: 10000,
//   age: 20
// };

// console.log(typeof user)


// if (a === b) {
//   console.log("true")
// } else {
//   console.log("false")
// }

// let a = {};
// a = null;

// let b;
// console.log(typeof b)

// ?? - nullish coalescing operator
// it will always return the left hand side value until the value is absent or the data type is null/undefined,
// else it will return the right side value

// ! - inversion operator- !true -> false

// zero (0) represents falsy value & any number other than zero be it negative represents truth value

// ternary operator - >
//  condition  ? true case : false case;
// condition ? yes : No

// 2 > 3 ? console.log("greater") : console.log("smaller");

// 8 == 8 ? console.log("false") : console.log("true");

// const a = 10

// a == 10 ? console.log("Eaual") : console.log("No")

// // 4 function - normal function (named function) writtent by using "function" keyword;

// function addOne(a) {
//   a = a + 1;
//   return a;
// }

// console.log(addOne(2))

// 2. unNamed function && IIFE - immedieatly invoked function expression
// (function () {
//   console.log("I am IIFE")
// }());

// 3. Arrow function
const addOne = (a) => {
  a = a + 1;
  return a;
}