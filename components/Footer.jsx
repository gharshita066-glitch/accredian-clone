import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Accredian
          </h2>

          <p className="mt-4 leading-7">
            Helping enterprises transform learning through AI-powered
            solutions, enterprise training, and scalable digital experiences.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Company
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition">
              About
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Resources
          </h3>

          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer transition">
              Blogs
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Case Studies
            </li>
            <li className="hover:text-white cursor-pointer transition">
              FAQs
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Support
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>support@accredian.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Bangalore, India</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 pt-4 text-xl">

              <a href="#" className="hover:text-blue-500 transition">
                <FaLinkedin />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaGithub />
              </a>

              <a href="#" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Accredian Enterprise Clone. Built with
        Next.js, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}