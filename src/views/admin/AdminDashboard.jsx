import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown, FaUser, FaUsers } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import Chart from "react-apexcharts";
import { data, Link } from "react-router-dom";

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
          <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
            <div className="w-full bg-[#f5f5f5] p-4 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg pb-3">
                  Recent Seller Chats
                </h2>
                <Link
                  to="/admin/sellers"
                  className="font-semibold text-sm text-[#181ee8]"
                >
                  View All
                </Link>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <ol className="relative border-1 border-slate-600 ml-4">
                  <li className="mb-3 ml-6">
                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                      <img
                        className="h-full w-full rounded-full "
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                      />
                    </div>
                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                      <div className="flex justify-between items-center mb-2 text-[#f5f5f5]">
                        <Link className="text-md font-normal">Admin</Link>
                        <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                          2 days ago
                        </time>
                      </div>
                      <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800 text-[#f5f5f5]">
                        How are you doing today?
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-[#f5f5f5] rounded-md mt-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Recent Orders</h2>
            <Link className="font-semibold text-sm text-[#181ee8]">
              View All
            </Link>
          </div>

          {/* Order Transaction */}
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="uppercase border-b border-slate-700 bg-slate-800 text-[#f5f5f5]">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Order Id
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Payment Status
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Order Status
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Active
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    34445
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    $100
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Paid
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Delivered
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    <span className="text-green-500">Active</span>
                  </td>
                </tr>

                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    34445
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    $100
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Paid
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Delivered
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    <span className="text-green-500">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
