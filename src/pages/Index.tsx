import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, BookOpen, FlaskConical, Trophy, Heart,
  Music, Laptop, MapPin, Phone, Mail, GraduationCap,
} from "lucide-react";

import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

import schoolChildrenImg from "@/assets/school-children.jpg";
import classroomImg from "@/assets/classroom.jpg";
import admin1 from "@/assets/admin1.jpg";
import admin2 from "@/assets/admin2.jpg";

/* ─────────────────── DATA ─────────────────── */

const heroSlides = [
  {
    image: schoolChildrenImg,
    subtitle: "Where every child shines bright — nurturing young minds with love, creativity, and joyful learning.",
    badge: "Excellence in Teaching",
    accentFrom: "#6C63FF",
    accentTo: "#48C9B0",
  },
  {
    image: admin1,
    subtitle: "Quality education for every child — building strong foundations and preparing for a bright future.",
    badge: "Quality Education for All",
    accentFrom: "#FF6B6B",
    accentTo: "#FFA07A",
  },
  {
    image: admin2,
    subtitle: "Every child is special here — we celebrate kindness, confidence and the joy of learning together.",
    badge: "Support for Every Student",
    accentFrom: "#2E86C1",
    accentTo: "#7B5EA7",
  },
];

const features = [
  { icon: BookOpen,     title: "Smart Curriculum",   desc: "Exciting lessons that make studying feel like an adventure every single day.",  color: "#6C63FF", bg: "#F0EEFF" },
  { icon: FlaskConical, title: "Modern Labs",         desc: "Fully equipped science labs where students explore and discover hands-on.",        color: "#2E86C1", bg: "#E8F4FD" },
  { icon: Trophy,       title: "Sports & Games",      desc: "Championship-level facilities that promote teamwork and a healthy lifestyle.",     color: "#FF6B6B", bg: "#FFF0F0" },
  { icon: Music,        title: "Arts & Music",        desc: "Sing, dance, paint and perform — let every child's inner star shine bright.",      color: "#F59E0B", bg: "#FFFBEB" },
  { icon: Laptop,       title: "Digital Learning",    desc: "Smart classrooms and e-learning tools making every student future-ready.",        color: "#10B981", bg: "#ECFDF5" },
  { icon: Heart,        title: "Student Wellbeing",   desc: "Every child feels loved, safe and cared for in our warm school family.",          color: "#EC4899", bg: "#FDF2F8" },
];

/* ─────────────────── COMPONENT ─────────────────── */

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <Layout>

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ paddingTop: "70px", minHeight: "100svh" }}
      >
        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${currentSlide}`}
            src={slide.image}
            alt="School"
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.60) 100%)",
          }}
        />

        {/* ─── Identity card top ─── */}
        <div className="relative z-10 flex justify-center pt-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col items-center text-center px-6 py-4 rounded-2xl w-full"
            style={{
              background: "rgba(255,255,255,0.11)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              maxWidth: "480px",
            }}
          >
            {/* Est pill */}
            <span
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.58rem] font-bold tracking-[0.18em] uppercase mb-2.5"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.80)",
              }}
            >
              ✦ Est. 2021 · Godda, Jharkhand ✦
            </span>

            {/* Logo + name */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #48C9B0)",
                  boxShadow: "0 0 16px #6C63FF55",
                }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h1
                className="font-extrabold text-left"
                style={{
                  fontSize: "clamp(0.95rem, 3.5vw, 1.35rem)",
                  lineHeight: 1.2,
                  color: "#ffffff",
                  textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                }}
              >
                Gyan Jyoti International School
              </h1>
            </div>

            {/* Gradient divider */}
            <div
              className="w-20 h-[3px] rounded-full mb-2"
              style={{ background: "linear-gradient(90deg, #6C63FF, #48C9B0, #FFD93D)" }}
            />

            {/* Tagline */}
            <p
              className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase"
              style={{ color: "rgba(200,220,255,0.72)" }}
            >
              Where Knowledge Meets Character · CBSE Affiliated
            </p>
          </motion.div>
        </div>

        {/* ─── Hero bottom content ─── */}
        <div className="relative z-10 flex-1 flex items-end pb-14 px-5 md:px-12">
          <div className="w-full max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <span
                  className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-xs font-bold"
                  style={{
                    background: `linear-gradient(90deg, ${slide.accentFrom}, ${slide.accentTo})`,
                    color: "#fff",
                    boxShadow: `0 4px 16px ${slide.accentFrom}50`,
                  }}
                >
                  ✦ {slide.badge}
                </span>

                {/* Seats line */}
                <p
                  className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(255,220,80,0.90)" }}
                >
                  ◆ Limited seats available — Admissions open ◆
                </p>

                {/* Subtitle */}
                <p
                  className="text-sm md:text-base max-w-md mb-7 leading-relaxed font-medium"
                  style={{ color: "rgba(235,242,255,0.92)", textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
                >
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(90deg, ${slide.accentFrom}, ${slide.accentTo})`,
                      color: "#fff",
                      boxShadow: `0 6px 20px ${slide.accentFrom}55`,
                    }}
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      border: "1.5px solid rgba(255,255,255,0.45)",
                      color: "#fff",
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Explore School
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                height: "8px",
                width: i === currentSlide ? "26px" : "8px",
                background: i === currentSlide
                  ? `linear-gradient(90deg, ${s.accentFrom}, ${s.accentTo})`
                  : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ══════════════ FEATURES ══════════════ */}
      <section className="py-16 px-5 bg-white">
        <div className="container-custom max-w-6xl mx-auto">

          <AnimatedSection>
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase mb-4"
                style={{ background: "#FFF3CC", color: "#D97706" }}
              >
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3" style={{ color: "#1e293b" }}>
                Everything Your Child Needs to{" "}
                <span style={{
                  background: "linear-gradient(90deg, #6C63FF, #48C9B0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Thrive
                </span>
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
                A nurturing environment where academic excellence, creativity, and personal growth go hand in hand.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="rounded-2xl p-6 h-full relative overflow-hidden"
                  style={{
                    background: f.bg,
                    border: `1.5px solid ${f.color}20`,
                    boxShadow: `0 2px 16px ${f.color}12`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "#fff", boxShadow: `0 3px 12px ${f.color}28` }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <h3 className="font-extrabold text-sm mb-1.5" style={{ color: f.color }}>{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  {/* Accent line */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-[3px] rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${f.color}, ${f.color}44)` }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section
        className="py-16 px-5"
        style={{ background: "linear-gradient(135deg, #F8FAFF 0%, #FFF8F0 100%)" }}
      >
        <div className="container-custom max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <AnimatedSection delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={classroomImg} alt="Classroom" className="w-full h-full object-cover" />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 px-4 py-2.5 rounded-2xl shadow-lg"
                style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
              >
                <div className="text-lg font-extrabold" style={{ color: "#6C63FF" }}>5+ Years</div>
                <div className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-wider">Shaping Futures</div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase mb-4"
              style={{ background: "#E8F4FD", color: "#2E86C1" }}
            >
              About Our School
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "#1e293b" }}>
              A Place Where Every Child
              <span
                className="block mt-1"
                style={{
                  background: "linear-gradient(90deg, #2E86C1, #48C9B0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Feels at Home
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Gyan Jyoti International School was founded on the belief that quality education should be accessible to all. Our dedicated educators create a warm, inclusive environment where every student discovers their potential.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              From science experiments to sports day, art classes to school trips — there's always something wonderful happening here.
            </p>

            {/* Stats */}
            <div className="flex gap-3 mb-7">
              {[
                { value: "500+", label: "Students",  color: "#6C63FF", bg: "#F0EEFF" },
                { value: "50+",  label: "Teachers",  color: "#2E86C1", bg: "#E8F4FD" },
                { value: "15+",  label: "Awards",    color: "#FF6B6B", bg: "#FFF0F0" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 text-center py-3 px-2 rounded-2xl"
                  style={{ background: s.bg, border: `1.5px solid ${s.color}20` }}
                >
                  <div className="font-extrabold text-lg leading-none mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[0.6rem] text-gray-500 font-semibold uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(90deg, #2E86C1, #48C9B0)",
                color: "#fff",
                boxShadow: "0 6px 18px #2E86C138",
              }}
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section
        className="py-16 px-5 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1560 0%, #2E86C1 60%, #48C9B0 100%)" }}
      >
        <div className="absolute top-[-3rem] right-[-3rem] w-52 h-52 rounded-full bg-white opacity-[0.06] pointer-events-none" />
        <div className="absolute bottom-[-2rem] left-[-2rem] w-40 h-40 rounded-full bg-white opacity-[0.06] pointer-events-none" />

        <AnimatedSection>
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase mb-5 bg-white/15 text-white/90">
              Admissions Open
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Give Your Child the Best<br />Start in Life
            </h2>
            <p className="text-white/75 text-sm mb-8 leading-relaxed max-w-md mx-auto">
              Join hundreds of happy students at Gyan Jyoti. Seats are filling fast — secure your child's place today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ color: "#2E86C1", boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
              >
                Apply for Admission
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.40)",
                  color: "#fff",
                  background: "rgba(255,255,255,0.10)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ══════════════ MAP ══════════════ */}
      <section className="py-14 px-5 bg-white">
        <div className="container-custom max-w-6xl mx-auto">

          <AnimatedSection>
            <div className="text-center mb-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase mb-3"
                style={{ background: "#F0EEFF", color: "#6C63FF" }}
              >
                Find Us
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#1e293b" }}>
                Visit Our{" "}
                <span style={{
                  background: "linear-gradient(90deg, #6C63FF, #48C9B0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Campus
                </span>
              </h2>
              <p className="text-gray-400 text-sm">Kerwar, Gandigram Paraspani Road, Godda, Jharkhand — IN 814147</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-3 gap-5 items-stretch">

              {/* Contact cards */}
              <div className="flex flex-col gap-4">
                {[
                  { Icon: MapPin, label: "Address", value: "Kerwar, Gandigram Paraspani Road, Godda, IN 814147", color: "#6C63FF", bg: "#F0EEFF" },
                  { Icon: Phone, label: "Phone",    value: "+91 9973336442",     color: "#2E86C1", bg: "#E8F4FD" },
                  { Icon: Mail,  label: "Email",    value: "info@gyanjyoti.edu", color: "#10B981", bg: "#ECFDF5" },
                ].map(({ Icon, label, value, color, bg }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{ background: bg, border: `1.5px solid ${color}20` }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#fff", boxShadow: `0 2px 10px ${color}25` }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div>
                      <div className="text-[0.6rem] font-bold tracking-widest uppercase mb-0.5" style={{ color }}>{label}</div>
                      <div className="text-xs text-gray-700 font-semibold leading-snug">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg"
                style={{ minHeight: "300px", border: "1.5px solid #E0E7FF" }}
              >
                <iframe
                  title="Gyan Jyoti International School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5!2d87.2!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGyan+Jyoti+International+School+Godda!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px", display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="text-center mt-7">
              <a
                href="https://maps.google.com/?q=Gyan+Jyoti+International+School+Godda+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(90deg, #6C63FF, #48C9B0)",
                  color: "#fff",
                  boxShadow: "0 6px 18px #6C63FF30",
                }}
              >
                <MapPin className="w-4 h-4" />
                Get Directions on Google Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </Layout>
  );
};

export default Index;