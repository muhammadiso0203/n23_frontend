import React from "react";
import image from "../../assets/profile/image.svg"

const Xisob = () => {
  return (
    <>
      <div className="container">
        <div className="relative ml-82 mt-[60px] shadow-sm p-8">
          <h1 className="font-bold text-[30px]">Созламалар</h1>
          <div className="flex items-center gap-5 mt-[47px]">
            <img src={image} alt="" />
            <h2 className="font-medium text-[#3f51b5]">Сурат юклаш</h2>
          </div>
          <div>
            <form action="" className="flex flex-col gap-1.5 mt-[42px]">
              <label htmlFor="" className="font-medium text-[14px]">Исмингиз</label>
              <input type="text" placeholder="Исмингиз" className="p-3.5 border border-[#ededed] rounded-2xl w-[343px]"/>
            </form>
          </div>
          <div>
            <button className="bg-[#3f51b5] w-[343px] h-11 rounded-[14px] text-white text-[16px] font-medium mt-[65px] mb-[15px]">Сақлаш</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xisob;
