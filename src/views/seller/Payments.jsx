import React from "react";
import { FaEye } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const Payments = () => {
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
              <span className="text-md font-medium">Available Amount</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
              <MdCurrencyRupee className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 10</h2>
              <span className="text-md font-medium">Withdrawal Amount</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
              <MdCurrencyRupee className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 3</h2>
              <span className="text-md font-medium">Pending Amount</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
              <MdCurrencyRupee className="text-[#fae8e8] shadow-lg" />
            </div>
          </div>
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 mt-3 gap-3">
          <div className="p-5 bg-[#f5f5f5] rounded-md">
            <span className="font-normal text-xl w-full">Send Request</span>
            <div className="w-full flex flex-wrap">
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter the amount..."
                className="p-2 rounded-md mt-2 w-9/12 gap-1"
              />
              <button className="bg-red-500 w-2/12 rounded-md mx-1">
                Submit
              </button>
            </div>

            <div className="relative overflow-x-auto rounded-sm mt-5">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="uppercase border-b border-slate-700 bg-slate-800 text-[#f5f5f5]">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      No
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Date
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-5 bg-[#f5f5f5] rounded-md">
            <h3 className="font-normal text-xl">Success Withdrawl</h3>

            <div className="relative overflow-x-auto rounded-sm mt-5">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="uppercase border-b border-slate-700 bg-slate-800 text-[#f5f5f5]">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      No
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Date
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
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
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      12-January, 2025
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
