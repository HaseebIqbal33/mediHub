import React from "react";
import useWindowDimensions from "../../hooks/Dimensions";
import { ScreenComponent } from "../svgComponents/ScreenComponent";

export const LeftBannerBody = () => {
  const { windowDimensions } = useWindowDimensions();

  return (
    <div className="flex flex-col  xs:justify-between items-center  ">
      <h1 className="xs:text-2xl md:text-4xl w-1/2 text-secondary  mb-5 ">
        Here’s how to book an appointment:
      </h1>

      <ScreenComponent
        height={
          (windowDimensions.width * 28) / 100 > 370
            ? (windowDimensions.width * 28) / 100 > 550
              ? 550
              : (windowDimensions.width * 28) / 100
            : 370
        }
        width={
          (windowDimensions.width * 15) / 100 > 200
            ? (windowDimensions.width * 15) / 100 > 300
              ? 300
              : (windowDimensions.width * 15) / 100
            : 200
        }
      />
    </div>
  );
};
