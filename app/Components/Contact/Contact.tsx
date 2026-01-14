"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Clock,
  MessageSquare, User, Globe, Smartphone, Calendar,
  Zap, Shield, Video, Mailbox, Map, ExternalLink
} from "lucide-react";

type FormType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
};

type ContactMethod = "email" | "whatsapp" | "call" | "linkedin";

const initialForm: FormType = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  service: ""
};

export default function ContactSection() {
  const [form, setForm] = useState<FormType>(initialForm);
  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMethod, setActiveMethod] = useState<ContactMethod>("email");
  const [charCount, setCharCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    
    if (name === "message") {
      setCharCount(value.length);
      setIsTyping(true);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => setIsTyping(false), 1000);
    }
  };

  const validate = (values: FormType) => {
    const er: Partial<FormType> = {};
    if (!values.name.trim()) er.name = "Name is required";
    if (!values.email.trim()) er.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) er.email = "Invalid email format";
    if (!values.phone.trim()) er.phone = "Phone is required";
    if (!values.message.trim()) er.message = "Message is required";
    if (values.message.length < 20) er.message = "Message must be at least 20 characters";
    return er;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate(form);
    setErrors(er);
    
    if (Object.keys(er).length) {
      Object.keys(er).forEach(key => {
        const element = document.getElementById(key);
        element?.classList.add("animate-shake");
        setTimeout(() => element?.classList.remove("animate-shake"), 500);
      });
      return;
    }

    try {
      setLoading(true);
      
      // FormSubmit.co service (free and no installation required)
      const response = await fetch('https://formsubmit.co/ajax/bilalusman1291@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject || 'New Contact Form Submission',
          message: form.message,
          service: form.service,
          _subject: `New Message from ${form.name} - Portfolio Contact`,
          _template: 'table',
          _autoresponse: `Thank you for contacting Bilal! I'll get back to you within 24 hours.\n\nBest regards,\nMuhammad Bilal`
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setForm(initialForm);
        setCharCount(0);
        setSuccess(true);
        
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (err) {
      console.error("Email sending failed:", err);
      
      // Fallback: Open email client with pre-filled data
      const mailtoLink = `mailto:bilalusman1291@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
      )}`;
      window.open(mailtoLink, '_blank');
      
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      id: "email" as ContactMethod,
      title: "Send Email",
      icon: <Mail />,
      color: "from-cyan-500 to-blue-500",
      description: "Get a response within 24 hours",
      action: "mailto:bilalusman1291@gmail.com?subject=Portfolio Inquiry"
    },
    {
      id: "whatsapp" as ContactMethod,
      title: "WhatsApp",
      icon: <MessageSquare />,
      color: "from-green-500 to-emerald-500",
      description: "Instant messaging",
      action: "https://wa.me/923001234567?text=Hi%20Bilal,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
    },
    {
      id: "call" as ContactMethod,
      title: "Schedule Call",
      icon: <Phone />,
      color: "from-purple-500 to-pink-500",
      description: "30-minute consultation",
      action: "tel:+923001234567"
    },
    {
      id: "linkedin" as ContactMethod,
      title: "LinkedIn",
      icon: <ExternalLink />,
      color: "from-blue-500 to-blue-700",
      description: "Professional network",
      action: "https://linkedin.com/in/muhaammad-bilal/"
    }
  ];

  const services = [
    "Web Development",
    "Frontend Development",
    "React Projects",
    "UI/UX Design",
    "Consultation",
    "Other"
  ];

  const stats = [
    { label: "Response Time", value: "< 24h", icon: <Zap /> },
    { label: "Projects Completed", value: "20+", icon: <CheckCircle2 /> },
    { label: "Client Satisfaction", value: "95%", icon: <Shield /> }
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden"> 
    {/* // bg-gradient-to-br from-black via-gray-900 to-black */}
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,238,255,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,150,255,0.1)_0%,transparent_50%)]"></div> */}
        
        {/* Floating Contact Icons */}
        {["@", "✉️", "📞", "💬", "📍", "📅"].map((icon, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.3, 0] }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute text-2xl"
            style={{
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 font-semibold tracking-widest text-sm uppercase">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Quick Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-black/50 backdrop-blur-sm border rounded-xl p-4 text-center transition-all duration-300 ${
                      activeMethod === method.id
                        ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 hover:border-cyan-500/30"
                    }`}
                    onClick={() => setActiveMethod(method.id)}
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.color} mb-3`}>
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                    <p className="text-gray-400 text-xs">{method.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Contact Info
              </h3>
              
              <InfoCard 
                icon={<Phone />}
                title="Phone"
                content="+92 300 1234567"
                subtitle="Available 9AM - 6PM"
              />
              
              <InfoCard 
                icon={<Mail />}
                title="Email"
                content="bilalusman1291@gmail.com"
                subtitle="Response within 24h"
              />
              
              <InfoCard 
                icon={<MapPin />}
                title="Location"
                content="Karachi, Pakistan"
                subtitle="Remote & On-site"
              />
              
              <InfoCard 
                icon={<Clock />}
                title="Current Time"
                content={`${days[currentTime.getDay()]} • ${currentTime.toLocaleTimeString()}`}
                subtitle="PKT (UTC+5)"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Form Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20"></div>
              
              {/* Form Container */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                {/* Success Message */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6 p-4 rounded-xl border border-green-500/40 bg-green-500/10 flex items-center gap-3"
                    >
                      <CheckCircle2 className="text-green-400" />
                      <div>
                        <h4 className="font-semibold text-green-400">Message Sent Successfully!</h4>
                        <p className="text-green-300 text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      icon={<User />}
                      placeholder="John Doe"
                    />
                    
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      icon={<Mail />}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      icon={<Smartphone />}
                      placeholder="+92 300 1234567"
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Field
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    icon={<Globe />}
                    placeholder="Project Inquiry"
                  />

                  <div className="relative">
                    <Field
                      label="Your Message"
                      name="message"
                      as="textarea"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      error={errors.message}
                      icon={<MessageSquare />}
                      placeholder="Tell me about your project..."
                    />
                    
                    {/* Character Counter & Typing Indicator */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-1 text-xs text-cyan-400"
                          >
                            <div className="flex gap-1">
                              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <span>Typing...</span>
                          </motion.div>
                        )}
                      </div>
                      <div className={`text-xs ${charCount > 500 ? 'text-red-400' : 'text-gray-400'}`}>
                        {charCount}/500
                      </div>
                    </div>
                  </div>

                  {/* Privacy Note */}
                  <div className="flex items-start gap-3 text-sm text-gray-400">
                    <Shield className="text-cyan-400 mt-0.5" />
                    <p>Your information is secure and will only be used to respond to your inquiry.</p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                      loading
                        ? "bg-cyan-500/60 cursor-not-allowed"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/30"
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="text-lg" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid md:grid-cols-2 gap-6"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <Calendar className="text-cyan-400" />
                  </div>
                  <h4 className="text-white font-semibold">Availability</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-cyan-400">9AM - 6PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekends</span>
                    <span className="text-cyan-400">10AM - 4PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Emergency</span>
                    <span className="text-green-400">24/7 Support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Mailbox className="text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold">Best Way to Reach</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  For urgent matters, use WhatsApp. For detailed discussions, schedule a call.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">WhatsApp</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Email</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Call</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  icon,
  placeholder,
  as = "input",
  rows = 4,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
  const Tag = as === "textarea" ? "textarea" : "input";
  const inputId = name;

  return (
    <div id={name}>
      <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor={inputId}>
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <Tag
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          rows={as === "textarea" ? rows : undefined}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full bg-black/50 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ${
            icon ? 'pl-12' : 'pl-4'
          } ${
            error 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-white/10 focus:border-cyan-500'
          }`}
        />
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          id={`${name}-error`} 
          className="text-red-500 text-xs mt-2 flex items-center gap-1"
        >
          ⚠️ {error}
        </motion.p>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  content,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="flex gap-3 items-center">
        <div className="p-3 bg-cyan-500/20 rounded-lg">
          <div className="text-cyan-400">{icon}</div>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-white">{title}</p>
          <p className="text-gray-300 text-sm mt-1">{content}</p>
          {subtitle && (
            <p className="text-cyan-400 text-xs mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}