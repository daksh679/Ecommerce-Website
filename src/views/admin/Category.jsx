import React, { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { IoIosCloudDownload } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Category from './Category';

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full flex flex-wrap mt-7">
          <div className="w-full lg:w-7/12 lg:pr-3">
            <div className="w-full bg-[#f5f5f5] p-4 rounded-md">
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
                        S.No
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Name
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
                        Sports
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center">
                          <FiEdit />
                          <RiDeleteBin6Line />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        2
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
                        Sports
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center">
                          <FiEdit />
                          <RiDeleteBin6Line />
                        </div>
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
          <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
            <div className="w-full bg-[#f5f5f5] p-4 rounded-md">
              <h2 className="flex justify-center items-center font-bold text-lg">
                Add Category
              </h2>

              <label htmlFor="">Category Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-3 outline-none bg-transparent border border-slate-700 rounded-md focus:border-indigo-300"
                placeholder="Category Name"
              />
              {/* <input type="file" /> */}
              <button className="w-full bg-red-600 text-white p-2 rounded-md mt-3">
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
