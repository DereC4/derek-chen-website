export const technologyColors: Record<string, string> = {
  // Frontend
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'React': '#61dafb',
  'Next.js': '#000000',
  'NextJS': '#000000',
  'Vue.js': '#4fc08d',
  'Angular': '#dd0031',
  'Svelte': '#ff3e00',
  'TailwindCSS': '#06b6d4',
  'Tailwind CSS': '#06b6d4',
  'CSS': '#1572b6',
  'HTML': '#e34f26',
  'SCSS': '#cf649a',
  'Sass': '#cf649a',

  // Backend
  'Node.js': '#339933',
  'Express': '#000000',
  'Python': '#3776ab',
  'Django': '#092e20',
  'Flask': '#000000',
  'FastAPI': '#009688',
  'Java': '#ed8b00',
  'Spring Boot': '#6db33f',
  'C#': '#239120',
  '.NET': '#512bd4',
  'Go': '#00add8',
  'Rust': '#000000',
  'PHP': '#777bb4',

  // Databases
  'MongoDB': '#47a248',
  'PostgreSQL': '#336791',
  'MySQL': '#4479a1',
  'Redis': '#dc382d',
  'SQLite': '#003b57',
  'Firebase': '#ffca28',
  'Supabase': '#3ecf8e',

  // Cloud & DevOps
  'AWS': '#ff9900',
  'Google Cloud': '#4285f4',
  'Azure': '#0078d4',
  'Docker': '#2496ed',
  'Kubernetes': '#326ce5',
  'Vercel': '#000000',
  'Netlify': '#00c7b7',
  'Heroku': '#430098',

  // Tools & Services
  'Git': '#f05032',
  'GitHub': '#181717',
  'GitLab': '#fc6d26',
  'Stripe': '#635bff',
  'UploadThing': '#ff6b6b',
  'Mailgun': '#f56565',
  'Upstash': '#00e9a3',
  'Prisma': '#2d3748',
  'GraphQL': '#e10098',
  'REST API': '#61dafb',
  'tRPC': '#398ccb',

  // Mobile
  'React Native': '#61dafb',
  'Flutter': '#02569b',
  'Swift': '#fa7343',
  'Kotlin': '#7f52ff',

  // Testing
  'Jest': '#c21325',
  'Cypress': '#17202c',
  'Playwright': '#2eab6f',

  // Other
  'APIs': '#A82265',

  'default': '#64748b'
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
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  return luminance > 128 ? '#000000' : '#FFFFFF';
}