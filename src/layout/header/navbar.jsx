import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-[11px]'>
        <ul className='flex gap-5 text-[#3f51b5]'>
            <Link to={"/"}>Аудиокитоб</Link>
            <Link to={"/"}>Электрон китоблар</Link>
            <Link to={"/"}>Босма китоблар</Link>
            <Link to={"/"}>Контакт</Link>
            <Link to={"/"}>Биз хақимизда</Link>
        </ul>
    </div>
  )
}

export default Navbar