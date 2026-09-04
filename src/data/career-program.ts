import { CareerProgramDeliverable, CareerProgramStep } from '@/types';

export const careerProgramData = {
  hero: {
    badge: 'Flagship Initiative',
    headline: 'Learn IT. Get Interview-Ready. Pay After Placement!',
    tagline: 'Train Today. Get Placed. Pay After Placement.',
    benefitScope:
      'Designed for individuals looking to build practical IT skills, improve interview readiness, and receive placement assistance.',
    ctaPrimary: 'Apply for Free Demo',
    ctaSecondary: 'Explore Program Details',
  },
  sixStepJourney: [
    {
      stepNumber: '01',
      title: 'Learn the Right IT Skills',
      description:
        'Focus on industry-relevant technologies, practical coding exercises, and foundational software engineering principles designed to meet current market demands.',
    },
    {
      stepNumber: '02',
      title: 'Master Interview Preparation',
      description:
        'Train on core technical concepts, problem-solving methodologies, communication refinement, and structured responses for corporate interview rounds.',
    },
    {
      stepNumber: '03',
      title: 'Get Recruitment Training',
      description:
        'Understand recruitment procedures, HR screening expectations, professional etiquette, and workplace readiness standards directly from seasoned mentors.',
    },
    {
      stepNumber: '04',
      title: 'Get Placement Assistance',
      description:
        'Receive proactive placement coordination, tailored resume formatting, profile distribution, and targeted interview opportunity scheduling.',
    },
    {
      stepNumber: '05',
      title: 'Get Placed',
      description:
        'Clear selection rounds, receive your formal employment offer, and transition smoothly into your professional technology role.',
    },
    {
      stepNumber: '06',
      title: 'Pay After Placement',
      description:
        'Honor your training investment only after successfully securing your placement offer, exactly according to program terms.',
    },
  ] as CareerProgramStep[],
  deliverables: [
    {
      title: 'IT Recruitment Training',
      description:
        'Hands-on training aligned with current company recruitment benchmarks, technical rounds, and behavioral evaluations.',
      iconName: 'GraduationCap',
    },
    {
      title: 'Interview Preparation',
      description:
        'Rigorous technical drill sessions, mock interviews, communication coaching, and resume critique.',
      iconName: 'Users',
    },
    {
      title: 'Placement Assistance',
      description:
        'End-to-end interview coordination, profile recommendation, and dedicated placement support.',
      iconName: 'Briefcase',
    },
    {
      title: 'Pay After Placement',
      description:
        'An outcome-oriented model that aligns our success with yours. Terms & eligibility may apply.',
      iconName: 'ShieldCheck',
    },
  ] as CareerProgramDeliverable[],
  termsNotice: {
    title: 'Transparency & Eligibility Notice',
    text: 'Terms & eligibility may apply. Candidate assessment, evaluation criteria, and placement support parameters are reviewed during the initial consultation. Eminent Pathways maintains an outcome-focused philosophy rooted in genuine career enablement.',
  },
  faqs: [
    {
      question: 'What is the Pay After Placement model?',
      answer:
        'The Pay After Placement model allows eligible candidates to undergo structured IT training and interview readiness with payment linked to successful placement as per program agreement terms.',
    },
    {
      question: 'Who is eligible to apply for this program?',
      answer:
        'The program is designed for individuals seeking to build practical IT skills, improve interview readiness, and pursue software career opportunities. Eligibility is determined through an initial profile review and counseling discussion.',
    },
    {
      question: 'What does the interview preparation cover?',
      answer:
        'Interview preparation includes technical question drills, mock interviews, communication skills, resume optimization, and recruitment process guidance.',
    },
    {
      question: 'How can I attend a demo or consultation?',
      answer:
        'You can register your interest via our online consultation form, call us directly at 8777241939, or message us on WhatsApp to schedule an orientation.',
    },
  ],
};
