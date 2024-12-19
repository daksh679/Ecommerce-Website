import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleInput}
                value={state.email}
                className=" px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleInput}
                value={state.password}
                className=" px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button className="bg-slate-800 w-full hover:shadow-lg hover:shadow-blue-300 text-white px-7 py-2 rounded-md mb-3">
              Login
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account?
                <Link className="font-bold" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
