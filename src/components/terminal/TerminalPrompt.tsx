import { cn } from '@/utils/cn';

interface TerminalPromptProps {
  command?: string;
  children?: React.ReactNode;
  className?: string;
}

export function TerminalPrompt({ command, children, className }: TerminalPromptProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-2', className)}>
      <span className="text-terminal-blue">kiover@portfolio</span>
      <span className="text-terminal-muted">:</span>
      <span className="text-terminal-amber">~</span>
      <span className="text-terminal-text">$</span>
      {command && <span className="text-terminal-green terminal-glow">{command}</span>}
      {children}
    </div>
  );
}
