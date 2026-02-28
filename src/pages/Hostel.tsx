import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Wifi, UtensilsCrossed, Dumbbell, ShieldCheck, Stethoscope, WashingMachine, BookOpen, Phone, Mail, User } from "lucide-react";

const facilities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: UtensilsCrossed, label: "Mess & Dining" },
  { icon: Dumbbell, label: "Sports Complex" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Stethoscope, label: "Medical Facility" },
  { icon: WashingMachine, label: "Laundry Service" },
  { icon: BookOpen, label: "Study Rooms" },
  { icon: Building2, label: "Common Areas" },
];


const rules = [
  { q: "Hostel Timings", a: "Gates close at 9:00 PM. Students must be in rooms by 10:00 PM. Study hours: 7 PM – 9 PM." },
  { q: "Visitors Policy", a: "Visitors allowed only on weekends between 10 AM – 5 PM with prior permission from the warden." },
  { q: "Leave Policy", a: "Students must submit a leave application signed by parents 48 hours in advance." },
  { q: "Mess Rules", a: "Meals served at fixed timings. Outside food not allowed. Wasting food is discouraged." },
  { q: "Discipline", a: "Ragging, substance use, and damage to property are strictly prohibited and subject to expulsion." },
];

const Hostel = () => (
  <Layout>
    <HeroSection title="Hostel Facilities" subtitle="A safe, comfortable home away from home for our students." />

    {/* Boys & Girls */}
    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-6">
        {[
          { title: "Boys Hostel", desc: "Accommodation for 100 students across 2 blocks .", capacity: "100 Students", blocks: "Seprate" },
          { title: "Girls Hostel", desc: "Secure accommodation for 100 students with dedicated female staff.", capacity: "100 Students", blocks: "1 Blocks" },
        ].map((h, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card-hover rounded-2xl p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground mb-4">{h.desc}</p>
              <div className="flex gap-4">
                <span className="text-sm font-semibold text-secondary">{h.capacity}</span>
                <span className="text-sm text-muted-foreground">{h.blocks}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Facilities */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">World-Class Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50">
                  <f.icon className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-sm text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000" alt="Student Common Area" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Wardens */}
    <section className="section-padding bg-muted/50">
      <div className="container-custom max-w-3xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl text-foreground">Hostel Management</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { name: "Mr. Rajesh Kumar", role: "Hostel Warden", phone: "+91 98765 43210", email: "warden@gyanjyoti.edu" },
            { name: "Mrs. Sunita Verma", role: "Matron", phone: "+91 98765 09876", email: "matron@gyanjyoti.edu" },
          ].map((w, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">{w.name}</h4>
                  <p className="text-secondary text-xs font-semibold mb-2">{w.role}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" />{w.phone}</div>
                    <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" />{w.email}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Rules */}
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl text-foreground">Key Rules & Regulations</h2>
        </AnimatedSection>
        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {rules.map((r, i) => (
              <AccordionItem key={i} value={`rule-${i}`} className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline">{r.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{r.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Hostel;
