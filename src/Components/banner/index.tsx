import React from "react";
import { BannerBody } from "./BannerBoddy";
import { BannerHeader } from "./BannerHeader";

export const Banner = () => {
  return (
    <div className="mx-5">
      <BannerHeader />
      <BannerBody />
    </div>
  );
};
