"use client";

import React, { useState } from "react";
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  MessageSquare, User, Globe, Smartphone, Calendar,
  Shield, ExternalLink
} from "lucide-react";

type FormType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
};

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = (values: FormType) => {
    const er: Partial<FormType> = {};
    if (!values.name.trim()) er.name = "Name is required";
    if (!values.email.trim()) er.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) er.email = "Invalid email format";
    if (!values.phone.trim()) er.phone = "Phone is required";
    if (!values.message.trim()) er.message = "Message is required";
    if (values.message.length < 10) er.message = "Message must be at least 10 characters";
    return er;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate(form);
    setErrors(er);

    if (Object.keys(er).length) {
      return;
    }

    try {
      setLoading(true);

      // FormSubmit.co service
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
          _autoresponse: `Thank you for contacting Bilal! I'll get back to you within 24 hours.\n\nBest regards,\nMuhammad Bilal`
        })
      });

      const result = await response.json();

      if (result.success) {
        setForm(initialForm);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (err) {
      console.error("Email sending failed:", err);

      // Fallback: Open email client
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
      id: "email",
      title: "Email",
      icon: <Mail />,
      description: "Response within 24h",
      action: "mailto:bilalusman1291@gmail.com?subject=Portfolio Inquiry"
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      icon: <MessageSquare />,
      description: "Instant messaging",
      action: "https://wa.me/923001234567?text=Hi%20Bilal,%20I%20saw%20your%20portfolio"
    },
    {
      id: "call",
      title: "Phone",
      icon: <Phone />,
      description: "Available 6AM-10PM",
      action: "tel:+92 370 2675457"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: <ExternalLink />,
      description: "Professional network",
      action: "https://linkedin.com/in/muhaammad-bilal/"
    }
  ];
  const services = [
    "Frontend Web Development",
    "React.js Applications",
    "Responsive Website Design",
    "UI/UX Design (Web Interfaces)",
    "Website Redesign & Optimization",
    "Bug Fixing & Performance Improvements",
    "API Integration",
    "Consultation & Code Review"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contact Me
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.id}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-sm transition-all"
                  >
                    <div className="flex justify-center text-blue-600 text-xl mb-2">
                      {method.icon}
                    </div>

                    <h4 className="font-medium text-gray-900 mb-1">
                      {method.title}
                    </h4>

                    <p className="text-gray-600 text-xs">
                      {method.description}
                    </p>
                  </a>

                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Details
              </h3>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-blue-100 rounded">
                    <Phone className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm">+92 370 2675457</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-blue-100 rounded">
                    <Mail className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">bilalusman1291@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-blue-100 rounded">
                    <MapPin className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 rounded-lg border border-green-200 bg-green-50 flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <div>
                    <h4 className="font-medium text-green-800">Message Sent!</h4>
                    <p className="text-green-700 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Note */}
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Shield className="text-blue-600 mt-0.5" />
                  <p>Your information is secure and will only be used to respond to your inquiry.</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="text-lg " />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}