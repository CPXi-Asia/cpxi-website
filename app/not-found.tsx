import Link from "next/link";

// Renders inside the root layout, so the site header/footer stay put.
export default function NotFound() {
  return (
    <main className="px-6 py-32 text-center sm:px-10 lg:px-16">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        We couldn&rsquo;t find that page.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted">
        It may have moved. Try our case studies, or head back to the home page.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/case-studies"
          className="rounded-md bg-accent-strong px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-strong-hover"
        >
          Case studies
        </Link>
        <Link
          href="/"
          className="rounded-md border border-surface-border px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
