import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown, FaShoppingCart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const Profile = () => {
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
        name: "Sales",
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
      Responseive: [
        {
          breakpoint: 565,
          yaxis: {
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
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          <div className="bg-[#f5f5f5] rounded-md">Hello</div>

          <div className="bg-[#f5f5f5] rounded-md p-4">
            <h2 className="font-bold text-xl py-2">Change Password</h2>

            <label htmlFor="">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            <label htmlFor="">Old Password</label>
            <input
              name="oldPassword"
              type="text"
              placeholder="Old Password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            <label htmlFor="">New Password</label>
            <input
              name="newPassword"
              type="text"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
