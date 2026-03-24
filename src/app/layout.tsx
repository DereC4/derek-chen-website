import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title: {
        default: 'Derek Chen',
        template: '%s | Derek Chen',
    },
    description:
        'Portfolio of Derek Chen, featuring software engineering internships, open-source work, and high-impact computer science projects.',
    keywords: [
        'Derek Chen',
        'software engineer',
        'computer science portfolio',
        'UT Austin',
        'full stack development',
        'open source',
        'Derek Yujir Chen',
    ],
    authors: [{ name: 'Derek Chen' }],
    creator: 'Derek Chen',
    publisher: 'Derek Chen',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Derek Chen',
        description:
            'Portfolio of Derek Chen, featuring software engineering internships, open-source work, and high-impact computer science projects.',
        siteName: 'Derek Chen Portfolio',
        url: '/',
    },
    twitter: {
        card: 'summary',
        title: 'Derek Chen',
        description:
            'Portfolio of Derek Chen, featuring software engineering internships, open-source work, and high-impact computer science projects.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    category: 'technology',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${inter.variable} ${roboto.variable} font-sans antialiased`}>
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
