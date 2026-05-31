import { cn } from '@/utils/cn';

interface CursorProps {
  className?: string;
}

export function Cursor({ className }: CursorProps) {
  return <span className={cn('terminal-cursor text-terminal-text', className)}>_</span>;
}
