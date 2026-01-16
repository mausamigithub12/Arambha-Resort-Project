import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../assets/arambha.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fb] border-top border-gray-200">
      <div className="  px-4 py-10 flex flex-row justify-between mx-3 text-sm text-sky-700">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Arambha Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <span className="block text-2xl font-semibold tracking-wide text-sky-700">
                ARAMBHA
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-red-600">
                Group of Hospitality
              </span>
            </div>
          </div>
          <p className="mt-4 leading-relaxed tracking-wide text-justify max-w-md text-sky-800">
            A newly innovated escape in Dhawaha, Nayagaun, Butwal, offering
            well‑appointed rooms, excellent dining, great facilities and truly
            warm Nepali hospitality.
          </p>

          {/* Social icons */}
          <div className="mt-4 flex items-center gap-3 text-sky-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-sky-200 flex items-center justify-center hover:bg-sky-600 hover:text-white transition"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-sky-200 flex items-center justify-center hover:bg-gradient-to-tr hover:from-pink-500 hover:to-amber-400 hover:text-white transition"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-sky-200 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaTiktok className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-sky-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition"
            >
              <FaXTwitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-red-600 mb-3 text-sm">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-red-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="hover:text-red-600 transition-colors"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-red-600 transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-600 transition-colors"
              >
                Contact
              </Link>
            </li>
             <li>
              <Link
                to="/faq"
                className="hover:text-red-600 transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div>
          <h3 className="font-semibold text-red-600 mb-3 text-sm">
            Contact & Location
          </h3>
          <p className="text-[13px] leading-relaxed">
            Dhawaha, Nayagaun
            <br />
            Butwal, Nepal
          </p>
          <p className="mt-2 text-[13px]">
            Phone:{" "}
            <a
              href="tel:+9779857072355"
              className="hover:text-[#c62828] transition-colors"
            >
              +977 985-7072355
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:info@arambharesort.com"
              className="hover:text-[#c62828] transition-colors"
            >
              info@arambharesort.com
            </a>
          </p>
          <p className="mt-2 text-[13px]">Always open · Price range: ££</p>
          <div className="mt-3 flex gap-3 text-[13px]">
            <a
              href="https://arambharesort.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full border border-[#c62828] text-[#c62828] hover:bg-[#c62828] hover:text-white transition"
            >
              Visit Website
            </a>
            <a
              href="https://wa.me/9779857072355"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-[12px] text-gray-500">
          <p className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>Arambha Resort · All Rights Reserved.</span>
          </p>
          <p className="mt-2 md:mt-0">
            Designed &amp; developed for Arambha Group of Hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
}
