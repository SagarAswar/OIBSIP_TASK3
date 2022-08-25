const convertBtn = document.querySelector("#convertBtn");
// const resetBtn = document.querySelector("#resetBtn");
// var displayResult = document.querySelector("#displayResult");
// var input = document.querySelector("#input");
const option = document.querySelector("option");

// const resetFunction = () => {
//     input.value = "";
//     input.innerHTML = ""
// }

// const convertToFahr = () => {
//     let result = ((input.value * 1.8) + 32);
//     displayResult.innerHTML = `${result}`
// }

// const convertToCelc = () => {
//     let result = (((input.value - 32) * 5) / 9)
// displayResult.textContent = `${result}`
// }




// convertFahrenheit = () => {
//     var celsius = (document.querySelector("#celsius").value);

//     var fahrenheitResult = (1.8 * celsius) + 32;
//     var a = fahrenheitResult.toFixed(2);

//     document.querySelector("#celsius").value = celsius;
//     document.querySelector("#fahrenheit").value = a;
// }

// convertCelsius = () => {
//     var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

//     var celsiusResult = (fahrenheit - 32) / 1.8;
//     var b = celsiusResult.toFixed(2);

//     document.querySelector("#celsius").value = b;
//     document.querySelector("#fahrenheit").value = fahrenheit;
// }

// reset = () => {
//     document.querySelector("#celsius").value = " ";
//     document.querySelector("#fahrenheit").value = " ";
// }

const convertToFahr = () => {
    var input = document.querySelector("#input");
    let celcius = input.value;

    const resultFahr = (celcius * 1.8) + 32;

    var displayResult = document.querySelector("#displayResult");
    displayResult.textContent = `Temp = ${resultFahr.toFixed(2)} F`
};

const convertToCelc = () => {
    var input = document.querySelector("#input");
    let fahrenheit = input.value;

    const resultCelc = (fahrenheit - 32) / 1.8;

    var displayResult = document.querySelector("#displayResult");
    displayResult.textContent = `Temp = ${resultCelc.toFixed(2)} ° C`
};



const CelcBtn = document.querySelector("#CelcBtn");
CelcBtn.addEventListener("click", convertToCelc);

const FahrBtn = document.querySelector("#FahrBtn");
FahrBtn.addEventListener("click", convertToFahr);

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
    input.value = "";
    displayResult.textContent = "";
})