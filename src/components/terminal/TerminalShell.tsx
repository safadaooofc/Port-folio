import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TerminalConsole } from './TerminalConsole';

export function TerminalShell() {
  return (
    <div className="h-screen bg-terminal-bg text-terminal-text overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-0 pt-14 pb-2 px-4 md:px-6">
        <div className="max-w-3xl mx-auto h-full">
          <TerminalConsole />
        </div>
      </main>
      <Footer />
    </div>
  );
}
