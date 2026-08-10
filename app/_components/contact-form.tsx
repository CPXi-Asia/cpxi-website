"use client";

import { useState } from "react";

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
      message: String(formData.get("message") ?? "").trim(),
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
      <div className="rounded-xl border border-surface-border bg-surface p-8 text-center">
        <p className="text-lg font-medium text-foreground">Thanks, we got it.</p>
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

      <Field id={`${formId}-email`} name="email" label="Email" required>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </Field>

      <Field id={`${formId}-message`} name="message" label="Message" required>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-accent-strong px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover disabled:opacity-60"
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
