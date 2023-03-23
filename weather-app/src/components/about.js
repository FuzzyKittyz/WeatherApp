import React from "react";
import "../styles/about.css"

function About() {
  return (
    <div className="about-container">
      <h1>About WeatherWizard</h1>
      <p>
        WeatherWizard is an app that helps you get up-to-date weather information
        for your location and other cities around the world. With WeatherWizard,
        you can quickly find out the temperature, humidity, wind speed, and other
        weather conditions for any location you want.
      </p>
      <p>
        WeatherWizard uses the OpenWeatherMap API to get weather data for
        different cities. It also uses React and React Router to build a
        user-friendly interface that lets you search for cities and view their
        weather information.
      </p>
      <p>
        WeatherWizard was built by [Your Name] as a personal project to learn
        more about React and APIs. If you have any feedback or suggestions for
        improving WeatherWizard, please feel free to contact me at [Your Email].
      </p>
    </div>
  );
}

export default About;
