import React from "react";
import { ImageBox } from "../../Components/image/ImageBox";
import { ThumbsUp } from "../../Components/svgComponents/ThunbsUp";
import picImg from "../../assets/imgs/userImg.png";
const testFuntion = function (text: any, length: any, suffix: any) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
};
interface IBokingCard {
  name: string;
  experience: string;
  successRate: number;
  totalPatient: number;
}
export const BokingCard = ({
  experience,
  name,
  successRate,
  totalPatient,
}: IBokingCard) => {
  return (
    <ImageBox customClasses="w-64 h-40">
      <div className="flex flex-col  py-6 px-3 w-full justify-between gap-4">
        <div className="flex justify-between ">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
            <img src={picImg} alt="Doctor's Profile " />
          </div>
          <div className="w-32 flex flex-col justify-center text-ellipsis overflow-hidden text-white gap-y-1">
            <h1 className="font-bold text-sm ">{testFuntion(name, 16, "$")}</h1>
            <p className="text-[0.6rem]">{experience} years experience</p>
            <div className="flex gap-x-3">
              <ThumbsUp fill="#FFFFFF" height="20" width="20" />
              <p className="text-[0.8rem] font-bold">
                {successRate}% ({totalPatient})
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white">Book Appointment {">"}</p>
        </div>
      </div>
    </ImageBox>
  );
};
