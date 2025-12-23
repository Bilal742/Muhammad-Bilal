"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";

const initialForm = { name: "", email: "", Phone: "", message: "" };

type FormType = typeof initialForm;
type StatusType = "idle" | "success" | "error";

interface Status {
  type: StatusType;
  msg: string;
}

interface FieldProps {
  label: string;
  name: keyof FormType;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  as?: "input" | "textarea";
  rows?: number;
  type?: string;
  placeholder?: string;
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export default function ContactSection() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [form, setForm] = useState<FormType>(initialForm);
  const [errors, setErrors] = useState<Partial<FormType>>({});

  // Formspree hook (replace "YOUR_FORMSPREE_ID" with your actual Formspree ID)
  const [state, handleSubmitFormspree] = useForm("mlgrzwyr");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = (values: FormType) => {
    const errors: Partial<FormType> = {};
    if (!values.name.trim()) errors.name = "Name is required";
    if (!values.email.trim()) errors.email = "Email is required";
    if (!values.Phone.trim()) errors.Phone = "Phone is required";
    if (!values.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const er = validate(form);
    setErrors(er);
    if (Object.keys(er).length) return;

    // Formspree submission
    await handleSubmitFormspree(e);

    if (state.succeeded) {
      setForm(initialForm);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 bg-[#00EEFF]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 h-72 w-72 bg-[#00EEFF]/10 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00EEFF] to-white">
              Me
            </span>
          </h2>
          <p className="mt-3 text-gray-400">
            Let’s build something amazing together 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard
              icon={<Phone />}
              title="Phone"
              content="+92 123 456 7890"
            />
            <InfoCard
              icon={<Mail />}
              title="Email"
              content="bilalusman1291@gmail.com"
            />
            <InfoCard
              icon={<MapPin />}
              title="Location"
              content="Karachi, Pakistan"
            />
            <InfoCard
              icon={<Clock />}
              title="Current Time"
              content={`${days[now.getDay()]} • ${now.toLocaleTimeString()}`}
            />

            <iframe
              className="w-full h-56 rounded-xl border border-gray-800"
              src="https://www.google.com/maps?q=Karachi%20Pakistan&output=embed"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-800 bg-black/80 p-6 backdrop-blur">
              {state.succeeded && (
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
                  name="Phone"
                  value={form.Phone}
                  onChange={handleChange}
                  error={errors.Phone}
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
                  disabled={state.submitting}
                  className="cursor-pointer w-full rounded-xl bg-[#00EEFF] text-black py-3 font-semibold hover:shadow-[0_0_20px_#00EEFF] transition"
                >
                  <Send className="inline mr-2" /> Send Message
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
}: FieldProps) {
  const Tag = as;
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <Tag
        name={name}
        value={value}
        onChange={onChange}
        rows={as === "textarea" ? rows : undefined}
        className={`w-full rounded-xl bg-black border px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#00EEFF]
        ${error ? "border-red-500" : "border-gray-700"}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="flex gap-3 items-center rounded-xl border border-gray-800 bg-black/70 p-4">
      <div className="text-[#00EEFF]">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
    </div>
  );
}
