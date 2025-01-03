import React from "react";

const OrderDetails = () => {
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full p-2 bg-[#f5f5f5] rounded-md">
          <div className="flex justify-between items-center p-2">
            <h2>Order Details</h2>
            <select className="p-1 rounded-md bg-blue-400/50" name="" id="">
              <option value="1">Pending</option>
              <option value="2">Completed</option>
            </select>
          </div>
          <div className="p-2 flex">
            <div className="w-4/12 ">
              <span>#12345</span>
            </div>
            <div className="w-8/12 ">
              <div className="w-full bg-slate-300 rounded-md p-4">
                <div>
                  <span>Seller 1 Order : Pending </span>
                  <img
                    className="h-[70px] w-[70px] m-1 "
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
