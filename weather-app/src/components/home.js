import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
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

  const kelvin = currentWeather.main ? currentWeather.main.temp : "";

  const celsius = kelvinToCelsius(kelvin)

  return (
    <div>
      <h1>WeatherWizard</h1>
      <p>The Current Weather in Calgary is: {celsius}</p>
    </div>
  );
}

export default Home;
