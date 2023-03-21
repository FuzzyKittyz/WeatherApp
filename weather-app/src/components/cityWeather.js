import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weatherId.css";

function CityWeather() {
  const [currentWeather, setCurrentWeather] = useState({});


  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=51.0447&lon=-114.0719&appid=19fda8f60e3b3e2fde16c833b2ff90a8`
      )
      .then((response) => {
        console.log("response", response);
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function kelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
  }

  const kelvinTemp = currentWeather.main ? currentWeather.main.temp : "";
  const feelsLike = currentWeather.main ? currentWeather.main.feels_like : ""
  const conditions = currentWeather.main ? currentWeather.weather[0].description : ""


  return (
    <div>
      <h1>WeatherWizard</h1>
      <br></br>
<div className="weather-box">
  <h2>Calgary</h2>
  <p>{conditions}</p>
  <p>Temperature: {kelvinToCelsius(kelvinTemp)}</p>
  <p>Feels like: {kelvinToCelsius(feelsLike)}</p>
</div>

    </div>
  );
}

export default CityWeather;
