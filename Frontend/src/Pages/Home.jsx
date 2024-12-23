import React, { useEffect } from "react";
import PasswordItem from "../Components/PasswordItem";
import { usePasswordContext } from "../Context/PasswordContext";

const Home = () => {
  const {
    PostPassword,
    GetPassword,
    allPassword,
    newPassword,
    setNewPassword,
  } = usePasswordContext();

  const HandleSubmit = (e) => {
    e.preventDefault();
    PostPassword(newPassword);
  };

  useEffect(() => {
    GetPassword();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-200 p-5">
      <div className=" bg-slate-500 relative flex w-full">
        <div className="absolute right-0">
          <button className="bg-red-700 p-1 rounded-md text-white font-bold hover:bg-orange-600 cursor-pointer m-3">
            Logout
          </button>
        </div>
      </div>

      <section className="flex justify-center items-center mt-10 p-5">
        <form
          onSubmit={HandleSubmit}
          className="w-full sm:w-1/2 lg:w-1/3 mx-auto flex flex-col gap-2 bg-sky-300 p-5 rounded-lg"
        >
          <label className="text-balance font-semibold">Title</label>
          <input
            className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
            type="text"
            placeholder="Enter Your title"
            name="title"
            value={newPassword?.title}
            onChange={(e) =>
              setNewPassword({ ...newPassword, title: e.target.value })
            }
          />

          <label className="text-balance font-semibold">Password</label>

          <input
            className="rounded-md p-2 outline-none focus:ring-2 focus:ring-teal-600"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={newPassword?.password}
            onChange={(e) =>
              setNewPassword({ ...newPassword, password: e.target.value })
            }
          />

          <button className="bg-blue-700 p-2 rounded-md text-white font-bold w-1/2  mx-auto mt-3 hover:bg-blue-600 cursor-pointer">
            Add Password
          </button>
        </form>
      </section>

      {/* password section */}
      <section className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {allPassword &&
          allPassword?.length > 0 &&
          allPassword.map((value) => {
            <PasswordItem key={value?._id} value={value} />;
          })}
      </section>
    </div>
  );
};

export default Home;
