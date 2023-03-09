import React from "react";
import logo from "../../../assets/Logo.png";
import logo_white from "../../../assets/Logo_White.png";

export const Logo = ({ isWhite = false }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className={isWhite ? "w-28" : "w-20"}>
        <img
          src={isWhite ? logo_white : logo}
          alt="image_logo"
          className="rounded max-w-full h-auto align-middle border-none "
        />
      </div>
    </div>
  );
};
