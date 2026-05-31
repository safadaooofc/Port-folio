import { cn } from '@/utils/cn';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  actions?: React.ReactNode;
}

export function TerminalWindow({
  title = 'Windows PowerShell',
  children,
  className,
  bodyClassName,
  actions,
}: TerminalWindowProps) {
  return (
    <div className={cn('rounded-sm border border-terminal-border bg-terminal-bg overflow-hidden flex flex-col', className)}>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-terminal-surface border-b border-terminal-border shrink-0">
        <div className="flex items-center gap-1 shrink-0">
          <span className="w-3 h-3 rounded-sm bg-terminal-muted/30 border border-terminal-border" title="Fechar" />
          <span className="w-3 h-3 rounded-sm bg-terminal-muted/30 border border-terminal-border" title="Maximizar" />
          <span className="w-3 h-3 rounded-sm bg-terminal-muted/30 border border-terminal-border" title="Minimizar" />
        </div>
        <span className="text-xs text-terminal-muted ml-2 truncate flex-1">{title}</span>
        {actions}
      </div>
      <div className={cn('p-4 md:p-6 bg-terminal-bg flex flex-col flex-1 min-h-0', bodyClassName)}>
        {children}
      </div>
    </div>
  );
}
