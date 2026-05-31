import { motion } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section className="py-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="space-y-6">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: catIndex * 0.08 }}
              >
                <div className="text-terminal-accent text-sm font-bold mb-2">
                  drwxr-xr-x  {category}/
                </div>
                <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {categorySkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.02 * i }}
                      className="flex items-center gap-2 py-1 px-2 rounded hover:bg-terminal-surface transition-colors group"
                    >
                      <span className="text-terminal-muted text-xs">-rw-r--r--</span>
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-terminal-text group-hover:text-terminal-accent transition-colors text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 text-terminal-muted text-xs">total {skills.length} skills</div>
      </motion.div>
    </section>
  );
}
