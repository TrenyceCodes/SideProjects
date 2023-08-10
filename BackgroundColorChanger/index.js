let changeColorButton = document.getElementById("changeColorButton");
let hexColor = document.getElementById("hexColor")
let body = document.getElementsByName("body");

function changeBackgroundColor() {
    let randomColor = Math.floor(Math.random() * 0xFFFFF * 16).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    hexColor.textContent = `#${randomColor}`;
    changeColorButton.style.backgroundColor = `#${randomColor}`;
}

changeColorButton.addEventListener("click", changeBackgroundColor);