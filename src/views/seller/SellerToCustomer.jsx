import React, { useState } from "react";

const SellerToCustomer = () => {
  const isActive = true;
  const [show, setShow] = useState(true);
  return (
    <div className=" left-0 w-full py-4 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full flex flex-wrap p-2 bg-[#f5f5f5]">
          {/* Left Side */}
          <div className="w-full  lg:w-3/12 lg:pr-3">
            <h2 className="font-bold text-lg">Customers</h2>
            <div
              onClick={() => setShow(!show)}
              className={`${
                isActive ? "border-slate-300 bg-blue-200" : ""
              } flex justify-start items-center  mt-2 mb-2 rounded-md p-2`}
            >
              <img
                className="h-10 w-10 border border-blue-500  rounded-full"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
              <h2 className="p-2 text-md font-semibold">Daksh Ahuja</h2>
            </div>
            <div
              className={`${
                !isActive ? "border-slate-300 bg-blue-200" : ""
              } flex justify-start items-center  mt-2 mb-2 rounded-md p-2`}
            >
              <img
                className="h-10 w-10 border border-blue-500  rounded-full"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
              <h2 className="p-2 text-md font-semibold">Daksh Ahuja</h2>
            </div>
            <div
              className={`${
                !isActive ? "border-slate-300 bg-blue-200" : ""
              } flex justify-start items-center  mt-2 mb-2 rounded-md p-2`}
            >
              <img
                className="h-10 w-10 border border-blue-500  rounded-full"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
              <h2 className="p-2 text-md font-semibold">Daksh Ahuja</h2>
            </div>
          </div>
          {/* Right side */}
          {show && (
            <div className="w-full lg:w-9/12 lg:pr-3">
              <div>
                <img
                  className="h-10 w-10 border border-blue-500 font-semibold rounded-full"
                  src="http://localhost:3000/images/admin.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2 w-full bg-slate-400 rounded-md h-[450px]">
                <div className="flex justify-start items-center p-2">
                  <img
                    className="h-10 w-10 border border-blue-500 font-semibold rounded-full"
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                  <span className="mx-2 p-2 bg-blue-500 rounded-md">
                    How are you?
                  </span>
                </div>
                <div className="flex justify-end items-center p-2">
                  <span className="mx-2 p-2 bg-blue-500 rounded-md">
                    I am fine
                  </span>
                  <img
                    className="h-10 w-10 border border-blue-500 font-semibold rounded-full"
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="w-full">
                  <input
                    className=" p-2 border border-slate-700 rounded-md focus:border-indigo-300"
                    type="text"
                    placeholder="Type a message"
                  />
                </div>
                <div className="w-full">
                  <button className=" bg-blue-500 text-white p-2 rounded-md">
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerToCustomer;
