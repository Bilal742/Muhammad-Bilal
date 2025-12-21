"use client";

import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <section id="about" className="py-16 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >

        <h2 className="text-3xl sm:text-4xl font-bold mb-6 uppercase">
          About <span className="text-[#00EEFF]">Me</span>
        </h2>

        <p className="text-md sm:text-lg leading-7 sm:leading-8 text-gray-300">
          Hi, I’m <span className="text-[#00EEFF] font-semibold">Bilal</span> — a
          <span className="text-[#00EEFF] font-semibold"> Frontend Developer</span> focused on
          creating clean, responsive, and user-friendly web applications.
          I specialize in modern frontend technologies including{" "}
          <span className="text-[#00EEFF]">HTML, CSS, JavaScript, React,</span> and{" "}
          <span className="text-[#00EEFF]">Tailwind CSS</span>.
          I’m always learning and improving to deliver high-quality digital experiences that stand out.
        </p>

        <p className="text-md sm:text-lg leading-7 sm:leading-8 text-gray-300 mt-6">
          I enjoy solving problems, building elegant designs, and exploring new technologies.
          My goal is to grow into a{" "}
          <span className="text-[#00EEFF] font-semibold">Full-Stack Developer</span>
          and contribute to impactful projects that create meaningful user experiences.
        </p>
      </motion.div>
    </section>
  );
}
