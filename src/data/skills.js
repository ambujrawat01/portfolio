export const skillCategories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
];

export const skillsData = [
  // Languages
  {
    name: 'Java',
    category: 'languages',
    tag: 'Primary Language',
    description: 'Object-Oriented Programming, Multithreading, Streams, Collections',
    iconType: 'java',
    highlight: true,
  },
  {
    name: 'C',
    category: 'languages',
    tag: 'Systems & Logic',
    description: 'Data structures fundamentals, memory pointers, algorithms',
    iconType: 'c',
  },
  {
    name: 'Python',
    category: 'languages',
    tag: 'Scripting & ML',
    description: 'Automation, data parsing, AI/ML prototype integration',
    iconType: 'python',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    tag: 'Modern ES6+',
    description: 'Asynchronous programming, DOM manipulation, functional patterns',
    iconType: 'javascript',
    highlight: true,
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    tag: 'UI Library',
    description: 'Custom hooks, state management, component architecture, SPA design',
    iconType: 'react',
    highlight: true,
  },
  {
    name: 'HTML5',
    category: 'frontend',
    tag: 'Semantic Markup',
    description: 'Accessible semantic structures, SEO metadata, modern web standards',
    iconType: 'html5',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    tag: 'Styling & Motion',
    description: 'Flexbox, Grid, custom properties, responsive design, animations',
    iconType: 'css3',
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    tag: 'CSS Framework',
    description: 'Rapid prototyping, responsive grid systems, standard components',
    iconType: 'bootstrap',
  },
  {
    name: 'Vite',
    category: 'frontend',
    tag: 'Build Tooling',
    description: 'Lightning-fast HMR, modern bundling, optimized production builds',
    iconType: 'vite',
  },

  // Backend
  {
    name: 'Spring Boot',
    category: 'backend',
    tag: 'Core Framework',
    description: 'Enterprise backend services, dependency injection, auto-configuration',
    iconType: 'springboot',
    highlight: true,
  },
  {
    name: 'Spring Web',
    category: 'backend',
    tag: 'REST APIs',
    description: 'RESTful endpoints, request mappings, validation, exception handling',
    iconType: 'springweb',
    highlight: true,
  },
  {
    name: 'Spring Data JPA',
    category: 'backend',
    tag: 'Data Persistence',
    description: 'Repository patterns, JPQL queries, automated transaction management',
    iconType: 'springjpa',
  },
  {
    name: 'Hibernate',
    category: 'backend',
    tag: 'ORM Engine',
    description: 'Entity mapping, lazy loading, relational entity relationships',
    iconType: 'hibernate',
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'database',
    tag: 'Relational DB',
    description: 'Complex joins, indexing, spatial queries, ACID-compliant transactions',
    iconType: 'postgresql',
    highlight: true,
  },
  {
    name: 'MySQL',
    category: 'database',
    tag: 'Relational DB',
    description: 'Normalized database design, stored routines, relational constraints',
    iconType: 'mysql',
  },
  {
    name: 'MongoDB',
    category: 'database',
    tag: 'NoSQL Document Store',
    description: 'Schema-flexible documents, aggregation pipelines, JSON storage',
    iconType: 'mongodb',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    tag: 'Version Control',
    description: 'Branching workflows, commit conventions, merge conflict resolution',
    iconType: 'git',
    highlight: true,
  },
  {
    name: 'GitHub',
    category: 'tools',
    tag: 'Collaboration',
    description: 'Code repositories, issue tracking, pull requests, CI/CD basics',
    iconType: 'github',
  },
  {
    name: 'Postman',
    category: 'tools',
    tag: 'API Testing',
    description: 'Endpoint testing, request collections, mock servers, auth validation',
    iconType: 'postman',
  },
  {
    name: 'Maven',
    category: 'tools',
    tag: 'Build Management',
    description: 'Dependency resolution, lifecycle phases, project plugins, JAR packaging',
    iconType: 'maven',
  },
  {
    name: 'VS Code',
    category: 'tools',
    tag: 'Code Editor',
    description: 'Full-stack development environment, debugger, extension ecosystem',
    iconType: 'vscode',
  },
];
