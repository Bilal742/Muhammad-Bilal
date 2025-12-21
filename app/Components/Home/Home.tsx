"use client";

import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <>
      <div className="text-white flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 lg:px-36 font-bold pt-20 md:pt-40 gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-1xl sm:text-3xl md:text-4xl lg:text-[45px] leading-snug sm:leading-normal md:leading-tight">
            Hey, I'm Bilal. <br />
            <span className="text-[#00EEFF]">
              <Typewriter
                words={["I'm a Frontend Developer.", "I'm learning & growing."]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
            <a
              href="https://www.facebook.com/your-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00EEFF] text-xl p-3 border-2 border-[#00EEFF] rounded-full hover:scale-110 transition shadow-lg"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00EEFF] text-xl p-3 border-2 border-[#00EEFF] rounded-full hover:scale-110 transition shadow-lg"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Bilal742"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00EEFF] text-xl p-3 border-2 border-[#00EEFF] rounded-full hover:scale-110 transition shadow-lg"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00EEFF] text-xl p-3 border-2 border-[#00EEFF] rounded-full hover:scale-110 transition shadow-lg"
            >
              <FaInstagram />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <div className="mt-10">
            <a
              href="/Muhammad-Bilal.pdf"
              download
              className="w-[180px] p-3 bg-[#00EEFF] text-black font-bold rounded-lg shadow-lg hover:brightness-90 hover:scale-105 transition flex items-center gap-2 justify-center"
            >
              <FaFileAlt /> Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/Home_Img/Img8.png"
            alt="Bilal Profile"
            className="w-32 sm:w-52 md:w-96 lg:w-[400px]
                       h-32 sm:h-52 md:h-96 lg:h-[500px]
                       object-cover rounded-full
                       border-4 border-[#00EEFF]
                       shadow-[0_0_30px_#00EEFF]"
          />
        </motion.div>
      </div>

      <hr className="h-0.5 mx-4 sm:mx-10 md:mx-20 lg:mx-36 mt-10 border-gray-600" />
    </>
  );
};

export default Home;
