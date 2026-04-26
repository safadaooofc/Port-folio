import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: '🌐', color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: '🎨', color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', category: 'Frontend' },
  { name: 'React', icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', color: '#ffffff', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4', category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: '🟢', color: '#339933', category: 'Backend' },
  { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Backend' },
  { name: 'C++', icon: '⚙️', color: '#00599C', category: 'Backend' },
  { name: 'C#', icon: '🧩', color: '#68217A', category: 'Backend' },
  // Database & Tools
  { name: 'MongoDB', icon: '🍃', color: '#47A248', category: 'Ferramentas' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', category: 'Ferramentas' },
  { name: 'Git', icon: '📦', color: '#F05032', category: 'Ferramentas' },
  { name: 'Docker', icon: '🐳', color: '#2496ED', category: 'Ferramentas' },
  { name: 'Linux', icon: '🐧', color: '#FCC624', category: 'Ferramentas' },
];

const categories = ['Frontend', 'Backend', 'Ferramentas'];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-dark-800/30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">&lt;habilidades /&gt;</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Tecnologias e ferramentas que utilizo no meu dia a dia para criar soluções incríveis.
          </p>
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills
                .filter((s) => s.category === category)
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-5 rounded-xl bg-dark-800/60 border border-dark-600/30 hover:border-primary/30 transition-all duration-300 text-center cursor-default"
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}08, transparent 70%)`,
                      }}
                    />
                    <div className="relative">
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
