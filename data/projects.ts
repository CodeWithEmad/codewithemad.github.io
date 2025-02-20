import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    title: 'YouTube Channel',
    description: 'Free programming courses for the Iranian community, mostly on Python basics.',
    image: '/images/projects/youtube-banner.png',
    technologies: ['Programming', 'Python', 'App Development'],
    otherUrls: [
      {
        url: 'https://youtube.com/@codetherapy',
        text: 'YouTube Channel',
      },
    ],
  },
  {
    title: 'Maintenance Helm chart',
    description: 'A Helm chart for deploying a maintenance page while swamped by work.',
    image: '/images/projects/maintenance-helm-chart.svg',
    technologies: ['Kubernetes', 'Helm', 'Caddy'],
    githubUrl: 'https://github.com/CodeWithEmad/helm-charts/tree/master/charts/maintenance',
  },
  {
    title: 'Iranian GitHub',
    description: 'A platform for collecting data related to Iran and hosting Iranian projects.',
    image: '/images/projects/iranian-github.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://iranian-github.ir',
    githubUrl: 'https://github.com/iranian-github',
  },
  {
    title: 'Here to Help',
    description: 'Free resources and services for crisis support: Essential resources in difficult times.',
    image: '/images/projects/here-to-help.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://heretohelp.ir',
    githubUrl: 'https://github.com/iranian-github/here-to-help',
  },
  {
    title: 'Apyrat',
    description: 'A simple, yet elegant cli tool to download Aparat videos and playlists.',
    image: '/images/projects/cli-banner.jpg',
    technologies: ['Python', 'click'],
    githubUrl: 'https://github.com/codewithemad/apyrat',
  },
]
