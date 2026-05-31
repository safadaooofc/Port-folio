import { useState, useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onDone?: () => void;
  onCharTyped?: () => void;
  className?: string;
  showCursor?: boolean;
}

export function TypingText({
  text,
  speed = 50,
  delay = 0,
  onDone,
  onCharTyped,
  className,
  showCursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);
  const onCharTypedRef = useRef(onCharTyped);
  onDoneRef.current = onDone;
  onCharTypedRef.current = onCharTyped;

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const charDelay = prefersReduced ? 0 : speed;

    if (charDelay === 0) {
      setDisplayed(text);
      setDone(true);
      onDoneRef.current?.();
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        onCharTypedRef.current?.();
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
          onDoneRef.current?.();
        }
      }, charDelay);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={cn('text-terminal-text', className)}>
      {displayed}
      {showCursor && !done && <span className="terminal-cursor text-terminal-text">_</span>}
    </span>
  );
}
