import React from "react";
import avatar from "../../../assets/avatar.png";

const Avatar = () => {
  return (
    <div className="container">
      <div className="flex items-center h-[211px] shadow-sm mt-[52px] px-6 pl-6 gap-[33px] rounded-sm">
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-[30px] text-[#11142d]">Суғдиёна Икромова</h2>
          <h3 className="font-medium text-5 text-[#242424]">+998 90 253 77 53</h3>
          <p>ID: 0001 Баланс: 45 000 сўм</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
