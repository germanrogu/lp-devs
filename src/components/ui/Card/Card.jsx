import React from "react";
import { ButtonSubmit } from "../Buttons/ButtonSubmit";

export const Card = () => {
  return (
    <div className="max-w-sm bg-white shadow">
      <a href="#a">
        <img
          src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg"
          alt="card_image"
        />
      </a>
      <div className="p-5">
        <a href="#a">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 uppercase">
            Here a card title
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
        </p>
        <ButtonSubmit />
      </div>
    </div>
  );
};
