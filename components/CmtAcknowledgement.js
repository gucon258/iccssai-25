"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CmtAcknowledgement = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center relative overflow-hidden group"
        >
          {/* Subtle gradient hover effect on borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#BE2727] to-[#F96604] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex flex-col items-center justify-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BE2727] to-[#F96604]">
              CMT ACKNOWLEDGEMENT
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#BE2727] to-[#F96604] rounded-full mt-2"></div>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by <span className="font-semibold text-gray-800">Microsoft</span> and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CmtAcknowledgement;
