import { useParams } from "react-router";
import { useMovieDetailQuery } from "../../features/movieApi"
import Video from "./Video"
import SkeletonItem from "../../components/SkeletonItem";
import { originalImageUrl } from "../../app/apis_cre";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading } = useMovieDetailQuery(id);
  if (isLoading) {
    return <SkeletonItem />
  }

  return (
    <div style={{ backgroundImage: `url(${originalImageUrl}${data?.backdrop_path})` }} className="  text-white h-dvh bg-cover bg-no-repeat px-2 space-y-2 msm:h-dvh msm:bg-center   " >


      <Video id={id} />
      {data && <div>
        <h1>{data.title}</h1>
        <p>{data.tagline}</p>
        <p>{data.overview}</p>
      </div>}
    </div>
  )
}
export default Detail