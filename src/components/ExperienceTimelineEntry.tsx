import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import type { StaticImageData } from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import ArrowLink from './ArrowLink';
import LogoIcon from './CompanyLogoDot';
import type { Experience } from '@/data/experiences';

type ExperienceTimelineEntryProps = {
    experience: Experience;
    logoSrc: string | StaticImageData;
    logoAlt: string;
    fallbackCompanyLink?: string;
    showConnector?: boolean;
};

const TIMELINE_DOT_SIZE = 60;
const TIMELINE_LOGO_SIZE = 50;

const ExperienceTimelineEntry = ({
    experience,
    logoSrc,
    logoAlt,
    fallbackCompanyLink,
    showConnector = true,
}: ExperienceTimelineEntryProps) => {
    const companyLink = experience.companyLink || fallbackCompanyLink;

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot
                    sx={{
                        width: TIMELINE_DOT_SIZE,
                        height: TIMELINE_DOT_SIZE,
                        p: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#fff',
                    }}
                >
                    <LogoIcon src={logoSrc} size={TIMELINE_LOGO_SIZE} circle alt={logoAlt} />
                </TimelineDot>
                {showConnector ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
                <div className='flex items-start justify-between gap-4'>
                    <Typography variant='h6' component='span'>
                        {companyLink ? (
                            <ArrowLink
                                label={experience.company}
                                href={companyLink}
                                target='_blank'
                                className='text-lg md:text-xl text-foreground hover:text-foreground/80 mb-1'
                            />
                        ) : (
                            experience.company
                        )}
                    </Typography>
                    <span className='inline-flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap'>
                        <FiMapPin aria-hidden='true' />
                        {experience.location}
                    </span>
                </div>

                {experience.positions.map(position => (
                    <React.Fragment key={`${position.title}-${position.period}`}>
                        <Typography variant='body2' sx={{ display: 'block' }}>
                            {position.title}
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}
                        >
                            {position.period}
                        </Typography>
                        {position.shortDescription ? <Typography>{position.shortDescription}</Typography> : null}
                    </React.Fragment>
                ))}
            </TimelineContent>
        </TimelineItem>
    );
};

export default ExperienceTimelineEntry;
