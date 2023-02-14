import Footer from "../../Components/footer";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { ContactUsHero } from "./ContactUs";

export const ContactUs = () => {
  return (
    <div>
      <div className="bg-contactUsDoctor bg-cover bg-center">
        <HeroSection bg_image="bg-Bg">
          <ContactUsHero />
        </HeroSection>
      </div>
      <div className="bg-black-primary  w-full">
        <Footer />
      </div>
    </div>
  );
};
