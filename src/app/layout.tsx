// src/app/layout.tsx
import './globals.css';

import { Inter } from 'next/font/google';

import { colors } from '../constants/theme';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
        style={{ backgroundColor: colors.background }}
      >
        <main className="max-w-md mx-auto min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}