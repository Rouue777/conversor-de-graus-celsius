//select inputs de range
let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')


//select input numbers
let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')

//atribuir valor do inousts as variaveis number
numeroC.value = celsius.value
numeroF.value = fahrenheit.value
numeroK.value = kelvin.value





function atualizaC() {
    numeroC.value = celsius.value
}


//function de conversão

function atualizaF() {
let celsius_fahrenheit = parseFloat(celsius.value * 9/5) + 32
numeroF.value = celsius_fahrenheit.toFixed(2)

}

function atualizaK(){
let celsius_kelvin = parseFloat(celsius.value) + 273.15
numeroK.value = parseFloat(celsius_kelvin).toFixed(2)

}

// function zerar

function zerar() {
    celsius.value = 0.0
    numeroC.value = celsius.value
    numeroF.value = fahrenheit.value
    numeroK.value = kelvin.value
}





