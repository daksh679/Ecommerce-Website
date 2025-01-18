import React, { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { IoIosCloudDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <h2 className="font-bold text-lg">Active Sellers</h2>

        <div className="w-full p-4 bg-[#f5f5f5] rounded-md mt-2">
          <div className="flex justify-between items-center mb-2">
            <select
              onChange={(e) => setPerPage(parseInt(e.target.value))}
              className="px-3 py-2 outline-none bg-transparent border border-slate-700 rounded-md focus:border-indigo-300"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>

            <input
              className="px-3 py-2 outline-none bg-transparent border border-slate-700 rounded-md focus:border-indigo-300 overflow-hidden float-right"
              type="text"
              name="search"
              placeholder="Search here..."
            />
          </div>
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="uppercase border-b border-slate-700 bg-slate-800 text-[#f5f5f5]">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    S.no
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Shop Name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Payment Status
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Division
                  </th>
                  <th scope="col" className="px-3 py-3">
                    District
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    1
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
                    Daksh Ahuja
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    adaksh679@gmail.com
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Haryana
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Faridabad
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <FaEye />
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    1
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
                    Daksh Ahuja
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    adaksh679@gmail.com
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Haryana
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Faridabad
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <FaEye />
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    1
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
                    Daksh Ahuja
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    adaksh679@gmail.com
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Haryana
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Faridabad
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <FaEye />
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    1
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
                    Daksh Ahuja
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    adaksh679@gmail.com
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Haryana
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Faridabad
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <FaEye />
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    1
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
                    Daksh Ahuja
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    adaksh679@gmail.com
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Haryana
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Faridabad
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <FaEye />
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    1
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
                    Daksh Ahuja
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    adaksh679@gmail.com
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Haryana
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    Faridabad
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <FaEye />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumer={setCurrentPage}
              totalItems={50}
              perPage={perPage}
              showItem={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
