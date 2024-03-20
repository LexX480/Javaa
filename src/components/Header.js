import React from "react";

import {
  Navbar,

  Typography,

} from "@material-tailwind/react";

import NavList from "./navs/NavList";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Navbar className="px-6 mb-5  sticky top-0 z-20">

      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography

          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <NavLink to='/'>TMDB WEB</NavLink>
        </Typography>


        <div className="">
          <NavList />
        </div>

      </div>

    </Navbar>
  )
}
export default Header





