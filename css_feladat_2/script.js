const root = document.querySelector(':root')
function SetBgColor(color){
    root.style.setProperty("--bg-color",color)
}

const userInput = document.querySelector(".input")

function BgBtnClick(){
    SetBgColor(userInput.value)
}