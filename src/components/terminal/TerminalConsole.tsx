import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import { useKeyboardSound } from '@/hooks/useKeyboardSound';
import { TerminalWindow } from './TerminalWindow';
import { TerminalPrompt } from './TerminalPrompt';
import { TypingText } from './TypingText';
import { Cursor } from './Cursor';
import { ViewRouter } from './ViewRouter';
import { SoundToggle } from './SoundToggle';

const TYPING_SPEED_MS = 90;
const EXECUTING_PAUSE_MS = 700;

function CommandLine({ command }: { command: string }) {
  return (
    <div className="mb-4 font-mono text-sm md:text-base">
      <TerminalPrompt command={command} />
    </div>
  );
}

export function TerminalConsole() {
  const {
    isTransitioning,
    transitionPhase,
    pendingCommand,
    lastCommand,
    onCommandTyped,
    completeTransition,
  } = useNavigation();

  const { playKeypress } = useKeyboardSound();
  const scrollRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [executedCommand, setExecutedCommand] = useState<string | null>(null);

  useEffect(() => {
    if (transitionPhase === 'executing' && lastCommand) {
      setExecutedCommand(lastCommand);
    }
  }, [transitionPhase, lastCommand]);

  useEffect(() => {
    if (transitionPhase !== 'executing') return;

    const scrollEl = scrollRef.current;
    scrollEl?.scrollTo({ top: scrollEl.scrollHeight, behavior: 'smooth' });

    const timer = setTimeout(() => {
      completeTransition();
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }, EXECUTING_PAUSE_MS);

    return () => clearTimeout(timer);
  }, [transitionPhase, completeTransition]);

  const dimOutput = isTransitioning && transitionPhase === 'executing';

  return (
    <TerminalWindow className="h-full" bodyClassName="p-0 md:p-0" actions={<SoundToggle />}>
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden px-4 md:px-6 py-4 terminal-scroll min-h-0"
      >
        {executedCommand && <CommandLine command={executedCommand} />}

        <div
          ref={outputRef}
          className={`transition-opacity duration-300 ${dimOutput ? 'opacity-30' : 'opacity-100'}`}
        >
          <ViewRouter />
        </div>
      </div>

      <div className="shrink-0 border-t border-terminal-border px-4 md:px-6 py-3 bg-terminal-bg font-mono text-sm md:text-base">
        <TerminalPrompt>
          {isTransitioning && transitionPhase === 'typing' ? (
            <TypingText
              text={pendingCommand}
              speed={TYPING_SPEED_MS}
              onCharTyped={() => playKeypress()}
              onDone={onCommandTyped}
            />
          ) : (
            <Cursor />
          )}
        </TerminalPrompt>
      </div>
    </TerminalWindow>
  );
}
