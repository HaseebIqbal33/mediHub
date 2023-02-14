import { Banner } from "../../Components/banner";
import { Body } from "../../Components/body";
import { Button } from "../../Components/Button";
import { ContentCard } from "../../Components/contentCard";
import { FAQ } from "../../Components/FAQ/FAQ";
import Footer from "../../Components/footer";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { StraightLine } from "../../Components/line";
import { IContent } from "../../types/types";

import { PrescriptionHero } from "./PrescriptionHero";

const contentData: IContent[] = [
  {
    heading: "What are digestive problems?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
  },
  {
    heading: "How common are digestive problems?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    heading: "Types of digestive problems",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

const bodyData: IContent[] = [
  {
    heading: "Can an online doctor give me a script for a prescription?",
    content:
      " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
  },
  {
    heading: "Will my pharmacy accept an online prescription?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium  ",
  },
  {
    heading: "What prescriptions can an online doctor fill?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru.",
  },
  {
    heading: "What will my online prescription appointment be like?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
  },
];
export const Prescription = () => {
  return (
    <div>
      <HeroSection>
        <PrescriptionHero />
      </HeroSection>
      <div className="bg-black-primary  w-full">
        <div className="flex flex-col items-center py-10">
          {contentData.map((item, key) => {
            return (
              <ContentCard
                heading={item.heading}
                content={item.content}
                key={key}
                xl
              />
            );
          })}
          <div className="mt-10">
            <Button
              label="Book Now"
              className="bg-primary  text-black-secondary w-[200px] text-center py-2 px-14 rounded-lg inline-flex items-center shadow-lg font-bold "
            />
          </div>
          <div className="mt-10">
            <StraightLine width="w-72" />
          </div>
        </div>
        <div className="flex justify-center my-10 ">
          <Body list={bodyData} />
        </div>
        <Banner />
        <div className="my-10 flex justify-center">
          <StraightLine width="w-96" />
        </div>
        <div>
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
};
