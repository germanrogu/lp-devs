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
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
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
        <div>
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="#linkedin"
          >
            <LinkedinFilled />
          </a>

          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="#facebook"
          >
            <FacebookFilled />
          </a>

          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="#instagram"
          >
            <InstagramFilled />
          </a>
        </div>
      </nav>
    </>
  );
};
