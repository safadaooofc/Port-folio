import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'terminal-sound';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function readStoredEnabled(): boolean {
  if (prefersReducedMotion()) return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === '0') return false;
  if (stored === '1') return true;
  return true;
}

interface KeyboardSoundContextValue {
  enabled: boolean;
  toggle: () => void;
  playKeypress: (volume?: number) => void;
}

const KeyboardSoundContext = createContext<KeyboardSoundContextValue | null>(null);

export function KeyboardSoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(readStoredEnabled);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playKeypress = useCallback(
    (volume = 1) => {
      if (!enabled || prefersReducedMotion()) return;

      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          void ctx.resume();
        }

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(900 + Math.random() * 300, now);
        gain.gain.setValueAtTime(0.025 * volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } catch {
        // Web Audio indisponível — ignora
      }
    },
    [enabled],
  );

  const toggle = useCallback(() => {
    if (prefersReducedMotion()) return;
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      return next;
    });
  }, []);

  return (
    <KeyboardSoundContext.Provider value={{ enabled, toggle, playKeypress }}>
      {children}
    </KeyboardSoundContext.Provider>
  );
}

export function useKeyboardSound() {
  const context = useContext(KeyboardSoundContext);
  if (!context) {
    throw new Error('useKeyboardSound must be used within KeyboardSoundProvider');
  }
  return context;
}

export function simulateTypingSounds(
  text: string,
  playKeypress: (volume?: number) => void,
  speedMs = 35,
  volume = 0.8,
) {
  if (!text || prefersReducedMotion()) return;
  for (let i = 0; i < text.length; i++) {
    window.setTimeout(() => playKeypress(volume), i * speedMs);
  }
}
