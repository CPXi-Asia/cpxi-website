"use client";

import { useState } from "react";

const BUDGET_OPTIONS = [
  "Under $10k",
  "$10k–$50k",
  "$50k–$150k",
  "$150k+",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ formId }: { formId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      budget: String(formData.get("budget") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? `Request failed (${res.status})`);
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-surface-border bg-surface p-8 text-center">
        <p className="text-lg font-medium text-foreground">Thanks — we got it.</p>
        <p className="mt-2 text-sm text-muted">We&rsquo;ll respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Field id={`${formId}-name`} name="name" label="Name" required>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </Field>

      <Field id={`${formId}-company`} name="company" label="Company" required>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={inputClass}
        />
      </Field>

      <Field id={`${formId}-email`} name="email" label="Work email" required>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </Field>

      <Field id={`${formId}-budget`} name="budget" label="Monthly marketing budget" required>
        <select
          id={`${formId}-budget`}
          name="budget"
          required
          defaultValue=""
          className={`${inputClass} appearance-none bg-[length:0.65em] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%239ca3af'><path d='M4 6l4 4 4-4'/></svg>\")",
          }}
        >
          <option value="" disabled>
            Select range
          </option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-accent px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-surface-border bg-background/40 px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}
