import {
  BulbOutlined,
  PieChartOutlined,
  SignalFilled,
} from "@ant-design/icons";
import React from "react";

export const SectionFive = () => {
  return (
    <div className="flex flex-wrap py-6 bg-blue-600 h-160 md:h-60">
      <div className="w-full md:w-full flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col justify-center ">
            <SignalFilled style={{ color: "#ffffff", fontSize: "80px" }} />
            <p className="text-2xl font-bold text-white">2.620</p>
            <p class="text-base  text-white">
              Lorem ipsum dolor sit amet, consectur adipsigin elit.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col justify-center ">
            <PieChartOutlined style={{ color: "#ffffff", fontSize: "80px" }} />
            <p className="text-2xl font-bold text-white">2.620</p>
            <p class="text-base text-white">
              Lorem ipsum dolor sit amet, consectur adipsigin elit.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col justify-center ">
            <BulbOutlined style={{ color: "#ffffff", fontSize: "80px" }} />
            <p className="text-2xl font-bold text-white">2.620</p>
            <p class="text-base text-white">
              Lorem ipsum dolor sit amet, consectur adipsigin elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
