import { memo } from 'react'
import { ResumeItemProps } from '@/types/resume'

const ResumeItem = memo(({ title, organization, date, description, bulletPoints }: ResumeItemProps) => (
  <div className='timeline-item'>
    <div className='timeline-marker'>
      <div className='timeline-circle' role='presentation' />
      <div className='timeline-line' />
    </div>

    <div className='timeline-content'>
      <h4 className='timeline-title'>{title}</h4>
      <p className='timeline-subtitle'>{organization}</p>
      <time className='timeline-date'>{date}</time>
      {description && <p className='timeline-description'>{description}</p>}
      {bulletPoints && (
        <ul className='timeline-list'>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
))

ResumeItem.displayName = 'ResumeItem'

export default ResumeItem
