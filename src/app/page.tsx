'use client';

import ProjectsSection from '@/components/ProjectsSection';
import Navbar from '@/components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import ArrowLink from '@/components/ArrowLink';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { SiKofi } from 'react-icons/si';
import { SOCIAL_LINKS } from '@/data/socialLinks';
import { MdEmail } from 'react-icons/md';
import UnderConstructionNotice from '@/components/UnderConstructionNotice';
import WebringRouter from '@/components/WebringRouter';

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            {/* First part */}
            <main id='about' className='min-h-[100dvh] pt-[80px] flex flex-col justify-center px-4 bg-background'>
                <div className='max-w-6xl mx-auto w-full text-left'>
                    {/* Typing Effect */}
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
                    <div className='max-w-4xl mb-12'>
                        <p className='text-lg md:text-xl text-muted-foreground leading-relaxed mb-6'>
                            I'm a software engineer and fourth-year Computer Science student at UT Austin. From my early
                            days developing{' '}
                            <a
                                href='https://www.curseforge.com/members/derexxd'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-foreground hover:text-primary underline underline-offset-4 transition-colors duration-200'
                            >
                                Minecraft Java mods
                            </a>{' '}
                            downloaded by millions, to building{' '}
                            <a
                                href='https://github.com/Longhorn-Developers/UT-Registration-Plus'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-foreground hover:text-primary underline underline-offset-4 transition-colors duration-200'
                            >
                                academic tools relied upon by 50,000+ students daily
                            </a>
                            , to shipping production code for leading tech companies, my focus remains the same: I build
                            reliable, high-performance software that solves real problems for real people.
                        </p>
                    </div>
                    <div className='flex justify-start items-center gap-8 mb-10'>
                        <ArrowLink label='View Resume' href={SOCIAL_LINKS.resume} target='_blank' />
                    </div>
                    <div className='flex justify-start items-center gap-6 mb-8'>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Visit my LinkedIn profile'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <FaLinkedin size={40} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Visit my GitHub profile'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <FaGithubSquare size={40} />
                        </a>
                        <a
                            href='mailto:derexh2so4@utexas.edu'
                            aria-label='Send me an email'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <MdEmail size={40} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.kofi}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Support me on Ko-fi'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <SiKofi size={40} />
                        </a>
                    </div>
                </div>
            </main>

            {/* Experience */}
            <div id='experience' className='min-h-screen bg-secondary py-16 px-4'>
                <div className='max-w-6xl mx-auto'>
                    <ExperienceTimeline />
                </div>
            </div>

            {/* Projects */}
            <div id='projects' className='min-h-screen bg-secondary py-16 px-4'>
                <div className='max-w-6xl mx-auto px-6'>
                    <ProjectsSection />
                </div>
            </div>

            <div id='end' className='min-h-screen bg-secondary py-16 px-4 flex items-center justify-center'>
                <div className='max-w-6xl mx-auto px-6'>
                    <UnderConstructionNotice />
                    <WebringRouter />
                </div>
            </div>
        </>
    );
}
