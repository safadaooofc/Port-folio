import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects, activeWork, collaborations } from '@/data/projects';
import { TerminalPrompt } from './terminal/TerminalPrompt';

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'ativo': 'text-terminal-success',
    'concluido': 'text-terminal-success',
    'em-andamento': 'text-terminal-amber',
    'arquivado': 'text-terminal-muted',
  };
  return <span className={`text-xs ${colors[status] || 'text-terminal-muted'}`}>[{status}]</span>;
}

export function Projects() {
  return (
    <section className="py-2 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <TerminalPrompt command="cat ~/work/current.md" />
        <div className="mt-3 text-terminal-text font-bold text-sm mb-4"># Trabalho Atual — Reuel</div>
        <div className="space-y-4">
          {activeWork.map((project) => (
            <div key={project.id} className="p-4 rounded border border-terminal-border bg-terminal-surface/50">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-terminal-text font-bold">{project.title}</h3>
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
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-terminal-accent hover:underline transition-colors">
                  <ExternalLink size={12} /> {project.demo}
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <TerminalPrompt command="ls -la ~/projects/" />
        <div className="mt-4 space-y-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="p-4 rounded border border-terminal-border bg-terminal-surface/30 hover:border-terminal-accent/30 transition-all group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-terminal-accent">📁</span>
                  <h4 className="text-terminal-text font-bold group-hover:text-terminal-accent transition-colors">
                    {project.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <StatusBadge status={project.status} />
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-accent transition-colors" aria-label="GitHub">
                      <Github size={14} />
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-accent transition-colors" aria-label="Demo">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-terminal-muted text-sm leading-relaxed mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-terminal-muted">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {collaborations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <TerminalPrompt command="ls ~/collabs/" />
          <div className="mt-4 space-y-3">
            {collaborations.map((collab) => (
              <div key={collab.id} className="p-4 rounded border border-terminal-border bg-terminal-surface/30">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-terminal-text font-bold">{collab.title}</h4>
                    <p className="text-terminal-amber text-xs mt-0.5">{collab.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={collab.status} />
                    {collab.github && (
                      <a href={collab.github} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-accent transition-colors" aria-label="GitHub">
                        <Github size={14} />
                      </a>
                    )}
                    {collab.accessLink && (
                      <a href={collab.accessLink} target="_blank" rel="noopener noreferrer" className="text-terminal-muted hover:text-terminal-accent transition-colors" aria-label="Acessar">
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
        </motion.div>
      )}
    </section>
  );
}
