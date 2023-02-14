import React from "react";
import picImg from "../../../assets/imgs/userImg.png";
interface IConfirmationModal {
  name: string;
  clinicName: string;
  fee: string;
  handler: () => void;
}

const Confirmation = ({
  clinicName,
  fee,
  name,
  handler,
}: IConfirmationModal) => {
  return (
    <main className="p-4 flex flex-col items-center justify-evenly h-full bg-gray-300">
      <div className="text-center text-black-secondary">
        <h1 className="text-2xl font-bold mb-4">Appointment Confirmation</h1>
      </div>
      <div className="flex justify-center bg-white rounded-lg shadow-md  w-4/5 min-w-[220px]">
        <div className="flex justify-center flex-col w-full ">
          <div className="flex flex-row items-center p-6  w-full justify-between">
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                <img src={picImg} alt="Doctor's Profile " />
              </div>
              <div className="w-96 text-black-secondary flex flex-col justify-center">
                <h1 className="font-bold xl:text-lg ">{name}</h1>
                <p className="text-xs">{clinicName}</p>
                <p className="text-sm font-bold">Fee: Rs. {fee} PKR</p>
              </div>
            </div>
          </div>
          <div className="ml-7 mb-16">
            <h1>Appointment Details</h1>
          </div>
        </div>
      </div>
      <div className="w-4/5  h-14 rounded-md shadow-lg bg-buttonBg bg-cover">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded  w-full h-full"
          onClick={handler}
        >
          Confirm Appointment
        </button>
      </div>
    </main>
  );
};

export default Confirmation;
