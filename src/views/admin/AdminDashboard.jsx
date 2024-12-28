import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown, FaUser, FaUsers } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import Chart from "apexcharts";
import { data } from "react-router-dom";

const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Sellers",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#0f0f0f",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 3434</h2>
              <span className="text-md font-medium">Total Sales</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
              <MdCurrencyRupee className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 50</h2>
              <span className="text-md font-medium">Products</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
              <AiFillProduct className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 10</h2>
              <span className="text-md font-medium">Sellers</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
              <FaUsers className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 34</h2>
              <span className="text-md font-medium">Orders</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
              <FaCartArrowDown className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap mt-7">
          <div className="w-full lg:w-7/12 lg:pr-3">
            <div className="w-full bg-[#f5f5f5] p-4 rounded-md">
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
