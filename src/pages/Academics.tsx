import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import { FlaskConical, Landmark, Palette, Monitor, BookOpen, Target, Eye, Star } from "lucide-react";

// Updated departments for Classes I-X
const departments = [
  { icon: FlaskConical, name: "Science & Mathematics", desc: "Core subjects including Mathematics, and Science (Physics, Chemistry, Biology).", color: "from-blue-500 to-indigo-600" },
  { icon: Landmark, name: "Social Studies", desc: "Covering Social Science, including History, Geography, Political Science, and Economics.", color: "from-emerald-500 to-teal-600" },
  { icon: Palette, name: "Languages & Arts", desc: "English, Hindi (or a second language), plus creative pursuits like Art, Craft, and Music.", color: "from-rose-500 to-pink-600" },
  { icon: Monitor, name: "Technology & Skills", desc: "Computer Applications/IT, Health & Physical Education, and essential Life Skills.", color: "from-violet-500 to-purple-600" },
];

const curriculumStages = [
  {
    stage: "Primary (Classes I–V)",
    icon: Star,
    color: "text-amber-500",
    description: "In the foundational years, we focus on creating a joyful and activity-based learning environment. Our goal is to build strong basics in reading, writing, and numeracy, while sparking curiosity about the world through Environmental Studies (EVS).",
    bullets: [
      "Developing strong language skills in English and a second language.",
      "Building foundational numeracy and mathematical concepts.",
      "Exploring the world through Environmental Studies (EVS).",
      "Encouraging creativity with Art, Craft, and Music.",
      "Promoting physical fitness and teamwork through sports.",
    ],
  },
  {
    stage: "Middle School (Classes VI–VIII)",
    icon: Eye,
    color: "text-blue-500",
    description: "As students transition to middle school, we introduce a subject-oriented curriculum to deepen their knowledge. This stage bridges foundational learning with the structured approach required for secondary school, introducing formal sciences and social sciences.",
    bullets: [
      "Science curriculum bifurcates into basics of Physics, Chemistry, and Biology.",
      "Social Science covers Indian and World History, Geography, and Civics.",
      "Mathematics curriculum includes introductions to Algebra and Geometry.",
      "Developing digital literacy with computer basics and applications.",
      "Continued focus on languages, arts, and physical education.",
    ],
  },
  {
    stage: "Secondary (Classes IX–X)",
    icon: Target,
    color: "text-rose-500",
    description: "The secondary stage is geared towards preparing students for the CBSE board examinations. We emphasize a strong conceptual understanding of core subjects, complemented by practical lab work, projects, and one skill-based subject as per the CBSE framework.",
    bullets: [
      "Core subjects: English, Second Language, Mathematics, Science, and Social Science.",
      "Science includes Physics, Chemistry, and Biology.",
      "Social Science comprises History, Geography, Political Science, and Economics.",
      "Mathematics covers Algebra, Geometry, Statistics, and more.",
      "One mandatory skill subject like Information Technology (IT) or Computer Applications.",
    ],
  },
];

// Updated exam schedule for Classes I-X
const examSchedule = [
  { exam: "Periodic Test I", date: "July", classes: "I – X" },
  { exam: "Half-Yearly Exam", date: "September", classes: "I – X" },
  { exam: "Periodic Test II", date: "November", classes: "I – X" },
  { exam: "Annual Exam", date: "February–March", classes: "I – X" },
];

const Academics = () => (
    <Layout>
      <HeroSection
        title="Academics"
        subtitle="We nurture curious minds with a child-friendly, CBSE-aligned curriculum that focuses on holistic development and conceptual understanding up to Class X."
      />

      {/* Departments */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Subject Groups</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-8 text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center mx-auto mb-4`}>
                    <d.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{d.name}</h3>
                  <p className="text-muted-foreground text-sm">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Our CBSE-Aligned Curriculum</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our curriculum is structured in three progressive stages to ensure a smooth and comprehensive learning journey from Class I to X.</p>
          </AnimatedSection>
          <div className="space-y-8">
            {curriculumStages.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <s.icon className={`w-8 h-8 ${s.color} shrink-0 mt-1`} />
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">{s.stage}</h3>
                      <p className="text-muted-foreground mb-4">{s.description}</p>
                      <ul className="space-y-2">
                        {s.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className={`w-1.5 h-1.5 rounded-full ${s.color.replace("text-", "bg-")} mt-1.5 shrink-0`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Exam Schedule */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Assessment & Examinations</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondary" /> Assessment Pattern
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>Our assessment strategy is aligned with CBSE guidelines, focusing on continuous evaluation to ensure stress-free learning. For Classes IX-X, the structure includes an 80-mark final written exam and 20 marks for internal assessment (comprising periodic tests, projects, and practicals) to evaluate conceptual and competency-based understanding.</p>
                <p>For Classes I-VIII, we follow a system of continuous and periodic assessments through a variety of tools, including tests, projects, and notebook submissions, without the pressure of high-stakes board exams.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 text-center">
              Annual Examination Calendar
            </h3>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="p-4 font-heading font-semibold text-foreground">Exam</th>
                    <th className="p-4 font-heading font-semibold text-foreground">Month/Duration</th>
                    <th className="p-4 font-heading font-semibold text-foreground">Classes</th>
                  </tr>
                </thead>
                <tbody>
                  {examSchedule.map((e, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-4 text-foreground font-medium">{e.exam}</td>
                      <td className="p-4 text-muted-foreground">{e.date}</td>
                      <td className="p-4 text-muted-foreground">{e.classes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
);

export default Academics;
