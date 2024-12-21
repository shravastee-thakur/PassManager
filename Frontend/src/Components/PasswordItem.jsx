import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const PasswordItem = () => {
  return (
    <>
      <div className="flex flex-col gap-3 bg-white p-5 w-1/4 rounded-md">
        <input
          type="text"
          placeholder="Enter title"
          className="ring-1 ring-gray-300 rounded-sm p-1"
          disabled
        />

        <div className="w-full">
          <input
            type="password"
            placeholder="Enter password"
            className="ring-1 ring-gray-300 rounded-sm p-1 w-full"
            disabled
          />
        </div>

        <div className="flex justify-end items-center gap-1">
          <h3 className="text-sm">
            Date:- <span>12 Dec 2024</span>
          </h3>
          <button className="text-green-500 transition-colors duration-200 ease-in-out p-2 flex items-center justify-center hover:bg-black rounded-full">
            <EditIcon />
          </button>
          <button className="text-red-500 transition-colors duration-200 ease-in-out p-2 flex items-center justify-center hover:bg-black rounded-full">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordItem;
