import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main-Layout";
import Home from "./pages/home";
import Auth from "./pages/auth";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
