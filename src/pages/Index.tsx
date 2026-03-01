import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MapPin, Phone, Mail, GraduationCap,
} from "lucide-react";

import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

import schoolChildrenImg from "@/assets/school-children.jpg";
import classroomImg from "@/assets/classroom.jpg";
import admin1 from "@/assets/admin1.jpg";
import admin2 from "@/assets/admin2.jpg";
import home from "@/assets/home.jpg";

/* ─────────────────── DATA ─────────────────── */

const heroSlides = [
  {
    image: home,
    subtitle: "Where every child shines bright — nurturing young minds with love, creativity, and joyful learning.",
    badge: "Excellence in Teaching",
    accentFrom: "#6C63FF",
    accentTo: "#48C9B0",
  },
  {
    image: admin1,
    subtitle: "Great students community, passionate teachers and a vibrant campus life — everything your child needs to thrive and grow.",
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
  { title: "Smart Classes",  desc: "Fun lessons with smart boards and projectors every day.",         img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" },
  { title: "Science Lab",    desc: "Students explore and experiment with hands-on science.",           img: "https://images.unsplash.com/photo-1532094349884-543559c06671?w=600&q=80" },
  { title: "Sports & Games", desc: "Cricket, football and outdoor games keep children healthy.",       img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80" },
  { title: "Art & Music",    desc: "Painting, singing and dancing let every child shine.",             img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80" },
  { title: "Extra Tuitions", desc: "Special sessions to help every student do their best.",            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
  { title: "Student Care",   desc: "Every child feels safe, loved and cared for here.",                img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80" },
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
      <section className="relative flex flex-col overflow-hidden" style={{ paddingTop: "70px", minHeight: "100svh" }}>
        <AnimatePresence mode="wait">
          <motion.img key={`img-${currentSlide}`} src={slide.image} alt="School"
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} />
        </AnimatePresence>
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.60) 100%)" }} />

        <div className="relative z-10 flex justify-center pt-6 px-4">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}
            className="flex flex-col items-center text-center px-6 py-4 rounded-2xl w-full"
            style={{ background: "rgba(255,255,255,0.11)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", maxWidth: "480px" }}>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.58rem] font-bold tracking-[0.18em] uppercase mb-2.5"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.80)" }}>
              ✦ Est. 2024 · Kerwar paraspani, Godda ✦
            </span>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #6C63FF, #48C9B0)", boxShadow: "0 0 16px #6C63FF55" }}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-extrabold text-left"
                style={{ fontSize: "clamp(0.95rem, 3.5vw, 1.35rem)", lineHeight: 1.2, color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
                Gyan Jyoti International School
              </h1>
            </div>
            <div className="w-20 h-[3px] rounded-full mb-2" style={{ background: "linear-gradient(90deg, #6C63FF, #48C9B0, #FFD93D)" }} />
            <p className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase" style={{ color: "rgba(200,220,255,0.72)" }}>
              Kerwar paraspani · CBSE Affiliated
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex items-end pb-14 px-5 md:px-12">
          <div className="w-full max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div key={`content-${currentSlide}`} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-xs font-bold"
                  style={{ background: `linear-gradient(90deg, ${slide.accentFrom}, ${slide.accentTo})`, color: "#fff", boxShadow: `0 4px 16px ${slide.accentFrom}50` }}>
                  ✦ {slide.badge}
                </span>
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(255,220,80,0.90)" }}>
                  ◆ Limited seats available — Admissions open ◆
                </p>
                <p className="text-sm md:text-base max-w-md mb-7 leading-relaxed font-medium"
                  style={{ color: "rgba(235,242,255,0.92)", textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}>
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ background: `linear-gradient(90deg, ${slide.accentFrom}, ${slide.accentTo})`, color: "#fff", boxShadow: `0 6px 20px ${slide.accentFrom}55` }}>
                    Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ border: "1.5px solid rgba(255,255,255,0.45)", color: "#fff", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                    Explore School
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((s, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className="rounded-full transition-all duration-300"
              style={{ height: "8px", width: i === currentSlide ? "26px" : "8px",
                background: i === currentSlide ? `linear-gradient(90deg, ${s.accentFrom}, ${s.accentTo})` : "rgba(255,255,255,0.35)" }} />
          ))}
        </div>
      </section>

      {/* ══════════════ FEATURES ══════════════ */}
      <section className="py-14 px-5 bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">What We Offer</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto">Everything your child needs to learn, grow and be happy at school.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="relative rounded-xl overflow-hidden shadow group" style={{ height: "180px" }}>
                  <img src={f.img} alt={f.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-bold text-sm leading-tight mb-0.5">{f.title}</p>
                    <p className="text-white/75 text-xs leading-snug">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT OUR SCHOOL — SIMPLE ══════════════ */}
      <section className="py-14 px-5 bg-white">
        <div className="container-custom max-w-5xl mx-auto">

          <AnimatedSection>
            <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-1">About Our School</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 border-b-2 border-blue-700 pb-3 mb-8">
              A Place Where Every Child Feels at Home
            </h2>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* LEFT — children image + stats */}
            <AnimatedSection delay={0.07} className="md:w-72 w-full shrink-0">
              <img
                src={schoolChildrenImg}
                alt="Students at school"
                className="w-full rounded-lg shadow object-cover object-top"
                style={{ height: "260px" }}
              />
              <div className="flex gap-2 mt-3">
                {[
                  { value: "500+", label: "Students" },
                  { value: "50+",  label: "Teachers" },
                  { value: "15+",  label: "Achivements"   },
                ].map((s) => (
                  <div key={s.label} className="flex-1 text-center py-2 px-1 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="font-extrabold text-blue-800 text-base leading-none">{s.value}</p>
                    <p className="text-gray-500 text-[0.6rem] font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* RIGHT — plain text */}
            <AnimatedSection delay={0.12} className="flex-1 min-w-0 text-sm text-gray-600 leading-relaxed">
              <p className="mb-4">
                Gyan Jyoti International School was founded on the belief that quality education should be
                accessible to every child. Our dedicated teachers create a warm and caring environment where
                every student can discover their true potential.
              </p>
              <p className="mb-4">
                From science experiments to sports day, art classes to school trips — there is always
                something wonderful happening here. We make sure every child loves coming to school every day.
              </p>
              <p className="mb-6">
                We follow the CBSE curriculum and focus on both academics and the overall development of
                each child — building confidence, curiosity and good values from an early age.
              </p>

              <ul className="space-y-2 mb-7">
                {[
                  "CBSE affiliated from Nursery to Class X",
                  "Experienced and caring teachers",
                  "Safe, clean and green school campus",
                  "Focus on studies, sports and good values",
                  "Regular parent–teacher meetings",
                ].map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-bold text-sm text-white bg-blue-800 hover:bg-blue-700 transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-16 px-5 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1560 0%, #2E86C1 60%, #48C9B0 100%)" }}>
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
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ color: "#2E86C1", boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}>
                Apply for Admission <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ border: "1.5px solid rgba(255,255,255,0.40)", color: "#fff", background: "rgba(255,255,255,0.10)" }}>
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
              <span className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase mb-3"
                style={{ background: "#F0EEFF", color: "#6C63FF" }}>Find Us</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#1e293b" }}>
                Visit For{" "}
                <span style={{ background: "linear-gradient(90deg, #6C63FF, #48C9B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Admission
                </span>
              </h2>
              <p className="text-gray-400 text-sm">Kerwar, Gandigram Paraspani Road, Godda, Jharkhand — IN 814147</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-3 gap-5 items-stretch">
              <div className="flex flex-col gap-4">
                {[
                  { Icon: MapPin, label: "Address", value: "Kerwar, Gandigram Paraspani Road, Godda, IN 814147", color: "#6C63FF", bg: "#F0EEFF" },
                  { Icon: Phone,  label: "Phone",   value: "+91 9973336442",     color: "#2E86C1", bg: "#E8F4FD" },
                  { Icon: Mail,   label: "Email",   value: "info@gyanjyoti.edu", color: "#10B981", bg: "#ECFDF5" },
                ].map(({ Icon, label, value, color, bg }) => (
                  <div key={label} className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{ background: bg, border: `1.5px solid ${color}20` }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#fff", boxShadow: `0 2px 10px ${color}25` }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div>
                      <div className="text-[0.6rem] font-bold tracking-widest uppercase mb-0.5" style={{ color }}>{label}</div>
                      <div className="text-xs text-gray-700 font-semibold leading-snug">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg" style={{ minHeight: "300px", border: "1.5px solid #E0E7FF" }}>
                <iframe title="Gyan Jyoti International School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5!2d87.2!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGyan+Jyoti+International+School+Godda!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0, minHeight: "300px", display: "block" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="text-center mt-7">
              <a href="https://maps.google.com/?q=Gyan+Jyoti+International+School+Godda+Jharkhand"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(90deg, #6C63FF, #48C9B0)", color: "#fff", boxShadow: "0 6px 18px #6C63FF30" }}>
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