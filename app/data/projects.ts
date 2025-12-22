// projectsData.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  liveLink: string;
  sourceCode: string;
};

export const allProjects: Project[] = [
    {
      id: 1,
      title: "Learning Projects",
      description:
        "My personal portfolio with three fully functional React applications To-Do App, Quiz App, and Weather App. All apps are built with React.js, styled using Tailwind CSS, and integrated with React Router for smooth navigation. The design is fully responsive and modern.",
      img: "/Projects_Img/bg4.png",
      liveLink: "https://ilearning-projects.vercel.app/",
      sourceCode: "https://github.com/Bilal742/Learning-Projects",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description:
        "A modern and responsive e-commerce application built with Next.js, React, Tailwind CSS, featuring a clean UI and fast shopping experience — specially designed for premium hoodies",
      img: "/Projects_Img/bg5.png",
      liveLink: "https://hood-anixx.vercel.app/",
      sourceCode: "https://github.com/Bilal742/HoodAnix",
    },
    {
      id: 3,
      title: "Amna's Mehndi Studio – Official Website",
      description:
        "Welcome to Amna's Mehndi Studio – a professional mehndi services website built with Next.js, offering a modern UI, smooth animations, and an elegant user experience.",
      img: "/Projects_Img/bg6.png",
      liveLink: "https://amna-s-mehndi-studio.vercel.app/",
      sourceCode: "https://github.com/Bilal742/Amna-s-Mehndi-Studio",
    },
    {
      id: 4,
      title: "Villa-Website",
      description:
        "A modern and fully responsive Villa Booking website built with React, Tailwind CSS, and JavaScript — allowing users to explore, view details, and seamlessly book luxury villas.",
      img: "/Projects_Img/bg2.png",
      liveLink: "https://ivilla.vercel.app/",
      sourceCode: "https://github.com/Bilal742/Villa-Website",
    },
    {
      id: 5,
      title: "Smart Power Solution",
      description:
        "A responsive website for Smart Power Solution built using HTML, CSS, JavaScript, and Tailwind CSS with smooth animations.",
      img: "/Projects_Img/bg1.jpg",
      liveLink: "https://smart-power-solution.vercel.app/",
      sourceCode: "https://github.com/Bilal742/Smart-Power-Solution-SPS-website",
    },
  {
    id: 6,
    title: "React User Management CRUD",
    description:
      "A fully functional React User Management CRUD Application built using React.js and Axios with live API integration from MockAPI.io. Users can create, read, update, and delete records dynamically. The app uses Material UI (MUI) for a clean and responsive interface and React Router for page navigation.",
    img: "/Projects_Img/bg3.png",
    liveLink: "https://react-user-management-crud.vercel.app/",
    sourceCode: "https://github.com/Bilal742/react-user-management-crud",
  },
];
