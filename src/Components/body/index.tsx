import React from "react";

import { IContent } from "../../types/types";

import { LineContent } from "../lineContent";
interface Ibody {
  list: IContent[];
}
export const Body = ({ list }: Ibody) => {
  return (
    <div className="w-3/5">
      {list.map((item, key) => {
        return <LineContent {...item} key={key} />;
      })}
    </div>
  );
};
