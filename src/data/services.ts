import { Service } from '@/types';

export const servicesData: Service[] = [
  // --- EDUCATION ---
  {
    slug: 'school-admission',
    category: 'education',
    categoryLabel: 'Education',
    title: 'School Admission Consultancy',
    shortDescription: 'Guidance on school selection, admission criteria, documentation, and enrollment procedures.',
    description: 'Our School Admission Consultancy assists parents and guardians in navigating educational environments. We provide structured guidance on curriculum options, board selections (CBSE, ICSE, State Boards), application schedules, and essential verification documents to ensure a smooth transition.',
    features: [
      'Personalized school profiling and curriculum guidance',
      'Documentation review and application submission assistance',
      'Timeline management for admission cycles',
      'Parent and student orientation for admission assessments',
    ],
    audience: 'Parents and guardians seeking the most suitable school environment for their children.',
    processSteps: [
      'Initial parent and student consultation',
      'Curriculum and institutional matching',
      'Document preparation and verification',
      'Application submission and admission confirmation',
    ],
    iconName: 'GraduationCap',
    badge: 'Education',
  },
  {
    slug: 'college-admission',
    category: 'education',
    categoryLabel: 'Education',
    title: 'College Admission Consultancy',
    shortDescription: 'Academic pathway evaluation, course selection, and college enrollment counseling.',
    description: 'Choosing the right undergraduate college sets the foundation for lifelong professional success. We assist higher secondary students in exploring colleges across engineering, management, arts, commerce, and science streams, aligning their academic aptitude with suitable degree options.',
    features: [
      'Stream and undergraduate course evaluation',
      'College comparison based on accreditation and academic reputation',
      'Entrance exam and merit-based application guidance',
      'Verification support for counseling and seat allotment procedures',
    ],
    audience: '10+2 students, diploma holders, and candidates seeking undergraduate degrees.',
    processSteps: [
      'Aptitude and academic record evaluation',
      'Course and college shortlist formulation',
      'Form fill-up and documentation verification',
      'Enrollment and seat confirmation assistance',
    ],
    iconName: 'Building2',
    badge: 'Education',
  },
  {
    slug: 'university-admission',
    category: 'education',
    categoryLabel: 'Education',
    title: 'University Admission Solutions',
    shortDescription: 'Structured guidance for postgraduate degrees, master programs, and university affiliations.',
    description: 'We guide candidates through advanced academic admissions, identifying recognized universities that match their career trajectory. Our team clarifies eligibility rules, entrance evaluation protocols, and credit transfer requirements for professional degree programs.',
    features: [
      'University profiling and degree program mapping',
      'Eligibility verification and prerequisites review',
      'Application submission and compliance checking',
      'Ongoing advisory throughout the enrollment semester',
    ],
    audience: 'Graduates, diploma holders, and professionals pursuing postgraduate or specialized degrees.',
    processSteps: [
      'Higher education goal assessment',
      'University and department identification',
      'Application package compilation and submission',
      'Final admission onboarding',
    ],
    iconName: 'BookOpen',
    badge: 'Education',
  },
  {
    slug: 'it-admission',
    category: 'education',
    categoryLabel: 'Education',
    title: 'IT Admission Solutions',
    shortDescription: 'Specialized counseling for technical degrees, computer applications, and IT programs.',
    description: 'Navigating the technology education sector requires specialized knowledge of curriculum relevance and industry needs. We assist students in securing admissions into reputable institutions offering BCA, MCA, B.Tech/BE (CS/IT), and specialized technology diplomas.',
    features: [
      'Specialized curriculum mapping for IT, Software, and Computing courses',
      'Evaluation of computing labs, faculty, and technical training facilities',
      'Prerequisite and entrance test advisory',
      'Alignment of academic programs with modern software career tracks',
    ],
    audience: 'Aspirants planning academic pursuits in computer science, software engineering, and information technology.',
    processSteps: [
      'Technical interest and skill profiling',
      'Curriculum and institution evaluation',
      'Admission processing and document submission',
      'Orientation on academic expectations and skill building',
    ],
    iconName: 'Laptop',
    badge: 'Education',
  },

  // --- CAREER ---
  {
    slug: 'career-counselling',
    category: 'career',
    categoryLabel: 'Career',
    title: 'Career Counselling',
    shortDescription: 'One-on-one professional guidance, aptitude assessment, and career path development.',
    description: 'Eminent Pathways provides individualized career counseling to help students and professionals understand their strengths, clarify aspirations, and make informed choices. We apply our structured 5-step approach to assess potential and design realistic, fulfilling career roadmaps.',
    features: [
      'One-on-one confidential counseling sessions',
      'Aptitude, interest, and personality alignment',
      'Industry trend orientation and future-proof career paths',
      'Actionable step-by-step career development plans',
    ],
    audience: 'High school students, college graduates, and working individuals seeking career transition or clarity.',
    processSteps: [
      'Understand: Comprehensive discovery session',
      'Explore: Identification of viable career tracks',
      'Guide: Strategic roadmap development',
      'Support & Achieve: Action tracking and continuous mentorship',
    ],
    iconName: 'Compass',
    badge: 'Career',
  },
  {
    slug: 'placement',
    category: 'career',
    categoryLabel: 'Career',
    title: 'Placement & Career Support',
    shortDescription: 'Recruitment training, interview coaching, profile building, and placement facilitation.',
    description: 'Bridging the gap between education and employment, our Placement & Career Support prepares candidates for professional interviews and connects them with job opportunities. We emphasize interview readiness, soft skills, resume standards, and professional etiquette.',
    features: [
      'Professional resume crafting and LinkedIn profile optimization',
      'Mock interviews with constructive evaluation and feedback',
      'Recruitment process orientation and HR screening preparation',
      'Placement assistance and job opportunity tracking',
    ],
    audience: 'Job seekers, recent graduates, and candidates participating in recruitment drives.',
    processSteps: [
      'Resume and profile diagnostic',
      'Interview coaching and communication preparation',
      'Technical and recruitment screening drills',
      'Placement connection and follow-through',
    ],
    iconName: 'Briefcase',
    badge: 'Career',
  },

  // --- BUSINESS ---
  {
    slug: 'management-solutions',
    category: 'business',
    categoryLabel: 'Business',
    title: 'Management Solutions',
    shortDescription: 'Organizational workflow optimization, institutional advisory, and consultancy.',
    description: 'Reflecting our registered Udyam activity under NIC 70200 (Management consultancy activities), Eminent Pathways advises enterprises, educational institutions, and businesses on organizational workflows, process efficiency, and quality management standards.',
    features: [
      'Management advisory and workflow assessment',
      'Quality management alignment and documentation assistance',
      'Standard operating procedure (SOP) development',
      'Process improvement and resource optimization consulting',
    ],
    audience: 'Enterprises, educational institutions, small businesses, and growing organizations.',
    processSteps: [
      'Operational workflow review and gap analysis',
      'Strategic recommendations and documentation',
      'Implementation guidance and workflow alignment',
      'Periodic progress evaluation',
    ],
    iconName: 'TrendingUp',
    badge: 'Business',
  },
  {
    slug: 'hr-services',
    category: 'business',
    categoryLabel: 'Business',
    title: 'HR Services & Solutions',
    shortDescription: 'Staffing assistance, talent acquisition support, and workforce development solutions.',
    description: 'We help organizations build competent, reliable teams through structured HR consulting, candidate sourcing, initial screening, and recruitment workflow support, ensuring organizational culture matches candidate capability.',
    features: [
      'Talent sourcing and screening for diverse business domains',
      'Recruitment cycle coordination and candidate shortlisting',
      'Job role definition and skill requirement documentation',
      'HR policy alignment and staffing consultation',
    ],
    audience: 'Companies, institutions, and startups seeking recruitment support and talent sourcing solutions.',
    processSteps: [
      'Role specification and staffing requirement analysis',
      'Candidate sourcing and preliminary screening',
      'Shortlist presentation and interview scheduling',
      'Onboarding coordination and placement verification',
    ],
    iconName: 'Users',
    badge: 'Business',
  },

  // --- TECHNOLOGY ---
  {
    slug: 'it-services',
    category: 'technology',
    categoryLabel: 'Technology',
    title: 'IT-Related Services',
    shortDescription: 'Software solutions, web development, digital presence, and technical support.',
    description: 'Eminent Pathways delivers practical technology solutions designed to empower institutions and commercial enterprises. Our verified scope encompasses software development, web applications, digital presence, technical support, and IT academic solutions.',
    features: [
      'Software & Web Solutions',
      'Web & Application Development',
      'Digital Marketing Solutions',
      'IT Support & Maintenance',
      'IT Admission Solutions',
    ],
    audience: 'Businesses, educational institutes, and startups requiring reliable software, websites, and technical infrastructure.',
    processSteps: [
      'Technical requirements gathering and scope definition',
      'Solution architecture and UI/UX design',
      'Development, testing, and deployment',
      'Ongoing technical support and maintenance',
    ],
    iconName: 'Code',
    badge: 'Technology',
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'education', label: 'Education' },
  { id: 'career', label: 'Career' },
  { id: 'business', label: 'Business' },
  { id: 'technology', label: 'Technology' },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  if (category === 'all') return servicesData;
  return servicesData.filter((service) => service.category === category);
}
