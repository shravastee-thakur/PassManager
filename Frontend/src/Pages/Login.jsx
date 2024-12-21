import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex justify-center items-center p-5 min-h-screen">
      <form className="w-full sm:w-1/2 lg:w-1/3 mx-auto flex flex-col gap-2 bg-sky-300 p-5 rounded-lg">
        <h1 className="text-2xl text-center font-bold">Welcome Back</h1>

        <label className="text-balance font-semibold">Email</label>
        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="email"
          placeholder="Enter Your Email"
          name="email"
        />

        <label className="text-balance font-semibold">Password</label>

        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />

        <button className="bg-blue-700 p-2 rounded-md text-white font-bold w-1/2 mx-auto mt-3 hover:bg-blue-600 cursor-pointer">
          Login
        </button>

        <div className="mt-2">
          <p className="text-center">
            Don't have an account?
            <NavLink className="text-blue-700" to={"/signup"}>
              Signup
            </NavLink>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
