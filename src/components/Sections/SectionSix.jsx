import React from "react";
import { Card } from "../ui/Card/Card";

export const SectionSix = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/4 m-auto py-6 bg-gray-200 align-center">
      <div className="w-full md:w-1/2 lg:w-1/2 ">
        <Card />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="flex flex-wrap justify-center">
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(9, 148, 143, 0.4), rgba(9, 148, 143, 0.2)), url(" +
                "https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" +
                ")",
            }}
            className="w-full bg-cover bg-center"
          >
            <div className="py-4 md:py-28 px-5 md:px-16">
              <h2 className="text-base md:text-3xl font-bold text-white pb-5 uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
