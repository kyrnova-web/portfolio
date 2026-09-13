import { motion } from 'framer-motion';
import { highlights } from '../data/portfolio';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  viewport: { once: true, margin: '-10% 0px' }
};

const lightModeConfigs = [
  {
    accentColor: '[.light_&]:bg-blue-500',
    accentText: '[.light_&]:text-blue-600',
    accentBg: '[.light_&]:bg-blue-50',
    hoverBorder: 'group-hover:[.light_&]:border-blue-200',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    accentColor: '[.light_&]:bg-purple-500',
    accentText: '[.light_&]:text-purple-600',
    accentBg: '[.light_&]:bg-purple-50',
    hoverBorder: 'group-hover:[.light_&]:border-purple-200',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    )
  },
  {
    accentColor: '[.light_&]:bg-teal-500',
    accentText: '[.light_&]:text-teal-600',
    accentBg: '[.light_&]:bg-teal-50',
    hoverBorder: 'group-hover:[.light_&]:border-teal-200',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    accentColor: '[.light_&]:bg-orange-500',
    accentText: '[.light_&]:text-orange-600',
    accentBg: '[.light_&]:bg-orange-50',
    hoverBorder: 'group-hover:[.light_&]:border-orange-200',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  }
];

export default function About() {
  return (
    <section id="about" className="section border-t border-[var(--border)]
      [.light_&]:py-16 md:[.light_&]:py-24 [.light_&]:bg-gradient-to-br [.light_&]:from-white [.light_&]:to-[#F8FAFC] [.light_&]:border-slate-100
    ">
      <div className="container relative z-10">

        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={fadeInUp.viewport}
          variants={fadeInUp}
          className="section-header [.light_&]:text-center [.light_&]:mb-16"
        >
          <span className="text-label-accent block mb-3 [.light_&]:text-slate-500 [.light_&]:font-semibold [.light_&]:tracking-wider">

          </span>
          <h2 className="heading-lg [.light_&]:text-3xl md:[.light_&]:text-4xl [.light_&]:font-bold [.light_&]:text-slate-900 [.light_&]:mb-4">
            Specializations & Focus
          </h2>
          <p className="hidden [.light_&]:block text-slate-500 text-[15px] sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
            Core areas of expertise and professional focus that drive my daily work.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 [.light_&]:gap-6">
          {highlights.map((item, index) => {
            const config = lightModeConfigs[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={fadeInUp.viewport}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group [.light_&]:h-full"
              >
                <div className={`
                  h-full p-7 pt-7 rounded-[16px] bg-[var(--surface-raised)] border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.2)] flex flex-col relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(167,139,250,0.06)] hover:border-[var(--accent)]
                  [.light_&]:bg-white [.light_&]:border-slate-100 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_36px_rgba(0,0,0,0.08)] 
                  ${config.hoverBorder}
                `}>

                  {/* Icon */}
                  <div className={`
                    flex w-12 h-12 rounded-xl items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 
                    bg-[var(--surface-overlay)] text-[var(--accent)] border border-[var(--border)] group-hover:bg-[var(--accent-dim)] group-hover:text-[var(--accent-strong)] group-hover:border-[var(--border-accent)]
                    [.light_&]:border-0 ${config.accentBg} ${config.accentText}
                  `}>
                    <div className="w-5 h-5">
                      {config.icon}
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className={`
                    block w-8 h-[3px] rounded-full mb-6 bg-[var(--border-hover)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:w-14
                    [.light_&]:opacity-60 group-hover:[.light_&]:opacity-100 ${config.accentColor}
                  `} />

                  <h3 className="
                    heading-sm mb-3 group-hover:text-[var(--text-primary)] transition-colors
                    [.light_&]:text-lg [.light_&]:font-bold [.light_&]:text-slate-800 group-hover:[.light_&]:text-slate-950 [.light_&]:mb-2
                  ">
                    {item.label}
                  </h3>

                  <p className="
                    text-small text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors
                    [.light_&]:text-slate-500 [.light_&]:leading-relaxed [.light_&]:text-[14.5px] group-hover:[.light_&]:text-slate-600
                  ">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
