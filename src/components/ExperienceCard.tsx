'use client';

import { FC, useState, useRef, MouseEvent } from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    companyLink?: string;
    period: string;
    description: string[];
    isNonProfit?: boolean;
    className?: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
    title,
    company,
    companyLink,
    period,
    description,
    isNonProfit = false,
    className = '',
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={`group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className='interactive-card border border-border rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:border-primary/50 bg-background/50 backdrop-blur-sm'
                style={
                    {
                        transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                        '--mouse-x': `${mousePosition.x}px`,
                        '--mouse-y': `${mousePosition.y}px`,
                    } as React.CSSProperties
                }
            >
                {/* Subtle glow effect on hover */}
                <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none'
                    style={{
                        background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--primary), transparent 40%)`,
                    }}
                />

                <div className='content relative z-10'>
                    <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-xl font-semibold text-foreground'>{title}</h3>
                        <span className='text-primary font-medium'>{period}</span>
                    </div>

                    {/* 9.28.2025 - use ( ) for multiline jsx expressions use { } within jsx to insert single javascript  */}

                    <p className='text-muted-foreground mb-4'>
                        {/* if company link exists basic ternery operator im tired it's 6 am im sad i need a job. I shall now go sleep and continue applying tomorrow and working on this site - 9.28.2025 */}
                        {companyLink ? (
                            <a
                                href={companyLink}
                                target='_blank'
                                className='hover:text-foreground transition-colors duration-200 hover:underline'
                            >
                                {company}
                            </a>
                        ) : (
                            company
                        )}

                        {isNonProfit && <span className='text-primary text-sm ml-2'>(Non-Profit)</span>}
                    </p>

                    <ul className='text-muted-foreground space-y-2 list-disc list-inside'>
                        {description.map((item, index) => (
                            <li key={index} className='leading-relaxed'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
