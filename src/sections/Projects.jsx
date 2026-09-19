import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section relative border-t border-[var(--border)] [.light_&]:border-slate-100 [.light_&]:bg-white py-12 sm:py-16"
    >
      <div className="container relative z-10 max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <span className="text-label-accent block mb-2"></span>
          <h2 className="heading-lg text-2xl sm:text-3xl [.light_&]:font-bold [.light_&]:text-slate-900 [.light_&]:tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="
                group relative overflow-hidden rounded-[14px] p-5 sm:p-7
                border border-[var(--border)] bg-[var(--surface-raised)]
                transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] flex flex-col
                [.light_&]:border-slate-200 [.light_&]:bg-slate-50
                hover:[.light_&]:border-purple-300/80 hover:[.light_&]:shadow-[0_6px_16px_rgba(139,92,246,0.05)]
              "
            >
              {/* Top Meta Data: Category & Subtitle */}
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_rgba(167,139,250,0.5)]" />
                  <span className="font-mono text-[0.625rem] tracking-wider uppercase text-[var(--text-muted)] [.light_&]:text-slate-500">
                    {project.category}
                  </span>
                </div>
                {project.subtitle && (
                  <>
                    <span className="text-[var(--border)] text-xs [.light_&]:text-slate-300">|</span>
                    <span className="font-mono text-[0.625rem] tracking-[0.1em] uppercase text-[var(--accent)] [.light_&]:text-purple-600/90 font-medium">
                      {project.subtitle}
                    </span>
                  </>
                )}
              </div>

              {/* Content Layout: 2 Columns on Desktop */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center">
                
                {/* Left Column: Title, Description, and Tech Tags */}
                <div className="w-full lg:w-[55%] flex flex-col">
                  <h3 className="
                    text-[1.2rem] sm:text-[1.35rem] font-bold leading-tight tracking-tight mb-3
                    text-[var(--text-primary)] [.light_&]:text-slate-900
                  ">
                    {project.title}
                  </h3>
                  
                  <p className="
                    text-[0.875rem] sm:text-[0.9rem] leading-relaxed mb-6
                    text-[var(--text-secondary)] [.light_&]:text-slate-600
                  ">
                    {project.description}
                  </p>

                  {/* How it Works / Tech Flow */}
                  {project.flow && (
                    <div className="mb-6">
                      <p className="font-mono text-[0.6rem] tracking-wider uppercase mb-3 text-[var(--text-muted)] [.light_&]:text-slate-400">
                        System Workflow
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {project.flow.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                            <span className="
                              inline-flex px-2.5 py-1 
                              rounded-[4px] border border-[var(--border)]
                              bg-[var(--surface)] text-[0.65rem] font-medium tracking-wide
                              text-[var(--text-primary)] [.light_&]:text-slate-700
                              [.light_&]:bg-white [.light_&]:border-slate-200
                            ">
                              {step}
                            </span>
                            {idx < project.flow.length - 1 && (
                              <svg className="w-3 h-3 text-[var(--accent)] [.light_&]:text-purple-400 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Technology Tags */}
                  <div>
                    <p className="
                      font-mono text-[0.6rem] tracking-wider uppercase mb-2.5
                      text-[var(--text-muted)] [.light_&]:text-slate-400
                    ">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="
                            inline-block px-2.5 py-1
                            rounded-md border font-mono text-[0.625rem] tracking-wide
                            transition-all duration-200 ease-out
                            text-[var(--text-muted)] bg-[var(--surface)] border-[var(--border)] group-hover:border-[var(--border-accent)]/30
                            [.light_&]:text-slate-700 [.light_&]:bg-white [.light_&]:border-slate-200 group-hover:[.light_&]:border-purple-300/40
                            hover:!bg-purple-50/10 hover:!border-purple-400 hover:!ring-1 hover:!ring-purple-400/40 hover:!text-purple-300 hover:shadow-[0_4px_8px_rgba(139,92,246,0.1)] hover:-translate-y-px
                            hover:[.light_&]:!bg-purple-50/70 hover:[.light_&]:!border-purple-400 hover:[.light_&]:!ring-1 hover:[.light_&]:!ring-purple-400/40 hover:[.light_&]:!text-purple-950
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column: Key Highlights Box */}
                <div className="w-full lg:w-[45%]">
                  <div className="
                    rounded-xl p-5 sm:p-6
                    bg-black/20 border border-[var(--border)]
                    [.light_&]:bg-white/60 [.light_&]:border-slate-200/80 [.light_&]:shadow-sm
                    group-hover:border-[var(--border-accent)]/50 group-hover:bg-[var(--surface)]
                    group-hover:[.light_&]:border-purple-200/80 group-hover:[.light_&]:bg-white
                    transition-all duration-300
                  ">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-3.5 h-3.5 text-[var(--accent)] [.light_&]:text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="
                        font-mono text-[0.625rem] tracking-wider uppercase
                        text-[var(--text-primary)] [.light_&]:text-slate-800 font-medium
                      ">
                        Key Highlights
                      </p>
                    </div>
                    
                    <ul className="flex flex-col gap-2.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <span className="
                            mt-[0.35rem] w-1 h-1 rounded-full flex-shrink-0 
                            bg-[var(--border)] transition-all duration-300
                            group-hover/item:bg-[var(--accent)] group-hover/item:shadow-[0_0_6px_rgba(167,139,250,0.5)]
                            [.light_&]:bg-slate-300 group-hover/item:[.light_&]:bg-purple-500 group-hover/item:[.light_&]:shadow-none
                          " />
                          <span className="
                            text-[0.825rem] leading-snug 
                            text-[var(--text-secondary)] transition-colors duration-300
                            group-hover/item:text-[var(--text-primary)]
                            [.light_&]:text-slate-600 group-hover/item:[.light_&]:text-slate-900
                          ">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

