import { motion } from 'framer-motion';
import { experience, internship } from '../data/portfolio';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true, margin: '-10%' }
};

const trainerSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'];

export default function Experience() {
  return (
    <section id="experience" className="section relative border-t border-[var(--border)] [.light_&]:py-16 md:[.light_&]:py-24 [.light_&]:border-slate-100">
      <div className="container relative z-10 xl:max-w-4xl xl:ml-[15%]">

        <motion.div variants={fadeInUp} initial="hidden" whileInView="whileInView" viewport={fadeInUp.viewport} className="section-header mb-12 sm:mb-16">
          <span className="text-label-accent block mb-3"></span>
          <h2 className="heading-lg [.light_&]:text-3xl md:[.light_&]:text-4xl [.light_&]:font-bold [.light_&]:text-slate-900 [.light_&]:tracking-tight">
            Professional Experience
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-0">
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-[12.5rem] top-3 bottom-4 w-[1px] bg-[var(--border)] [.light_&]:bg-slate-200 [.light_&]:w-[2px]" />

          <div className="flex flex-col gap-10 sm:gap-16">

            {/* Experience Item 1: Trainer */}
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                className="group relative flex flex-col sm:flex-row gap-2 sm:gap-16 p-5 sm:p-6 rounded-[16px] border border-transparent bg-transparent hover:bg-[var(--surface-raised)] hover:border-[var(--border)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out [.light_&]:border-transparent hover:[.light_&]:border-slate-200/90 hover:[.light_&]:bg-white hover:[.light_&]:shadow-[0_8px_24px_rgba(139,92,246,0.06)]"
              >
                {/* Duration */}
                <div className="sm:w-36 pt-1 flex-shrink-0 z-10 relative">
                  <p className="text-label text-[var(--accent)] transition-colors duration-300 [.light_&]:text-xs [.light_&]:font-mono [.light_&]:font-bold [.light_&]:tracking-wider [.light_&]:text-slate-400 group-hover:[.light_&]:text-purple-600 uppercase">
                    {exp.duration}
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="hidden sm:flex absolute left-[12.5rem] -ml-[3.5px] top-[1rem] w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] ring-0 ring-cyan-400/0 transition-all duration-300 ease-out z-10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.9)] group-hover:scale-125 group-hover:ring-4 group-hover:ring-cyan-400/20 [.light_&]:bg-slate-300 [.light_&]:shadow-none [.light_&]:ring-4 [.light_&]:ring-white group-hover:[.light_&]:bg-purple-600 group-hover:[.light_&]:ring-purple-100 group-hover:[.light_&]:scale-125" />

                {/* Content */}
                <div className="flex-1 pb-2 z-10 relative">
                  <div className="mb-4">
                    <h3 className="heading-md trainer-link transition-colors duration-300 [.light_&]:text-xl [.light_&]:font-bold group-hover:[.light_&]:text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-small text-[var(--text-muted)] mt-1 [.light_&]:text-[14.5px] [.light_&]:font-medium [.light_&]:text-slate-500">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-3 sm:space-y-3.5">
                    {exp.responsibilities.map((req, rIdx) => (
                      <li key={rIdx} className="text-body flex items-start gap-3 [.light_&]:text-slate-600 [.light_&]:text-[15px] [.light_&]:leading-relaxed">
                        <span className="text-[var(--text-faint)] mt-[0.45rem] text-[0.55rem] transition-colors duration-300 [.light_&]:text-slate-400 group-hover:[.light_&]:text-purple-500">●</span>
                        <span className="flex-1 opacity-90 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:opacity-100">{req}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-5">
                    {trainerSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[0.62rem] px-2 py-0.5 rounded border transition-all duration-200 ease-out bg-[var(--surface-raised)] border-[var(--border)] text-[var(--text-muted)] [.light_&]:bg-slate-50 [.light_&]:border-slate-200/90 [.light_&]:text-slate-700 [.light_&]:rounded-lg [.light_&]:font-mono tracking-wide hover:bg-[var(--accent-dim)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:shadow-[0_4px_12px_rgba(167,139,250,0.08)] hover:-translate-y-0.5 hover:[.light_&]:bg-purple-50/50 hover:[.light_&]:border-purple-400 hover:[.light_&]:text-purple-950 hover:[.light_&]:shadow-[0_4px_12px_rgba(139,92,246,0.12)] hover:[.light_&]:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Experience Item 2: Internship */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              className="group relative flex flex-col sm:flex-row gap-2 sm:gap-16 opacity-80 hover:opacity-100 p-5 sm:p-6 rounded-[16px] border border-transparent bg-transparent hover:bg-[var(--surface-raised)] hover:border-[var(--border)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out [.light_&]:opacity-100 [.light_&]:border-transparent hover:[.light_&]:border-slate-200/90 hover:[.light_&]:bg-white hover:[.light_&]:shadow-[0_8px_24px_rgba(139,92,246,0.06)]"
            >
              {/* Duration */}
              <div className="sm:w-36 pt-1 flex-shrink-0 z-10 relative">
                <p className="text-label text-[var(--text-muted)] transition-colors duration-300 [.light_&]:text-xs [.light_&]:font-mono [.light_&]:font-bold [.light_&]:tracking-wider [.light_&]:text-slate-400 group-hover:[.light_&]:text-purple-600 uppercase">
                  {internship.duration}
                </p>
              </div>

              {/* Timeline Node */}
              <div className="hidden sm:flex absolute left-[12.5rem] -ml-[3.5px] top-[1.1rem] w-2 h-2 rounded-full bg-[var(--border-hover)] ring-0 ring-cyan-400/0 transition-all duration-300 ease-out z-10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.9)] group-hover:scale-125 group-hover:ring-4 group-hover:ring-cyan-400/20 [.light_&]:bg-slate-300 [.light_&]:ring-4 [.light_&]:ring-white group-hover:[.light_&]:bg-purple-600 group-hover:[.light_&]:ring-purple-100 group-hover:[.light_&]:scale-125" />

              {/* Content */}
              <div className="flex-1 pb-2 z-10 relative">
                <div className="mb-4">
                  <h3 className="text-[1.0625rem] font-medium text-[var(--text-primary)] transition-colors duration-300 [.light_&]:text-xl [.light_&]:font-bold [.light_&]:text-slate-900 group-hover:[.light_&]:text-slate-900">
                    {internship.role}
                  </h3>
                  <p className="text-small text-[var(--text-muted)] mt-1 [.light_&]:text-[14.5px] [.light_&]:font-medium [.light_&]:text-slate-500">
                    {internship.company} — {internship.location}
                  </p>
                </div>
                <p className="text-body mb-5 transition-opacity duration-300 group-hover:opacity-100 opacity-90 [.light_&]:text-slate-600 [.light_&]:text-[15px] [.light_&]:leading-relaxed [.light_&]:opacity-100">
                  {internship.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {internship.skills.map((skill, sdx) => (
                    <span
                      key={sdx}
                      className="text-[0.62rem] px-2 py-0.5 rounded border transition-all duration-200 ease-out bg-[var(--surface-raised)] border-[var(--border)] text-[var(--text-muted)] [.light_&]:bg-slate-50 [.light_&]:border-slate-200/90 [.light_&]:text-slate-700 [.light_&]:rounded-lg [.light_&]:font-mono tracking-wide hover:bg-[var(--accent-dim)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] hover:shadow-[0_4px_12px_rgba(167,139,250,0.08)] hover:-translate-y-0.5 hover:[.light_&]:bg-purple-50/50 hover:[.light_&]:border-purple-400 hover:[.light_&]:text-purple-950 hover:[.light_&]:shadow-[0_4px_12px_rgba(139,92,246,0.12)] hover:[.light_&]:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
