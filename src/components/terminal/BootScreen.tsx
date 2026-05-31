import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardSound, simulateTypingSounds } from '@/hooks/useKeyboardSound';

interface BootLine {
  text: string;
  delay: number;
  color?: string;
}

const bootSequence: BootLine[] = [
  { text: 'PS C:\\Users\\kiover\\portfolio> npm run kiover-portfolio', delay: 0, color: 'text-terminal-text' },
  { text: '', delay: 400 },
  { text: '> kiover-portfolio@1.0.0 start', delay: 600, color: 'text-terminal-muted' },
  { text: '> vite --host', delay: 800, color: 'text-terminal-muted' },
  { text: '', delay: 1000 },
  { text: '  VITE v7.2.4  ready in 420ms', delay: 1200, color: 'text-terminal-success' },
  { text: '', delay: 1400 },
  { text: '  ➜  Local:   http://localhost:5173/', delay: 1600, color: 'text-terminal-accent' },
  { text: '  ➜  Network: http://192.168.1.42:5173/', delay: 1800, color: 'text-terminal-muted' },
  { text: '', delay: 2000 },
  { text: '  Loading modules...', delay: 2200, color: 'text-terminal-amber' },
];

const progressSteps = [
  { pct: 20, label: 'components' },
  { pct: 45, label: 'styles' },
  { pct: 70, label: 'data' },
  { pct: 90, label: 'assets' },
  { pct: 100, label: 'ready' },
];

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [lines, setLines] = useState<BootLine[]>([]);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'loading' | 'done'>('typing');
  const [exiting, setExiting] = useState(false);
  const { playKeypress } = useKeyboardSound();
  const playKeypressRef = useRef(playKeypress);
  playKeypressRef.current = playKeypress;

  const finish = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    setTimeout(onComplete, 600);
  }, [exiting, onComplete]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    bootSequence.forEach((line) => {
      timeouts.push(setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (line.text) {
          simulateTypingSounds(line.text, playKeypressRef.current, 28, 0.6);
        }
      }, line.delay));
    });

    const lastDelay = bootSequence[bootSequence.length - 1].delay;

    timeouts.push(setTimeout(() => setPhase('loading'), lastDelay + 200));

    progressSteps.forEach((step, i) => {
      timeouts.push(setTimeout(() => {
        setProgress(step.pct);
        playKeypressRef.current(0.4);
        if (step.pct === 100) {
          setTimeout(() => setPhase('done'), 300);
        }
      }, lastDelay + 400 + i * 350));
    });

    const totalDuration = lastDelay + 400 + progressSteps.length * 350 + 600;
    timeouts.push(setTimeout(finish, totalDuration));

    return () => timeouts.forEach(clearTimeout);
  }, [finish]);

  useEffect(() => {
    const handleSkip = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') finish();
    };
    window.addEventListener('keydown', handleSkip);
    return () => window.removeEventListener('keydown', handleSkip);
  }, [finish]);

  const progressBar = () => {
    const filled = Math.round(progress / 5);
    const empty = 20 - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${progress}%`;
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-terminal-bg flex flex-col justify-center p-6 md:p-12 cursor-pointer"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={finish}
          role="status"
          aria-live="polite"
          aria-label="Carregando portfólio"
        >
          <div className="max-w-2xl w-full mx-auto font-mono text-sm md:text-base">
            {lines.map((line, i) => (
              <div key={i} className={line.color || 'text-terminal-text'}>
                {line.text || ' '}
              </div>
            ))}

            {phase === 'loading' && (
              <div className="mt-2">
                <span className="text-terminal-muted">{progressBar()}</span>
              </div>
            )}

            {phase === 'done' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2"
              >
                <span className="text-terminal-success">✓ Portfolio loaded successfully</span>
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-terminal-muted text-xs">
            pressione qualquer tecla ou clique para pular
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
