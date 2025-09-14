export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© 2024 Minha Muhammad. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:minha@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
