import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { SectionFive } from "../components/Sections/SectionFive";
import { SectionFour } from "../components/Sections/SectionFour";
import { SectionOne } from "../components/Sections/SectionOne";
import { SectionSix } from "../components/Sections/SectionSix";
import { SectionThree } from "../components/Sections/SectionThree";
import { SectionTwo } from "../components/Sections/SectionTwo";

export const Home = () => {
  const handleClick = () => {
    console.log("CLick");
  };
  return (
    <>
      <Navbar />
      {/* <div className="max-w-7xl"> */}
      <SectionOne onClick={handleClick} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/* </div> */}

      <Footer />
    </>
  );
};
