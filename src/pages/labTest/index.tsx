import { Banner } from "../../Components/banner";
import { Body } from "../../Components/body";
import { Button } from "../../Components/Button";
import { ContentCard } from "../../Components/contentCard";
import { FAQ } from "../../Components/FAQ/FAQ";
import Footer from "../../Components/footer";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { StraightLine } from "../../Components/line";
import { IContent } from "../../types/types";

import { LabTestHero } from "./LabTestHero";

const contentData: IContent[] = [
  {
    heading: "What is Sexual Health ",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
  },
  {
    heading: "What are STIs (Sexually transmitted diseases)",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    heading: "What forms of STI are there?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

const bodyData: IContent[] = [
  {
    heading: "What online lab test referrals are available at MediHub?",
    content: (
      <ol className="mt-2 space-y-1 list-decimal list-inside">
        <li>Blood Tests</li>
        <li>Ultrasounds</li>
        <li>X-Rays</li>
        <li>Sexual Health</li>

        <li>Specialized Tests as recommended by your doctor</li>
      </ol>
    ),
  },
  {
    heading: "How do I get a lab test referral online?",
    content:
      "If you feel you need a lab test for any reason, book an appointment with one of our online doctors to discuss your symptoms. If the doctor agrees that you need the test, they will share a requisition form with you.",
  },
  {
    heading: "What will my online lab test appointment be like?",
    content:
      "Appointments usually include a discussion of your medical history. The physician will talk with you about your symptoms and reason for the appointment as part of their assessment of whether a lab test is required.",
  },
  {
    heading: "How long do the lab test results usually take?",
    content:
      "The medical staff at the lab should share the specific timings with you.",
  },
];
export const LabTest = () => {
  return (
    <div>
      <HeroSection>
        <LabTestHero />
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
