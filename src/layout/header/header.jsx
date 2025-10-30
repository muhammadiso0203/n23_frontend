import logo from "../../assets/icons/logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import Language from "./language";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="container">
      <div className="flex justify-between mt-5 pb-[21px]">
        <div className="flex gap-[46px]">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <Search />
        </div>
        <div>
          {" "}
          <Language />
        </div>
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
