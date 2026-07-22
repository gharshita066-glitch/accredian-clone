"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Products",
    "Solutions",
    "Resources",
    "Pricing",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight cursor-pointer">
          Accredian
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-blue-600 transition duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all">
          Book Demo
        </button>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          {links.map((link) => (
            <div
              key={link}
              className="py-3 border-b hover:text-blue-600 cursor-pointer"
            >
              {link}
            </div>
          ))}

          <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Book Demo
          </button>
        </div>
      )}
    </nav>
  );
}