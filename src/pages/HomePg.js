


import React, { useEffect, useState } from 'react'
import Weather from '../components/Weather';

const HomePg = () => {


  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${'https://api.openweathermap.org/data/2.5'}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${'0983ec7fe756db32561ac84a068a8da6'}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div>

      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default HomePg
