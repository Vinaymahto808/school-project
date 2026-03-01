import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail } from "lucide-react";
import principal from "@/assets/principle.jpg";
import classroomImg from "@/assets/classroom.jpg";

/* ── DATA ── */

const timeline = [
  { year: "2021", title: "Foundation",        desc: "Established with 120 bright young students and a big dream." },
  { year: "2022", title: "Expansion",          desc: "New science block and auditorium inaugurated." },
  { year: "2023", title: "CBSE Affiliation",   desc: "Received official CBSE board affiliation." },
  { year: "2025", title: "Digital Campus",     desc: "Smart classrooms and Wi-Fi campus launched." },
  { year: "2026", title: "Growing Strong",     desc: "500+ happy students and a community that keeps growing." },
];

const values = ["Compassion", "Integrity", "Innovation", "Community", "Discipline", "Excellence"];

const affiliations = [
  { label: "CBSE Affiliated",        sub: "Board of Secondary Education" },
  { label: "Best School Award 2025", sub: "Regional Education Council" },
  { label: "Green Campus Certified", sub: "Environmental Excellence" },
  { label: "ISO Recognised",         sub: "Quality Management Standard" },
];

const infrastructure = [
  "Smart Classrooms with projectors and interactive whiteboards",
  "Modern Science Practicle — Physics, Chemistry & Biology",
  "Smart Studies with high-speed broadband connectivity",
  "Spacious Sports Activities — cricket, football and athletics",
  "Safe Boys & Girls Hostel with 24×7 supervision",
  "Lerning Resource and Support",
];

/* ── COMPONENT ── */

const About = () => (
  <Layout>

    {/* HERO */}
    <div className="relative h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=85"
        alt="School children studying"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-blue-900/65 flex flex-col justify-center px-8">
        <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Gyan Jyoti School</p>
        <h1 className="text-3xl font-extrabold text-white mb-1">About Us</h1>
        <p className="text-blue-100 text-sm">Nurturing young minds with knowledge, values and care</p>
      </div>
    </div>

    {/* BREADCRUMB */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-2 text-xs text-gray-500">
      <div className="max-w-5xl mx-auto">
        <span>Home</span><span className="mx-2">›</span>
        <span className="text-blue-700 font-semibold">About Us</span>
      </div>
    </div>

    {/* MAIN TWO-COLUMN */}
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">

        {/* ── LEFT TEXT ── */}
        <div className="flex-1 min-w-0 text-sm text-gray-600 leading-relaxed">

          {/* Overview */}
          <AnimatedSection>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Overview</h2>
            <p className="mb-4">
              Gyan Jyoti International School was founded in 2024 and offers a co-educational program for children from Nursery to Class X. 
              The school currently has over 500 students.
               It focuses on the uniqueness of each child and combines studies with values, sports, arts, and life skills to help students reach their full potential.
            </p>
            <p className="mb-6">
              We believe every child is unique and capable. Our approach combines strong academics with values,
              sports, arts, and life skills to help every student discover their true potential.
            </p>
          </AnimatedSection>

          {/* Vision & Mission */}
          <AnimatedSection delay={0.05}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Vision & Mission</h2>
            <p className="mb-2"><strong className="text-gray-800">Vision:</strong> Empowers students with knowledge, character, and skills to excel in a dynamic world.</p>
            <p className="mb-6"><strong className="text-gray-800">Mission:</strong> To provide Quality education through innovative teaching, strong values, and a nurturing environment that brings out the best in every child.</p>
          </AnimatedSection>

          {/* Core Values */}
          <AnimatedSection delay={0.07}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Core Values</h2>
            <ul className="space-y-1 mb-6">
              {values.map((v, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Our Journey */}
          <AnimatedSection delay={0.09}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Our Journey</h2>
            <table className="w-full text-sm mb-6 border-collapse">
              <tbody>
                {timeline.map((t, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-bold text-blue-800 whitespace-nowrap w-16">{t.year}</td>
                    <td className="py-2 pr-3 font-semibold text-gray-800 whitespace-nowrap w-32">{t.title}</td>
                    <td className="py-2 text-gray-500">{t.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>

          {/* Principal Message */}
          <AnimatedSection delay={0.11}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Principal's Message</h2>
            <div className="flex gap-4 items-start mb-6">
              <img
                src={principal}
                alt="Principal"
                className="w-20 h-20 rounded object-cover shrink-0 shadow"
              />
              <div>
                <p className="font-bold text-gray-800">Dr. Dhananjay Mahto</p>
                <p className="text-blue-700 text-xs font-semibold mb-2">M.Ed, Ph.D. — Founder & Principal</p>
                <p className="text-gray-500 text-xs italic leading-relaxed">
                  "At Gyan Jyoti, we believe every child is a star waiting to shine. Education is not just
                  about books — it's about discovering talents, building friendships, and growing into confident,
                  kind human beings."
                </p>
              </div>
            </div>
          </AnimatedSection>

        

          {/* Infrastructure */}
          <AnimatedSection delay={0.15}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Infrastructure</h2>
            <ul className="space-y-1 mb-4">
              {infrastructure.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

        </div>

        {/* ── RIGHT IMAGES ── */}
        <div className="md:w-56 shrink-0 flex flex-col gap-4">

          <AnimatedSection>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&q=80"
              alt="Children in classroom"
              className="w-full rounded-lg shadow"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80"
              alt="Kids learning"
              className="w-full rounded-lg shadow"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <img
              src={classroomImg}
              alt="Classroom"
              className="w-full rounded-lg shadow"
            />
          </AnimatedSection>

          
              

        </div>

      </div>
    </div>

  </Layout>
);

export default About;