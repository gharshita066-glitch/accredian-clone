"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "Professionals Trained" },
  { number: "200+", label: "Enterprise Clients" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {stats.map((item) => (
          <motion.div
            whileHover={{ y: -8 }}
            key={item.label}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">{item.number}</h2>
            <p className="mt-2 text-blue-100">{item.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}