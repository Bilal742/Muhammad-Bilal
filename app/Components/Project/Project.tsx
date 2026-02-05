"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects, Project } from "@/app/data/projects";

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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            My Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing modern web development
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
              <span className={`px-2 py-0.5 text-xs rounded ${activeFilter === filter.id
                  ? "bg-white/20"
                  : "bg-gray-100"
                }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-colors cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80  hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                      <FaStar className="inline mr-1" />
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tags || []).slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                {/* Stats */}
                {/* <div className="flex items-center justify-between text-sm text-gray-500">
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
                  <span className="capitalize">{project.status}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter
            </p>
          </div>
        )}

        {/* View All Button */}
        {/* {preview && projectsToShow.length > 0 && (
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        )} */}

        {/* Stats */}
        {/* {!preview && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Projects", value: projects.length, icon: <FaCode />, color: "bg-blue-100 text-blue-800" },
                { label: "Featured", value: projects.filter(p => p.featured).length, icon: <FaStar />, color: "bg-yellow-100 text-yellow-800" },
                { label: "Views", value: projects.reduce((sum, p) => sum + (p.views || 0), 0), icon: <FaEye />, color: "bg-green-100 text-green-800" },
                { label: "Tags", value: new Set(projects.flatMap(p => p.tags || [])).size, icon: <FaPalette />, color: "bg-purple-100 text-purple-800" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 text-center"
                >
                  <div className={`inline-flex p-2 rounded-lg ${stat.color} mb-2`}>
                    <div className="text-lg">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
                  {/* <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {selectedProject.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${selectedProject.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                      }`}>
                      {selectedProject.status}
                    </span>
                  </div> */}
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">
                    {selectedProject.description}
                  </p>
                </div>

                {/* <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.techStack || ["React", "JavaScript", "CSS"]).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* Stats */}
                {/* <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded p-4">
                    <div className="text-blue-600 font-bold mb-1">
                      {selectedProject.views}
                    </div>
                    <div className="text-gray-600 text-sm">Views</div>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <div className="text-blue-600 font-bold mb-1">
                      {selectedProject.likes}
                    </div>
                    <div className="text-gray-600 text-sm">Likes</div>
                  </div>
                </div> */}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;