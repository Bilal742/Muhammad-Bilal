import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const tech = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, border: "hover:border-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, border: "hover:border-blue-500" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, border: "hover:border-yellow-400" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, border: "hover:border-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, border: "hover:border-sky-400" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, border: "hover:border-yellow-500" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, border: "hover:border-green-500" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, border: "hover:border-green-600" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, border: "hover:border-gray-300" },
  ];

  return (
    <section className="text-white py-16 px-4 sm:px-10 md:px-20">
      {/* Heading Center */}
      <motion.h2
        className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 uppercase text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My <span className="text-[#00EEFF]">Skills</span>
      </motion.h2>

      {/* Grid Centered */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tech.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 cursor-pointer border-2 ${item.border} hover:scale-105`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }} // ek ek karke stagger
            viewport={{ once: true }}
          >
            <div className="text-4xl sm:text-5xl md:text-5xl mb-2 sm:mb-3">{item.icon}</div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-center">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
