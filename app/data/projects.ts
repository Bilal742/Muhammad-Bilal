// data/projects.ts (updated version)

export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  liveLink: string;
  sourceCode: string;
  tags?: string[];
  category?: "web" | "mobile" | "fullstack" | "design";
  featured?: boolean;
  techStack?: string[];
  status?: "completed" | "in-progress" | "planned";
  views?: number;
  likes?: number;
  gallery?: string[];
};

export const allProjects: Project[] = [
  {
    id: 1,
    title: "ProjectSHub",
    description:
      "ProjectShub is a curated collection of web development projects ranging from beginner to advanced levels. Explore a variety of hands-on HTML, CSS, and JavaScript projects designed to help learners practice, build real skills, and enhance their coding journey.",
    img: "/Projects_Img/bg4.png",
    liveLink: "https://projectshubb.vercel.app/",
    sourceCode: "https://github.com/Bilal742/ProjectsHub",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "A modern and responsive e-commerce application built with Next.js and Tailwind CSS for premium hoodies.",
    img: "/Projects_Img/bg5.png",
    liveLink: "https://hood-anixx.vercel.app/",
    sourceCode: "https://github.com/Bilal742/HoodAnix",
  },
  {
    id: 3,
    title: "Amna's Mehndi Studio",
    description:
      "A professional mehndi services website built with Next.js, featuring smooth animations and elegant UI.",
    img: "/Projects_Img/bg6.png",
    liveLink: "https://amna-s-mehndi-studio.vercel.app/",
    sourceCode: "https://github.com/Bilal742/Amna-s-Mehndi-Studio",
  },
  {
    id: 4,
    title: "Villa Website",
    description:
      "A modern villa booking website built with React and Tailwind CSS.",
    img: "/Projects_Img/bg2.png",
    liveLink: "https://ivilla.vercel.app/",
    sourceCode: "https://github.com/Bilal742/Villa-Website",
  },
  {
    id: 5,
    title: "Smart Power Solution",
    description:
      "A responsive business website built using HTML, CSS, JavaScript, and Tailwind CSS.",
    img: "/Projects_Img/bg1.jpg",
    liveLink: "https://smart-power-solution.vercel.app/",
    sourceCode: "https://github.com/Bilal742/Smart-Power-Solution-SPS-website",
  },
  // {
  //   id: 6,
  //   title: "ProjectsHub",
  //   description:
  //     "ProjectsHub is more than a portfolio—it's a living ecosystem where innovation meets execution. Each project represents a story of problem-solving, creativity, and technical mastery in the ever-evolving landscape of web development.",
  //   img: "/Projects_Img/.PNG",
  //   liveLink: "Comming soon",
  //   sourceCode: "https://github.com/Bilal742/ProjectsHub",
  // },
  // {
  //   id: 7,
  //   title: "React User Management CRUD",
  //   description:
  //     "A complete CRUD app using React, Axios, MockAPI, Material UI, and React Router.",
  //   img: "/Projects_Img/bg3.png",
  //   liveLink: "https://react-user-management-crud.vercel.app/",
  //   sourceCode: "https://github.com/Bilal742/react-user-management-crud",
  // },
];