import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/svgs/logo.svg";
export const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between pt-10  w-11/12">
        <div className="divide-y-4 divide-gray-200 w-96">
          <Link to="/" className="block mb-1">
            Home
          </Link>
          <Link to="/doctorsdotesservices" className="block ">
            Services
          </Link>
        </div>
        <div>
          <img src={logo} alt="logo" className="h-20 w-96" />
        </div>
        <div className="divide-y-4 divide-gray-200 w-80">
          <Link to="/aboutus" className="block mb-1 text-right">
            About Us
          </Link>
          <Link to="/contactUs" className="block text-right">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
