import React from "react";
import { Form } from "../Form/Form";
import { ImageSection } from "../ui/ImageSection/ImageSection";

export const SectionOne = ({ onClick }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/4 m-auto">
      <div className="w-full md:w-2/3 lg:w-2/3 md:h-96">
        <ImageSection />
      </div>
      <div className="w-full md:w-1/3 bg-white md:h-96 py-6">
        <Form onClick={onClick} />
      </div>
    </div>
  );
};
