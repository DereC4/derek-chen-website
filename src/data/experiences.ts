export type Experience = {
    id: string;
    title: string;
    company: string;
    companyLink: string;
    period: string;
    location: string;
    shortDescription: string;
    description: string[];
    positions: ExperiencePosition[];
    skills?: string[];
};

export type ExperiencePosition = {
    title: string;
    period: string;
    shortDescription?: string;
};

type ExperienceWithoutId = Omit<Experience, 'id'>;

const createExperienceId = (company: string): string => {
    const normalizedCompany = company
        .trim()
        .replace(/\s+/g, '')
        .replace(/[^a-zA-Z0-9]/g, '');
    return `${normalizedCompany}-1`;
};

const experiencesData: ExperienceWithoutId[] = [
    {
        title: 'Software Engineer Intern - Login Management Team',
        company: 'Charles Schwab',
        companyLink: 'https://www.schwab.com/',
        period: 'June 2025 – August 2025',
        location: 'Austin, Texas',
        positions: [
            {
                title: 'Software Engineer Intern - Login Management Team',
                period: 'June 2025 – August 2025',
                shortDescription:
                    'Developed a BigQuery-powered authentication analytics tool to trace login flows across a 72-TB production database. Built GCP dashboards processing 100+ GB daily logs and reduced mean time to resolution by 30%.',
            },
        ],
        shortDescription:
            'Developed a BigQuery-powered authentication analytics tool to trace login flows across a 72-TB production database. Built GCP dashboards processing 100+ GB daily logs and reduced mean time to resolution by 30%.',
        description: [
            'Developed a BigQuery-powered authentication analytics tool querying a GCP-hosted 72-TB production login database, enabling investigators to trace login flows by session ID, customer ID, or device ID.',
            'Built a GCP-BigQuery dashboard to process 100+ GB of daily log data (5.7M+ API requests), improving error and analytics tracking and reducing mean time to resolution by 30%.',
            'Performed automated release validation using GitHub Actions (Python, YAML) to compare manifests and application configuration files between production releases, ensuring release integrity and detecting configuration drift/unexpected changes.',
            'Created Grafana dashboards to monitor device recognition, mobile authentication, and fraud detection across millions of multiplatform Charles Schwab client events handling over $10 trillion in client assets.',
        ],
    },
    {
        title: 'Software Engineer Intern - Core Platforms Team',
        company: 'AT&T',
        companyLink: 'https://www.att.com/',
        period: 'June 2024 – August 2024',
        location: 'Dallas, Texas',
        positions: [
            {
                title: 'Software Engineer Intern - Core Platforms Team',
                period: 'June 2024 – August 2024',
                shortDescription:
                    'Resolved backend bottlenecks in the TOM platform, cutting Spring Boot load times by 30%+. Developed AT&T Language Assist, a multilingual communication tool using AI for live call translation, projected to save $162M+ annually.',
            },
        ],
        shortDescription:
            'Resolved backend bottlenecks in the TOM platform, cutting Spring Boot load times by 30%+. Developed AT&T Language Assist, a multilingual communication tool using AI for live call translation, projected to save $162M+ annually.',
        description: [
            'Resolved backend bottlenecks in the TOM platform (60k+ users) by refactoring technical debt and optimizing query patterns, cutting Spring Boot backend load times by 30%+.',
            'Integrated backend server maintenance status with UI by developing a real-time alert system using Angular UI components and Spring Boot, proactively notifying users of downtime through live database-driven warnings.',
            'Designed and developed AT&T Language Assist, a multilingual communication tool leveraging OpenAI Whisper and FastAPI to enable live call translation and automatic language detection for AT&T call centers; projected to save $162M+ per year by reducing call wait times and interpreter costs. Pitched MVP to CTO Jeremy Legg after winning 1st place out of 24 teams in the Intern Innovation Challenge.',
        ],
    },
    {
        title: 'Senior Software Engineer',
        company: 'Longhorn Developers',
        companyLink: 'https://github.com/Longhorn-Developers',
        period: 'December 2023 – Present',
        location: 'Austin, Texas',
        positions: [
            {
                title: 'Senior Software Engineer',
                period: 'December 2023 – Present',
                shortDescription:
                    'Leading development of UT Registration Plus, a university course management tool used by 60,000+ students at UT Austin.',
            },
        ],
        shortDescription:
            'Leading development of UT Registration Plus, a university course management tool used by 60,000+ students at UT Austin.',
        description: [
            'Promoted from Software Engineer (Nov 2023 – Oct 2024) to Senior Software Engineer (Oct 2024 – Present) on the UT Registration Plus team.',
            'Developing UT Registration Plus, a university course management tool used by 60,000+ students at UT Austin.',
            'Contributed across TypeScript and SQL-driven product features to improve usability and reliability.',
        ],
    },
    {
        title: 'Embedded Software Engineer Intern',
        company: 'CYL-Tek',
        companyLink: 'https://www.cyl-tek.com/',
        period: 'May 2023 – July 2023',
        location: 'Hsinchu, Taiwan',
        positions: [
            {
                title: 'Embedded Software Engineer Intern',
                period: 'May 2023 – July 2023',
                shortDescription:
                    'Engineered a cross-platform AES-256 encryption module to securely transfer data between STM32-based smart medical IoT devices. Debugged and resolved critical synchronization issues in the IoT device pairing tool.',
            },
        ],
        shortDescription:
            'Engineered a cross-platform AES-256 encryption module to securely transfer data between STM32-based smart medical IoT devices. Debugged and resolved critical synchronization issues in the IoT device pairing tool.',
        description: [
            'Engineered a cross-platform AES-256 encryption and decryption module (C, Python) to securely transfer sensitive data between STM32-based smart medical IoT devices, enhancing system-level data protection and HIPAA/PDPA compliance.',
            'Debugged and resolved a critical synchronization issue in the IoT device pairing tool (Python), increasing reliability across all deployed units.',
        ],
    },
    {
        title: 'Communications Chair',
        company: 'Seven Lakes Orchestras',
        companyLink: '', // Add the website link if available
        period: 'May 2021 – August 2022',
        location: 'Katy, Texas',
        positions: [
            {
                title: 'Communications Chair',
                period: 'May 2021 – August 2022',
                shortDescription:
                    'Modernized the orchestra website by replacing legacy jQuery with modern frameworks, improving SEO ranking by 40%+. Led a 19-member team coordinating projects and raised audience turnout to 600+ with a promotional film.',
            },
            {
                title: 'Librarian',
                period: 'May 2020 – May 2021',
                shortDescription:
                    'Managed orchestra sheet music organization and distribution logistics to keep rehearsals and performances running smoothly.',
            },
        ],
        shortDescription:
            'Modernized the orchestra website by replacing legacy jQuery with modern frameworks, improving SEO ranking by 40%+. Led a 19-member team coordinating projects and raised audience turnout to 600+ with a promotional film.',
        description: [
            'Modernized orchestra website by replacing legacy jQuery with modern frameworks, enhancing performance, implementing HTTPS, and improving SEO ranking with 40%+ increase in site traffic.',
            'Served as the liaison between directors and a 19-member team, coordinating projects and delegating tasks across branches.',
            'Coordinated the production of a thrilling storyline as a promotional strategy, raising audience turnout to 600+ members and culminating in a climatic animated film.',
            'Overhauled the main website by replacing outdated technologies with modern tools, optimizing performance with efficient database connections and security through HTTPS implementation, resulting in increased viewership and credibility.',
            'Orchestrated a team of 4 to ensure seamless website maintenance and effective management of virtual communication channels for orchestra members and audiences.',
            'Lead the promotion and production of a thrilling storyline as a promotional strategy, raising our audience turnout to 600+ and culminating in a climatic film.',
        ],
        skills: [
            'Front-End Development',
            'HTML',
            'Internal and External Communications',
            'Project Management',
            'JavaScript',
            'Web Development',
            'CSS',
        ],
    },
    {
        title: 'Application Developer Intern',
        company: 'STEM-E',
        companyLink: '', // Add the website link if available
        period: 'June 2021 – October 2021',
        location: 'Houston, Texas',
        positions: [
            {
                title: 'Application Developer Intern',
                period: 'June 2021 – October 2021',
                shortDescription:
                    'Designed UI implementations for a mobile map application using React Native and Google Maps API to locate STEM-related educational events. Collaborated with 10 developers on a full-stack application and moderated 10+ communication channels.',
            },
        ],
        shortDescription:
            'Designed UI implementations for a mobile map application using React Native and Google Maps API to locate STEM-related educational events. Collaborated with 10 developers on a full-stack application and moderated 10+ communication channels.',
        description: [
            'As part of the front end team, designed UI implementations of a mobile map application for the locating of STEM related educational events.',
            'Collaborated with a team of 10 developers to create a full-stack map-based application for tracking STEM-related events using React Native and the Google Maps API.',
            'Crafted intuitive user interfaces in Figma, ensuring a seamless user experience.',
            'Contributed to the development of the virtual STEM-E community, enhancing communication and engagement.',
            'Moderated over 10 communication channels, resolving conflicts and facilitating collaboration among branch members.',
            'Led the initial planning and development stages of a game app with a separate team, leveraging Node.js to bring the concept to life.',
        ],
        skills: ['Node.js', 'Figma', 'Front-End Development', 'JavaScript', 'React Native'],
    },
];

export const experiences: Experience[] = experiencesData.map(experience => ({
    ...experience,
    id: createExperienceId(experience.company),
}));
