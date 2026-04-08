'use client'
import React from 'react'

const Skills = () => {
  const technicalSkills = [
    'Python',
    'TypeScript',
    'JavaScript',
    'Bash',
    'SQL',
    'Dart',
    'Django',
    'FastAPI',
    'Flask',
    'React',
    'Next.js',
    'Flutter',
    'GraphQL',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Neo4j',
    'ElasticSearch',
    'Qdrant',
    'Docker',
    'Kubernetes',
    'AWS',
    'Linux',
    'CI/CD',
    'Terraform',
    'Helm',
    'Prometheus',
    'Grafana',
    'Redis',
    'Kafka',
    'RabbitMQ',
    'AI',
    'LangChain',
    'LangGraph',
    'System Design',
    'Agile',
    'Scrum',
    'Git',
    'Leadership',
    'Creativity',
    'Communication',
    'Problem Solving',
  ]

  const languages = ['Persian', 'English', 'Deutsch']

  return (
    <section id='skills' className='py-8 md:py-16'>
      <div className='container mx-auto px-4' data-aos='fade-up'>
        <div className='mb-16 text-center'>
          <h2 className='section-title'>Skills</h2>
          <p className='section-subtitle'>
            I&apos;m familiar with a variety of programming languages and frameworks, but I&apos;m always adding new
            skills to my repertoire.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {technicalSkills.map((skill) => (
            <div
              key={skill}
              className='rounded-lg bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200'
            >
              {skill}
            </div>
          ))}
        </div>

        <div className='mt-16'>
          <h3 className='mb-8 text-center text-2xl font-bold text-gray-700 dark:text-gray-100'>Languages</h3>
          <div className='grid gap-4 md:grid-cols-3'>
            {languages.map((language) => (
              <div
                key={language}
                className='rounded-lg bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200'
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
