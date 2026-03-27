import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import type { StaticImageData } from 'next/image';
import ExperienceTimelineEntry from './ExperienceTimelineEntry';
// 10.12.2025 next.js images use imports
import Cyltek from '@/assets/pics/companies/cyltek.jpg';
import Att from '@/assets/pics/companies/att.svg';
import Schwab from '@/assets/pics/companies/schwab.svg';
import Slork from '@/assets/pics/companies/slork.jpg';
import LHD from '@/assets/pics/companies/lhd.png';
import { experiences } from '@/data/experiences';

type TimelineCompanyConfig = {
    company: string;
    logoSrc: StaticImageData;
    logoAlt: string;
    fallbackCompanyLink?: string;
};

const timelineCompanies: TimelineCompanyConfig[] = [
    {
        company: 'Charles Schwab',
        logoSrc: Schwab,
        logoAlt: 'Charles Schwab company logo',
        fallbackCompanyLink: 'https://www.schwab.com',
    },
    {
        company: 'AT&T',
        logoSrc: Att,
        logoAlt: 'AT&T company logo',
        fallbackCompanyLink: 'https://www.att.com',
    },
    {
        company: 'Longhorn Developers',
        logoSrc: LHD,
        logoAlt: 'Longhorn Developers company logo',
        fallbackCompanyLink: 'https://github.com/Longhorn-Developers',
    },
    {
        company: 'CYL-Tek',
        logoSrc: Cyltek,
        logoAlt: 'CYL-Tek company logo',
        fallbackCompanyLink: 'https://www.cyl-tek.com/',
    },
    {
        company: 'Seven Lakes Orchestras',
        logoSrc: Slork,
        logoAlt: 'Seven Lakes Orchestras logo',
    },
];

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
            {timelineCompanies.map(item => {
                const experience = experiences.find(experienceItem => experienceItem.company === item.company);

                if (!experience) {
                    return null;
                }

                return (
                    <ExperienceTimelineEntry
                        key={experience.id}
                        experience={experience}
                        logoSrc={item.logoSrc}
                        logoAlt={item.logoAlt}
                        fallbackCompanyLink={item.fallbackCompanyLink}
                    />
                );
            })}
        </Timeline>
    );
};

export default ExperienceTimeline;
