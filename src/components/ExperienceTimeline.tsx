import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LogoIcon from './CompanyLogoDot';
import ArrowLink from './ArrowLink';
// 10.12.2025 next.js images use imports
import Cyltek from '@/assets/pics/companies/cyltek.jpg';
import Att from '@/assets/pics/companies/att.svg';
import Schwab from '@/assets/pics/companies/schwab.svg';
import Slork from '@/assets/pics/companies/slork.jpg';
import { Typography } from '@mui/material';
import { experiences } from '@/data/experiences';

const schwabExperience = experiences.find(experience => experience.company === 'Charles Schwab');
const attExperience = experiences.find(experience => experience.company === 'AT&T');
const cyltekExperience = experiences.find(experience => experience.company === 'CYL-Tek');
const slorkExperience = experiences.find(experience => experience.company === 'Seven Lakes Orchestras');
const TIMELINE_DOT_SIZE = 60;
const TIMELINE_LOGO_SIZE = 50;

const ExperienceTimeline = () => {
    return (
        <Timeline
            position='right'
            sx={{
                m: 0,
                p: 0,
                '& .MuiTimelineItem-root:before': {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
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
                        <LogoIcon src={Schwab} size={TIMELINE_LOGO_SIZE} circle alt='Charles Schwab company logo' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink
                            label={schwabExperience?.company ?? 'Charles Schwab'}
                            href={schwabExperience?.companyLink ?? 'https://www.schwab.com'}
                            target='_blank'
                            className='text-lg md:text-xl text-foreground hover:text-foreground/80 mb-1'
                        />
                    </Typography>
                    <Typography variant='body2' sx={{ display: 'block' }}>
                        {schwabExperience?.title}
                    </Typography>
                    <Typography>{schwabExperience?.shortDescription}</Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        {schwabExperience?.period}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

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
                        <LogoIcon src={Att} size={TIMELINE_LOGO_SIZE} circle alt='AT&T company logo' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink
                            label={attExperience?.company ?? 'AT&T'}
                            href={attExperience?.companyLink ?? 'https://www.att.com'}
                            target='_blank'
                            className='text-lg md:text-xl text-foreground hover:text-foreground/80 mb-1'
                        />
                    </Typography>
                    <Typography variant='body2' sx={{ display: 'block' }}>
                        {attExperience?.title}
                    </Typography>
                    <Typography>{attExperience?.shortDescription}</Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        {attExperience?.period}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

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
                        <LogoIcon src={Cyltek} size={TIMELINE_LOGO_SIZE} circle alt='CYL-Tek company logo' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink
                            label={cyltekExperience?.company ?? 'CYL-Tek'}
                            href={cyltekExperience?.companyLink ?? 'https://www.cyl-tek.com/'}
                            target='_blank'
                            className='text-lg md:text-xl text-foreground hover:text-foreground/80 mb-1'
                        />
                    </Typography>
                    <Typography variant='body2' sx={{ display: 'block' }}>
                        {cyltekExperience?.title}
                    </Typography>
                    <Typography>{cyltekExperience?.shortDescription}</Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        {cyltekExperience?.period}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

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
                        <LogoIcon src={Slork} size={TIMELINE_LOGO_SIZE} circle alt='Seven Lakes Orchestras logo' />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        {slorkExperience?.companyLink ? (
                            <ArrowLink
                                label={slorkExperience.company}
                                href={slorkExperience.companyLink}
                                target='_blank'
                                className='text-lg md:text-xl text-foreground hover:text-foreground/80 mb-1'
                            />
                        ) : (
                            (slorkExperience?.company ?? 'Seven Lakes Orchestras')
                        )}
                    </Typography>
                    <Typography variant='body2' sx={{ display: 'block' }}>
                        {slorkExperience?.title}
                    </Typography>
                    <Typography>{slorkExperience?.shortDescription}</Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        {slorkExperience?.period}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default ExperienceTimeline;
