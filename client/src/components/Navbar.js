import React from 'react'

export default function Navbar() {
  return (
    <nav className='h-16 w-full font-me flex text-[#ADB7BE] justify-end fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <ul className='flex items-center gap-8 text-xl pr-36'>
        <li className='hover:text-white'><a href='#home'>anku</a></li>
        <li className='hover:text-white'><a href='#about'>About</a></li>
        <li className='hover:text-white'><a href='#project'>Projects</a></li>
        <li className='hover:text-white'><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  )
}
