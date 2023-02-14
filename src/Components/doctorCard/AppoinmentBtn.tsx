import React from "react";
import cameraIcon from "../../assets/svgs/cemaraIcon.svg";
interface IAppoinmentBtn {
  fee: string;
  Availablity: string;
}

export const AppoinmentBtn = ({ fee, Availablity }: IAppoinmentBtn) => {
  return (
    <div className="border border-black-secondary rounded-lg w-full md:w-[36%] lg:w-[32%] p-1">
      <div className="flex flex-col m-1">
        <div className="flex justify-between">
          <div>
            <img src={cameraIcon} alt="cameraIcon" />
          </div>
          <div>
            <p className="text-blue">Online Video Consultation (Onl....</p>
          </div>
        </div>
        <div className="flex justify-between ml-1">
          <div className="flex items-center gap-x-2">
            <div className="rounded-full h-2 w-2 bg-green"></div>
            <p className="text-green">{Availablity}</p>
          </div>
          <div>
            <p>{fee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
