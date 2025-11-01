import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Loader from "./components/Loader/Loader";
import "./App.css";


export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <Router>
          <div className="min-h-screen bg-[#1F232D] text-[#00EEFF]">
            <section id="navbar"><Navbar /></section>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            {/* <section id="Footer"><Footer /></section> */}
          </div>
        </Router>
      )}
    </>
  );
}
