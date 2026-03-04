
export interface Education {
  period: string;
  school: string;
  college: string;
  major: string;
  degree: string;
}

export interface Publication {
  id: number;
  title: string;
  venue: string;
  details: string;
  tags: string[];
  url?: string;
  authors?: string;
  image?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export interface Project {
  title: string;
  period: string;
  responsibility: string;
}

export interface Exchange {
  date: string;
  content: string;
}
