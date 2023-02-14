 celsius = document.getElementById("celsius");
 fahrenheit = document.getElementById("fahrenheit");
 kelvin = document.getElementById("kelvin");

function celsiusToFarenheit() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farenheitToCelsius() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function celsiusTokelvin() {
    let output = (parseFloat(celsius.value) + 273) * 1 / 1;
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
}