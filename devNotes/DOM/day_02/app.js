// const title = document.getElementById("title")
const title = document.querySelector("#title")
const items = document.querySelectorAll('li') //html tag name
const themeButton = document.getElementById('theme')
// console.log(items[0].textContent)

items.forEach(it => {
  it.innerHTML = it.textContent + "<h2> New data</h2>"
})
let flag = true;
const handleThemeToggle = () => {
  const box = document.createElement('div');
  box.textContent = "Newly created box";
  if (flag) {
    document.body.style.backgroundColor = 'white'
    box.classList = 'box-light';
    document.body.appendChild(box);
    flag = false
    //early return method
    return;
  }
  document.body.style.backgroundColor = 'black'
  box.classList = 'box-dark';
  document.body.appendChild(box);
  flag = true;
  // ternary operator
}

themeButton.addEventListener('click', handleThemeToggle)

//EVENT BUBBLING -- instead of adding event listeners to all children, we add one listen in the parent

//Creating and removing elements
