import { useParams } from "react-router";
import MovieList from "../components/MovieList";
import { useSearchMovieQuery } from "../features/movieApi";

const SearchPage = () => {
  const { query } = useParams();

  const { isLoading, data, isError, error, isFetching } = useSearchMovieQuery(query);

  console.log('sealksjdsalk');
  return (
    <>

      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} isFetching={isFetching} />

    </>
  )
}
export default SearchPage