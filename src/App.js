import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="New York"/>
        <footer>
          <a
            href="https://github.com/carolinesteen/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          by Caroline Steen
        </footer>
      </div>
    </div>
  );
}
