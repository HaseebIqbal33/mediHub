import React from "react";
import { Header } from "../../Components/Header/Header";
import picImg from "../../assets/imgs/userImg.png";
import { Reviews } from "../../Components/reviews/Reviews";
import { RecomendationBanner } from "../../Components/reviews/RecomendationBanner";
import { TimeCard } from "../../Components/timeCard/TimeCard";

export const AppoinmentBooking = () => {
  return (
    <div className="bg-cover bg-center bg-fullBg ">
      <div className="text-gray-200">
        <Header />
      </div>
      <div className=" flex justify-center mt-40 ">
        <div className="w-11/12 flex flex-col  bg-gray-300 rounded-md justify-center items-center">
          <div className="flex flex-col w-11/12 ">
            <div className="flex justify-center bg-gray-200 rounded-lg shadow-md  w-full mt-12 mb-8">
              <div className="flex justify-center flex-col w-full ">
                <div className="flex flex-row items-center p-6  w-full justify-between">
                  <div className="flex flex-col sm:flex-row justify-between ">
                    <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                      <img src={picImg} alt="Doctor's Profile " />
                    </div>
                    <div className="ms:w-96 text-black-secondary flex flex-col justify-center">
                      <h1 className="font-bold text-lg ">
                        Assist. Prof. Dr. Jane Doe
                      </h1>
                      <p className="text-xs">
                        Clinic Name Here{" "}
                        <span className="underline font-bold">
                          Change Clinic
                        </span>
                      </p>
                      <p className="text-sm font-bold">Fee: Rs. 3,000 PKR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TimeCard />
            <RecomendationBanner />
            <Reviews />
            <div className="flex justify-between my-10">
              <h1 className="font-bold">Doctors in other regions</h1>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
