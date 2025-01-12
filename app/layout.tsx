import './globals.css'
import { Inter } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import { Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville'
})
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat'
})

export const metadata = {
  title: 'Caribe - Artesanías de Querétaro',
  description: 'Descubre la belleza de las artesanías queretanas con Caribe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${libreBaskerville.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  )
}
