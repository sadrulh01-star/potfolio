import { ProjectItem, SkillCategory, CertificateItem, AchievementItem, EducationItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Sadrul Haque",
  initials: "SH",
  headline: "B.Tech AI/ML Student | Project Manager | Building Intelligent Digital Solutions",
  shortIntro:
    "I am a B.Tech CSE student specializing in Artificial Intelligence and Machine Learning, with a strong interest in project management, AI-powered automation, and building practical digital products. I enjoy turning ideas into organized, user-focused solutions.",
  fullBio: [
    "I am an AI/ML undergraduate and aspiring technology professional at Lovely Professional University, driven by a passion for creating impactful software solutions that solve real-world problems.",
    "My strongest area lies in project management and end-to-end project coordination. I excel at bridging the gap between technical developers, UI/UX designers, and core business requirements to deliver organized, reliable digital products on time.",
    "With a deep interest in AI integration, practical workflow automation, and modern web architectures, I prioritize radical ownership, transparent communication, adaptability, and continuous learning in every initiative I undertake."
  ],
  email: "sadrulh01@gmail.com",
  phone: "+91-9508785816",
  location: "Phagwara, Punjab / Bokaro, Jharkhand, India",
  university: "Lovely Professional University, Phagwara, Punjab",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  cgpa: "8.33",
  socials: {
    github: "https://github.com/sadrulh01-star",
    linkedin: "https://www.linkedin.com/in/sadrulhaque/",
    email: "mailto:sadrulh01@gmail.com",
    phone: "tel:+919508785816"
  },
  quickFacts: [
    { label: "Degree & Specialization", value: "B.Tech CSE, AI & ML Specialization", icon: "GraduationCap" },
    { label: "Institution", value: "Lovely Professional University, Phagwara", icon: "School" },
    { label: "Academic CGPA", value: "8.33 / 10", icon: "Award" },
    { label: "Strongest Area", value: "Project Management & Coordination", icon: "Briefcase" },
    { label: "Practical Domains", value: "AI Automation & Web Development", icon: "Sparkles" },
    { label: "Work Style", value: "Cross-Functional & Ownership-Driven", icon: "Users" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for systems logic, algorithmic problem-solving, and web services.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced", proficiency: 90, badgeColor: "cyan" },
      { name: "JavaScript", level: "Proficient", proficiency: 85, badgeColor: "cyan" },
      { name: "C++", level: "Intermediate", proficiency: 80, badgeColor: "blue" },
      { name: "C", level: "Foundational", proficiency: 75, badgeColor: "violet" }
    ]
  },
  {
    id: "web-tech",
    title: "Web Technologies",
    description: "Modern frontend and markup tooling for building responsive, accessible user interfaces.",
    iconName: "Globe",
    skills: [
      { name: "HTML5", level: "Expert", proficiency: 95, badgeColor: "cyan" },
      { name: "CSS3", level: "Advanced", proficiency: 90, badgeColor: "cyan" },
      { name: "Tailwind CSS", level: "Advanced", proficiency: 88, badgeColor: "blue" },
      { name: "Responsive Design", level: "Expert", proficiency: 92, badgeColor: "violet" },
      { name: "Next.js / React", level: "Proficient", proficiency: 85, badgeColor: "cyan" }
    ]
  },
  {
    id: "tools-db",
    title: "Databases & Development Tools",
    description: "Database engines, version control, UI design, and development environments.",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Proficient", proficiency: 85, badgeColor: "blue" },
      { name: "MongoDB", level: "Proficient", proficiency: 80, badgeColor: "cyan" },
      { name: "Git", level: "Advanced", proficiency: 88, badgeColor: "violet" },
      { name: "GitHub", level: "Advanced", proficiency: 90, badgeColor: "cyan" },
      { name: "Figma", level: "Proficient", proficiency: 82, badgeColor: "violet" }
    ]
  },
  {
    id: "core-interests",
    title: "Core Technical Interests",
    description: "Focus areas where technology and business logic converge into intelligent digital solutions.",
    iconName: "Cpu",
    skills: [
      { name: "Artificial Intelligence", level: "Focus", badgeColor: "cyan" },
      { name: "Machine Learning", level: "Focus", badgeColor: "violet" },
      { name: "AI Integration", level: "Applied", badgeColor: "blue" },
      { name: "Business Automation", level: "Applied", badgeColor: "cyan" },
      { name: "Web Development", level: "Applied", badgeColor: "violet" },
      { name: "Project Management", level: "Core Strength", badgeColor: "cyan" }
    ]
  },
  {
    id: "soft-skills",
    title: "Project Management & Leadership",
    description: "Essential interpersonal and execution capabilities that drive successful cross-team outcomes.",
    iconName: "Users",
    skills: [
      { name: "Project Planning & Scoping", badgeColor: "cyan" },
      { name: "Team Collaboration", badgeColor: "violet" },
      { name: "Stakeholder Communication", badgeColor: "blue" },
      { name: "Problem Solving", badgeColor: "cyan" },
      { name: "Time Management", badgeColor: "violet" },
      { name: "Adaptability & Agility", badgeColor: "blue" },
      { name: "Leadership", badgeColor: "cyan" },
      { name: "Presentation Skills", badgeColor: "violet" },
      { name: "Attention to Detail", badgeColor: "cyan" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "buzz-box-auto",
    title: "Buzz Box-Auto",
    tagline: "AI-Powered Business Websites and Automation Solutions",
    category: "Web Development & AI Automation",
    role: "Co-Founder & Lead Project Coordinator",
    timeline: "Dec 2025 – Jan 2026",
    liveUrl: "https://buzzbox-auto.vercel.app",
    featuredBadge: "Featured Live Platform",
    description:
      "Co-founded and developed Buzz Box-Auto, a digital platform focused on helping businesses strengthen their online presence through custom websites, AI integration, automated workflows, and chatbot-enabled customer interactions. The project was designed around the practical needs of small and medium businesses that want smarter, more scalable digital operations.",
    keyContributions: [
      "Helped lead the project from concept to deployment, connecting business needs with technical execution.",
      "Contributed to user-focused website solutions designed to improve a client’s digital presence.",
      "Explored AI-powered automation to reduce repetitive operational work and support scalable business workflows.",
      "Supported chatbot and AI-integration concepts for improved customer engagement and faster responses.",
      "Worked across UI/UX thinking, development coordination, deployment, and business strategy.",
      "Built an assignment workflow concept that supported 30+ student submissions per course, with file uploads, deadline tracking, and instructor review capabilities."
    ],
    deliverables: [
      "Custom Business Websites",
      "Workflow Automation",
      "AI Integration",
      "Chatbot Experiences",
      "Digital Strategy"
    ],
    technologies: ["Next.js", "React", "AI Integration", "Tailwind CSS", "Workflow Automation", "Vercel"],
    highlights: [
      "Live Production Deployment on Vercel",
      "30+ Submission Assignment System Concept",
      "End-to-end Concept-to-Deployment Leadership"
    ]
  },
  {
    id: "laser-detection-system",
    title: "Laser-Based Human Detection and Alert System",
    tagline: "Sensor-Driven Security & Automated Intrusion Alert Infrastructure",
    category: "Electronics & Embedded Systems",
    role: "Hardware & Logic Developer",
    timeline: "Feb 2026 – May 2026",
    description:
      "Designed and implemented a laser-based human detection and alert system for identifying unauthorized presence in a monitored area. The solution combines sensor-based detection with an automated alert mechanism, demonstrating the practical application of embedded systems, electronics, and software-driven logic in a security setting.",
    keyContributions: [
      "Designed a laser-based sensing approach for real-time human presence detection.",
      "Developed an alert mechanism that responds when the laser path is interrupted.",
      "Applied embedded systems concepts, sensor integration, microcontroller-based control, and signal-processing logic.",
      "Tested and refined the system for reliable operation under varying environmental conditions.",
      "Focused on practical security use cases such as restricted-area monitoring and intrusion alerts."
    ],
    deliverables: [
      "Real-time Intrusion Detection",
      "Automated Siren/Alert Logic",
      "Optical Sensing Integration",
      "Environmental Testing Protocol",
      "Restricted-Area Monitoring"
    ],
    technologies: ["Embedded Systems", "Optical Sensors", "Signal Processing", "Microcontroller Logic", "Hardware Prototyping"],
    highlights: [
      "Real-time Sub-second Detection Logic",
      "Optical Beam Path Resilience Under Ambient Light",
      "End-to-End Alert Trigger Automation"
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-python-part1",
    title: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    issueDate: "July 24, 2026",
    category: "programming",
    verifyUrl: "https://verify.onwingspan.com",
    skillsLearned: ["Python Syntax", "Control Structures", "Data Types", "Procedural Programming", "Logic Building"],
    description: "Comprehensive foundational mastery of core Python programming constructs, data handling, and procedural problem-solving certified by Infosys Springboard.",
    verified: true
  },
  {
    id: "cert-python-part2",
    title: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    issueDate: "July 24, 2026 (Issued July 25, 2026)",
    category: "programming",
    verifyUrl: "https://verify.onwingspan.com",
    skillsLearned: ["Object-Oriented Programming", "Data Structures", "Exception Handling", "File I/O", "Modular Code"],
    description: "Advanced Python paradigms including Object-Oriented design, robust exception handling mechanisms, and modular architecture certified by Infosys Springboard.",
    verified: true
  },
  {
    id: "cert-intro-python",
    title: "Introduction to Python",
    issuer: "Infosys Springboard",
    issueDate: "February 6, 2026",
    category: "programming",
    verifyUrl: "https://verify.onwingspan.com",
    skillsLearned: ["Python Basics", "Algorithms", "Standard Library", "Functional Decomposition"],
    description: "Introductory course validating core computational problem-solving and algorithmic thinking using standard Python libraries.",
    verified: true
  },
  {
    id: "cert-cyber-security",
    title: "Introduction to Cyber Security",
    issuer: "Infosys Springboard",
    issueDate: "March 7, 2026",
    category: "security",
    verifyUrl: "https://verify.onwingspan.com",
    skillsLearned: ["Network Security", "Threat Identification", "Data Protection", "Security Hygiene", "Defense Protocols"],
    description: "In-depth foundation in modern cybersecurity paradigms, cryptographic hygiene, vulnerability mitigation, and defensive security architectures.",
    verified: true
  },
  {
    id: "cert-python-science-grads",
    title: "Programming Fundamentals using Python - Science Graduates Foundation Program",
    issuer: "Infosys Springboard",
    issueDate: "August 2026",
    category: "foundational",
    verifyUrl: "https://verify.onwingspan.com",
    skillsLearned: ["Applied Computing", "Mathematical Modeling", "Analytical Logic", "Algorithmic Analysis"],
    description: "Specialized foundation program covering rigorous mathematical computing, applied algorithms, and systematic programming methodologies.",
    verified: true
  },
  {
    id: "cert-indian-laws",
    title: "Indian Laws: Know Your Rights",
    issuer: "Learning Foundation Online",
    issueDate: "2025-2026",
    category: "legal",
    skillsLearned: ["Citizen Rights", "Constitutional Framework", "Family Law", "Women & Child Protection", "Criminal Law Principles"],
    description: "Comprehensive 5+ hour specialized legal literacy course covering constitutional citizen entitlements, family law safeguards, child and women protection frameworks, and judicial processes.",
    verified: true
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-hackathon",
    title: "Hackathon Event Coordinator",
    role: "Event Coordinator & Operations Lead",
    category: "Leadership & Event Management",
    timeline: "2025 - 2026",
    badge: "Leadership & Execution",
    iconName: "Trophy",
    description:
      "Successfully planned, organized, and coordinated a high-energy collegiate hackathon event. Managed schedule logistics, participant onboarding, team coordination, and real-time operational troubleshooting.",
    impacts: [
      "Streamlined coordination across participating student teams and judging panels.",
      "Gained hands-on experience managing operational pressure and event timelines.",
      "Cultivated high-efficiency team collaboration and proactive problem solving."
    ]
  },
  {
    id: "ach-debate",
    title: "Collegiate Debate Competitor",
    role: "Debater & Critical Thinker",
    category: "Communication & Public Speaking",
    timeline: "2025 - 2026",
    badge: "Public Speaking",
    iconName: "Mic",
    description:
      "Actively represented and competed in university debate competitions, analyzing complex socio-technological topics, constructing rigorous arguments, and mastering structured rebuttals.",
    impacts: [
      "Refined impromptu speaking, audience engagement, and structured presentation skills.",
      "Strengthened analytical reasoning and debate rhetoric under competitive time constraints.",
      "Enhanced persuasive communication applicable to stakeholder management."
    ]
  },
  {
    id: "ach-youth-parliament",
    title: "Youth Parliament Delegate",
    role: "Parliamentary Delegate",
    category: "Civic Awareness & Governance",
    timeline: "2025 - 2026",
    badge: "Civic Leadership",
    iconName: "Landmark",
    description:
      "Participated as an active delegate in university Youth Parliament sessions, engaging in legislative simulations, national policy discussions, bill drafting, and consensus building.",
    impacts: [
      "Deepened understanding of policy formulation, constitutional processes, and civic discourse.",
      "Demonstrated diplomacy, structured floor arguments, and collaborative consensus building.",
      "Built confidence in formal addressing, negotiation, and high-level dialogue."
    ]
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: "edu-lpu",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    specialization: "Specialization in Artificial Intelligence and Machine Learning",
    timeline: "2025 – Present",
    scoreLabel: "Current CGPA",
    scoreValue: "8.33 / 10",
    highlights: [
      "Core coursework in AI, Machine Learning, Data Structures, Algorithms, and Systems Architecture.",
      "Active participant in technical symposiums, hackathon leadership, and project management initiatives.",
      "Focusing on the convergence of AI automation with modern software engineering."
    ]
  },
  {
    id: "edu-intermediate",
    institution: "Dishom Guru Sibu Soren Inter College",
    location: "Bokaro, Jharkhand, India",
    degree: "Higher Secondary Education (Class XII - Science Stream)",
    timeline: "2023 – March 2025",
    scoreLabel: "Percentage Score",
    scoreValue: "85.8%",
    highlights: [
      "Rigorous focus on Mathematics, Physics, Chemistry, and Computer Science.",
      "Maintained consistent academic distinction across all academic terms."
    ]
  },
  {
    id: "edu-matriculation",
    institution: "Mithila Academy Public School",
    location: "Bokaro, Jharkhand, India",
    degree: "Secondary Education (Class X)",
    timeline: "2022 – March 2023",
    scoreLabel: "Percentage Score",
    scoreValue: "86.3%",
    highlights: [
      "Excellence in STEM disciplines and foundational science logic.",
      "Active participant in inter-school academic competitions and science fairs."
    ]
  }
];
