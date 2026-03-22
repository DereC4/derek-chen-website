'use client';

import ProjectsSection from '@/components/ProjectsSection';
import Navbar from '@/components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import ArrowLink from '@/components/ArrowLink';
import { FaGithubSquare, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { BiLogoDiscord, BiMailSend } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { SiKofi } from 'react-icons/si';
import { SOCIAL_LINKS } from '@/data/socialLinks';
import { CgMail } from 'react-icons/cg';
import { CiMail } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import UnderConstructionNotice from '@/components/UnderConstructionNotice';

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            {/* First part */}
            <div id='about' className='h-screen flex flex-col justify-center px-4 bg-background'>
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
                            I'm a software engineer and fourth year Computer Science student at UT Austin. From my early
                            days developing Minecraft Java mods downloaded by millions, to building academic tools
                            relied upon by 50,000+ students daily, to shipping production code for leading tech
                            companies, my focus remains the same: I build reliable, high-performance software that
                            solves real problems for real people.
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
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <FaLinkedin size={40} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <FaGithubSquare size={40} />
                        </a>
                        <a
                            href='mailto:derexh2so4@utexas.edu'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <MdEmail size={40} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.kofi}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                        >
                            <SiKofi size={40} />
                        </a>
                    </div>
                </div>
            </div>

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

            <div id='projects' className='min-h-screen bg-secondary py-16 px-4 flex items-center justify-center'>
                <div className='max-w-6xl mx-auto px-6'>
                    <UnderConstructionNotice />
                </div>
            </div>
        </>
    );
}
