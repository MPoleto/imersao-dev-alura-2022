// Imersão dev_ Alura 2022 - Aula 2

// Adicionar outras moedas para converter.
const valueInput = document.getElementById("input-value");
const outputElement = document.getElementById("converted-value");

function Convert() {
  if (valueInput.value == "") 
    return outputElement.innerHTML = `Insira um valor.`;
  
  const value = parseFloat(valueInput.value);
  const radio = document.querySelector('input[name="conversion"]:checked').value;
  
  switch (radio) {
    case "dollar-real":
      ConvertDollarReal(value)
      break;
    case "real-dollar":
      ConvertRealDollar(value)
      break;

    case "real-yen":
      ConvertRealYen(value)
      break;

    case "yen-real":
      ConvertYenReal(value)
      break;
    case Default:
      const outputValue = "Insira um valor válido."
      outputElement.innerHTML = outputValue;
      break;
  }
  valueInput.value = "";
}

function ConvertDollarReal(value) {
  const dollarToReal = value * 5.17;
      const outputValue = "O resultado em reais é " +
        dollarToReal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
      outputElement.innerHTML = outputValue;
}

function ConvertRealDollar(value) {
      const realToDollar = value * 0.19;
      const outputValue = "O resultado em dólares é " + 
          realToDollar.toLocaleString("en-US", {style: "currency", currency: "USD"});
      outputElement.innerHTML = outputValue;  
}

function ConvertRealYen(value) {
      const realToYen = value * 27.71;
      const outputValue = "O resultado em ienes é " +
        realToYen.toLocaleString("ja-JP", {style: "currency", currency: "JPY"});
      outputElement.innerHTML = outputValue;
}

function ConvertYenReal(value) {
      const yenToReal = value * 0.036;
      const outputValue = "O resultado em reais é " +
        yenToReal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
      outputElement.innerHTML = outputValue;
}
      
// Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

const oneLightyears = 300000 * 31536000;
const distanceInput = document.getElementById("input-value-distance");
const outputResult = document.getElementById("converted-distance");

function convertDistance() {
  if (distanceInput.value == "") 
    return outputResult.innerHTML = `Insira um valor.`;
  
  const distance = parseFloat(distanceInput.value);
  const radio = document.querySelector('input[name="distance"]:checked').value;

  if (radio == "km-lightyear") {
    
    const kmToLightyear = distance / oneLightyears;
    const outputDistance = `A distância de ${distance} km é igual a ${kmToLightyear} Anos-luz.`;
    outputResult.innerHTML = outputDistance;
    
  } else {
    
    const ligthyearsToKm = distance * oneLightyears;
    const outputDistance = `A distância de ${distance} Anos-luz é igual a ${ligthyearsToKm} km.`;
    outputResult.innerHTML = outputDistance;
  }
  distanceInput.value = "";
}


// Conversor de temperaturas entre farenheit, kelvin e celcius.

const button = document.getElementById("convert-temperature");
const temperatureInput = document.getElementById("input-value-temperature");
const fromTemperature = document.getElementById("convert-from");
const toTemperature = document.getElementById("converted-to");
const outputAnswer = document.getElementById("converted-temperature");

button.onclick = (event) => {
  event.preventDefault();
  convertTemperature();
}

function convertTemperature() {
  if (temperatureInput.value == "") 
    return outputAnswer.innerHTML = `Insira um valor.`;
  const temperature = parseFloat(temperatureInput.value);
  
  var fromScale = fromTemperature.value;
  var toScale = toTemperature.value;

  switch (fromScale) {
    case "Celsius":
      convertFromCelsius(temperature, toScale);
      break;
    case "Fahrenheit":
      convertFromFahrenheit(temperature, toScale);
      break;
    case "Kelvin":
      convertFromKelvin(temperature, toScale);
      break;
    default:
      break;
  }

  temperatureInput.value = "";
}

function convertFromCelsius(temperature, toScale) {
  if(toScale == "Fahrenheit") {
    var fahrenheit = (temperature * (9 / 5)) + 32;
    var outputTemperature = `O temperatura convertida é de ${fahrenheit.toFixed(1)}°F`;
    outputAnswer.innerHTML = outputTemperature;
  }
  else if(toScale == "Kelvin") {
    var kelvin = temperature + 273.15;
    var outputTemperature = `O temperatura convertida é de ${kelvin.toFixed(2)}K`;
    outputAnswer.innerHTML = outputTemperature;
  }
  else{
    outputAnswer.innerHTML = `A temperatura é de ${temperature}°C`;
  }
}

function convertFromFahrenheit(temperature, toScale) {
  if(toScale == "Celsius") {
    var celsius = (temperature - 32) * 5 / 9;      
    var outputTemperature = `O temperatura convertida é de ${celsius.toFixed(1)}°C`;
    outputAnswer.innerHTML = outputTemperature;
   }
   else if(toScale == "Kelvin") {
    var kelvin = (temperature - 32) * (5 / 9) + 273.15;
    var outputTemperature = `O temperatura convertida é de ${kelvin.toFixed(2)}K`;
    outputAnswer.innerHTML = outputTemperature;
   }
  else{
    outputAnswer.innerHTML = `A temperatura é de ${temperature}°F`;
  }
}

function convertFromKelvin(temperature, toScale) {
  if(toScale == "Celsius") {
    var celsius = temperature - 273.15;
    var outputTemperature = `O temperatura convertida é de ${celsius.toFixed(1)}°C`;
    outputAnswer.innerHTML = outputTemperature;

  }
  else if(toScale == "Fahrenheit") {
    var fahrenheit = (temperature - 273.15) * 9/5 + 32;
    var outputTemperature = `O temperatura convertida é de ${fahrenheit.toFixed(1)}°F`;
    outputAnswer.innerHTML = outputTemperature;
    
  }
  else{
    outputAnswer.innerHTML = `A temperatura é de ${temperature}K`;
  }
}


// Menu

const money = document.getElementById("money");
const distanceWrapper = document.getElementById("light-years");
const temperatureWrapper = document.getElementById("temperature");

const moneyLink = document.getElementById("money-link");
const distanceLink = document.getElementById("distance-link");
const temperatureLink = document.getElementById("temperature-link");

moneyLink.addEventListener("click", () => {
  money.style.display = "block";
  distanceWrapper.style.display = "none";
  temperatureWrapper.style.display = "none";
});

distanceLink.addEventListener("click", () => {
  money.style.display = "none";
  distanceWrapper.style.display = "block";
  temperatureWrapper.style.display = "none";
});

temperatureLink.addEventListener("click", () => {
  money.style.display = "none";
  distanceWrapper.style.display = "none";
  temperatureWrapper.style.display = "block";
});