import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const HeroSection = ({ title, subtitle, children }: Props) => (
  <section className="relative gradient-hero min-h-[50vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
        <path d="M0 100L1440 100L1440 60C1200 10 800 90 480 40C160 -10 0 50 0 50Z" fill="hsl(var(--background))" />
      </svg>
    </div>

    <div className="container-custom relative z-10 px-4 md:px-8 pt-24 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-white/70 text-lg md:text-xl max-w-2xl mb-8"
      >
        {subtitle}
      </motion.p>
      {children}
    </div>
  </section>
);

export default HeroSection;
