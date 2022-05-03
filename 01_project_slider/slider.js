//Step 1 - get value from sliders
const displayColor = document.getElementById("color-display");




//Step 2 - get value from sliders and input as 
const redSlider = document.getElementById("red-range");

redSlider.onchange = function() {
    // console.log(redSlider.value)
    displayColor.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
}


const greenSlider = document.getElementById("green-range");

greenSlider.onchange = function() {
    // console.log(greenSlider.value)
    displayColor.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
}


const blueSlider = document.getElementById("blue-range");

blueSlider.onchange = function() {
    // console.log(blueSlider.value)
    displayColor.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
}






