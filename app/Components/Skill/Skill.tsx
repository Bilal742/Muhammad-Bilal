"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaBolt, FaChartLine
} from "react-icons/fa";

import {
  SiTailwindcss, SiMongodb, SiNodedotjs,
  SiExpress, SiTypescript, SiNextdotjs,
  SiGit
} from "react-icons/si";

type Skill = {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "tools" | "learning";
  level: number;
  color: string;
  description: string;
  experience: string;
  projects: number | string;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      id: 1,
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "frontend",
      level: 95,
      color: "#E34F26",
      description: "Semantic markup, accessibility, modern HTML5 APIs",
      experience: "3+ years",
      projects: 50
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt />,
      category: "frontend",
      level: 95,
      color: "#1572B6",
      description: "Advanced animations, Flexbox, Grid, custom properties",
      experience: "3+ years",
      projects: 45
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs />,
      category: "frontend",
      level: 96,
      color: "#F7DF1E",
      description: "ES6+, modern APIs, async programming, design patterns",
      experience: "2.5+ years",
      projects: 40
    },
    {
      id: 5,
      name: "React",
      icon: <FaReact />,
      category: "frontend",
      level: 90,
      color: "#61DAFB",
      description: "Hooks, Context API, custom hooks, performance optimization",
      experience: "2+ years",
      projects: 35
    },
    {
      id: 7,
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "frontend",
      level: 80,
      color: "#06B6D4",
      description: "Utility-first, responsive design, custom configurations",
      experience: "2+ years",
      projects: 40
    },
    {
      id: 6,
      name: "Next.js",
      icon: <SiNextdotjs />,
      category: "frontend",
      level: 60,
      color: "#000000",
      description: "App Router, SSR, ISR, API routes, optimization",
      experience: "1.5+ years",
      projects: 20
    },
    {
      id: 4,
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "frontend",
      level: 60,
      color: "#3178C6",
      description: "Type safety, interfaces, generics, advanced types",
      experience: "1.5+ years",
      projects: 25
    },
    {
      id: 9,
      name: "Node.js",
      icon: <SiNodedotjs />,
      category: "backend",
      level: 10,
      color: "#339933",
      description: "REST APIs, Express, middleware, file handling",
      experience: "1+ year",
      projects: 12
    },
    {
      id: 10,
      name: "Express.js",
      icon: <SiExpress />,
      category: "backend",
      level: 20,
      color: "#000000",
      description: "Server setup, routing, middleware, error handling",
      experience: "1+ year",
      projects: 10
    },
    {
      id: 11,
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "backend",
      level: 20,
      color: "#47A248",
      description: "NoSQL databases, aggregation, indexing, Mongoose ODM",
      experience: "1+ year",
      projects: 8
    },
    {
      id: 13,
      name: "Git",
      icon: <SiGit />,
      category: "tools",
      level: 80,
      color: "#F05032",
      description: "Version control, branching strategies, GitHub workflows",
      experience: "2+ years",
      projects: "All"
    },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    if (level >= 60) return "Beginner";
    return "Learning";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tech Stack
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Using modern tools and frameworks to create amazing web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSkillClick(skill)}
              className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:border-blue-500 cursor-pointer hover:shadow-sm transition-all"
            >
              <div
                className="text-3xl mb-2"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3 className="font-semibold text-gray-900 mb-1">
                {skill.name}
              </h3>

              <div className="text-sm text-gray-600 mb-3">
                {getSkillLevelText(skill.level)}
              </div>

              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              <div className="text-xs text-gray-500 mt-1">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;