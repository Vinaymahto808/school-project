import { Link } from "react-router-dom";
import {
  GraduationCap, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Youtube,
  ArrowRight, Send,
} from "lucide-react";

const NAV_LINKS = [
  { to: "/about",     label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/hostel",    label: "Hostel" },
  { to: "/notices",   label: "Notices" },
  { to: "/contact",   label: "Contact" },
];

const SOCIALS = [
  { Icon: Facebook,  href: "#", label: "Facebook",  color: "#1877F2" },
  { Icon: Twitter,   href: "#", label: "Twitter",   color: "#1DA1F2" },
  { Icon: Instagram, href: "#", label: "Instagram",  color: "#E1306C" },
  { Icon: Youtube,   href: "#", label: "YouTube",   color: "#FF0000" },
];

const CONTACT = [
  {
    Icon: MapPin,
    text: "Kerwar, Gandigram Paraspani Road, Godda, IN 814147",
  },
  { Icon: Phone, text: "+91 9973336442" },
  { Icon: Mail,  text: "info@gyanjyoti.edu" },
];

/* ─── tiny divider dot ─── */
const Dot = () => (
  <span className="inline-block w-1 h-1 rounded-full mx-2 align-middle bg-white/20" />
);

const Footer = () => (
  <footer
    className="relative overflow-hidden text-white"
    style={{
      background: "linear-gradient(160deg, #0f0c29 0%, #1a1560 45%, #0f2027 100%)",
    }}
  >
    {/* ── decorative top border glow ── */}
    <div
      className="absolute top-0 inset-x-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #6C63FF 30%, #48C9B0 70%, transparent 100%)",
      }}
    />

    {/* ── subtle grid texture ── */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    {/* ── glowing orbs ── */}
    <div
      className="absolute top-[-8rem] left-[-6rem] w-80 h-80 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, #6C63FF22 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
    <div
      className="absolute bottom-[-6rem] right-[-4rem] w-72 h-72 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, #48C9B022 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    {/* ════ MAIN CONTENT ════ */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ── Brand ── */}
        <div className="lg:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #48C9B0)",
                boxShadow: "0 4px 18px #6C63FF55",
              }}
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-base leading-tight">
              Gyan Jyoti<br />
              <span className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "#48C9B0" }}>
                International School
              </span>
            </span>
          </div>

          <p className="text-white/55 text-sm leading-relaxed mb-6">
            Igniting the spark of knowledge and nurturing the flames of curiosity. Every student at Gyan Jyoti is empowered to shine bright and reach their full potential.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = color + "22";
                  e.currentTarget.style.borderColor = color + "66";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div>
          <h4
            className="text-sm font-bold tracking-[0.18em] uppercase mb-6"
            style={{ color: "#48C9B0" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <ArrowRight
                    className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    style={{ color: "#6C63FF" }}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <h4
            className="text-sm font-bold tracking-[0.18em] uppercase mb-6"
            style={{ color: "#48C9B0" }}
          >
            Contact Us
          </h4>
          <ul className="space-y-4">
            {CONTACT.map(({ Icon, text }, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(108,99,255,0.15)", border: "1px solid #6C63FF33" }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: "#6C63FF" }} />
                </div>
                <span className="text-sm text-white/60 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Newsletter ── */}
        <div>
          <h4
            className="text-sm font-bold tracking-[0.18em] uppercase mb-6"
            style={{ color: "#48C9B0" }}
          >
            Newsletter
          </h4>
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            Stay updated with school events, news, and announcements. Subscribe to our newsletter.
          </p>

          {/* Input */}
          <div
            className="flex items-center gap-2 p-1.5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 px-3 focus:outline-none"
            />
            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:scale-105 shrink-0"
              style={{
                background: "linear-gradient(90deg, #6C63FF, #48C9B0)",
                boxShadow: "0 4px 14px #6C63FF40",
              }}
            >
              <Send className="w-3 h-3" />
              Subscribe
            </button>
          </div>

          {/* Tiny trust line */}
          <p className="text-white/30 text-xs mt-3 pl-1">
            No spam, unsubscribe anytime.
          </p>
        </div>

      </div>

      {/* ════ BOTTOM BAR ════ */}
      <div
        className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span>© 2025 Gyan Jyoti International School. All rights reserved.</span>
        <div className="flex items-center">
          <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Dot />
          <Link to="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          <Dot />
          <Link to="/sitemap" className="hover:text-white/70 transition-colors">Sitemap</Link>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;