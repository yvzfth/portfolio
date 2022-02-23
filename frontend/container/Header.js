import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';
import Image from 'next/image';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Header() {
  return (
    // className='app__header app__flex'
    <div
      id='home'
      className='bg-[url("../assets/bgIMG.png")]
      bg-cover bg-repeat bg-center pt-24 pb-8 px-4 flex flex-col items-start justify-start
      lg:flex-row lg:items-center lg:justify-center lg:pt-24 lg:px-8 2xl:p-32 '
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        // className='app__header__info'
        className='flex flex-col justify-start flex-[0.65_0.65_0%]
        items-start h-full 2xl:w-full 2xl:mr-0'
      >
        {/* className='app__header__badge' */}
        <div className='w-full flex justify-start items-start flex-col '>
          {/* className='badge__cmp app__flex' */}
          <div
            className='py-4 px-8 border-white flew-col 
            rounded-lg  shadow-lg flex space-x-4'
          >
            <div>
              <span className='text-4xl 2xl:text-7xl'>👋</span>
            </div>
            <div>
              <p className='p-text w-full text-left'>Hello, I am</p>
              <h1 className='head-text w-full text-left'>Micael</h1>
            </div>
          </div>
          {/* className='tag__cmp app__flex' */}
          <div
            className='py-4 px-8 border-white rounded-lg shadow-lg 
            mt-12 flex flex-col'
          >
            <p className='w-100 uppercase text-right p-text'>Web developer</p>
            <p className='w-100 uppercase text-right p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='z-1 first:z-1 first:absolute w-full object-cover relative h-full 
        flex-1 flex justify-end items-end md:'
      >
        <Image src={images.profile} alt='profile_bg' />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className=' z-0 first:z-0 absolute w-full h-4/5 left-0 right-0 bottom-0'
        >
          <Image src={images.circle} alt='profile_circle' />
        </motion.div>
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='flex flex-row lg:flex-col justify-center items-center flex-1 w-full'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className='h-20 w-20 bg-white rounded-full shadow-lg p-4 m-4 '
            key={`circle-${index}`}
          >
            <Image src={circle} alt='circle' objectFit='contain' />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Header;
