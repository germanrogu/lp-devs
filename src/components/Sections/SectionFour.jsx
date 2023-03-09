import React from "react";
import sectionImage from "../../assets/SectionFour.png";

export const SectionFour = () => {
  return (
    <div className="flex flex-wrap py-6">
      <div className="w-full md:w-1/2 lg:w-1/2 h-40 md:h-96 flex flex-col place-content-center pl-14">
        <h4 className="text-2xl font-bold leading-normal mt-0 mb-2 text-red-600">
          LOREM IPSUM
        </h4>
        <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-black-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="flex flex-wrap justify-center">
          <div className="">
            <img
              src={sectionImage}
              alt="..."
              className="h-40 md:h-96 align-middle border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
