import React from "react";
import "./index.css";
import SearchWeather from "./SearchWeather";

export default function CityBlock() {
  return (
    <div class="row">
      <div class="col-5">
        <div class="overview">
          <h1>Kyiv</h1>
          <ul>
            <li>Last updated:</li>
            <li>Friday 10:00 </li>
            <li>21 October</li>
          </ul>
        </div>
      </div>
      <div class="col-7">
        <div class="card text-center">
          <div class="clearfix weather-temperature">
            <br />
            <img src="./img/sunny1.png" alt="Clear" />
            <div class="float-left">
              <strong id="temperature"></strong>
              <span class="units">21°C | 40°F </span>
            </div>
          </div>
          <ul class="weather-information">
            <li id="description"></li>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
