import React from "react";
import { BreadCrums } from "../../Components/breadCrums/BreadCrums";
import { DorctorCard } from "../../Components/doctorCard/DorctorCard";
import Footer from "../../Components/footer";
import { Header } from "../../Components/Header/Header";
import { Crown } from "../../Components/svgComponents/Crown";
import { BokingCard } from "./BokingCard";
import { DoctorListMenu } from "./DoctorListMenu";
import { Specialist } from "./Specialist";

export const DoctorList = () => {
  return (
    <div className="bg-cover bg-center bg-fullBg  ">
      <div className="text-gray-200">
        <Header />
      </div>

      <div className="w-11/12 mx-auto">
        <div className="bg-gray-300 flex justify-center mt-44 rounded-lg">
          <div className="w-11/12 flex flex-col gap-5 my-20 ">
            <BreadCrums />
            <div>
              <Specialist
                place="Lahore"
                specialize="Gynecologists"
                total={680}
                description="Also known as Female Health Specialist, OB-GYN or Women Health Specialist"
              />
            </div>
            <DoctorListMenu />
            <DorctorCard />
            <div className="flex flex-col justify-center bg-secondary rounded-lg shadow-md mb-5 ">
              <div className="m-4">
                <div className="flex justify-between mb-4 sm:ml-16">
                  <div className="flex items-center">
                    <Crown />
                    <h1 className="text-2xl font-bold ml-3">
                      Platinum Doctors
                    </h1>
                  </div>
                  <div>
                    <span className="underline">View All</span>
                  </div>
                </div>

                <div className="flex gap-8  3xl:gap-15 flex-wrap w-11/12 sm:ml-16  ">
                  {[...Array(5)].map((item, key) => {
                    return (
                      <BokingCard
                        experience="15"
                        name="Assoc. Prof. Dr.."
                        successRate={100}
                        totalPatient={290}
                        key={key}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <DorctorCard />
            <DorctorCard />
            <DorctorCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
