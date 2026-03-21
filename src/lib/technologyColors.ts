export const technologyColors: Record<string, string> = {
    // Frontend
    TypeScript: '#b9d8f5',
    JavaScript: '#fff4b8',
    React: '#c8f3ff',
    'Next.js': '#d9dee7',
    NextJS: '#d9dee7',
    'Vue.js': '#c8efd9',
    Angular: '#f7c2cf',
    Svelte: '#ffd7c8',
    TailwindCSS: '#bfeff7',
    'Tailwind CSS': '#bfeff7',
    CSS: '#c7dff6',
    HTML: '#ffd5c6',
    SCSS: '#f3c9df',
    Sass: '#f3c9df',

    // Backend
    'Node.js': '#cdeccf',
    Express: '#e2e5ea',
    Python: '#c8dbef',
    Django: '#c9e1d8',
    Flask: '#e2e5ea',
    FastAPI: '#bde8df',
    Java: '#ffe1bf',
    'Spring Boot': '#d7efc9',
    'C#': '#cde9cc',
    '.NET': '#d8cdf8',
    Go: '#c0ebf7',
    Rust: '#dddfe5',
    PHP: '#d4d7ef',

    // Databases
    MongoDB: '#cce8cd',
    PostgreSQL: '#c8d8e8',
    MySQL: '#c9dcec',
    Redis: '#f7c8c4',
    SQLite: '#bfd7e5',
    Firebase: '#fff0b3',
    Supabase: '#c7f3de',

    // Cloud & DevOps
    AWS: '#ffe4bf',
    'Google Cloud': '#cdddfc',
    Azure: '#c5e2fa',
    Docker: '#cbe2fb',
    Kubernetes: '#c9d8fb',
    Vercel: '#e2e5ea',
    Netlify: '#c0f0ea',
    Heroku: '#d9ccf1',

    // Tools & Services
    Git: '#ffd2c8',
    GitHub: '#d6d8dd',
    GitLab: '#ffd8bf',
    Stripe: '#d5d2ff',
    UploadThing: '#ffd0d0',
    Mailgun: '#ffd5d5',
    Upstash: '#c9f9e6',
    Prisma: '#d1d9e5',
    GraphQL: '#f8c6ea',
    'REST API': '#c8f3ff',
    tRPC: '#c7e1f5',
    Figma: '#e2d2ff',

    // Mobile
    'React Native': '#c8f3ff',
    Flutter: '#c4def2',
    Swift: '#ffd9c8',
    Kotlin: '#e0d4ff',

    // Testing
    Jest: '#f4c6cc',
    Cypress: '#cfd7e2',
    Playwright: '#c6ebd9',

    // Other
    APIs: '#f0c4dc',

    default: '#d0dae6',
};

export const getTechnologyColor = (technology: string): string => {
    return technologyColors[technology] || technologyColors.default;
};

export const getTextColor = (hexColor: string) => {
    hexColor = hexColor.replace('#', '');

    // Convert hex to RGB
    const r = parseInt(hexColor.substring(0, 2), 16); // Red
    const g = parseInt(hexColor.substring(2, 4), 16); // Green
    const b = parseInt(hexColor.substring(4, 6), 16); // Blue

    // Calculate luminance
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 128 ? '#000000' : '#FFFFFF';
};
