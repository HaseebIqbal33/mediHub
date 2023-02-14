import React from "react";
import { classNames } from "../../utility/utility";
interface IVerticaLine {
  extraClasses?: string;
}
export const VerticaLine = ({
  extraClasses = "bg-black-900 w-[1px]",
}: IVerticaLine) => {
  return <div className={classNames(" h-full", extraClasses)} />;
};
