"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects, Project } from "@/app/data/projects";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCode,
  FaFilter,
  FaSearch,
  FaTimes,
  FaEye,
  FaLayerGroup,
  FaPalette,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

type ProjectsProps = {
  preview?: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ preview }) => {
  const [projects, setProjects] = useState<Project[]>(
    allProjects.map(project => ({
      ...project,
      tags: project.tags || ["React", "JavaScript", "CSS"],
      category: project.category || "web",
      featured: project.featured || false,
      techStack: project.techStack || ["React", "Next.js", "Tailwind CSS"],
      status: project.status || "completed",
      views: project.views || Math.floor(Math.random() * 1000) + 100,
      likes: project.likes || Math.floor(Math.random() * 100) + 10,
      gallery: project.gallery || [project.img]
    }))
  );

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All", icon: <FaLayerGroup />, count: projects.length },
    { id: "featured", label: "Featured", icon: <FaStar />, count: projects.filter(p => p.featured).length },
    { id: "web", label: "Web", icon: <FaGlobe />, count: projects.filter(p => p.category === "web").length },
    { id: "mobile", label: "Mobile", icon: <FaMobileAlt />, count: projects.filter(p => p.category === "mobile").length },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  }).filter(project => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchLower)))
    );
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projectsToShow = preview ? filteredProjects.slice(0, 6) : filteredProjects;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          // variants={headerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A collection of my recent work showcasing modern web development
          </motion.p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          className="mb-8"
          variants={searchVariants}
        >
          <motion.div
            className="relative max-w-md mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <motion.input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            {searchQuery && (
              <motion.button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaTimes />
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {projectsToShow.map((project, index) => (
              <motion.div
                key={project.id}
                // variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                layout
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <motion.div
                  className="h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>

                <motion.div
                  className="p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <motion.h3
                      className="text-lg font-semibold text-gray-900"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    {project.featured && (
                      <motion.span
                        className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium flex items-center gap-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <FaStar className="text-yellow-600" />
                        Featured
                      </motion.span>
                    )}
                  </div>

                  <motion.p
                    className="text-gray-600 text-sm mb-4 line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              🚀
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={handleCloseModal}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              // variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId={`project-${selectedProject.id}`}
            >
              <motion.div
                className="p-6 border-b border-gray-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
                  </motion.div>
                  <motion.button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5
                      }
                    }
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700">
                      {selectedProject.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex gap-4 pt-4"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Source Code
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;