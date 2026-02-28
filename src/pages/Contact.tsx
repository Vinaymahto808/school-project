import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const info = [
  { icon: MapPin, label: "Address", value: "kerwar on Gandigram paraspani road Godda 814147 Jharkhand" },
  { icon: Phone, label: "Phone", value: "+91 9973336442" },
  { icon: Mail, label: "Email", value: "info@gyanjyoti.edu" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 5:00 PM" },
];

const faqs = [
  { q: "What is the admission process?", a: "Fill out the online application form, submit required documents, and attend the entrance exam followed by an interview." },
  { q: "Is transportation available?", a: "Yes, school buses cover all major routes across the city. Routes and fees are available at the transport office." },
  { q: "What extracurricular activities are offered?", a: "We offer sports, music, dance, art, robotics, debate, NCC, scouts & guides, and more." },
  { q: "Can I visit the campus before admission?", a: "Absolutely! Campus tours are available on weekdays by appointment. Contact the office to schedule a visit." },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <HeroSection title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions or inquiries." />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required placeholder="Your Name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-muted border-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      required type="email" placeholder="Email Address" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-muted border-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      placeholder="Phone Number" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-muted border-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      required placeholder="Subject" value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-muted border-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <textarea
                    required placeholder="Your Message" rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                  <button type="submit" className="btn-gold-pill flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.1} className="lg:col-span-2 space-y-4">
              {info.map((item, i) => (
                <div key={i} className="glass-card-hover rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground">{item.label}</h4>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-5">
                <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 md:px-8 pb-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://maps.google.com/maps?q=J3WQ%2BWQ2,+Near+Hanuman+Mandir,+Yadav+Colony,+Digha+Ghat,+Patna,+Bihar+800011&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="School Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-foreground">Frequently Asked Questions</h2>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-none">
                  <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
