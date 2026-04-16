import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const figtree = localFont({
    src: [
        {
            path: '../assets/fonts/Figtree-VariableFont_wght.ttf',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Figtree-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
    ],
    variable: '--font-figtree',
    display: 'swap',
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
        images: [
            {
                url: '/website-mockup-1.png',
                alt: 'Derek Chen portfolio preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Derek Chen',
        description:
            'Portfolio of Derek Chen, featuring software engineering internships, open-source work, and high-impact computer science projects.',
        images: ['/website-mockup-1.png'],
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
            <body className={`${figtree.variable} ${roboto.variable} font-sans antialiased`}>
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
