'use client'

import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='py-8 md:py-16'>
      <div className='container mx-auto px-4' data-aos='fade-up'>
        <div className='mb-16 text-center'>
          <h2 className='section-title'>Projects</h2>
          <p className='section-subtitle'>Here are some of my recent open-source works.</p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div key={index} data-aos='fade-up' data-aos-delay={index * 100}>
              <ProjectCard project={project} />
            </div>
          ))}
          <div data-aos='fade-up' data-aos-delay={projects.length * 100}>
            <div className='mb-6 overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800'>
              <div className='relative flex h-48 w-full items-center justify-center bg-gradient-to-r from-blue-500/20 to-purple-500/20'>
                <span className='text-4xl'>✨</span>
              </div>
              <div className='p-6'>
                <h3 className='mb-2 text-xl font-bold text-gray-800 dark:text-gray-200'>And More Projects</h3>
                <p className='mb-4 text-gray-600 dark:text-gray-400'>
                  Beyond these showcased projects, I`ve worked on various enterprise solutions and innovative
                  experiments that have shaped my expertise.
                </p>
                <div className='mb-4 flex flex-wrap gap-2'>
                  {['AI', 'Enterprise', 'Innovation', 'Research'].map((tech, index) => (
                    <span
                      key={index}
                      className='select-none rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
