import { Volume2, VolumeX } from 'lucide-react';
import { useKeyboardSound } from '@/hooks/useKeyboardSound';

export function SoundToggle() {
  const { enabled, toggle } = useKeyboardSound();

  return (
    <button
      type="button"
      onClick={toggle}
      className="ml-auto flex items-center gap-1.5 px-2 py-0.5 text-xs text-terminal-muted hover:text-terminal-text border border-transparent hover:border-terminal-border rounded transition-colors"
      aria-label={enabled ? 'Desativar som do teclado' : 'Ativar som do teclado'}
      title={enabled ? 'Som: ligado' : 'Som: desligado'}
    >
      {enabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
      <span className="hidden sm:inline">{enabled ? '[ som ]' : '[ mudo ]'}</span>
    </button>
  );
}
