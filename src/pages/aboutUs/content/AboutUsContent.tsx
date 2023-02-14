import React from "react";
import { alignItem, ContentCard } from "../../../Components/contentCard";
import { ImageBox } from "../../../Components/image/ImageBox";
import { IContent } from "../../../types/types";

const AboutUsContentData: IContent = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  heading: "Your Go-To Online Medical Service Provider",
};
const DataAboutUsContent: IContent = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  heading: "Updated with the Latest Equipment",
};
export const AboutUsContent = () => {
  return (
    <div>
      <div className=" flex justify-center relative ">
        <div className="flex flex-col  lg:flex-row items-center lg:justify-evenly w-full md:w-3/4 z-10 my-10">
          <ContentCard
            content={AboutUsContentData.content}
            heading={AboutUsContentData.heading}
            sm
            align={alignItem.left}
            topheading="About Us"
          />
          <div className="mt-8">
            <ImageBox />
          </div>
        </div>
        <div className="absolute  right-[54%] top-96 lg:right-[29%] lg:top-48 ">
          <ImageBox />
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="flex justify-evenly xs:w-3/4 z-10 my-32 items-center ">
          <div className="w-1/2 flex justify-center">
            <ImageBox customClasses="w-3/5 h-32 xs:h-56" />
          </div>

          <ContentCard
            content={DataAboutUsContent.content}
            heading={DataAboutUsContent.heading}
            align={alignItem.left}
            topheading="About Us"
            xl
          />
        </div>
      </div>
    </div>
  );
};
