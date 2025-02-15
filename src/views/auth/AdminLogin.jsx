import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessage } from "../../store/Reducers/AuthReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    // console.log(state);
  };

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      navigate("/");
    }
  }, [errorMessage, successMessage]);
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

            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-lg hover:shadow-blue-300 text-white px-7 py-2 rounded-md mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
