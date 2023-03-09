import React from "react";
import logo from "../../../assets/Logo.png";

export const Logo = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-20">
        <img
          src={logo}
          alt="image_logo"
          className="rounded max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
};
