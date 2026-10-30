import Link from "next/link";
import { Logo } from "./logo";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/faq", label: "FAQ" },
] as const;

// Shared across every page. On phones the links wrap onto their own row
// under the logo; from `sm` up they sit beside it.
export function SiteHeader() {
  return (
    <header className="px-6 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-5">
        <Link href="/" aria-label="CPXi Asia home">
          <Logo className="h-8 w-auto text-foreground sm:h-10" />
        </Link>
        <nav
          aria-label="Main"
          className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-8"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-foreground sm:text-base"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-md bg-accent-strong px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong-hover sm:text-base"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
