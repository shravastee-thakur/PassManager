import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(user);

  // const HandleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formdata = new FormData();
  //   formdata.append("name", user?.name);
  //   formdata.append("email", user?.email);
  //   formdata.append("password", user?.password);

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/pwm/api/user/signup",
  //       formdata,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     let data = res?.data;
  //     console.log(data);
  //     if (data?.success) {
  //       localStorage.setItem("token", data?.data?.refreshtoken);
  //       localStorage.setItem("userid", data?.data?._id);

  //       console.log(localStorage.getItem("token")); // Debug output

  //       Navigate("/");
  //       setUser({ name: "", email: "", password: "" });
  //     } else {
  //       console.log(data?.message);
  //     }

  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", user?.name);
    formdata.append("email", user?.email);
    formdata.append("password", user?.password);

    try {
      const res = await axios.post(
        "http://localhost:3000/pwm/api/user/signup",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Update here
          },
        }
      );

      let data = res?.data;
      console.log(data);
      if (data?.success) {
        localStorage.setItem("token", data?.data?.refreshtoken);
        localStorage.setItem("userid", data?.data?._id);

        console.log("Token stored:", localStorage.getItem("token"));
        Navigate("/");
        setUser({ name: "", email: "", password: "" });
      } else {
        console.log(data?.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className="flex justify-center items-center p-5 min-h-screen">
      <form
        onSubmit={HandleSubmit}
        className="w-full sm:w-1/2 lg:w-1/3 mx-auto flex flex-col gap-2 bg-sky-300 p-5 rounded-lg"
      >
        <h1 className="text-2xl text-center font-bold">Register</h1>

        <label className="text-balance font-semibold">Name</label>
        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user?.name}
        />

        <label className="text-balance font-semibold">Email</label>
        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user?.email}
        />

        <label className="text-balance font-semibold">Password</label>
        <input
          className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user?.password}
        />

        <button className="bg-blue-700 p-2 rounded-md text-white font-bold w-1/2 mx-auto mt-3 hover:bg-blue-600">
          Register
        </button>

        <div className="mt-2">
          <p className="text-center">
            Already have an account?
            <NavLink className="text-blue-700" to={"/login"}>
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
