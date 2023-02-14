import { PropsWithChildren } from "react";
import { classNames } from "../../utility/utility";
import { Header } from "../Header/Header";

interface IHero extends PropsWithChildren {
  bg_image?: string;
}

export const HeroSection = ({
  children,
  bg_image = "bg-headerBackground",
}: IHero) => {
  return (
    <>
      <div
        className={classNames(
          "bg-cover bg-center text-gray-200 ",
          `${bg_image}`
        )}
      >
        <Header />
        <div className="flex justify-center">{children}</div>
      </div>
    </>
  );
};
