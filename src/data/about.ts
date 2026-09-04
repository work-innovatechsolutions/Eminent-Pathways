import { ApproachStage, ValuePillar } from '@/types';

export const aboutData = {
  positioning: 'One-Stop Solution for Education, Career, IT, HR & Placement Services',
  tagline: 'Your Future • Our Guidance • Endless Possibilities',
  mottos: [
    'Train Today. Get Placed. Pay After Placement.',
    'Your Dream. Our Guidance. Together We Achieve.',
  ],
  narrative:
    'Eminent Pathways was established to provide coherent, structured direction across academic choices, technology capabilities, and career progression. Rather than fragmented assistance, we unite educational counseling, IT skill development, interview readiness, and corporate HR solutions into a purposeful, guided journey.',
  approachStages: [
    {
      step: '01',
      title: 'Understand',
      description:
        'We begin with active listening, assessing academic qualifications, individual aptitudes, and personal ambitions to establish a baseline of potential.',
    },
    {
      step: '02',
      title: 'Explore',
      description:
        'We research and map viable opportunities across admissions, specialized IT skill tracks, and emerging industry demands matching your profile.',
    },
    {
      step: '03',
      title: 'Guide',
      description:
        'We deliver transparent, structured recommendations and actionable roadmaps, eliminating confusion in educational and professional decisions.',
    },
    {
      step: '04',
      title: 'Support',
      description:
        'From documentation review and application tracking to technical training and mock interview rounds, we stand beside candidates at every hurdle.',
    },
    {
      step: '05',
      title: 'Achieve',
      description:
        'Celebrating successful institutional admissions, career placements, and organizational advancements realized through focused dedication.',
    },
  ] as ApproachStage[],
  valuePillars: [
    {
      title: 'Professional & Personalized Guidance',
      description:
        'Tailored counseling adapted to each student’s academic aptitude and each enterprise’s operational objectives.',
      iconName: 'UserCheck',
    },
    {
      title: 'Education & Career-Focused Solutions',
      description:
        'Seamless continuity connecting school education, undergraduate degrees, IT training, and corporate employment.',
      iconName: 'Target',
    },
    {
      title: 'End-to-End Support',
      description:
        'Hands-on assistance spanning profile assessment, application documentation, interview readiness, and post-admission onboarding.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Student & Professional Assistance',
      description:
        'Structured mentorship catering equally to young learners, college aspirants, and working professionals seeking career transitions.',
      iconName: 'Award',
    },
    {
      title: 'IT, HR & Placement Solutions',
      description:
        'Integrated technical development, enterprise staffing consulting, and placement support under one roof.',
      iconName: 'Layers',
    },
    {
      title: 'Reliable & Goal-Oriented Service',
      description:
        'Grounded in verified quality standards, ISO 9001:2015 processes, and formal Udyam MSME accountability.',
      iconName: 'CheckCircle2',
    },
  ] as ValuePillar[],
  audiencePanels: [
    {
      category: 'For Students & Parents',
      tagline: 'School, College & University Admissions',
      points: [
        'Unbiased institutional guidance and curriculum mapping',
        'Stream selection and entrance process assistance',
        'Document verification and admission timeline tracking',
      ],
      ctaText: 'Explore Admission Guidance',
      ctaHref: '/services',
    },
    {
      category: 'For Job Seekers & Professionals',
      tagline: 'IT Career Program & Placement Support',
      points: [
        'Pay After Placement IT training program',
        'Mock interviews and corporate recruitment readiness',
        'Personalized career counseling and transition guidance',
      ],
      ctaText: 'Explore IT Career Program',
      ctaHref: '/career',
    },
    {
      category: 'For Enterprises & Institutions',
      tagline: 'Management, HR & IT Solutions',
      points: [
        'Management consultancy under registered NIC 70200',
        'Talent sourcing, recruitment support, and HR solutions',
        'Software & web solutions and IT maintenance',
      ],
      ctaText: 'Explore Business Solutions',
      ctaHref: '/services',
    },
  ],
};
