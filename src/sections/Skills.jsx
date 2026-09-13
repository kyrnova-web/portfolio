import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import { Code2, Wrench, Cpu, TrendingUp } from 'lucide-react';

const categoryIcons = {
  Frontend: <Code2 size={17} />,
  Tools: <Wrench size={17} />,
  'Embedded & IoT': <Cpu size={17} />,
  'Digital Marketing': <TrendingUp size={17} />,
};

export default function Skills() {
  return (
    <section id="skills" className="section relative [.light_&]:py-16 md:[.light_&]:py-24">
      <div className="container relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-label-accent block mb-3"></span>
            <h2 className="heading-lg max-w-[15ch] [.light_&]:text-3xl md:[.light_&]:text-4xl [.light_&]:font-bold [.light_&]:text-slate-900 [.light_&]:tracking-tight">
              Technical Foundation
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body max-w-sm [.light_&]:text-slate-500 [.light_&]:text-[15px] sm:[.light_&]:text-base [.light_&]:max-w-md [.light_&]:leading-relaxed"
          >
            A curated set of technologies and conceptual skills used to build scalable and accessible products.
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="group bg-[var(--surface-raised)] border border-[var(--border)] rounded-[16px] p-6 sm:p-8 flex flex-col h-full shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(167,139,250,0.06)] hover:-translate-y-[3px] hover:border-[var(--border-accent)] transition-all duration-300 ease-out [.light_&]:bg-white [.light_&]:border-slate-200/90 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_28px_rgba(139,92,246,0.08)] hover:[.light_&]:border-purple-300/80"
            >
              {/* Category Heading & Icon */}
              <div className="flex items-center gap-3 mb-6 sm:mb-7">
                <div className="flex w-9 h-9 rounded-xl items-center justify-center bg-[var(--surface-overlay)] text-[var(--accent)] border border-[var(--border)] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[var(--accent-dim)] group-hover:text-[var(--accent-strong)] group-hover:border-[var(--border-accent)] [.light_&]:bg-slate-100 [.light_&]:text-slate-600 [.light_&]:border-slate-200/60 group-hover:[.light_&]:bg-purple-50 group-hover:[.light_&]:text-purple-600 group-hover:[.light_&]:border-purple-200">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="heading-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors [.light_&]:text-lg [.light_&]:font-bold [.light_&]:text-slate-900 group-hover:[.light_&]:text-slate-900 [.light_&]:tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-auto">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="tag bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)] font-mono text-[13px] px-3.5 py-1.5 rounded-lg transition-all duration-250 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-dim)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:shadow-[0_4px_12px_rgba(167,139,250,0.12)] [.light_&]:bg-slate-50 [.light_&]:border-slate-200/90 [.light_&]:text-slate-700 [.light_&]:font-medium hover:[.light_&]:bg-purple-50/50 hover:[.light_&]:border-purple-400 hover:[.light_&]:ring-1 hover:[.light_&]:ring-purple-400/40 hover:[.light_&]:text-purple-950 hover:[.light_&]:shadow-[0_4px_12px_rgba(139,92,246,0.12)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
