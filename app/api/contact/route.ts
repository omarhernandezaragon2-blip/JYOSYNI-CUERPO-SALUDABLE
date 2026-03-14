import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { addRowToSheet } from "@/lib/google-sheets";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INGEST_URL = "http://127.0.0.1:7243/ingest/12024982-cf91-4132-a1d6-51e43b028997";
function debugLog(message: string, data: Record<string, unknown>, hypothesisId: string) {
  fetch(INGEST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      location: "app/api/contact/route.ts",
      message,
      data,
      timestamp: Date.now(),
      hypothesisId,
    }),
  }).catch(() => {});
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };
    // #region agent log
    debugLog("POST body received", { hasName: !!name, hasEmail: !!email, hasMessage: !!message }, "B");
    // #endregion

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido" },
        { status: 400 }
      );
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!toEmail) {
      // #region agent log
      debugLog("missing RESEND_TO_EMAIL", { toEmail }, "B");
      // #endregion
      return NextResponse.json(
        { error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    // #region agent log
    debugLog("before Sheets", { sheetId: !!process.env.GOOGLE_SHEET_ID }, "D");
    // #endregion
    try {
      await addRowToSheet({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      // #region agent log
      debugLog("Sheets ok", {}, "D");
      // #endregion
    } catch (sheetsErr) {
      // #region agent log
      debugLog("Sheets error", { err: sheetsErr instanceof Error ? sheetsErr.message : String(sheetsErr) }, "D");
      // #endregion
    }

    // #region agent log
    debugLog("before Resend", { fromEmail, toEmail: toEmail?.slice(0, 5) }, "C");
    // #endregion
    const resend = getResend();
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Mensaje de contacto: ${name.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuevo mensaje desde el formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="border-left: 3px solid #4f46e5; padding-left: 16px; color: #444;">
            ${escapeHtml(message.trim()).replace(/\n/g, "<br>")}
          </blockquote>
        </div>
      `,
    });

    await resend.emails.send({
      from: fromEmail,
      to: email.trim(),
      subject: "Recibimos tu mensaje",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hola ${escapeHtml(name.trim())},</h2>
          <p>Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo pronto.</p>
          <p style="color: #666;">Resumen de lo que nos escribiste:</p>
          <blockquote style="border-left: 3px solid #4f46e5; padding-left: 16px; color: #444;">
            ${escapeHtml(message.trim()).replace(/\n/g, "<br>")}
          </blockquote>
          <p style="color: #999; font-size: 14px; margin-top: 24px;">
            — El equipo de JYOSYNI
          </p>
        </div>
      `,
    });

    // #region agent log
    debugLog("Resend ok", {}, "C");
    // #endregion
    return NextResponse.json({ success: true });
  } catch (error) {
    // #region agent log
    debugLog("API catch", { err: error instanceof Error ? error.message : String(error) }, "C");
    // #endregion
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
