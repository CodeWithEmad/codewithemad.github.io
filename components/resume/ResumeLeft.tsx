import { memo } from 'react'
import Link from 'next/link'
import TimelineSection from './TimelineSection'
import ResumeItem from './ResumeItem'
import { ResumeData } from '@/types/resume'

interface ResumeLeftProps {
  data: ResumeData
}

const ResumeLeft = memo<ResumeLeftProps>(({ data }) => (
  <div>
    <h3 className='mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100'>Summary</h3>
    <div className='timeline-item'>
      <div className='timeline-marker'>
        <div className='timeline-circle' role='presentation' />
        <div className='timeline-line' />
      </div>
      <div className='timeline-content'>
        <p className='timeline-description'>{data.summary}</p>
      </div>
    </div>

    <h3 className='mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100'>Education</h3>
    <TimelineSection>
      {data.education.map((edu, index) => (
        <ResumeItem
          key={index}
          title={edu.title}
          organization={edu.organization}
          date={edu.date}
          description={edu.description}
        />
      ))}
    </TimelineSection>

    <h3 className='mb-6 mt-12 text-2xl font-bold text-gray-800 dark:text-gray-100'>Projects</h3>
    {data.projects.map((project, index) => (
      <div key={index} className='timeline-item'>
        <div className='timeline-marker'>
          <div className='timeline-circle' role='presentation' />
          <div className='timeline-line' />
        </div>
        <div className='timeline-content'>
          <h4 className='timeline-title'>{project.title}</h4>
          <p className='timeline-description'>{project.description}</p>
          <Link href={project.url} className='text-blue-600 hover:underline' rel='noopener noreferrer' target='_blank'>
            Project URL
          </Link>
        </div>
      </div>
    ))}
  </div>
))

ResumeLeft.displayName = 'ResumeLeft'

export default ResumeLeft
