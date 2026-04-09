'use client';

import { useCallback } from 'react';
import localFont from 'next/font/local';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import { MergedWebringService } from '@/lib/mergedWebringService';

const minecraftia = localFont({
    src: '../assets/fonts/Minecraftia.ttf',
    display: 'swap',
});

/**
 *
 * @returns Component for the UT Austin webring https://github.com/umbresp/ut-webring
 */
export default function WebringRouter() {
    const handleRandomClick = useCallback(async () => {
        try {
            const randomUrl = await MergedWebringService.getRandomLink();
            window.open(randomUrl, '_blank', 'noopener,noreferrer');
        } catch {
            window.open(MergedWebringService.fallbackRandomLink, '_blank', 'noopener,noreferrer');
        }
    }, []);

    return (
        // 4.5.2026 use custom font, use the localFont class which gives an auto-css classname for our font
        <section
            aria-label='UT Webring navigation'
            className={`${minecraftia.className} mx-auto mt-8 w-full max-w-xl bg-background/60 p-6 text-center backdrop-blur-sm`}
        >
            <h2 className='text-lg font-semibold text-foreground'>🤘 UT Webring</h2>

            <div className='mt-5 flex items-center justify-center gap-4'>
                <a
                    href='https://api.jolteon.me/webring/prevlink'
                    className='inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary'
                >
                    <HiOutlineArrowLeft aria-hidden='true' size={16} />
                    <span>Prev</span>
                </a>

                {/* <a
                    href='https://api.jolteon.me/webring/randomlink'
                    className='text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline'
                >
                    Random Site
                </a> */}
                <button
                    type='button'
                    onClick={handleRandomClick}
                    className='text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline cursor-pointer'
                >
                    Random (🎲)
                </button>
                <a
                    href='https://api.jolteon.me/webring/nextlink'
                    className='inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary'
                >
                    <span>Next</span>
                    <HiOutlineArrowRight aria-hidden='true' size={16} />
                </a>
            </div>
        </section>
    );
}
