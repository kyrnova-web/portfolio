import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] -translate-y-[10%] bg-[var(--accent-faint)] rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Label area */}
          <motion.div variants={itemVars} className="mb-8 font-mono">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent)] mb-1">
              {personal.title}
            </h2>
            <p className="text-xs text-[var(--text-muted)] tracking-widest uppercase">
              {personal.location}
            </p>
          </motion.div>

          {/* Title Area */}
          <motion.div variants={itemVars} className="mb-6">
            <h1 className="heading-xl group cursor-default">
              Hello, I'm {personal.name}. <br />
              {/* Using a subtle fade on the secondary part of the title */}
              <span className="text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] [.light_&]:group-hover:text-slate-600 transition-colors">
                I build digital experiences.
              </span>
            </h1>
          </motion.div>

          {/* Description Area */}
          <motion.p variants={itemVars} className="text-body max-w-[65ch] mb-12">
            {personal.bio}
          </motion.p>

          {/* Actions Area */}
          <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary group">
              View Work
              <ArrowUpRight size={16} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical line / indicator */}
      <div className="absolute bottom-0 left-[var(--container-wide)] ml-8 h-[15vh] w-[1px] bg-gradient-to-t from-[var(--border)] to-transparent hidden xl:block" />
    </section>
  );
}
