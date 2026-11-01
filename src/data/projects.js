export const featuredProject = {
  id: 'raktdonor',
  name: 'RaktDonor',
  tagline: 'Emergency Blood Response Platform',
  badge: 'Featured Full-Stack Project',
  image: '/images/raktdonor-showcase.jpg',
  description:
    'A full-stack blood donation management platform designed to connect patients, donors, hospitals, and blood banks through blood-group matching, location-aware donor discovery, and blood request management.',
  technologies: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'REST APIs', 'Leaflet'],
  stats: [
    { label: 'Architecture', value: 'Decoupled SPA + REST' },
    { label: 'Location Search', value: 'Radius-Aware Geospatial' },
    { label: 'Security', value: 'Role-Based Access' },
    { label: 'Data Integrity', value: 'ACID PostgreSQL' }
  ],
  keyFeatures: [
    {
      title: 'Donor Registration & Profile',
      desc: 'Structured onboarding capturing blood group, contact verification, medical eligibility, and geolocation coordinates.'
    },
    {
      title: 'Blood Request Creation & Tracking',
      desc: 'Real-time emergency requests with urgency levels (Critical, High, Normal) and live lifecycle status tracking.'
    },
    {
      title: 'Blood-Group-Based Matching',
      desc: 'Compatible recipient-to-donor matrix mapping based on Rh factor and biological compatibility rules.'
    },
    {
      title: 'Nearby Donor Discovery',
      desc: 'Configurable radius filter (5km - 50km) computing distance vectors using spatial formulas.'
    },
    {
      title: 'Location-Based Search & Map',
      desc: 'Interactive Leaflet map visualization pinning available blood banks, verified donors, and emergency hubs.'
    },
    {
      title: 'Donor Availability Management',
      desc: 'Toggleable availability status with cooldown timers following completed donations to prevent premature outreach.'
    },
    {
      title: 'Donation History & Admin Workflows',
      desc: 'Centralized administrative verification logs, donation audits, and hospital coordination pipelines.'
    }
  ],
  links: {
    github: 'https://github.com/ambujrawat/raktdonor',
    demo: '#',
    hasRealDemo: false
  },
  caseStudy: {
    problem:
      'In medical crises, the difference between minutes can be vital. Conventional blood requisition relies on disjointed phone trees, outdated paper rosters, and social media blasts. This causes dangerous delays, non-compatible responses, and donor fatigue.',
    solution:
      'RaktDonor establishes an automated, location-aware response network. By pairing a responsive React frontend with a high-throughput Spring Boot backend and PostgreSQL spatial query layer, the system automates donor discovery, matches compatible groups instantly, and notifies eligible nearby volunteers without broadcasting personal phone numbers publicly.',
    architecture: {
      client: 'React.js SPA with stateful Leaflet map layers, responsive forms, and modular CSS design system',
      server: 'Spring Boot (Java 17/21) RESTful microservice layer with validation interceptors and global exception handlers',
      persistence: 'PostgreSQL with JPA/Hibernate repositories, indexed geospatial coordinates, and relational constraints',
      security: 'Stateless JWT session authentication with role separation (Donor, Patient/Requester, Hospital Admin)'
    },
    technicalChallenges: [
      {
        challenge: 'Geospatial Radius Queries Without Heavy GIS Overhead',
        solution:
          'Utilized the mathematical Haversine formula directly within PostgreSQL custom queries to calculate spherical distances between recipient coordinates and active donor latitude/longitude points, indexed for sub-millisecond retrieval.'
      },
      {
        challenge: 'Real-Time Availability & Race Conditions',
        solution:
          'Implemented Spring transaction boundaries (`@Transactional`) and optimistic locking on donation claims to prevent multiple simultaneous requests from locking the same donor volunteer.'
      },
      {
        challenge: 'Donor Privacy & Consent-Driven Contact Disclose',
        solution:
          'Engineered an intermediary request approval stage where donor private phone numbers remain masked until the donor explicitly accepts the emergency request notification.'
      }
    ],
    verifiedResults: [
      'Sub-100ms API response time across spatial search queries with mock indexed test sets.',
      'Comprehensive compatibility matrix accurately resolving all 8 common ABO/Rh blood permutations.',
      'Zero external styling dependencies for core map components, keeping frontend bundle size lean.'
    ]
  }
};

export const otherProjects = [
  {
    id: 'ai-resume-analyzer',
    name: 'AI Resume Analyzer',
    tagline: 'Intelligent Skill Extraction & Job Matching',
    type: 'Prototype & ML Integration',
    image: '/images/resume-analyzer.jpg',
    description:
      'A tool designed to analyze resumes, identify relevant skills, and provide job-matching insights using natural language parsing.',
    technologies: ['Python', 'NLP', 'React', 'REST API', 'Tailwind CSS'],
    highlights: [
      'Keyword parsing & skill extraction from PDF/DOCX',
      'Match percentage calculation against job descriptions',
      'Format and missing technical competency recommendations'
    ],
    links: {
      github: 'https://github.com/ambujrawat/ai-resume-analyzer',
      demo: '#',
      hasRealDemo: false
    }
  },
  {
    id: 'ai-crop-advisory',
    name: 'AI Crop Advisory System',
    tagline: 'Data-Driven Agronomic Guidance',
    type: 'AgriTech Prototype',
    image: '/images/crop-advisory.jpg',
    description:
      'An agricultural advisory application designed to help farmers access relevant crop information and recommendations based on environmental parameters.',
    technologies: ['Python', 'Machine Learning', 'Flask', 'React', 'Pandas'],
    highlights: [
      'Soil parameters (NPK, pH) & climatic factor inputs',
      'Crop suitability predictions based on trained models',
      'Bilingual regional guidance interface concept'
    ],
    links: {
      github: 'https://github.com/ambujrawat/ai-crop-advisory',
      demo: '#',
      hasRealDemo: false
    }
  },
  {
    id: 'finai-analyzer',
    name: 'FinAI — Personal Finance Analyzer',
    tagline: 'Expense Intelligence & Budget Modeling',
    type: 'Architecture Concept & Prototype',
    image: '/images/finai-preview.jpg',
    description:
      'A personal finance application concept for tracking expenses, reviewing spending patterns, and visualizing financial information with interactive telemetry.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Chart.js', 'REST API'],
    highlights: [
      'Categorized transaction breakdown with time-series charts',
      'Monthly budget threshold monitoring and alerts',
      'Relational schema design for recurring financial ledgers'
    ],
    links: {
      github: 'https://github.com/ambujrawat/finai-finance-analyzer',
      demo: '#',
      hasRealDemo: false
    }
  }
];

export const architectureLayers = [
  {
    id: 'frontend',
    title: 'React Frontend',
    subtitle: 'Client Application & Map UI',
    icon: 'layout',
    color: '#61DAFB',
    badge: 'Presentation Layer',
    responsibility: 'Renders the Single-Page Application interface, manages state for live donor filters, and handles Leaflet.js geospatial map visualization.',
    techStack: ['React 18', 'Leaflet.js', 'Vite', 'Modular CSS', 'Lucide Icons'],
    keyFunctions: [
      'Interactive radius filter slider (5km – 50km) computing dynamic bounding boxes',
      'Blood group compatibility matrix preview with instant visual feedback',
      'Asynchronous REST requests to backend endpoints with stateful error handling',
      'Responsive interface ensuring accessibility and touch support across all devices'
    ],
    sampleCode: `// Client-side spatial query dispatch
const fetchNearbyDonors = async (latitude, longitude, radiusKm, bloodGroup) => {
  const params = new URLSearchParams({ lat: latitude, lng: longitude, radius: radiusKm, bg: bloodGroup });
  const response = await fetch(\`/api/v1/donors/nearby?\${params.toString()}\`);
  if (!response.ok) throw new Error('Failed to retrieve nearby donors');
  return response.json();
};`
  },
  {
    id: 'rest-api',
    title: 'REST API',
    subtitle: 'HTTP Gateway & Contract Protocol',
    icon: 'send',
    color: '#E8C9A8',
    badge: 'API Contract Layer',
    responsibility: 'Establishes clear, strongly-typed JSON contracts between client and server, handling request validation, routing, and CORS policies.',
    techStack: ['RESTful Standards', 'JSON DTOs', 'Bean Validation (JSR-380)', 'HTTP Status Codes'],
    keyFunctions: [
      'Standardized endpoints: /api/v1/donors, /api/v1/requests, /api/v1/donations',
      'Strict input validation using @Valid, @NotNull, and custom regex annotations',
      'Clean separation between internal database entities and external transfer DTOs',
      'Uniform error response format with timestamps, status codes, and message vectors'
    ],
    sampleCode: `// REST Controller Contract in Spring Web
@RestController
@RequestMapping("/api/v1/donors")
@CrossOrigin(origins = "\${app.cors.allowed-origins}")
public class DonorController {
  
  @GetMapping("/nearby")
  public ResponseEntity<List<DonorResponseDTO>> getNearbyDonors(
      @RequestParam @NotNull Double lat,
      @RequestParam @NotNull Double lng,
      @RequestParam(defaultValue = "15.0") Double radius,
      @RequestParam String bg) {
    return ResponseEntity.ok(donorService.findNearbyDonors(lat, lng, radius, bg));
  }
}`
  },
  {
    id: 'spring-backend',
    title: 'Spring Boot Backend',
    subtitle: 'Core Enterprise Logic & Auth',
    icon: 'server',
    color: '#6DB33F',
    badge: 'Business Service Layer',
    responsibility: 'Executes core domain logic, coordinates transaction boundaries (@Transactional), enforces ABO/Rh biological compatibility rules, and handles security.',
    techStack: ['Spring Boot 3', 'Java 17/21', 'Spring Security', 'JWT Auth', 'Maven'],
    keyFunctions: [
      'Biological compatibility calculation (e.g. O- universal donor, AB+ universal recipient)',
      'Optimistic locking mechanisms to prevent race conditions during simultaneous claims',
      'Masking donor sensitive contact numbers until a mutual confirmation handshake',
      'Centralized GlobalExceptionHandler managing exceptions via @RestControllerAdvice'
    ],
    sampleCode: `// Domain Service Layer with Transaction Isolation
@Service
@Transactional(readOnly = true)
public class DonorService {

  @Transactional
  public DonationClaimResponse claimDonationRequest(Long requestId, Long donorId) {
    BloodRequest request = requestRepository.findByIdWithLock(requestId)
      .orElseThrow(() -> new ResourceNotFoundException("Request not found"));
    
    validateCompatibility(request.getBloodGroup(), donor.getBloodGroup());
    request.assignDonor(donorId);
    return new DonationClaimResponse("Claim dispatched successfully", request.getStatus());
  }
}`
  },
  {
    id: 'orm-jpa',
    title: 'Spring Data JPA / Hibernate',
    subtitle: 'Persistence & Spatial ORM Layer',
    icon: 'database',
    color: '#FFBD2E',
    badge: 'Data Access Layer',
    responsibility: 'Abstracts database communication through typed repository patterns, executes JPQL and native SQL queries, and optimizes connection pooling.',
    techStack: ['Spring Data JPA', 'Hibernate 6', 'HikariCP Connection Pool', 'JPQL'],
    keyFunctions: [
      'Typed JpaRepository interfaces eliminating boilerplate data access code',
      'Native SQL execution of spherical Haversine distance formulas',
      'Automated schema migration and database dialect mapping for PostgreSQL',
      'Second-level caching and lazy-loading strategies to avoid N+1 query traps'
    ],
    sampleCode: `// Native Geospatial Query with Haversine Formula
@Repository
public interface DonorRepository extends JpaRepository<Donor, Long> {

  @Query(value = """
    SELECT d.*, 
      (6371 * acos(cos(radians(:lat)) * cos(radians(d.latitude)) * 
      cos(radians(d.longitude) - radians(:lng)) + 
      sin(radians(:lat)) * sin(radians(d.latitude)))) AS distance_km
    FROM donors d
    WHERE d.is_available = true 
      AND d.blood_group = :bg
    HAVING distance_km <= :radius
    ORDER BY distance_km ASC
    """, nativeQuery = true)
  List<Donor> findDonorsWithinRadius(
    @Param("lat") Double lat, 
    @Param("lng") Double lng, 
    @Param("radius") Double radius, 
    @Param("bg") String bg
  );
}`
  },
  {
    id: 'database',
    title: 'PostgreSQL Database',
    subtitle: 'Relational ACID Storage & Indexing',
    icon: 'layers',
    color: '#336791',
    badge: 'Persistence Storage Layer',
    responsibility: 'Guarantees durability and ACID compliance for patient requests, stores indexed spatial coordinates, and enforces foreign key relational constraints.',
    techStack: ['PostgreSQL 15', 'B-Tree & GiST Indexing', 'ACID Transactions', 'SQL Constraints'],
    keyFunctions: [
      'Normalized 3NF relational schemas for Users, Donors, Requests, and Hospitals',
      'Composite B-Tree indexing on (latitude, longitude, blood_group, is_available)',
      'Foreign key constraints preventing orphan records and maintaining audit trails',
      'Safe concurrent transaction isolation levels protecting critical emergency states'
    ],
    sampleCode: `// Relational Schema & Spatial Indexing Definition
CREATE TABLE donors (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  blood_group VARCHAR(5) NOT NULL,
  latitude NUMERIC(9, 6) NOT NULL,
  longitude NUMERIC(9, 6) NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  last_donation_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Fast geospatial bounding box index
CREATE INDEX idx_donors_spatial ON donors(latitude, longitude, blood_group);`
  }
];

export const engineeringWorkflow = [
  {
    step: '01',
    title: 'Idea & Scoping',
    subtitle: 'Problem Discovery',
    description: 'Deconstruct real-world friction into concrete user journeys and system requirements.'
  },
  {
    step: '02',
    title: 'Architecture',
    subtitle: 'System Blueprint',
    description: 'Define service boundaries, data flows, stateless auth, and decoupling strategies.'
  },
  {
    step: '03',
    title: 'API Design',
    subtitle: 'Contract First',
    description: 'Design clean RESTful endpoints with consistent JSON schemas, DTOs, and status codes.'
  },
  {
    step: '04',
    title: 'Database',
    subtitle: 'Relational Modeling',
    description: 'Draft normalized 3NF schemas, foreign keys, constraints, and optimized index strategies.'
  },
  {
    step: '05',
    title: 'Frontend',
    subtitle: 'Component UI',
    description: 'Craft responsive, accessible React interfaces with modular state and resilient UX.'
  },
  {
    step: '06',
    title: 'Testing',
    subtitle: 'Validation & Quality',
    description: 'Test edge cases, API contract validation in Postman, error handling, and cross-browser responsiveness.'
  },
  {
    step: '07',
    title: 'Deployment',
    subtitle: 'CI/CD & Shipping',
    description: 'Bundle production artifacts, environment configuration, and cloud hosting readiness.'
  }
];

export const technicalCards = [
  {
    title: 'Backend Engineering',
    category: 'Server & Logic',
    icon: 'server',
    items: [
      'Spring Boot & Spring Framework architecture',
      'REST API design with robust validation & status codes',
      'JPA / Hibernate ORM with relational mapping',
      'Centralized error handling & exception interceptors'
    ]
  },
  {
    title: 'Database Architecture',
    category: 'Persistence & Integrity',
    icon: 'database',
    items: [
      'PostgreSQL & MySQL relational schema design',
      'Complex joins, subqueries, and spatial distance calculations',
      'Relational integrity, foreign keys, and cascading rules',
      'Index optimization for high-throughput query performance'
    ]
  },
  {
    title: 'Frontend Engineering',
    category: 'User Interface & State',
    icon: 'layout',
    items: [
      'Modular React functional components & custom hooks',
      'Fluid responsive layouts without framework bloat',
      'Seamless REST API integration & error boundaries',
      'Semantic HTML5, ARIA compliance, and keyboard navigation'
    ]
  }
];

export const journeyTimeline = [
  {
    period: '2026 – Present',
    title: 'B.Tech — Computer Science & Engineering',
    institution: 'G.L. Bajaj Institute of Technology & Management',
    status: 'In Progress',
    badge: 'Formal Higher Education',
    description:
      'Pursuing Bachelor of Technology in Computer Science & Engineering. Rigorous academic curriculum covering Data Structures & Algorithms, Object-Oriented Software Design in Java, Relational Database Management Systems, Operating Systems, and Distributed Computing paradigms.'
  },
  {
    period: '2024',
    title: 'Diploma Completed',
    institution: 'Technical Board of Education',
    status: 'Completed',
    badge: 'Foundational Engineering',
    description:
      'Successfully completed diploma studies with strong academic standing. Built fundamental proficiencies in procedural programming (C), systems logic, computing mathematics, relational database fundamentals, and practical software laboratory implementations.'
  },
  {
    period: 'Project Development',
    title: 'RaktDonor & Other Software Projects',
    institution: 'Full-Stack Software Architecture',
    status: 'Active Engineering',
    badge: 'Applied Engineering',
    description:
      'Architected and delivered RaktDonor (full-stack location-aware blood response network built with Spring Boot, PostgreSQL, and React), AI Resume Analyzer, Agronomic Decision Support System, and FinAI Financial Analyzer. Focused on decoupled service layers, spatial query optimization, and production-grade software craftsmanship.'
  }
];

