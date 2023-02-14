import React from "react";
import { Button } from "../../Components/Button";

export const PrescriptionHero = () => {
  return (
    <div className="text-center mt-28 xs:mt-44 pb-32 xs:pb-40 w-2/6">
      <div className="flex flex-col items-center">
        <h1 className="text-lg xs:text-2xl md:text-3xl lg:text-5xl font-extrabold">
          Digestive Issues
        </h1>
        <p className="text-secondary text-[0.5rem] xs:text-[0.6rem] md:text-xs mt-6 mb-4  w-[85%] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      <Button
        label="Make Appointment"
        className="bg-black-secondary text-xs text-white  py-3 px-5 rounded-md inline-flex items-center shadow-lg"
      />
    </div>
  );
};
