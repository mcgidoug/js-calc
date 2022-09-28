// global variables
let nrBox = document.querySelector(".nr-box");
let incBtn = document.querySelector(".increment-button");
let decBtn = document.querySelector(".decrement-button");
let clearBtn = document.querySelector(".clear-button");
nrBox.innerHTML = 0;

// event listeners
incBtn.addEventListener("click", incrementCounter);
decBtn.addEventListener("click", decrementCounter);
clearBtn.addEventListener("click", clearCounter);

// functions
// button functions
function incrementCounter() {
  nrBox.innerHTML++;
}
function decrementCounter() {
  nrBox.innerHTML--;
}
function clearCounter() {
  nrBox.innerHTML = 0;
}
