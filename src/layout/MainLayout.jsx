import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="p-3 bg-gray-400 flex gap-10 items-center justify-center text-2xl font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/wishlist"}>Wishlist</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
