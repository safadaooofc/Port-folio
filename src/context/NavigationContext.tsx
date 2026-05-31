import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { navLinks } from '@/data/nav';

export type ViewId = 'home' | 'about' | 'skills' | 'projects' | 'community' | 'contact';
export type TransitionPhase = 'idle' | 'typing' | 'executing';

const VIEW_IDS: ViewId[] = ['home', 'about', 'skills', 'projects', 'community', 'contact'];

function parseHash(): ViewId {
  const hash = window.location.hash.slice(1);
  return VIEW_IDS.includes(hash as ViewId) ? (hash as ViewId) : 'home';
}

function hashForView(id: ViewId): string {
  return id === 'home' ? window.location.pathname + window.location.search : `#${id}`;
}

interface NavigationContextValue {
  activeView: ViewId;
  isTransitioning: boolean;
  transitionPhase: TransitionPhase;
  pendingView: ViewId | null;
  pendingCommand: string;
  lastCommand: string | null;
  navigateTo: (id: ViewId) => void;
  onCommandTyped: () => void;
  completeTransition: () => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useState<ViewId>(parseHash);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('idle');
  const [pendingView, setPendingView] = useState<ViewId | null>(null);
  const [lastCommand, setLastCommand] = useState<string | null>(null);

  const pendingCommand =
    navLinks.find((link) => link.id === pendingView)?.command ?? '';

  const onCommandTyped = useCallback(() => {
    setLastCommand(pendingCommand);
    setTransitionPhase('executing');
  }, [pendingCommand]);

  const completeTransition = useCallback(() => {
    setPendingView((current) => {
      if (current) {
        setActiveView(current);
        window.history.replaceState(null, '', hashForView(current));
      }
      return null;
    });
    setIsTransitioning(false);
    setTransitionPhase('idle');
  }, []);

  const navigateTo = useCallback(
    (id: ViewId) => {
      if (isTransitioning) return;
      if (id === activeView) return;

      setPendingView(id);
      setIsTransitioning(true);
      setTransitionPhase('typing');
    },
    [activeView, isTransitioning],
  );

  useEffect(() => {
    const initial = parseHash();
    if (initial !== 'home') {
      setActiveView(initial);
    }

    const onHashChange = () => {
      const id = parseHash();
      setActiveView((current) => (current === id ? current : id));
      setIsTransitioning(false);
      setTransitionPhase('idle');
      setPendingView(null);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        activeView,
        isTransitioning,
        transitionPhase,
        pendingView,
        pendingCommand,
        lastCommand,
        navigateTo,
        onCommandTyped,
        completeTransition,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
