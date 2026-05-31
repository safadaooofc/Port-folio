import { useState } from 'react';
import { KeyboardSoundProvider } from '@/hooks/useKeyboardSound';
import { NavigationProvider } from '@/context/NavigationContext';
import { BootScreen } from './components/terminal/BootScreen';
import { TerminalShell } from './components/terminal/TerminalShell';

export function App() {
  const [booted, setBooted] = useState(() => {
    return sessionStorage.getItem('booted') === '1';
  });

  const handleBootComplete = () => {
    sessionStorage.setItem('booted', '1');
    setBooted(true);
  };

  return (
    <KeyboardSoundProvider>
      {!booted && <BootScreen onComplete={handleBootComplete} />}
      <NavigationProvider>
        <TerminalShell />
      </NavigationProvider>
    </KeyboardSoundProvider>
  );
}
