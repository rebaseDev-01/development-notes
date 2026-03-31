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
// const arr = [1, 2, 3, 4, 5, 6, "string", true, false, [1, 2, true], { name: "hey", age: 10 }] // list
// const arr1 = [1, 2]
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
//forEach, - array
// forOf- object
//iterator//

const user = {
  name: "JOHN",
  age: 22,
  sal: 50
}

// for (let element of Object.keys(user)) {
//   console.log(element)
// }

// Map: to print the values of an object

const arr = [1, 2, 3];

// arr.forEach(it=>console.log(it))
const users = [
  {
    id: 1,
    name: "JOHN",
    age: 22,
    sal: 20,
    city: "INDORE"
  },
  {
    id: 2,
    name: "HENA",
    age: 22,
    sal: 50,
    city: "BLR"
  },
  {
    id: 3,
    name: "MAN",
    age: 22, city: "DELHI",
    sal: 70
  },
  {
    id: 3,
    name: "MAN",
    age: 22,
    city: "MUMBAI",
    sal: 70
  }, {
    id: 3,
    name: "MAN",
    age: 22,
    sal: 70,
    city: "DELHI"
  },
]

// users.map(user => console.log(user.name + "->" + user.sal))

// const isSalaryDecent = (emp) => {
//   return emp.sal > 50 ? console.log(emp.name + "->" + emp.sal) : "";
// }

// users.map(u => isSalaryDecent(u));
const obj = [{
  id: 1,
  name: "JOHN",
  age: 22,
  sal: 20
}]

// for (let u in obj) {
//   console.log(obj[u])
// }

// obj.map(it => console.log(it.name))
// destructure

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key + "->" + value)
// }

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 6, 1, 5631, 3644, 1, 6541, 1, 11, 164, 13, 184, 174, 1354, 11, 46, 1564];
// 1 - loop
// const res = [];

// for (let i = 0; i < numberArr.length; i++) {
//   if (numberArr[i] % 2 == 0) {
//     res.push(numberArr[i]);
//   }
// }

// const res = numberArr.map(it => it % 2 == 0)

// numberArr.forEach(it => it % 2 == 0 ? console.log(it) : "")

// console.log(res);

// const res = numberArr.map(it => it % 2 === 0)

// const res = numberArr.filter(it => it % 2 === 0);

// console.log(res)

// every- for all Element
// some- for any elemnt
// /boolean
// console.log(numberArr.slice(0, 10))
// reduce - used to combine one or more value

// console.log(numberArr.reduce((acc, curr) => acc + curr, 0))

// use case -  used for grouping element


// full stack developement - SQL, js / ts
// const users = [
//   20: { {
//     id: 1,
//     name: "JOHN",
//     age: 22,
//     sal: 20
//   },}, {
//   id: 2,
//     name: "HENA",
//       age: 22,
//         sal: 20
// },
// 70: {
//   id: 3,
//     name: "MAN",
//       age: 22,
//         sal: 70
// },
// ]

// select * from emp grouped by city- SQL

const grouped = users.reduce((acc, curr) => {
  const cityG = curr.city;
  if (!acc[cityG]) {
    acc[cityG] = []
  };
  acc[cityG].push(curr)
  return acc;
}, {})

// 11LPA

console.log(grouped)

// numberArr.