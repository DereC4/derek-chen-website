'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DarkModeToggler from '@/components/DarkModeToggler';
import AnimatedHamburger from '@/components/AnimatedHamburger';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = (): void => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] bg-background border-b border-border z-[1000]'>
            <div className='max-w-[1100px] w-full mx-auto h-full flex justify-between items-center px-5'>
                <div className='flex'>
                    <h1 className='font-bold text-2xl text-primary cursor-pointer'>
                        <Link href='/'>Derek</Link>
                    </h1>
                </div>

                <div className='flex items-center gap-4'>
                    {/* Desktop Menu */}
                    <ul className='hidden md:flex font-medium text-foreground gap-8'>
                        <li className='hover:scale-110 duration-500'>
                            <span className='border-b-4 border-spacing-y-6 hover:border-primary border-spacing-8 duration-500 border-transparent px-1 inline'>
                                <Link href='/#about'>About</Link>
                            </span>
                        </li>
                        <li className='hover:scale-110 duration-500'>
                            <span className='border-b-4 border-spacing-y-6 hover:border-primary border-spacing-8 duration-500 border-transparent px-1 inline'>
                                <Link href='/#experience'>Experience</Link>
                            </span>
                        </li>
                        <li className='hover:scale-110 duration-500'>
                            <span className='border-b-4 border-spacing-y-6 hover:border-primary border-spacing-8 duration-500 border-transparent px-1 inline'>
                                <Link href='/#projects'>Projects</Link>
                            </span>
                        </li>
                    </ul>

                    <DarkModeToggler defaultMode='dark' />

                    {/* Hamburger */}
                    <AnimatedHamburger isOpen={nav} onClick={handleClick} />
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-[280px] rounded-bl-3xl rounded-br-3xl font-medium bg-background border border-border px-4 py-4 md:hidden flex flex-col z-[200]'
                }
            >
                <h1 className='font-bold text-xl text-primary mb-6'>Derek Chen</h1>
                <ul className='flex flex-col text-foreground'>
                    <li className='py-3 text-lg hover:text-primary duration-300'>
                        <Link onClick={handleClick} href='/#about'>
                            About
                        </Link>
                    </li>
                    <li className='py-3 text-lg hover:text-primary duration-300'>
                        <Link onClick={handleClick} href='/#experience'>
                            Experience
                        </Link>
                    </li>
                    <li className='py-3 text-lg hover:text-primary duration-300'>
                        <Link onClick={handleClick} href='/#projects'>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>

            {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-2xl hover:rounded-br-2xl'>
                        <a
                            href='https://www.linkedin.com/in/yourprofile/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl hover:rounded-br-2xl duration-300 bg-[#333333]'>
                        <a
                            href='https://github.com/yourusername'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl hover:rounded-br-2xl duration-300 bg-muted'>
                        <a
                            href='mailto:your.email@example.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl duration-300 bg-accent rounded-br-2xl'>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'
                        >
                            Resume <BiFile size={30} />
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default Navbar;
