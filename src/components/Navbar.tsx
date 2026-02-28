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
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
    dropdown: [
      { label: "Our School", desc: "History, vision & mission", icon: School, to: "/about#our-school" },
      { label: "Principal's Message", desc: "A word from our principal", icon: User, to: "/about#principal" },
      { label: "Achievements", desc: "Awards & recognitions", icon: Trophy, to: "/about#achievements" },
      { label: "Management", desc: "Board & trustees", icon: Users, to: "/about#management" },
      { label: "Campus Tour", desc: "Explore our campus", icon: MapPin, to: "/about#campus" },
    ]
  },
  {
    label: "Academics",
    to: "/academics",
    dropdown: [
      { label: "Administration", desc: "Meet our leadership", icon: Users, to: "/academics#administration" },
      { label: "Curriculum", desc: "CBSE syllabus & framework", icon: BookOpen, to: "/academics#curriculum" },
      { label: "Examination", desc: "Evaluation & schedule", icon: FileText, to: "/academics#examination" },
      { label: "Methodology", desc: "Pedagogical approach", icon: Activity, to: "/academics#methodology" },
      { label: "Calendar", desc: "Events & dates", icon: Calendar, to: "/academics#calendar" },
    ]
  },
  {
    label: "Hostel",
    to: "/hostel",
    dropdown: [
      { label: "Overview", desc: "Residential facility", icon: Home, to: "/hostel#overview" },
      { label: "Boys Hostel", desc: "Rooms & facilities", icon: User, to: "/hostel#boys" },
      { label: "Girls Hostel", desc: "Rooms & facilities", icon: User, to: "/hostel#girls" },
      { label: "Mess & Dining", desc: "Nutrition & meals", icon: Utensils, to: "/hostel#mess" },
      { label: "Safety", desc: "24x7 security", icon: Shield, to: "/hostel#security" },
    ]
  },
  {
    label: "Notices",
    to: "/notices",
    dropdown: [
      { label: "All Notices", desc: "Latest announcements", icon: Megaphone, to: "/notices#all" },
      { label: "Exam Notices", desc: "Timetable & results", icon: FileText, to: "/notices#exam" },
      { label: "Admissions", desc: "Enrollment updates", icon: GraduationCap, to: "/notices#admission" },
      { label: "Holidays", desc: "Vacation list", icon: Calendar, to: "/notices#holiday" },
      { label: "Circulars", desc: "Official circulars", icon: File, to: "/notices#circulars" },
    ]
  },
  {
    label: "Contact",
    to: "/contact",
    dropdown: [
      { label: "Location", desc: "Find us on map", icon: MapPin, to: "/contact#location" },
      { label: "Phone", desc: "Call us directly", icon: Phone, to: "/contact#phone" },
      { label: "Email", desc: "Send a message", icon: Mail, to: "/contact#email" },
      { label: "Office Hours", desc: "Availability", icon: Clock, to: "/contact#hours" },
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenu(null);
  }, [location]);

  useEffect(() => {
    if (isOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, searchOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between px-4 md:px-8">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${
                scrolled ? "bg-[#f5a623]" : "bg-white/20"
              }`}
            >
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="font-['Poppins'] font-bold text-xl leading-none">
              <span
                className={`transition-colors ${
                  scrolled ? "text-[#1a1a3e]" : "text-white"
                }`}
              >
                Gyan
              </span>
              <span className="text-[#f5a623]">Jyoti</span>
            </div>
          </Link>
          {/* ── END LOGO ── */}

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.to === "/"
                  ? location.pathname === item.to
                  : location.pathname.startsWith(item.to);

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    item.dropdown && setActiveDropdown(null)
                  }
                >
                  <Link
                    to={item.to}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-[0.9rem] font-medium font-['Poppins'] transition-all duration-200 ${
                      isActive
                        ? "bg-[#f5a623] text-white"
                        : scrolled
                        ? "text-[#1f2937] hover:text-[#f5a623]"
                        : "text-white hover:text-[#f5a623]"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Panel */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-t-[3px] border-[#f5a623] overflow-hidden py-2"
                        >
                          {item.dropdown.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.to}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-[#fff8e7] group/item transition-colors border-b border-gray-100 last:border-0"
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#fff8e7] flex items-center justify-center shrink-0 group-hover/item:bg-[#f5a623] transition-colors">
                                <subItem.icon className="w-5 h-5 text-[#f5a623] group-hover/item:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="font-['Poppins'] font-medium text-[0.85rem] text-[#1f2937] group-hover/item:text-[#f5a623] transition-colors">
                                  {subItem.label}
                                </div>
                                <div className="font-['Poppins'] text-[0.72rem] text-[#6b7280]">
                                  {subItem.desc}
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
          {/* ── END DESKTOP NAV ── */}

          {/* ── RIGHT SIDE (Search + Apply Now) ── */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 transition-colors ${
                scrolled
                  ? "text-gray-500 hover:text-[#f5a623]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-[#f5a623] hover:bg-[#d99015] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md"
            >
              Apply Now
            </Link>
          </div>
          {/* ── END RIGHT SIDE ── */}

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-[#f5a623]" : "text-white"
            }`}
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
          {/* ── END MOBILE HAMBURGER ── */}

        </div>
        {/* ── END CONTAINER ── */}

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto pb-20"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => {
                  if (!item.dropdown) {
                    return (
                      <div
                        key={item.label}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-4 text-[#1f2937] font-medium font-['Poppins']"
                        >
                          {item.label}
                        </Link>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <div
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between px-4 py-4 text-[#1f2937] font-medium font-['Poppins'] cursor-pointer"
                      >
                        <span
                          className={
                            mobileSubmenu === item.label
                              ? "text-[#f5a623]"
                              : ""
                          }
                        >
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileSubmenu === item.label
                              ? "rotate-180 text-[#f5a623]"
                              : "text-gray-400"
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {mobileSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            {item.dropdown.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.to}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-6 py-3 border-l-4 border-transparent hover:border-[#f5a623] hover:bg-[#fff8e7] transition-colors"
                              >
                                <subItem.icon className="w-4 h-4 text-[#f5a623]" />
                                <span className="text-sm text-gray-600 font-['Poppins']">
                                  {subItem.label}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Apply Now - Mobile */}
                <div className="p-4 mt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-[#f5a623] text-white text-center py-3 rounded-full font-bold shadow-md font-['Poppins']"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* ── END MOBILE MENU ── */}

      </nav>

      {/* ── SEARCH MODAL ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#1a1a3e]/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSearchOpen(false);
            }}
          >
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full bg-white rounded-2xl py-4 pl-6 pr-16 text-xl text-[#1f2937] placeholder:text-gray-400 focus:outline-none shadow-2xl font-['Poppins']"
                  autoFocus
                  onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#f5a623] hover:bg-[#d99015] text-white px-6 rounded-xl transition-colors">
                  <Search className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/60 mb-4 text-sm uppercase tracking-wider font-['Poppins']">
                  Quick Links
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Admissions", "Hostel", "Notices", "Contact"].map(
                    (link) => (
                      <Link
                        key={link}
                        to={`/${link.toLowerCase()}`}
                        onClick={() => setSearchOpen(false)}
                        className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-[#f5a623] transition-colors text-sm font-['Poppins']"
                      >
                        {link}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ── END SEARCH MODAL ── */}
    </>
  );
};

export default Navbar;