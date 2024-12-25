import React from "react";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div>
      Main Layout <Outlet />
    </div>
  );
};

export default Mainlayout;
