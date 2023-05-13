import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Los Angeles</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Thursday, 11 May, 12:13</li>
              <li>Sunny</li>
              <li>
                Humidity:{" "}
                <strong>
                  <span id="humidity"></span>%
                </strong>
                , Wind:{" "}
                <strong>
                  <span id="wind"></span> km/h
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-6 text-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sunny-icon"
            ></img>
            <span className="temperature align-middle">20°C</span>
          </div>
        </div>
      </div>
    );
}