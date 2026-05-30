import { motion } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';
import { TerminalWindow } from './terminal/TerminalWindow';
import { TerminalPrompt } from './terminal/TerminalPrompt';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="kiover@portfolio — ~/skills">
            <TerminalPrompt command="ls -la ~/skills/" />

            <div className="mt-4 space-y-6">
              {skillCategories.map((category, catIndex) => {
                const categorySkills = skills.filter(s => s.category === category);
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                  >
                    <div className="text-terminal-blue text-sm font-bold mb-2">
                      drwxr-xr-x  {category}/
                    </div>
                    <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {categorySkills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.03 * i }}
                          className="flex items-center gap-2 py-1 px-2 rounded hover:bg-terminal-green/5 transition-colors group"
                        >
                          <span className="text-terminal-muted text-xs">-rw-r--r--</span>
                          <span className="text-base">{skill.icon}</span>
                          <span className="text-terminal-text group-hover:text-terminal-green transition-colors text-sm">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 text-terminal-muted text-xs">
              total {skills.length} skills
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
