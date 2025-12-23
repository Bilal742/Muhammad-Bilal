"use client";

import { allProjects } from "@/app/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectsProps = {
  preview?: boolean; 
};

const Projects: React.FC<ProjectsProps> = ({ preview }) => {
  const projectsToShow = preview ? allProjects.slice(0, 3) : allProjects;

  return (
    <section id="projects" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">
          My <span className="text-[#00EEFF]">Projects</span>
        </h2>

        <div className="flex flex-col gap-12">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center rounded-xl overflow-hidden shadow-lg shadow-[#00EEFF]/20 hover:shadow-[#00EEFF]/40 transition-all duration-300 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-full object-cover brightness-90 hover:brightness-100 transition duration-300"
                />
              </div>

              <div className="p-6 sm:p-8 lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#ccc] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#00EEFF] text-black font-bold rounded-lg hover:brightness-90 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-[#00EEFF] text-[#00EEFF] font-bold rounded-lg hover:bg-[#00EEFF]/10 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="px-8 py-3 bg-[#00EEFF] text-black font-bold rounded-lg hover:brightness-90 transition"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
