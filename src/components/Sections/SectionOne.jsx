import React from "react";
import { Form } from "../Form/Form";
import { ImageSection } from "../ui/ImageSection/ImageSection";

export const SectionOne = ({ onClick }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3 lg:w-2/3 h-40 md:h-96">
        <ImageSection />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3 bg-white h-40 md:h-96">
        <Form onClick={onClick} />
      </div>
    </div>
  );
};