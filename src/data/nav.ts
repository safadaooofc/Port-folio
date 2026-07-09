export interface NavLink {
  id: string;
  name: string;
  href: string;
  command: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', name: 'Início', href: '#home', command: 'cd ~' },
  { id: 'about', name: 'Sobre', href: '#about', command: 'cat about.md' },
  { id: 'skills', name: 'Habilidades', href: '#skills', command: 'ls ~/skills/' },
  { id: 'projects', name: 'Projetos', href: '#projects', command: 'ls ~/projects/' },
  { id: 'contact', name: 'Contato', href: '#contact', command: 'mail --compose' },
];
