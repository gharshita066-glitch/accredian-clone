"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Failed to load testimonials:", err));
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Testimonials
          </p>
          <h2 className="text-5xl font-bold mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white shadow-xl rounded-3xl p-10">
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 italic text-gray-700 leading-9">
                "{t.text}"
              </p>
              <h3 className="mt-8 text-2xl font-bold">
                {t.name}
              </h3>
              <p className="text-gray-500">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
