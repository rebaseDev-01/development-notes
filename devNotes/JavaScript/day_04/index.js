// callBack

const greetNameOld = () => {
  console.log("Hii Mr Engineer");
}

// 1.Ambiguity - not sure that what the parameter is
// 2. if I needed to pass some other function, restrictng the function name to any particular value 

const greetUserOld = (greetNameOld) => {
  console.log("Hi User")
}

// greetUserOld(greetNameOld());


const greetName = () => {
  console.log("Hii Mr Engineer");
}

// const greetUser = (name, callBack) => {
//   callBack()
//   console.log("HIi-->", name)
// }

// greetUser("John", greetName(DisplayProfile("Engineer", displaySalary())))

function getUser(id, callBack) {
  console.log("Get User")
  callBack("John");
}

function greetUser(name, callBack) {
  console.log("Hii->", name);
  callBack(10000);
}

function isSeniorEmp(salary) {
  return salary > 8000 ? console.log("Senior") : console.log("Junior")
};

// getUser(1, greetUser("John", isSeniorEmp(15000)));
//recursion -order of execution - reverse - STACK, but the output is as per the function call
getUser
  (1, function (name) {
    greetUser(name, function (salary) {
      isSeniorEmp(salary);
    })
  })


function isSeniorEmp(salary) {
  return salary > 8000 ? console.log("Senior") : console.log("Junior")
};

isSeniorEmp(5000)