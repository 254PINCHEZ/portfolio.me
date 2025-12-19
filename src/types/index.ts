export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  liveUrl?: string;
  image: string;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Programming' | 'Web Development' | 'Databases' | 'AI/ML' | 'Networking' | 'Design';
  proficiency: 1 | 2 | 3 | 4 | 5;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
  readTime: number;
}