import { getNowPlaying } from "../app/apis_cre";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import SkeletonCompo from "../components/SkeletonCompo";

import { useCategoryMovieQuery } from "../features/movieApi"

const HomePg = () => {



  const { isLoading, data, isError, error } = useCategoryMovieQuery({ category: getNowPlaying });


  if (isLoading) {
    return <SkeletonCompo />
  }





  return (
    <>

      <div style={{ backgroundImage: "url('https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces_filter(duotone,00192f,00baff)/xcXALwBjdHIjrESpGVhghqj8fGT.jpg')" }} className="w-full h-[400px] flex flex-col justify-center px-11 bg-cover bg-no-repeat msm:w-svw msm:h-full" >

        <div className="mb-5">
          <h1 className="text-white font-bold text-[2.5rem]">Welcome .</h1>
          <p className="text-white font-bold text-2xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div>
          <Search />
        </div>

      </div>

      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} />

    </>
  )



}
export default HomePg