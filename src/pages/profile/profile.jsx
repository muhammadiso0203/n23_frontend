import React from "react";
import girl from "../../assets/profile/girl.svg";
import orange from "../../assets/profile/orange.svg";

const Obuna = () => {
  return (
    <>
      <div className="container">
        <div className="relative ml-82 mt-[60px]">
          <img src={orange} alt="" />
          <div className="absolute top-0 right-0 flex  gap-[417px]">
            <h1 className="font-bold text-[26px] text-white w-[331px] mt-8">Узингиз севган булимга обуна бўлинг</h1>
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Obuna;
