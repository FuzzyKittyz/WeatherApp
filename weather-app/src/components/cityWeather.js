import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "../styles/weatherId.css";

function CityWeather (props) {
  const [currentWeather, setCurrentWeather] = useState({});
  const params = useParams();
  const paramsID = params.id;
  const idArr = paramsID.split("+")
  console.log(idArr)


  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${idArr[1]}&lon=${idArr[0]}&appid=19fda8f60e3b3e2fde16c833b2ff90a8`
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
      <h1><a href="/">WeatherWizard</a></h1>
      <br></br>
<div className="weather-box">
  <h2>{currentWeather.name}</h2>
  <p>{conditions}</p>
  <p>Temperature: {kelvinToCelsius(kelvinTemp)}°C</p>
  <p>Feels like: {kelvinToCelsius(feelsLike)}°C</p>
</div>

    </div>
  );
}

export default CityWeather;
