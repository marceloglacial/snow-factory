import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { APP_SETTINGS } from '@/constants'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: APP_SETTINGS.TITLE,
    description: APP_SETTINGS.DESCRIPTION,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
