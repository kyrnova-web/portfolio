import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Determine initial state
    const isLightMode = document.documentElement.classList.contains('light');
    setIsLight(isLightMode);
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
    
    if (!isLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  if (!mounted) return <div className="w-10 h-10" />; // Placecholder

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[var(--border)] bg-[var(--surface-raised)] hover:bg-[var(--surface-overlay)] hover:border-[var(--border-hover)] transition-colors duration-300 shadow-sm"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Moon size={18} className="text-[var(--text-primary)]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Sun size={18} className="text-[var(--text-primary)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
