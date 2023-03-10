import React from "react";
import { ButtonSubmit } from "../Buttons/ButtonSubmit";
import cardImage from "../../../assets/CardImage.png";

export const Card = () => {
  return (
    <div className="w-2/3 bg-white shadow">
      <a href="#a">
        <img className="bg-cover bg-center" src={cardImage} alt="card_image" />
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
