"use client";

import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileAlt,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "./Particles";

const Home: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=61585744792810",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/muhaammad-bilal/",
      color: "hover:bg-blue-700",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Bilal742",
      color: "hover:bg-gray-800",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/your-instagram",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <Particles />
      </div> */}

      <div className="relative container mx-auto px-6 lg:px-20 pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm mb-6">
                Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-white">I'm Muhammad</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Bilal
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl text-gray-300"
            >
              <span className="font-medium">Creative </span>
              <span className="text-cyan-400 font-bold">
                <Typewriter
                  words={[
                    "I'm a Frontend Developer",
                    "React Specialist",
                    "I'm learning & growing._",
                    "Problem Solver",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              Turning ideas into elegant, responsive web interfaces using modern tools and thoughtful design.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl text-white transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Muhammad-Bilal.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
              >
                <FaFileAlt />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>

              {/* Profile Image */}
              <motion.div
                whileHover={{ rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[550px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              >
                <img
                  src="/Home_Img/Img8.png"
                  alt="Muhammad Bilal"
                  className="w-full h-full object-cover"
                />

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-2 -right-2 px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full shadow-lg"
                >
                  React
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                  className="absolute -bottom-4 left-1/4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg"
                >
                  Next.js
                </motion.div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm p-4 rounded-2xl border border-cyan-500/30 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-gray-400 text-sm">Scroll Down</span>
            <FaArrowDown className="text-cyan-400 text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;