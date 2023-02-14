import React from "react";
import { Button } from "../Button";

export const Steps = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-3 text-secondary mb-4 ">
      <div className="flex flex-col gap-3 m-5">
        <h2 className="font-extrabold">Step 1</h2>
        <p className="text-[0.5rem] xs:text-[0.6rem] md:text-xs lg:text-sm 2xl:text-[.95rem] ">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati provident, similique sunt
          in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem reru.
        </p>
      </div>
      <div className="flex flex-col gap-3 mx-5">
        <h2 className="font-extrabold">Step 2</h2>
        <p className="text-[0.5rem] xs:text-[0.6rem] md:text-xs lg:text-sm 2xl:text-[.95rem] ">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati provident, similique sunt
          in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem reru.
        </p>
      </div>
      <div className="flex flex-col gap-3 mx-5">
        <h2 className="font-extrabold">Step 3</h2>
        <p className="text-[0.5rem] xs:text-[0.6rem] md:text-xs lg:text-sm 2xl:text-[.95rem] ">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati provident, similique sunt
          in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem reru.
        </p>
      </div>
      <div className="mt-10 w-full ml-8">
        <Button
          label="Book Now"
          className="bg-primary  text-black-secondary w-[100px] xs:w-[150px] text-center py-2 px-4 rounded-lg inline-flex items-center shadow-lg font-bold "
          spanClass="text-sm"
        />
      </div>
    </div>
  );
};
