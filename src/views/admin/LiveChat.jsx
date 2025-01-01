import React from "react";

const LiveChat = () => {
  const isActive = true;
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full p-4 bg-[#f5f5f5] rounded-md mt-2">
          <div className="w-3/12">
            <h2 className="font-bold text-lg">Sellers</h2>
            <div
              className={`${
                isActive ? "border-slate-300 bg-blue-200" : ""
              }flex justify-start items-center  mt-2 mb-2 rounded-md p-2`}
            >
              <img
                className="h-10 w-10 border border-blue-500  rounded-full"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
              <h2 className="p-2 text-md font-semibold">Daksh Ahuja</h2>
            </div>
            <div className="flex justify-start items-center  mt-2 mb-2 border border-slate-300 bg-blue-200 rounded-md p-2">
              <img
                className="h-10 w-10 border border-blue-500  rounded-full"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
              <h2 className="p-2 text-md font-semibold">Daksh Ahuja</h2>
            </div>
            <div className="flex justify-start items-center  mt-2 mb-2 border border-slate-300 bg-blue-200 rounded-md p-2">
              <img
                className="h-10 w-10 border border-blue-500  rounded-full"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
              <h2 className="p-2 text-md font-semibold">Daksh Ahuja</h2>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LiveChat;
