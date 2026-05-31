export function Footer() {
  return (
    <footer className="relative py-6 px-4 md:px-6 border-t border-terminal-border">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-terminal-muted">
        <span>
          <span className="text-terminal-text">[kiover@portfolio]</span> uptime: {new Date().getFullYear()}
        </span>
        <span>
          made with {'<3'} by Kiover (safadaoooofc) | exit 0
        </span>
      </div>
    </footer>
  );
}
