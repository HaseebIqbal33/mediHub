import React from "react";

interface ISpecialist {
  total: number;
  place: string;
  specialize: string;
  description: string;
}
export const Specialist = ({
  place,
  specialize,
  total,
  description,
}: ISpecialist) => {
  return (
    <div className="flex flex-col my-5">
      <h1 className="xs:text-lg sm:text-2xl font-bold">
        {total} Best {place} in {specialize}
      </h1>
      <p className="text-sm"> {description}</p>
    </div>
  );
};
