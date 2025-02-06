import { memo } from 'react'
import Link from 'next/link'
import ResumeLeft from './resume/ResumeLeft'
import ResumeRight from './resume/ResumeRight'
import { resumeData } from '@/data/resume'

const Resume = memo(() => {
  return (
    <section id='resume' className='py-8 md:py-16'>
      <div className='container mx-auto px-4' data-aos='fade-up'>
        <div className='mb-16 text-center'>
          <h2 className='section-title'>Resume</h2>
          <p className='section-subtitle'>
            Since the best resumes are open source, feel free to explore mine on{' '}
            <Link
              href='https://github.com/codewithemad/resume'
              className='text-blue-600 hover:underline'
              rel='noopener noreferrer'
              target='_blank'
            >
              GitHub
            </Link>
            . Also, you can download the{' '}
            <Link href='/resume' className='text-blue-600 hover:underline'>
              PDF version
            </Link>
            . Here&apos;s a sneak peak:
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <ResumeLeft data={resumeData} />
          <ResumeRight data={resumeData} />
        </div>
      </div>
    </section>
  )
})

Resume.displayName = 'Resume'

export default Resume
