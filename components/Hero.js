"use client"

import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='py-12 md:py-20 bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: "url('/logos/galgotias.png')" }}>
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-[2px]"></div>

      {/* About Galgotias Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className='relative z-10 h-auto mx-auto border-box flex flex-col lg:flex-row gap-10 lg:gap-0 px-4'
      >
        <div className='my-auto w-full lg:w-1/2 h-full flex items-center justify-center'>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] drop-shadow-2xl hover:scale-105 transition-transform duration-300'
            src='/logos/gulogo.png'
            alt='Galgotias University Logo'
          />
        </div>
        <div className='w-full lg:w-1/2 h-full flex relative'>
          {/* Decorative layers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='w-[92%] h-full z-[-2] bg-[#F8C907] absolute top-3 md:top-5 right-0 rounded-l-xl shadow-lg'
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='w-[86%] h-full z-[-4] bg-[#2C99D5] absolute top-6 md:top-10 right-0 rounded-l-xl shadow-lg'
          />

          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative bg-gradient-to-br from-[#BE2727] to-[#c93535] p-6 md:p-8 rounded-l-xl shadow-2xl overflow-hidden w-full'
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 pt-2'>
                <div className='w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-sm shadow-md'></div>
              </div>
              <div>
                <h2 className='text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 drop-shadow-md'>
                  About Galgotias University
                </h2>
                <p className='text-white/95 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  Galgotias University hosts over 20,000 students across 100+ undergraduate and postgraduate programs. Renowned for excellence in teaching, research, and innovation, the university is committed to nurturing leaders who make a global impact. Hosting ICCSAI-2026 reinforces this mission by fostering knowledge exchange and innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Conference Objective Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className='relative z-10 h-auto mx-auto border-box mt-16 lg:mt-28 flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 px-4'
      >
        <div className='w-full my-auto lg:w-1/2 h-full flex relative'>
          {/* Decorative layers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='w-[92%] h-full z-[-2] bg-[#F1E097] absolute top-3 md:top-5 left-0 rounded-r-xl shadow-lg'
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='w-[86%] h-full z-[-4] bg-[#0CC1E0] absolute top-6 md:top-10 left-0 rounded-r-xl shadow-lg'
          />

          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative bg-gradient-to-br from-[#024CAD] to-[#0369b8] p-6 md:p-8 rounded-r-xl shadow-2xl overflow-hidden w-full'
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0 pt-2'>
                <div className='w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-sm shadow-md'></div>
              </div>
              <div>
                <h2 className='text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 drop-shadow-md uppercase tracking-wide'>
                  Conference Objective
                </h2>
                <p className='text-white/95 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  ICCSAI-2026 is a non-profit international conference designed to advance knowledge in Computer & Communication Engineering. With multiple tracks covering diverse topics in computing, communication, information security, and artificial intelligence, the conference fosters global collaboration and sets new directions in research.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='my-auto w-full lg:w-1/2 h-full flex items-center justify-center'>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='h-[150px] sm:h-[200px] md:h-[280px] lg:h-[320px] mix-blend-multiply hover:scale-105 transition-transform duration-300 drop-shadow-xl'
            src='/logos/iccsai_logo.png'
            alt='ICCSAI 2026 Logo'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
