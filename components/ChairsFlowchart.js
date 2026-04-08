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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chairs.map((category, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="w-full flex p-4 text-left font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                        <span className="pr-4">{category.title}</span>
                      </div>
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
