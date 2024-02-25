import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { api_key, getPopular, imageUrl } from '../components/constant';
import { useApi } from '../apis/Hooks/ApiHooks';



const HomePg = () => {


  const [page, setPage] = useState(1);

  const [data, load, err] = useApi(getPopular, page);





  if (load) {
    return <h1>Loading...</h1>
  }




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
      <div className="pages space-x-3">
        <button onClick={() => setPage((prev) => prev + 1)}>Pagee</button>
        <button onClick={() => setPage((prev) => {
          if (prev > 1) {
            return prev - 1;
          }

        })}>decc</button>
      </div>
      {data && data.map((movie) => {
        return <div key={movie.id}>
          <h1>{movie.title}</h1>

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
