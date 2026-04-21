"use client";

import { useState, useEffect } from "react";
import {
  FaGithub, FaLinkedin, FaInstagram, FaEnvelope,
  FaArrowUp, FaHeart, FaCode
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Bilal742", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/muhaammad-bilal/", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/hey_bilal3/", label: "Instagram" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/", label: "LeetCode" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Resume", href: "/Muhammad-Bilal.pdf" },
  ];

  return (
    <footer className="bg-white text-black pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FaCode className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bilal</h3>
                <p className="text-sm">Frontend Developer</p>
              </div>
            </div>

            <p className=" text-sm mb-6">
              Crafting exceptional digital experiences with modern web technologies.
            </p>

            <a
              href="mailto:bilalusman1291@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#155DFC] rounded-lg text-sm text-white transition-colors"
            >
              <FaEnvelope className="text-white-500" />
              bilalusman1291@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#155DFC] text-white hover:bg-blue rounded-lg transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm">
            © {currentYear} Muhammad Bilal. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-sm">
            Made with <FaHeart className="text-red-500 mx-1" /> by Bilal
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}