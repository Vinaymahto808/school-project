import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Users, Award, Briefcase,
  BookOpen, Building2, CalendarDays, ClipboardList,
  ImageIcon, Phone, Clock, ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import schoolChildrenImg from "@/assets/school-children.jpg";
import classroomImg from "@/assets/classroom.jpg";
import schoolSportsImg from "@/assets/school-sports.jpg";
import schoolLabImg from "@/assets/school-lab.jpg";
import admin1 from "@/assets/admin1.jpg";
import admin2 from "@/assets/admin2.jpg";

const stats = [
  { icon: Users, value: "2,500+", label: "Happy Students" },
  { icon: GraduationCap, value: "150+", label: "Caring Teachers" },
  { icon: Award, value: "20+", label: "Years of Joy" },
  { icon: Briefcase, value: "100%", label: "Fun Learning" },
];

const quickLinks = [
  { icon: BookOpen, label: "Academics", to: "/academics", color: "from-blue-500 to-indigo-600" },
  { icon: Building2, label: "Hostel", to: "/hostel", color: "from-emerald-500 to-teal-600" },
  { icon: CalendarDays, label: "Events", to: "/notices", color: "from-orange-500 to-amber-600" },
  { icon: ClipboardList, label: "Notices", to: "/notices", color: "from-rose-500 to-pink-600" },
  { icon: ImageIcon, label: "Gallery", to: "/about", color: "from-violet-500 to-purple-600" },
  { icon: Phone, label: "Contact", to: "/contact", color: "from-cyan-500 to-blue-600" },
];

const news = [
  "🏆 Gyan Jyoti wins Inter-School Science Quiz 2025!",
  "📝 Admissions open for 2025-26 session — Enroll Now!",
  "🎉 Annual Day & Fun Fair on March 15th — Don't miss it!",
  "📊 100% pass rate in Board Exams — Congratulations!",
  "🏅 Our sports stars qualify for State Championship!",
];

const events = [
  { title: "Science Fun Fair", date: "Mar 10, 2025", desc: "Show your cool experiments!" },
  { title: "Sports Day 🏃", date: "Mar 20, 2025", desc: "Races, games & lots of fun" },
  { title: "Cultural Fest 🎭", date: "Apr 5, 2025", desc: "Dance, music & drama" },
];

const galleryImages = [
  { src: schoolChildrenImg, alt: "Happy students in campus", label: "Campus Life" },
  { src: classroomImg, alt: "Students learning in classroom", label: "Classroom" },
  { src: schoolSportsImg, alt: "Children playing sports", label: "Sports" },
  { src: schoolLabImg, alt: "Science lab experiments", label: "Science Lab" },
];

const heroImages = [schoolChildrenImg, admin1, admin2];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
    {/* Hero */}
    <section className="relative gradient-hero min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Gyan Jyoti School campus"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(235,85%,15%)/0.9] to-[hsl(255,50%,40%)/0.7]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none">
          <path d="M0 120L1440 120L1440 70C1200 10 800 100 480 50C160 0 0 60 0 60Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-secondary text-sm font-medium mb-6">
            🎓 Admissions Open 2025-26
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Welcome to <span className="gradient-text">Gyan Jyoti</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl">
            Where every child shines bright! We nurture young minds with love, creativity, and joyful learning to build a wonderful future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold-pill text-base">Enroll Now ✨</Link>
            <Link to="/about" className="btn-outline-pill text-base">Explore Our School</Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="relative z-20 -mt-16 px-4 md:px-8">
      <div className="container-custom">
        <div className="glass-card rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <s.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-heading font-bold text-2xl md:text-3xl text-foreground">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* News Ticker */}
    <section className="bg-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...news, ...news].map((n, i) => (
          <span key={i} className="text-primary-foreground text-sm mx-8 font-medium">{n}</span>
        ))}
      </div>
    </section>

    {/* School Gallery */}
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Life at Gyan Jyoti 📸</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">See how our students learn, play, and grow every day!</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden aspect-square">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-dark))/0.7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-heading font-semibold text-sm">{img.label}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Access */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Quick Access 🚀</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need, right at your fingertips</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((q, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Link
                to={q.to}
                className="glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${q.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <q.icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-heading font-semibold text-sm text-foreground">{q.label}</span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Upcoming Events 🎉</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 text-secondary mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">{e.date}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{e.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{e.desc}</p>
                <Link to="/notices" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Join the Gyan Jyoti Family? 🌈</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Give your child the gift of joyful learning and a bright future!</p>
          <Link to="/contact" className="btn-gold-pill text-base inline-block">Enroll Now ✨</Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
  );
};

export default Index;
