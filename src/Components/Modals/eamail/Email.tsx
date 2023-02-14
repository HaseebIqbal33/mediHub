import React from "react";

import Arrow from "../../svgComponents/Arrow";
interface IEmail {
  setRenderState: (value: number) => void;
}
const Email = ({ setRenderState }: IEmail) => {
  return (
    <main className="p-4 flex flex-col items-center justify-evenly h-full bg-gray-300">
      <div className="text-center text-black-secondary">
        <h1 className="text-2xl font-bold mb-4">Enter Your Email Address</h1>
        <p className="text-sm">We share this information with the doctor</p>
      </div>
      <input
        className="border border-gray-400 p-2 mb-4 w-4/5  h-14 rounded-md shadow-lg focus:outline-none"
        type="text"
        placeholder="Enter your Email"
      />
      <div className="w-4/5  h-14 rounded-md shadow-lg bg-buttonBg bg-cover ">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded  w-full h-full flex justify-center items-center gap-2"
          onClick={() => setRenderState(1)}
        >
          Continue
          <Arrow />
        </button>
      </div>
    </main>
  );
};

export default Email;
