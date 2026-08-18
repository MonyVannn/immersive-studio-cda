"use server";

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormResult = {
  ok: boolean;
  error?: string;
};

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactFormResult> {
  // TODO: wire to email service (Resend/SMTP) for contact@immersivestudiocda.com
  void payload;
  return { ok: true };
}
