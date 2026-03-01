import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, Search, GraduationCap, ChevronDown,
  School, User, Trophy, Users, MapPin,
  BookOpen, Calendar, Activity, FileText,
  Home, Utensils, Shield, Phone, Mail, Clock,
  Megaphone, File
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About", to: "/about",
    dropdown: [
      { label: "Our School",         desc: "History, vision & mission",  icon: School,  to: "/about#our-school" },
      { label: "Principal's Message",desc: "A word from our principal",  icon: User,    to: "/about#principal" },
      { label: "Achievements",       desc: "Awards & recognitions",      icon: Trophy,  to: "/about#achievements" },
      { label: "Management",         desc: "Board & trustees",           icon: Users,   to: "/about#management" },
      { label: "Campus Tour",        desc: "Explore our campus",         icon: MapPin,  to: "/about#campus" },
    ]
  },
  {
    label: "Academics", to: "/academics",
    dropdown: [
      { label: "Administration", desc: "Meet our leadership",       icon: Users,    to: "/academics#administration" },
      { label: "Curriculum",     desc: "CBSE syllabus & framework", icon: BookOpen, to: "/academics#curriculum" },
      { label: "Examination",    desc: "Evaluation & schedule",     icon: FileText, to: "/academics#examination" },
      { label: "Methodology",    desc: "Pedagogical approach",      icon: Activity, to: "/academics#methodology" },
      { label: "Calendar",       desc: "Events & dates",            icon: Calendar, to: "/academics#calendar" },
    ]
  },
  {
    label: "Hostel", to: "/hostel",
    dropdown: [
      { label: "Overview",     desc: "Residential facility", icon: Home,     to: "/hostel#overview" },
      { label: "Boys Hostel",  desc: "Rooms & facilities",   icon: User,     to: "/hostel#boys" },
      { label: "Girls Hostel", desc: "Rooms & facilities",   icon: User,     to: "/hostel#girls" },
      { label: "Mess & Dining",desc: "Nutrition & meals",    icon: Utensils, to: "/hostel#mess" },
      { label: "Safety",       desc: "24x7 security",        icon: Shield,   to: "/hostel#security" },
    ]
  },
  {
    label: "Notices", to: "/notices",
    dropdown: [
      { label: "All Notices",  desc: "Latest announcements", icon: Megaphone,    to: "/notices#all" },
      { label: "Exam Notices", desc: "Timetable & results",  icon: FileText,     to: "/notices#exam" },
      { label: "Admissions",   desc: "Enrollment updates",   icon: GraduationCap,to: "/notices#admission" },
      { label: "Holidays",     desc: "Vacation list",        icon: Calendar,     to: "/notices#holiday" },
      { label: "Circulars",    desc: "Official circulars",   icon: File,         to: "/notices#circulars" },
    ]
  },
  {
    label: "Contact", to: "/contact",
    dropdown: [
      { label: "Location",     desc: "Find us on map",    icon: MapPin, to: "/contact#location" },
      { label: "Phone",        desc: "Call us directly",  icon: Phone,  to: "/contact#phone" },
      { label: "Email",        desc: "Send a message",    icon: Mail,   to: "/contact#email" },
      { label: "Office Hours", desc: "Availability",      icon: Clock,  to: "/contact#hours" },
    ]
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [searchOpen, setSearchOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setMobileSubmenu(null); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen || searchOpen ? "hidden" : "unset";
  }, [isOpen, searchOpen]);

  /* ── colours ── */
  const scrolledBg   = "#ffffff";
  const transparentBg = "transparent";
  const accent        = "#6C63FF";   /* purple */
  const accentAlt     = "#48C9B0";   /* teal   */
  const logoText      = scrolled ? "#1a1a3e" : "#ffffff";
  const linkColor     = scrolled ? "#374151" : "rgba(255,255,255,0.92)";
  const linkHover     = accent;

  return (
    <>
      {/* ═══════════════ NAV ═══════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px]"
        style={{
          background: scrolled ? scrolledBg : transparentBg,
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Gradient bottom border when scrolled */}
        {scrolled && (
          <div
            className="absolute bottom-0 inset-x-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, ${accent}, ${accentAlt})` }}
          />
        )}

        <div className="container-custom h-full flex items-center justify-between px-4 md:px-8">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
              style={{
                background: scrolled
                  ? `linear-gradient(135deg, ${accent}, ${accentAlt})`
                  : "rgba(255,255,255,0.18)",
                boxShadow: scrolled ? `0 0 16px ${accent}40` : "none",
              }}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight flex flex-col font-['Poppins']">
              <span
                className="font-extrabold text-[1rem] tracking-wide transition-colors duration-300"
                style={{ color: logoText }}
              >
                Gyan Jyoti
              </span>
              <span
                className="font-bold text-[0.58rem] tracking-[0.14em] uppercase transition-colors duration-300"
                style={{ color: accent }}
              >
                International School
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = item.to === "/"
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to);

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-full text-[0.875rem] font-semibold font-['Poppins'] transition-all duration-200"
                    style={{
                      color: isActive ? "#ffffff" : linkColor,
                      background: isActive
                        ? `linear-gradient(90deg, ${accent}, ${accentAlt})`
                        : "transparent",
                      boxShadow: isActive ? `0 4px 14px ${accent}40` : "none",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.color = accent;
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = linkColor;
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{ transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0)" }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-[272px] bg-white rounded-2xl overflow-hidden py-2"
                          style={{
                            boxShadow: "0 12px 40px rgba(108,99,255,0.15), 0 2px 8px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(108,99,255,0.12)",
                            borderTop: `3px solid ${accent}`,
                          }}
                        >
                          {item.dropdown.map((sub, idx) => (
                            <Link
                              key={idx}
                              to={sub.to}
                              className="flex items-start gap-3 px-4 py-2.5 transition-colors duration-150 border-b border-gray-50 last:border-0 group/sub"
                              style={{ background: "transparent" }}
                              onMouseEnter={e => (e.currentTarget.style.background = "#F5F3FF")}
                              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-150"
                                style={{ background: "#F0EEFF" }}
                                onMouseEnter={e => {
                                  e.currentTarget.style.background = accent;
                                  const icon = e.currentTarget.querySelector("svg");
                                  if (icon) (icon as HTMLElement).style.color = "#fff";
                                }}
                                onMouseLeave={e => {
                                  e.currentTarget.style.background = "#F0EEFF";
                                  const icon = e.currentTarget.querySelector("svg");
                                  if (icon) (icon as HTMLElement).style.color = accent;
                                }}
                              >
                                <sub.icon className="w-4 h-4 transition-colors" style={{ color: accent }} />
                              </div>
                              <div>
                                <div className="font-['Poppins'] font-semibold text-[0.82rem] text-gray-800 leading-tight">
                                  {sub.label}
                                </div>
                                <div className="font-['Poppins'] text-[0.7rem] text-gray-400 mt-0.5">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                color: scrolled ? "#6b7280" : "rgba(255,255,255,0.80)",
                background: scrolled ? "#F3F4F6" : "rgba(255,255,255,0.12)",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.background = "#F0EEFF"; }}
              onMouseLeave={e => {
                e.currentTarget.style.color = scrolled ? "#6b7280" : "rgba(255,255,255,0.80)";
                e.currentTarget.style.background = scrolled ? "#F3F4F6" : "rgba(255,255,255,0.12)";
              }}
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full font-bold text-sm font-['Poppins'] transition-all duration-300 hover:scale-105 active:scale-95 text-white"
              style={{
                background: `linear-gradient(90deg, ${accent}, ${accentAlt})`,
                boxShadow: `0 4px 16px ${accent}45`,
              }}
            >
              Apply Now
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{
              color: scrolled ? accent : "#ffffff",
              background: scrolled ? "#F0EEFF" : "rgba(255,255,255,0.15)",
            }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </nav>

      {/* ═══════════════ MOBILE MENU ═══════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-[70px] z-40 overflow-y-auto"
            style={{ background: "#ffffff" }}
          >
            {/* Top gradient strip */}
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${accent}, ${accentAlt})` }} />

            <div className="p-5 space-y-1 pb-24">
              {navItems.map((item) => {
                if (!item.dropdown) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold font-['Poppins'] text-sm transition-colors"
                      style={{ color: "#374151" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#F5F3FF"; e.currentTarget.style.color = accent; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold font-['Poppins'] text-sm transition-colors"
                      style={{
                        color: mobileSubmenu === item.label ? accent : "#374151",
                        background: mobileSubmenu === item.label ? "#F5F3FF" : "transparent",
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-200"
                        style={{
                          color: mobileSubmenu === item.label ? accent : "#9ca3af",
                          transform: mobileSubmenu === item.label ? "rotate(180deg)" : "rotate(0)",
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileSubmenu === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-2"
                        >
                          <div
                            className="ml-4 pl-4 py-2 my-1 rounded-xl space-y-0.5"
                            style={{ background: "#FAFAFA", borderLeft: `3px solid ${accent}` }}
                          >
                            {item.dropdown.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={sub.to}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors"
                                style={{ color: "#4b5563" }}
                                onMouseEnter={e => { e.currentTarget.style.background = "#F0EEFF"; e.currentTarget.style.color = accent; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4b5563"; }}
                              >
                                <sub.icon className="w-4 h-4 shrink-0" style={{ color: accent }} />
                                <span className="text-xs font-medium font-['Poppins']">{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Apply Now — pinned bottom */}
            <div
              className="fixed bottom-0 left-0 right-0 p-4"
              style={{ background: "#fff", borderTop: "1px solid #f3f4f6" }}
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3.5 rounded-2xl font-bold text-sm text-white text-center font-['Poppins'] transition-all hover:scale-[1.02] active:scale-95"
                style={{ background: `linear-gradient(90deg, ${accent}, ${accentAlt})`, boxShadow: `0 4px 18px ${accent}45` }}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ SEARCH MODAL ═══════════════ */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(15,12,45,0.88)", backdropFilter: "blur(8px)" }}
            onClick={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}
          >
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.70)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; e.currentTarget.style.color = "rgba(255,255,255,0.70)"; }}
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-xl"
            >
              {/* Search bar */}
              <div
                className="flex items-center rounded-2xl overflow-hidden mb-6"
                style={{
                  background: "#ffffff",
                  boxShadow: `0 8px 40px ${accent}35`,
                }}
              >
                <input
                  type="text"
                  placeholder="Search classes, notices, admissions..."
                  className="flex-1 py-4 pl-5 pr-3 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none font-['Poppins']"
                  autoFocus
                  onKeyDown={e => e.key === "Escape" && setSearchOpen(false)}
                />
                <button
                  className="m-1.5 px-5 py-2.5 rounded-xl text-white font-bold text-sm font-['Poppins'] transition-all hover:scale-105"
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentAlt})` }}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Quick links */}
              <div className="text-center">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(200,200,255,0.55)" }}>
                  Quick Links
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Admissions", "Hostel", "Notices", "Contact"].map(link => (
                    <Link
                      key={link}
                      to={`/${link.toLowerCase()}`}
                      onClick={() => setSearchOpen(false)}
                      className="px-4 py-2 rounded-full text-sm font-semibold font-['Poppins'] transition-all hover:scale-105"
                      style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.80)", border: "1px solid rgba(255,255,255,0.15)" }}
                      onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = accent; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; e.currentTarget.style.color = "rgba(255,255,255,0.80)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;