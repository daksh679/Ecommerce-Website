import React from "react";

const SellerDetails = () => {
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="text-lg font-bold">
          <h2>Seller Details</h2>
        </div>

        <div className="w-full p-4 bg-[#f5f5f5] rounded-md mt-2">
          <div className="flex justify-start items-center mb-2">
            <div>
              <img
                className="w-[280px] h-[280px]"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
            </div>
            <div className=" m-4 w-1/3">
              <h2 className="text-2xl">Basic Info</h2>
              <div className=" p-4 bg-indigo-300 rounded-md mt-2 ">
                <h4>Name: </h4>
                <h4>Email: </h4>
                <h4>Role: </h4>
                <h4>Status: </h4>
                <h4>Payment Status: </h4>
              </div>
            </div>
            <div className=" m-4 w-1/4">
              <h2 className="text-2xl">Address</h2>
              <div className="p-4 bg-indigo-300 rounded-md mt-2">
                <h4>Shop Name: </h4>
                <h4>Division: </h4>
                <h4>District: </h4>
                <h4>State: </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <form action="">
              <select
                className="m-1 p-3 border border-slate-600 rounded-md font-bold"
                name=""
                id=""
              >
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </form>

            <button className="m-2 p-3 text-white bg-red-600 rounded-md w-1/4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
