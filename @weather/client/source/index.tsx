import { validateCityName, Weather } from '@weather/common';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [weather, setWeather] = useState<Weather>();

  const getWeather = () => {
    const cityNameValidation = validateCityName(cityName);

    if (!cityNameValidation.valid) {
      setErrorMessage(cityNameValidation.message);
    } else {
      setErrorMessage(undefined);
      fetch(
        '/api/weather?' +
          new URLSearchParams({
            cityName
          }),
        {
          method: 'GET'
        }
      )
        .then((response) => {
          return response.json().then((payload) => {
            if (response.ok) {
              setWeather(payload);
            } else {
              setErrorMessage(payload.message);
            }
          });
        })
        .catch((_networkError) => {
          setErrorMessage('Network error');
        });
    }
  };

  return (
    <div>
      <div>
        <p>
          <span>City: </span>
          <input
            onChange={(event) => {
              setCityName(event.target.value);
              setWeather(undefined);
            }}
            type="text"
            value={cityName}
          />
        </p>
        <button onClick={getWeather} type="button">
          Get weather
        </button>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

      <div>
        <h2>{weather !== undefined ? cityName : '-'}</h2>
        <h3
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            src={
              weather !== undefined
                ? `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
                : undefined
            }
            style={{ height: 100, marginRight: 16, width: 100 }}
          />
          {weather !== undefined ? weather.temperature : '-'} ºC
        </h3>
        <p>Min temperature: {weather !== undefined ? weather.minTemperature : '-'} ºC</p>
        <p>Max temperature: {weather !== undefined ? weather.maxTemperature : '-'} ºC</p>
        <p>Wind speed: {weather !== undefined ? weather.windSpeed : '-'} km/h</p>
      </div>
    </div>
  );
};

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);
