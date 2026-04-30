//target the element
//define the event
//define the function -- eventListener 

// to change the style/css of an element the syntax is -> targetedElement.style.property = ""

//local storage, browser storage -> accepts key value pair

const button = document.getElementById("btn");
const getValue = document.getElementById("getValue");
const box = document.querySelector("#box");

const handleButtonClick = () => {
  // box.style.backgroundColor = 'red';
  // box.style.width = "50%";
  localStorage.setItem("age", "28");
};

const handleGetValue = () => {
  const age = localStorage.getItem("age");
  box.textContent = age;
}

getValue.addEventListener("click", handleGetValue)
button.addEventListener("click", handleButtonClick)

// IIFE-> unnamed function
(() => { })();
