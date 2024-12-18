import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Shoppe</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          <form>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className=" px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className=" px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className=" px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name=""
                id=""
              />
              <label htmlFor="checkbox">
                I agree to the privacy policy & terms
              </label>
            </div>
            <button className="bg-slate-800 w-full hover:shadow-lg hover:shadow-blue-300 text-white px-7 py-2 rounded-md mb-3">
              Sign Up
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?{" "}
                <Link className="font-bold" to="/login">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;