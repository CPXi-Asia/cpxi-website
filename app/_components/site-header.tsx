import Link from "next/link";
import { Logo } from "./logo";

// Shared across every page now that the site has more than the home page.
export function SiteHeader() {
  return (
    <header className="px-6 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" aria-label="CPXi Asia home">
          <Logo className="h-8 w-auto text-foreground sm:h-10" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/case-studies"
            className="whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-foreground sm:text-base"
          >
            Case studies
          </Link>
          <Link
            href="/#contact"
            className="rounded-md bg-accent-strong px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong-hover sm:text-base"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
