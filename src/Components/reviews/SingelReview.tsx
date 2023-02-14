import React from "react";
import thumspup from "../../assets/svgs/thumbsUp.svg";
import { IContent } from "../../types/types";
export interface ISingelReview extends IContent {
  name: string;
  timeago: string;
}
export const SingelReview = ({
  content,
  heading,
  name,
  timeago,
}: ISingelReview) => {
  return (
    <div className="  rounded-lg g  flex flex-col items-center justify-center border-gray-400 border-[1px] mt-5">
      <div className="w-11/12 flex my-6 ">
        <div className="min-w-[30px]">
          <img src={thumspup} alt="thumspup" />
        </div>

        <div className="flex flex-col justify-between gap-y-5">
          <div className="ml-4 flex flex-col">
            <h1>{heading}</h1>
            <p>{content}</p>
          </div>
          <div className="ml-4">
            <p className="text-gray-800">
              {" "}
              Verified Patient {name} . {timeago}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
