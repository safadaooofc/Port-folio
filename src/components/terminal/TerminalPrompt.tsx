import { cn } from '@/utils/cn';

interface TerminalPromptProps {
  command?: string;
  children?: React.ReactNode;
  className?: string;
}

export function TerminalPrompt({ command, children, className }: TerminalPromptProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-2', className)}>
      <span className="text-terminal-accent">PS C:\Users\kiover\portfolio</span>
      <span className="text-terminal-text">&gt;</span>
      {command && <span className="text-terminal-text">{command}</span>}
      {children}
    </div>
  );
}
