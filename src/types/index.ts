export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  keyContributions: string[];
  deliverables?: string[];
  technologies: string[];
  featuredBadge?: string;
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    proficiency?: number;
    badgeColor?: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: "programming" | "security" | "legal" | "foundational";
  verifyUrl?: string;
  credentialId?: string;
  skillsLearned: string[];
  description: string;
  verified: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  category: string;
  timeline: string;
  description: string;
  impacts: string[];
  iconName: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  specialization?: string;
  timeline: string;
  scoreLabel: string;
  scoreValue: string;
  location: string;
  highlights: string[];
}
