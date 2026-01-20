export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-sm font-bold">
                V
              </div>
              <span className="font-bold">VisionLens</span>
            </div>
            <p className="text-muted-foreground text-sm">AI-powered plant disease detection and diagnosis.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/upload" className="text-muted-foreground hover:text-primary transition-colors">Upload Plant</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-muted-foreground text-sm">VisionLens uses advanced deep learning to detect plant diseases with high accuracy.</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 VisionLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
