"use client"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Snowfall from "react-snowfall";

export default function Footer() {
  return (
    <footer className="text-gray-300 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
       {/* <Snowfall /> */}

        <p className="text-sm">
          © {new Date().getFullYear()} Bilal. All rights reserved.
        </p>

        <div className="flex space-x-6 text-1x1">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
 
        <div className="flex space-x-5 text-lg">
          <a href="https://github.com/Bilal742" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
