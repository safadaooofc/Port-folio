import { cn } from '@/utils/cn';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ title = 'kiover@portfolio:~', children, className }: TerminalWindowProps) {
  return (
    <div className={cn('rounded-lg border border-terminal-border bg-terminal-surface overflow-hidden', className)}>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] border-b border-terminal-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-terminal-red" />
          <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-terminal-muted ml-2">{title}</span>
      </div>
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}
