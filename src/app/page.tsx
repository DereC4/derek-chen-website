'use client';

import Navbar from '@/components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { BiLogoDiscord } from 'react-icons/bi';

const templateProjects = [
    {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, and secure payments processing.',
        image: '/images/projects/ecommerce-placeholder.jpg',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
        href: '/projects/ecommerce-platform'
    },
    {
        id: 'project-2', 
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.',
        image: '/images/projects/task-app-placeholder.jpg',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
        href: '/projects/task-management'
    },
    {
        id: 'project-3',
        title: 'Weather Dashboard',
        description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps. Integrates with multiple weather APIs for accurate data.',
        image: '/images/projects/weather-placeholder.jpg', 
        technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS Grid', 'LocalStorage'],
        href: '/projects/weather-dashboard'
    }
];

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            {/* First part */}
            <div className='h-screen flex flex-col justify-center items-center px-4 bg-background'>
                <div className='max-w-[1600px] mx-auto text-center'>
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
                    <div className='flex justify-center items-center gap-6 mb-8'>
                            <a 
                                href='https://www.linkedin.com/in/derekyujirchen/' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                            >
                                <FaLinkedin size={40} />
                            </a>
                            <a 
                                href='https://github.com/DereC4' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                            >
                                <FaGithubSquare size={40} />
                            </a>
                            <a 
                                href='https://discord.com/users/yourDiscordId' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='text-foreground hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform'
                            >
                                <BiLogoDiscord size={40} />
                            </a>
                        </div>
                </div>
            </div>

            <div className='h-screen bg-secondary flex items-center justify-center'>
                <div className='max-w-[1600px] mx-auto px-4 text-center'>
                    <h2 className='text-4xl font-bold text-foreground mb-8'>About Me</h2>
                    <p className='text-xl text-muted-foreground'>
                        More content here that requires scrolling to see...
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className='min-h-screen bg-secondary py-16 px-4'>
                <div className='max-w-[1600px] mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>Featured Projects</h2>
                        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                            Here are some of the projects I've worked on that showcase my skills in full-stack development and problem-solving.
                        </p>
                    </div>
                    
                    <div className='space-y-16'>
                        {templateProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                href={project.href}
                                className={`transition-all duration-300 hover:transform hover:-translate-y-2 ${
                                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
