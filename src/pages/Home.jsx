import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { SectionFive } from "../components/Sections/SectionFive";
import { SectionFour } from "../components/Sections/SectionFour";
import { SectionOne } from "../components/Sections/SectionOne";
import { SectionThree } from "../components/Sections/SectionThree";
import { SectionTwo } from "../components/Sections/SectionTwo";

export const Home = () => {
  const handleClick = () => {
    console.log("CLick");
  };
  return (
    <>
      <Navbar />
      <SectionOne onClick={handleClick} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
};
