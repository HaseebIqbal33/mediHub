import React, { useState } from "react";
import { Menu } from "../../Components/menu/index";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import Footer from "../../Components/footer";
import { Slider } from "../../Components/slider/Slider";
import { HomeBody } from "../../Components/home/HomeBody";
import arrowDown from "../../assets/svgs/arrowDown.svg";
import { HomeLowerSection } from "../../Components/home/HomeLowerSection";
import { FAQ } from "../../Components/FAQ/FAQ";

const Home: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <HeroSection
        children={
          <div className="text-center mt-32 pb-44 ">
            <h1 className="text-5xl font-extrabold">MediHub</h1>
            <h6 className="text-orange-primary">FULLY IMMERSED HEALTHCARE</h6>
          </div>
        }
      />
      <div className="bg-black-primary h-full w-full relative mt-5">
        <Menu />
        <div className="pb-6">
          <HomeBody />
        </div>
        <div className="flex justify-center mr-6">
          <div className="w-full flex flex-col">
            <div
              className="flex justify-center my-10 "
              style={{ transform: `${show ? "" : " rotate(180deg)"} ` }}
              onClick={() => setShow(!show)}
            >
              <img src={arrowDown} alt="arrowDown" />
            </div>
            {show ? (
              <div className=" h-full w-full flex justify-center mb-10 ">
                <Slider />
              </div>
            ) : null}
            <div className="flex justify-center">
              <HomeLowerSection />
            </div>
            <div>
              <FAQ />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
