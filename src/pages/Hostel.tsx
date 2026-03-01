import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail } from "lucide-react";

const rules = [
  { q: "Hostel Timings", a: "Gates close at 9:00 PM. Students must be in rooms by 10:00 PM. Study hours: 7 PM – 9 PM." },
  { q: "Visitors Policy", a: "Visitors allowed only on weekends between 10 AM – 5 PM with prior permission from the warden." },
  { q: "Leave Policy", a: "Students must submit a leave application signed by parents 48 hours in advance." },
  { q: "Mess Rules", a: "Meals served at fixed timings. Outside food not allowed. Wasting food is discouraged." },
  { q: "Discipline", a: "Ragging, substance use, and damage to property are strictly prohibited and subject to expulsion." },
];

const Hostel = () => (
  <Layout>

    {/* HERO */}
    <div className="relative h-64 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1400&q=85"
        alt="School children"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 to-blue-600/40 flex flex-col justify-center px-10">
        <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Gyan Jyoti School</p>
        <h1 className="text-3xl font-extrabold text-white mb-1">Hostel Facilities</h1>
        <p className="text-blue-100 text-sm">A safe and caring home for our students</p>
      </div>
    </div>

    {/* BREADCRUMB */}
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-2 text-xs text-gray-500">
      <span>Home</span>
      <span className="mx-2">›</span>
      <span className="text-blue-700 font-semibold">Hostel Facilities</span>
    </div>

    {/* MAIN TWO-COLUMN */}
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT — TEXT */}
        <div className="flex-1 min-w-0 text-sm text-gray-600 leading-relaxed">

          <AnimatedSection>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Hostel Facilities</h2>
            <p className="mb-4">
              Our school provides safe, comfortable, and well-supervised hostel accommodation for both
              boys and girls. The hostel is designed to give students a home-like environment where they
              can focus on their studies and personal development.
            </p>
            <p className="mb-6">
              The Boys Hostel accommodates 100 students across separate blocks, supervised by resident
              wardens. The Girls Hostel provides secure accommodation for 100 girls with dedicated
              female staff available round the clock.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Available Facilities</h2>
            <ul className="space-y-1 mb-6">
              {[
                "Tuitions and extra academic support",
                "Doubt clearing sessions after school hours",
                "Sports area for outdoor activities",
                "High-speed Wi-Fi connectivity",
                "Special focus on weak and struggling students",
                "Nutritious meals served three times daily",
                "Caring and experienced warden",
                "24/7 security for all residents",
              ].map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">Hostel Management</h2>
            <p className="mb-3">
              Our hostel is managed by a dedicated team who ensure the safety, well-being, and comfort of every student.
            </p>
            <ul className="space-y-2 mb-5">
              {[
                ["Warden", "Oversees overall hostel operations and student welfare."],
                ["Assistant Warden", "Supports the warden in daily management and supervision."],
                ["Housekeepers", "Maintain cleanliness and hygiene across hostel premises."],
                ["Security Personnel", "Ensure the safety and security of all residents."],
              ].map(([role, desc], i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0"></span>
                  <span><strong className="text-gray-800">{role}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 text-gray-600"><Phone className="w-4 h-4 text-blue-700" /> +1 (555) 123-4567</p>
            <p className="flex items-center gap-2 text-gray-600 mt-1"><Mail className="w-4 h-4 text-blue-700" /> info@gyanjyoti.edu</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4 mt-8">Rules & Regulations</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {rules.map((r, i) => (
                <AccordionItem key={i} value={`rule-${i}`} className="border-b border-gray-200 px-0">
                  <AccordionTrigger className="font-semibold text-gray-700 text-sm hover:no-underline py-3">
                    {r.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm pb-3">{r.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

        </div>

        {/* RIGHT — IMAGES ONLY */}
        <div className="md:w-56 shrink-0 flex flex-col gap-4">
          <AnimatedSection>
            <img
              src="https://cipsedu.com/wp-content/uploads/2020/02/SGS_5752-1-1024x683.jpg"
              alt="Students studying"
              className="w-full rounded-lg shadow"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <img
              src="https://cipsedu.com/wp-content/uploads/2020/02/SGS_5715-1-1024x683.jpg"
              alt="School children"
              className="w-full rounded-lg shadow"
            />
          </AnimatedSection>
          
        </div>

      </div>
    </div>

  </Layout>
);

export default Hostel;