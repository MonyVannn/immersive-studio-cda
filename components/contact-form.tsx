"use client";

import { useState, type FormEvent } from "react";
import { contactPage } from "@/lib/content/site";
import { submitContactForm } from "@/app/(site)/contact/actions";

const copy = contactPage.form;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setPending(true);
    setError(null);

    const result = await submitContactForm({ name, email, message });

    setPending(false);

    if (!result.ok) {
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    form.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="max-w-prose text-body font-primary text-onyx/80">
        {copy.successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2">
        <span className="text-label text-dove">{copy.nameLabel}</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className="border-b border-beige bg-transparent py-3 text-body font-primary text-onyx outline-none transition-colors placeholder:text-dove/60 focus:border-onyx"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-label text-dove">{copy.emailLabel}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="border-b border-beige bg-transparent py-3 text-body font-primary text-onyx outline-none transition-colors placeholder:text-dove/60 focus:border-onyx"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-label text-dove">{copy.messageLabel}</span>
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y border-b border-beige bg-transparent py-3 text-body font-primary text-onyx outline-none transition-colors placeholder:text-dove/60 focus:border-onyx"
        />
      </label>

      {error ? (
        <p className="text-body font-primary text-onyx/80">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-fit text-label text-onyx/70 transition-colors hover:text-onyx disabled:opacity-50"
      >
        {copy.submitLabel}
      </button>
    </form>
  );
}
