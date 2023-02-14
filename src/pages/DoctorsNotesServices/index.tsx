import { Banner } from "../../Components/banner";
import { Body } from "../../Components/body";
import { Button } from "../../Components/Button";
import { ContentCard } from "../../Components/contentCard";
import { FAQ } from "../../Components/FAQ/FAQ";
import Footer from "../../Components/footer";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { StraightLine } from "../../Components/line";
import { IContent } from "../../types/types";

import { DoctorsServicesHero } from "./DoctorsServicesHero";

const contentData: IContent[] = [
  {
    heading: "What are skin conditions?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
  },
  {
    heading: "What are the common signs?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    heading: "What forms of skin condition are there?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

const bodyData: IContent[] = [
  {
    heading: " What are doctor’s notes?",
    content:
      " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
  },
  {
    heading: "Can an online doctor give mea sick note?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
  },
  {
    heading: "What will my online doctor’s appointment be like?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru.",
  },
  {
    heading: "Is my information secure and protected?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
  },
];
export const DoctorsNotesServices = () => {
  return (
    <div>
      <HeroSection>
        <DoctorsServicesHero />
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
