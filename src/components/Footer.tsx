'use client';

import { useEffect, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Chicago',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZoneName: 'short',
        });

        const updateTime = () => {
            setTime(formatter.format(new Date()));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className='border-t border-border bg-background'>
            <div className='max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 px-4 md:px-5 py-4 md:py-6 text-[#9c9c9c] leading-[1.625] tracking-[-0.025em] antialiased'>
                {/* Location and Time */}
                <div className='flex items-center gap-4 md:gap-6 text-xs md:text-sm order-1'>
                    <a
                        href='https://www.google.com/maps/place/Austin,+TX'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1.5 md:gap-2 text-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap'
                    >
                        <HiLocationMarker size={14} className='md:w-4 md:h-4' />
                        <span>Austin, TX</span>
                    </a>

                    <span className='whitespace-nowrap'>{time}</span>
                </div>

                {/* Copyright */}
                <p className='text-xs md:text-base order-3 md:order-none'>© 2026 Derek Chen. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
