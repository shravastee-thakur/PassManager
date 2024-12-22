import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", user?.email);
    formdata.append("password", user?.password);

    try {
      const res = await axios.post(
        "http://localhost:3000/pwm/api/user/login",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = res.data;
      console.log("Api response:", data);

      if (data?.data?.refreshtoken && data?.data?._id) {
        // Store in localStorage
        localStorage.setItem("token", data.data.refreshtoken);
        localStorage.setItem("userid", data.data._id);

        // Verify values
        console.log("Token Stored:", localStorage.getItem("token"));
        console.log("User ID Stored:", localStorage.getItem("userid"));

        // Navigate and reset user
        Navigate("/");
        setUser({ email: "", password: "" });
      } else {
        console.error("Error: Invalid API Response", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex justify-center items-center p-5 min-h-screen">
      <form
        onSubmit={HandleSubmit}
        className="w-full sm:w-1/2 lg:w-1/3 mx-auto flex flex-col gap-2 bg-sky-300 p-5 rounded-lg"
      >
        <h1 className="text-2xl text-center font-bold">Welcome Back</h1>

        <label className="text-balance font-semibold">Email</label>
        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={user?.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label className="text-balance font-semibold">Password</label>

        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={user?.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
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
