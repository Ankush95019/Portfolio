import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";





export default function Navbar() {
  
  
  const [navbarButton,setNavbarButton] = useState(false);

  const toggleNavbar = () => {
    setNavbarButton(!navbarButton);
  }


  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <a className='text-2xl md:text-5xl text-white font-semibold' href='/'> </a>
        <div className='mobile-menu block md:hidden'>
          <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white' onClick={toggleNavbar}><GiHamburgerMenu /></button>
        </div>
        <div className='menu hidden md:block md:w-auto ' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#home'>Home</a></li>
            <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#about'>About</a></li>
            <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#project'>Projects</a></li>
            <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
      {navbarButton && <ul className='flex flex-col py-4 items-center'>
        <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#home' onClick={toggleNavbar}>Home</a></li>
        <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#about' onClick={toggleNavbar}>About</a></li>
        <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#project' onClick={toggleNavbar}>Projects</a></li>
        <li><a className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href='#contact' onClick={toggleNavbar}>Contact</a></li>
      </ul>}
    </nav>
  )
}
