"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Back to top"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BE2727] to-[#F96604] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                    {/* Button */}
                    <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#BE2727] to-[#F96604] rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <svg
                            className="w-5 h-5 text-white transform group-hover:-translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
