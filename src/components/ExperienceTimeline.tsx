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
import Cyltek from '@/assets/pics/cyltek.jpg';
import Att from '@/assets/pics/att.svg';
import Schwab from '@/assets/pics/schwab.svg';
import Slork from '@/assets/pics/slork.jpg';
import { Typography } from '@mui/material';

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
                        <LogoIcon src={Schwab} size={70} circle alt='Charles Schwab company logo' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink label='Charles Schwab' href='https://www.schwab.com' target='_blank' />
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        Feb 2026 - Present{' '}
                    </Typography>
                </TimelineContent>
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
                        <LogoIcon src={Att} size={70} circle alt='AT&T company logo' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink label='AT&T' href='https://www.att.com' target='_blank' />
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        Feb 2026 - Present{' '}
                    </Typography>
                </TimelineContent>
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
                        <LogoIcon src={Cyltek} size={70} circle alt='CYL-Tek company logo' />
                    </TimelineDot>
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink label='CYLTEK' href='https://www.cyl-tek.com/' target='_blank' />
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        Feb 2026 - Present{' '}
                    </Typography>
                </TimelineContent>
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
                        <LogoIcon src={Slork} size={70} circle alt='Seven Lakes Orchestras logo' />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='span'>
                        <ArrowLink label='Seven Lakes Orchestras' href='https://sevenlakesorchestras.org/' target='_blank' />
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant='caption' sx={{ fontWeight: 600, display: 'block', color: 'var(--primary)' }}>
                        Feb 2026 - Present{' '}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default ExperienceTimeline;
