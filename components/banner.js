"use client";

import React from "react";
import { motion } from "framer-motion";
import target from '@/assets/logo/target.svg';

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative max-w-[90%] lg:max-w-[85%] mx-auto my-8 lg:my-14"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#BE2727] to-[#F96604] rounded-2xl blur-xl opacity-30 transform scale-105"></div>

      {/* Main banner container */}
      <div className="relative flex items-center p-6 md:p-8 lg:p-10 bg-gradient-to-r from-[#BE2727] via-[#d43d3d] to-[#F96604] text-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Left accent line */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#F8C907] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 flex-1 pr-8 md:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium">
              <span className="w-2 h-2 bg-[#F8C907] rounded-full animate-pulse"></span>
              Conference Announcement
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed"
          >
            <span className="font-bold text-[#F8C907]">ICCSAI - 2026</span> will be held at{" "}
            <span className="font-semibold">Galgotias University</span>, Greater Noida, India (NCR New Delhi).
            This prestigious event brings together global researchers, academics, and industry professionals
            to discuss advancements in <span className="text-[#F8C907]">Communication</span>,{" "}
            <span className="text-[#F8C907]">Security</span>, and{" "}
            <span className="text-[#F8C907]">Artificial Intelligence</span>.
          </motion.p>
        </div>

        {/* Target icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="absolute right-4 md:right-8 -top-2 md:top-1/2 md:-translate-y-1/2"
        >
          <div className="relative">
            {/* Glow behind icon */}
            <div className="absolute inset-0 bg-[#F8C907] rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <img
                src={target.src}
                alt="target"
                className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain animate-float"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
