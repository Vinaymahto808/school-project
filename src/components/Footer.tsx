import { Link } from "react-router-dom";
import {
  GraduationCap, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Youtube, Send,
} from "lucide-react";

const SOCIALS = [
  { Icon: Facebook,  href: "#", label: "Facebook",  color: "#1877F2" },
  { Icon: Twitter,   href: "#", label: "Twitter",   color: "#1DA1F2" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { Icon: Youtube,   href: "#", label: "YouTube",   color: "#FF0000" },
];

const CONTACT = [
  { Icon: MapPin, text: "Kerwar, Gandigram Paraspani Road, Godda, IN 814147" },
  { Icon: Phone,  text: "+91 9973336442" },
  { Icon: Mail,   text: "info@gyanjyoti.edu" },
];

const Footer = () => (
  <footer style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 50%, #fef9c3 100%)" }}
    className="border-t border-sky-200">

    {/* TOP RAINBOW BAR */}
    <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4, #10b981, #f59e0b, #ef4444)" }} />

    <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ── Brand ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-extrabold text-indigo-900 text-base leading-tight">Gyan Jyoti</p>
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#06b6d4" }}>
                International School
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Nurturing young minds with knowledge, values and care. Every child at Gyan Jyoti is encouraged to dream big and shine bright.
          </p>
          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, href, label, color }) => (
              <a key={label} href={href} aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200">
                <Icon className="w-4 h-4" style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Contact ── */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest mb-5 pb-2"
            style={{ color: "#6366f1", borderBottom: "2px solid #c7d2fe" }}>
            Contact Us
          </h4>
          <ul className="space-y-4">
            {CONTACT.map(({ Icon, text }, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #e0e7ff, #bfdbfe)", border: "1px solid #c7d2fe" }}>
                  <Icon className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Newsletter ── */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest mb-5 pb-2"
            style={{ color: "#10b981", borderBottom: "2px solid #bbf7d0" }}>
            Newsletter
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Stay updated with school events, news and announcements.
          </p>
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-gray-200 shadow-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 px-3 focus:outline-none"
            />
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white shrink-0 transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4)" }}>
              <Send className="w-3 h-3" />
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-2 pl-1">No spam, unsubscribe anytime.</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 pt-5 border-t border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
        <span>© 2025 Gyan Jyoti International School. All rights reserved.</span>
        <span>
          Developed by{" "}
          <a href="https://synaptixlab.com" target="_blank" rel="noopener noreferrer"
            className="font-bold transition-colors"
            style={{ color: "#6366f1" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#06b6d4")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6366f1")}>
            SynaptixLab Solution
          </a>
        </span>
      </div>

    </div>
  </footer>
);

export default Footer;