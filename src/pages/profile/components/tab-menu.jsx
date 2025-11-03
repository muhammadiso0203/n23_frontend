import React from "react";
import { Link } from "react-router-dom";
import obuna from "../../../assets/profile/obuna.svg"
import xisob from "../../../assets/profile/hisob.svg"
import kitob from "../../../assets/profile/kitob.svg"
import saqlangan from "../../../assets/profile/saved.svg"
import sozlama from "../../../assets/profile/sozlama.svg"

const TabMenu = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-7 mt-[42px] shadow-sm w-[288px] p-7 rounded-sm fixed top-105">
          <div className="flex items-center gap-4">
            <img src={obuna} alt="" />
            <Link to="/profile">Обуна бўлиш</Link>
          </div>
          <div className="flex items-center gap-4">
            <img src={xisob} alt="" />
            <Link to="xisob">Э-Хисоб</Link>
          </div>
          <div className="flex items-center gap-4">
            <img src={kitob} alt="" />
            <Link to="kitob">Китобларим</Link>
          </div>
          <div className="flex items-center gap-4">
            <img src={saqlangan} alt="" />
            <Link to="saved">Сақланганлар</Link>
          </div>
          <div className="flex items-center gap-4">
            <img src={sozlama} alt="" />
            <Link to="sozlama">Созламалар</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
