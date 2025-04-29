import React from 'react'
import { Typography } from "@material-tailwind/react";

const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" py-28 absolute bottom-[-90%] left-[35%] ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} this
        </Typography>
      </div>
    </footer>
  );
}


export default Footer
