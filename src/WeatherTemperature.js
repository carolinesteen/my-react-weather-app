import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature mt-4">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
