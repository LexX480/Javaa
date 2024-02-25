import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { api_key, getPopular, imageUrl } from '../components/constant';



const HomePg = () => {

  const [data, setData] = useState(null);
  const [err, setErr] = useState('');


  const fetchData = async () => {
    try {
      const response = await axios.get(getPopular, {
        params: {
          api_key: api_key
        }
      });
      setData(response.data.results);
    }
    catch (err) {
      setErr(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  console.log(data)

  // axios.get('https://api.themoviedb.org/3/movie/popular',
  //   {
  //     params: {
  //       'api_key': '92c1e33f015755d27a231793c44ecfed'
  //     }
  //   }).then((res) => {
  //     console.log(res.data)
  //   }).catch((err) => {

  //   })

  return (
    <div>

      {data && data.map((movie) => {
        return <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
          <img src={`${imageUrl}${movie.poster_path}`} alt="" />
        </div>
      })}


      {/* {artists.result.artists.hits.map((data, i) => {
        return <div key={i}>
          <img src={data.artist.avatar} alt="" />


        </div>
      })} */}



    </div>

  )
}

export default HomePg
