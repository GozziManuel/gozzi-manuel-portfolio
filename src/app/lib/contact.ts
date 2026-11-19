"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);

//
export type ContactResult = { ok: true } | { ok: false; error: string };

//
export async function sendingEmail(formData: FormData): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  //***** */ validation

  // Empty INPUTS
  if (name === "" || message === "" || email === "") {
    return {
      ok: false,
      error: `Input Vuoto: Ricontrolla `,
    };
  }

  // lunghezza campi
  if (name.length > 80 || email.length > 120 || message.length > 2000) {
    return { ok: false, error: "Uno dei campi è troppo lungo." };
  }

  // validazione email template
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "email non valida" };
  }

  // Sending EMAIL and getting possible errors
  const { error } = await resend.emails.send({
    to: "manuelavoro0623@gmail.com",
    from: "Qualcuno ti ha scritto! --PORTFOLIO MANUEL <onboarding@resend.dev>",
    replyTo: email,
    subject: `Nuovo messaggio da ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return { ok: false, error: `errore nel mandare l'email ${error}` };
  } else
    return {
      ok: true,
    };
}
