"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import iccsailogo from "@/assets/logo/iccsailogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const mobileNavRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsDropdownOpen1(false);
      }
      if (isOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target) && !event.target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#BE2727] to-[#F96604] sticky top-0 z-50 w-full px-4 py-2 shadow-lg">
      {/* Added container with better width control for larger screens */}
      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl flex justify-between items-center">
        {/* Logo Section - Improved Logo Sizing */}
        <div className="flex items-center">
          <Link href="/#">
            <div className="relative w-[150px] h-[40px] sm:w-[180px] sm:h-[45px] md:w-[200px] md:h-[50px] lg:w-[225px] lg:h-[55px]">
              <Image
                src={iccsailogo}
                alt="ICCSAI Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile and Tablets */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links - Mobile and Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileNavRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed left-0 top-[60px] w-full bg-gradient-to-r from-[#BE2727] to-[#F96604] overflow-y-auto"
            >
              <ul className="flex flex-col gap-6 font-semibold text-center p-8">
                <li>
                  <Link href="/#" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">Home</span>
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 text-lg cursor-not-allowed">Registration (Coming Soon)</span>
                </li>

                {/* Dropdown for Committee */}
                <li className="relative">
                  <div
                    className="text-white text-lg hover:text-gray-200 flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Committee <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} `} />
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full bg-gray-800 text-white rounded-md shadow-lg mt-2 overflow-hidden"
                      >
                        <Link href="/committee/members" onClick={closeMenu}>
                          <div className="px-4 py-3 hover:bg-gray-700">Members</div>
                        </Link>
                        <div className="px-4 py-3 text-gray-400 cursor-not-allowed">Speakers (Coming Soon)</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link href="/guidelines" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">Guidelines</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ieeexplore.ieee.org/xpl/conhome/11063690/proceeding"
                    target="_blank"
                    onClick={closeMenu}
                  >
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">ICCSAI-2025</span>
                  </Link>
                </li>
                <li className="relative">
                  <div
                    className="text-gray-400 text-lg flex items-center justify-center gap-1 cursor-not-allowed"
                  >
                    Schedule (Coming Soon)
                  </div>
                </li>
              </ul>

              {/* Submit Button in Mobile Menu - Disabled */}
              <div className="flex justify-center mt-4 mb-8">
                <button
                  className="w-4/5 bg-gray-500 text-gray-300 font-medium rounded-xl px-4 py-3 cursor-not-allowed opacity-60"
                  disabled
                >
                  Submit (Coming Soon)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar Links for Desktop - Improved spacing for large screens */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 2xl:justify-center 2xl:flex-1">
          <ul className="flex flex-row gap-4 xl:gap-8 2xl:gap-12 font-semibold text-left">
            <Link href="/#">
              <li className="text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap text-base xl:text-lg">Home</li>
            </Link>
            <li className="text-gray-300 cursor-not-allowed whitespace-nowrap text-base xl:text-lg opacity-60">
              Registration (Coming Soon)
            </li>

            {/* Dropdown for Committee */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <span className="text-white hover:text-gray-200 flex items-center gap-1 cursor-pointer transition-colors duration-200 whitespace-nowrap text-base xl:text-lg">
                Committee <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-6 -left-1 mt-2 w-48 bg-gray-200 text-black rounded-md shadow-lg transition-all duration-800 ease-in-out ${isDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
              >
                <Link href="/committee/members">
                  <div className="px-4 py-2 hover:bg-gray-300 rounded-t-md">Members</div>
                </Link>
                <div className="px-4 py-2 text-gray-400 cursor-not-allowed rounded-b-md">Speakers (Coming Soon)</div>
              </div>
            </li>

            <Link href="/guidelines">
              <li className="text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap text-base xl:text-lg">
                Guidelines
              </li>
            </Link>
            <Link
              href="https://ieeexplore.ieee.org/xpl/conhome/11063690/proceeding"
              target="_blank"
            >
              <li className="text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap text-base xl:text-lg">
                ICCSAI-2025
              </li>
            </Link>
            <li className="relative">
              <span className="text-gray-300 flex items-center gap-1 cursor-not-allowed whitespace-nowrap text-base xl:text-lg opacity-60">
                Schedule (Coming Soon)
              </span>
            </li>
          </ul>
        </div>

        {/* Submit Button Desktop - Disabled */}
        <div className="hidden lg:flex">
          <button
            className="bg-gray-500 text-gray-300 font-normal rounded-xl px-4 py-2 xl:px-6 xl:py-3 cursor-not-allowed opacity-60 whitespace-nowrap text-base xl:text-lg"
            disabled
          >
            Submit (Coming Soon)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
