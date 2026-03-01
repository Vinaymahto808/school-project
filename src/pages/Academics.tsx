import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  FlaskConical, Landmark, Palette, Monitor,
  BookOpen, Target, Eye, Star, CheckCircle, Calendar,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const departments = [
  {
    icon: FlaskConical,
    emoji: "🔬",
    name: "Science & Maths",
    desc: "Mathematics, Physics, Chemistry & Biology — explore how the world works!",
    color: "#2E86C1",
    bg: "#E8F4FD",
    gradFrom: "#2E86C1",
    gradTo: "#48C9B0",
  },
  {
    icon: Landmark,
    emoji: "🌍",
    name: "Social Studies",
    desc: "History, Geography, Political Science & Economics — learn about our amazing world!",
    color: "#10B981",
    bg: "#ECFDF5",
    gradFrom: "#10B981",
    gradTo: "#6BCB77",
  },
  {
    icon: Palette,
    emoji: "🎨",
    name: "Languages & Arts",
    desc: "English, Hindi, Art, Craft & Music — express yourself creatively every day!",
    color: "#FF6B6B",
    bg: "#FFF0F0",
    gradFrom: "#FF6B6B",
    gradTo: "#FFA07A",
  },
  {
    icon: Monitor,
    emoji: "💻",
    name: "Technology & Skills",
    desc: "Computer Applications, IT, Physical Education & Life Skills for the future!",
    color: "#6C63FF",
    bg: "#F0EEFF",
    gradFrom: "#6C63FF",
    gradTo: "#A78BFA",
  },
];

const curriculumStages = [
  {
    stage: "Primary",
    classes: "Classes I – V",
    emoji: "⭐",
    icon: Star,
    color: "#F59E0B",
    bg: "#FFFBEB",
    gradFrom: "#F59E0B",
    gradTo: "#FFD93D",
    description: "In the foundational years, we focus on creating a joyful and activity-based learning environment — building strong basics in reading, writing, and numeracy while sparking curiosity!",
    bullets: [
      "Strong language skills in English and a second language",
      "Foundational numeracy and mathematical concepts",
      "Exploring the world through Environmental Studies (EVS)",
      "Creativity with Art, Craft, and Music",
      "Physical fitness and teamwork through sports",
    ],
  },
  {
    stage: "Middle School",
    classes: "Classes VI – VIII",
    emoji: "👁️",
    icon: Eye,
    color: "#2E86C1",
    bg: "#E8F4FD",
    gradFrom: "#2E86C1",
    gradTo: "#48C9B0",
    description: "As students grow, we introduce subject-oriented learning to deepen knowledge. This stage bridges foundational learning with the structured approach for secondary school.",
    bullets: [
      "Science splits into basics of Physics, Chemistry & Biology",
      "Social Science covers History, Geography, and Civics",
      "Algebra and Geometry introduced in Mathematics",
      "Digital literacy with computer basics and applications",
      "Continued focus on languages, arts & physical education",
    ],
  },
  {
    stage: "Secondary",
    classes: "Classes IX – X",
    emoji: "🎯",
    icon: Target,
    color: "#FF6B6B",
    bg: "#FFF0F0",
    gradFrom: "#FF6B6B",
    gradTo: "#F472B6",
    description: "The secondary stage prepares students for CBSE board examinations with strong conceptual understanding, practical lab work, projects, and skill-based subjects.",
    bullets: [
      "Core: English, Second Language, Maths, Science & Social Science",
      "Science includes Physics, Chemistry & Biology",
      "Social Science: History, Geography, Political Science & Economics",
      "Mathematics: Algebra, Geometry, Statistics and more",
      "Mandatory skill subject — IT or Computer Applications",
    ],
  },
];

const examSchedule = [
  { exam: "Periodic Test I",   date: "July",             classes: "I – X", emoji: "📝", color: "#6C63FF", bg: "#F0EEFF" },
  { exam: "Half-Yearly Exam",  date: "September",        classes: "I – X", emoji: "📋", color: "#2E86C1", bg: "#E8F4FD" },
  { exam: "Periodic Test II",  date: "November",         classes: "I – X", emoji: "📄", color: "#F59E0B", bg: "#FFFBEB" },
  { exam: "Annual Exam",       date: "February – March", classes: "I – X", emoji: "🏆", color: "#10B981", bg: "#ECFDF5" },
];

/* ─── helpers ─── */
const SectionBadge = ({ children, color, bg }) => (
  <span
    className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold tracking-[0.18em] uppercase mb-4"
    style={{ background: bg, color }}
  >
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3" style={{ color: "#1e293b" }}>
    {children}
  </h2>
);

const GradText = ({ children, from, to }) => (
  <span style={{
    background: `linear-gradient(90deg, ${from}, ${to})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}>
    {children}
  </span>
);

/* ─────────────────── COMPONENT ─────────────────── */

const Academics = () => (
  <Layout>

    {/* ══════════════ HERO ══════════════ */}
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center px-5 py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, #2E86C1 0%, #6C63FF 50%, #A78BFA 100%)",
        paddingTop: "calc(70px + 4rem)",
      }}
    >
      {/* Blobs */}
      <div className="absolute top-[-4rem] left-[-4rem] w-64 h-64 rounded-full bg-white opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-[-3rem] right-[-3rem] w-48 h-48 rounded-full bg-white opacity-[0.07] pointer-events-none" />

      {/* Floating emojis */}
      {[
        { e: "📚", top: "18%", left: "5%",   delay: 0   },
        { e: "🔬", top: "22%", right: "7%",  delay: 0.5 },
        { e: "✏️", bottom: "20%", left: "6%", delay: 0.8 },
        { e: "🎓", bottom: "18%", right: "5%", delay: 1.2 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
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
          📖
        </motion.div>
        <span className="inline-block px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold tracking-[0.18em] uppercase mb-5 bg-white/20 text-white">
          ✦ CBSE Curriculum
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
          Academics 🎓
        </h1>
        <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          A joyful, CBSE-aligned curriculum focused on holistic development, creative thinking, and building confident young minds from Class I to X! 🌟
        </p>
      </motion.div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-12">
          <path d="M0,32 C360,0 1080,64 1440,32 L1440,48 L0,48 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>

    {/* ══════════════ SUBJECT GROUPS ══════════════ */}
    <section className="py-14 px-5 bg-white">
      <div className="container-custom max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <SectionBadge color="#6C63FF" bg="#F0EEFF">📚 What We Teach</SectionBadge>
            <SectionTitle>Subject <GradText from="#6C63FF" to="#48C9B0">Groups</GradText></SectionTitle>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Every subject is taught in a fun, engaging way that makes learning feel like an adventure! 🚀
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((d, i) => (
            <AnimatedSection key={i} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="rounded-3xl p-6 text-center h-full relative overflow-hidden"
                style={{
                  background: d.bg,
                  border: `2px solid ${d.color}22`,
                  boxShadow: `0 4px 22px ${d.color}18`,
                }}
              >
                {/* Top bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${d.gradFrom}, ${d.gradTo})` }}
                />

                <div className="text-4xl mb-3">{d.emoji}</div>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#fff", boxShadow: `0 4px 16px ${d.color}30` }}
                >
                  <d.icon className="w-6 h-6" style={{ color: d.color }} />
                </div>

                <h3 className="font-extrabold text-sm mb-2" style={{ color: d.color }}>{d.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>

                {/* Corner blob */}
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full opacity-15" style={{ background: d.color }} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════ CURRICULUM STAGES ══════════════ */}
    <section
      className="py-14 px-5 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFBF0 0%, #F0F9FF 100%)" }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10">
            <SectionBadge color="#2E86C1" bg="#E8F4FD">🗺️ Learning Path</SectionBadge>
            <SectionTitle>Our CBSE-Aligned <GradText from="#2E86C1" to="#48C9B0">Curriculum</GradText></SectionTitle>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Three progressive stages ensure a smooth and comprehensive learning journey from Class I to X. 🌈
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {curriculumStages.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-3xl p-6 md:p-8 relative overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: `2px solid ${s.color}22`,
                  boxShadow: `0 6px 28px ${s.color}14`,
                }}
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${s.gradFrom}, ${s.gradTo})` }}
                />

                {/* Header row */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: s.bg, border: `2px solid ${s.color}25` }}
                  >
                    {s.emoji}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-extrabold text-lg" style={{ color: s.color }}>{s.stage}</h3>
                      <span
                        className="px-3 py-0.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-wide"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {s.classes}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>

                {/* Bullets grid */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {s.bullets.map((bullet, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: s.color }}
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════ ASSESSMENT ══════════════ */}
    <section className="py-14 px-5 bg-white">
      <div className="container-custom max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <SectionBadge color="#FF6B6B" bg="#FFF0F0">📊 How We Test</SectionBadge>
            <SectionTitle>Assessment & <GradText from="#FF6B6B" to="#F59E0B">Examinations</GradText></SectionTitle>
          </div>
        </AnimatedSection>

        {/* Assessment info card */}
        <AnimatedSection delay={0.05}>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden"
            style={{
              background: "#FFFBEB",
              border: "2px solid #FFD93D33",
              boxShadow: "0 6px 28px rgba(245,158,11,0.10)",
            }}
          >
            <div
              className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, #F59E0B, #FFD93D, #FF6B6B)" }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">📋</div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#fff", boxShadow: "0 2px 12px #F59E0B30" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#F59E0B" }} />
              </div>
              <h3 className="font-extrabold text-base md:text-lg" style={{ color: "#92400E" }}>
                Assessment Pattern
              </h3>
            </div>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                📌 <strong>Classes IX–X:</strong> 80-mark final written exam + 20 marks for internal assessment (periodic tests, projects & practicals) — aligned with CBSE competency-based evaluation.
              </p>
              <p>
                📌 <strong>Classes I–VIII:</strong> Continuous & periodic assessments through tests, projects, and notebook submissions — stress-free and child-friendly! 😊
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Exam calendar */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="w-5 h-5" style={{ color: "#6C63FF" }} />
              <h3 className="font-extrabold text-lg" style={{ color: "#1e293b" }}>Annual Examination Calendar</h3>
            </div>
            <p className="text-gray-400 text-xs">Mark these dates on your calendar! 📅</p>
          </div>

          {/* Mobile-friendly card list */}
          <div className="grid sm:grid-cols-2 gap-4">
            {examSchedule.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                className="flex items-center gap-4 p-5 rounded-2xl relative overflow-hidden"
                style={{
                  background: e.bg,
                  border: `2px solid ${e.color}25`,
                  boxShadow: `0 4px 16px ${e.color}15`,
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${e.color}, ${e.color}88)` }}
                />
                <div className="text-3xl ml-2">{e.emoji}</div>
                <div className="flex-1">
                  <div className="font-extrabold text-sm mb-0.5" style={{ color: e.color }}>{e.exam}</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-gray-500 font-semibold">📅 {e.date}</span>
                    <span
                      className="text-[0.6rem] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wide"
                      style={{ background: e.color, color: "#fff" }}
                    >
                      Class {e.classes}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Happy note */}
        <AnimatedSection delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-3xl p-5 text-center"
            style={{
              background: "linear-gradient(135deg, #F0EEFF, #E8F4FD)",
              border: "2px solid #6C63FF22",
            }}
          >
            <div className="text-3xl mb-2">😊</div>
            <p className="text-sm font-bold" style={{ color: "#6C63FF" }}>
              Don't stress — our teachers are always here to help you prepare and succeed! 💪
            </p>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>

  </Layout>
);

export default Academics;