const root = document.querySelector(':root')
function SetBgColor(color){
    root.style.setProperty("--bg-color",color)
}

const userInputColor = document.querySelector(".inputColor")
const userInputText = document.querySelector(".inputText")
const Button = document.querySelector(".button");
const Tiles = document.querySelectorAll(".item");
const WidthInput = document.querySelector(".width")
const HeightInput = document.querySelector(".height")


function ChangeColorOfTile(){
    index = userInputText.value
    color = userInputColor.value
    root.style.setProperty(`--szin${index}`, color)
}


function ChangeHeigthOfElements() {
    root.style.setProperty("--height", `${HeightInput.value}px`)
    root.style.setProperty("--width", `${WidthInput.value}px`)
}

Button.addEventListener("click", ChangeColorOfTile)