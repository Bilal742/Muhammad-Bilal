"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook,
  FaArrowUp, FaHeart, FaCoffee, FaCode, FaEnvelope,
  FaRss, FaYoutube, FaDiscord, FaCodepen, FaDribbble,
  FaBehance, FaDev, FaHackerrank, FaProductHunt, FaSpotify
} from "react-icons/fa";
import {
  SiLeetcode, SiHashnode, SiDevdotto, SiMedium,
  SiUpwork, SiFiverr, SiFreelancer, SiStackoverflow
} from "react-icons/si";
import { SiTopcoder } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setShowScrollTop(winScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Update time every minute
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Bilal742", label: "GitHub", color: "hover:text-gray-300 bg-gray-800/50" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/muhaammad-bilal/", label: "LinkedIn", color: "hover:text-blue-400 bg-blue-900/30" },
    { icon: <FaTwitter />, href: "https://twitter.com/", label: "Twitter", color: "hover:text-sky-400 bg-sky-900/30" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/hey_bilal3/", label: "Instagram", color: "hover:text-pink-400 bg-pink-900/30" },
    { icon: <FaCodepen />, href: "https://codepen.io/", label: "CodePen", color: "hover:text-white bg-gray-800/50" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/", label: "LeetCode", color: "hover:text-orange-400 bg-orange-900/30" },
    { icon: <SiHashnode />, href: "https://hashnode.com/", label: "Hashnode", color: "hover:text-blue-300 bg-blue-800/30" },
    { icon: <SiDevdotto />, href: "https://dev.to/", label: "Dev.to", color: "hover:text-black bg-gray-300/50" },
  ];

  const devPlatforms = [
    {
      icon: <SiStackoverflow />,
      href: "https://stackoverflow.com/",
      label: "Stack Overflow",
      color: "hover:text-orange-500"
    },
    {
      icon: <FaHackerrank />,
      href: "https://www.hackerrank.com/",
      label: "HackerRank",
      color: "hover:text-green-500"
    },
    {
      icon: <SiTopcoder />,
      href: "https://www.topcoder.com/members/",
      label: "TopCoder",
      color: "hover:text-red-500"
    },
    {
      icon: <FaDev />,
      href: "https://dev.to/",
      label: "Dev Community",
      color: "hover:text-black"
    },
  ];


  const freelancePlatforms = [
    { icon: <SiUpwork />, href: "https://www.upwork.com/", label: "Upwork", color: "hover:text-green-600" },
    { icon: <SiFiverr />, href: "https://www.fiverr.com/", label: "Fiverr", color: "hover:text-green-400" },
    { icon: <SiFreelancer />, href: "https://www.freelancer.pk/", label: "Freelancer", color: "hover:text-blue-500" },
    { icon: <FaProductHunt />, href: "https://www.producthunt.com/", label: "Product Hunt", color: "hover:text-orange-500" },
  ];

  const designPlatforms = [
    { icon: <FaDribbble />, href: "https://dribbble.com/", label: "Dribbble", color: "hover:text-pink-500" },
    { icon: <FaBehance />, href: "https://www.behance.net/", label: "Behance", color: "hover:text-blue-600" },
    { icon: <FaSpotify />, href: "https://open.spotify.com/", label: "Spotify", color: "hover:text-green-500" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    // { name: "Blog", href: "#blog" },
    { name: "Resume", href: "/Muhammad-Bilal.pdf" },
    // { name: "Case Studies", href: "#cases" },
    // { name: "Testimonials", href: "#testimonials" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Disclaimer", href: "#disclaimer" },
  ];

  const techStack = [
    "Javascript", "Next.js", "TypeScript", "Tailwind", "Node.js",
    "MongoDB", "Express", "Firebase", "React", "Git"
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Bilal
                  </h3>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Crafting exceptional digital experiences with modern web technologies.
                Passionate about clean code and beautiful design.
              </p>

              {/* Current Time */}
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Currently Online • {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} PKT</span>
              </div>

              {/* Contact Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:bilalusman1291@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors"
              >
                <FaEnvelope className="text-cyan-400" />
                bilalusman1291@gmail.com
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-lg mt-8 mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}

                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <FiExternalLink className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Development</h4>
            <div className="space-y-4">
              {devPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  href={platform.href}
                   target="_blank" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className={`p-2 rounded-lg ${platform.color.split(' ')[1]} transition-colors`}>
                    <span className={platform.color.split(' ')[0]}>{platform.icon}</span>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{platform.label}</span>
                </motion.a>
              ))}
            </div>

            <h4 className="text-white font-semibold text-lg mt-8 mb-6">Freelance</h4>
            <div className="space-y-4">
              {freelancePlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  href={platform.href}
                   target="_blank" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className={`p-2 rounded-lg ${platform.color.split(' ')[1]} transition-colors`}>
                    <span className={platform.color.split(' ')[0]}>{platform.icon}</span>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{platform.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to my newsletter for latest projects, tutorials, and web development insights.
            </p>

            <AnimatePresence>
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 rounded-xl border border-green-500/40 bg-green-500/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <FaEnvelope className="text-green-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-400">Subscribed!</h5>
                      <p className="text-green-300 text-sm">Thank you for subscribing!</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      required
                    />
                    <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </AnimatePresence>

            {/* Design Platforms */}
            <h4 className="text-white font-semibold text-lg mt-8 mb-6">Design</h4>
            <div className="flex gap-4">
              {designPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  href={platform.href}
                  className={`p-3 rounded-xl ${platform.color.split(' ')[1]} hover:scale-110 transition-all duration-300`}
                >
                  <span className={`text-2xl ${platform.color.split(' ')[0]}`}>{platform.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-white font-semibold text-lg">Connect With Me</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl ${link.color} transition-all duration-300 relative group`}
                  aria-label={link.label}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8 relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 bg-black">
            <FaHeart className="text-red-400 animate-pulse" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Muhammad Bilal. All rights reserved.
            <span className="hidden md:inline"> • Crafted with passion in Karachi, Pakistan</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Made With */}
          {/* <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>and</span>
            <FaCoffee className="text-yellow-500" />
          </div> */}
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2+", label: "Years Experience", icon: "🚀" },
              { value: "50+", label: "Projects Completed", icon: "💻" },
              { value: "100%", label: "Client Satisfaction", icon: "⭐" },
              { value: "24/7", label: "Availability", icon: "🕐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Final Message */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>Thanks for visiting! Let's build something amazing together. 🚀</p>
          <p className="mt-2 text-xs">Last updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </motion.div> */}
      </div>
    </footer>
  );
}