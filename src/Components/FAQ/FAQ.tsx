import React from "react";
import useWindowDimensions from "../../hooks/Dimensions";
import { ContentCard } from "../contentCard";
interface IFaqData {
  content: string;
  heading: string;
  sm: boolean;
}
const FaqData: IFaqData[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ",
    heading: "Lorem ipsum dolor sit amet, consectetuer adipiscing? ",
    sm: true,
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    heading: "Lorem ipsum dolor consectetuer adipiscing? ",
    sm: true,
  },
];

export const FAQ = () => {
  const { windowDimensions } = useWindowDimensions();
  return (
    <div className="flex flex-col justify-center items-center text-secondary my-10">
      <h1 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-extrabold ">
        Frequently Asked Questions
      </h1>
      {FaqData.map((item, key) => {
        return (
          <ContentCard
            content={item.content}
            heading={item.heading}
            sm={item.sm}
            // ex
            key={key}
            w={`${windowDimensions.width < 600 ? "w-[95%]" : "w-1/2"}`}
            contentWidth={`${
              windowDimensions.width < 1000 ? "w-4/5" : "w-1/2"
            }`}
          />
        );
      })}
    </div>
  );
};
