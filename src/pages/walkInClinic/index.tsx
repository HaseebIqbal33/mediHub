import { Banner } from "../../Components/banner";
import { Body } from "../../Components/body";
import { Button } from "../../Components/Button";
import { ContentCard } from "../../Components/contentCard";
import { FAQ } from "../../Components/FAQ/FAQ";
import Footer from "../../Components/footer";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { StraightLine } from "../../Components/line";
import { IContent } from "../../types/types";

import { WalkinClinicHero } from "./WalkinClinicHero";

const contentData: IContent[] = [
  {
    heading: "What is mental health?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
  },
  {
    heading: "What is mental illness?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    heading: "What forms of mental illness are there?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

const bodyData: IContent[] = [
  {
    heading:
      "What conditions can be assessed in an online walk-in appointment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
  },
  {
    heading: "What services are available at an online walk-in clinic?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
  },
  {
    heading: "What if I need an in-person walk-in appointment?",
    content: (
      <>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis
        </p>
        <div className="my-5">
          <li>Accusamus</li>
          <li>Coquitlamn</li>
          <li>Kerrisdale</li>
          <li>Richmond</li>
        </div>
      </>
    ),
  },
];
export const WalkingClinic = () => {
  return (
    <div>
      <HeroSection>
        <WalkinClinicHero />
      </HeroSection>
      <div className="bg-black-primary  w-full">
        <div className="flex flex-col items-center py-10">
          {contentData.map((item, key) => {
            return <ContentCard {...item} xl key={key} />;
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
