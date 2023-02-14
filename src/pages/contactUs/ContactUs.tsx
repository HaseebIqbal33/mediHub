import React from "react";
import { Button } from "../../Components/Button";
import { ContactUsForm } from "../../Components/contactUsForm/ContactUsForm";

export const ContactUsHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-16 ">
      <div className=" mt-36 pb-40 w-11/12 md:w-2/5 m-auto ">
        <h1 className="text-5xl font-extrabold mb-10">
          The Best Medical Care You Can Get!
        </h1>

        <Button label="Make Appointment" />
      </div>
      <div className="w-11/12 md:w-2/5  m-auto md:m-0 ">
        <ContactUsForm />
      </div>
    </div>
  );
};
