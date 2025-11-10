import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const MainLayout = () => {
  const token = Cookies.get("token")

  if(!token){
    return <Navigate to={"/login"}/>
  }
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
