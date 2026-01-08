"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { chairs } from "@/utils/slideArray"; // Import chairs data
import { motion, AnimatePresence } from "framer-motion";

export default function ChairsFlowchart() {
  const [isFlowchartOpen, setIsFlowchartOpen] = useState(false);
  const [openChair, setOpenChair] = useState(null);

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeDevice = window.innerWidth >= 768; // 768px is typically the breakpoint for md in Tailwind
      setIsFlowchartOpen(isLargeDevice); // Set to true on large devices, false on mobile
    };

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleFlowchart = () => {
    setIsFlowchartOpen((prev) => !prev);
  };

  const toggleChair = (index) => {
    setOpenChair(openChair === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto my-12 px-4"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Main Header */}
        <div
          className="bg-gradient-to-r from-[#BE2727] to-[#F96604] p-4 md:p-6 cursor-pointer flex justify-between items-center"
          onClick={toggleFlowchart}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Conference Tracks</h2>
          </div>
          <ChevronDown
            className={`w-6 h-6 text-white transition-transform duration-300 ${isFlowchartOpen ? 'rotate-180' : ''}`}
          />
        </div>

        <AnimatePresence>
          {isFlowchartOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50"
            >
              <div className="p-4 md:p-6 space-y-4">
                {/* Main Track info */}
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#BE2727]"></span>
                  <h3 className="text-lg font-bold text-[#BE2727]">Main Track: ICCSAI-2026</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chairs.map((category, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        className={`w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none transition-colors duration-200 ${openChair === index ? 'text-[#BE2727] bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}
                        onClick={() => toggleChair(index)}
                      >
                        <span className="pr-4">{category.title}</span>
                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openChair === index ? 'rotate-180 text-[#BE2727]' : 'text-gray-400'}`} />
                      </button>

                      <AnimatePresence>
                        {openChair === index && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 border-t border-gray-100"
                          >
                            <ul className="p-4 pl-8 space-y-2 list-none relative">
                              {/* Vertical line for list */}
                              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>

                              {Array.isArray(category.chairpersons) && category.chairpersons.length > 0 ? (
                                category.chairpersons.map((chair, i) => (
                                  <li key={i} className="text-sm text-gray-600 relative flex items-center">
                                    <span className="absolute -left-[1.15rem] w-2 h-2 bg-gray-300 rounded-full border-2 border-white"></span>
                                    {chair}
                                  </li>
                                ))
                              ) : (
                                <li className="text-sm text-gray-500 italic pl-2">Chairs not listed</li>
                              )}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
