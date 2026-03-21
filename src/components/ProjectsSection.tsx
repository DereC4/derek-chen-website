import ProjectCard from '@/components/ProjectCard';
import UnderConstructionNotice from '@/components/UnderConstructionNotice';
import { projectImages } from '@/data/projectImages';
import { projects } from '@/data/personalProjects';
import Link from 'next/link';

const featuredProjectIds = [
    'ut-registration-plus',
    'ut-distribution-viewer',
    // 'cobbleguard',
    'pear-desktop',
    'slork-wars',
    'guests',
    'trove',
    'accountech',
];

/**
 * Converts a provided date into a Date type, for further comparisons
 * @param period String representation of date
 * @returns Parsed date object
 */
const parseStartDate = (period: string): Date => {
    const months: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
    };

    // Extract the first date part (before the –)
    const startPart = period.split('–')[0].trim();
    const parts = startPart.split(' ');
    const monthStr = parts[0];
    const year = parseInt(parts[1], 10);

    const monthIndex = months[monthStr] ?? 0;
    return new Date(year, monthIndex, 1);
};

const featuredProjects = featuredProjectIds
    .map(id => projects.find(project => project.id === id))
    .filter((project): project is (typeof projects)[number] => Boolean(project))
    .sort((a, b) => parseStartDate(b.period).getTime() - parseStartDate(a.period).getTime());

export default function ProjectsSection() {
    return (
        <>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>Featured Projects</h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                    Here are some of the projects I've worked on that showcase my skills in full-stack development and
                    problem-solving. <a href='/projects'>See more projects here!</a>
                </p>
            </div>

            <div className='space-y-24 flex flex-col gap-y-16'>
                {featuredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={projectImages[project.id] ?? null}
                        technologies={project.technologies}
                        href={project.href}
                        // 3.19.2026 back and forth project cards layout
                        className={`transition-all duration-300 hover:transform hover:-translate-y-2 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    />
                ))}
            </div>
            <div className='text-center mt-12'>
                <Link href='/projects' className='inline-block px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity'>
                    See more projects here!
                </Link>
            </div>
        </>
    );
}
