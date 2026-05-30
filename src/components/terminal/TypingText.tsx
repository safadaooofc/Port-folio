import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onDone?: () => void;
  className?: string;
  showCursor?: boolean;
}

export function TypingText({ text, speed = 50, delay = 0, onDone, className, showCursor = true }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
          onDone?.();
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay, onDone]);

  return (
    <span className={cn('text-terminal-green', className)}>
      {displayed}
      {showCursor && !done && <span className="terminal-cursor text-terminal-green">_</span>}
    </span>
  );
}
