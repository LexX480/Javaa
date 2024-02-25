import React, { useState } from 'react'
import { useApi } from '../apis/Hooks/ApiHooks';
import { getTopRated, imageUrl } from '../components/constant';

const About = () => {

  const [page, setPage] = useState(1);

  const [data, load, err] = useApi(getTopRated, page);

  if (load) {
    return <h1>Loading...</h1>
  }
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

    </div>
  )
}

export default About
