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

const stick1 = document.querySelector("#stick1")
const stick2 = document.querySelector("#stick2")
const stick3 = document.querySelector("#stick3")
const button = document.querySelector(".btn")

let resultado

button.addEventListener("click",()=>{
    console.log(stick1.value)
    console.log(stick2.value)
    console.log(stick3.value)
    resultado = stick1.value + stick2.value + stick3.value
    console.log(resultado)
})


