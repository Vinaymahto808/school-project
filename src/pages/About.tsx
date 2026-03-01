import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  Target, Eye, Heart, Shield, Lightbulb, Users, Award,
  CheckCircle, Star,
} from "lucide-react";
import principal from "@/assets/principle.jpg";

/* ─── DATA ─── */

const timeline = [
  { year: "2021", emoji: "🏫", title: "Foundation",      desc: "Gyan Jyoti International School established with 120 bright young students.",  color: "#FF6B6B", bg: "#FFF0F0" },
  { year: "2022", emoji: "🔬", title: "Expansion",        desc: "New science block and auditorium inaugurated.",                                   color: "#F59E0B", bg: "#FFFBEB" },
  { year: "2023", emoji: "📜", title: "CBSE Affiliation", desc: "Received CBSE board affiliation — a proud milestone!",                           color: "#6C63FF", bg: "#F0EEFF" },
  { year: "2025", emoji: "💻", title: "Digital Campus",   desc: "Smart classrooms and Wi-Fi campus launched for modern learning.",                color: "#2E86C1", bg: "#E8F4FD" },
  { year: "2026", emoji: "🌟", title: "Growing Strong",   desc: "500+ happy students, 100% smiling faces!",                                       color: "#10B981", bg: "#ECFDF5" },
];

const values = [
  { icon: Heart,      emoji: "💛", title: "Compassion",  desc: "Empathy and kindness in every interaction.",            color: "#FF6B6B", bg: "#FFF0F0" },
  { icon: Shield,     emoji: "🛡️", title: "Integrity",   desc: "Honesty and ethical conduct as core principles.",        color: "#6C63FF", bg: "#F0EEFF" },
  { icon: Lightbulb,  emoji: "💡", title: "Innovation",  desc: "Fostering creative thinking and problem-solving.",       color: "#F59E0B", bg: "#FFFBEB" },
  { icon: Users,      emoji: "🤝", title: "Community",   desc: "Building strong bonds among students and staff.",        color: "#10B981", bg: "#ECFDF5" },
];

const awards = [
  { label: "CBSE Approved",           emoji: "✅" },
  { label: "Est. 2021",               emoji: "🗓️" },
  { label: "Best School Award 2025",  emoji: "🏆" },
  { label: "Green Campus",            emoji: "🌿" },
  { label: "CBSE Excellence",         emoji: "🎖️" },
];

/* ─── HELPERS ─── */

const SectionBadge = ({ children, color = "#6C63FF", bg = "#F0EEFF" }) => (
  <span
    className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold tracking-[0.18em] uppercase mb-4"
    style={{ background: bg, color }}
  >
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2
    className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3"
    style={{ color: "#1e293b" }}
  >
    {children}
  </h2>
);

/* ─── COMPONENT ─── */

const About = () => (
  <Layout>

    {/* ══════════════ HERO ══════════════ */}
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center px-5 py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, #6C63FF 0%, #2E86C1 45%, #48C9B0 100%)",
        paddingTop: "calc(70px + 4rem)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-4rem] left-[-4rem] w-64 h-64 rounded-full bg-white opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-[-3rem] right-[-3rem] w-48 h-48 rounded-full bg-white opacity-[0.07] pointer-events-none" />

      {/* Floating emojis */}
      {[
        { e: "📚", top: "15%", left: "6%",  delay: 0   },
        { e: "🌟", top: "20%", right: "8%", delay: 0.5 },
        { e: "🎓", bottom: "18%", left: "5%", delay: 1   },
        { e: "✏️", bottom: "20%", right: "6%", delay: 0.8 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="absolute text-xl md:text-2xl pointer-events-none select-none"
          style={{ top: d.top, bottom: d.bottom, left: d.left, right: d.right }}
          animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: d.delay }}
        >
          {d.e}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-5xl mb-4"
        >
          🏫
        </motion.div>
        <span className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold tracking-[0.18em] uppercase mb-5 bg-white/20 text-white">
          ✦ Our Story
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
          About Us 🌈
        </h1>
        <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          Learn about our journey, vision, and commitment to shaping tomorrow's happy, confident, and kind leaders! 💛
        </p>
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-12">
          <path d="M0,32 C360,0 1080,64 1440,32 L1440,48 L0,48 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>

    {/* ══════════════ VISION & MISSION ══════════════ */}
    <section className="py-14 px-5 bg-white">
      <div className="container-custom max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <SectionBadge color="#6C63FF" bg="#F0EEFF">🎯 Our Direction</SectionBadge>
            <SectionTitle>Vision & <span style={{ background: "linear-gradient(90deg,#6C63FF,#48C9B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mission</span></SectionTitle>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: Eye,
              emoji: "👁️",
              title: "Our Vision",
              text: "To be a globally recognized institution that empowers students with knowledge, character, and skills to excel in a dynamic world.",
              color: "#6C63FF", bg: "#F0EEFF",
              accentFrom: "#6C63FF", accentTo: "#48C9B0",
            },
            {
              icon: Target,
              emoji: "🎯",
              title: "Our Mission",
              text: "To provide holistic education through innovative teaching, strong values, and a nurturing environment that brings out the best in every child.",
              color: "#FF6B6B", bg: "#FFF0F0",
              accentFrom: "#FF6B6B", accentTo: "#FFD93D",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="relative rounded-3xl p-7 h-full overflow-hidden"
                style={{
                  background: item.bg,
                  border: `2px solid ${item.color}20`,
                  boxShadow: `0 6px 28px ${item.color}15`,
                }}
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${item.accentFrom}, ${item.accentTo})` }}
                />
                <div className="text-3xl mb-4">{item.emoji}</div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "#fff", boxShadow: `0 4px 16px ${item.color}30` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-extrabold text-lg mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════ PRINCIPAL'S MESSAGE ══════════════ */}
    <section
      className="py-14 px-5 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFBF0 0%, #F0F9FF 100%)" }}
    >
      {/* Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #FFD93D 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="container-custom max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8">
            <SectionBadge color="#F59E0B" bg="#FFFBEB">🎙️ A Message For You</SectionBadge>
            <SectionTitle>Principal's <span style={{ background: "linear-gradient(90deg,#F59E0B,#FF6B6B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Message</span></SectionTitle>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-3xl p-7 md:p-10 overflow-hidden"
            style={{
              background: "#ffffff",
              border: "2px solid #FFD93D33",
              boxShadow: "0 8px 40px rgba(245,158,11,0.12)",
            }}
          >
            {/* Top bar */}
            <div
              className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, #F59E0B, #FF6B6B, #FFD93D)" }}
            />

            <div className="flex flex-col sm:flex-row gap-7 items-center sm:items-start">
              {/* Photo */}
              <div className="relative shrink-0">
                <div
                  className="w-28 h-28 rounded-3xl overflow-hidden"
                  style={{ border: "3px solid #FFD93D", boxShadow: "0 6px 24px #F59E0B30" }}
                >
                  <img src={principal} alt="Principal" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 text-xl"
                >⭐</motion.div>
              </div>

              {/* Text */}
              <div className="text-center sm:text-left">
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mb-1">
                  <h3 className="font-extrabold text-xl" style={{ color: "#1e293b" }}>Dr. Dhananjay Mahto</h3>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wide"
                    style={{ background: "#FFF3CC", color: "#D97706" }}
                  >
                    Principal
                  </span>
                </div>
                <p className="text-xs font-semibold mb-4" style={{ color: "#94a3b8" }}>M.Ed, Ph.D.</p>

                {/* Quote */}
                <div
                  className="relative rounded-2xl px-5 py-4"
                  style={{ background: "#FFFBEB", border: "1px solid #FFD93D40" }}
                >
                  <span className="absolute -top-3 left-4 text-3xl" style={{ color: "#F59E0B" }}>"</span>
                  <p className="text-gray-600 text-sm leading-relaxed italic pt-2">
                    At Gyan Jyoti International School, we believe every child is a star waiting to shine. Education is not just about books — it's about discovering talents, building friendships, and growing into confident, kind human beings. Every child here is loved and every dream is nurtured.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

    {/* ══════════════ TIMELINE ══════════════ */}
    <section className="py-14 px-5 bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <SectionBadge color="#2E86C1" bg="#E8F4FD">🗺️ Our Journey</SectionBadge>
            <SectionTitle>How We <span style={{ background: "linear-gradient(90deg,#2E86C1,#48C9B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Grew!</span></SectionTitle>
          </div>
        </AnimatedSection>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: "linear-gradient(180deg, #6C63FF, #48C9B0, #FFD93D)" }}
          />
          {/* Left line — mobile */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 md:hidden"
            style={{ background: "linear-gradient(180deg, #6C63FF, #48C9B0, #FFD93D)" }}
          />

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                {/* Mobile layout */}
                <div className="flex md:hidden items-start gap-4 pl-10 relative">
                  {/* Dot */}
                  <motion.div
                    whileInView={{ scale: [0.8, 1.15, 1] }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-1 w-10 h-10 rounded-2xl flex items-center justify-center text-lg font-extrabold shrink-0 z-10"
                    style={{ background: t.bg, border: `2px solid ${t.color}40`, color: t.color }}
                  >
                    {t.emoji}
                  </motion.div>
                  <div
                    className="rounded-2xl p-4 w-full"
                    style={{ background: t.bg, border: `1.5px solid ${t.color}25` }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded-full" style={{ background: t.color, color: "#fff" }}>{t.year}</span>
                      <h4 className="font-extrabold text-sm" style={{ color: t.color }}>{t.title}</h4>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                </div>

                {/* Desktop layout — alternating */}
                <div className={`hidden md:flex items-center gap-6 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="rounded-3xl p-5"
                      style={{
                        background: t.bg,
                        border: `2px solid ${t.color}25`,
                        boxShadow: `0 4px 20px ${t.color}18`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{t.emoji}</span>
                        <h4 className="font-extrabold text-base" style={{ color: t.color }}>{t.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                    </motion.div>
                  </div>

                  {/* Year badge center */}
                  <motion.div
                    whileInView={{ scale: [0.7, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-sm shrink-0 z-10"
                    style={{ background: t.color, color: "#fff", boxShadow: `0 4px 18px ${t.color}55` }}
                  >
                    {t.year}
                  </motion.div>

                  <div className="flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ══════════════ VALUES ══════════════ */}
    <section
      className="py-14 px-5 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFBF0 0%, #F0F9FF 100%)" }}
    >
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #6BCB77 0%, transparent 70%)", filter: "blur(35px)" }} />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10">
            <SectionBadge color="#10B981" bg="#ECFDF5">💎 What We Stand For</SectionBadge>
            <SectionTitle>Our Core <span style={{ background: "linear-gradient(90deg,#10B981,#2E86C1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Values</span></SectionTitle>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="rounded-3xl p-5 text-center relative overflow-hidden"
                style={{
                  background: v.bg,
                  border: `2px solid ${v.color}20`,
                  boxShadow: `0 4px 20px ${v.color}15`,
                }}
              >
                <div className="text-3xl mb-3">{v.emoji}</div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "#fff", boxShadow: `0 3px 12px ${v.color}30` }}
                >
                  <v.icon className="w-5 h-5" style={{ color: v.color }} />
                </div>
                <h4 className="font-extrabold text-sm mb-1.5" style={{ color: v.color }}>{v.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                {/* Corner dot */}
                <div
                  className="absolute bottom-2 right-2 w-5 h-5 rounded-full opacity-20"
                  style={{ background: v.color }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════ AWARDS ══════════════ */}
    <section className="py-14 px-5 bg-white">
      <div className="container-custom max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <SectionBadge color="#F59E0B" bg="#FFFBEB">🏅 Recognition</SectionBadge>
          <SectionTitle>Awards & <span style={{ background: "linear-gradient(90deg,#F59E0B,#FF6B6B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Accreditations</span></SectionTitle>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">We're proud of what we've achieved — and we're just getting started! 🚀</p>

          <div className="flex flex-wrap justify-center gap-3">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4, scale: 1.06 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 280 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
                style={{
                  background: "#FFFBEB",
                  border: "2px solid #FFD93D55",
                  color: "#92400E",
                  boxShadow: "0 4px 14px #F59E0B18",
                }}
              >
                <span className="text-base">{a.emoji}</span>
                {a.label}
                <Award className="w-3.5 h-3.5 text-amber-400" />
              </motion.div>
            ))}
          </div>

          {/* Bottom happy note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-2"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Star className="w-5 h-5" fill="#FFD93D" stroke="none" />
                </motion.div>
              ))}
            </div>
            <p className="text-gray-500 text-xs font-semibold tracking-wide">Loved by 500+ students & families 💛</p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

  </Layout>
);

export default About;