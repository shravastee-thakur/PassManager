import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token") || 20;

  useEffect(() => {
    if (!token) {
      //   window.location.href = "/login";
      Navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
