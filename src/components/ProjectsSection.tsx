import ProjectCard from '@/components/ProjectCard';

const templateProjects = [
    {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description:
            'A full-stack e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, and secure payments processing.',
        image: '/images/projects/ecommerce-placeholder.jpg',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
        href: '/projects/ecommerce-platform',
    },
    {
        id: 'project-2',
        title: 'Task Management App',
        description:
            'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.',
        image: '/images/projects/task-app-placeholder.jpg',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
        href: '/projects/task-management',
    },
    {
        id: 'project-3',
        title: 'Weather Dashboard',
        description:
            'A responsive weather application that provides real-time weather data, forecasts, and interactive maps. Integrates with multiple weather APIs for accurate data.',
        image: '/images/projects/weather-placeholder.jpg',
        technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS Grid', 'LocalStorage'],
        href: '/projects/weather-dashboard',
    },
];

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
                {templateProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        href={project.href}
                        className={`transition-all duration-300 hover:transform hover:-translate-y-2 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    />
                ))}
            </div>
        </>
    );
}
