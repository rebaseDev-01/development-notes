// console.log("One")
// console.log("2")
// console.log("3")
// console.log("4")

// js is a single threaded synchronous pl

// Asynchronous JS - setTimeout & setInterval
// setTimeout(() => console.log("HII"), 3000) //<------1st thread exe after 5 sec + 2sec = 7sec (2nd)
// setTimeout(() => console.log("Hey"), 2000) //<------1st thread exe after 2 sec
// setInterval(() => console.log("interval in 2sec"), 2000)
// 1st - 2second
// 2nd - 5second

// EVENT LOOP - we have already some contradictory function like setTimeout, to prove this nature we have event loop
// it defines the asynchronous nature of JS, parallelism
// concurrency & parallelism
// const add = () => {
//   const a = 563541645646;
//   const b = 665441564646;
//   return a * b;
// }

// console.log(1) //first

// setTimeout(() => console.log(2), 0) //fourth

// Promise.resolve().then(() => console.log(3)); //third

// console.log(add())
// console.log(4) //second

// console.log(10e+5)

// const postLike = (like) => {
//   console.log("Optimistic liked->", like + 1)

//   const postLiked = (like) => {
//     const apiRes = like + 1;
//     console.log("Api res->>", apiRes)
//   }
//   setTimeout(() => postLiked(5), 2000)
// }

// postLike(5)

// optimistic locking
// passimistic locking