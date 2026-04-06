'use client';

import ProjectsSection from '@/components/ProjectsSection';
import Navbar from '@/components/Navbar';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import UnderConstructionNotice from '@/components/UnderConstructionNotice';
import WebringRouter from '@/components/WebringRouter';
import HomeHeroSection from '@/components/HomeHeroSection';

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            {/* First Part */}
            <HomeHeroSection />

            {/* Experience */}
            <div id='experience' className='min-h-screen bg-secondary py-16 px-4'>
                <div className='max-w-6xl mx-auto'>
                    <ExperienceTimeline />
                </div>
            </div>

            {/* Projects */}
            <div id='projects' className='min-h-screen bg-secondary py-16 px-4'>
                <div className='max-w-6xl mx-auto px-6'>
                    <ProjectsSection />
                </div>
            </div>

            <div id='end' className='min-h-screen bg-secondary py-16 px-4 flex items-center justify-center'>
                <div className='max-w-6xl mx-auto px-6'>
                    <UnderConstructionNotice />
                    <WebringRouter />
                </div>
            </div>
        </>
    );
}
