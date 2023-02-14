import React from "react";
import { IContent } from "../../types/types";
export enum alignItem {
  "center" = "center",
  "left" = "left",
  "right" = "right",
}
interface IContentCard extends IContent {
  sm?: boolean;
  align?: alignItem;
  topheading?: string;
  ex?: boolean;
  xl?: boolean;
  w?: string;
  contentWidth?: string;
}
export const ContentCard: React.FC<IContentCard> = ({
  heading,
  content,
  sm = false,
  align = alignItem.center,
  topheading,
  ex = false,
  xl = false,
  w = "w-1/2",
  contentWidth = "",
}) => {
  return (
    <div
      className={`text-${align}  pt-10 ${w} ${
        contentWidth !== "" ? "flex flex-col justify-center items-center" : ""
      }`}
    >
      <h1 className="mb-7 text-white">{topheading}</h1>
      <h1
        className={`text-white ${sm ? "text-xl" : "text:xl md:text-4xl"} 
        ${xl ? "text-3xl lg:text-6xl " : ""}
        font-extrabold mb-2`}
      >
        {heading}
      </h1>
      <p
        className={`text-secondary ${sm ? "text-xs" : ""} ${
          ex ? "text-[0.5rem]" : ""
        }
        ${xl ? "text-[.5rem] md:text-sm lg:text-lg" : ""}
        ${contentWidth}`}
      >
        {content}
      </p>
    </div>
  );
};
