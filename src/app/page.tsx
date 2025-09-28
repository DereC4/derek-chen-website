'use client';

import Navbar from '@/components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            {/* First part */}
            <div className='min-h-screen flex flex-col justify-center items-center px-4 bg-background'>
                <div className='max-w-[1600px] mx-auto text-center'>
                    {/* Name with Typing Effect */}
                    <div className='mb-8'>
                        <h1 className='text-5xl md:text-7xl font-bold text-foreground mb-4'>
                            Derek Chen
                            <TypeAnimation
                                sequence={['', 500, '', 500, '', 500]}
                                wrapper='span'
                                speed={50}
                                style={{
                                    fontSize: '1em',
                                    display: 'inline-block',
                                    marginLeft: '8px',
                                    color: 'var(--primary)',
                                }}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </h1>
                    </div>
                    <div className='max-w-4xl mx-auto mb-12'>
                        <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-6'>
                            I'm a software engineer and CS student at UT Austin. I enjoy software engineering,
                            especially the part where I get to design stuff that impacts people from my early days
                            dabbling in Minecraft code (Minecraft Forge API) to real industry work at AT&T and Charles
                            Schwab.
                        </p>
                        <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-6'>
                            My favorite part of coding is always when I get to see what I visualize come to life.
                        </p>
                        <p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
                            Some aspects of computer science that particularly pique my interest are{' '}
                            <span className='text-primary font-semibold'>full stack development</span>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
