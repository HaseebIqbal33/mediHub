import Footer from "../../Components/footer";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { Panel } from "../../Components/pannel/Panel";

import { AboutUSHero } from "./AboutUs";
import { AboutUsContent } from "./content/AboutUsContent";

export const AboutUs = () => {
  return (
    <div>
      <div className="bg-doctorBg bg-cover bg-center ">
        <HeroSection bg_image="bg-Bg">
          <AboutUSHero />
        </HeroSection>
      </div>
      <div className="bg-black-primary  w-full">
        <AboutUsContent />
        <Panel />
        <Footer />
      </div>
    </div>
  );
};
