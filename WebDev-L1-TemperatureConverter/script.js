
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {

    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;

    // Check for empty or invalid input
    if (temperatureInput.value.trim() === "" || !Number.isFinite(temperature)) {
        showError("Please enter a valid temperature.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert the entered temperature into Celsius first
    if (selectedUnit === "celsius") {
        celsius = temperature;
    } 
    else if (selectedUnit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } 
    else if (selectedUnit === "kelvin") {
        celsius = temperature - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15 - 0.0000001) {
        showError("Temperature cannot be below absolute zero.");
        return;
    }

    // Calculate Fahrenheit and Kelvin
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;

    // Display all converted values
    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";

    errorMessage.textContent = "";
}

function showError(message) {

    errorMessage.textContent = message;

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}
