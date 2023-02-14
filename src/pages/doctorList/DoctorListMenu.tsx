import React from "react";
import { Menucard } from "./Menucard";

import { Nurse } from "../../Components/svgComponents/Nurse";
import { LowPrice } from "../../Components/svgComponents/LowPrice";
import { Maker } from "../../Components/svgComponents/Maker";
import { Popular } from "../../Components/svgComponents/Popular";
import { Rating } from "../../Components/svgComponents/Rating";
import { Schedule } from "../../Components/svgComponents/Schedule";

export const DoctorListMenu = () => {
  return (
    <div className=" flex flex-col sm:flex-row gap-x-5 3xl:gap-x-12 flex-wrap">
      <Menucard CardIcon={Nurse} cardText="Doctors Near Me" />
      <Menucard CardIcon={LowPrice} cardText="Lowest Fee" />
      <Menucard CardIcon={Maker} cardText="Most Reviewed" />
      <Menucard CardIcon={Popular} cardText="Most Experienced" />
      <Menucard CardIcon={Rating} cardText="Available Today" />
      <Menucard CardIcon={Schedule} cardText="Female Doctors" />
    </div>
  );
};
