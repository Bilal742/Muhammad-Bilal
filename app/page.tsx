"use client";

import React, { useState, useEffect } from "react";
// import Home from "./Components/Home/Home";
import AboutComponent from "./Components/About/About";
import Skills from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Navbar/Header/header";
import Hero from "./Components/Home/Hero";
import TechStack from "./skills/TechStack";
import WorkExperience from "./Components/About/WorkExperience";
import Footer from "./Components/Footer/Footer2";
import Projects from "./projects/Projects";

// import Home from "./Components/Home/Home";
// import AboutComponent from "./Components/About/About";
// import Skills from "./Components/Skill/Skill";
// import Projects from "./Components/Project/Project";
// import Contact from "./Components/Contact/Contact";

const AnimatedText: React.FC<{ text: string; speed?: number; className?: string }> = ({
  text,
  speed = 50,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className={`${className} whitespace-pre`}>
      {displayedText}
      <span className="inline-block w-1 bg-white ml-1 animate-blink"></span>
    </p>
  );
};

function WelcomeAnimation({ onComplete }: { onComplete?: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-5xl sm:text-6xl font-bold text-[#00EEFF] mb-4 drop-shadow-[0_0_20px_#00EEFF]">
        <AnimatedText text="Muhammad Bilal" speed={100} />
      </h1>

      <div className="mb-2">
        <AnimatedText
          text="Frontend Developer"
          className="text-xl sm:text-2xl text-white drop-shadow-[0_0_12px_#00EEFF]"
          speed={80}
        />
      </div>

      <AnimatedText
        text="Welcome to my Portfolio"
        className="text-lg text-white/80 drop-shadow-[0_0_10px_#00EEFF]"
        speed={60}
      />
    </div>
  );
}

const Page = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative">

      <>
        <div className="bg-dark-bg min-h-screen text-light-gray antialiased pt-5">
          <div className="max-w-[47.5rem] mx-auto px-6 text-gray-500">
            <Header />
            <main className="pb-10">
              <Hero />
              <TechStack />
              <WorkExperience />
              <Projects />
              {/* <Contact /> */}
            </main>
            <Footer />
          </div>
        </div>

      </>
      {/* {showWelcome ? (
        <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      ) : ( */}
        <>
          {/* <Home /> */}
          <AboutComponent />
          <Skills />
          <Projects  />
          <Contact />
        </>
      {/* )} */}
    </div>
  );
};

export default Page;
