import React from "react";
import qiz from "../../../assets/image/image.png";
import book1 from "../../../assets/image/image copy.png";
import book2 from "../../../assets/image/image copy 2.png";
import book3 from "../../../assets/image/image copy 3.png";
import love from "../../../assets/icons/love.svg"

export const Banner = () => {
  return (
    <section className="pt-4 pb-14">
      <div className="container">
        <div className="flex gap-6">
          <div className="grow bg-[#eef4ff] rounded-[14px] flex">
            <div className="mt-19">
              <img src={qiz} alt="" />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col justify-center items-center">
                <img src={book1} alt="" />
                <h2>1984</h2>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={book2} alt="" />
                <h2>Code 8</h2>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={book3} alt="" />
                <h2>Rich dad poor dad</h2>
              </div>
            </div>
          </div>
          <div className="w-[261px] h-[351px] bg-[#3f51b5] rounded-[14px] p-6">
            <h2 className="text-2xl font-bold text-white">Китоб ўқишни ёқтирасизми?</h2>
            <p className="text-[18px] font-medium mt-5 text-white">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <div className="p-2.5 flex gap-3 font-bold mt-[77px] rounded-[14px] bg-white justify-center items-center">
                <img src={love} alt="" />
              <a href="">Обуна бўлиш</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
