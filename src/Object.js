import React from 'react'

const Object = () => {

  const movie = {
    "Title": "They Shall Not Grow Old",
    "Year": 2018,
    "Rated": "R",
    "Released": "01 Feb 2019",
    "Runtime": "99 min",
    "Genre": "Documentary, History, War",
    "Director": "Peter Jackson",
    "Writer": "Peter Jackson",
    "Actors": "Mark Kermode, Peter Jackson",
    "Plot": "A documentary about World War I with never-before-seen footage to commemorate the centennial of the end of the war.",
    "Language": "English",
    "Country": "UK, New Zealand",
    "Awards": "Nominated for 1 BAFTA Film Award. Another 4 wins & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
    "Metascore": 91,
    "imdbRating": 8.3,
    "imdbVotes": "21,722",
    "imdbID": "tt7905466",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Response": "True"
  };
  return (
    <div className="main bx h-[500px] w-[800px] shadow-2xl p-10 ">



      <h1 className='text-3xl '>{movie.Title}</h1>

      <div className="bx flex justify-between">
        <p className='text-blue-600'>{movie.Genre}</p>
        <p className='text-blue-400 hover:underline dark:text-gray-400'>Metascore: {movie.Metascore}</p>
      </div>

      <div className="img pt-3 flex ">
        <img src={movie.Poster} alt="" className='h-[300px] ' />

        <div className="text">
          <p className='px-6'><h1 className='font-bold'>PLOT</h1> {movie.Plot}</p>

          <div className="body flex justify-between px-6 pt-5">
            <p className='text-blue-600 '><h2 className='text-black font-bold'>Actors</h2>{movie.Actors}</p>
            <p className='text-blue-600 '><h2 className='text-black font-bold'>Director</h2>{movie.Director}</p>
            <p className='text-blue-600 '><h2 className='text-black font-bold'>Producer</h2>{movie.Production}</p>
            <p className='text-blue-600 '><h2 className='text-black font-bold'>Writer</h2>{movie.Writer}</p>

          </div>
          <br />
          <div className="mor">
            <p className='px-6 font-bold'>More Details <h2 className='font-semibold text-blue-600'>Runtime:  {movie.Runtime}</h2></p>
            <span className='hover:underline text-red-500 px-6'>more...</span>
          </div>
        </div>


      </div>
      <div className="footer pt-3 flex justify-between">
        <h1><p className=' font-bold '>$20.00 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="bg-indigo-500 rounded text-white px-4">Buy</button></p></h1>


        <img src="https://cdn3.emoji.gg/emojis/6931-na-moviepurple.png" className='h-[50px] w-[50px]' alt="" />

      </div>
    </div>















  )
}

export default Object
