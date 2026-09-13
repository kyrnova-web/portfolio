import { personal, navLinks } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container py-12 md:py-16" style={{ width: 'var(--container)' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[var(--accent-strong)] text-[#fff] text-xs font-bold">
                K
              </span>
              <span className="font-semibold text-sm text-[var(--text-primary)]">
                {personal.name}
              </span>
            </div>
            <p className="text-small" style={{ maxWidth: '32ch' }}>
              {personal.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            <div>
              <p className="text-label mb-3">Navigation</p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(0, 4).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-small hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-label mb-3">&nbsp;</p>
              <div className="flex flex-col gap-2">
                {navLinks.slice(4).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-small hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-label mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="text-small hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
              >
                Email <ArrowUpRight size={11} />
              </a>
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight size={11} />
                </a>
              )}
              <a
                href="https://wa.me/916381118159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
              >
                WhatsApp <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[var(--text-faint)] text-xs">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-[var(--text-faint)] text-xs">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
