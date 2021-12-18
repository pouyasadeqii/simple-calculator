let displayBox = document.querySelector(".display");
let displaybox2 = document.querySelector(".show");

function showDisplay(event) {
  const x = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  return (displayBox.innerHTML += x);
}

function calculate() {
  let result = displayBox.innerText;
  if (displayBox.innerHTML == 0) {
    displaybox2.innerHTML = "";
  } else {
    displaybox2.innerHTML = eval(result);
  }
  displayBox.innerHTML = 0;
}

function allClear() {
  displayBox.innerText = 0;
  if (displaybox2.length != 0) {
    displaybox2.innerText = "";
  }
}

function clearOne() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-claer").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clearOne);
let list = document.querySelectorAll(".show-display");
list.forEach((item) => {
  item.addEventListener("click", showDisplay);
  //   console.log(item);
});
