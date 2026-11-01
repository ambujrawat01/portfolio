export const assistantKnowledgeBase = [
  {
    id: 'skills-backend',
    category: 'Technical Skills',
    question: 'What backend technologies does Ambuj specialize in?',
    keywords: ['backend', 'spring', 'java', 'framework', 'server', 'apis', 'database'],
    answer:
      'Ambuj specializes in enterprise Java backend development, primarily using Spring Boot (Java 17/21), Spring Web for RESTful APIs, Spring Data JPA with Hibernate for ORM persistence, and relational databases (PostgreSQL and MySQL). He emphasizes clean architecture, DTO patterns, transaction boundaries (@Transactional), and custom exception interceptors.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API']
  },
  {
    id: 'raktdonor-arch',
    category: 'RaktDonor Architecture',
    question: 'How is RaktDonor architected end-to-end?',
    keywords: ['raktdonor', 'architecture', 'blood', 'system', 'layers', 'design'],
    answer:
      'RaktDonor follows a decoupled 5-tier architecture:\n1. React Frontend (interactive Leaflet maps, dynamic radius filter slider, and accessible forms)\n2. REST API contract layer (strongly-typed JSON DTOs and JSR-380 validation)\n3. Spring Boot Backend (coordinates business logic, ABO/Rh compatibility rules, and optimistic locking)\n4. Spring Data JPA / Hibernate (executes native SQL Haversine queries and manages connection pooling)\n5. PostgreSQL Database (stores indexed spatial coordinates and enforces relational ACID constraints).',
    tags: ['Architecture', 'RaktDonor', 'Spring Boot', 'Leaflet', 'PostgreSQL']
  },
  {
    id: 'raktdonor-spatial',
    category: 'RaktDonor Architecture',
    question: 'How does geospatial donor discovery work in RaktDonor?',
    keywords: ['geospatial', 'distance', 'haversine', 'radius', 'map', 'query', 'gps', 'latitude'],
    answer:
      'Instead of bringing heavy GIS plugins, RaktDonor implements the mathematical Haversine spherical formula directly within native PostgreSQL queries. It computes spherical distances between the patient coordinates and active donor coordinates within a user-configurable radius (5km to 50km). Indexed B-Tree columns on (latitude, longitude, blood_group) ensure fast query times under sub-100ms.',
    tags: ['PostgreSQL', 'Haversine', 'Geospatial', 'Optimization']
  },
  {
    id: 'projects-list',
    category: 'Projects',
    question: 'What other software projects has Ambuj built?',
    keywords: ['projects', 'portfolio', 'resume analyzer', 'crop advisory', 'finai', 'built'],
    answer:
      'Beyond RaktDonor, Ambuj has built:\n• AI Resume Analyzer: Parses PDF/DOCX resumes, extracts technical competencies, and computes match percentages against job descriptions using Python and NLP.\n• AI Crop Advisory System: AgriTech prototype predicting crop suitability from soil NPK, pH, and climatic factors.\n• FinAI — Personal Finance Analyzer: Full-stack expense telemetry dashboard with categorical breakdown charts and budget alerts.',
    tags: ['RaktDonor', 'AI Resume', 'AgriTech', 'FinAI']
  },
  {
    id: 'education-timeline',
    category: 'Education & Journey',
    question: 'What is Ambuj’s educational background and timeline?',
    keywords: ['education', 'degree', 'college', 'btech', 'diploma', 'journey', 'timeline'],
    answer:
      'Ambuj’s verified academic progression:\n• 2026–Present: Pursuing Bachelor of Technology (B.Tech) in Computer Science & Engineering at G.L. Bajaj Institute of Technology & Management.\n• 2024: Completed Diploma in Engineering with technical grounding in procedural programming, algorithms, and computing fundamentals.\n• Ongoing: Active project development and software engineering craftsmanship.',
    tags: ['B.Tech CSE', 'Diploma 2024', 'G.L. Bajaj']
  },
  {
    id: 'resume-info',
    category: 'Resume Information',
    question: 'Can I download or view Ambuj’s resume?',
    keywords: ['resume', 'cv', 'pdf', 'download', 'hire', 'contact', 'ats'],
    answer:
      'Yes! You can preview Ambuj’s formatted resume on-screen through the interactive modal or download the verified ATS-compatible PDF directly by clicking the "Download Resume" buttons located in the navigation bar, hero section, and dedicated resume showcase.',
    tags: ['Resume PDF', 'ATS-Compatible', 'Verified']
  },
  {
    id: 'concurrency-control',
    category: 'RaktDonor Architecture',
    question: 'How does RaktDonor prevent race conditions when multiple people request the same donor?',
    keywords: ['concurrency', 'race condition', 'lock', 'transaction', 'safety', 'claims'],
    answer:
      'RaktDonor utilizes Spring’s transaction isolation boundaries (@Transactional) combined with optimistic locking on donation request records. When a donor accepts or a coordinator claims a request, version checking ensures conflicting simultaneous updates fail gracefully without double-committing donor availability.',
    tags: ['Concurrency', '@Transactional', 'Optimistic Locking']
  },
  {
    id: 'contact-channels',
    category: 'Contact',
    question: 'How can recruiters or engineering managers contact Ambuj?',
    keywords: ['contact', 'email', 'linkedin', 'github', 'reach', 'message'],
    answer:
      'Ambuj can be reached directly via:\n• Email: ambujr001@gmail.com (with one-click clipboard copy on the contact section)\n• LinkedIn: https://www.linkedin.com/in/ambuj-rawat-5372bb2a3/\n• GitHub: github.com/ambujrawat\n• Location: Greater Noida / Delhi NCR, India (Available for Remote and On-Site roles).',
    tags: ['Email', 'LinkedIn', 'GitHub', 'Delhi NCR']
  }
];

export const quickSuggestedQueries = [
  'What backend technologies does Ambuj specialize in?',
  'How is RaktDonor architected end-to-end?',
  'How does geospatial donor discovery work in RaktDonor?',
  'What other software projects has Ambuj built?',
  'What is Ambuj’s educational background and timeline?',
  'Can I download or view Ambuj’s resume?'
];
