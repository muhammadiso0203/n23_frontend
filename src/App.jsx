import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/home";
import ProfileLayout from "./layout/ProfileLayout";
import Obuna from "./pages/profile/profile";
import Xisob from "./pages/profile/xisob";
import Kitob from "./pages/profile/kitob";
import Saved from "./pages/profile/saved";
import Sozlama from "./pages/profile/sozlama";


const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Obuna />} />
            <Route path="xisob" element={<Xisob/>} />
            <Route path="kitob" element={<Kitob />} />
            <Route path="saved" element={<Saved />} />
            <Route path="sozlama" element={<Sozlama />} />
          </Route>
        </Route>
        <Route path="*" element={<h2>Not found page</h2>} />
      </Routes>
    </>
  );
};

export default App;
