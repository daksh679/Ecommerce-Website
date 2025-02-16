import React, { use, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import {
  clearMessage,
  seller_register,
} from "../../store/Reducers/AuthReducer";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(seller_register(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      Navigate("/");
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Shoppe</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleInput}
                value={state.name}
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
                onChange={handleInput}
                value={state.email}
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

            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-lg hover:shadow-blue-300 text-white px-7 py-2 rounded-md mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Sign Up"
              )}
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?{" "}
                <Link className="font-bold" to="/login">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <FaFacebookF />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-red-700 shadow-lg hover:shadow-red-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
