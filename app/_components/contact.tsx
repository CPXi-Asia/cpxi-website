import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-surface-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Get in touch.
          </h2>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href="mailto:hello@cpxi-asia.com"
                  className="text-lg font-medium text-foreground transition-colors hover:text-accent sm:text-xl"
                >
                  hello@cpxi-asia.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                LinkedIn
              </dt>
              <dd className="mt-1.5">
                <a
                  href="https://www.linkedin.com/company/cpxi-asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-foreground transition-colors hover:text-accent sm:text-xl"
                >
                  linkedin.com/company/cpxi-asia
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <div className="rounded-xl border border-surface-border bg-surface p-6 sm:p-8">
            <ContactForm formId="contact" />
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-surface-border pt-8 text-xs text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} CPXi Asia. All rights reserved.</p>
      </footer>
    </section>
  );
}
