import React from "react"
import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'

import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const _lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Tu Bienestar Natural | Salud integral y tratamientos naturales',
  description:
    'Diagnóstico integral y tratamientos naturales con atención humana, personalizada y profesional. Iridología, conoterapia, masajes, nutrición y más.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
