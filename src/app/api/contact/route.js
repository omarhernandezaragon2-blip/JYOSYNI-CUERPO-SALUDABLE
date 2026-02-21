import { NextResponse } from "next/server";
import { resend } from "@/libs/resend";
import { addRowToSheet } from "@/libs/google-sheets";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    await addRowToSheet({ name, email, message });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: email,
      subject: "Recibimos tu mensaje",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hola ${name},</h2>
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
          <p style="color: #666;">Tu mensaje:</p>
          <blockquote style="border-left: 3px solid #4f46e5; padding-left: 16px; color: #444;">
            ${message}
          </blockquote>
          <p style="color: #999; font-size: 14px; margin-top: 32px;">
            — El equipo de VibeCoding
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}
