import React from "react";
import Home from "./Components/Home/Home";
import AboutComponent from "./Components/About/About";
import Skills from "./Components/Skill/Skill";
import Projects from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Home  />
      <AboutComponent />
      <Skills />
      <Projects preview />
      <Contact />
    </div>
  );
};

export default Page;
