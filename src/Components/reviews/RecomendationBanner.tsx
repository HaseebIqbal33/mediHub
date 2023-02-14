import React from "react";
import satisfection from "../../assets/svgs/satisfection.svg";
export const RecomendationBanner = () => {
  return (
    <div className="  flex justify-center text-black-secondary my-7">
      <div className="w-11/12 flex">
        <img src={satisfection} alt="satisfection" />
        <div className="flex flex-col ml-5 justify-center">
          <h1 className="font-bold text-2xl">
            95% patients feel satisfied after booking appointment from MediHub
          </h1>
          <p className="text-xs">It takes only 30 sec to book an appointment</p>
        </div>
      </div>
    </div>
  );
};
