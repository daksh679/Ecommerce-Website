import React, { useState } from "react";
import { IoIosCloudDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import Pagination from "./../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
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
                  <th scope="col" className="px-3 py-3">
                    Download
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
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    <Link onClick={() => setShow(!show)}>
                      <IoIosCloudDownload />
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    34448
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

                {show ? (
                  <tr className="w-full bg-[#ecebff]">
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
                ) : null}
              </tbody>
            </table>
          </div>
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
  );
};

export default Orders;
