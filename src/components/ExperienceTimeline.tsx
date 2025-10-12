import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const ExperienceTimeline = () => {
    return (
        <Timeline position='right'>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Experience 1</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Experience 2</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>Experience 3</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default ExperienceTimeline;
