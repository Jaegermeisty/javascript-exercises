const convertToCelsius = function(fahrenheit) {
  let c = (5 / 9) * (fahrenheit - 32);
  let celciusDecimals = c.toFixed(1);
  let celcius = Number(celciusDecimals);
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let f = (9 / 5) * celcius + 32;
  let fDecimals = f.toFixed(1);
  let fahrenheit = Number(fDecimals);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
