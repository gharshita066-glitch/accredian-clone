"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 Trusted by Enterprise Teams
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            Empower
            <br />
            Enterprise
            <br />
            Learning
            <span className="text-cyan-300"> with AI</span>
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-xl">
            Transform workforce learning with AI-powered upskilling,
            enterprise solutions, and measurable business impact.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition shadow-lg">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Book Demo
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="w-[360px] h-[420px] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl relative">

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-8 left-6 bg-white rounded-2xl p-4 shadow-lg w-56"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="text-blue-600" />
                <div>
                  <h3 className="font-bold text-gray-800">Analytics</h3>
                  <p className="text-sm text-gray-500">
                    Real-time insights
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-40 right-6 bg-white rounded-2xl p-4 shadow-lg w-56"
            >
              <div className="flex items-center gap-3">
                <BrainCircuit className="text-purple-600" />
                <div>
                  <h3 className="font-bold text-gray-800">AI Learning</h3>
                  <p className="text-sm text-gray-500">
                    Personalized training
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute bottom-8 left-12 bg-white rounded-2xl p-4 shadow-lg w-56"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-600" />
                <div>
                  <h3 className="font-bold text-gray-800">Secure Platform</h3>
                  <p className="text-sm text-gray-500">
                    Enterprise-grade security
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}