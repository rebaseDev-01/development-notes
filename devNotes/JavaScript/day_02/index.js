//Scope of a function. scope of a variable
// the lifecycle of a function/variable in which we can access it, the block in which the f/v is accessible

// 3 ways to declare a variable in javascript
// let - local scoped but can be redeclare and updated

// var -  global scoped , can be updated and redeclare

// const - constant- if declared once can't be redeclared/ updated (local scoped)

// const main = () => {
//   const a = 5;
//   a = 6;
//   console.log("Inside main function--->", a)
//   return a;
// }


// const a = 10
// main()
// console.log(a);

// const main = () => {
//   let a = 5;
//   a = 6;
//   console.log("Inside main function--->", a)
//   return a;
// }

// let a = 10
// main()
// console.log(a);
// const add = () => {
//   let a = 5;
//   return a;
// }


// const main = () => {
//   a = 6;
//   console.log("Inside main function--->", a)
//   return a;
// }
// main()
// console.log(a);


// main();
// var a = "string"

// function main() {
//   a = 6;
//   console.log("Inside main function--->", a)
//   return a;
// }
//Hoisting - when any variable is declared using var keyword, and it's used before declaration,
// then js compiler takes the var declared using "var" keyword to the top of the code (logically) and initialize it with undefined

//Arrow function does not support hoisting, normal named function supports

// const a = {
//   name: "JOHN",
//   age: 20
// }

// a.age = 25;


// console.log(a)
// Array = is a contigious memory location storing element of same data type
const arr = [1, 2, 3, 4, 5, 6, "string", true, false, [1, 2, true], { name: "hey", age: 10 }] // list
const arr1 = [1, 2]
// const res = arr.concat(arr1);
// console.log(res)

// const A = [1, 2, 3, 4, 546, 4156, 4, 5144, 1231, 441, 234165132, 1]

// // give me the even numbers from an array
// const res = A.filter(it => it % 2 === 0)

// const result = []
// for (let i = 0; i < A.length; i++) {
//   if (A[i] % 2 === 0) {
//     result.push(A[i]);
//   };
// }
// arr.map(it => typeof it === "number" ? console.log(it) : "")
console.log(arr.indexOf(6))

auto 