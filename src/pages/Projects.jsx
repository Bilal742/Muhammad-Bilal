// src/pages/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Smart Power Solution (Practice Project)",
      img: bg,
      link: "https://alive-calendar.surge.sh/",
      category: "Websites",
    },
    {
      id: 2,
      title: "Villa (Practice Project)",
      img: bg2,
      link: "https://jaded-example.surge.sh/",
      category: "Websites",
    },
    {
      id: 4,
      title: "Learning Projects Portfolio",
      img: bg2,
      link: "https://quiz-app.surge.sh/",
      category: "Quiz",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase"
        >
          My <span className="text-[#00EEFF]">Projects</span>
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {["Websites", "Learning Projects Portfolio"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 cursor-pointer rounded-lg border font-bold transition duration-300 ${selectedCategory === cat
                  ? "bg-[#00EEFF] text-black border-[#00EEFF]"
                  : "bg-[#1F232D] text-[#00cddb] border-cyan-400 hover:shadow-[0_0_15px_#00cddb]"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#1F232D] rounded-xl overflow-hidden shadow-lg shadow-[#00EEFF]/20 hover:shadow-[#00EEFF]/40 transition-all duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover brightness-90"
              />
              <div className="py-8 text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#1F232D] text-[#00cddb] font-bold rounded-lg border border-cyan-400 transition duration-300 hover:shadow-[0_0_15px_#00cddb]"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
