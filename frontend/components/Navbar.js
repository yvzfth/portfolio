import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { images } from '../constants';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className='w-full flex justify-between items-center 
      py-4 px-8 bg-slate-100/40 backdrop-blur-sm fixed border-1 border-white/20 
      shadow z-2'
    >
      <div className='flex justify-start items-center w-24 h-5 xl:w-48 xl:h-10'>
        <Image src={images.logo} alt='logo' objectFit='cover' />
      </div>
      <ul
        className='hidden md:flex-1 md:flex md:justify-center 
        md:items-center md:list-none '
      >
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li
            className='group marker:cursor-pointer my-0  
            mx-4 flex-col flex items-center justify-center'
            key={`link-${item}`}
          >
            <a
              className='text-[#6b7688] flex-col uppercase 
              font-medium transition-colors hover:text-blue-600'
              href={`#${item}`}
            >
              {item}
            </a>
            <div className='group-hover:bg-blue-600 w-1 h-1 bg-transparent rounded-sm mt-1' />
          </li>
        ))}
      </ul>
      <div
        className='md:hidden w-10 h-10 rounded-full relative 
      flex justify-center items-center bg-blue-600 hover:bg-blue-500'
      >
        <HiMenuAlt4
          className='w-3/4 h-3/4 text-white hover:scale-105 active:scale-95'
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            className='fixed top-0 bottom-0 right-0 z-5 p-4 w-4/5 flex flex-col 
            justify-end items-end h-screen bg-slate-100 
            bg-[url("../assets/bgWhite.png")] bg-repeat bg-cover shadow-[0px_0px_45px_rgba(0,0,0,0.3)]'
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX
              className='w-10 h-10 text-blue-600 hover:scale-105 
              hover:text-blue-500 mx-4 my-2 transition-colors active:scale-95'
              onClick={() => setToggle(false)}
            />
            <ul
              className=' flex flex-col justify-start 
              items-start list-none m-0 p-0 h-full w-full'
            >
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className='marker:cursor-pointer m-4' key={item}>
                  <a
                    onClick={() => setToggle(false)}
                    className='text-base text-[#6b7688] flex-col uppercase 
                    font-medium transition-colors hover:text-blue-600'
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
