
import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}
