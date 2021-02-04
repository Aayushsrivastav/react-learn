import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {
  useEffect(() => {
    axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139`)
    .then(data => setWeather(data.data))
    .catch(err => console.log(err));
  }, [])
  const [weather, setWeather] = useState(null);
  // const [location, setLocation] = useState("");

  return (
    <div className="App">
      { weather && (
        <div>
      <div className="location">
        <h2>Name :</h2>
        <p>{weather.name}</p>
      </div>
      <div className="temp">
        <h2>Temperature :</h2>
        <p>{weather.main.temp}</p>
      </div>
      <div className="weather">
        <h2>Weather :</h2>
        <p>{weather.weather[0].main}</p>
      </div>
      </div>
      )}
    </div>
  );
}

export default App;
