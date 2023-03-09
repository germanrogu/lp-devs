import React from "react";
import { MenuOutlined } from "@ant-design/icons";

export const MenuButton = ({ onClick }) => {
  return (
    <button
      className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
      onClick={onClick}
    >
      <MenuOutlined />
    </button>
  );
};
