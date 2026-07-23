"use client";

import { useState } from "react";

export default function LeadCapture() {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="uppercase tracking-widest text-blue-600 font-semibold">
          Get Started
        </p>
        <h2 className="text-4xl font-bold mt-3 mb-8">
          Request a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-300"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">Thank you! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
