import React from "react";

export const ItemChart = ({ quantity, children }) => {
  return (
    <div className="flex flex-col items-center">
      {children}
      <p className="text-3xl font-bold text-white pt-5">{quantity}</p>;
      <p className="text-base text-white pt-2 w-2/3">
        Lorem ipsum dolor sit amet, consectur adipsigin elit.
      </p>
    </div>
  );
};
