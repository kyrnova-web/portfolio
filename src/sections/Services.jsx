import { motion } from 'framer-motion';
import { services } from '../data/portfolio';
import { Terminal, Code, Layout, PanelsTopLeft, MousePointerClick, BarChart } from 'lucide-react';

const icons = {
  'Responsive Website Development': Layout,
  'Frontend Development': Code,
  'React UI Development': PanelsTopLeft,
  'Landing Page Development': MousePointerClick,
  'Website UI Implementation': Terminal,
  'Basic SEO & Website Support': BarChart
};

export default function Services() {
  return (
    <section id="services" className="section relative border-t border-[var(--border)]">
      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="section-header text-center sm:text-left"
        >
          <span className="text-label-accent block mb-3"></span>
          <h2 className="heading-lg">Available Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, idx) => {
            const Icon = icons[service.title] || Code;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--surface-raised)] border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.2)] rounded-[16px] p-6 h-full flex flex-col group relative overflow-hidden hover:shadow-[0_12px_28px_rgba(167,139,250,0.06)] hover:-translate-y-[3px] hover:border-[var(--border-accent)] transition-all duration-300 ease-out [.light_&]:bg-white [.light_&]:border-slate-200/90 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_28px_rgba(139,92,246,0.08)] hover:[.light_&]:border-purple-300/80"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-overlay)] border border-[var(--border)] group-hover:bg-[var(--accent-dim)] group-hover:border-[var(--border-accent)] transition-all duration-300 group-hover:scale-110 [.light_&]:bg-slate-100 [.light_&]:border-slate-200/60 group-hover:[.light_&]:bg-purple-50 group-hover:[.light_&]:border-purple-200">
                  <Icon size={20} className="text-[var(--accent)] group-hover:text-[var(--accent-strong)] transition-colors duration-300 [.light_&]:text-slate-600 group-hover:[.light_&]:text-purple-600" />
                </div>

                <h3 className="heading-sm mb-3 relative z-10">{service.title}</h3>
                <p className="text-small mb-8 relative z-10">{service.description}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 relative z-10">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[0.62rem] px-2 py-0.5 rounded border transition-all duration-200 ease-out bg-[var(--surface)] border-[var(--border)] text-[var(--text-muted)] [.light_&]:bg-slate-50 [.light_&]:border-slate-200/90 [.light_&]:text-slate-700 [.light_&]:rounded-lg hover:bg-[var(--accent-dim)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:shadow-[0_4px_12px_rgba(167,139,250,0.08)] hover:[.light_&]:bg-purple-50/50 hover:[.light_&]:border-purple-400 hover:[.light_&]:text-purple-950 hover:[.light_&]:shadow-[0_4px_12px_rgba(139,92,246,0.12)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
