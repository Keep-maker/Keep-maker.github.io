export interface Education {
  period: string;
  school: string;
  degree: string;
  major: string;
}

export interface Publication {
  id: number;
  title: string;
  venue: string;
  details: string;
  tags: string[];
  featured?: boolean;
  url?: string;
  authors?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export interface Project {
  title: string;
  source: string;
  period: string;
  role: string;
  contribution: string;
  level: 'national' | 'provincial' | 'industry';
}

export interface ResearchDirection {
  title: string;
  description: string;
}

export interface AcademicActivity {
  date: string;
  content: string;
  type: 'conference' | 'service';
}
