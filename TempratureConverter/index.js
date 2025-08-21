const textBox = document.querySelector("#textBox");
const toCelsius = document.querySelector("#toCelsius");
const toFarenheit = document.querySelector("#toFarenheit");
const result = document.querySelector("#result");

function convert() {
    let temp = Number(textBox.value);

    if (toFarenheit.checked) {
        temp = (temp * 9 / 5) + 32;
        result.textContent = `${temp.toFixed(2)} °F`;
    } 
    else if (toCelsius.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = `${temp.toFixed(2)} °C`;
    } 
    else {
        result.textContent = "Select A Unit";
    }
}
