import type { Metadata } from 'next'
import { Archivo, Mouse_Memoirs } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-archivo',
})

const mouseMemoirs = Mouse_Memoirs({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mouse-memoirs',
})

export const metadata: Metadata = {
  title: 'Clínica Mundo - Desenvolvimento Infantojuvenil',
  description: 'Clínica especializada em desenvolvimento infantojuvenil na Savassi, BH',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body className={`${archivo.className} ${mouseMemoirs.variable}`}>{children}</body>
    </html>
  )
}
