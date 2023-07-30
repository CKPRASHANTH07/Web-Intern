import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaCross } from 'react-icons/fa';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='relative z-10'>
      <div className='fixed w-full h-24 flex justify-between items-center px-4 py-0 bg-white text-black text-2xl'>
        <div className='flex ml-5 place-items-end'>
          <img className='object scale-50' src={logo} alt='' />
        </div>
        <ul className='hidden md:flex gap-x-10 mr-10 dynamic'>
          <li className='group relative cursor-pointer'>
            <Link to="/" className='hover:text-violet-500 font-poppins text-lg'>Home--</Link>
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <Link to="/products" className='hover:text-violet-500 font-poppins text-lg'>Products</Link>
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <Link to="/industries" className='hover:text-violet-500 font-poppins text-lg'>Industries</Link>
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <Link to="/Clientportfolio" className='hover:text-violet-500 font-poppins text-lg'>Client Portfolio</Link>
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <Link to="/Aboutus" className='hover:text-violet-500 font-poppins text-lg'>About Us</Link>
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <Link to="/Contactus" className='hover:text-violet-500 font-poppins text-lg'>Contact Us</Link>
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
          </li>
        </ul>

        <div className='md:hidden text-2xl'>
        <button onClick={handleClick}>
    {nav ? <FaCross /> : <HiMenu />}
  </button>
          {nav && (
            <div className='fixed top-30 right-0 w-56 h-64 rounded-xl bg-gray-500 flex flex-col justify-center items-center'>
              <ul>
                 <li className='group relative cursor-pointer'>
                  <Link to="/" className='hover:text-violet-500 font-poppins text-lg'>Home</Link>
                  <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
                </li>
                <li className='group relative cursor-pointer'>
                  <Link to="/products" className='hover:text-violet-500 font-poppins text-lg'>Products</Link>
                  <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
                </li>
                <li className='group relative cursor-pointer'>
                  <Link to="/Industries" className='hover:text-violet-500 font-poppins text-lg'>Industries</Link>
                  <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
                </li>
                <li className='group relative cursor-pointer'>
                  <Link to="/Clientportfolio" className='hover:text-violet-500 font-poppins text-lg'>Client Portfolio</Link>
                  <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
                </li>
                <li className='group relative cursor-pointer'>
                  <Link to="/Aboutus" className='hover:text-violet-500 font-poppins text-lg'>About Us</Link>
                  <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
                </li>
                <li className='group relative cursor-pointer'>
                  <Link to="/Contactus" className='hover:text-violet-500 font-poppins text-lg'>Contact Us</Link>
                  <span className='absolute -bottom-1 left-0 w-full h-1 bg-violet-500 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'></span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
