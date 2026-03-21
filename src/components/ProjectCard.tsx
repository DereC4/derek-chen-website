'use client';

import { getTechnologyColor, getTextColor } from '@/lib/technologyColors';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string | StaticImageData | null;
    technologies: string[];
    href: string;
    className?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ id, title, description, image, technologies, href, className = '' }) => {
    return (
        <article
            className={`flex flex-col md:flex-row items-center md:items-start mb-6 md:mb-0 md:gap-8 w-full text-center md:text-left ${className}`}
        >
            {image && (
                <Link href={href} className='flex-shrink-0 w-full md:w-[40%] overflow-hidden'>
                    <div className='relative w-full h-[200px] md:h-[250px] rounded overflow-hidden group'>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className='object-cover rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105'
                            sizes='(max-width: 768px) 100vw, 40vw'
                        />
                    </div>
                </Link>
            )}
            <div className='w-full md:w-[60%]'>
                <div className='p-0 md:mt-10 mb-4'>
                    {technologies.map((tech, index) => {
                        const backgroundColor = getTechnologyColor(tech);
                        const textColor = getTextColor(backgroundColor);

                        return (
                            <span
                                key={index}
                                className='inline-block rounded py-0.5 px-2 m-1 text-xs font-medium text-black transition-transform hover:scale-105'
                                style={{ backgroundColor: backgroundColor, color: textColor }}
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
                <Link href={href} className='no-underline'>
                    <h2 className='text-2xl font-bold hover:underline cursor-pointer mb-1 mt-2 text-foreground'>
                        {title}
                    </h2>
                </Link>
                <div className='text-sm text-muted-foreground'>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
