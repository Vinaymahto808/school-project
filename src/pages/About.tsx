import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart, Shield, Lightbulb, Users, Award } from "lucide-react";
import principal from "@/assets/principle.jpg";

const timeline = [
  { year: "2021", title: "Foundation", desc: "Gyan Jyoti International School established with 120 bright young students." },
  { year: "2022", title: "Expansion", desc: "New science block and auditorium inaugurated." },
  { year: "2023", title: "CBSE Affiliation", desc: "Received CBSE board affiliation." },
  { year: "2025", title: "Digital Campus", desc: "Smart classrooms and Wi-Fi campus launched." },
  { year: "2026", title: "Growing Strong", desc: "500+ happy students, 100% smiling faces!" },
];

const values = [
  { icon: Heart, title: "Compassion", desc: "Empathy and kindness in every interaction." },
  { icon: Shield, title: "Integrity", desc: "Honesty and ethical conduct as core principles." },
  { icon: Lightbulb, title: "Innovation", desc: "Fostering creative thinking and problem-solving." },
  { icon: Users, title: "Community", desc: "Building strong bonds among students and staff." },
];

const About = () => (
  <Layout>
    <HeroSection title="About Us" subtitle="Learn about our journey, vision, and commitment to shaping tomorrow's leaders." />

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-6">
        {[
          { icon: Eye, title: "Our Vision", text: "To be a globally recognized institution that empowers students with knowledge, character, and skills to excel in a dynamic world." },
          { icon: Target, title: "Our Mission", text: "To provide holistic education through innovative teaching, strong values, and a nurturing environment that brings out the best in every child." },
        ].map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card-hover rounded-2xl p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Principal's Message */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <img
              src={principal}
              alt="Principal"
              className="w-32 h-32 rounded-2xl object-cover shrink-0"
            />
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Principal's Message</h3>
              <p className="text-secondary font-semibold text-sm mb-3">Dr. Dhananjay Mahto, M.Ed, Ph.D.</p>
              <p className="text-muted-foreground leading-relaxed italic">
                "At Gyan Jyoti International School, we believe every child is a star waiting to shine. Education is not just about books — it's about discovering talents, building friendships, and growing into confident, kind human beings. Every child here is loved and every dream is nurtured."
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Our Journey</h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass-card-hover rounded-2xl p-6">
                      <h4 className="font-heading font-bold text-lg text-foreground mb-1">{t.title}</h4>
                      <p className="text-muted-foreground text-sm">{t.desc}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-sm text-secondary-foreground shrink-0 z-10">
                    {t.year}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <v.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="section-padding">
      <div className="container-custom text-center">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">Awards & Accreditations</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Approved", "2023", "Best School Award 2025", "Green Campus Playground", "CBSE Excellence"].map((a, i) => (
              <div key={i} className="glass-card rounded-full px-6 py-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">{a}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
