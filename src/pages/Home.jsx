import Img4 from "../assets/img4.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 lg:px-36 font-bold pt-20 md:pt-40 gap-10">

        {/* Text Content with Smooth Transition */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[53px] leading-snug sm:leading-normal md:leading-tight">
            Hey, I'm Bilal. <br />
            <span className="text-[#00EEFF]">
              <Typewriter
                words={["I'm a Web Developer.", "I'm learning & growing."]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </motion.div>

        {/* Image with Smooth Transition */}
        <motion.div
          className="flex justify-center md:justify-end md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div>
            <img
              src={Img4}
              alt="background"
              className="w-32 sm:w-52 md:w-96 lg:w-[400px] 
                         h-32 sm:h-52 md:h-96 lg:h-[500px] 
                         object-cover rounded-full 
                         border-4 border-[#00EEFF] 
                         shadow-[0_0_30px_#00EEFF]"
            />
          </div>
        </motion.div>

      </div>

      <hr className="h-0.5 mx-4 sm:mx-10 md:mx-20 lg:mx-36 mt-10 border-gray-600" />
    </>
  );
}
