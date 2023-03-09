import {
  BulbOutlined,
  PieChartOutlined,
  SignalFilled,
} from "@ant-design/icons";
import React from "react";
import { ItemChart } from "../ui/ItemChart/ItemChart";

export const SectionFive = () => {
  return (
    <div className="flex flex-wrap py-14 bg-blue-600">
      <div className="w-full md:w-full flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/3">
          <ItemChart quantity={"2.620"}>
            <SignalFilled style={{ color: "#ffffff", fontSize: "80px" }} />
          </ItemChart>
        </div>
        <div className="w-full md:w-1/3">
          <ItemChart quantity={"132.620"}>
            <PieChartOutlined style={{ color: "#ffffff", fontSize: "80px" }} />
          </ItemChart>
        </div>
        <div className="w-full md:w-1/3">
          <ItemChart quantity={"13.654"}>
            <BulbOutlined style={{ color: "#ffffff", fontSize: "80px" }} />
          </ItemChart>
        </div>
      </div>
    </div>
  );
};
