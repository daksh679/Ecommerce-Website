import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all ">
        {/* Sidebar */}
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm  bg-indigo-500 hover:shadow-indigo-500/50 items-center justify-center  cursor-pointer"
        >
          <FaList />
        </div>

        {/* Search  */}
        <div className=" hidden md:block">
          <input
            className="px-3 py-2 outline-none bg-transparent border border-slate-700 rounded-md focus:border-indigo-300 overflow-hidden"
            type="text"
            name="search"
            placeholder="Search here..."
          />
        </div>

        {/* Profile */}
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-md font-bold">Daksh Ahuja</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>
              <img
                className="h-[45px] w-[45px] rounded-full overflow-hidden"
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
