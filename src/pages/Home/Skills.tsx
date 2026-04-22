import { motion } from "framer-motion";

type Skill = {
  label: string;
  year: number;
};

const SKILLS: Skill[] = [
  { label: "HTML/CSS/Javascript", year: 2001 },
  { label: "Node.js", year: 2014 },
  { label: "Python", year: 2019 },
  { label: "React", year: 2017 },
  { label: "Vue.js", year: 2020 },
  { label: "Agentic AI", year: 2023 },
  { label: "AWS", year: 2014 },
  { label: "SQL/MySQL/PostgreSQL", year: 2017 },
  { label: "NoSQL/MongoDB", year: 2014 },
];

export default function Skills() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <section className="px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="section-label">Toolkit</div>
          <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink-800 dark:text-ink-100 sm:text-3xl">
            Technologies I build with
          </h2>
        </motion.div>
        <motion.ul
          className="flex flex-wrap justify-center gap-2.5"
          transition={{ staggerChildren: 0.04 }}
          viewport={{ once: true, margin: "-40px" }}
          initial="hidden"
          whileInView="visible"
        >
          {SKILLS.map((skill) => (
            <motion.li
              key={skill.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm transition-colors hover:border-[var(--border-strong)]"
            >
              <span className="font-medium text-[var(--fg)]">
                {skill.label}
              </span>
              <span className="text-xs tabular-nums text-[var(--fg-subtle)]">
                {currentYear - skill.year}y
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
