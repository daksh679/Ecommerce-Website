import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavs } from "./../navigation/index";

const Sidebar = () => {
  const { pathName } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNavs("admin");
    setAllNav(navs);
  }, []);

  console.log(allNav);
  return (
    <div>
      <div></div>
      <div className="w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rbg(34_41_47_/5%) transition-all]">
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="h-full w-full"
              src="http://localhost:3000/images/logo.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="m-4">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathName === n.path
                      ? " bg-blue-500 shadow-indigo-500/50 text-white duration-500"
                      : " text-[#030811] font-bold duration-200"
                  } px-[12px] py-[9px]`}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
