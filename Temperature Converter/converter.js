
let unit = null

let firstInput = document.querySelector("#input_1")
let secondInput = document.querySelector("#input_2")

function celsiusToAny(temp, unit){
    if (unit === "kelvin"){
        return Math.round(parseInt(temp) + 273.15)
    }
    return Math.round((parseInt(temp)*1.8) + 32)
}

function kelvinToAny(temp, unit){
    if (unit === "celsius"){
        return Math.round(parseInt(temp) - 273.15)
    }
    return Math.round((parseInt(temp)*1.8) - 459.67)
}

function heitToAny(temp, unit){
    if (unit === "celsius"){
        return Math.round((parseInt(temp)*0.555555) - 17.777777)
    }
    return Math.round((parseInt(temp)*0.555556) + 255.372222)
}

let firstSelect = document.querySelector("#select_1")
let secondSelect = document.querySelector("#select_2")
let button = document.querySelector("button")

button.addEventListener("click", (evt)=>{
    evt.preventDefault()
    if (firstSelect.value === "celsius"){
        if (firstSelect.value === secondSelect.value){
            secondInput.value = firstInput.value
        }
        else if (secondSelect.value === "kelvin" || secondSelect.value === "heit"){
            secondInput.value = celsiusToAny(firstInput.value, secondSelect.value)
        }
    }else if(firstSelect.value === "kelvin"){
        if (firstSelect.value === secondSelect.value){
            secondInput.value = firstInput.value
        }
        else if(secondSelect.value === "celsius" || secondSelect.value === "heit"){
            secondInput.value = kelvinToAny(firstInput.value, secondSelect.value)
        }
    }else if(firstSelect.value === "heit"){
        if (firstSelect.value === secondSelect.value){
            secondInput.value = firstInput.value
        }else if(secondSelect.value === "celsius" || secondSelect.value === "kelvin"){
            secondInput.value = heitToAny(firstInput.value, secondSelect.value)
        }
    }
    // else{
    //     console.log("helloo")
    // }
})

firstSelect.addEventListener("click", () =>{
    firstInput.value = ''
    secondInput.value = ''
})