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
            <div className='max-w-[1100px] mx-auto flex flex-row items-center justify-between gap-6 px-5 py-6 text-[#9c9c9c] leading-[1.625] tracking-[-0.025em] antialiased'>
                <p className='text-base'>© 2026 Derek Chen. All rights reserved.</p>
                <div className='flex items-center gap-6 text-sm'>
                    <a
                        href='https://www.google.com/maps/place/Austin,+TX'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300'
                    >
                        <HiLocationMarker size={16} />
                        <span>Austin, TX</span>
                    </a>

                    <span>{time}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
