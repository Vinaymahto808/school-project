import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { FlaskConical, Landmark, Palette, Monitor, BookOpen, CheckCircle, Calendar } from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const departments = [
  {
    icon: FlaskConical,
    name: "Science & Maths",
    desc: "Mathematics, Physics, Chemistry & Biology — explore how the world works.",
    img: "https://images.unsplash.com/photo-1532094349884-543559c06671?w=500&q=80",
    color: "#2E86C1",
  },
  {
    icon: Landmark,
    name: "Social Studies",
    desc: "History, Geography, Political Science & Economics — learn about our world.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80",
    color: "#10B981",
  },
  {
    icon: Palette,
    name: "Languages & Arts",
    desc: "English, Hindi, Art, Craft & Music — express yourself every day.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
    color: "#FF6B6B",
  },
  {
    icon: Monitor,
    name: "Technology & Skills",
    desc: "Computer Applications, IT & Life Skills — preparing students for the future.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80",
    color: "#6C63FF",
  },
];

const curriculumStages = [
  {
    stage: "Primary",
    classes: "Classes I – V",
    color: "#F59E0B",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    description: "In the foundational years, we focus on joyful and activity-based learning — building strong basics in reading, writing and numeracy while sparking curiosity.",
    bullets: [
      "Strong language skills in English and Hindi",
      "Foundational numeracy and mathematics",
      "Environmental Studies (EVS)",
      "Art, Craft and Music",
      "Physical fitness and teamwork",
    ],
  },
  {
    stage: "Middle School",
    classes: "Classes VI – VIII",
    color: "#2E86C1",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
    description: "Students move into subject-oriented learning to deepen knowledge. This stage bridges foundational learning with the structured approach for secondary school.",
    bullets: [
      "Physics, Chemistry & Biology basics",
      "Social Science — History, Geography, Civics",
      "Algebra and Geometry in Mathematics",
      "Digital literacy and computer basics",
      "Languages, arts & physical education",
    ],
  },
  {
    stage: "Secondary",
    classes: "Classes IX – X",
    color: "#FF6B6B",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
    description: "The secondary stage prepares students for CBSE board examinations with strong conceptual understanding, practical lab work, projects and skill-based subjects.",
    bullets: [
      "English, Maths, Science & Social Science",
      "Physics, Chemistry & Biology",
      "History, Geography, Political Science & Economics",
      "Algebra, Geometry and Statistics",
      "IT or Computer Applications",
    ],
  },
];

const examSchedule = [
  { exam: "Periodic Test I",  date: "July",             classes: "I – X", color: "#6C63FF" },
  { exam: "Half-Yearly Exam", date: "September",        classes: "I – X", color: "#2E86C1" },
  { exam: "Periodic Test II", date: "November",         classes: "I – X", color: "#F59E0B" },
  { exam: "Annual Exam",      date: "February – March", classes: "I – X", color: "#10B981" },
];

/* ─────────────────── COMPONENT ─────────────────── */

const Academics = () => (
  <Layout>

    {/* HERO */}
    <div className="relative h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=85"
        alt="Students in classroom"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-blue-900/65 flex flex-col justify-center px-8">
        <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Gyan Jyoti School</p>
        <h1 className="text-3xl font-extrabold text-white mb-1">Academics</h1>
        <p className="text-blue-100 text-sm">CBSE-aligned curriculum from Class I to X</p>
      </div>
    </div>

    {/* BREADCRUMB */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-2 text-xs text-gray-500">
      <div className="max-w-5xl mx-auto">
        <span>Home</span><span className="mx-2">›</span>
        <span className="text-blue-700 font-semibold">Academics</span>
      </div>
    </div>

    {/* MAIN */}
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* ── SUBJECT GROUPS ── */}
      <AnimatedSection>
        <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-6">
          What We Teach
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {departments.map((d, i) => (
          <AnimatedSection key={i} delay={i * 0.07}>
            <div className="rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow group">
              <div className="relative h-28 overflow-hidden">
                <img src={d.img} alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <d.icon className="w-5 h-5 text-white drop-shadow" />
                </div>
              </div>
              <div className="p-3 bg-white border-t-2" style={{ borderColor: d.color }}>
                <p className="font-bold text-gray-800 text-xs leading-tight mb-1">{d.name}</p>
                <p className="text-gray-500 text-[0.65rem] leading-snug">{d.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── CURRICULUM STAGES ── */}
      <AnimatedSection>
        <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-6">
          Our CBSE-Aligned Curriculum
        </h2>
      </AnimatedSection>

      <div className="space-y-6 mb-12">
        {curriculumStages.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex flex-col sm:flex-row gap-0 rounded-xl overflow-hidden shadow border border-gray-100">

              {/* Image */}
              <div className="sm:w-44 h-40 sm:h-auto shrink-0 overflow-hidden">
                <img src={s.img} alt={s.stage}
                  className="w-full h-full object-cover object-top" />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 bg-white border-l-4" style={{ borderColor: s.color }}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="font-extrabold text-base" style={{ color: s.color }}>{s.stage}</p>
                  <span className="text-xs font-bold px-2 py-0.5 rounded text-white"
                    style={{ background: s.color }}>{s.classes}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p>
                <ul className="space-y-1">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: s.color }} />
                      <span className="text-xs text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── ASSESSMENT ── */}
      <AnimatedSection>
        <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-6">
          Assessment & Examinations
        </h2>
      </AnimatedSection>

      {/* Assessment pattern */}
      <AnimatedSection delay={0.05}>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 flex gap-4 items-start">
          <BookOpen className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-gray-600 leading-relaxed">
            <p className="mb-2">
              <strong className="text-gray-800">Classes IX–X:</strong> 80-mark final written exam + 20 marks internal assessment (periodic tests, projects & practicals) — aligned with CBSE evaluation.
            </p>
            <p>
              <strong className="text-gray-800">Classes I–VIII:</strong> Continuous & periodic assessments through tests, projects and notebook submissions — stress-free and child-friendly.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Exam calendar */}
      <AnimatedSection delay={0.08}>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-blue-700" />
          <h3 className="font-bold text-gray-800">Annual Examination Calendar</h3>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide">Examination</th>
                <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide">Month</th>
                <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide">Classes</th>
              </tr>
            </thead>
            <tbody>
              {examSchedule.map((e, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0 inline-block" style={{ background: e.color }} />
                    {e.exam}
                  </td>
                  <td className="px-5 py-3 text-gray-600">{e.date}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded text-white"
                      style={{ background: e.color }}>Class {e.classes}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* Note */}
      <AnimatedSection delay={0.12}>
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
          <p className="text-sm text-indigo-700 font-medium">
            Our teachers are always here to help every student prepare and succeed. 💪
          </p>
        </div>
      </AnimatedSection>

    </div>
  </Layout>
);

export default Academics;