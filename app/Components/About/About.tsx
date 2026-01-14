"use client";

import { motion } from "framer-motion";
import Particles from "../Home/Particles"; 

import { useState, useEffect, useRef } from "react";
import { 
  FaCode, 
  FaReact, 
  FaPalette, 
  FaRocket,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const AboutComponent = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: <FaReact />, name: "React", level: 90, color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 85, color: "#000000" },
    { icon: <SiTypescript />, name: "TypeScript", level: 50, color: "#3178C6" },
    { icon: <SiTailwindcss />, name: "Tailwind", level: 80, color: "#06B6D4" },
    { icon: <FaCode />, name: "JavaScript", level: 96, color: "#F7DF1E" },
  ];

  const achievements = [
    { number: "2+", label: "Years Experience", icon: <FaRocket /> },
    { number: "20+", label: "Projects Built", icon: <FaCode /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaPalette /> },
  ];

  const values = [
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code.",
      icon: "💻"
    },
    {
      title: "Pixel Perfect",
      description: "Attention to detail in every design implementation.",
      icon: "🎨"
    },
    {
      title: "Fast Performance",
      description: "Optimized solutions for lightning-fast user experiences.",
      icon: "⚡"
    },
    {
      title: "Continuous Learning",
      description: "Always staying updated with the latest technologies.",
      icon: "📚"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"> */}
        {/* <Particles /> */}
      {/* </div> */}
       {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <Particles />
      </div> */}
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,238,255,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,150,255,0.1)_0%,transparent_50%)]"></div>
         */}
        {/* Floating Tech Icons */}
        {["</>", "{ }", "() =>", "div", "CSS", "API"].map((text, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-xs text-cyan-400/30 font-mono"
            style={{
              left: `${(i * 15) % 90}%`,
              top: `${(i * 20) % 100}%`,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Interactive Glow Effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,238,255,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.2s ease-out',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 font-semibold tracking-widest text-sm uppercase">
              Introduction
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          {/* <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that matter
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <FaQuoteLeft className="text-cyan-400 text-2xl mb-4" />
                <p className="text-xl text-gray-300 italic mb-4">
                  "I believe that great code is like poetry—it should be elegant, efficient, 
                  and tell a story that computers and humans can both understand."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">Muhammad Bilal</h4>
                    <p className="text-gray-400 text-sm">Frontend Developer</p>
                  </div>
                  <FaQuoteRight className="text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                 Hi,  I’m <span className="text-cyan-400 font-semibold">Bilal</span>, 
                 — a Frontend Developer focused on creating clean, responsive, and user-friendly web applications.
                </p>
                
                <p className="leading-relaxed">
                  I specialize in modern frontend technologies including{" "}
                  <span className="text-cyan-400">React</span>,{" "}
                  <span className="text-cyan-400">Next.js</span>,{" "}
                  <span className="text-cyan-400">TypeScript</span>, and{" "}
                  <span className="text-cyan-400">Tailwind CSS</span>.
                  I believe in writing clean, maintainable code and creating 
                  pixel-perfect user interfaces.
                </p>

                <p className="leading-relaxed">
                  My goal is to evolve into a{" "}
                  <span className="text-cyan-400 font-semibold">Full-Stack Developer</span>, 
                  mastering both frontend and backend technologies to build complete, 
                  scalable solutions.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
              >
                Let's Work Together
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-cyan-400 text-2xl mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{item.number}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills Progress */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Technical Skills
              </h3>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`bg-black/50 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                    activeCard === index 
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Currently <span className="text-cyan-400">Learning</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expanding my skillset to become a better developer every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Node.js", color: "bg-green-500", level: "Intermediate" },
              { name: "MongoDB", color: "bg-green-600", level: "Intermediate" },
              { name: "GraphQL", color: "bg-pink-600", level: "Beginner" },
              { name: "AWS", color: "bg-orange-500", level: "Beginner" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                  {tech.name.charAt(0)}
                </div>
                <h4 className="text-white font-semibold mb-2">{tech.name}</h4>
                <span className="text-sm text-gray-400">{tech.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-2 h-2 bg-cyan-400/50 rounded-full"
          style={{
            left: `${(i * 25) % 90}%`,
            top: `${20 + (i * 15) % 60}%`,
          }}
        />
      ))}
    </section>
  );
};

export default AboutComponent;