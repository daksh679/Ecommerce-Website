import React, { useState } from "react";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { IoIosCloudDownload } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className=" left-0 w-full py-4 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <span className="text-lg font-bold">All Products</span>
        <div className="w-full flex flex-wrap mt-5">
          <div className="w-full  lg:pr-3">
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
                        Category
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Brand
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Discount
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Stock
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
                        Men Woven Shirt
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
                        Numero Uno
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
                        20%
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        30
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-between items-center p-1">
                          <Link to={`/seller/dashboard/edit-product/1`}>
                            <FiEdit className="h-6 w-6 p-1 bg-yellow-400 text-white" />
                          </Link>
                          <RiDeleteBin6Line className="h-6 w-6 p-1 bg-green-700 text-white" />
                          <FaEye className="h-6 w-6 p-1 bg-red-500 text-white" />
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
                        Men Woven Shirt
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
                        Numero Uno
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
                        20%
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        30
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-between items-center p-1">
                          <FiEdit className="h-6 w-6 p-1 bg-yellow-400 text-white" />
                          <RiDeleteBin6Line className="h-6 w-6 p-1 bg-green-700 text-white" />
                          <FaEye className="h-6 w-6 p-1 bg-red-500 text-white" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        3
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
                        Men Woven Shirt
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
                        Numero Uno
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
                        20%
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        30
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-between items-center p-1">
                          <FiEdit className="h-6 w-6 p-1 bg-yellow-400 text-white" />
                          <RiDeleteBin6Line className="h-6 w-6 p-1 bg-green-700 text-white" />
                          <FaEye className="h-6 w-6 p-1 bg-red-500 text-white" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        4
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
                        Men Woven Shirt
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
                        Numero Uno
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
                        20%
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        30
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-between items-center p-1">
                          <FiEdit className="h-6 w-6 p-1 bg-yellow-400 text-white" />
                          <RiDeleteBin6Line className="h-6 w-6 p-1 bg-green-700 text-white" />
                          <FaEye className="h-6 w-6 p-1 bg-red-500 text-white" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        5
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
                        Men Woven Shirt
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
                        Numero Uno
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
                        20%
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        30
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-between items-center p-1">
                          <FiEdit className="h-6 w-6 p-1 bg-yellow-400 text-white" />
                          <RiDeleteBin6Line className="h-6 w-6 p-1 bg-green-700 text-white" />
                          <FaEye className="h-6 w-6 p-1 bg-red-500 text-white" />
                        </div>
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
      </div>
    </div>
  );
};

export default Products;
