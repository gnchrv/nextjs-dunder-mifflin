import type { Metadata } from 'next'
import { Bricolage_Grotesque as Bricolage } from 'next/font/google'
import './globals.scss'

// Configure the metadata for all pages
export const metadata: Metadata = {
    title: {
        template: '%s — Dunder Mifflin Paper Company, Inc.',
        default: 'Dunder Mifflin Paper Company, Inc.'
    },
    description: 'The official website of Dunder Mifflin Paper Company, Inc.',
}

/* Configure the font and put it into a CSS variable. Set `adjustFontFallback` equal to `false` not prevent the `Failed to find font override values` error. See this issue: https://github.com/vercel/next.js/issues/47115  */
const accent = Bricolage({
    subsets: ['latin-ext'],
    variable: '--ff-accent',
    display: 'swap',
    adjustFontFallback: false
})

// Export the page layout
export default function RootLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <html lang="en" className={accent.variable}>
            <body>{children}</body>
        </html>
    )
}