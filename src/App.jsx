import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Wishlist from "./page/Wishlist";
import Cart from "./page/Cart";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
