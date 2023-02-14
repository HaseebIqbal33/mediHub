import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/Dimensions";
import { svgDimensions } from "../../types/types";
import Body from "../svgComponents/Body";
import Chair from "../svgComponents/Chair";
import Eye from "../svgComponents/Eye";
import Face from "../svgComponents/Face";
import Knee from "../svgComponents/Knee";
import Microscope from "../svgComponents/Microscope";
import Throught from "../svgComponents/Throught";

const MennuBar = () => {
  const { windowDimensions } = useWindowDimensions();
  const [dimendions, setDimentions] = useState<svgDimensions>({
    height: 56,
    width: 56,
  });
  useEffect(() => {
    if (windowDimensions.width < 500) {
      setDimentions({
        height: 36,
        width: 36,
      });
    } else {
      setDimentions({
        height: 52,
        width: 52,
      });
    }
  }, [windowDimensions.width]);
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly mt-8 w-5/6">
        <Chair {...dimendions} />
        <Face {...dimendions} />
        <Body {...dimendions} />
        <Knee {...dimendions} />
        <Throught {...dimendions} />
        <Eye {...dimendions} />
        <Microscope {...dimendions} />
      </div>
    </div>
  );
};

export default MennuBar;
