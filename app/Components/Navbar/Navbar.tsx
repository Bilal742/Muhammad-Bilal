"use client";

import React, { useState, useEffect } from "react";
import "@/app/Components/Css/hamburger.css"
type NavLink = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 
      ${scrolled ? "bg-black shadow-md" : "bg-black"}`}
    >
      <div className="px-6 md:px-24 py-6 flex items-center justify-between">

        {/* Logo */}
        <span className="text-xl md:text-2xl uppercase font-bold tracking-[2px] text-white">
          Muhammad Bilal
        </span>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-bold text-white hover:text-[#00EEFF] transition-colors duration-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ✅ EXACT UIVERSE HAMBURGER */}
        <label className="hamburger lg:hidden">
          <input
            type="checkbox"
            checked={mobileOpen}
            onChange={() => setMobileOpen(!mobileOpen)}
          />

          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 
              15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 
              23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path
              className="line"
              d="M7 16 27 16"
            />
          </svg>
        </label>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out bg-black
        ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col items-center space-y-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-white hover:text-[#00EEFF]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
