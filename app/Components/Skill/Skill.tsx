"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaFire, FaBolt, FaRocket, FaChartLine,
  FaChevronLeft, FaChevronRight, FaPlay,
  FaPause, FaExpand, FaCompress
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiNodedotjs,
  SiExpress, SiTypescript, SiNextdotjs,
  SiRedux, SiGraphql, SiDocker, SiGit,
  SiJest, SiWebpack, SiVite, SiFigma,
  SiPostman, SiVercel, SiFirebase, SiPrisma
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "frontend",
      level: 92,
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
      level: 88,
      color: "#F7DF1E",
      description: "ES6+, modern APIs, async programming, design patterns",
      experience: "2.5+ years",
      projects: 40
    },
    {
      id: 4,
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "frontend",
      level: 30,
      color: "#3178C6",
      description: "Type safety, interfaces, generics, advanced types",
      experience: "1.5+ years",
      projects: 25
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
      id: 6,
      name: "Next.js",
      icon: <SiNextdotjs />,
      category: "frontend",
      level: 35,
      color: "#000000",
      description: "App Router, SSR, ISR, API routes, optimization",
      experience: "1.5+ years",
      projects: 20
    },
    {
      id: 7,
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "frontend",
      level: 85,
      color: "#06B6D4",
      description: "Utility-first, responsive design, custom configurations",
      experience: "2+ years",
      projects: 40
    },
    // {
    //   id: 8,
    //   name: "Redux",
    //   icon: <SiRedux />,
    //   category: "frontend",
    //   level: 82,
    //   color: "#764ABC",
    //   description: "State management, Redux Toolkit, async thunks",
    //   experience: "1.5+ years",
    //   projects: 15
    // },
    {
      id: 9,
      name: "Node.js",
      icon: <SiNodedotjs />,
      category: "backend",
      level: 20,
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
      level: 30,
      color: "#47A248",
      description: "NoSQL databases, aggregation, indexing, Mongoose ODM",
      experience: "1+ year",
      projects: 8
    },
    // {
    //   id: 12,
    //   name: "GraphQL",
    //   icon: <SiGraphql />,
    //   category: "backend",
    //   level: 70,
    //   color: "#E10098",
    //   description: "Queries, mutations, schema design, Apollo Client",
    //   experience: "6+ months",
    //   projects: 5
    // },
    {
      id: 13,
      name: "Git",
      icon: <SiGit />,
      category: "tools",
      level: 88,
      color: "#F05032",
      description: "Version control, branching strategies, GitHub workflows",
      experience: "2+ years",
      projects: "All"
    },
    // {
    //   id: 14,
    //   name: "Docker",
    //   icon: <SiDocker />,
    //   category: "tools",
    //   level: 65,
    //   color: "#2496ED",
    //   description: "Containerization, Dockerfiles, Docker Compose",
    //   experience: "6+ months",
    //   projects: 3
    // },
    // {
    //   id: 15,
    //   name: "Jest",
    //   icon: <SiJest />,
    //   category: "tools",
    //   level: 72,
    //   color: "#C21325",
    //   description: "Unit testing, integration testing, React Testing Library",
    //   experience: "1+ year",
    //   projects: 12
    // },
    // {
    //   id: 16,
    //   name: "Three.js",
    //   icon: <TbBrandThreejs />,
    //   category: "learning",
    //   level: 60,
    //   color: "#000000",
    //   description: "3D graphics, WebGL, animations, 3D modeling",
    //   experience: "3+ months",
    //   projects: 2
    // }
  ];

  const categories = [
    { id: "all", name: "All Skills", icon: <FaBolt />, count: skills.length },
    { id: "frontend", name: "Frontend", icon: <FaReact />, count: skills.filter(s => s.category === "frontend").length },
    { id: "backend", name: "Backend", icon: <SiNodedotjs />, count: skills.filter(s => s.category === "backend").length },
    { id: "tools", name: "Tools", icon: <SiGit />, count: skills.filter(s => s.category === "tools").length },
    { id: "learning", name: "Learning", icon: <FaChartLine />, count: skills.filter(s => s.category === "learning").length },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Auto-rotate featured skills
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, filteredSkills.length]);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsExpanded(true);
  };

  const handleCloseDetail = () => {
    setIsExpanded(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredSkills.length) % filteredSkills.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSkills.length);
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    if (level >= 60) return "Beginner";
    return "Learning";
  };

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative min-h-screen py-20 overflow-hidden"// bg-gradient-to-br from-black via-gray-900 to-black
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,238,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,0,0.05)_0%,transparent_50%)]"></div> */}

        {/* Floating Code */}
        {["<div>", "function()", "const", "export", "import", "return", "async", "await"].map((code, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.2, 0] }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute text-xs text-gray-500 font-mono"
            style={{
              left: `${(i * 20) % 100}%`,
              top: `${(i * 30) % 100}%`,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 font-semibold tracking-widest text-sm uppercase">
              Technical Expertise
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering modern tools and frameworks to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
            >
              <span>{category.icon}</span>
              <span className="font-semibold">{category.name}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${activeCategory === category.id
                ? "bg-white/20"
                : "bg-black/30"
                }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => handleSkillClick(skill)}
              className="relative group cursor-pointer"
            >
              {/* Card Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Skill Card */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center group-hover:border-cyan-500/50 transition-all duration-300">
                {/* Skill Icon */}
                <div
                  className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-white font-semibold text-center mb-2">
                  {skill.name}
                </h3>

                {/* Skill Level */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-xs text-gray-400">
                    {getSkillLevelText(skill.level)}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  />
                </div>

                {/* Level Percentage */}
                <div className="absolute top-3 right-3 text-xs font-bold text-gray-400">
                  {skill.level}%
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Skills Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="text-cyan-400">Featured</span> Skills
              </h3>
              <p className="text-gray-400">
                Top technologies I use daily
              </p>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </motion.button>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <FaChevronLeft />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <FaChevronRight />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative h-64">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: index === currentIndex ? 1 : 0.8,
                  opacity: index === currentIndex ? 1 : 0.3,
                  x: `${(index - currentIndex) * 120}%`,
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-1/2 w-64 h-64 -translate-x-1/2 cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative w-full h-full">
                  {/* Glow Effect */}
                  {index === currentIndex && (
                    <div
                      className="absolute -inset-4 rounded-2xl blur-xl opacity-30"
                      style={{ backgroundColor: skill.color }}
                    />
                  )}

                  {/* Skill Card */}
                  <div
                    className={`relative w-full h-full bg-black/80 backdrop-blur-sm border rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 ${index === currentIndex
                      ? 'border-cyan-500/50 shadow-2xl'
                      : 'border-white/10'
                      }`}
                    style={{
                      boxShadow: index === currentIndex
                        ? `0 0 40px ${skill.color}40`
                        : 'none'
                    }}
                  >
                    <div
                      className="text-6xl mb-4"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-400 text-center">
                      {skill.experience} experience
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-cyan-400 text-4xl font-bold mb-2">
                {skills.length}+
              </div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-4xl font-bold mb-2">
                20+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-4xl font-bold mb-2">
                95%
              </div>
              <div className="text-gray-300">Frontend Mastery</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleCloseDetail}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="p-8 border-b border-white/10"
                style={{
                  background: `linear-gradient(90deg, ${selectedSkill.color}10, ${selectedSkill.color}05)`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div
                      className="text-6xl"
                      style={{ color: selectedSkill.color }}
                    >
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedSkill.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {selectedSkill.category}
                        </span>
                        <span className="text-gray-400">
                          {selectedSkill.experience} experience
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseDetail}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <FaCompress />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Description
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Proficiency</span>
                        <span className="font-bold text-white">{selectedSkill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedSkill.level}%` }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: selectedSkill.color }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-cyan-400 text-2xl font-bold mb-1">
                          {selectedSkill.projects}
                        </div>
                        <div className="text-gray-400 text-sm">Projects</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-cyan-400 text-2xl font-bold mb-1">
                          {getSkillLevelText(selectedSkill.level)}
                        </div>
                        <div className="text-gray-400 text-sm">Level</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Skills */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Related Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills
                      .filter(s => s.category === selectedSkill.category && s.id !== selectedSkill.id)
                      .slice(0, 5)
                      .map(skill => (
                        <span
                          key={skill.id}
                          className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedSkill(skill);
                            setCurrentIndex(skills.findIndex(s => s.id === skill.id));
                          }}
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;