import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, Clock, Sparkles, BookOpen, ChevronDown, ChevronUp, ShoppingBag, Terminal } from 'lucide-react';
import { projects, activeWork, collaborations, type Project, type Collaboration } from '@/data/projects';
import { TerminalPrompt } from './terminal/TerminalPrompt';

type FilterType = 'all' | 'ecommerce' | 'web' | 'bot' | 'roblox' | 'collab';

function StatusBadge({ status, badge }: { status: string; badge?: string }) {
  if (badge) {
    if (badge.includes('Vendido')) {
      return <span className="text-xs px-2 py-0.5 rounded border border-terminal-amber/50 bg-terminal-amber/10 text-terminal-amber font-mono font-bold">[{badge}]</span>;
    }
    if (badge.includes('Destaque') || badge.includes('Atual')) {
      return <span className="text-xs px-2 py-0.5 rounded border border-terminal-accent/50 bg-terminal-accent/10 text-terminal-accent font-mono font-bold">[{badge}]</span>;
    }
    if (badge.includes('Collab')) {
      return <span className="text-xs px-2 py-0.5 rounded border border-terminal-success/50 bg-terminal-success/10 text-terminal-success font-mono font-bold">[{badge}]</span>;
    }
    return <span className="text-xs px-2 py-0.5 rounded border border-terminal-border bg-terminal-surface text-terminal-muted font-mono">[{badge}]</span>;
  }

  const colors: Record<string, string> = {
    'ativo': 'text-terminal-success border-terminal-success/30 bg-terminal-success/10',
    'concluido': 'text-terminal-success border-terminal-success/30 bg-terminal-success/10',
    'em-andamento': 'text-terminal-amber border-terminal-amber/30 bg-terminal-amber/10',
    'vendido': 'text-terminal-amber border-terminal-amber/30 bg-terminal-amber/10',
    'arquivado': 'text-terminal-muted border-terminal-border bg-terminal-surface',
  };

  return <span className={`text-xs px-2 py-0.5 rounded border font-mono ${colors[status] || 'text-terminal-muted'}`}>[{status}]</span>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className={`p-4 rounded border transition-all ${
        project.featured
          ? 'border-terminal-accent/40 bg-terminal-surface/60 hover:border-terminal-accent shadow-sm'
          : 'border-terminal-border bg-terminal-surface/30 hover:border-terminal-accent/40'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-terminal-accent text-sm">
              {project.category === 'ecommerce' ? '🛍️' : project.category === 'bot' ? '🤖' : project.category === 'roblox' ? '🎮' : '📁'}
            </span>
            <h4 className="text-terminal-text font-bold text-base hover:text-terminal-accent transition-colors">
              {project.title}
            </h4>
            <StatusBadge status={project.status} badge={project.badge} />
          </div>
          {project.role && <p className="text-terminal-amber text-xs mt-1 font-mono">{project.role}</p>}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 mt-1 sm:mt-0">
          {project.hoursWorked && (
            <span className="inline-flex items-center gap-1 text-xs text-terminal-muted font-mono bg-terminal-bg/70 px-2 py-0.5 rounded border border-terminal-border/60">
              <Clock size={11} className="text-terminal-accent" /> {project.hoursWorked}
            </span>
          )}
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-accent transition-colors p-1"
              aria-label="Repositório GitHub"
              title="Ver no GitHub"
            >
              <Github size={15} />
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-accent transition-colors p-1"
              aria-label="Demonstração / Live site"
              title="Acessar projeto online"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-terminal-text text-sm leading-relaxed mb-3">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded border border-terminal-border/80 bg-terminal-bg/60 text-terminal-muted font-mono">
            {t}
          </span>
        ))}
      </div>

      {/* Expandable tasks and learnings */}
      {(project.keyFeatures || project.learnings) && (
        <div className="mt-3 pt-2 border-t border-terminal-border/50">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs text-terminal-accent hover:underline font-mono"
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {expanded ? '[ ocultar tarefas & aprendizados ]' : '[ ver detalhes, tarefas & aprendizados ]'}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 space-y-3 text-xs overflow-hidden"
              >
                {project.keyFeatures && (
                  <div className="p-2.5 rounded bg-terminal-bg/80 border border-terminal-border/60">
                    <div className="flex items-center gap-1.5 text-terminal-text font-bold mb-1.5">
                      <Sparkles size={12} className="text-terminal-accent" />
                      <span>Tarefas & Funcionalidades Entregues:</span>
                    </div>
                    <ul className="space-y-1 ml-3 text-terminal-muted list-disc list-outside">
                      {project.keyFeatures.map((kf, idx) => (
                        <li key={idx} className="leading-relaxed">{kf}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.learnings && (
                  <div className="p-2.5 rounded bg-terminal-bg/80 border border-terminal-border/60">
                    <div className="flex items-center gap-1.5 text-terminal-amber font-bold mb-1.5">
                      <BookOpen size={12} />
                      <span>O que aprendi neste projeto:</span>
                    </div>
                    <ul className="space-y-1 ml-3 text-terminal-muted list-disc list-outside">
                      {project.learnings.map((ln, idx) => (
                        <li key={idx} className="leading-relaxed">{ln}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filterTabs: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: '0. todos os projetos', count: activeWork.length + projects.length },
    { id: 'ecommerce', label: '1. e-commerces & lojas', count: [...activeWork, ...projects].filter(p => p.category === 'ecommerce').length },
    { id: 'web', label: '2. web full-stack', count: [...activeWork, ...projects].filter(p => p.category === 'web').length },
    { id: 'bot', label: '3. bots & integrações', count: [...activeWork, ...projects].filter(p => p.category === 'bot').length },
    { id: 'roblox', label: '4. roblox & games', count: [...activeWork, ...projects].filter(p => p.category === 'roblox' || p.category === 'game').length },
    { id: 'collab', label: '5. colaborações & collabs', count: collaborations.length },
  ];

  const displayedProjects = filter === 'all'
    ? [...activeWork, ...projects]
    : filter === 'collab'
    ? []
    : filter === 'roblox'
    ? [...activeWork, ...projects].filter(p => p.category === 'roblox' || p.category === 'game')
    : [...activeWork, ...projects].filter(p => p.category === filter);

  return (
    <section className="py-2 space-y-6">
      {/* Current Work Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <TerminalPrompt command="cat ~/work/current_status.md" />
        <div className="mt-3 text-terminal-text font-bold text-sm mb-3 flex items-center gap-2">
          <ShoppingBag size={15} className="text-terminal-accent" />
          <span># Trabalho Atual em Destaque — E-Commerce & Checkout Transparente</span>
        </div>
        <div className="space-y-4">
          {activeWork.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </motion.div>

      {/* Filter and Projects Browser */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <TerminalPrompt command={`ls -la ~/projects/ --filter=${filter}`} />
        
        {/* Filter buttons styled like terminal options */}
        <div className="mt-3 mb-4 flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-2.5 py-1 text-xs rounded font-mono transition-all ${
                filter === tab.id
                  ? 'bg-terminal-surface border border-terminal-accent text-terminal-accent font-bold'
                  : 'bg-terminal-surface/40 border border-terminal-border text-terminal-muted hover:text-terminal-text hover:border-terminal-muted'
              }`}
            >
              [ {tab.label} ({tab.count}) ]
            </button>
          ))}
        </div>

        {/* Regular Projects List */}
        {filter !== 'collab' && (
          <div className="space-y-3">
            {displayedProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Collaborations Section (Visible in All or Collab filter) */}
        {(filter === 'all' || filter === 'collab') && (
          <div className="mt-8 space-y-4">
            <div className="pt-4 border-t border-terminal-border/60">
              <TerminalPrompt command="cat ~/collaborations/verified.json" />
              <div className="mt-2 mb-3 text-terminal-text font-bold text-sm">
                # Colaborações Verificadas, Lojas & Software Comercializado
              </div>
            </div>

            <div className="space-y-3">
              {collaborations.map((collab, i) => (
                <motion.div
                  key={collab.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="p-4 rounded border border-terminal-border bg-terminal-surface/40 hover:border-terminal-accent/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-terminal-accent">🤝</span>
                        <h4 className="text-terminal-text font-bold text-sm sm:text-base">{collab.title}</h4>
                        <StatusBadge status={collab.status} badge={collab.badge} />
                      </div>
                      <p className="text-terminal-amber text-xs mt-0.5 font-mono">{collab.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {collab.hoursWorked && (
                        <span className="inline-flex items-center gap-1 text-xs text-terminal-muted font-mono bg-terminal-bg/70 px-2 py-0.5 rounded border border-terminal-border/60">
                          <Clock size={11} className="text-terminal-accent" /> {collab.hoursWorked}
                        </span>
                      )}
                      {collab.github && (
                        <a
                          href={collab.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-terminal-muted hover:text-terminal-accent transition-colors p-1"
                          aria-label="GitHub"
                          title="Ver repositório"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {collab.accessLink && (
                        <a
                          href={collab.accessLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-terminal-muted hover:text-terminal-accent transition-colors p-1"
                          aria-label="Acessar"
                          title="Acessar link do projeto"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-terminal-text text-sm leading-relaxed mb-3">{collab.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {collab.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded border border-terminal-border/60 bg-terminal-bg/50 text-terminal-muted font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
