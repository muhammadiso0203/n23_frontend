import React from "react";
import { Outlet } from "react-router-dom";
import Avatar from "../pages/profile/components/avatar";
import TabMenu from "../pages/profile/components/tab-menu";

const ProfileLayout = () => {
  return (
    <>
      <Avatar />
      <Outlet />
      <TabMenu />
    </>
  );
};

export default ProfileLayout;
