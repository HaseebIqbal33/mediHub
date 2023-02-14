import React, { PropsWithChildren } from "react";
import { classNames } from "../../utility/utility";

interface IImageBox extends PropsWithChildren {
  customClasses?: string;
}

export const ImageBox = ({
  customClasses = "w-40 h-36",
  children,
}: IImageBox) => {
  return (
    <div
      className={classNames(
        `bg-cover bg-center bg-picBg rounded-lg`,
        customClasses
      )}
    >
      {children}
    </div>
  );
};
