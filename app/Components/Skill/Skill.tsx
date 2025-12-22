"use client";

import { ReactNode } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: ReactNode;
  border: string;
};
 
const Skills: React.FC = () => {
  const tech: TechItem[] = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, border: "hover:border-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, border: "hover:border-blue-500" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, border: "hover:border-yellow-400" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, border: "hover:border-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, border: "hover:border-sky-400" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, border: "hover:border-green-500" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, border: "hover:border-green-600" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, border: "hover:border-gray-300" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, border: "hover:border-blue-600" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, border: "hover:border-black" },
  ];

  return (
    <section className="text-white py-40 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-12 uppercase text-center">
        My <span className="text-[#00EEFF]">Skills</span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {tech.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 cursor-pointer border-2 ${item.border} hover:scale-105`}
          >
            <div className="text-5xl sm:text-6xl mb-3">{item.icon}</div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
