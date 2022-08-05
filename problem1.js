{
  function fahrenheitToCelsius(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(2);
  }
  const temperature = 106;
  const result = fahrenheitToCelsius(temperature);
  console.log(temperature, "fahrenheit = ", result, "celsius");
}

{
  function celsiusToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(2);
  }
  const temperature = 41.11;
  const result = celsiusToFahrenheit(temperature);
  console.log(temperature, "celsius = ", result, "fahrenheit.");
}
