import React from "react";

interface INumberOfCustomers {
  noc: number;
  text: string;
}
export const NumberOfCustomers = ({ noc, text }: INumberOfCustomers) => {
  return (
    <div className=" bg-cover bg-center bg-blacklurryEffect rounded-3xl flex justify-center items-center p-5">
      <div className="bg-circle bg-cover bg-center rounded-full w-40 h-40 flex justify-center items-center">
        <div className="bg-white  rounded-full  w-32 h-32 flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold">{noc}</h1>
            <p className="text-[0.3rem] text-center">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
