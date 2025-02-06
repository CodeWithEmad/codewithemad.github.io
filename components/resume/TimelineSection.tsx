import { memo } from 'react'

interface TimelineSectionProps {
  children: React.ReactNode
}

const TimelineSection = memo<TimelineSectionProps>(({ children }) => <div className='relative'>{children}</div>)

TimelineSection.displayName = 'TimelineSection'

export default TimelineSection
