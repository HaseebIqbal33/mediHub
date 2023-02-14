import React from "react";
import WhyMedihub from "../../assets/svgs/WhyMedihub.svg";
import useWindowDimensions from "../../hooks/Dimensions";
import { ContentCard } from "../contentCard";

export const HomeLowerSection = () => {
  const { windowDimensions } = useWindowDimensions();
  return (
    <div className="flex w-4/5 justify-around my-10 items-center">
      <div className="w-2/5">
        <img src={WhyMedihub} alt="WhyMedihub" className="w-full" />
      </div>
      <div className="w-1/2  flex items-center justify-around">
        <ContentCard
          heading="Why MediHub"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum "
          xl
          w="w-4/6"
          contentWidth={`${
            windowDimensions.width < 1000 ? "w-full text-[0.4rem]" : ""
          }`}
        />
      </div>
    </div>
  );
};
