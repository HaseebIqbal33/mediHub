import React from "react";
import { ImageBox } from "../image/ImageBox";

interface IPanelData {
  name: string;
  Profession: string;
}
const PanelData: IPanelData[] = [
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
  {
    name: "Name",
    Profession: "Profession",
  },
];

export const Panel = () => {
  return (
    <div className=" flex justify-center ml-16 my-10">
      <div className="flex justify-center flex-wrap w-3/4 gap-x-5  md:gap-x-32  3xl:gap-x-44 gap-y-20">
        {PanelData.map((item, key) => {
          return <PannelCard name={item.name} Profession={item.Profession} />;
        })}
      </div>
    </div>
  );
};

const PannelCard = ({ name, Profession }: IPanelData) => {
  return (
    <div className="text-center text-white">
      <ImageBox customClasses="w-44 h-44 md:w-32 md:h-32 3xl:w-36 3xl:h-36" />
      <h1 className="my-2 text-sm">{name}</h1>
      <p className="text-xs font-thin">{Profession}</p>
    </div>
  );
};
