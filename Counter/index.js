let counterNumber = document.querySelector(".counterNumber");
let decrementButton = document.querySelector(".decrementButton");
let resetButton = document.querySelector(".resetButton");
let incrementButton = document.querySelector(".incrementButton");
let number = 0;

function decreaseNumber() {
    if (number <= 0) {
        number = 0;
        counterNumber.textContent = number;
    } else {
        number--;
        counterNumber.textContent = number;
    }
}

function increaseNumber() {
    number++;
    counterNumber.textContent = number;
}

function resetNumber() {
    number = 0;
    counterNumber.textContent = number;
}

decrementButton.addEventListener("click", decreaseNumber);
incrementButton.addEventListener("click", increaseNumber);
resetButton.addEventListener("click", resetNumber);