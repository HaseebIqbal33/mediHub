import React from "react";
import useWindowDimensions from "../../hooks/Dimensions";
import { StraightLine } from "../line";
import { NumberOfCustomers } from "../numberOfCustomer/NumberOfCustomers";
import { HomeBodyUpperSection } from "./HomeBodyUpperSection";

export const HomeBody = () => {
  const { windowDimensions } = useWindowDimensions();

  return (
    <div className="h-full ">
      <HomeBodyUpperSection />
      <div className="py-10 flex justify-center">
        {windowDimensions.width < 550 ? (
          <StraightLine width="w-80" />
        ) : (
          <StraightLine width="w-96" />
        )}
      </div>
      <div className="flex justify-center  mt-7">
        <div className="flex  justify-center w-4/5 ">
          <div className="flex flex-col sm:flex-row w-2/3 sm:w-4/5 justify-around">
            <div className="w-full sm:w-2/4 flex items-center mb-5 sm:mb-0 ">
              <h1 className="text-2xl xs:text-5xl text-white">
                Number Of Patients Onboard
              </h1>
            </div>

            <NumberOfCustomers
              noc={180}
              text="Lorem ipsum dolor sit amet, consectetur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
