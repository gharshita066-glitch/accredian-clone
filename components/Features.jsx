"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Cloud,
  BrainCircuit,
  Users,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "Enterprise Security",
    description:
      "Protect your organization with enterprise-grade security, compliance, and secure access controls.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Monitor learner engagement and business outcomes through actionable dashboards.",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Cloud Integration",
    description:
      "Integrate seamlessly with cloud platforms and your existing enterprise ecosystem.",
    icon: Cloud,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "AI Powered Learning",
    description:
      "Deliver personalized learning experiences using intelligent recommendations.",
    icon: BrainCircuit,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Collaborative Learning",
    description:
      "Enable teams to learn together with role-based learning paths and collaboration.",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Reliable Infrastructure",
    description:
      "Built for scalability, performance, and enterprise-level reliability.",
    icon: Lock,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Why Choose Accredian
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Everything your enterprise needs
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Empower organizations with secure learning, intelligent analytics,
            cloud integration, and scalable enterprise solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-10"
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center ${feature.color}`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8 text-lg">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}