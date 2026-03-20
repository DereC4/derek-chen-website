import ProjectCard from '@/components/ProjectCard';
import { projectImages } from '@/data/projectImages';
import { projects } from '@/data/personalProjects';

const featuredProjectIds = [
    'ut-registration-plus',
    'ut-distribution-viewer',
    'cobbleguard',
    'pear-desktop',
    'slork-wars',
    'guests',
    'apod-space-data',
];

const featuredProjects = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function ProjectsSection() {
    return (
        <>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>Featured Projects</h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                    Here are some of the projects I've worked on that showcase my skills in full-stack development and
                    problem-solving.
                </p>
            </div>

            <div className='space-y-16'>
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
        </>
    );
}
