// PARTE UNO DEL DESAFÍO

const image = document.querySelector(".image")
const border = document.querySelector(".border")
let bordeAgregado = false

image.addEventListener("click",()=>{
    if (!bordeAgregado) {
        border.style.border = "2px solid red"
        bordeAgregado= true
    } else {
        border.style.border = "none"
        bordeAgregado= false
    }
})

// PARTE DOS DEL DESAFÍO

