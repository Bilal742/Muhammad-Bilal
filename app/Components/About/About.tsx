"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaReact,
  FaPalette,
  FaRocket,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaSmile,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const AboutComponent = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", level: 95, color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS", level: 95, color: "#1572B6" },
    { icon: <FaCode />, name: "JavaScript", level: 96, color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", level: 90, color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 60, color: "#000000" },
    { icon: <SiTypescript />, name: "TypeScript", level: 60, color: "#3178C6" },
    { icon: <SiTailwindcss />, name: "Tailwind", level: 80, color: "#06B6D4" },
  ];

  const achievements = [
    { number: "2+", label: "Years Experience", icon: <FaRocket /> },
    { number: "5", label: "Major Projects", icon: <FaCode /> },
    { number: "80+", label: "Mini Projects", icon: <FaPalette /> },
    // { number: "100%", label: "Client Satisfaction", icon: <FaSmile /> },
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

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm uppercase">
              Introduction
            </span>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">About </span>
            <span className="text-blue-600">
              Me
            </span>
          </h1>
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
            {/* <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
                <p className="text-xl text-gray-700 italic mb-4">
                  "I believe that great code is like poetry—it should be elegant, efficient, 
                  and tell a story that computers and humans can both understand."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Muhammad Bilal</h4>
                    <p className="text-gray-600 text-sm">Frontend Developer</p>
                  </div>
                  <FaQuoteRight className="text-blue-500" />
                </div>
              </div>
            </div> */}

            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                My Journey
              </h3>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Hi, I'm <span className="text-blue-600 font-semibold">Bilal</span>,
                  — a Frontend Developer focused on creating clean, responsive, and user-friendly web applications.
                </p>

                <p className="leading-relaxed">
                  I specialize in modern frontend technologies including{" "}
                  <span className="text-blue-600">React</span>,{" "}
                  <span className="text-blue-600">Next.js</span>,{" "}
                  <span className="text-blue-600">TypeScript</span>, and{" "}
                  <span className="text-blue-600">Tailwind CSS</span>.
                  I believe in writing clean, maintainable code and creating
                  pixel-perfect user interfaces.
                </p>

                <p className="leading-relaxed">
                  I started my web development journey in <span className="text-blue-600 font-semibold">2024</span>
                  with zero knowledge but a huge passion for coding. Through consistent practice and learning,
                  I grew from basic <span className="text-blue-600">HTML & CSS</span> to <span className="text-blue-600">JavaScript</span>,
                  then <span className="text-blue-600">React Tailwind CSS Next.js & TypeScript</span>, and now exploring
                  <span className="text-blue-600"> Node.js, Express.js, MongoDB</span>.
                </p>

                <p className="leading-relaxed">
                  I believe in building real projects and continuously improving my skills
                  through challenges and experimentation.
                </p>

                <p className="leading-relaxed">
                  My goal is to evolve into a{" "}
                  <span className="text-blue-600 font-semibold">Full-Stack Developer</span>,
                  mastering both frontend and backend technologies to build complete,
                  scalable solutions.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
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
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center group hover:border-blue-500 transition-all duration-300 shadow-sm"
                >
                  <div className="text-blue-600 text-2xl mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills Progress */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Tech Stack
              </h3>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="text-gray-900 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Grid */}
            {/* <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`bg-white border rounded-xl p-4 transition-all duration-300 cursor-pointer shadow-sm ${
                    activeCard === index 
                      ? 'border-blue-500 shadow-md' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="text-gray-900 font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div> */}
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Currently <span className="text-blue-600">Learning</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expanding my skillset to become a better developer every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Node.js", color: "bg-green-100", level: "Beginner" },
              { name: "Express.js", color: "bg-green-100", level: "Beginner" },
              { name: "MongoDB", color: "bg-green-100", level: "Beginner" },
              // { name: "AWS", color: "bg-orange-100", level: "Beginner" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center group hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-gray-900 text-xl font-bold mx-auto mb-4`}>
                  {tech.name.charAt(0)}
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">{tech.name}</h4>
                <span className="text-sm text-gray-600">{tech.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;