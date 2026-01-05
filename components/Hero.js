"use client"

import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='py-16 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/logos/galgotias.png')" }}> 
    <motion.div 
      initial={{ opacity: 0, y:-50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
      className='h-auto mx-auto border-box flex flex-col lg:flex-row gap-10 lg:gap-0'>
      <div className='my-auto w-full lg:w-1/2 h-full flex items-center justify-center'>
        <img className='h-[50px]  sm:h-[60px] md:h-[80px] lg:h-1/3' src='/logos/gulogo.png' alt='' />
      </div>
      <div className='w-full lg:w-1/2 h-full flex relative bg-[#BE2727] p-5'>
        <div className='w-[90%] h-full z-[-2] bg-[#F8C907] absolute top-4 right-0'></div>
        <div className='w-[85%] h-full z-[-4] bg-[#2C99D5] absolute top-8 right-0'></div>
        <div className='py-6 md:py-8 w-1/5 h-1/5 lg:h-1/3 flex justify-center items-center'>
          <div className='size-2 lg:size-3 bg-white'></div>
        </div>
        <div className='h-full w-4/5'>
          <div className='h-1/5 py-3 md:py-5 lg:h-1/3 w-full flex justify-start items-center text-white font-bold text-base sm:text-lg md:text-xl lg:text-3xl'>
            <h2>About Galgotias University</h2>
          </div>
          <div className='h-auto py-2 md:py-5 lg:h-2/3 w-full flex justify-start items-start text-xs sm:text-sm md:text-base lg:text-2xl text-white'>
            <p>Galgotias University hosts over 20,000 students across 100+ undergraduate and postgraduate programs. Renowned for excellence in teaching, research, and innovation, the university is committed to nurturing leaders who make a global impact. Hosting ICCSAI-2026 reinforces this mission by fostering knowledge exchange and innovation.</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }} 
      viewport={{ once: true }}
      className='h-auto mx-auto border-box mt-14 lg:mt-40 flex flex-col-reverse lg:flex-row gap-7 sm:gap-8 lg:gap-0'>
      <div className='w-full my-auto lg:w-1/2 h-full flex relative bg-[#024CAD] p-5'>
        <div className='w-[90%] h-full z-[-2] bg-[#F1E097] absolute top-4 left-0'></div>
        <div className='w-[85%] h-full z-[-4] bg-[#0CC1E0] absolute top-8 left-0'></div>
        <div className='py-6 md:py-8 w-1/5 h-1/5 lg:h-1/3 flex justify-center items-center '>
          <div className='size-2 lg:size-3 bg-white'></div>
        </div>
        <div className='h-full w-4/5'>
          <div className='h-1/5 py-3 md:py-5 lg:h-1/3 w-full flex justify-start items-center text-white font-bold text-base sm:text-lg md:text-3xl lg:text-3xl'>
            <h2>CONFERENCE OBJECTIVE</h2>
          </div>
          <div className='h-auto py-2 md:py-5 lg:h-2/3 w-full flex justify-start items-start text-xs sm:text-sm md:text-base lg:text-2xl text-white'>
            <p>ICCSAI-2026 is a non-profit international conference designed to advance knowledge in Computer & Communication Engineering. With multiple tracks covering diverse topics in computing, communication, information security, and artificial intelligence, the conference fosters global collaboration and sets new directions in research.</p>
          </div>
        </div>
      </div>
      <div className='my-auto w-full lg:w-1/2 h-full flex items-center justify-center'>
        <img className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-full mix-blend-multiply' src='/logos/iccsai_logo.png' alt='' />
      </div>
    </motion.div>
  </div>
  


  )
}

export default Hero
