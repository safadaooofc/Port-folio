import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects, activeWork, collaborations } from '@/data/projects';
import { TerminalWindow } from './terminal/TerminalWindow';
import { TerminalPrompt } from './terminal/TerminalPrompt';

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'ativo': 'text-terminal-green',
    'em-andamento': 'text-terminal-amber',
    'arquivado': 'text-terminal-muted',
  };
  return <span className={`text-xs ${colors[status] || 'text-terminal-muted'}`}>[{status}]</span>;
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Trabalho Atual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="kiover@portfolio — ~/work">
            <TerminalPrompt command="cat ~/work/current.md" />
            <div className="mt-3 text-terminal-green font-bold text-sm mb-4"># Trabalho Atual — Reuel</div>
            <div className="space-y-4">
              {activeWork.map((project) => (
                <div key={project.id} className="p-4 rounded border border-terminal-border bg-terminal-bg/50">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-terminal-green font-bold">{project.title}</h3>
                      {project.role && <p className="text-terminal-amber text-xs mt-0.5">{project.role}</p>}
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-terminal-text text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded border border-terminal-border text-terminal-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-terminal-blue hover:text-terminal-green transition-colors">
                      <ExternalLink size={12} /> {project.demo}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Projetos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="kiover@portfolio — ~/projects">
            <TerminalPrompt command="ls -la ~/projects/" />
            <div className="mt-4 space-y-3">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded border border-terminal-border bg-terminal-bg/30 hover:border-terminal-green/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-blue">📁</span>
                      <h4 className="text-terminal-text font-bold group-hover:text-terminal-green transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <StatusBadge status={project.status} />
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-green transition-colors" aria-label="GitHub">
                          <Github size={14} />
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-green transition-colors" aria-label="Demo">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-terminal-muted text-sm leading-relaxed mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-terminal-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Colaborações */}
        {collaborations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TerminalWindow title="kiover@portfolio — ~/collabs">
              <TerminalPrompt command="ls ~/collabs/" />
              <div className="mt-4 space-y-3">
                {collaborations.map((collab) => (
                  <div key={collab.id} className="p-4 rounded border border-terminal-border bg-terminal-bg/30">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-terminal-text font-bold">{collab.title}</h4>
                        <p className="text-terminal-amber text-xs mt-0.5">{collab.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={collab.status} />
                        {collab.github && (
                          <a href={collab.github} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-green transition-colors" aria-label="GitHub">
                            <Github size={14} />
                          </a>
                        )}
                        {collab.accessLink && (
                          <a href={collab.accessLink} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-green transition-colors" aria-label="Acessar">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-terminal-muted text-sm leading-relaxed mb-2">{collab.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {collab.stack.map((t) => (
                        <span key={t} className="text-xs text-terminal-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </motion.div>
        )}
      </div>
    </section>
  );
}
