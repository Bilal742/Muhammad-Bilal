import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formly.email/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "33ddeeb003524df885e14f93bc3c705b",
          ...formData,
        }),
      });

      if (res.ok) {
        alert("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again!");
      }
    } catch (err) {
      alert("⚠️ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact <span className="text-[#00EEFF]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 leading-7">
              Feel free to reach out to me for any project collaboration, web
              development opportunities, or just to say hi!
            </p>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#00EEFF] text-xl" />
              <span className="text-gray-300">bilalusman1291@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#00EEFF] text-xl" />
              <span className="text-gray-300">+92 370 2675457</span>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#00EEFF] text-xl" />
              <span className="text-gray-300">Karachi, Pakistan</span>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="p-6 rounded-xl shadow-lg shadow-[#00EEFF]/20"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-700 
                  text-white focus:outline-none focus:border-[#00EEFF]"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-700 
                  text-white focus:outline-none focus:border-[#00EEFF]"
                required
              />
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-700 
                  text-white focus:outline-none focus:border-[#00EEFF]"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#00EEFF] text-black font-bold rounded-lg 
                  hover:bg-[#00cddb] transition duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
