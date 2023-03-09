import React from "react";

export const ImageSection = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(9, 148, 143, 0.4), rgba(9, 148, 143, 0.2)), url(" +
            "https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" +
            ")",
        }}
        className="h-40 md:h-96 bg-cover bg-center"
      />
      <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl font-bold text-white pb-5">TITLE GOES HERE</h1>
        <h3 className="text- font-bold text-white pb-2">SUBHEAD GOES HERE</h3>
        <h4 className="text-base text-white ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
      </div>
    </div>
  );
};
