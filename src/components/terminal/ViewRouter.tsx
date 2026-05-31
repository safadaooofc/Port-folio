import { AnimatePresence, motion } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Community } from '@/components/Gallery';
import { Contact } from '@/components/Contact';

const views = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  community: Community,
  contact: Contact,
} as const;

export function ViewRouter() {
  const { activeView } = useNavigation();
  const Component = views[activeView];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeView}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.25 }}
      >
        <Component />
      </motion.div>
    </AnimatePresence>
  );
}
