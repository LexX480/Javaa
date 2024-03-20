
import {

  Typography,

} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { getPopular, getTopRated, getUpComing } from "../../app/apis_cre";

const NavList = () => {
  return (
    <ul className="my-2 flex justify-between flex-row items-center  msm:flex ">
      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={`/movie/category/${getPopular}`} className=" hover:text-blue-500">Popular</NavLink>
      </Typography>
      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={`/movie/category/${getTopRated}`} className=" hover:text-blue-500">TopRated</NavLink>
      </Typography>


      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={`/movie/category/${getUpComing}`} className=" hover:text-blue-500">UpComing</NavLink>

      </Typography>

    </ul>
  )
}
export default NavList