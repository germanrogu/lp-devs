import React from "react";
import { itemsOptions } from "../../../constants/Items";

export const ItemNavbar = () => {
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      {itemsOptions.map((item, index) => (
        <li key={index} className="nav-item">
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href={`#${item}`}
          >
            <span className="ml-2">{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
