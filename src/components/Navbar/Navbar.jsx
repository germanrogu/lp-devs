import React, { useState } from "react";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { Logo } from "../ui/Logo/Logo";
import { ItemNavbar } from "../ui/ItemNavbar/ItemNavbar";
import { MenuButton } from "../ui/Buttons/MenuButton";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="bg-white">
        <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl pt-6 mr-6 md:mr-26">
          <div className="flex items-center">
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                className="px-1  flex items-center text-xl uppercase font-bold text-blue-800 hover:opacity-75"
                href="#linkedin"
              >
                <LinkedinFilled />
              </a>

              <a
                className="px-1  flex items-center text-xl uppercase font-bold text-blue-800 hover:opacity-75"
                href="#facebook"
              >
                <FacebookFilled />
              </a>

              <a
                className="px-1  flex items-center text-xl uppercase font-bold text-blue-800 hover:opacity-75"
                href="#instagram"
              >
                <InstagramFilled />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="relative flex flex-wrap items-center justify-between px-2 pb-2 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Logo />
            <MenuButton onClick={() => setNavbarOpen(!navbarOpen)} />
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ItemNavbar />
          </div>
        </div>
      </nav>
    </>
  );
};
