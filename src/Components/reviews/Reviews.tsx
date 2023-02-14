import React from "react";
import { ReviwesData } from "./reviewsData";
import { SingelReview } from "./SingelReview";

export const Reviews = () => {
  return (
    <div className=" bg-gray-200 rounded-lg shadow-lg  flex flex-col items-center justify-center">
      <div className=" w-11/12">
        <h1 className="text-lg font-bold my-7">Reviews About Dr. John Doe</h1>
        <div className="my-5">
          {ReviwesData.map((item, key) => {
            return <SingelReview {...item} key={key} />;
          })}
        </div>
        <div className="mb-5">
          <button className="text-black-secondary border-[1px] border-black-secondary px-5 py-2 rounded-md font-bold">
            Load more reviews
          </button>
        </div>
      </div>
    </div>
  );
};
