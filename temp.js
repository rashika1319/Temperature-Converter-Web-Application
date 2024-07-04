function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}


function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}


function updateValues() {
    var fahrenheitInput = document.getElementById("Farenheit").querySelector("input");
    var celsiusInput = document.getElementById("Celsius").querySelector("input");
    var kelvinInput = document.getElementById("Kelvin").querySelector("input");

    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
        kelvinInput.value = fahrenheitToKelvin(fahrenheitValue).toFixed(2);
    } else {
        celsiusInput.value = "";
        kelvinInput.value = "";
    }

    var celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
        kelvinInput.value = celsiusValue + 273.15;
    } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }

    var kelvinValue = parseFloat(kelvinInput.value);
    if (!isNaN(kelvinValue)) {
        celsiusInput.value = (kelvinValue - 273.15).toFixed(2);
        fahrenheitInput.value = kelvinToFahrenheit(kelvinValue).toFixed(2);
    } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    }
}


var inputFields = document.querySelectorAll("input[type='number']");
inputFields.forEach(function (input) {
    input.addEventListener("input", updateValues);
});


function clearFields() {
    inputFields.forEach(function (input) {
        input.value = "";
    });
}


var clearButton = document.querySelector(".button button");
clearButton.addEventListener("click", clearFields);