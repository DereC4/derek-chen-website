import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import ArrowLink from './ArrowLink';

// https://grubersjoe.github.io/react-github-calendar/#/?user=derec4
export default function GithubStats() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019];
    const username = 'DereC4';

    return (
        <div className='flex flex-col items-start gap-6 p-6 bg-slate-900 text-white rounded-xl max-w-4xl mx-auto'>
            <div className='flex flex-row justify-center mx-auto'>
                <p>$ git log --stat</p>
                <ArrowLink
                    label={'Github'}
                    href={'https://github.com/DereC4'}
                    target='_blank'
                    className='text-lg md:text-xl text-foreground hover:text-foreground/80 mb-1'
                />
            </div>
            <GitHubCalendar
                username={username}
                colorScheme='dark'
                // theme={{
                //   dark: ['#1e293b', '#0e7490', '#06b6d4', '#22d3ee', '#67e8f9'],
                // }}
            />
        </div>
    );
}
