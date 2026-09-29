import { profile } from '@/data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {currentYear} {profile.name}. Todos os direitos reservados.
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
            GitHub
          </a>
          <a href={profile.links.email} className="text-slate-500 hover:text-slate-900 transition-colors">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
