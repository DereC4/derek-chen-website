export type PersonalProject = {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
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
        shortDescription: `Open source Chrome extension with 50,000+ users that streamlines UT Austin course registration.
Integrates professor ratings, grade distributions, and schedule planning into official university pages.`,
        image: '/images/projects/ut-registration-plus.png',
        technologies: ['TypeScript', 'React', 'CSS', 'SCSS', 'SQL', 'Vite', 'TailwindCSS', 'Figma'],
        href: '/projects/ut-registration-plus',
        period: 'Present – Present',
        // period: 'Dec 2023 – Present',
    },
    {
        id: 'minecraft-moddev',
        title: 'Mod/Plugin Dev',
        description: `Coded plugins, game modifications, and custom tools for Minecraft server networks and content creators, reaching over 17 million users and driving over 6.4 billion YouTube views. Developed a modular Minecraft server plugin enabling players to create, manage, and compete as in-game factions, with features like territory claiming, custom enemy AI, and resource management. Designed and implemented a backend architecture, including asynchronous operations, write-behind caching, and a robust SQL database layer, ensuring thread-safe player data management in a single-threaded server environment.`,
        shortDescription: `Minecraft plugins reaching 17M+ users with 6.4B+ YouTube views across server networks.
Built faction system with advanced backend architecture handling asynchronous operations and SQL database management.`,
        image: '/images/projects/minecraft-moddev.png',
        technologies: ['Java', 'Gradle', 'Maven', 'SQL', 'APIs'],
        href: '/projects/minecraft-moddev',
        period: 'June 2020 – Present',
    },
    {
        id: 'cobbleguard',
        title: 'Cobbleguard',
        description: `Addressed the widespread issue of unsecured online game servers by building an educational warning network, supported by an asynchronous Rust scanner that discovers, parses, and catalogs over 3.4 million server IPs into a PostgreSQL database. Deployed an automated agent on Oracle Cloud built in TypeScript with Mineflayer API, that connects to vulnerable servers, delivering educational security warnings to over 1 million users and handling queries with a responsive chat module.`,
        shortDescription: `Security warning network scanning 3.4M+ server IPs using Rust backend and PostgreSQL database.
Automated agents deliver educational warnings to 1M+ players on vulnerable game servers.`,
        image: '/images/projects/cobble-guard.png',
        technologies: ['TypeScript', 'Python', 'Rust', 'PostgreSQL', 'discord.py'],
        href: '/projects/cobble-guard',
        period: 'Dec 2024 – Sep 2025',
    },
    {
        id: 'findmyorg',
        title: 'FindMyOrg',
        description: `Created a web application to streamline and personalize university student organization recruiting and searching, aimed towards incoming students rendered with React and deployed on Netlify. Boosted organization credibility with the implementation of a verified user review system. Worked Full Stack: Fetched data, reviews, and images on student organizations from a MongoDB database and designed and programmed a responsive and interactive front-end UI with React and JSX.`,
        shortDescription: `Web app helping incoming students discover and join university organizations with verified reviews.
Full-stack React frontend and MongoDB backend serving personalized organization recommendations.`,
        image: '/images/projects/findmyorg.png',
        technologies: ['JavaScript', 'React', 'Vite', 'MongoDB'],
        href: '/projects/findmyorg',
        period: 'July 2023 – Nov 2023',
    },
    {
        id: 'ut-distribution-viewer',
        title: 'UT Austin Distribution Viewer',
        description: `Developed a user-friendly website with HTML/CSS to replace outdated tools, offering intuitive visualizations of course grade distributions at UT Austin with back-end infrastructure hosted with Express.js framework and SQL. Assisted 6,100+ distinct students during registration periods in the initial 12 month period.`,
        shortDescription: `Interactive visualization tool replacing outdated grade distribution lookup at UT Austin.
Served 6,100+ students quarterly with Express.js backend and SQL database integration.`,
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
        shortDescription: `First open source contribution adding East Asian language support to music player with Romanization.
Fixed memory leaks and improved stability for long-session usage across diverse user environments.`,
        image: '/images/projects/pear-desktop.png',
        technologies: ['TypeScript', 'Electron', 'CSS', 'HTML', 'JavaScript'],
        href: 'https://github.com/pear-devs/pear-desktop',
        period: 'Feb 2023 – Jul 2023',
    },
    {
        id: 'slork-wars',
        title: 'SLORK Wars Episode II: Attack of the Violas',
        description: `And now for something completely different! I started this as a year-long graduation project to keep senioritis from winning, and it grew into a 30-minute Star Wars fan film made with my friends from the Seven Lakes High School orchestras! We recruited over 100 student and mixed live action with 3D animation built in Unreal Engine (C++) and Blender, packing it with lightsaber duels, anime-styled fight scenes, space battles, and orchestra inside jokes. The final film now has 50,000+ views on YouTube. Heavily inspired by Rogue One and Revenge of the Sith, it was a great way to help our community find its rhythm again post-COVID lockdown by collaborating on something ambitious, creative, and honestly hilarious.`,
        shortDescription: `Epic short film produced with 200+ orchestra students garnering 50,000+ YouTube views.
Created with Unreal Engine and Blender, `,
        image: '/pics/projects/slork-wars-1.png',
        technologies: [
            'Star Wars',
            'Orchestra',
            'Blender',
            'Premiere Pro',
            'After Effects',
            'Audacity',
            'Motion Tracking',
        ],
        href: 'https://www.youtube.com/watch?v=vKaddjF631c',
        period: 'Aug 2021 – May 2022',
    },
    {
        id: 'apod-space-data',
        title: 'NASA APOD Viewer',
        description: `Built as a submission for the AP CS Principles exam (2022), this Python-based desktop UI displays NASA's Astronomy Picture of the Day (APOD). Integrated the APOD API to fetch daily image data, then rendered photos and metadata through PIL and tkinter. Project  oversaw by Felicia Castillo.`,
        shortDescription: `Python desktop app displaying NASA's Astronomy Picture of the Day with real-time API integration.
Built for AP CS Principles exam using tkinter GUI and PIL image rendering.`,
        image: '/images/projects/apod-space-data.png',
        technologies: ['Python', 'tkinter', 'PIL', 'REST API'],
        href: 'https://github.com/DereC4/APOD-Space-data',
        period: 'Apr 2022 – Apr 2022',
    },
    {
        id: 'creepercatcher',
        title: 'Creeper Catcher',
        description: `A 2D pygame retro game where the Geometry Dash (a game popular at the time in school) protagonist catches creepers (also from a game, likewise popular). Designed gameplay loops, scoring flow, and core game logic as part of a focused short-cycle class submission. Has timer-based enemy spawning, collision detection for scoring, and scrolling background layers for motion. Built for Computer Science Independent Study under Ryan Nutt, `,
        shortDescription: `2D pygame retro game combining Geometry Dash and Minecraft with collision detection scoring.
Featured timer-based spawning, scrolling backgrounds, and core game logic design.`,
        image: '/images/projects/creepercatcher.png',
        technologies: ['Python', 'Game Development', 'pygame'],
        href: 'https://github.com/DereC4/creepercatcher',
        period: 'Nov 2021 – Dec 2021',
    },
    {
        id: 'stroudonian-uno',
        title: 'Stroudonian UNO',
        description: `A school UNO recreation with two Java versions: a mostly finished text-based implementation and a GUI build that is around 70% complete. Implemented the core game engine with classes like Board, Deck, Player, and Card for turn flow, draw/discard management, and action-card rules (+2, reverse, skip, wild, +4), then connected gameplay to a Swing-based Graphic UI runner.`,
        shortDescription: `Java UNO card game with text-based and Swing GUI implementations with complete game rules.
Implemented game engine with turn management, draw/discard logic, and action card handling.`,
        image: '/images/projects/stroudonian-uno.png',
        technologies: ['Java', 'Swing', 'Game Development', 'Data Structures', 'Object Oriented Programming'],
        href: 'https://github.com/DereC4/stroudonianuno',
        period: 'August 2019 - October 2019',
    },
    {
        id: 'earth-mobs',
        title: 'Earth Mobs',
        description: `Grew player base of over 300,000 by developing a Forge API-powered modification that introduced new content and enhancements to a critically acclaimed video game. Programmed in-game entities interacting with users in the game environment and pathfinding around the world. Maintained long term support by established bug tracking mediums on GitHub for clients to report issues and suggestions, creating a community of 300+ active users.`,
        shortDescription: `Minecraft Forge mod expanding game content with 300K+ player downloads and 300+ GitHub community.
Developed AI pathfinding, entity interactions, and long-term community support infrastructure.`,
        image: '/images/projects/earth-mobs.png',
        technologies: ['Java', 'Gradle', 'Forge API'],
        href: '/projects/earth-mobs',
        period: 'June 2020 – Apr 2024',
    },
    {
        id: 'elytra-vaults',
        title: 'Elytra Vaults',
        description: `Built a Minecraft Java datapack and Paper plugin that replaces standard End Ship elytra spawns with per-player vault rewards, so survival servers can give each player fair access to an elytra without one-time loot depletion. Designed the system for multiplayer survival worlds with compatibility for generated structures and a smoother progression loop.`,
        shortDescription: `Minecraft datapack and Paper plugin providing per-player elytra rewards on survival servers.
Developed for multiplayer progression with generated structure compatibility.`,
        image: '/images/projects/elytra-vaults.png',
        technologies: ['Java', 'Gradle', 'PaperMC', 'Bukkit', 'Datapack'],
        href: 'https://github.com/Derec-Mods/Elytra-Vaults',
        period: 'TBD',
    },
    {
        id: 'excavator-enchant',
        title: 'Excavator Enchant',
        description: `Created a Paper plugin that adds a custom pickaxe enchantment for mining 3x3x3 areas while respecting durability and enchant behavior, making large-scale excavation more practical on survival servers. Built it as a lightweight, vanilla-friendly alternative to bulk-mining datapacks and mods, with compatibility considerations for server logging plugins like CoreProtect.`,
        shortDescription: `Paper plugin adding 3x3x3 mining enchantment for lightweight excavation on survival servers.
Vanilla-friendly with CoreProtect logging compatibility and proper durability handling.`,
        image: '/images/projects/excavator-enchant.png',
        technologies: ['Java', 'Gradle', 'PaperMC', 'Bukkit'],
        href: 'https://github.com/Derec-Mods/Excavator-Enchant',
        period: 'TBD',
    },
    {
        id: 'guests',
        title: 'Guests',
        description: `In response to organized griefing waves in 2025, developed a lightweight Bukkit plugin for public Minecraft servers that automatically places unverified players into a restricted guest state, allowing communities to keep servers open while protecting builds and gameplay. Implemented configurable permissions for spectator mode, chat restrictions, and block interaction to streamline onboarding without relying on a permanent whitelist.`,
        shortDescription: `Bukkit plugin protecting public Minecraft servers by restricting unverified players with configurable guest permissions.
Allows communities to stay open while preventing griefing and protecting builds.`,
        image: '/images/projects/guests.png',
        technologies: ['Java', 'Gradle', 'Bukkit', 'PaperMC'],
        href: 'https://github.com/Derec-Mods/Guests',
        period: 'Oct 2025 - Jan 2026',
    },
    {
        id: 'trove',
        title: 'Trove: The Lost & Found App',
        description: `A virtual lost-and-found app for college campuses, inspired by the $70 dorm key replacement costs at UT Austin. In a 24-hour HackTX 2022 sprint, worked with a team of three to design in Figma and develop a React Native frontend with a Java Spring Boot + MongoDB backend. Delivered a fully functional, polished app that won Best Overall Beginner Hack out of 75 teams. Despite being new to React Native and working under tight time constraints, my team delivered a fully functional, aesthetically polished app that won Best Overall Beginner Hack Award out of 75 teams.`,
        shortDescription: `Cross-platform lost-and-found mobile app built in 24 hours winning Best Overall Beginner Hack at HackTX 2022.
Full-stack React Native frontend with Java Spring Boot API and MongoDB managing lost item reports.`,
        image: '/images/projects/trove.png',
        technologies: ['React Native', 'JavaScript', 'Java', 'MongoDB', 'Spring Boot', 'Figma'],
        href: 'https://devpost.com/software/found-b1p3x7',
        period: 'Oct 2022 – Oct 2022',
    },
    {
        id: 'accountech',
        title: 'AccounTech',
        description: `AccounTech is a GPT-4 powered virtual accountant for credit/debit cardholders to assist with personal finances. It uses a reactive feedback system that gives immediate feedback on each transaction. Built in 24 hours with three teammates for HackTX 2023 (Hosted by Freetail Hackers). Demo: https://www.youtube.com/watch?v=NWfa8gtDus8`,
        shortDescription: `GPT-4 powered virtual accountant providing real-time financial feedback on transactions.
Built in 24 hours with React frontend and Google Cloud Platform integration for HackTX 2023.`,
        image: '/images/projects/accountech.png',
        technologies: [
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'TailwindCSS',
            'Node.js',
            'GPT-4',
            'Google Cloud Platform',
            'Figma',
        ],
        href: 'https://devpost.com/software/accoun-tech',
        period: 'Oct 2023 – Oct 2023',
    },
];
