import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Projetos em Destaque</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {project.badge && (
                      <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-3">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 text-slate-400">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {project.keyFeatures && (
                  <ul className="mb-6 space-y-2">
                    {project.keyFeatures.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
