"use client";

import type { FormEvent } from "react";
import { Icon } from "@/components/icons";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const senderEmail = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="contact-form"
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      onSubmit={openEmailDraft}
    >
      <p className="form-note">Opens your email app. Review the message there, then press Send.</p>
      <label htmlFor="contact-name">Your Name</label>
      <input id="contact-name" name="name" maxLength={100} required type="text" autoComplete="name" />
      <label htmlFor="contact-email">Your Email</label>
      <input id="contact-email" name="email" maxLength={100} required type="email" autoComplete="email" />
      <label htmlFor="contact-message">Your Message</label>
      <textarea id="contact-message" name="message" maxLength={500} required rows={4} />
      <button type="submit">Open Email Draft <Icon name="send" size={16} /></button>
    </form>
  );
}
