import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Saturday, 12.52",
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-input"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                Humidity:{" "}
                <strong>
                  <span id="humidity">{weatherData.humidity}</span>%
                </strong>
                , Wind:{" "}
                <strong>
                  <span id="wind">{weatherData.wind}</span> km/h
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-6 text-center">
            <img
              src={weatherData.icon}
              alt="sunny-icon"
              className="align-top"
            ></img>
            <span className="temperature align-top">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit align-top">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "42e4tbb0e36fc43f4faaf7e2bob6c342";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
