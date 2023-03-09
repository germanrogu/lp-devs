import React from "react";

export const ImageSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(9, 148, 143, 0.4), rgba(9, 148, 143, 0.2)), url(" +
          "https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" +
          ")",
      }}
      className="md:h-96 bg-cover bg-center"
    >
      <div className=" md:h-96 py-4 md:py-28 px-5 md:px-16 grid grid-cols-1 gap-0 md:gap-1">
        <h1 className="text-base md:text-3xl font-bold text-white pb-5 uppercase">
          Title goes here
        </h1>
        <h3 className="text-sm md:text-xl font-bold text-white pb-2 uppercase">
          Sub head goes here
        </h3>
        <h4 className="text-sm md:text-base text-white ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
      </div>
    </div>
  );
};
