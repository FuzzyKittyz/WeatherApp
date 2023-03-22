import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weatherSearch.css"

function Home() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=19fda8f60e3b3e2fde16c833b2ff90a8`
      )
      .then((response) => setCities(response.data))
      .catch(setCities)

      console.log(cities)
  };

  return (
    <div>
      <h1>WeatherWizard</h1>
      <h2>Home Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ paddingLeft: "10px" }}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="box">
        {cities.length > 0 ? (
          cities.map((city) => (
            <div className="city" key={city.name}>
              <h3 className="city-name">{city.name}</h3>
              <p className="city-info">
                <span>{city.state}, </span>
                <span className="city-country">{city.country}</span>
              </p>
              <button className="button">
                <a href={`/weather/${city.lon}+${city.lat}`}>Weather</a>
              </button>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Home;
