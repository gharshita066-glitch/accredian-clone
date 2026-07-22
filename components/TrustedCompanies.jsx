"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    logo: "/google-icon-logo-svgrepo-com.svg",
  },
  {
    name: "Microsoft",
    logo: "/microsoft-logo-svgrepo-com.svg",
  },
  {
    name: "Amazon",
    logo: "/amazon-logo-svgrepo-com.svg",
  },
  {
    name: "Infosys",
    logo: "/infosys-svgrepo-com.svg",
  },
  {
    name: "TCS",
    logo: "/tata-consultancy-services-1.svg",
  },
  {
    name: "Accenture",
    logo: "/accenture.svg",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-blue-600 font-semibold uppercase tracking-widest">
          Trusted By
        </p>

        <h2 className="text-4xl font-bold text-center mt-3">
          Leading Enterprise Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl h-28 flex items-center justify-center shadow hover:shadow-xl p-4"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain max-h-12 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}