import { Resend } from "resend";

let client: Resend | null = null;

/** Cliente de Resend; se crea al primer uso para no fallar en build (Vercel) cuando no hay env. */
export function getResend(): Resend {
  if (!client) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY no está configurada");
    client = new Resend(key);
  }
  return client;
}
