import React from "react";
import { SearhBar } from "../SearchBar";

export const Menu = () => {
  return (
    <div>
      <div className="absolute bg-black-secondary h-52 w-11/12 top-[-95px] translate-x-[-50%] left-1/2 rounded-xl shadow-lg z-50">
        <SearhBar />
      </div>
    </div>
  );
};
