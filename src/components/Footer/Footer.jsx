import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import React from "react";
import { Logo } from "../ui/Logo/Logo";

export const Footer = () => {
  return (
    <footer>
      <div className="p-8 sm:p-12 bg-blue-600">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="w-full md:w-1/3 lg:w-1/3 mb-6 md:mb-0">
            <Logo isWhite />
            <p className="text-xs font-normal mt-0 text-white">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-36 md:grid-cols-2">
            <div>
              <ul>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
                <li className="mb-4 text-white hover:text-gray-300 uppercase font-bold text-sm">
                  <a href="#a">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#linkedin"
            >
              <LinkedinFilled />
            </a>

            <a
              className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#facebook"
            >
              <FacebookFilled />
            </a>

            <a
              className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#instagram"
            >
              <InstagramFilled />
            </a>
          </div>
        </div>
      </div>

      <div className="p-2 grid grid-cols-2 gap-12 bg-gray-400">
        <div>
          <a
            className="text-sm text-white sm:text-center flex justify-end font-bold"
            href="#a"
          >
            LEGAL & POLICY
          </a>
        </div>
        <div>
          <p className="text-sm text-white sm:text-center flex font-bold">
            COPYRIGHT
          </p>
        </div>
      </div>
    </footer>
  );
};
