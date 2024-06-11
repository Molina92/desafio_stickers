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
const parrafo = document.querySelector(".parrafo")
let resultado

button.addEventListener("click",()=>{
    resultado = parseInt(stick1.value) + parseInt(stick2.value) + parseInt(stick3.value)

    if (resultado>10) {
        parrafo.textContent = "LLEVAS DEMASIADOS STICKERS!"
    } else {
        parrafo.textContent = "LLEVAS " + resultado + " STICKERS!"
    }

    stick1.value = ""
    stick2.value = ""
    stick3.value = ""
})

// PARTE TRES DEL DESAFÍO

const buttonPassword = document.querySelector(".btn-password")
const num1 = document.querySelector("#select1")
const num2 = document.querySelector("#select2")
const num3 = document.querySelector("#select3")
const parrafo2 = document.querySelector(".parrafo2")

buttonPassword.addEventListener("click", ()=> {
    if (num1.value==='9' && num2.value==="1" && num3.value==="1") {
        parrafo2.textContent = "Password 1 Correcto!"
    } else if (num1.value==='7' && num2.value==="1" && num3.value==="4") {
        parrafo2.textContent = "Password 2 Correcto!"
    } else {
        parrafo2.textContent = "Password Incorrecto!"
    }
})

