import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            V
          </div>
          <span className="font-bold text-lg hidden sm:inline">VisionLens</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/upload" className="text-foreground hover:text-primary transition-colors font-medium">
            Scan
          </Link>
          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
