import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "VibeCoding - Tu plantilla para lanzar rapido",
  description:
    "Plantilla moderna con Next.js, Tailwind CSS, formulario de contacto, Google Sheets y Resend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
