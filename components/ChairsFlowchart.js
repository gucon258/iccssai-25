"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { chairs } from "@/utils/slideArray";
import { motion, AnimatePresence } from "framer-motion";

export default function ChairsFlowchart() {
  const [isFlowchartOpen, setIsFlowchartOpen] = useState(false);

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeDevice = window.innerWidth >= 768;
      setIsFlowchartOpen(isLargeDevice);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleFlowchart = () => {
    setIsFlowchartOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto my-12 px-4"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Main Header */}
        <div
          className="bg-gradient-to-r from-[#BE2727] via-[#d43434] to-[#F96604] p-4 sm:p-6 cursor-pointer flex justify-between items-center select-none"
          onClick={toggleFlowchart}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-sm">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2.5">
                Conference Tracks
                <span className="hidden sm:inline-flex text-[11px] font-semibold bg-white/20 text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  8 Tracks
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/80 font-medium hidden sm:inline">
              {isFlowchartOpen ? 'Collapse' : 'Expand'}
            </span>
            <div className="p-1.5 rounded-lg bg-white/10">
              <ChevronDown
                className={`w-5 h-5 text-white transition-transform duration-300 ${isFlowchartOpen ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isFlowchartOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50/70"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {chairs.map((category, index) => {
                    const match = category.title.match(/^(Track\s*\d+):\s*(.*)$/i);
                    const trackNumber = match ? match[1] : `Track ${index + 1}`;
                    const trackTitle = match ? match[2] : category.title;
                    const hasChairs = category.chairpersons && category.chairpersons.length > 0;

                    return (
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-l-4 hover:border-l-[#BE2727] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <div className="p-5">
                          {/* Track Badge & Title */}
                          <div className="flex items-start gap-3">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-red-50 text-[#BE2727] text-xs font-bold tracking-wide flex-shrink-0 border border-red-100">
                              {trackNumber}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#BE2727] transition-colors leading-snug">
                              {trackTitle}
                            </h3>
                          </div>

                          {/* Track Chairs Section */}
                          {hasChairs && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-1.5 mb-2.5 text-xs font-bold text-[#BE2727] uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#BE2727]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Track Chairs
                              </div>
                              <div className="space-y-2">
                                {category.chairpersons.map((chair, idx) => {
                                  const parts = chair.split(',');
                                  const name = parts[0]?.trim();
                                  const affiliation = parts.slice(1).join(',').trim();

                                  return (
                                    <div
                                      key={idx}
                                      className="p-2.5 bg-gray-50 rounded-lg border border-gray-100/80 flex items-start gap-2.5"
                                    >
                                      <span className="mt-1 w-2 h-2 rounded-full bg-[#F96604] flex-shrink-0"></span>
                                      <div className="text-xs leading-relaxed">
                                        <p className="font-semibold text-gray-900">{name}</p>
                                        {affiliation && (
                                          <p className="text-gray-500 text-[11px] mt-0.5">{affiliation}</p>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
