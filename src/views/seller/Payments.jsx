import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown, FaShoppingCart } from "react-icons/fa";
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

              {/* <AiFillProduct className="text-[#fae8e8] shadow-lg" /> */}
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 10</h2>
              <span className="text-md font-medium">Withdrawal Amount</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
              <MdCurrencyRupee className="text-[#fae8e8] shadow-lg" />

              {/* <FaShoppingCart className="text-[#fae8e8] shadow-lg" /> */}
            </div>
          </div>

          <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
              <h2 className="text-3xl font-bold"> 3</h2>
              <span className="text-md font-medium">Pending Amount</span>
            </div>
            <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
              <MdCurrencyRupee className="text-[#fae8e8] shadow-lg" />

              {/* <FaCartArrowDown className="text-[#fae8e8] shadow-lg" /> */}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Payments;
