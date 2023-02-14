import React from "react";
import useWindowDimensions from "../../hooks/Dimensions";
import { StraightLine } from "../line";
import { ScreenComponent } from "../svgComponents/ScreenComponent";
import { VerticaLine } from "../verticalLine/VerticaLine";

export const HomeBodyUpperSection = () => {
  const { windowDimensions } = useWindowDimensions();

  const Widthdimensions = () => {
    if (windowDimensions.width < 450) {
      return 150;
    }
    if (windowDimensions.width < 650) {
      return 180;
    }
    if (windowDimensions.width < 760) {
      return 200;
    }
    if (windowDimensions.width < 1000) {
      return 250;
    }
    if (windowDimensions.width < 1270) {
      return 280;
    }
    if (windowDimensions.width < 1520) {
      return 310;
    }

    return 340;
  };

  const HeighDimentions = () => {
    if (windowDimensions.width < 450) {
      return 280;
    }
    if (windowDimensions.width < 630) {
      return 310;
    }
    if (windowDimensions.width < 760) {
      return 340;
    }
    if (windowDimensions.width < 1000) {
      return 410;
    }
    if (windowDimensions.width < 1270) {
      return 440;
    }
    if (windowDimensions.width < 1520) {
      return 470;
    }
    return 520;
  };

  const lineWidth = () => {
    if (windowDimensions.width < 450) return "w-32";
    if (windowDimensions.width < 700) return "w-52";
    return "w-96";
  };
  return (
    <div className="flex gap-x-5 ">
      {/* start  */}

      <div className="w-4/6 xs:w-9/12 flex relative ">
        <div className="bg-homepagedoctor bg-cover bg-center  w-5/6 xs:w-11/12">
          <div className="bg-Bg h-full w-full bg-cover bg-center">
            <div className="ml-[7%]">
              <div className="pt-32 flex flex-col justify-between mb-7">
                <div className="flex flex-col gap-2">
                  <StraightLine width={lineWidth()} />
                  <p className="text-gray-200 text-[.4rem] sm:text-[.6rem] w-9/12 sm:w-1/2 md:w-80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>
                <div className="flex sm:justify-center  ">
                  <div className="h-2/4 w-5/12  sm:w-1/3 md:w-2/5  3xl:w-1/2 ">
                    <h1 className="text-[0.6rem] xs:text-sm md:text-2xl lg:text-5xl 2xl:text-6xl 3xl:text-8xl my-28 sm:my-44 text-white">
                      Find the Right Doctor right at your Fingertips
                    </h1>
                  </div>
                </div>
                <div className="flex justify-end  ">
                  <div className="flex h-28 mr-2 gap-x-2 ">
                    <div className="flex items-end  justify-end">
                      {/* <p className="text-gray-200 text-[.6rem] w-80"> */}
                      <p className="text-gray-200 text-[.4rem] sm:text-[.6rem] w-9/12 sm:w-1/2 md:w-80 text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                      </p>
                    </div>

                    <VerticaLine extraClasses="bg-gray-200 w-[2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-44  -right-8  ">
          {/* <div className="absolute top-44  -right-2  xs:-right-0 sm:right-8 md:right-16 lg:right-28 xl:right-36 2xl:right-64 3xl:-right-[1.5%]"> */}
          <ScreenComponent
            height={HeighDimentions()}
            width={Widthdimensions()}
          />
        </div>
      </div>
      {/* end */}
      <div className="bg-transparent ml-3">
        <div className="flex  pt-36 justify-end">
          <div className="flex h-28 3xl:h-48 mr-2 gap-x-2 mt-24">
            <VerticaLine extraClasses="bg-gray-200 w-[2px]" />
            <div className="flex items-end  ">
              <p className="text-gray-200 text-[.6rem] 3xl:text-sm w-40 3xl:w-48">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
