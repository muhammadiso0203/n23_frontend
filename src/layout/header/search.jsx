import React from "react";
import rukn from "../../assets/icons/ruknlar.svg";
import pasga from "../../assets/icons/pastga.svg";
import search from "../../assets/icons/search-btn.svg"

const Search = () => {
  return (
    <div className="flex gap-1 ">
      <div className="flex gap-3.5 w-[180px] border border-[#e1e1e1] items-center py-3 px-5 rounded-tl-[14px] rounded-bl-[14px]">
        <img src={rukn} alt="" />
        <button className="text-[#3f51b5]">Рукнлар</button>
        <img src={pasga} alt="" />
      </div>
      <div className="flex ">
        <div className=" w-[484px] border border-[#e1e1e1] py-[13px] pl-[29px]">
            <input type="text" placeholder="Қидириш"/>
        </div>
        <div className="border border-[#e1e1e1] py-[13px] pl-[29px] rounded-tr-[14px] rounded-br-[14px]">
          <img src={search} alt="" className="mr-6"/>
        </div>
      </div>
    </div>
  );
};

export default Search;
