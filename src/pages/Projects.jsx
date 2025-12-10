// src/pages/Projects.jsx
import { motion } from "framer-motion";
import bg from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/bg6.png";


export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Learning Projects",
      description:
        "My personal portfolio with three fully functional React applications To-Do App, Quiz App, and Weather App. All apps are built with React.js, styled using Tailwind CSS, and integrated with React Router for smooth navigation. The design is fully responsive and modern.",
      img: bg4,
      liveLink: "https://ilearning-projects.vercel.app/",
      sourceCode: "https://github.com/Bilal742/Learning-Projects",
    },
    {
      id: 2,
      title: "React User Management CRUD",
      description:
        "A fully functional React User Management CRUD Application built using React.js and Axios with live API integration from MockAPI.io. Users can create, read, update, and delete records dynamically. The app uses Material UI (MUI) for a clean and responsive interface and React Router for page navigation.",
      img: bg3,
      liveLink: "https://react-user-management-crud.vercel.app/",
      sourceCode: "https://github.com/Bilal742/react-user-management-crud",
    },
    {
     id: 3,
     title: "Smart Power Solution",
     description:
       "A responsive website for Smart Power Solution built using HTML, CSS, JavaScript, and Tailwind CSS with smooth animations.",
     img: bg,
     liveLink: "https://smart-power-solution.vercel.app/",
     sourceCode:
       "https://github.com/Bilal742/Smart-Power-Solution-SPS-website",
   },
   {
     id: 4,
     title: "Villa-Website",
     description:
       "A modern and fully responsive Villa Booking website built with React, Tailwind CSS, and JavaScript — allowing users to explore, view details, and seamlessly book luxury villas.",
     img: bg2,
     liveLink: "https://ivilla.vercel.app/",
     sourceCode: "https://github.com/Bilal742/Villa-Website",
   },
    {
      id: 5,
      title: "E-Commerce App",
      description:
        "A modern and responsive e-commerce application built with Next.js, React, Tailwind CSS, featuring a clean UI and fast shopping experience — specially designed for premium hoodies",
      img: bg5,
      liveLink: "https://hood-anixx.vercel.app/",
      sourceCode:
        "https://github.com/Bilal742/HoodAnix",
    },
    {
      id: 6,
      title: "Amna's Mehndi Studio – Official Website",
      description:
        "Welcome to Amna's Mehndi Studio – a professional mehndi (amna's) services website built with Next.js, offering a modern UI, smooth animations, and an elegant user experience.",
      img: bg6,
      liveLink: "https://amna-s-mehndi-studio.vercel.app/",
      sourceCode:
        "https://github.com/Bilal742/Amna-s-Mehndi-Studio",
    },
  ];

  return (
    <section id="projects" className="py-16 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 uppercase">
          My <span className="text-[#00EEFF]">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="flex flex-col gap-12">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center bg-transparent rounded-xl overflow-hidden shadow-lg shadow-[#00EEFF]/20 hover:shadow-[#00EEFF]/40 transition-all duration-300 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-full object-cover brightness-90 hover:brightness-100 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#ccc] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 sm:px-6 sm:py-2 bg-[#00EEFF] text-black font-bold rounded-lg transition hover:brightness-90"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 sm:px-6 sm:py-2 bg-transparent border border-[#00EEFF] text-[#00EEFF] font-bold rounded-lg transition hover:bg-[#00EEFF]/10"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
