export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  otherUrls?: { url: string; text: string }[]
}
