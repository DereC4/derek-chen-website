export const technologyColors: Record<string, string> = {
    // Frontend
    TypeScript: '#93c5fd',
    JavaScript: '#fde047',
    React: '#67e8f9',
    'Next.js': '#cbd5e1',
    NextJS: '#cbd5e1',
    'Vue.js': '#86efac',
    Angular: '#fda4af',
    Svelte: '#fdba74',
    TailwindCSS: '#7dd3fc',
    'Tailwind CSS': '#7dd3fc',
    CSS: '#60a5fa',
    HTML: '#fb923c',
    SCSS: '#f9a8d4',
    Sass: '#f9a8d4',

    // Backend
    'Node.js': '#86efac',
    Express: '#cbd5e1',
    Python: '#93c5fd',
    Django: '#6ee7b7',
    Flask: '#cbd5e1',
    FastAPI: '#5eead4',
    Java: '#fdba74',
    'Spring Boot': '#bef264',
    'C#': '#86efac',
    '.NET': '#a5b4fc',
    Go: '#67e8f9',
    Rust: '#cbd5e1',
    PHP: '#a5b4fc',

    // Databases
    MongoDB: '#86efac',
    PostgreSQL: '#93c5fd',
    MySQL: '#7dd3fc',
    Redis: '#fca5a5',
    SQLite: '#94a3b8',
    Firebase: '#fcd34d',
    Supabase: '#6ee7b7',

    // Cloud & DevOps
    AWS: '#fdba74',
    'Google Cloud': '#93c5fd',
    Azure: '#7dd3fc',
    Docker: '#60a5fa',
    Kubernetes: '#818cf8',
    Vercel: '#cbd5e1',
    Netlify: '#5eead4',
    Heroku: '#c4b5fd',

    // Tools & Services
    Git: '#fdba74',
    GitHub: '#94a3b8',
    GitLab: '#fb923c',
    Stripe: '#a5b4fc',
    UploadThing: '#fda4af',
    Mailgun: '#fca5a5',
    Upstash: '#6ee7b7',
    Prisma: '#94a3b8',
    GraphQL: '#f0abfc',
    'REST API': '#7dd3fc',
    tRPC: '#93c5fd',
    Figma: '#c4b5fd',

    // Mobile
    'React Native': '#67e8f9',
    Flutter: '#7dd3fc',
    Swift: '#fb923c',
    Kotlin: '#a5b4fc',

    // Testing
    Jest: '#fda4af',
    Cypress: '#94a3b8',
    Playwright: '#86efac',

    // Other
    APIs: '#f0abfc',

    default: '#93c5fd',
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
