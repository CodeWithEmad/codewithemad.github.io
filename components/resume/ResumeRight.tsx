import { memo } from 'react'
import Link from 'next/link'
import TimelineSection from './TimelineSection'
import ResumeItem from './ResumeItem'
import { ResumeData } from '@/types/resume'

interface ResumeRightProps {
  data: ResumeData
}

const ResumeRight = memo<ResumeRightProps>(({ data }) => (
  <div>
    <h3 className='mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100'>Professional Experience</h3>
    <TimelineSection>
      {data.experience.map((exp, index) => (
        <ResumeItem
          key={index}
          title={exp.title}
          organization={exp.organization}
          date={exp.date}
          description={exp.description}
          bulletPoints={exp.bulletPoints.map((point) => {
            if (typeof point === 'string') {
              return point
            }
            const { text, link } = point
            if (!link) return text

            const [before, after] = text.split(link.text)
            return (
              <>
                {before}
                <Link
                  href={link.url}
                  className='text-blue-600 hover:underline'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {link.text}
                </Link>
                {after}
              </>
            )
          })}
        />
      ))}
    </TimelineSection>
  </div>
))

ResumeRight.displayName = 'ResumeRight'

export default ResumeRight
