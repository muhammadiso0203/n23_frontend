import React from 'react'
import lang from "../../assets/icons/uzb.svg"
import pasga from "../../assets/icons/pastga.svg"
import odam from "../../assets/icons/odam.svg"

const Language = () => {
  return (
    <div className='flex items-center gap-5'>
        <div className='flex items-center py-3 px-6 gap-[9px] rounded-[14px] bg-[#eef4ff]'>
            <img src={lang} alt="" />
            <h2>Ўз</h2>
            <img src={pasga} alt="" />
        </div>
        <div className='flex items-center py-3 px-6 gap-3 rounded-[14px] bg-[#3f51b5]'>
            <img src={odam} alt="" />
            <h2>Кириш</h2>
        </div>
    </div>
  )
}

export default Language