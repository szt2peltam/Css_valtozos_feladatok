const root = document.querySelector(':root')
function SetBgColor(color){
    root.style.setProperty("--bg-color",color)
}

const userInputColor = document.querySelector(".inputColor")
const userInputText = document.querySelector(".inputText")
const Button = document.querySelector(".button");
const Tiles = document.querySelectorAll(".item");



function ChangeColorOfTile(){
    index = userInputText.value
    color = userInputColor.value
    root.style.setProperty(`--szin${index}`, color)
}

Button.addEventListener("click", ChangeColorOfTile)