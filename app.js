const convertBtn = document.querySelector("#convertBtn");
const option = document.querySelector("option");

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
