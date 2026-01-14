"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allProjects, Project } from "@/app/data/projects";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCode,
  FaRocket,
  FaFilter,
  FaSearch,
  FaTimes,
  FaEye,
  FaLayerGroup,
  FaPalette,
  FaMobileAlt,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaVideo,
  FaImage
} from "react-icons/fa";

type ProjectsProps = {
  preview?: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ preview }) => {
  // Add default values for optional properties
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: "all", label: "All Projects", icon: <FaLayerGroup />, count: projects.length },
    { id: "featured", label: "Featured", icon: <FaStar />, count: projects.filter(p => p.featured).length },
    { id: "web", label: "Web Apps", icon: <FaGlobe />, count: projects.filter(p => p.category === "web").length },
    { id: "mobile", label: "Mobile", icon: <FaMobileAlt />, count: projects.filter(p => p.category === "mobile").length },
    { id: "fullstack", label: "Full Stack", icon: <FaCode />, count: projects.filter(p => p.category === "fullstack").length },
    { id: "design", label: "Design", icon: <FaPalette />, count: projects.filter(p => p.category === "design").length },
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

  // Auto-rotate featured projects
  useEffect(() => {
    if (!isPlaying || !isModalOpen || !selectedProject?.gallery) return;

    const interval = setInterval(() => {
      if (selectedProject?.gallery && selectedProject.gallery.length > 1) {
        setCurrentSlide((prev) => (prev + 1) % selectedProject.gallery!.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, isModalOpen, selectedProject]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject({
      ...project,
      gallery: project.gallery || [project.img]
    });
    setIsModalOpen(true);
    setCurrentSlide(0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentSlide(0);
    }, 300);
  };

  const handleNextSlide = () => {
    if (selectedProject?.gallery && selectedProject.gallery.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.gallery!.length);
    }
  };

  const handlePrevSlide = () => {
    if (selectedProject?.gallery && selectedProject.gallery.length > 1) {
      setCurrentSlide((prev) => (prev - 1 + selectedProject.gallery!.length) % selectedProject.gallery!.length);
    }
  };

  const projectsToShow = preview ? filteredProjects.slice(0, 3) : filteredProjects;

  // Calculate unique technologies count
  const uniqueTechCount = Array.from(
    new Set(projects.flatMap(p => p.techStack || []))
  ).length;

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden " // bg-gradient-to-br from-black via-gray-900 to-black
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,238,255,0.15)_0%,transparent_50%)]"></div> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(0,150,255,0.1)_0%,transparent_50%)]"></div> */}

        {/* Floating Project Elements */}
        {["</>", "npm start", "git push", "yarn build", "deploy", "responsive", "API"].map((text, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.3, 0] }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute text-xs text-cyan-400/30 font-mono"
            style={{
              left: `${(i * 25) % 100}%`,
              top: `${(i * 20) % 100}%`,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Interactive Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div> */}
      </div>

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
              Portfolio Showcase
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing modern web development and design
          </p>
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            {/* Search Bar */}
            <div className="relative w-full lg:w-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-full transition-all ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{filter.icon}</span>
                <span className="font-medium">{filter.label}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  activeFilter === filter.id 
                    ? "bg-white/20" 
                    : "bg-black/30"
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "flex flex-col gap-8"
          }`}
        >
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Card Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Project Card */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <FaEye className="text-white" />
                      <span className="text-white text-sm">{project.views}</span>
                      <FaStar className="text-yellow-400 ml-2" />
                      <span className="text-white text-sm">{project.likes}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "completed" 
                        ? "bg-green-500/20 text-green-400" 
                        : project.status === "in-progress"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {project.status === "in-progress" ? "In Progress" : project.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                        <FaStar className="text-xs" /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tags || []).slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {(project.tags || []).length > 3 && (
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                        +{(project.tags || []).length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        project.status === "completed" 
                          ? "bg-green-500" 
                          : project.status === "in-progress"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}></span>
                      <span className="capitalize">{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                    className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20"
                  >
                    <FaExpand />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">No Projects Found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </motion.div>
        )}

        {/* View All Button */}
        {preview && projectsToShow.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>View All Projects</span>
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}

        {/* Stats */}
        {!preview && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Projects", value: projects.length, icon: <FaCode />, color: "from-cyan-500 to-blue-500" },
                { label: "Featured", value: projects.filter(p => p.featured).length, icon: <FaStar />, color: "from-yellow-500 to-orange-500" },
                { label: "Technologies", value: uniqueTechCount, icon: <FaLayerGroup />, color: "from-purple-500 to-pink-500" },
                { label: "Total Views", value: projects.reduce((sum, p) => sum + (p.views || 0), 0), icon: <FaEye />, color: "from-green-500 to-emerald-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <div className="text-white text-2xl">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}+</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                    <FaRocket className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {selectedProject.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        selectedProject.status === "completed" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {selectedProject.status === "in-progress" ? "In Progress" : selectedProject.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCloseModal}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Gallery */}
                  <div className="space-y-4">
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                      <img
                        src={selectedProject.gallery?.[currentSlide] || selectedProject.img}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gallery Controls */}
                      {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                        <>
                          <div className="absolute inset-0 flex items-center justify-between p-4">
                            <button
                              onClick={handlePrevSlide}
                              className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <FaChevronLeft className="text-white" />
                            </button>
                            <button
                              onClick={handleNextSlide}
                              className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <FaChevronRight className="text-white" />
                            </button>
                          </div>
                          
                          {/* Play/Pause */}
                          <div className="absolute bottom-4 right-4">
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                            >
                              {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                          </div>
                          
                          {/* Slide Indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {(selectedProject.gallery || []).map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  idx === currentSlide 
                                    ? "bg-cyan-400 w-6" 
                                    : "bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnails */}
                    {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {selectedProject.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              idx === currentSlide 
                                ? "border-cyan-500" 
                                : "border-transparent"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Gallery ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Description</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {(selectedProject.techStack || ["React", "JavaScript", "CSS"]).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-cyan-400 text-2xl font-bold mb-1">
                          {selectedProject.views}
                        </div>
                        <div className="text-gray-400 text-sm">Views</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-cyan-400 text-2xl font-bold mb-1">
                          {selectedProject.likes}
                        </div>
                        <div className="text-gray-400 text-sm">Likes</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    </div>
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

export default Projects;