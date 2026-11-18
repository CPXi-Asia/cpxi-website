import Link from "next/link";
import { CONTACT_EMAIL } from "../_lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-border px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-sm text-muted">
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/case-studies" className="transition-colors hover:text-foreground">
            Case studies
          </Link>
          <Link href="/faq" className="transition-colors hover:text-foreground">
            FAQ
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} CPXi Asia. All rights reserved.</p>
      </div>
    </footer>
  );
}
