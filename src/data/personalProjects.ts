export type PersonalProject = {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    href: string;
    period: string;
};

export const projects: PersonalProject[] = [
    {
        id: 'ut-registration-plus',
        title: 'UT Registration Plus',
        description: `Developing an open source Chrome extension (50,000+ active users) that streamlines course registration by integrating course info, professor ratings, grade distributions, and schedule planning directly into official university pages. Built with React, TypeScript, Tailwind, Vite, and maintained in an industry style CI/CD environment by a student-led team. Navigated a complete architecture change off of previous jQuery, JavaScript, and HTML/CSS stack to support Manifest V3.`,
        image: '/images/projects/ut-registration-plus.png',
        technologies: ['TypeScript', 'React', 'CSS/SCSS', 'SQL', 'Vite', 'TailwindCSS', 'Figma'],
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
        id: 'cobbleguard',
        title: 'Cobbleguard',
        description: `Addressed the widespread issue of unsecured online game servers by building an educational warning network, supported by an asynchronous Rust scanner that discovers, parses, and catalogs over 3.4 million server IPs into a PostgreSQL database. Deployed an automated agent on Oracle Cloud built in TypeScript with Mineflayer API, that connects to vulnerable servers, delivering educational security warnings to over 1 million users and handling queries with a responsive chat module.`,
        image: '/images/projects/cobble-guard.png',
        technologies: ['TypeScript', 'Python', 'Rust', 'PostgreSQL', 'discord.py'],
        href: '/projects/cobble-guard',
        period: 'Dec 2024 – Sep 2025',
    },
    {
        id: 'findmyorg',
        title: 'FindMyOrg',
        description: `Created a web application to streamline and personalize university student organization recruiting and searching, aimed towards incoming students rendered with React and deployed on Netlify. Boosted organization credibility with the implementation of a verified user review system. Worked Full Stack: Fetched data, reviews, and images on student organizations from a MongoDB database and designed and programmed a responsive and interactive front-end UI with React and JSX.`,
        image: '/images/projects/findmyorg.png',
        technologies: ['JavaScript', 'React', 'Vite', 'MongoDB'],
        href: '/projects/findmyorg',
        period: 'July 2023 – Nov 2023',
    },
    {
        id: 'ut-distribution-viewer',
        title: 'UT Austin Distribution Viewer',
        description: `Developed a user-friendly website with HTML/CSS to replace outdated tools, offering intuitive visualizations of course grade distributions at UT Austin with back-end infrastructure hosted with Express.js framework and SQL. Assisted 6,100+ distinct students during registration periods in the initial 12 month period.`,
        image: '/images/projects/ut-distribution-viewer.png',
        technologies: ['JavaScript', 'HTML/CSS', 'Express', 'SQL'],
        href: '/projects/ut-distribution-viewer',
        period: 'Apr 2023 – May 2023',
    },
    {
        // https://github.com/pear-devs/pear-desktop/pull/1039
        // https://github.com/pear-devs/pear-desktop/pull/1092
        // https://github.com/pear-devs/pear-desktop/issues/1187
        id: 'pear-desktop',
        title: 'Pear Desktop (formerly YouTube Music Desktop)',
        description: `My first real open source work! Contributed to the open-source music player with a Romanization toggle for the Genius plugin and improved behavior for East Asian-language tracks. Followed up with additional work on song-type lyric interception and translation-path handling, plus stability improvements that reduced long-session memory growth. Also addressed a critical memory leak in web request and content-filtering environments so lyric features behaved more reliably across user setups.`,
        image: '/images/projects/pear-desktop.png',
        technologies: ['TypeScript', 'Electron', 'CSS', 'HTML', 'JavaScript'],
        href: 'https://github.com/pear-devs/pear-desktop',
        period: 'Feb 2023 – Jul 2023',
    },
    {
        id: 'slork-wars',
        title: 'SLORK Wars Episode II: Attack of the Violas',
        description: `Now with over 50 thousand views! Launched a multi-month project utilizing all the talents my high school orchestra friends had. Produced a short film entertaining over 50,000 viewers. Recruited 200+ students to join the project. Utilized Unreal Engine (C++) and Blender to 3D model and animate scenes and characters. Based heavily on Rogue One and Revenge of the Sith`,
        image: '/pics/projects/slork-wars-1.png',
        technologies: ['Unreal Engine', 'C++', 'Blender'],
        href: '/projects/slork-wars',
        period: 'Aug 2021 – May 2022',
    },
    {
        id: 'apod-space-data',
        title: 'NASA APOD Viewer',
        description: `Built as a submission for the AP CS Principles exam (2022), this Python-based desktop UI displays NASA's Astronomy Picture of the Day (APOD). Integrated the APOD API to fetch daily image data, then rendered photos and metadata through PIL and tkinter. Project  oversaw by Felicia Castillo.`,
        image: '/images/projects/apod-space-data.png',
        technologies: ['Python', 'tkinter', 'PIL', 'REST API'],
        href: 'https://github.com/DereC4/APOD-Space-data',
        period: 'Apr 2022 – Apr 2022',
    },
    {
        id: 'creepercatcher',
        title: 'Creeper Catcher',
        description: `A 2D pygame retro game where the Geometry Dash (a game popular at the time in school) protagonist catches creepers (also from a game, likewise popular). Designed gameplay loops, scoring flow, and core game logic as part of a focused short-cycle class submission. Has timer-based enemy spawning, collision detection for scoring, and scrolling background layers for motion. Built for Computer Science Independent Study under Ryan Nutt, `,
        image: '/images/projects/creepercatcher.png',
        technologies: ['Python', 'Game Development', 'pygame'],
        href: 'https://github.com/DereC4/creepercatcher',
        period: 'Nov 2021 – Dec 2021',
    },
    {
        id: 'stroudonian-uno',
        title: 'Stroudonian UNO',
        description: `A school UNO recreation with two Java versions: a mostly finished text-based implementation and a GUI build that is around 70% complete. Implemented the core game engine with classes like Board, Deck, Player, and Card for turn flow, draw/discard management, and action-card rules (+2, reverse, skip, wild, +4), then connected gameplay to a Swing-based Graphic UI runner.`,
        image: '/images/projects/stroudonian-uno.png',
        technologies: ['Java', 'Swing', 'Game Development', 'Data Structures', 'Object Oriented Programming'],
        href: 'https://github.com/DereC4/stroudonianuno',
        period: 'August 2019 - October 2019',
    },
    {
        id: 'earth-mobs',
        title: 'Earth Mobs',
        description: `Grew player base of over 300,000 by developing a Forge API-powered modification that introduced new content and enhancements to a critically acclaimed video game. Programmed in-game entities interacting with users in the game environment and pathfinding around the world. Maintained long term support by established bug tracking mediums on GitHub for clients to report issues and suggestions, creating a community of 300+ active users.`,
        image: '/images/projects/earth-mobs.png',
        technologies: ['Java', 'Gradle', 'Forge API'],
        href: '/projects/earth-mobs',
        period: 'June 2020 – Apr 2024',
    },
    {
        id: 'elytra-vaults',
        title: 'Elytra Vaults',
        description: `Built a Minecraft Java datapack and Paper plugin that replaces standard End Ship elytra spawns with per-player vault rewards, so survival servers can give each player fair access to an elytra without one-time loot depletion. Designed the system for multiplayer survival worlds with compatibility for generated structures and a smoother progression loop.`,
        image: '/images/projects/elytra-vaults.png',
        technologies: ['Java', 'Gradle', 'PaperMC', 'Bukkit', 'Datapack'],
        href: 'https://github.com/Derec-Mods/Elytra-Vaults',
        period: 'TBD',
    },
    {
        id: 'excavator-enchant',
        title: 'Excavator Enchant',
        description: `Created a Paper plugin that adds a custom pickaxe enchantment for mining 3x3x3 areas while respecting durability and enchant behavior, making large-scale excavation more practical on survival servers. Built it as a lightweight, vanilla-friendly alternative to bulk-mining datapacks and mods, with compatibility considerations for server logging plugins like CoreProtect.`,
        image: '/images/projects/excavator-enchant.png',
        technologies: ['Java', 'Gradle', 'PaperMC', 'Bukkit'],
        href: 'https://github.com/Derec-Mods/Excavator-Enchant',
        period: 'TBD',
    },
    {
        id: 'guests',
        title: 'Guests',
        description: `In response to organized griefing waves in 2025, developed a lightweight Bukkit plugin for public Minecraft servers that automatically places unverified players into a restricted guest state, allowing communities to keep servers open while protecting builds and gameplay. Implemented configurable permissions for spectator mode, chat restrictions, and block interaction to streamline onboarding without relying on a permanent whitelist.`,
        image: '/images/projects/guests.png',
        technologies: ['Java', 'Gradle', 'Bukkit', 'PaperMC'],
        href: 'https://github.com/Derec-Mods/Guests',
        period: 'TBD',
    },
];
