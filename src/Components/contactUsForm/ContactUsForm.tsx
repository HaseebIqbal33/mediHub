import React from "react";
import { Button } from "../Button";

export const ContactUsForm = () => {
  return (
    <div className="w-full ">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-black-900 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-600 h-12 text-black-900 placeholder-gray-100"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black-900 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-600 h-12 text-black-900 placeholder-gray-100"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black-900 text-sm font-bold mb-2"
            htmlFor="contact"
          >
            Contact #
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-600 h-12 text-black-900 placeholder-gray-100"
            id="contact"
            type="text"
            placeholder="contact"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black-900 text-sm font-bold mb-2"
            htmlFor="condition"
          >
            condition
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-600 h-20 text-black-900 placeholder-gray-100"
            id="condition"
            type="text"
            placeholder="condition"
          />
        </div>
        <div className="text-right">
          <Button label="Continue" />
        </div>
      </form>
    </div>
  );
};
