"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { chairs } from "@/utils/slideArray"; // Import chairs data
import { motion } from "framer-motion";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-4 md:px-16 ">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-2xl font-bold text-[#024CAD] text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleFlowchart}
        >
          Conference Tracks
        </button>
        <button
          className="p-2 text-gray-700 focus:outline-none  rounded-full"
          onClick={toggleFlowchart}
        >
          <ChevronDown className={`transition-transform ${isFlowchartOpen ? 'rotate-180' : ''} animate-breathing`} />
        </button>
      </div>

      {isFlowchartOpen && (
        <>
          <button
            className="text-2xl font-bold text-red-600 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleFlowchart}
          >
            Main Track: ICCSAI2026
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chairs.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow">
                <button
                  className="w-full flex justify-between items-center p-2 md:p-4 text-lg font-medium text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleChair(index)}
                >
                  <span>{category.title}</span>
                  <span>{openChair === index ? '-' : <ChevronDown />}</span>
                </button>
                {openChair === index && (
                  <div className="md:p-4 border-t border-gray-200">
                    <ul className="list-disc pl-6 space-y-2">
                      {Array.isArray(category.chairpersons) && category.chairpersons.length > 0 ? (
                        category.chairpersons.map((chair, i) => (
                          <li key={i} className="text-gray-600">{chair}</li>
                        ))
                      ) : (
                        <li className="text-gray-500 italic">Chairs not listed</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
