"use client"

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { events } from "@/utils/slideArray";


const parseDate = (dateStr) => {
    const match = dateStr.match(/(\d{1,2})(?:st|nd|rd|th) ([A-Za-z]+), (\d{4})/);
    if (match) {
        const [, day, month, year] = match;
        return new Date(`${day} ${month} ${year}`);
    }
    return null;
};

const getCurrentProgressIndex = () => {
    const currentDate = new Date();
    for (let i = 0; i < events.length; i++) {
        const eventDate = parseDate(events[i].date);
        if (eventDate && currentDate < eventDate) return i - 0.5;
    }
    return events.length - 1;
};

const Timeline = () => {
    const [progressIndex, setProgressIndex] = useState(getCurrentProgressIndex());
    const timelineRef = useRef(null);
    const isInView = useInView(timelineRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            setProgressIndex(getCurrentProgressIndex());
        }
    }, [isInView]);

    return (
        <div ref={timelineRef} className="py-10 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 lg:mb-16"
            >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Important <span className="bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent">Dates</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                    Mark your calendar with these key deadlines for ICCSAI-2026
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#BE2727] to-[#F96604] mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <motion.div
                className="relative flex flex-col items-center w-full max-w-[98vw] lg:max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                {/* Timeline Bar */}
                <div className="absolute top-6 sm:top-8 w-[85%] sm:w-[90%] h-1 sm:h-1.5 bg-gray-200 rounded-full shadow-inner">
                    {/* Progress Bar */}
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#BE2727] to-[#F96604] rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{
                            width: isInView
                                ? `${(progressIndex / (events.length - 1)) * 100}%`
                                : "0%",
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#BE2727] to-[#F96604] rounded-full blur-sm opacity-50"></div>
                    </motion.div>

                    {/* Moving Circle Head */}
                    <motion.div
                        className="absolute top-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white border-4 border-[#F43C52] rounded-full shadow-lg"
                        initial={{ left: "0%" }}
                        animate={{
                            left: isInView
                                ? `${(progressIndex / (events.length - 1)) * 100}%`
                                : "0%",
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ transform: "translate(-50%, -50%)" }}
                    >
                        {/* Pulse animation */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-[#F43C52]"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Events */}
                <div className="relative flex w-full justify-between px-2 sm:px-4">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {/* Timeline Node */}
                            <motion.div
                                className={`relative z-10 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${index <= progressIndex
                                        ? "bg-gradient-to-br from-[#BE2727] to-[#F96604] shadow-lg shadow-red-500/30"
                                        : "bg-white border-4 border-gray-200"
                                    }`}
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {index <= progressIndex ? (
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300" />
                                )}
                            </motion.div>

                            {/* Event Card */}
                            <motion.div
                                className={`mt-4 sm:mt-6 text-center max-w-[80px] sm:max-w-[120px] lg:max-w-[150px] p-2 sm:p-3 rounded-xl transition-all duration-300 ${index <= progressIndex
                                        ? "bg-gradient-to-br from-[#BE2727]/5 to-[#F96604]/5"
                                        : "bg-transparent hover:bg-gray-50"
                                    }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                            >
                                <p className={`text-[9px] sm:text-xs lg:text-sm font-bold mb-1 ${index <= progressIndex
                                        ? "bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent"
                                        : "text-gray-700"
                                    }`}>
                                    {event.date}
                                </p>
                                <p className={`text-[8px] sm:text-xs lg:text-sm font-medium leading-tight ${index <= progressIndex ? "text-gray-800" : "text-gray-500"
                                    }`}>
                                    {event.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Timeline;
