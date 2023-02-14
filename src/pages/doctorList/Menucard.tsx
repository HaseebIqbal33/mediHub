import React from "react";

interface IMenuCard {
  cardText: string;
  CardIcon: () => JSX.Element;
}
export const Menucard = ({ CardIcon, cardText }: IMenuCard) => {
  return (
    <div className="rounded-lg shadow-2xl flex h-12 w-full sm:w-48 3xl:w-52 items-center gap-x-3 bg-gray-300 mb-4">
      <div className="bg-black-secondary h-full flex items-center rounded-tl-lg rounded-bl-lg p-3">
        <CardIcon />
      </div>
      <div className="bg-gray-300 h-full flex items-center p-3">
        <p>{cardText}</p>
      </div>
    </div>
  );
};
