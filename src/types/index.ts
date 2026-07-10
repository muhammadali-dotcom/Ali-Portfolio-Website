export type ProjectStatus =
  | "Live"
  | "Case Study Coming Soon"
  | "Private Code"
  | "In Progress"
  | "Personal Project";

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string | null;
  live?: string | null;
  status: ProjectStatus;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "databases" | "realtime" | "devops" | "ai";
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
