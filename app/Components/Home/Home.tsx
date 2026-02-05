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

const Home: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=61585744792810",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/muhaammad-bilal/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Bilal742",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/your-instagram",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 pt-32 md:pt-40">
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
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
                Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
            >
              <span className="block">I'm Muhammad</span>
              <span className="block mt-2 text-blue-600">
                Bilal
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl text-gray-700"
            >
              <span className="font-medium">Creative </span>
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React Specialist",
                    "Problem Solver",
                    "Continuous Learner",
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

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Turning ideas into elegant, responsive web interfaces using modern tools and thoughtful design.
            </motion.p> */}

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
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 shadow-sm"
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
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
              >
                <FaFileAlt />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow"
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
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[550px] rounded-full overflow-hidden border-8 border-white shadow-xl"
              >
                <img
                  src="/Home_Img/bg4.png"
                  alt="Muhammad Bilal"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg border border-gray-200 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
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
            <span className="text-gray-600 text-sm">Scroll Down</span>
            <FaArrowDown className="text-blue-600 text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;