export interface ResumeItemProps {
  title: string
  organization: string
  date: string
  description?: string
  bulletPoints?: React.ReactNode[]
}

export interface Education {
  title: string
  organization: string
  date: string
  description: string
}

export interface Project {
  title: string
  description: string
  url: string
}

export interface Experience {
  title: string
  organization: string
  date: string
  description?: string
  bulletPoints: (string | { text: string; link?: { url: string; text: string } })[]
}

export interface ResumeData {
  summary: string
  education: Education[]
  certificates: {
    url: string
  }
  experience: Experience[]
}
