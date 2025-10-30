import React from 'react'

const Category = ({title, img}) => {
  return (
    <div className='relative'>
        <img src={img} alt="" />
        <h2 className='absolute bottom-1 text-white font-semibold left-4 w-[171px]'>{title}</h2>
    </div>
  )
}

export default Category