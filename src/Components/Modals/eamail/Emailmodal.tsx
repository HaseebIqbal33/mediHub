import React, { useState } from "react";

import Confirmation from "./Confirmation";
import Email from "./Email";

interface IEmailmodal {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
export const Emailmodal = ({ setShowModal, showModal }: IEmailmodal) => {
  const [renderState, setRenderState] = useState(0);

  const renderModalBody = () => {
    return renderState === 0 ? (
      <Email setRenderState={setRenderState} />
    ) : (
      <Confirmation
        clinicName="Clinic Name Here"
        fee="3,000"
        name="Assist. Prof. Dr. Jane Doe"
        handler={() => console.log("click")}
      />
    );
  };
  return (
    <div className="relative">
      {showModal && (
        <div
          className="fixed top-0 left-0 h-screen  w-screen flex items-center justify-center"
          onClick={() => setShowModal(false)}
          style={{ background: " rgba(41, 43, 42, 0.6)" }}
        >
          <div
            className="bg-white w-2/3  md:w-1/2 lg:w-5/12 h-2/3  shadow-lg rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="p-4 flex justify-end items-center bg-gray-400 rounded-t-md">
              <button
                className="text-blue-500"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </header>
            {renderModalBody()}
          </div>
        </div>
      )}
    </div>
  );
};
