import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

// WhatsApp brand icon (inline SVG — not in lucide)
const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// GitHub brand icon (inline SVG — not in lucide)
const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative border-t border-[var(--border)] overflow-hidden [.light_&]:py-16 md:[.light_&]:py-24 [.light_&]:bg-gradient-to-br [.light_&]:from-white [.light_&]:to-[#F8FAFC] [.light_&]:border-slate-100"
    >
      {/* Background glow - hidden in light mode */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[var(--accent)]/5 to-transparent pointer-events-none [.light_&]:hidden" />

      <div className="container relative z-10">

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-label-accent block mb-4"></span>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] [.light_&]:text-3xl sm:[.light_&]:text-4xl lg:[.light_&]:text-[2.75rem] font-bold tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6 [.light_&]:text-slate-900">
              Let's build something <span className="text-[var(--text-muted)] [.light_&]:text-slate-400 block sm:inline">useful.</span>
            </h2>
            <p className="text-body mx-auto [.light_&]:text-slate-500 [.light_&]:text-base sm:[.light_&]:text-[17px] [.light_&]:max-w-xl [.light_&]:leading-relaxed [.light_&]:font-normal">
              Currently available for frontend development opportunities and freelance projects. I usually respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 [.light_&]:gap-5 sm:[.light_&]:gap-6">

            {/* Email */}
            <motion.a
              href={`mailto:${personal.email}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] hover:bg-[var(--surface-overlay)] hover:border-[var(--border-accent)] transition-all duration-300 [.light_&]:bg-white [.light_&]:rounded-[16px] [.light_&]:p-5 sm:[.light_&]:p-6 [.light_&]:border [.light_&]:border-slate-200/90 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:[.light_&]:-translate-y-1 hover:[.light_&]:border-purple-200"
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className="p-3 rounded-lg bg-[var(--surface-overlay)] text-[var(--accent)] [.light_&]:w-11 [.light_&]:h-11 [.light_&]:rounded-xl [.light_&]:bg-purple-50 [.light_&]:text-purple-600 [.light_&]:flex [.light_&]:items-center [.light_&]:justify-center [.light_&]:p-0 transition-transform duration-300 group-hover:[.light_&]:scale-105">
                  <Mail size={18} />
                </div>
                <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors [.light_&]:text-slate-400 group-hover:[.light_&]:text-slate-800 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-1 [.light_&]:text-[11px] [.light_&]:font-semibold [.light_&]:tracking-wider [.light_&]:text-slate-400 [.light_&]:mb-1.5">EMAIL</p>
              <p className="text-sm font-medium text-[var(--text-primary)] truncate [.light_&]:text-base [.light_&]:font-semibold [.light_&]:text-slate-900 group-hover:[.light_&]:text-purple-600 transition-colors">{personal.email}</p>
            </motion.a>

            {/* LinkedIn */}
            {personal.linkedin && (
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] hover:bg-[var(--surface-overlay)] hover:border-[var(--border-accent)] transition-all duration-300 [.light_&]:bg-white [.light_&]:rounded-[16px] [.light_&]:p-5 sm:[.light_&]:p-6 [.light_&]:border [.light_&]:border-slate-200/90 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:[.light_&]:-translate-y-1 hover:[.light_&]:border-blue-200"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-3 rounded-lg bg-[var(--surface-overlay)] text-[#0A66C2] [.light_&]:w-11 [.light_&]:h-11 [.light_&]:rounded-xl [.light_&]:bg-blue-50 [.light_&]:text-[#0A66C2] [.light_&]:flex [.light_&]:items-center [.light_&]:justify-center [.light_&]:p-0 transition-transform duration-300 group-hover:[.light_&]:scale-105">
                    <Linkedin size={18} />
                  </div>
                  <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors [.light_&]:text-slate-400 group-hover:[.light_&]:text-slate-800 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-1 [.light_&]:text-[11px] [.light_&]:font-semibold [.light_&]:tracking-wider [.light_&]:text-slate-400 [.light_&]:mb-1.5">LINKEDIN</p>
                <p className="text-sm font-medium text-[var(--text-primary)] truncate [.light_&]:text-base [.light_&]:font-semibold [.light_&]:text-slate-900 group-hover:[.light_&]:text-[#0A66C2] transition-colors">LinkedIn Profile</p>
              </motion.a>
            )}

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] hover:bg-[var(--surface-overlay)] hover:border-[var(--border-accent)] transition-all duration-300 [.light_&]:bg-white [.light_&]:rounded-[16px] [.light_&]:p-5 sm:[.light_&]:p-6 [.light_&]:border [.light_&]:border-slate-200/90 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:[.light_&]:-translate-y-1 hover:[.light_&]:border-[#25D366]/40"
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className="p-3 rounded-lg bg-[var(--surface-overlay)] text-[#25D366] [.light_&]:w-11 [.light_&]:h-11 [.light_&]:rounded-xl [.light_&]:bg-[#25D366]/10 [.light_&]:text-[#25D366] [.light_&]:flex [.light_&]:items-center [.light_&]:justify-center [.light_&]:p-0 transition-transform duration-300 group-hover:[.light_&]:scale-105">
                  <WhatsAppIcon size={18} />
                </div>
                <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors [.light_&]:text-slate-400 group-hover:[.light_&]:text-slate-800 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-1 [.light_&]:text-[11px] [.light_&]:font-semibold [.light_&]:tracking-wider [.light_&]:text-slate-400 [.light_&]:mb-1.5">WHATSAPP</p>
              <p className="text-sm font-medium text-[var(--text-primary)] truncate [.light_&]:text-base [.light_&]:font-semibold [.light_&]:text-slate-900 group-hover:[.light_&]:text-[#25D366] transition-colors">{personal.phone}</p>
            </motion.a>

            {/* GitHub */}
            {personal.github && (
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] hover:bg-[var(--surface-overlay)] hover:border-[var(--border-accent)] transition-all duration-300 [.light_&]:bg-white [.light_&]:rounded-[16px] [.light_&]:p-5 sm:[.light_&]:p-6 [.light_&]:border [.light_&]:border-slate-200/90 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:[.light_&]:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:[.light_&]:-translate-y-1 hover:[.light_&]:border-slate-300"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-3 rounded-lg bg-[var(--surface-overlay)] text-[var(--text-primary)] [.light_&]:w-11 [.light_&]:h-11 [.light_&]:rounded-xl [.light_&]:bg-slate-100 [.light_&]:text-slate-700 [.light_&]:flex [.light_&]:items-center [.light_&]:justify-center [.light_&]:p-0 transition-transform duration-300 group-hover:[.light_&]:scale-105">
                    <GitHubIcon size={18} />
                  </div>
                  <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors [.light_&]:text-slate-400 group-hover:[.light_&]:text-slate-800 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-1 [.light_&]:text-[11px] [.light_&]:font-semibold [.light_&]:tracking-wider [.light_&]:text-slate-400 [.light_&]:mb-1.5">GITHUB</p>
                <p className="text-sm font-medium text-[var(--text-primary)] truncate [.light_&]:text-base [.light_&]:font-semibold [.light_&]:text-slate-900 group-hover:[.light_&]:text-slate-600 transition-colors">GitHub Profile</p>
              </motion.a>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
