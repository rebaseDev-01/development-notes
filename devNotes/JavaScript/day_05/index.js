// const promise = new Promise((resolve, reject) => {

// });

// 1st step creating a promise
// const myPromise = new Promise((resolve, reject) => {
//   let isValid = true;

//   if (isValid) {
//     resolve("Promise executed successfully")
//   } else {
//     reject("Promise failed new")
//   }
// });


// myPromise
//   .then((res) => console.log("My promise statement true")) //success
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finally"))

// Micro Task queue

// const funcOne = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("FuncOne Executed"), 2000);
//   })
// }

// const funcTwo = (prevResult) => {
//   let flag = false

//   if (flag) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(prevResult + " FuncTwo Executed"), 2000);
//     })
//   } else {
//     return false;
//   }

// }

// const funcThree = (prevResult) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(prevResult + " FuncThree Executed"), 2000);
//   })
// }

//promise chaining-- multiple promises
// funcOne()
//   .then(funcTwo)
//   .then(funcThree)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

// async myFunctions(){
//   await funcOne()
//   await funcTwo();
//   await funcThree();
// }

// every thing should be true
// Promise.all([
//   Promise.resolve("A"),
//   Promise.reject("B"),
//   Promise.resolve("C")
// ]).then((res) => console.log("Resolved"))
//   .catch(err => console.log("Error"))

// java / .NET -- (async)-- Task.all

// anything should be true-> end result true
// Promise.any([
//   Promise.reject("A"),
//   Promise.reject("B"),
//   Promise.resolve("C")
// ]).then((res) => console.log(res))
//   .catch(err => console.log("Error"))

// the promise which is executed at first is returned
// Promise.race([
//   setTimeout(() => Promise.resolve("C"), 2000),
//   setTimeout(() => Promise.resolve("A"), 3000),
//   setTimeout(() => Promise.resolve("B"), 4000)
// ]).then((res) => console.log(res))
//   .catch(err => console.log(err))

// Promise.allSettled()


// 1. user fetch
// 2. user image
// 3. user order

// 4. user login(1+2+3 , success)

// userLogin.all(
//   fetchUser()
//   getUserImg()
//   getOrderHistory()
// ).then(res=>console.log(res))
// .catch(err=>console.log(err))
// 2nd step using a promise function
// to use a invoke a promise function we use 2 keyword
// 1-> .then (success)
// 2-> .catch (failure)

// getUser(
//   // const data = getUserById() -> success/ failure
//   if (data) {
//     showData(data)
//   }
//   showError();
// )

// const getUser = () => {
//   const isUserFound = getUserById();

//   if (isUserFound) {
//     console.log("User Found");
//   }
//   else {
//     console.log("USer not found")
//   }
// }

// const getUserById = () => {
//   return 5 > 4 ? true : false;
// }

// getUser();

