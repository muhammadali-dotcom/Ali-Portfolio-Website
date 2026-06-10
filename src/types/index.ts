export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "tools";
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  outcome: string;
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface Social {
  platform: string;
  url: string;
  iconName: string;
}
