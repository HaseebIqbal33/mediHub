import { IContent } from "../../types/types";

export const LineContent: React.FC<IContent> = ({ heading, content }) => {
  return (
    <div className="flex justify-between text-secondary  w-full my-7  ">
      <div className="w-1/2">
        <h1 className="text-sm xs:text-lg md:text-2xl w-11/12">{heading}</h1>
      </div>
      <div className="flex  mt-1 w-1/2">
        <p className="text-[0.5rem] xs:text-[0.6rem] md:text-xs">{content}</p>
      </div>
    </div>
  );
};
