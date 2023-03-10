import React from "react";
import { ButtonSubmit } from "../ui/Buttons/ButtonSubmit";
import sectionImage from "../../assets/Sectionthree.png";

export const SectionThree = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/4 m-auto py-6 bg-blue-600">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="flex flex-wrap justify-center">
          <img
            src={sectionImage}
            alt="sectionImage"
            className="h-40 md:h-96 align-middle border-none"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 py-4 px-5 md:h-96 flex flex-col place-content-center">
        <h4 className="text-2xl font-bold leading-normal mt-0 mb-2 text-white pt-14">
          LOREM IPSUM
        </h4>
        <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-white">
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers. I understand culture. I am the
          nucleus. I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that things could be
          at.
        </p>
        <div className="w-1/3">
          <ButtonSubmit />
        </div>
      </div>
    </div>
  );
};
