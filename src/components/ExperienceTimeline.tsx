import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LogoIcon from './CompanyLogoDot';
// 10.12.2025 next.js images use imports
import Cyltek from '@/assets/pics/cyltek.jpg';
import Att from '@/assets/pics/att.svg';
import Schwab from '@/assets/pics/schwab.svg';
import Slork from '@/assets/pics/slork.jpg';

const ExperienceTimeline = () => {
    return (
        <Timeline position='right'>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: 80,
                            height: 80,
                            p: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#fff',
                        }}
                    >
                        <LogoIcon src={Schwab} size={70} circle alt='Company logo for Charles Schwab' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Experience 1</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: 80,
                            height: 80,
                            p: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#fff',
                        }}
                    >
                        <LogoIcon src={Att} size={70} circle alt='Company logo for Charles Schwab' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Experience 2</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: 80,
                            height: 80,
                            p: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#fff',
                        }}
                    >
                        <LogoIcon src={Cyltek} size={70} circle alt='Company logo for Charles Schwab' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Experience 3</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: 80,
                            height: 80,
                            p: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#fff',
                        }}
                    >
                        <LogoIcon src={Slork} size={70} circle alt='Company logo for Charles Schwab' />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Experience 3</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default ExperienceTimeline;
