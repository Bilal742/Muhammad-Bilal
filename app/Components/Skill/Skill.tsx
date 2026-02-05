"use client";

import { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaBolt, FaRocket, FaChartLine
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

  const categories = [
    { id: "all", name: "All Skills", icon: <FaBolt />, count: skills.length },
    { id: "frontend", name: "Frontend", icon: <FaReact />, count: skills.filter(s => s.category === "frontend").length },
    { id: "backend", name: "Backend", icon: <SiNodedotjs />, count: skills.filter(s => s.category === "backend").length },
    { id: "tools", name: "Tools", icon: <SiGit />, count: skills.filter(s => s.category === "tools").length },
    { id: "learning", name: "Learning", icon: <FaChartLine />, count: 0 },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseDetail = () => {
    setSelectedSkill(null);
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tech Stack
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Using modern tools and frameworks to create amazing web applications.
          </p>
        </div>

        {/* Categories Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 text-xs rounded ${activeCategory === category.id
                ? "bg-white/20"
                : "bg-gray-100"
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div> */}

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
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
                <div
                  className="h-full rounded-full"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        {/* <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-blue-600 text-2xl font-bold mb-1">
                {skills.length}
              </div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-blue-600 text-2xl font-bold mb-1">
                20+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-blue-600 text-2xl font-bold mb-1">
                95%
              </div>
              <div className="text-gray-600">Frontend Mastery</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Skill Detail Modal */}
      {/* {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={handleCloseDetail}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-6"
              style={{ backgroundColor: `${selectedSkill.color}10` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="text-4xl"
                    style={{ color: selectedSkill.color }}
                  >
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedSkill.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {selectedSkill.category}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {selectedSkill.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseDetail}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Description
                </h4>
                <p className="text-gray-700">
                  {selectedSkill.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Proficiency</span>
                    <span className="font-bold text-gray-900">{selectedSkill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${selectedSkill.level}%`, backgroundColor: selectedSkill.color }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-blue-600 font-bold mb-1">
                      {selectedSkill.projects}
                    </div>
                    <div className="text-gray-600 text-sm">Projects</div>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <div className="text-blue-600 font-bold mb-1">
                      {getSkillLevelText(selectedSkill.level)}
                    </div>
                    <div className="text-gray-600 text-sm">Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Skills;