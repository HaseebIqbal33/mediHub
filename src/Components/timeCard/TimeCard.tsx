import React from "react";
import { TimeBox } from "./TimeBox";
import { timeData } from "./timeData";

export const TimeCard = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg ">
      <div className="flex justify-between mx-3 my-5">
        <div>{"<"}</div>
        <div className="flex justify-between w-3/4">
          <span>Today, 18</span>
          <span>Jan, 15</span>
          <span>Jan, 16</span>
          <span>Jan, 17</span>
        </div>
        <div>{">"}</div>
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex justify-center  my-7">
        <div className="flex flex-wrap  gap-5 w-4/5 ">
          {timeData.map((item, key) => {
            return <TimeBox time={item.time} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};
