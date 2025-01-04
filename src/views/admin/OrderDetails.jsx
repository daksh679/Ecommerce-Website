import React from "react";

const OrderDetails = () => {
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full p-2 bg-[#f5f5f5] rounded-md">
          <div className="flex justify-between items-center p-2">
            <h2 className="text-lg font-bold">Order Details</h2>
            <select className="p-1 rounded-md bg-blue-400/50" name="" id="">
              <option value="1">Pending</option>
              <option value="2">Completed</option>
            </select>
          </div>
          <div className="p-2 flex">
            <div className="w-4/12 ">
              <span className="p-2">#12345</span>
              <h2 className="font-bold p-2">
                Deliver to: <span className="font-normal">Daksh Ahuja</span>
              </h2>
              <span className="text-sm p-2">1A/261 NIT Faridabad, Haryana</span>
              <h2 className="font-bold p-2">
                Payment Status: <span className="font-normal">Paid</span>
              </h2>
              <h2 className="font-bold p-2">
                Amount: <span className="font-normal">$3445</span>
              </h2>
              <div className="w-full right-1 bg-slate-500 p-1 mb-2 rounded-md flex justify-start items-center">
                <img
                  className="h-[70px] w-[70px] m-1 "
                  src="http://localhost:3000/images/admin.jpg"
                  alt=""
                />
                <span className="px-2 text-white">
                  <h2 className="">Long Shirt</h2>
                  <h2 className="font-bold">
                    Brand: <span className="font-normal">Easy</span>
                  </h2>
                  <h2 className="font-bold">
                    Quantity : <span className="font-normal">2</span>
                  </h2>
                </span>
              </div>
              <div className="w-full right-1 bg-slate-500 p-1 mb-2 rounded-md flex justify-start items-center">
                <img
                  className="h-[70px] w-[70px] m-1 "
                  src="http://localhost:3000/images/admin.jpg"
                  alt=""
                />
                <span className="px-2 text-white">
                  <h2 className="">Long Shirt</h2>
                  <h2 className="font-bold">
                    Brand: <span className="font-normal">Easy</span>
                  </h2>
                  <h2 className="font-bold">
                    Quantity : <span className="font-normal">2</span>
                  </h2>
                </span>
              </div>
              <div className="w-full right-1 bg-slate-500 p-1 mb-2 rounded-md flex justify-start items-center">
                <img
                  className="h-[70px] w-[70px] m-1 "
                  src="http://localhost:3000/images/admin.jpg"
                  alt=""
                />
                <span className="px-2 text-white">
                  <h2 className="">Long Shirt</h2>
                  <h2 className="font-bold">
                    Brand: <span className="font-normal">Easy</span>
                  </h2>
                  <h2 className="font-bold">
                    Quantity : <span className="font-normal">2</span>
                  </h2>
                </span>
              </div>
            </div>
            <div className="w-8/12 ">
              <div className="w-full bg-slate-500 rounded-md p-4 mx-2 text-white">
                <div className="mb-4">
                  <span>Seller 1 Order : Pending </span>
                  <img
                    className="h-[70px] w-[70px] m-1 "
                    src="http://localhost:3000/images/admin.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-4">
                  <span>Seller 2 Order : Pending </span>
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
