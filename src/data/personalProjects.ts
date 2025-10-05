export const projects = [
    {
        id: 'ut-registration-plus',
        title: 'UT Registration Plus',
        description: `Developing an open source Chrome extension (50,000+ active users) that streamlines course registration by integrating course info, professor ratings, grade distributions, and schedule planning directly into official university pages. Built with React, TypeScript, Tailwind, Vite, and maintained in an industry style CI/CD environment by a student-led team. Navigated a complete architecture change off of previous jQuery, JavaScript, and HTML/CSS stack to support Manifest V3.`,
        image: '/images/projects/ut-registration-plus.png',
        technologies: ['TypeScript', 'React', 'CSS/SCSS', 'SQL', 'Vite', 'TailwindCSS'],
        href: '/projects/ut-registration-plus',
        period: 'Dec 2023 – Present',
    },
    {
        id: 'minecraft-moddev',
        title: 'Mod/Plugin Dev',
        description: `Coded plugins, game modifications, and custom tools for Minecraft server networks and content creators, reaching over 17 million users and driving over 6.4 billion YouTube views. Developed a modular Minecraft server plugin enabling players to create, manage, and compete as in-game factions, with features like territory claiming, custom enemy AI, and resource management. Designed and implemented a backend architecture, including asynchronous operations, write-behind caching, and a robust SQL database layer, ensuring thread-safe player data management in a single-threaded server environment.`,
        image: '/images/projects/minecraft-moddev.png',
        technologies: ['Java', 'Gradle', 'Maven', 'SQL', 'APIs'],
        href: '/projects/minecraft-moddev',
        period: 'June 2020 – Present',
    },
    {
        id: 'cobble-guard',
        title: 'Cobble Guard',
        description: `Addressed the widespread issue of unsecured online game servers by building an educational warning network, supported by an asynchronous Rust scanner that discovers, parses, and catalogs over 3.4 million server IPs into a PostgreSQL database. Deployed an automated agent on Oracle Cloud built in TypeScript with Mineflayer API, that connects to vulnerable servers, delivering educational security warnings to over 1 million users and handling queries with a responsive chat module.`,
        image: '/images/projects/cobble-guard.png',
        technologies: ['TypeScript', 'Python', 'Rust', 'PostgreSQL'],
        href: '/projects/cobble-guard',
        period: 'Dec 2024 – Sep 2025',
    },
];
