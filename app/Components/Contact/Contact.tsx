"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import Snowfall from "react-snowfall";

type FormType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormType = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormType>(initialForm);
  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = (values: FormType) => {
    const er: Partial<FormType> = {};
    if (!values.name.trim()) er.name = "Name is required";
    if (!values.email.trim()) er.email = "Email is required";
    if (!values.phone.trim()) er.phone = "Phone is required";
    if (!values.message.trim()) er.message = "Message is required";
    return er;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate(form);
    setErrors(er);
    if (Object.keys(er).length) return;

    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch("https://formspree.io/f/mlgrzwyr", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm(initialForm);
        setSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* <Snowfall /> */}
      <div className="mx-auto max-w-7xl px-4 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h2 className="text-4xl font-extrabold">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00EEFF] to-white">
              Me
            </span>
          </h2>
          <p className="mt-3 text-gray-400">Let’s build something amazing together 🚀</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={<Phone />} title="Phone" content="+92 123 456 7890" />
            <InfoCard icon={<Mail />} title="Email" content="bilalusman1291@gmail.com" />
            <InfoCard icon={<MapPin />} title="Location" content="Karachi, Pakistan" />
            <InfoCard
              icon={<Clock />}
              title="Current Time"
              content={`${days[currentTime.getDay()]} • ${currentTime.toLocaleTimeString()}`}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-800 bg-black/80 p-6">
              {success && (
                <div className="mb-4 flex items-center gap-2 rounded-xl border border-[#00EEFF]/40 bg-[#00EEFF]/10 p-3 text-sm">
                  <CheckCircle2 /> Message sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <Field
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <Field
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className={`w-full rounded-xl py-3 font-semibold transition
                    ${
                      loading
                        ? "bg-[#00EEFF]/60 text-black cursor-not-allowed"
                        : "bg-[#00EEFF] text-black hover:shadow-[0_0_20px_#00EEFF] cursor-pointer"
                    }`}
                >
                  <Send className="inline mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  as = "input",
  rows = 4,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
  const Tag = as === "textarea" ? "textarea" : "input";

  return (
    <div>
      <label className="block text-sm mb-1" htmlFor={name}>
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={as === "textarea" ? rows : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl bg-black border px-4 py-3 outline-none
          ${error ? "border-red-500" : "border-gray-700"}
          focus:ring-2 focus:ring-[#00EEFF]`}
      />
      {error && (
        <p id={`${name}-error`} className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  content,
  mapSrc,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  mapSrc?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-800 bg-black/70 p-4">
      <div className="flex gap-3 items-center">
        <div className="text-[#00EEFF]">{icon}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-gray-400 text-sm">{content}</p>
        </div>
      </div>

      {mapSrc && (
        <iframe
          title="Google Map"
          className="mt-4 w-full h-56 rounded-lg border border-gray-800"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}
