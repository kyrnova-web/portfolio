import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section relative border-t border-[var(--border)] [.light_&]:border-slate-100 [.light_&]:bg-white"
    >
      <div className="container relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <span className="text-label-accent block mb-3"></span>
          <h2 className="heading-lg [.light_&]:text-3xl md:[.light_&]:text-4xl [.light_&]:font-bold [.light_&]:text-slate-900 [.light_&]:tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65 }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start group"
            >
              {/* ── Left: Project Visual ── */}
              <div className="w-full lg:w-[42%] flex-shrink-0">
                <div className="
                  relative overflow-hidden rounded-[16px]
                  border border-[var(--border)] bg-[var(--surface-raised)]
                  transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--border-accent)] group-hover:shadow-[0_12px_32px_rgba(167,139,250,0.06)]
                  [.light_&]:border-slate-200 [.light_&]:bg-slate-50
                  group-hover:[.light_&]:border-purple-300/80 group-hover:[.light_&]:shadow-[0_12px_28px_rgba(139,92,246,0.08)]
                ">
                  {/* Category label strip */}
                  <div className="
                    flex items-center gap-2 px-4 py-2.5
                    border-b border-[var(--border)]
                    [.light_&]:border-slate-200 [.light_&]:bg-white
                  ">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] opacity-80" />
                    <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--text-muted)] [.light_&]:text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Diagram image */}
                  <div className="p-4 sm:p-6 [.light_&]:bg-slate-50">
                    <img
                      src="/iot-fire-detection.png"
                      alt="IoT Fire Detection System — circuit diagram showing Arduino Uno connected to Flame Sensor, GPS Module, GSM Module, and Buzzer"
                      className="w-full h-auto object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* ── Right: Project Info ── */}
              <div className="w-full lg:w-[58%] lg:pt-1">

                {/* Subtitle + Title */}
                <div className="mb-5">
                  <p className="
                    font-mono text-[0.6875rem] tracking-widest uppercase mb-2
                    text-[var(--accent)] [.light_&]:text-purple-600/80
                  ">
                    {project.subtitle}
                  </p>
                  <h3 className="
                    text-[1.25rem] sm:text-[1.375rem] font-bold leading-snug tracking-tight
                    text-[var(--text-primary)]
                    [.light_&]:text-slate-900
                  ">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="
                  text-[0.9375rem] leading-relaxed mb-7
                  text-[var(--text-secondary)]
                  [.light_&]:text-slate-600
                ">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-7">
                  <p className="
                    font-mono text-[0.65rem] tracking-widest uppercase mb-3
                    text-[var(--text-muted)] [.light_&]:text-slate-400
                  ">
                    Key Highlights
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-[0.35rem] w-1 h-1 rounded-full flex-shrink-0 bg-[var(--accent)] [.light_&]:bg-purple-400 opacity-80" />
                        <span className="text-[0.875rem] leading-snug text-[var(--text-secondary)] [.light_&]:text-slate-600">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        inline-block px-3 py-1.5
                        rounded-md border font-mono text-[0.7rem] tracking-wide
                        transition-all duration-200 ease-out
                        text-[var(--text-muted)] bg-[var(--surface-raised)] border-[var(--border)]
                        [.light_&]:text-slate-700 [.light_&]:bg-slate-50 [.light_&]:border-slate-200/90
                        hover:bg-purple-50/10 hover:border-purple-400 hover:ring-1 hover:ring-purple-400/40 hover:text-purple-300 hover:shadow-[0_4px_12px_rgba(139,92,246,0.12)] hover:-translate-y-0.5
                        hover:[.light_&]:bg-purple-50/50 hover:[.light_&]:border-purple-400 hover:[.light_&]:ring-1 hover:[.light_&]:ring-purple-400/40 hover:[.light_&]:text-purple-950 hover:[.light_&]:shadow-[0_4px_12px_rgba(139,92,246,0.12)] hover:[.light_&]:-translate-y-0.5
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
