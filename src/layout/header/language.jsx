import React from 'react'
import lang from "../../assets/icons/uzb.svg"
import pasga from "../../assets/icons/pastga.svg"
import odam from "../../assets/icons/odam.svg"
import { useNavigate } from 'react-router-dom'

const Language = () => {
  const navigate = useNavigate("/profile")
  return (
    <div className='flex items-center gap-5'>
        <div className='flex items-center py-3 px-6 gap-[9px] rounded-[14px] bg-[#eef4ff]'>
            <img src={lang} alt="" />
            <h2>Ўз</h2>
            <img src={pasga} alt="" />
        </div>
        <button onClick={() => navigate("/profile")} className='flex items-center py-3 px-6 gap-3 rounded-[14px] bg-[#3f51b5] cursor-pointer'>
            <img src={odam} alt="" />
            <h2 className='text-white'>Profile</h2>
        </button>
    </div>
  )
}

export default Language