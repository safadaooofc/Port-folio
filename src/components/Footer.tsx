import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-dark-600/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-bold gradient-text font-mono">
          &lt;Kiover /&gt;
        </a>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          Feito com <Heart size={14} className="text-red-500 fill-red-500" /> por Kiover (safadaoooofc) &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          {['Início', 'Sobre', 'Projetos', 'Contato'].map((link) => (
            <a
              key={link}
              href={`#${link === 'Início' ? 'home' : link.toLowerCase()}`}
              className="text-xs text-gray-500 hover:text-primary-light transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
