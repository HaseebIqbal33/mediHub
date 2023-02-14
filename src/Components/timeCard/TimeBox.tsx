import React from "react";
export interface ITimeBox {
  time: string;
}
export const TimeBox = ({ time }: ITimeBox) => {
  return (
    <div className="border-[1px] border-gray-400 text-black-secondary font-bold w-36 h-10 px-4 py-3 rounded-lg flex justify-center items-center active:bg-primary focus:bg-primary">
      {time}
    </div>
  );
};
