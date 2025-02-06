'use client'
import React from 'react'

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', value: 100 },
    { name: 'Django', value: 100 },
    { name: 'FastAPI', value: 80 },
    { name: 'JavaScript', value: 90 },
    { name: 'TypeScript', value: 80 },
    { name: 'React', value: 70 },
    { name: 'Dart', value: 80 },
    { name: 'Flutter', value: 60 },
    { name: 'SQL', value: 80 },
    { name: 'Neo4j', value: 90 },
    { name: 'Docker', value: 100 },
    { name: 'Kubernetes', value: 50 },
    { name: 'Git', value: 90 },
    { name: 'Leadership', value: 100 },
    { name: 'Creativity', value: 100 },
    { name: 'Communication', value: 95 },
    { name: 'Problem Solving', value: 90 },
    { name: 'Teamwork', value: 85 },
  ]

  const languages = [
    { name: 'Persian', value: 100 },
    { name: 'English', value: 90 },
    { name: 'Deutsch', value: 20 },
  ]

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

        <div className='grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {technicalSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} value={skill.value} />
          ))}
        </div>

        <div className='mt-16'>
          <h3 className='mb-8 text-center text-2xl font-bold text-gray-700 dark:text-gray-100'>Languages</h3>
          <div className='grid gap-8 md:grid-cols-3'>
            {languages.map((language) => (
              <SkillBar key={language.name} name={language.name} value={language.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillBar = ({ name, value }: { name: string; value: number }) => (
  <div className='mb-6'>
    <div className='mb-1 flex justify-between'>
      <span className='text-base font-semibold text-gray-800 dark:text-gray-200'>{name}</span>
      <span className='text-sm text-gray-600 dark:text-gray-400'>{value}%</span>
    </div>
    <div className='h-2.5 rounded-full bg-gray-200 dark:bg-gray-700'>
      <div className='h-2.5 rounded-full bg-blue-600 transition-all duration-1000' style={{ width: `${value}%` }}></div>
    </div>
  </div>
)

export default Skills
