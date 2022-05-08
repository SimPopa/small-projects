//Step 1 - get value from sliders
const displayColor = document.getElementById("color-display");

const inputs = document.querySelectorAll("input");

let bannerMessage = document.querySelector(".banner");

function showBanner(input) {
    bannerMessage.classList.add("doit")
    bannerMessage.style.visibility = "visible";
}




function rgbUpdate(input) {
    let red = document.getElementById("red-range").value;
    let green = document.getElementById("green-range").value;
    let blue = document.getElementById("blue-range").value;
    let rgbValue = `RGB(${red}, ${green}, ${blue})`;
    displayColor.style.backgroundColor = rgbValue;

    bannerMessage.innerHTML = ` Your chosen color is: ${rgbValue.toUpperCase()}`;
}




function hslUpdate(input) {
    let hue = document.getElementById("hue-range").value;
    // console.log(hue)
    let saturation = document.getElementById("saturation-range").value;
    // console.log(saturation)
    let lightness = document.getElementById("lightness-range").value;
    // console.log(lightness)
    let hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    console.log(hslValue);
    displayColor.style.backgroundColor = hslValue;
    
    bannerMessage.innerHTML = ` Your chosen color is: ${hslValue.toUpperCase()}`;
}





function hexUpdate(input) {
    let hexRed = document.getElementById("hex-red").value;
    let red = parseInt(hexRed).toString(16);
    console.log(red);
    // console.log(hue)
    let hexGreen = document.getElementById("hex-green").value;
    let green = parseInt(hexGreen).toString(16);
    console.log(green);
    // console.log(saturation)
    let hexBlue = document.getElementById("hex-blue").value;
    let blue = parseInt(hexBlue).toString(16);
    console.log(blue);
    // console.log(lightness)

    if (red.length == 1){
        red = "0" + red;};
    if (green.length == 1){ 
        green = "0" + green;};
    if (blue.length == 1){
        blue = "0" + blue;};

    let hexValue = `#${red}${green}${blue}`;
    console.log(hexValue)
    displayColor.style.backgroundColor = hexValue;

    bannerMessage.innerHTML = ` Your chosen color is: ${hexValue.toUpperCase()}`;
}

inputs.forEach(input => {
    if(input.className == "rgb-slider"){
        input.addEventListener('input', rgbUpdate)}
    else if(input.className == "hsl-slider"){
        input.addEventListener('input', hslUpdate)}
    else if(input.className == "hex-slider"){
        input.addEventListener('input', hexUpdate)}
    
    input.addEventListener('input', showBanner)
    
    }
    

    );

