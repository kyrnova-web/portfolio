import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { education, courses } from '../data/portfolio';

const VISIBLE_TOPICS = 4;

const tagClass = `
  text-[0.62rem] px-2 py-0.5 rounded border
  transition-all duration-200 ease-out
  bg-[var(--surface-raised)] border-[var(--border)] text-[var(--text-muted)]
  [.light_&]:bg-slate-50 [.light_&]:border-slate-200/90 [.light_&]:text-slate-700 [.light_&]:rounded-lg
  hover:bg-purple-50/10 hover:border-purple-400 hover:ring-1 hover:ring-purple-400/40 hover:text-purple-300 hover:shadow-[0_4px_12px_rgba(139,92,246,0.12)] hover:-translate-y-0.5
  hover:[.light_&]:bg-purple-50/50 hover:[.light_&]:border-purple-400 hover:[.light_&]:ring-1 hover:[.light_&]:ring-purple-400/40 hover:[.light_&]:text-purple-950 hover:[.light_&]:shadow-[0_4px_12px_rgba(139,92,246,0.12)] hover:[.light_&]:-translate-y-0.5
`.trim();

function CourseCard({ course, idx }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = course.topics.length > VISIBLE_TOPICS;
  const hidden = course.topics.length - VISIBLE_TOPICS;
  const visibleTopics = expanded ? course.topics : course.topics.slice(0, VISIBLE_TOPICS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="
        group p-6 rounded-[16px] bg-[var(--surface-raised)] border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.2)]
        transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] hover:shadow-[0_12px_28px_rgba(167,139,250,0.06)]
        [.light_&]:bg-white [.light_&]:border-slate-100 [.light_&]:shadow-[0_2px_10px_rgba(0,0,0,0.03)]
        hover:[.light_&]:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:[.light_&]:border-indigo-100 hover:[.light_&]:-translate-y-1
      "
    >
      <h4 className="text-[0.95rem] font-semibold text-[var(--text-primary)] mb-1 [.light_&]:text-slate-900 [.light_&]:font-bold">
        {course.title}
      </h4>
      <p className="text-xs text-[var(--text-muted)] mb-3 [.light_&]:text-slate-500">
        {course.provider} — {course.location}
      </p>
      <p className="text-[0.8rem] text-[var(--text-secondary)] leading-relaxed mb-4 [.light_&]:text-slate-600">
        {course.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        <AnimatePresence initial={false}>
          {visibleTopics.map((topic, tIdx) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15, delay: tIdx * 0.03 }}
              className={tagClass}
            >
              {topic}
            </motion.span>
          ))}
        </AnimatePresence>

        {/* Expand / Collapse toggle */}
        {hasMore && (
          <button
            onClick={() => setExpanded(prev => !prev)}
            className="
              text-[0.62rem] px-2 py-0.5 rounded border cursor-pointer
              transition-all duration-200 ease-out
              border-dashed border-[var(--border-hover)] text-[var(--text-faint)]
              hover:border-purple-400/60 hover:text-purple-400
              [.light_&]:border-slate-300 [.light_&]:text-slate-400
              hover:[.light_&]:border-purple-400 hover:[.light_&]:text-purple-600
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50
            "
            aria-expanded={expanded}
          >
            {expanded ? '− show less' : `+${hidden} more`}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="section relative border-t border-[var(--border)]
        [.light_&]:bg-gradient-to-br [.light_&]:from-[#F8FAFC] [.light_&]:to-white [.light_&]:border-slate-100
      "
    >
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <span className="text-label-accent block mb-3 [.light_&]:text-indigo-600 [.light_&]:font-semibold [.light_&]:tracking-wider" />
            <h2 className="heading-lg mb-6 [.light_&]:text-slate-900 [.light_&]:font-bold [.light_&]:tracking-tight">
              Academic &amp; Learning
            </h2>
            <p className="text-body max-w-sm mb-12 [.light_&]:text-slate-600 [.light_&]:leading-relaxed">
              A blend of formal engineering education and specialized technical training across frontend development and digital marketing.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-12 lg:pt-8">

          {/* Formal Education */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6 font-mono font-semibold border-b border-[var(--border)] pb-4
               [.light_&]:text-indigo-900/60 [.light_&]:border-slate-200
             ">
              Formal Degree
            </h3>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5 }}
                className="p-7 rounded-[16px] bg-[var(--surface-raised)] border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.2)] [.light_&]:bg-white [.light_&]:border-slate-100 [.light_&]:shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              >
                <p className="text-label text-[var(--text-muted)] mb-3
                    [.light_&]:inline-block [.light_&]:bg-indigo-50/80 [.light_&]:text-indigo-600 [.light_&]:px-3 [.light_&]:py-1.5 [.light_&]:rounded-full [.light_&]:font-medium [.light_&]:tracking-wide [.light_&]:mb-4
                  ">
                  {edu.duration}
                </p>
                <h4 className="heading-sm mb-1.5 [.light_&]:text-slate-900 [.light_&]:font-bold [.light_&]:text-[1.1rem]">
                  {edu.degree}
                </h4>
                <p className="text-small text-[var(--text-secondary)] [.light_&]:text-slate-500 [.light_&]:font-normal">
                  {edu.institution}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Courses & Training */}
          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6 font-mono font-semibold border-b border-[var(--border)] pb-4
               [.light_&]:text-indigo-900/60 [.light_&]:border-slate-200
             ">
              Courses &amp; Training
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {courses.map((course, idx) => (
                <CourseCard key={idx} course={course} idx={idx} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
