"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import iccsailogo from "@/assets/logo/iccsailogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
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

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Registration", href: "#", comingSoon: true },
    { name: "Guidelines", href: "/guidelines", active: true },
    { name: "ICCSAI-2025", href: "https://ieeexplore.ieee.org/xpl/conhome/11063690/proceeding", external: true },
    { name: "Schedule", href: "#", comingSoon: true },
  ];

  const committeeLinks = [
    { name: "Members", href: "/committee/members", active: true },
    { name: "Speakers", href: "#", comingSoon: true },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
      ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
      : "bg-white/80 backdrop-blur-sm"
      }`}>

      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="group">
            <div className="bg-gradient-to-r from-[#BE2727] to-[#F96604] p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
              <div className="relative w-[150px] h-[36px] sm:w-[180px] sm:h-[40px] md:w-[200px] md:h-[45px] lg:w-[225px] lg:h-[50px]">
                <Image
                  src={iccsailogo}
                  alt="ICCSAI Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Hamburger Icon for Mobile and Tablets */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-gray-800 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile and Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={closeMenu}
              />

              {/* Menu Panel */}
              <motion.div
                ref={mobileNavRef}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lg:hidden fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl overflow-y-auto"
              >
                {/* Close button inside panel */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={closeMenu}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                <ul className="flex flex-col gap-2 px-6 pb-8">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.comingSoon ? (
                        <div className="flex items-center gap-3 py-3 px-4 text-gray-400 rounded-lg">
                          <span className="text-lg font-medium">{link.name}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Soon</span>
                        </div>
                      ) : link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenu}
                          className="flex items-center gap-2 py-3 px-4 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <span className="text-lg font-medium">{link.name}</span>
                          <ExternalLink size={16} className="text-gray-400" />
                        </a>
                      ) : (
                        <Link href={link.href} onClick={closeMenu}>
                          <div className="py-3 px-4 text-gray-800 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            {link.name}
                          </div>
                        </Link>
                      )}
                    </motion.li>
                  ))}

                  {/* Committee Dropdown Mobile */}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full flex items-center justify-between py-3 px-4 text-gray-800 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      Committee
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 text-gray-400 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 overflow-hidden border-l-2 border-gray-100 pl-2"
                        >
                          {committeeLinks.map((subLink) => (
                            <div key={subLink.name}>
                              {subLink.comingSoon ? (
                                <div className="flex items-center gap-2 py-2 px-4 text-gray-400 rounded-lg">
                                  <span className="font-medium">{subLink.name}</span>
                                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Soon</span>
                                </div>
                              ) : (
                                <Link href={subLink.href} onClick={closeMenu}>
                                  <div className="py-2 px-4 text-gray-700 font-medium hover:text-[#BE2727] transition-colors duration-200">
                                    {subLink.name}
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                </ul>

                {/* Submit Button in Mobile Menu */}
                <div className="px-6 pb-8">
                  <button
                    className="w-full bg-gradient-to-r from-[#BE2727] to-[#F96604] text-white font-bold rounded-xl px-4 py-3 shadow-lg opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <span className="flex items-center justify-center gap-2">
                      Submit Paper
                      <span className="bg-white/20 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Soon</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:items-center lg:gap-8 2xl:justify-center 2xl:flex-1" // Increased gap
        >
          <ul className="flex flex-row items-center gap-1 xl:gap-2 font-medium"> {/* Ensure items-center */}
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name} className="flex items-center h-full"> {/* Ensure h-full and flex */}
                {link.comingSoon ? (
                  <span className="flex items-center gap-2 px-3 py-2 text-gray-400 cursor-not-allowed text-sm font-semibold select-none">
                    {link.name}
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">Soon</span>
                  </span>
                ) : (
                  <Link href={link.href} className="flex items-center">
                    <span className="px-3 py-2 text-gray-700 hover:text-[#BE2727] transition-colors duration-200 text-sm xl:text-base font-semibold relative group flex items-center">
                      {link.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#BE2727] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                    </span>
                  </Link>
                )}
              </li>
            ))}

            {/* Committee Dropdown */}
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <span className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-[#BE2727] cursor-pointer transition-colors duration-200 text-sm xl:text-base font-semibold group h-full">
                Committee
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 text-gray-400 group-hover:text-[#BE2727] ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#BE2727] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </span>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 z-50 ring-1 ring-black/5"
                  >
                    {committeeLinks.map((subLink) => (
                      <div key={subLink.name}>
                        {subLink.comingSoon ? (
                          <div className="flex items-center justify-between px-4 py-3 text-gray-400 cursor-not-allowed bg-gray-50/50">
                            <span className="text-sm font-medium">{subLink.name}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">Soon</span>
                          </div>
                        ) : (
                          <Link href={subLink.href}>
                            <div className="px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-[#BE2727] transition-all duration-200 flex items-center justify-between group">
                              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">{subLink.name}</span>
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.name} className="flex items-center h-full">
                {link.comingSoon ? (
                  <span className="flex items-center gap-2 px-3 py-2 text-gray-400 cursor-not-allowed text-sm font-semibold select-none">
                    {link.name}
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">Soon</span>
                  </span>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-[#BE2727] transition-colors duration-200 text-sm xl:text-base font-semibold relative group"
                  >
                    {link.name}
                    <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#BE2727] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                  </a>
                ) : (
                  <Link href={link.href} className="flex items-center">
                    <span className="px-3 py-2 text-gray-700 hover:text-[#BE2727] transition-colors duration-200 text-sm xl:text-base font-semibold relative group flex items-center">
                      {link.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#BE2727] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Submit Button Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex"
        >
          <button
            className="relative group bg-gradient-to-r from-[#BE2727] to-[#F96604] text-white font-bold rounded-xl px-6 py-2.5 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 opacity-60 cursor-not-allowed hover:opacity-60 transition-all duration-300 overflow-hidden"
            disabled
          >
            <span className="relative z-10 flex items-center gap-2">
              Submit Paper
              <span className="bg-white/20 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Soon</span>
            </span>
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
