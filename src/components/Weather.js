import moment from 'moment'
import React from 'react'

const Weather = ({ weatherData }) => {

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const sec = now.getSeconds();


  return (
    <div>
      <h1 className="header">City Name: {weatherData.name}</h1>
      <p>Temprature: {weatherData.main.temp} &deg;C</p>
      {/* <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
      <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
      <p>Description: {weatherData.weather[0].main}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Day: {moment().format('dddd')}</p>
      <p>Date: {moment().format('LL')}</p>
      <p>{`Time: ${hours}: ${minutes}: ${sec}`}</p>

    </div>
  )
}

export default Weather
