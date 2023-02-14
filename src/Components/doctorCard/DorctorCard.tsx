import React, { useState } from "react";
import picImg from "../../assets/imgs/userImg.png";
import useWindowDimensions from "../../hooks/Dimensions";
import { Button } from "../Button";
import { Emailmodal } from "../Modals/eamail/Emailmodal";
import { VerticaLine } from "../verticalLine/VerticaLine";
import { AppoinmentBtn } from "./AppoinmentBtn";

export const DorctorCard = () => {
  const [show, setShow] = useState(false);
  const { windowDimensions } = useWindowDimensions();
  return (
    <div className="flex justify-center bg-secondary rounded-lg shadow-md ">
      {<Emailmodal showModal={show} setShowModal={setShow} />}
      <div className="flex justify-center flex-col w-11/12 ">
        <div className="flex flex-col md:flex-row gap-5 lg:items-center p-6  w-full lg:justify-between  ">
          <div className="flex flex-col md:flex-row justify-between  ">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
              <img src={picImg} alt="Doctor's Profile  " />
            </div>
            <div className="w-96 text-black-secondary">
              <h3 className="font-bold text-lg ">Assist. Prof. Dr. Jane Doe</h3>
              <p className="text-xs">Gynecologist, Fertility Consultant,</p>
              <p className="text-[0.48rem] sm:text-xs">
                Obstetrician MRCOG, FACOG, FCPS, M.C.P.S, Diploma in IVF,
                Membership
              </p>
              <div className="flex mt-5">
                <div className=" flex flex-col  sm:flex-row  sm:gap-2">
                  <div>
                    <h1 className="font-bold">Under 15 Min</h1>
                    <p className="text-sm">Wait Time</p>
                  </div>
                  {windowDimensions.width > 640 ? <VerticaLine /> : null}
                  <div>
                    <h1 className="font-bold">16 Years</h1>
                    <p className="text-sm">Experience</p>
                  </div>
                  {windowDimensions.width > 640 ? <VerticaLine /> : null}
                  <div>
                    <h1 className="font-bold">100% (263)</h1>
                    <p className="text-sm">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start  h-full">
            <Button
              label="Video Consultation"
              className="bg-yellow  text-white  text-center py-3 px-8 rounded-lg inline-flex items-center shadow-lg  "
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
        <div className="bg-gray-500 sm:w-1/2 rounded-md mb-6 sm:ml-6 md:ml-0">
          {" "}
          <p className="text-xs my-3 md-3 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="my-6 flex flex-col md:flex-row gap-5 justify-center md:justify-start">
          <AppoinmentBtn Availablity="Available tomorrow" fee="Rs. 3,000" />
          <AppoinmentBtn Availablity="Available Tuesday" fee="Rs. 3,000" />
        </div>
      </div>
    </div>
  );
};
