import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero text-white">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-secondary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">Gyan Jyoti International School</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            At Gyan Jyoti International School, we ignite the spark of knowledge and nurture the flames of curiosity. Our commitment to excellence in education, holistic development, and fostering a love for learning creates a vibrant community where every student shines bright.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/academics", label: "Academics" },
              { to: "/hostel", label: "Hostel" },
              { to: "/notices", label: "Notices" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-white/70 hover:text-secondary transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm text-white/70">
            <div className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" /><span>kerwar on Gandigram paraspani road Godda, IN 814147</span></div>
            <div className="flex gap-3"><Phone className="w-4 h-4 text-secondary shrink-0" /><span>+91 9973336442</span></div>
            <div className="flex gap-3"><Mail className="w-4 h-4 text-secondary shrink-0" /><span>info@gyanjyoti.edu</span></div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Newsletter</h4>
          <p className="text-white/70 text-sm mb-4">Subscribe for latest updates and news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-secondary"
            />
            <button className="btn-gold-pill !px-4 !py-2.5 text-sm">Go</button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
        © 2025 Gyan Jyoti School. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
