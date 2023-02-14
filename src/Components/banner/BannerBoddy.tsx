import React from "react";
import { LeftBannerBody } from "./LeftBannerBody";
import { RightBannerBody } from "./RightBannerBody";

export const BannerBody = () => {
  return (
    <div className="flex justify-center my-16">
      <LeftBannerBody />
      <RightBannerBody />
    </div>
  );
};
