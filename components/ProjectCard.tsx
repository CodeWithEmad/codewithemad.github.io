import { Project } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className='mb-6 overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800'>
    <div className='relative h-48 w-full'>
      <Image src={project.image} alt={project.title} fill className='object-cover' />
    </div>
    <div className='p-6'>
      <h3 className='mb-2 text-xl font-bold text-gray-800 dark:text-gray-200'>{project.title}</h3>
      <p className='mb-4 text-gray-600 dark:text-gray-400'>{project.description}</p>
      <div className='mb-4 flex flex-wrap gap-2'>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className='select-none rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex gap-4'>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
          >
            Live Demo
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
          >
            GitHub
          </Link>
        )}
        {project.otherUrls?.map((url, index) => (
          <Link
            key={index}
            href={url.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
          >
            {url.text}
          </Link>
        ))}
      </div>
    </div>
  </div>
)
