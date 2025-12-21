"use client";

import React, { useState, useEffect } from "react";

type NavLink = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 pt-6 pb-6 transition-all duration-700 ${
        scrolled ? "shadow-md bg-[#000000]" : ""
      }`}
    //   [#181E2C]
    >
      <div className="px-6 md:px-24 container mx-auto flex flex-wrap items-center justify-between">
        
        {/* Logo */}
        <span className="text-xl md:text-2xl uppercase font-bold tracking-[2px] text-white">
          Muhammad Bilal
        </span>
 
        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:ml-auto text-base">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mr-6 md:mr-10 font-bold text-white 
                         hover:text-[#00EEFF] 
                         transition-colors duration-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative w-8 h-8 flex flex-col justify-between items-center lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-1 w-8 bg-white rounded transform transition duration-600 ease-in-out 
              ${mobileOpen ? "rotate-45 translate-y-3 bg-[#00EEFF]" : ""}`}
          />
          <span
            className={`block h-1 w-8 bg-white rounded transition duration-600 ease-in-out 
              ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 w-8 bg-white rounded transform transition duration-600 ease-in-out 
              ${mobileOpen ? "-rotate-45 -translate-y-3 bg-[#00EEFF]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#141B2B] transition-all duration-800 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "shadow-md" : ""}`}
      >
        <nav className="flex flex-col items-center justify-center space-y-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-white hover:text-[#00EEFF] transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
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
