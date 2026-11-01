export const developerWorldData = {
  sectionTitle: 'Inside My Developer World',
  sectionSubtitle:
    'A transparent look into my technical toolkit, software engineering habits, core technologies, and active learning roadmap.',
  
  categories: [
    {
      id: 'languages',
      label: 'Languages I Use',
      description: 'Core programming languages leveraged for application development, system logic, and data processing.',
      items: [
        { name: 'Java (17 / 21)', role: 'Primary Enterprise Language', focus: 'Multithreading, OOP, Stream API, Collections', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', role: 'Modern Web Engineering', focus: 'Async/Await, DOM manipulation, functional patterns', level: 'Proficient' },
        { name: 'SQL (PostgreSQL / MySQL)', role: 'Relational Data Querying', focus: 'Spatial Haversine queries, indexing, joins, ACID', level: 'Proficient' },
        { name: 'Python', role: 'Scripting & AI Prototypes', focus: 'Data parsing, automation, ML prototype integration', level: 'Working Knowledge' },
        { name: 'C', role: 'Foundational Programming', focus: 'Memory pointers, algorithmic problem-solving', level: 'Foundational' }
      ]
    },
    {
      id: 'frameworks',
      label: 'Technologies & Frameworks',
      description: 'Production frameworks used to architect decoupled frontends and high-throughput server backends.',
      items: [
        { name: 'Spring Boot', role: 'Enterprise Backend', focus: 'REST microservices, Dependency Injection, Auto-configuration', tag: 'Core Backend' },
        { name: 'Spring Web & Security', role: 'API & Auth Layer', focus: 'Stateless JWT auth, request interceptors, validation', tag: 'Security' },
        { name: 'Spring Data JPA / Hibernate', role: 'ORM & Persistence', focus: 'Repository patterns, JPQL, relational entity mapping', tag: 'ORM' },
        { name: 'React.js', role: 'Frontend Architecture', focus: 'Custom hooks, stateful components, SPA lifecycle', tag: 'Core Frontend' },
        { name: 'PostgreSQL & Leaflet.js', role: 'Geospatial Stack', focus: 'Spherical distance calculation, interactive map overlays', tag: 'Geospatial' }
      ]
    },
    {
      id: 'tools',
      label: 'Development Tools',
      description: 'Daily workflow tooling for version control, contract verification, and build automation.',
      items: [
        { name: 'Git & GitHub', role: 'Version Control', detail: 'Branching strategies, semantic commits, PR review hygiene' },
        { name: 'Postman', role: 'API Verification', detail: 'REST endpoint testing, environment collections, auth headers' },
        { name: 'Apache Maven', role: 'Build Lifecycle', detail: 'Dependency management, packaging JAR artifacts, plugin config' },
        { name: 'VS Code & IntelliJ', role: 'IDE Environments', detail: 'Full-stack polyglot editing, Spring debugging, extensions' },
        { name: 'Vite', role: 'Frontend Tooling', detail: 'Hot Module Replacement (HMR), production minification, asset bundling' }
      ]
    },
    {
      id: 'learning',
      label: 'Current Learning Focus',
      description: 'Key areas of computer science and software architecture I am actively exploring and deepening.',
      items: [
        {
          topic: 'Distributed Systems & Event-Driven Architecture',
          description: 'Exploring message brokers (Kafka/RabbitMQ) for decoupled asynchronous event streaming between microservices.'
        },
        {
          topic: 'Spring Cloud & Microservice Resiliency',
          description: 'Studying service discovery (Eureka), API Gateway routing, and circuit breaker patterns with Resilience4j.'
        },
        {
          topic: 'Advanced Algorithms & System Design',
          description: 'Practicing complex graph algorithms, dynamic programming, and low-level system design patterns in Java.'
        }
      ]
    }
  ],

  profiles: {
    github: {
      username: 'ambujrawat',
      url: 'https://github.com/ambujrawat',
      label: 'GitHub Profile',
      highlights: 'Open-source repositories, full-stack architectures, code commits'
    },
    leetcode: {
      username: 'ambujrawat',
      url: 'https://leetcode.com/u/ambujrawat',
      label: 'LeetCode Profile',
      highlights: 'Algorithmic problem solving in Java, Data Structures practice'
    }
  }
};
