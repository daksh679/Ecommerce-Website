import React, { useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";

const PaymentRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full p-4 bg-[#f5f5f5] rounded-md mt-2">
          <div className="mb-6">
            <h2 className="text-lg font-bold">Withdraw Requests</h2>
          </div>

          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="uppercase border-b border-slate-700 bg-slate-800 text-[#f5f5f5]">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    S.no
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
                    <span className="bg-green-600 p-1 rounded-md text-white">
                      Pending
                    </span>
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    {new Date().toLocaleDateString()}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    <span className="bg-blue-600 p-1 rounded-sm text-white">
                      Confirm
                    </span>
                  </td>
                </tr>
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

export default PaymentRequest;
