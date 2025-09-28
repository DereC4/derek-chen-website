import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt4, HiOutlineMail } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiFile } from 'react-icons/bi';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = (): void => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-background border-b border-border z-[1000]">
            <div className='flex'>
                <h1 className='font-bold text-2xl text-primary cursor-pointer'>
                    <Link href="/">Derek Chen</Link>
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex font-medium text-foreground gap-8'>
                <li className='hover:scale-110 duration-500'>
                    <span className='border-b-4 border-spacing-y-6 hover:border-primary border-spacing-8 duration-500 border-transparent px-1 inline'>
                        <Link href="/">About</Link>
                    </span>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <span className='border-b-4 border-spacing-y-6 hover:border-primary border-spacing-8 duration-500 border-transparent px-1 inline'>
                        <Link href="/about">Experience</Link>
                    </span>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <span className='border-b-4 border-spacing-y-6 hover:border-primary border-spacing-8 duration-500 border-transparent px-1 inline'>
                        <Link href="/projects">Projects</Link>
                    </span>
                </li>
                <li className='hover:scale-110 duration-500'>
                    <span className='border-b-4 border-spacing-y-6 hover:border-accent border-spacing-8 duration-500 border-transparent px-1 inline'>
                        <Link href="/contact">Contact</Link>
                    </span>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-[300] duration-500 cursor-pointer'>
                {!nav ? <HiOutlineMenuAlt4 className="text-foreground" size={24}/> : <AiOutlineClose className='text-muted-foreground hover:text-foreground duration-300' size={24}/>}
            </div>
            
            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-[650px] rounded-bl-3xl rounded-br-3xl font-medium bg-background border border-border px-4 py-[22px] md:hidden flex flex-col z-[200]'}>
                <h1 className='font-bold text-2xl text-primary mb-8'>Derek Chen</h1>
                <ul className='items-center justify-center flex flex-col text-foreground'>
                    <li className='py-6 text-3xl hover:text-primary duration-300'>
                        <Link onClick={handleClick} href="/">About</Link>
                    </li>
                    <li className='py-6 text-3xl hover:text-primary duration-300'>
                        <Link onClick={handleClick} href="/about">Experience</Link>  
                    </li>
                    <li className='py-6 text-3xl hover:text-primary duration-300'>
                        <Link onClick={handleClick} href="/projects">Projects</Link>
                    </li>
                    <li className='py-6 text-3xl hover:text-primary duration-300'>
                        <Link onClick={handleClick} href="/contact">Contact</Link>
                    </li>
                    
                    {/* Mobile Social Links */}
                    <div className="flex w-[60%] justify-between py-5">
                        <a href="https://www.linkedin.com/in/derekyujirchen/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className='cursor-pointer text-blue-500'/>
                        </a>
                        <a href="https://github.com/DereC4" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className='cursor-pointer text-muted-foreground'/>
                        </a>
                        <a href="mailto:derexh2so4@utexas.edu" target="_blank" rel="noopener noreferrer">
                            <HiOutlineMail size={30} className='cursor-pointer text-muted-foreground'/>
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <BiFile size={30} className='cursor-pointer text-accent'/>
                        </a>
                    </div>
                </ul>
            </div>

            {/* Desktop Social Sidebar */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-2xl hover:rounded-br-2xl'>
                        <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl hover:rounded-br-2xl duration-300 bg-[#333333]'>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl hover:rounded-br-2xl duration-300 bg-muted'>
                        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl duration-300 bg-accent rounded-br-2xl'>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white px-4'>
                            Resume <BiFile size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;