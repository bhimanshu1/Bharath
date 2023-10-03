let celsius = 0
let kelvin = 273.15
let heit = 32
let unit = null

let firstInput = document.querySelector("#input_1")
let secondInput = document.querySelector("#input_2")

function celsiusToAny(temp, unit){
    if (unit === "kelvin"){
        return parseInt(temp) + kelvin
    }
    return (parseInt(temp)*1.8) + heit
}

let firstSelect = document.querySelector("#select_1")
let secondSelect = document.querySelector("#select_2")
let button = document.querySelector("button")

firstInput.addEventListener("change", ()=>{
    if (firstSelect.value === "celsius"){
        if (firstSelect.value === secondSelect.value){
            console.log("hello")
            secondInput.value = firstInput.value
        }
        else if (secondSelect.value === "kelvin" || secondSelect.value === "Faherenheit"){
            secondInput.value = celsiusToAny(firstInput.value, secondSelect.value)
        }
    }

   
    
})

firstSelect.addEventListener("click", () =>{
    firstInput.value = ''
    secondInput.value = ''
})