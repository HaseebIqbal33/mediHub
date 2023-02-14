import React from "react";

export enum lineWidth {
  "w-32" = 32,
  "w-36" = 36,
  "w-40" = 40,
  "w-44" = 44,
  "w-48" = 48,
  "w-52" = 52,
  "w-56" = 56,
  "w-60" = 60,
  "w-64" = 64,
  "w-72" = 72,
  "w-80" = 80,
  "w-96" = 96,
}

interface IStraightLine {
  width?: keyof typeof lineWidth;
}
export const StraightLine = ({ width = "w-64" }: IStraightLine) => {
  return (
    <div>
      <hr
        className={`border-1 border-secondary cursor-pointer duration-500 ${width} `}
      />
    </div>
  );
};
